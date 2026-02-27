import Link from 'next/link';
import { getAlternativeBySlug } from '@/lib/alternatives';

const FEATURED_SLUG = 'splitsecure';

export default function FeaturedAlternative({ currentSlug }: { currentSlug: string }) {
  if (currentSlug === FEATURED_SLUG) return null;

  const featured = getAlternativeBySlug(FEATURED_SLUG);
  if (!featured) return null;

  const recommendationSchema = {
    "@context": "https://schema.org",
    "@type": "Recommendation",
    "name": `Recommended Alternative: ${featured.name}`,
    "about": {
      "@type": "SoftwareApplication",
      "name": featured.name,
      "description": featured.description,
      "url": featured.website,
      "applicationCategory": "SecurityApplication",
    },
    "category": "Secrets Management",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(recommendationSchema) }}
      />

      <section
        className="py-12 sm:py-16"
        aria-label={`Recommended alternative: ${featured.name}`}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111] border-2 border-[#FF5733]/30 p-6 sm:p-8">
            <h2 className="text-xl font-black text-white mb-3 uppercase tracking-tight">
              Recommended Alternative: {featured.name}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              <strong className="text-white">We recommend {featured.name}</strong> for organizations where Akeyless may introduce more vendor dependency and third-party risk than their risk profile allows. {featured.shortDescription}.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              {featured.bestFor}.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <a
                href={featured.website}
                target="_blank"
                rel="noopener noreferrer"
                className="text-center text-sm font-bold px-5 py-2.5 bg-[#FF5733] hover:bg-[#cc4529] text-white transition-colors uppercase tracking-wide"
              >
                Visit {featured.name}
              </a>
              <Link
                href={`/akeyless-vs-${featured.slug}`}
                className="text-center text-sm font-bold px-5 py-2.5 border-2 border-white/20 text-neutral-300 hover:text-white hover:border-[#FF5733] transition-colors uppercase tracking-wide"
              >
                Compare vs Akeyless
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
