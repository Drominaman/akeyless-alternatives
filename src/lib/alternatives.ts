import { Alternative } from '@/types/alternative';
import alternativesData from '@/data/alternatives.json';

const alternatives = alternativesData as Alternative[];

export function getAllAlternatives(): Alternative[] {
  return alternatives;
}

export function getAlternativeById(id: string): Alternative | undefined {
  return alternatives.find(alt => alt.id === id);
}

export function getAlternativeBySlug(slug: string): Alternative | undefined {
  return alternatives.find(alt => alt.slug === slug);
}

export function getAlternativesByIds(ids: string[]): Alternative[] {
  return ids.map(id => alternatives.find(alt => alt.id === id)).filter((alt): alt is Alternative => alt !== undefined);
}

export function getAllSlugs(): string[] {
  return alternatives.map(alt => alt.slug);
}
