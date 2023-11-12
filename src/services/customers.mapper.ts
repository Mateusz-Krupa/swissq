import { Asset, Client, MappedClient } from "@/components/types";

// base on 12.11.2023 - we should use API for this 
const USD_Exchange_Rates = {
  "USD": 1, // 1 USD = 1 USD
  "CHF": 0.89950, // 1 USD = 0.89950 CHF
  "EUR": 0.93765, // 1 USD = 0.93765 EUR
  "GBP": 0.815906 // 1 USD = 0.815906 GBP
} as const;

export function calculateCapitalGainPerAsset(asset: Asset): number {
  const capitalGainToNumber = parseInt(asset.capitalGainPerAsset);
  const quantity = asset.quantity;
  const currency = asset.currency;
  const exchangeRate = USD_Exchange_Rates[currency as keyof typeof USD_Exchange_Rates];
  const totalCapitalGain = capitalGainToNumber * quantity * exchangeRate;
  return totalCapitalGain;
}

export function calculateTotalCapitalGain(assets: Asset[]): number {
  return assets.reduce((total, asset) => total + calculateCapitalGainPerAsset(asset), 0);
}

export function mapClients(data: any): MappedClient[] {
  const clients: Client[] = data as Client[];

  return clients.map(client => {
    const id = client.clientId;
    const fullName = `${client.firstName} ${client.lastName}`;
    const customerRiskProfile = client.riskProfile;
    const customerNetWorth = client.annualIncome; // Assuming annualIncome is net worth
    const portfolios = client.portfolios;
    // Initialize capitalGain and restrictionStatus
    let capitalGain = 0;
    let restrictionStatus = 'unknown';
    
    if (portfolios.length > 0) {
      portfolios.forEach(portfolio => {
        restrictionStatus = portfolio.restrictionStatus;
        capitalGain += calculateTotalCapitalGain(portfolio.assets);
      });
    }

    return {
      id,
      fullName,
      customerRiskProfile,
      customerNetWorth,
      restrictionStatus,
      capitalGain,
      portfolios
    };
  });
}
