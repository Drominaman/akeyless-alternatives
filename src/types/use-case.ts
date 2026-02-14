import { FAQItem } from './category';

export interface UseCaseRanking {
  alternativeId: string;
  rank: number;
  reason: string;
}

export interface WorkflowStep {
  step: number;
  title: string;
  description: string;
}

export interface UseCase {
  slug: string;
  title: string;
  headline: string;
  description: string;
  metaDescription: string;
  rankings: UseCaseRanking[];
  workflowSteps: WorkflowStep[];
  faqs: FAQItem[];
}
