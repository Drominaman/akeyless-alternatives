import { Metadata } from 'next';
import { getUseCaseBySlug } from '@/lib/use-cases';
import UseCaseTemplate from '@/components/use-case/UseCaseTemplate';

const useCase = getUseCaseBySlug('kubernetes-secrets-management')!;

export const metadata: Metadata = {
  title: `${useCase.headline} | Akeyless Alternatives`,
  description: useCase.metaDescription,
  openGraph: {
    title: useCase.headline,
    description: useCase.metaDescription,
    type: 'article',
    url: `https://www.akeyless-alternatives.com/${useCase.slug}`,
  },
  twitter: { card: 'summary_large_image', title: useCase.headline, description: useCase.metaDescription },
  alternates: { canonical: `https://www.akeyless-alternatives.com/${useCase.slug}` },
};

export default function KubernetesSecretsManagementPage() {
  return <UseCaseTemplate useCase={useCase} />;
}
