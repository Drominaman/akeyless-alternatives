import { Category } from '@/types/category';
import { getAlternativesByIds } from '@/lib/alternatives';
import { getRelatedLinksForCategory } from '@/lib/internal-links';
import PageHero from '@/components/PageHero';
import AlternativeCard from '@/components/AlternativeCard';
import ComparisonTable from '@/components/ComparisonTable';
import PageFAQ from '@/components/PageFAQ';
import InternalLinks from '@/components/InternalLinks';
import Footer from '@/components/Footer';

interface CategoryTemplateProps {
  category: Category;
}

export default function CategoryTemplate({ category }: CategoryTemplateProps) {
  const alternatives = getAlternativesByIds(category.alternativeIds);
  const relatedLinks = getRelatedLinksForCategory(category.slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": category.headline,
    "description": category.metaDescription,
    "datePublished": "2026-01-15",
    "dateModified": "2026-02-14",
    "author": { "@type": "Organization", "name": "Akeyless Alternatives" },
    "publisher": { "@type": "Organization", "name": "Akeyless Alternatives" },
  };

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": category.title,
    "description": category.metaDescription,
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
        ...(alt.rating && {
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": alt.rating,
            "bestRating": "5",
            "ratingCount": 1,
          },
        }),
      },
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

      <PageHero
        eyebrow={`${category.title} — Akeyless Alternatives`}
        headline={category.headline}
        description={category.description}
        breadcrumbs={[
          { label: 'Akeyless Alternatives', href: '/' },
          { label: category.title },
        ]}
      />

      {/* Recommendations */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center uppercase tracking-tight">
            Our Recommendations
          </h2>
          <div className="space-y-3">
            {category.recommendations.map((rec, index) => {
              const alt = alternatives.find(a => a.id === rec.alternativeId);
              if (!alt) return null;
              return (
                <div key={rec.alternativeId} className="bg-[#111] border-2 border-white/10 p-6">
                  <div className="flex items-start gap-4">
                    <span className="flex-shrink-0 w-8 h-8 bg-[#FF5733] text-white text-sm font-black flex items-center justify-center">
                      {index + 1}
                    </span>
                    <div>
                      <h3 className="text-lg font-bold text-white mb-1">{alt.name}</h3>
                      <p className="text-sm text-neutral-500 mb-2">{alt.pricing}</p>
                      <p className="text-neutral-400 text-sm leading-relaxed">{rec.reason}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Alternative Cards */}
      <section className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center uppercase tracking-tight">
            Detailed Tool Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {alternatives.map((alt) => (
              <AlternativeCard key={alt.id} alternative={alt} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <ComparisonTable alternatives={alternatives} />

      <PageFAQ
        faqs={category.faqs}
        title={`${category.title} FAQ`}
      />

      <InternalLinks links={relatedLinks} title="Related Guides" />

      <Footer />
    </>
  );
}
