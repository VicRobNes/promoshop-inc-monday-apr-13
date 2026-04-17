@description('Name of the Log Analytics workspace.')
param name string

@description('Azure region for the workspace.')
param location string

@description('Tags applied to the workspace.')
param tags object

@description('Daily ingestion cap in GB. -1 disables the cap.')
param dailyQuotaGb int = -1

@description('Retention period in days.')
@minValue(30)
@maxValue(730)
param retentionInDays int = 30

resource workspace 'Microsoft.OperationalInsights/workspaces@2022-10-01' = {
  name: name
  location: location
  tags: tags
  properties: {
    sku: {
      name: 'PerGB2018'
    }
    retentionInDays: retentionInDays
    workspaceCapping: {
      dailyQuotaGb: dailyQuotaGb
    }
    features: {
      enableLogAccessUsingOnlyResourcePermissions: true
    }
    publicNetworkAccessForIngestion: 'Enabled'
    publicNetworkAccessForQuery: 'Enabled'
  }
}

@description('Resource ID of the Log Analytics workspace.')
output id string = workspace.id

@description('Name of the Log Analytics workspace.')
output name string = workspace.name

@description('Customer ID (GUID) of the Log Analytics workspace.')
output customerId string = workspace.properties.customerId
