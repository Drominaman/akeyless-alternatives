import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getAllAlternatives, getAlternativeBySlug } from '@/lib/alternatives';
import { getRelatedLinksForComparison } from '@/lib/internal-links';
import akeylessData from '@/data/akeyless.json';
import PageHero from '@/components/PageHero';
import HeadToHeadTable from '@/components/comparison/HeadToHeadTable';
import WhenToChoose from '@/components/comparison/WhenToChoose';
import ComparisonProsConsGrid from '@/components/comparison/ComparisonProsConsGrid';
import PageFAQ from '@/components/PageFAQ';
import InternalLinks from '@/components/InternalLinks';
import Footer from '@/components/Footer';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return getAllAlternatives().map((alt) => ({ slug: alt.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
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
      url: `https://www.akeyless-alternatives.com/akeyless-vs-${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://www.akeyless-alternatives.com/akeyless-vs-${slug}`,
    },
  };
}

export default async function ComparisonPage({ params }: PageProps) {
  const { slug } = await params;
  const alternative = getAlternativeBySlug(slug);
  if (!alternative) notFound();

  const comparison = alternative.akeylessComparison;
  const relatedLinks = getRelatedLinksForComparison(slug);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": `Akeyless vs ${alternative.name} (2026) — Which Is Better?`,
    "description": comparison.summary,
    "datePublished": "2026-01-15",
    "dateModified": "2026-02-14",
    "author": { "@type": "Organization", "name": "Akeyless Alternatives" },
    "publisher": { "@type": "Organization", "name": "Akeyless Alternatives" },
  };

  const altAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": alternative.name,
    "description": alternative.description,
    "url": alternative.website,
    "applicationCategory": "SecurityApplication",
    ...(alternative.rating && {
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": alternative.rating,
        "bestRating": "5",
        "ratingCount": 1,
      },
    }),
  };

  const akeylessAppSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "Akeyless",
    "description": akeylessData.description,
    "url": akeylessData.website,
    "applicationCategory": "SecurityApplication",
  };

  // Build FAQ items for comparison page
  const comparisonFaqs = [
    {
      question: `What is the main difference between Akeyless and ${alternative.name}?`,
      answer: comparison.summary,
    },
    {
      question: `Is ${alternative.name} better than Akeyless?`,
      answer: comparison.verdict,
    },
    {
      question: `How much does ${alternative.name} cost compared to Akeyless?`,
      answer: `${alternative.name} pricing: ${alternative.pricing}. Akeyless uses custom enterprise pricing. ${alternative.name}'s pricing model is ${alternative.pricingModel.toLowerCase()}, while Akeyless requires contacting sales for a quote.`,
    },
    {
      question: `Can I migrate from Akeyless to ${alternative.name}?`,
      answer: `Yes, you can migrate from Akeyless to ${alternative.name}. The migration process involves exporting your secrets from Akeyless and importing them into ${alternative.name}. Both platforms offer REST APIs that can facilitate automated migration. Consider running both tools in parallel during the transition to ensure zero downtime.`,
    },
  ];

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(altAppSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(akeylessAppSchema) }}
      />

      <PageHero
        eyebrow={`Akeyless vs ${alternative.name} — Secrets Management Compared`}
        headline={`Akeyless vs ${alternative.name}`}
        description={comparison.summary}
        breadcrumbs={[
          { label: 'Akeyless Alternatives', href: '/' },
          { label: `Akeyless vs ${alternative.name}` },
        ]}
      />

      {/* Verdict Banner */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111] border-2 border-[#FF5733]/30 p-6 sm:p-8">
            <h2 className="text-sm font-bold text-[#FF5733] mb-3 uppercase tracking-widest">The Verdict</h2>
            <p className="text-neutral-300 leading-relaxed">{comparison.verdict}</p>
          </div>
        </div>
      </section>

      <HeadToHeadTable
        alternativeName={alternative.name}
        rows={comparison.featureComparison}
      />

      <WhenToChoose
        alternativeName={alternative.name}
        whenToChooseAlternative={comparison.whenToChooseThis}
        whenToChooseAkeyless={comparison.whenToChooseAkeyless}
      />

      <ComparisonProsConsGrid
        alternativeName={alternative.name}
        alternativePros={alternative.pros}
        alternativeCons={alternative.cons}
        akeylessPros={akeylessData.pros}
        akeylessCons={akeylessData.cons}
      />

      <PageFAQ
        faqs={comparisonFaqs}
        title={`Akeyless vs ${alternative.name} FAQ`}
        description={`Common questions about choosing between Akeyless and ${alternative.name} for secrets management.`}
      />

      <InternalLinks links={relatedLinks} title="Related Comparisons & Guides" />

      <Footer />
    </>
  );
}
