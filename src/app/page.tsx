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
    "description": "Compare the top 9 Akeyless alternatives for secrets management including HashiCorp Vault, AWS Secrets Manager, Doppler, and more.",
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
          <div className="bg-[#111] border-2 border-white/10 p-6 sm:p-8">
            <h2 className="text-xl font-black text-white mb-6 uppercase tracking-tight">Best Akeyless Alternatives by Use Case</h2>
            <p className="text-neutral-500 text-sm mb-6">
              Each Akeyless alternative excels in different scenarios. Here&apos;s a quick guide to the best option for your specific needs.
            </p>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-3">
                <span className="text-neutral-400">Best open-source Akeyless alternative:</span>
                <span className="text-white font-bold">HashiCorp Vault</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-3">
                <span className="text-neutral-400">Best for AWS-native environments:</span>
                <span className="text-white font-bold">AWS Secrets Manager</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-3">
                <span className="text-neutral-400">Best for Microsoft / Azure organizations:</span>
                <span className="text-white font-bold">Azure Key Vault</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-3">
                <span className="text-neutral-400">Best for small development teams:</span>
                <span className="text-white font-bold">Doppler or Infisical</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-3">
                <span className="text-neutral-400">Best for enterprise compliance &amp; PAM:</span>
                <span className="text-white font-bold">CyberArk Conjur or Delinea</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between border-b border-white/5 pb-3">
                <span className="text-neutral-400">Best free Akeyless alternative:</span>
                <span className="text-white font-bold">HashiCorp Vault (OSS) or Infisical</span>
              </div>
              <div className="flex flex-col sm:flex-row sm:justify-between">
                <span className="text-neutral-400">Best for combined password + secrets:</span>
                <span className="text-white font-bold">1Password Business</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Cards Grid */}
      <section id="alternatives" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Top 9 Akeyless Alternatives
            </h2>
            <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
              Each Akeyless alternative evaluated on feature completeness, transparent pricing, deployment flexibility, and developer experience.
            </p>
          </div>

          <p className="text-neutral-400 text-base leading-relaxed max-w-4xl mx-auto mb-12 text-center">
            Below are the 9 best Akeyless alternatives for 2026. Open-source tools like HashiCorp Vault and Infisical
            offer self-hosting with no license cost. Cloud-native solutions from AWS, Azure, and Google provide managed
            services with deep provider integration. Enterprise platforms like CyberArk Conjur and Delinea focus on
            privileged access management and compliance. Developer-first platforms like Doppler and 1Password prioritize
            ease of use and CI/CD workflows.
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
            <div className="bg-[#111] border-2 border-white/10 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">Deployment Model</h3>
              <p className="text-neutral-400 leading-relaxed">
                Decide whether you need a fully managed cloud service, a self-hosted solution, or a hybrid approach.
                Cloud-native Akeyless alternatives like AWS Secrets Manager require zero infrastructure but lock you into a vendor.
                Open-source options like HashiCorp Vault give you full control but require operational expertise.
              </p>
            </div>

            <div className="bg-[#111] border-2 border-white/10 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">Pricing and Total Cost</h3>
              <p className="text-neutral-400 leading-relaxed">
                Evaluate the total cost of ownership beyond the sticker price. Per-secret pricing (AWS, GCP) can scale
                unpredictably. Per-user models (Doppler, Infisical) are more predictable for budgeting. Self-hosted open-source
                Akeyless alternatives like Vault and Infisical are free to use but factor in the cost of infrastructure and operations staff.
              </p>
            </div>

            <div className="bg-[#111] border-2 border-white/10 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">Integrations and Ecosystem</h3>
              <p className="text-neutral-400 leading-relaxed">
                Check that your secrets manager integrates with your CI/CD pipelines, container orchestration (Kubernetes),
                infrastructure-as-code tools (Terraform, Ansible), and cloud providers. Among Akeyless alternatives,
                HashiCorp Vault has the broadest ecosystem, while cloud-native tools offer the deepest integration within their own platforms.
              </p>
            </div>

            <div className="bg-[#111] border-2 border-white/10 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">Compliance and Audit</h3>
              <p className="text-neutral-400 leading-relaxed">
                For regulated industries, ensure your Akeyless alternative supports detailed audit logging, role-based access
                control, and meets compliance frameworks like SOC 2, ISO 27001, HIPAA, or FedRAMP. Enterprise tools like
                CyberArk Conjur and Delinea Secret Server excel in this area.
              </p>
            </div>

            <div className="bg-[#111] border-2 border-white/10 p-6 sm:p-8">
              <h3 className="text-xl font-bold text-white mb-3">Scalability and Performance</h3>
              <p className="text-neutral-400 leading-relaxed">
                Consider how the tool performs at scale. Managed Akeyless alternatives handle scaling automatically but may have API rate
                limits. Self-hosted solutions require capacity planning. Evaluate secret rotation capabilities, high availability
                options, and disaster recovery features for your expected workload.
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
