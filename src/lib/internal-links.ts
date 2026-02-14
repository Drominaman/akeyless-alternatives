import { getAllAlternatives } from './alternatives';
import { getAllCategories } from './categories';
import { getAllUseCases } from './use-cases';

export interface InternalLink {
  href: string;
  title: string;
  description: string;
  type: 'comparison' | 'category' | 'use-case' | 'home';
}

const BASE_URL = 'https://www.akeyless-alternatives.com';

export function getComparisonLinks(): InternalLink[] {
  return getAllAlternatives().map(alt => ({
    href: `/akeyless-vs-${alt.slug}`,
    title: `Akeyless vs ${alt.name}`,
    description: alt.shortDescription,
    type: 'comparison' as const,
  }));
}

export function getCategoryLinks(): InternalLink[] {
  return getAllCategories().map(cat => ({
    href: `/${cat.slug}`,
    title: cat.title,
    description: cat.metaDescription,
    type: 'category' as const,
  }));
}

export function getUseCaseLinks(): InternalLink[] {
  return getAllUseCases().map(uc => ({
    href: `/${uc.slug}`,
    title: uc.title,
    description: uc.metaDescription,
    type: 'use-case' as const,
  }));
}

export function getAllInternalLinks(): InternalLink[] {
  return [
    ...getComparisonLinks(),
    ...getCategoryLinks(),
    ...getUseCaseLinks(),
  ];
}

export function getRelatedLinksForComparison(currentSlug: string): InternalLink[] {
  const alt = getAllAlternatives().find(a => a.slug === currentSlug);
  if (!alt) return [];

  const links: InternalLink[] = [];

  // Other comparison pages
  const otherComparisons = getComparisonLinks().filter(l => l.href !== `/akeyless-vs-${currentSlug}`);
  links.push(...otherComparisons.slice(0, 4));

  // Matching categories
  const categories = getAllCategories();
  for (const cat of categories) {
    if (cat.alternativeIds.includes(alt.id)) {
      links.push({
        href: `/${cat.slug}`,
        title: cat.title,
        description: cat.metaDescription,
        type: 'category',
      });
    }
  }

  // Matching use cases
  const useCases = getAllUseCases();
  for (const uc of useCases) {
    if (uc.rankings.some(r => r.alternativeId === alt.id)) {
      links.push({
        href: `/${uc.slug}`,
        title: uc.title,
        description: uc.metaDescription,
        type: 'use-case',
      });
    }
  }

  return links.slice(0, 8);
}

export function getRelatedLinksForCategory(currentSlug: string): InternalLink[] {
  const cat = getAllCategories().find(c => c.slug === currentSlug);
  if (!cat) return [];

  const links: InternalLink[] = [];

  // Comparison pages for listed tools
  for (const altId of cat.alternativeIds) {
    const alt = getAllAlternatives().find(a => a.id === altId);
    if (alt) {
      links.push({
        href: `/akeyless-vs-${alt.slug}`,
        title: `Akeyless vs ${alt.name}`,
        description: alt.shortDescription,
        type: 'comparison',
      });
    }
  }

  // Other categories
  const otherCategories = getCategoryLinks().filter(l => l.href !== `/${currentSlug}`);
  links.push(...otherCategories);

  // Related use cases
  links.push(...getUseCaseLinks().slice(0, 2));

  return links.slice(0, 8);
}

export function getRelatedLinksForUseCase(currentSlug: string): InternalLink[] {
  const uc = getAllUseCases().find(u => u.slug === currentSlug);
  if (!uc) return [];

  const links: InternalLink[] = [];

  // Comparison pages for top ranked tools
  for (const ranking of uc.rankings.slice(0, 3)) {
    const alt = getAllAlternatives().find(a => a.id === ranking.alternativeId);
    if (alt) {
      links.push({
        href: `/akeyless-vs-${alt.slug}`,
        title: `Akeyless vs ${alt.name}`,
        description: alt.shortDescription,
        type: 'comparison',
      });
    }
  }

  // Relevant categories
  links.push(...getCategoryLinks().slice(0, 2));

  // Other use cases
  const otherUseCases = getUseCaseLinks().filter(l => l.href !== `/${currentSlug}`);
  links.push(...otherUseCases);

  return links.slice(0, 8);
}

export function getAbsoluteUrl(path: string): string {
  return `${BASE_URL}${path}`;
}
