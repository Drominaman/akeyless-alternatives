import type { MetadataRoute } from 'next';
import { getAllAlternatives } from '@/lib/alternatives';
import { getAllCategories } from '@/lib/categories';
import { getAllUseCases } from '@/lib/use-cases';

const BASE_URL = 'https://www.akeyless-alternatives.com';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const home: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];

  const comparisons: MetadataRoute.Sitemap = getAllAlternatives().map((alt) => ({
    url: `${BASE_URL}/akeyless-vs-${alt.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const categories: MetadataRoute.Sitemap = getAllCategories().map((cat) => ({
    url: `${BASE_URL}/${cat.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  const useCases: MetadataRoute.Sitemap = getAllUseCases().map((uc) => ({
    url: `${BASE_URL}/${uc.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.8,
  }));

  return [...home, ...comparisons, ...categories, ...useCases];
}
