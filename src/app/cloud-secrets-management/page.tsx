import { Metadata } from 'next';
import { getCategoryBySlug } from '@/lib/categories';
import CategoryTemplate from '@/components/category/CategoryTemplate';

const category = getCategoryBySlug('cloud-secrets-management')!;

export const metadata: Metadata = {
  title: `${category.headline} | Akeyless Alternatives`,
  description: category.metaDescription,
  openGraph: {
    title: category.headline,
    description: category.metaDescription,
    type: 'article',
    url: `https://www.akeyless-alternatives.com/${category.slug}`,
  },
  twitter: { card: 'summary_large_image', title: category.headline, description: category.metaDescription },
  alternates: { canonical: `https://www.akeyless-alternatives.com/${category.slug}` },
};

export default function CloudSecretsManagementPage() {
  return <CategoryTemplate category={category} />;
}
