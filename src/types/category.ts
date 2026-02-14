export interface FAQItem {
  question: string;
  answer: string;
}

export interface CategoryRecommendation {
  alternativeId: string;
  reason: string;
}

export interface Category {
  slug: string;
  title: string;
  headline: string;
  description: string;
  metaDescription: string;
  alternativeIds: string[];
  recommendations: CategoryRecommendation[];
  faqs: FAQItem[];
}
