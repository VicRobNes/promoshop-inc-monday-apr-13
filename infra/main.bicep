// Phase 0 — Foundation infrastructure for PromoShop.
// Creates the resource group and all Tier-1 resources required by later phases.
targetScope = 'subscription'

@description('Short environment name (e.g. dev, staging, prod). Forms part of resource names.')
@minLength(1)
@maxLength(16)
param environmentName string

@description('Azure region for all resources. Defaults to Canada Central.')
param location string = 'canadacentral'

@description('AAD object ID of the human user (or service principal) running azd — receives contributor RBAC on the RG so they can manage resources post-deploy. Leave empty to skip.')
param principalId string = ''

@description('Type of the deploying principal. Defaults to "User"; set to "ServicePrincipal" when running in CI.')
@allowed([
  'User'
  'Group'
  'ServicePrincipal'
])
param principalType string = 'User'

// ---------- Phase 2: Entra External ID parameters ----------
@description('Phase 2 — Tenant ID of the Entra External ID (CIAM) tenant. Portal-only bootstrap; leave empty until docs/runbooks/phase-2-auth.md has been walked.')
param externalIdTenantId string = ''

@description('Phase 2 — Domain of the Entra External ID tenant (e.g. promoshop.ciamlogin.com). Leave empty to keep placeholder outputs.')
param externalIdTenantDomain string = ''

@description('Phase 2 — App (client) ID of the SPA App Registration in the External ID tenant. Provision via az CLI (see runbook) and pass it here on the next `azd provision`.')
param externalIdClientId string = ''

@description('Phase 2 — Name of the sign-in/sign-up user flow. Defaults to Entra External ID\'s convention.')
param externalIdUserFlowName string = 'B2C_1_signupsignin'

// ---------- Shared values ----------
var abbrs = loadJsonContent('abbreviations.json')
var resourceToken = toLower(uniqueString(subscription().id, environmentName, location))

var tags = {
  'azd-env-name': environmentName
  project: 'promoshop'
  phase: '0-foundation'
  managedBy: 'azd'
}

// Static Web App is only available in a subset of regions; Canada Central is not one.
// Choose the nearest available region (Central US) for SWA while the rest stay in canadacentral.
var staticWebAppLocation = 'centralus'

// ---------- Resource group ----------
resource resourceGroup 'Microsoft.Resources/resourceGroups@2023-07-01' = {
  name: 'rg-promoshop-${environmentName}'
  location: location
  tags: tags
}

// ---------- Observability ----------
module logAnalytics 'modules/logAnalytics.bicep' = {
  name: 'logAnalytics'
  scope: resourceGroup
  params: {
    name: '${abbrs.operationalInsightsWorkspaces}promoshop-${environmentName}-${resourceToken}'
    location: location
    tags: tags
  }
}

module appInsights 'modules/appInsights.bicep' = {
  name: 'appInsights'
  scope: resourceGroup
  params: {
    name: '${abbrs.insightsComponents}promoshop-${environmentName}-${resourceToken}'
    location: location
    tags: tags
    workspaceId: logAnalytics.outputs.id
  }
}

// ---------- Secrets ----------
module keyVault 'modules/keyVault.bicep' = {
  name: 'keyVault'
  scope: resourceGroup
  params: {
    // Key Vault names: 3-24 chars, alphanumeric + hyphens, globally unique.
    name: take('${abbrs.keyVaultVaults}pshop-${environmentName}-${resourceToken}', 24)
    location: location
    tags: tags
  }
}

// ---------- Storage ----------
module storage 'modules/storage.bicep' = {
  name: 'storage'
  scope: resourceGroup
  params: {
    // Storage names: 3-24 chars, lowercase alphanumeric only (no hyphens).
    name: take(toLower('${abbrs.storageStorageAccounts}pshop${environmentName}${resourceToken}'), 24)
    location: location
    tags: tags
  }
}

// ---------- Database ----------
module cosmos 'modules/cosmos.bicep' = {
  name: 'cosmos'
  scope: resourceGroup
  params: {
    name: take('${abbrs.documentDBDatabaseAccounts}promoshop-${environmentName}-${resourceToken}', 44)
    location: location
    tags: tags
  }
}

// ---------- Static Web App (frontend host) ----------
module staticWebApp 'modules/staticWebApp.bicep' = {
  name: 'staticWebApp'
  scope: resourceGroup
  params: {
    name: '${abbrs.webStaticSites}promoshop-${environmentName}-${resourceToken}'
    location: staticWebAppLocation
    tags: tags
    // Repo URL intentionally blank: deployment token flow is used (see azure-deploy.yml).
    repositoryUrl: ''
    branch: 'main'
    appLocation: '.'
    apiLocation: 'api'
    outputLocation: '.next'
    skipAppBuild: false
  }
}

// ---------- Container Registry ----------
// Intentionally not provisioned in main.bicep. Azure Container Registry has
// NO free tier — even Basic SKU bills ~$5/mo fixed regardless of use, which
// conflicts with the "zero out-of-pocket" constraint. The module at
// `modules/containerRegistry.bicep` is kept for future opt-in (e.g. if a
// Container Apps phase lands and the cost is justified) but is not wired in.

// ---------- Managed identity + RBAC ----------
module managedIdentity 'modules/managedIdentity.bicep' = {
  name: 'managedIdentity'
  scope: resourceGroup
  params: {
    name: '${abbrs.managedIdentityUserAssignedIdentities}promoshop-${environmentName}-${resourceToken}'
    location: location
    tags: tags
    keyVaultId: keyVault.outputs.id
    storageAccountId: storage.outputs.id
    cosmosAccountName: cosmos.outputs.name
  }
}

// ---------- Phase 2: Entra External ID (CIAM) ----------
// Pass-through module: emits AUTH_CLIENT_ID / AUTH_AUTHORITY outputs that are
// either the real values (once the tenant + App Registration have been
// provisioned out-of-band via the runbook) or placeholders. The module also
// persists the two values into Key Vault so SWA + GitHub Actions can pull
// them without a checked-in secret.
module entraExternalId 'modules/entraExternalId.bicep' = {
  name: 'entraExternalId'
  scope: resourceGroup
  params: {
    environmentName: environmentName
    externalIdTenantId: externalIdTenantId
    externalIdTenantDomain: externalIdTenantDomain
    preProvisionedClientId: externalIdClientId
    userFlowName: externalIdUserFlowName
    keyVaultName: keyVault.outputs.name
  }
}

// ---------- Optional: grant the deploying principal Contributor on the RG ----------
var rgContributorRoleId = 'b24988ac-6180-42a0-ab88-20f7382dd24c'

module principalRgContributor 'modules/roleAssignment.bicep' = if (!empty(principalId)) {
  name: 'principalRgContributor'
  scope: resourceGroup
  params: {
    principalId: principalId
    principalType: principalType
    roleDefinitionId: rgContributorRoleId
    resourceGroupName: resourceGroup.name
  }
}

// ---------- Outputs ----------
@description('Name of the resource group that holds all Phase 0 resources.')
output AZURE_RESOURCE_GROUP string = resourceGroup.name

@description('Azure region the resources were deployed into.')
output AZURE_LOCATION string = location

@description('Resource ID of the Log Analytics workspace.')
output LOG_ANALYTICS_WORKSPACE_ID string = logAnalytics.outputs.id

@description('Resource ID of the Application Insights component.')
output APPLICATION_INSIGHTS_ID string = appInsights.outputs.id

@description('Application Insights connection string.')
output APPLICATION_INSIGHTS_CONNECTION_STRING string = appInsights.outputs.connectionString

@description('Resource ID of the Key Vault.')
output KEY_VAULT_ID string = keyVault.outputs.id

@description('Key Vault DNS endpoint.')
output KEY_VAULT_URI string = keyVault.outputs.vaultUri

@description('Resource ID of the Storage Account.')
output STORAGE_ACCOUNT_ID string = storage.outputs.id

@description('Primary blob endpoint of the Storage Account.')
output STORAGE_BLOB_ENDPOINT string = storage.outputs.primaryBlobEndpoint

@description('Primary file endpoint of the Storage Account.')
output STORAGE_FILE_ENDPOINT string = storage.outputs.primaryFileEndpoint

@description('Resource ID of the Cosmos DB account.')
output COSMOS_ACCOUNT_ID string = cosmos.outputs.id

@description('Cosmos DB document endpoint URI.')
output COSMOS_DOCUMENT_ENDPOINT string = cosmos.outputs.documentEndpoint

@description('Resource ID of the Static Web App.')
output STATIC_WEB_APP_ID string = staticWebApp.outputs.id

@description('Static Web App default hostname.')
output STATIC_WEB_APP_HOSTNAME string = staticWebApp.outputs.defaultHostname

@description('Static Web App resource name — use this with `az staticwebapp secrets list` to fetch the deployment token.')
output STATIC_WEB_APP_NAME string = staticWebApp.outputs.name

@description('Resource ID of the user-assigned managed identity.')
output MANAGED_IDENTITY_ID string = managedIdentity.outputs.id

@description('Client ID of the managed identity (for DefaultAzureCredential).')
output MANAGED_IDENTITY_CLIENT_ID string = managedIdentity.outputs.clientId

@description('Principal (object) ID of the managed identity.')
output MANAGED_IDENTITY_PRINCIPAL_ID string = managedIdentity.outputs.principalId

// ---------- Phase 2: Entra External ID outputs ----------
@description('Phase 2 — App (client) ID of the SPA App Registration. Empty until runbook is walked.')
output AUTH_CLIENT_ID string = entraExternalId.outputs.AUTH_CLIENT_ID

@description('Phase 2 — OIDC authority URL for MSAL.')
output AUTH_AUTHORITY string = entraExternalId.outputs.AUTH_AUTHORITY

@description('Phase 2 — Redirect URIs that should be registered on the App Registration SPA platform.')
output AUTH_REDIRECT_URIS array = entraExternalId.outputs.REDIRECT_URIS
