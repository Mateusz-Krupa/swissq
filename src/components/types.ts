export interface Asset {
  isin: string;
  assetType: string;
  assetName: string;
  location: string;
  quantity: number;
  currency: string;
  valuePerAsset: number;
  capitalGainPerAsset: string;
  associatedRiskPerAsset: number;
}

export interface Portfolio {
  portfolioId: string;
  portfolioName: string;
  restrictionStatus: string;
  assets: Asset[];
}

export interface Client {
  clientId: string;
  firstName: string;
  lastName: string;
  annualIncome: number;
  riskProfile: number;
  residence: string;
  currency: string;
  clientType: string;
  portfolios: Portfolio[];
}

export interface ClientListProps {
  clients: Client[];
}

export interface MappedClient {
  id: string;
  fullName: string;
  customerRiskProfile: number;
  customerNetWorth: number;
  restrictionStatus: string;
  capitalGain: number;
  portfolios: Portfolio[];
}

export interface AssetProps {
  isin: string;
  assetName: string;
  assetType: string;
  location: string;
  quantity: number;
  currency: string;
  valuePerAsset: number;
  capitalGainPerAsset: string;
  associatedRiskPerAsset: number;
}