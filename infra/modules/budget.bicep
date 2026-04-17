// Subscription-scope monthly budget with email alerts.
//
// Rationale: the $200 Azure free-grant + "zero out-of-pocket" constraint
// means any accidental paid-tier drift must be caught early. This sets a
// $150 monthly budget (safely below the $200 grant) and fires three
// progressive email alerts at 50% / 80% / 100% of actual spend.
//
// `Microsoft.Consumption/budgets` lives at subscription scope. Caller must
// invoke this module with `scope: subscription()`.
targetScope = 'subscription'

@description('Name of the budget resource. Must be unique within the subscription.')
param name string = 'promoshop-monthly-budget'

@description('Monthly budget amount in USD. Defaults to 150 to stay well under the $200 free grant.')
param amount int = 150

@description('Email addresses that receive budget alert notifications.')
param contactEmails array

@description('First day of the month the budget becomes active (YYYY-MM-01 format). Defaults to the first of the current UTC month.')
param startDate string = '${utcNow('yyyy')}-${utcNow('MM')}-01'

@description('End date of the budget period. Defaults to five years out.')
param endDate string = '${string(int(utcNow('yyyy')) + 5)}-12-31'

resource budget 'Microsoft.Consumption/budgets@2023-05-01' = {
  name: name
  properties: {
    category: 'Cost'
    amount: amount
    timeGrain: 'Monthly'
    timePeriod: {
      startDate: startDate
      endDate: endDate
    }
    notifications: {
      warning50: {
        enabled: true
        operator: 'GreaterThan'
        threshold: 50
        thresholdType: 'Actual'
        contactEmails: contactEmails
        locale: 'en-us'
      }
      warning80: {
        enabled: true
        operator: 'GreaterThan'
        threshold: 80
        thresholdType: 'Actual'
        contactEmails: contactEmails
        locale: 'en-us'
      }
      critical100: {
        enabled: true
        operator: 'GreaterThan'
        threshold: 100
        thresholdType: 'Actual'
        contactEmails: contactEmails
        locale: 'en-us'
      }
    }
  }
}

@description('Resource ID of the budget.')
output id string = budget.id

@description('Name of the budget.')
output name string = budget.name
