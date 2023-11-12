import { mapClients } from "./customers.mapper";

test('should map client data correctly', () => {
  const clients = [{
    clientId: '1',
    firstName: 'John',
    lastName: 'Doe',
    riskProfile: 'high',
    annualIncome: 100000,
    portfolios: [
      {
        restrictionStatus: 'restricted',
        assets: [
          { capitalGainPerAsset: '100', quantity: 2, currency: 'USD' },
          { capitalGainPerAsset: '200', quantity: 3, currency: 'USD' },
        ],
      },
    ],
  }];

  const result = mapClients(clients); // replace with your actual mapping function name

  expect(result).toEqual([{
    id: '1',
    fullName: 'John Doe',
    customerRiskProfile: 'high',
    customerNetWorth: 100000,
    restrictionStatus: 'restricted',
    capitalGain: 800,
    portfolios: clients[0].portfolios,
  }]);
});

test('should handle clients with no portfolios', () => {
  const clients = [{
    clientId: '1',
    firstName: 'John',
    lastName: 'Doe',
    riskProfile: 'high',
    annualIncome: 100000,
    portfolios: [],
  }];

  const result = mapClients(clients); // replace with your actual mapping function name

  expect(result).toEqual([{
    id: '1',
    fullName: 'John Doe',
    customerRiskProfile: 'high',
    customerNetWorth: 100000,
    restrictionStatus: 'unknown',
    capitalGain: 0,
    portfolios: [],
  }]);
});