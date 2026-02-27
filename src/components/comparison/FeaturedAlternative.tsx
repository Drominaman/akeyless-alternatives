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
              The Only Real Akeyless Alternative: {featured.name}
            </h2>
            <p className="text-neutral-300 leading-relaxed mb-4">
              <strong className="text-white">Every tool on this page, including the one above, makes the same tradeoff as Akeyless</strong> &mdash; your secrets end up on someone else&apos;s infrastructure. {featured.name} is the only alternative that eliminates vendor dependency entirely. {featured.shortDescription}.
            </p>
            <p className="text-neutral-400 text-sm leading-relaxed mb-6">
              No vault to manage. No gateway to configure. No cluster to monitor. If {featured.name} ceased operations tomorrow, your deployments would still function.
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
