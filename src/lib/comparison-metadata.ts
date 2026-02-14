import { Metadata } from 'next';
import { getAlternativeBySlug } from '@/lib/alternatives';

export function getComparisonMetadata(slug: string): Metadata {
  const alternative = getAlternativeBySlug(slug);
  if (!alternative) return {};

  const title = `Akeyless vs ${alternative.name} (2026) — Which Is Better?`;
  const description = `Compare Akeyless vs ${alternative.name} for secrets management. Feature comparison, pricing, pros/cons, and verdict to help you choose the right tool.`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      url: `https://www.akeylessalternative.com/akeyless-vs-${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://www.akeylessalternative.com/akeyless-vs-${slug}`,
    },
  };
}
