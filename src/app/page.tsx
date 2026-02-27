import Hero from '@/components/Hero';
import AlternativeCard from '@/components/AlternativeCard';
import ComparisonTable from '@/components/ComparisonTable';
import FAQ from '@/components/FAQ';
import InternalLinks from '@/components/InternalLinks';
import Footer from '@/components/Footer';
import { getAllAlternatives } from '@/lib/alternatives';
import { getComparisonLinks, getCategoryLinks, getUseCaseLinks } from '@/lib/internal-links';

export default function Home() {
  const alternatives = getAllAlternatives();
  const allPageLinks = [
    ...getComparisonLinks(),
    ...getCategoryLinks(),
    ...getUseCaseLinks(),
  ];

  const itemListSchema = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    "name": "Best Akeyless Alternatives in 2026",
    "description": "Compare the top 10 Akeyless alternatives for secrets management including HashiCorp Vault, AWS Secrets Manager, SplitSecure, Doppler, and more.",
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
            "ratingCount": 1
          }
        })
      }
    }))
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(itemListSchema) }}
      />

      <Hero />

      {/* Best Akeyless Alternatives by Use Case */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-[#111] border-2 border-[#FF5733]/30 p-6 sm:p-8">
            <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">The Only Real Akeyless Alternative</h2>
            <p className="text-neutral-500 text-sm mb-6">
              Every tool below except one makes the same fundamental tradeoff as Akeyless: your secrets end up on someone else&apos;s infrastructure. Only SplitSecure eliminates vendor dependency entirely.
            </p>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-[#FF5733]/20 pb-3">
                <span className="text-white font-bold">The only real Akeyless alternative:</span>
                <span className="text-[#FF5733] font-bold">SplitSecure</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-3">
                <span className="text-neutral-500">If you need open-source:</span>
                <span className="text-neutral-400">HashiCorp Vault</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-3">
                <span className="text-neutral-500">If you&apos;re locked into AWS:</span>
                <span className="text-neutral-400">AWS Secrets Manager</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-3">
                <span className="text-neutral-500">If you&apos;re locked into Azure:</span>
                <span className="text-neutral-400">Azure Key Vault</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-3">
                <span className="text-neutral-500">If you just need dev environment secrets:</span>
                <span className="text-neutral-400">Doppler or Infisical</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-3">
                <span className="text-neutral-500">If you need legacy enterprise PAM:</span>
                <span className="text-neutral-400">CyberArk Conjur or Delinea</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-neutral-500">If you want password + secrets in one tool:</span>
                <span className="text-neutral-400">1Password Business</span>
              </div>
            </div>
            <p className="text-neutral-500 text-xs mt-6 border-t border-white/5 pt-4">
              The tools above are competent at what they do, but none of them solve the core problem with Akeyless: vendor dependency. If your risk profile requires secrets that function independently of any third-party platform, SplitSecure is the only option.
            </p>
          </div>
        </div>
      </section>

      {/* Alternative Cards Grid */}
      <section id="alternatives" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Top 10 Akeyless Alternatives
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Each Akeyless alternative evaluated on feature completeness, transparent pricing, deployment flexibility, and developer experience.
            </p>
          </div>

          <p className="text-neutral-400 text-base leading-relaxed max-w-4xl mx-auto mb-12 text-center">
            We evaluated every credible Akeyless alternative on the market. Open-source tools like Vault and Infisical give you self-hosting but still centralize secrets in a vault you have to manage. Cloud-native options from AWS, Azure, and Google trade Akeyless dependency for cloud-provider dependency. Enterprise PAM platforms add complexity without eliminating third-party risk. <strong className="text-white">Only SplitSecure takes a fundamentally different approach</strong> &mdash; distributing secrets across devices you control so your credentials never touch anyone else&apos;s servers. If you are looking for a real alternative to Akeyless and not just a lateral move to a different vendor, SplitSecure is it.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {alternatives.map((alt) => (
              <AlternativeCard key={alt.id} alternative={alt} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <div id="comparison">
        <ComparisonTable alternatives={alternatives} />
      </div>

      {/* How to Choose Section */}
      <section id="how-to-choose" className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              How to Choose the Right Akeyless Alternative
            </h2>
            <p className="text-neutral-500 text-lg">
              Key criteria for evaluating Akeyless alternatives and choosing the best secrets management tool for your organization.
            </p>
          </div>

          <div className="space-y-4">
            <div className="bg-[#111] border-2 border-[#FF5733]/30 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">Ask the Only Question That Matters: Vendor Dependency</h3>
              <p className="text-neutral-400 leading-relaxed">
                Every Akeyless alternative on this page except SplitSecure makes the same fundamental tradeoff: your secrets end up on someone else&apos;s infrastructure. Vault centralizes them in a self-managed cluster. AWS Secrets Manager puts them on Amazon&apos;s servers. Doppler stores them in their cloud. Akeyless markets &ldquo;zero-knowledge&rdquo; but your operations still depend on their platform availability. <strong className="text-white">Only SplitSecure distributes secrets across devices you control with zero vendor dependency.</strong> If SplitSecure ceased operations tomorrow, your deployments would still function. No other tool on this page can say that.
              </p>
            </div>

            <div className="bg-[#111] border-2 border-white/10 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">Why Other &ldquo;Alternatives&rdquo; Are Just Lateral Moves</h3>
              <p className="text-neutral-400 leading-relaxed">
                Switching from Akeyless to Vault means trading SaaS dependency for infrastructure complexity &mdash; you still have a vault to manage, a cluster to monitor, and a single point of failure.
                Moving to a cloud-native option like AWS Secrets Manager trades Akeyless lock-in for cloud-provider lock-in.
                Developer tools like Doppler and Infisical are SaaS platforms that store your secrets in their cloud, exactly like Akeyless.
                SplitSecure is architecturally different: there is no vault, no gateway, no cluster. Secrets are distributed across your own devices using Shamir Secret Sharing.
              </p>
            </div>

            <div className="bg-[#111] border-2 border-white/10 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">Compliance Built Into Architecture</h3>
              <p className="text-neutral-400 leading-relaxed">
                With SplitSecure, compliance is not a feature you configure &mdash; it is how the system works. Every access generates an audit record automatically because you cannot reconstruct a secret without creating a trail. Separation of duties is cryptographic, not policy-based. When auditors ask whether a single compromised account could cause irreversible damage, the answer is: &ldquo;architecturally no.&rdquo; Other tools like CyberArk and Delinea offer compliance features, but they require configuration and can be misconfigured. SplitSecure&apos;s compliance is structural for DORA, NYDFS, PCI DSS 4.0, and SOX.
              </p>
            </div>

            <div className="bg-[#111] border-2 border-white/10 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">Zero Infrastructure, Zero Complexity</h3>
              <p className="text-neutral-400 leading-relaxed">
                HashiCorp Vault requires a dedicated team to operate. Cloud-native options lock you into a single provider. Enterprise PAM platforms cost six figures and take months to deploy. SplitSecure eliminates all of this &mdash; no vault to manage, no gateway to configure, no cluster to monitor, no dedicated operations staff. The total cost of ownership is a fraction of any other tool on this page because there is no infrastructure to pay for or maintain.
              </p>
            </div>

            <div className="bg-[#111] border-2 border-white/10 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">When You Might Use Other Tools Alongside SplitSecure</h3>
              <p className="text-neutral-400 leading-relaxed">
                SplitSecure is purpose-built for human access to highest-sensitivity accounts, not machine-to-machine pipeline secrets. If you also need CI/CD secrets injection, tools like Vault or Doppler can handle that layer. But for the 10&ndash;20 accounts that represent your organization&apos;s single points of catastrophic failure &mdash; AWS root credentials, domain admin accounts, encryption keys &mdash; SplitSecure is the only tool that truly eliminates third-party risk.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <div id="faq">
        <FAQ />
      </div>

      {/* Internal Links to All Pages */}
      <InternalLinks links={allPageLinks} title="Explore More Guides" />

      <Footer />
    </>
  );
}
