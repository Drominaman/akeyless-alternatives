import { UseCase } from '@/types/use-case';
import useCasesData from '@/data/use-cases.json';

const useCases = useCasesData as UseCase[];

export function getAllUseCases(): UseCase[] {
  return useCases;
}

export function getUseCaseBySlug(slug: string): UseCase | undefined {
  return useCases.find(uc => uc.slug === slug);
}
