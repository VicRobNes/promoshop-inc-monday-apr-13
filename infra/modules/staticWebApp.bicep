@description('Name of the Static Web App.')
param name string

@description('Azure region for the Static Web App. Note: SWA is only available in a subset of regions.')
@allowed([
  'centralus'
  'eastus2'
  'eastasia'
  'westeurope'
  'westus2'
])
param location string = 'centralus'

@description('Tags applied to the Static Web App.')
param tags object

@description('SKU tier for the Static Web App.')
@allowed([
  'Free'
  'Standard'
])
param skuName string = 'Free'

@description('Repository URL. Leave empty to configure deployment separately (e.g. via deployment token in GitHub Actions).')
param repositoryUrl string = ''

@description('Branch to build from.')
param branch string = 'main'

@description('Path within the repo containing the application code.')
param appLocation string = '.'

@description('Path within the repo containing the Azure Functions API code.')
param apiLocation string = 'api'

@description('Build output path relative to app_location.')
param outputLocation string = '.next'

@description('If true, the SWA GitHub Action will skip the build step and deploy pre-built artifacts.')
param skipAppBuild bool = false

var hasRepository = !empty(repositoryUrl)

resource staticWebApp 'Microsoft.Web/staticSites@2023-12-01' = {
  name: name
  location: location
  tags: tags
  sku: {
    name: skuName
    tier: skuName
  }
  properties: {
    repositoryUrl: hasRepository ? repositoryUrl : null
    branch: hasRepository ? branch : null
    buildProperties: {
      appLocation: appLocation
      apiLocation: apiLocation
      outputLocation: outputLocation
      skipGithubActionWorkflowGeneration: true
    }
    allowConfigFileUpdates: true
    stagingEnvironmentPolicy: 'Enabled'
    enterpriseGradeCdnStatus: 'Disabled'
  }
}

@description('Resource ID of the Static Web App.')
output id string = staticWebApp.id

@description('Name of the Static Web App.')
output name string = staticWebApp.name

@description('Default hostname of the Static Web App (e.g. nice-wave-xxxxx.azurestaticapps.net).')
output defaultHostname string = staticWebApp.properties.defaultHostname

@description('Build configuration constants echoed back for documentation.')
output buildConfig object = {
  appLocation: appLocation
  apiLocation: apiLocation
  outputLocation: outputLocation
  skipAppBuild: skipAppBuild
}
