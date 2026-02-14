export interface FeatureComparisonRow {
  feature: string;
  alternative: string;
  akeyless: string;
}

export interface AkeylessComparison {
  summary: string;
  whenToChooseThis: string[];
  whenToChooseAkeyless: string[];
  featureComparison: FeatureComparisonRow[];
  verdict: string;
}

export interface Alternative {
  id: string;
  slug: string;
  name: string;
  website: string;
  description: string;
  shortDescription: string;
  category: string;
  pricing: string;
  pricingModel: string;
  bestFor: string;
  features: string[];
  pros: string[];
  cons: string[];
  openSource: boolean;
  cloudHosted: boolean;
  selfHosted: boolean;
  rating?: number;
  yearFounded?: number;
  useCases: string[];
  akeylessComparison: AkeylessComparison;
}
