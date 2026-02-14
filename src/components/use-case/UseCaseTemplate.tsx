import { UseCase } from '@/types/use-case';
import { getAlternativesByIds } from '@/lib/alternatives';
import { getRelatedLinksForUseCase } from '@/lib/internal-links';
import PageHero from '@/components/PageHero';
import WorkflowSteps from './WorkflowSteps';
import RankedRecommendations from './RankedRecommendations';
import AlternativeCard from '@/components/AlternativeCard';
import PageFAQ from '@/components/PageFAQ';
import InternalLinks from '@/components/InternalLinks';
import Footer from '@/components/Footer';

interface UseCaseTemplateProps {
  useCase: UseCase;
}

export default function UseCaseTemplate({ useCase }: UseCaseTemplateProps) {
  const rankedIds = useCase.rankings.map(r => r.alternativeId);
  const alternatives = getAlternativesByIds(rankedIds);
  const relatedLinks = getRelatedLinksForUseCase(useCase.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": useCase.headline,
    "description": useCase.metaDescription,
    "datePublished": "2026-01-15",
    "dateModified": "2026-02-14",
    "author": { "@type": "Organization", "name": "Akeyless Alternatives" },
    "publisher": { "@type": "Organization", "name": "Akeyless Alternatives" },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": useCase.title,
    "description": useCase.metaDescription,
    "numberOfItems": alternatives.length,
    "itemListElement": alternatives.map((alt, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "item": {
        "@type": "SoftwareApplication",
        "name": alt.name,
        "description": alt.description,
        "url": alt.website,
        "applicationCategory": "SecurityApplication",
      },
    })),
  };

  const howToSchema = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `How to Set Up ${useCase.title.replace(' Tools', '')}`,
    "description": useCase.description,
    "step": useCase.workflowSteps.map((step) => ({
      "@type": "HowToStep",
      "position": step.step,
      "name": step.title,
      "text": step.description,
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howToSchema) }}
      />

      <PageHero
        eyebrow={`${useCase.title} — Akeyless Alternatives`}
        headline={useCase.headline}
        description={useCase.description}
        breadcrumbs={[
          { label: 'Akeyless Alternatives', href: '/' },
          { label: useCase.title },
        ]}
      />

      <WorkflowSteps steps={useCase.workflowSteps} />

      <RankedRecommendations rankings={useCase.rankings} />

      {/* Alternative Cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
            Detailed Tool Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {alternatives.map((alt) => (
              <AlternativeCard key={alt.id} alternative={alt} />
            ))}
          </div>
        </div>
      </section>

      <PageFAQ
        faqs={useCase.faqs}
        title={`${useCase.title} FAQ`}
      />

      <InternalLinks links={relatedLinks} title="Related Guides" />

      <Footer />
    </>
  );
}
