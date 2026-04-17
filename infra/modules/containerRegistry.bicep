@description('Name of the Azure Container Registry. Globally unique, 5-50 chars, alphanumeric only.')
@minLength(5)
@maxLength(50)
param name string

@description('Azure region for the container registry.')
param location string

@description('Tags applied to the container registry.')
param tags object

@description('SKU of the container registry.')
@allowed([
  'Basic'
  'Standard'
  'Premium'
])
param skuName string = 'Basic'

@description('Whether to enable the admin user. Prefer managed identities; keep disabled.')
param adminUserEnabled bool = false

resource registry 'Microsoft.ContainerRegistry/registries@2023-11-01-preview' = {
  name: name
  location: location
  tags: tags
  sku: {
    name: skuName
  }
  identity: {
    type: 'SystemAssigned'
  }
  properties: {
    adminUserEnabled: adminUserEnabled
    publicNetworkAccess: 'Enabled'
    anonymousPullEnabled: false
    zoneRedundancy: 'Disabled'
  }
}

@description('Resource ID of the container registry.')
output id string = registry.id

@description('Name of the container registry.')
output name string = registry.name

@description('Fully qualified login server (e.g. promoshopdev.azurecr.io).')
output loginServer string = registry.properties.loginServer
