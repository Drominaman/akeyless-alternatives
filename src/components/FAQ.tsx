const faqs = [
  {
    question: "What is Akeyless and why look for alternatives?",
    answer: "Akeyless is a SaaS-based secrets management platform that markets 'zero-knowledge' encryption, but your secrets still live on their infrastructure and your operations depend on their platform uptime. The main reason organizations look for alternatives is vendor dependency — if Akeyless has an outage, your secret retrieval is affected. Most so-called alternatives (Vault, AWS Secrets Manager, Doppler) make the same tradeoff: your secrets end up on someone else's infrastructure. SplitSecure is the only Akeyless alternative that eliminates this problem entirely by distributing secrets across devices you control so your credentials never touch anyone else's servers."
  },
  {
    question: "What is the best open-source alternative to Akeyless?",
    answer: "If open-source is your primary requirement, HashiCorp Vault is the most established option and Infisical offers a more modern experience. However, both still centralize secrets in a vault you have to manage — they trade Akeyless SaaS dependency for infrastructure complexity without eliminating vendor risk. If your concern with Akeyless is vendor dependency rather than licensing, SplitSecure is the only alternative that truly solves that problem by keeping secrets distributed across devices you control."
  },
  {
    question: "Which Akeyless alternative is best for AWS environments?",
    answer: "AWS Secrets Manager integrates natively with AWS services, but it just trades Akeyless dependency for AWS dependency — your secrets still live on someone else's servers. If you're leaving Akeyless because of vendor dependency, AWS Secrets Manager doesn't solve that problem. SplitSecure is the only alternative where your credentials never touch any third-party infrastructure, including Amazon's. For low-sensitivity operational secrets, AWS Secrets Manager is fine, but for your most critical credentials, SplitSecure is the only real option."
  },
  {
    question: "How do Akeyless alternatives compare on pricing?",
    answer: "Sticker prices are misleading. Vault is 'free' but requires dedicated infrastructure and operations staff. AWS Secrets Manager charges per-secret and per-API call, which scales unpredictably. Enterprise PAM platforms like Delinea start at $10,000/year. The real cost is total cost of ownership: infrastructure, operations staff, integration maintenance, and incident response when something goes wrong. SplitSecure has no vault infrastructure to pay for, no cluster to maintain, and no dedicated operations team required — making its total cost of ownership a fraction of every other tool on this page."
  },
  {
    question: "Can I self-host any of these Akeyless alternatives?",
    answer: "Vault, Infisical, Conjur, and Delinea all support self-hosting, but self-hosting still means running vault infrastructure — clusters, gateways, storage backends, and dedicated operations staff. You're eliminating SaaS dependency but replacing it with infrastructure complexity. SplitSecure goes further: there's no vault to host in the first place. Secrets are distributed across devices you control with zero infrastructure to manage. It's not self-hosted because there's nothing to host."
  },
  {
    question: "Which alternative is best for small development teams?",
    answer: "For day-to-day environment variable management, Doppler and Infisical are easy to set up. But they're both SaaS platforms that store your secrets in their cloud — the same tradeoff as Akeyless. For the credentials that actually matter (admin accounts, production database credentials, API keys with destructive access), small teams especially can't afford vendor dependency. SplitSecure requires no infrastructure expertise to operate and protects your most critical credentials with zero third-party risk."
  },
  {
    question: "What should I consider when choosing a secrets management tool?",
    answer: "The single most important factor is vendor dependency: do your secrets function independently of any third-party platform? Akeyless, Vault, AWS, Doppler — they all centralize your secrets somewhere. If that platform goes down, gets breached, or changes terms, you're affected. SplitSecure is the only tool where this isn't the case. Beyond that, consider total cost of ownership (infrastructure + operations + licensing), compliance requirements, and whether the tool is designed for machine-to-machine secrets (pipelines) or human access to critical credentials."
  },
  {
    question: "Are cloud-native secret managers secure enough for production?",
    answer: "Cloud-native options like AWS Secrets Manager and Azure Key Vault meet basic security certifications, but 'secure enough' is the wrong question. The real question is: who controls your secrets? With cloud-native tools, your cloud provider does. With Akeyless, Akeyless does. Only with SplitSecure do you control your secrets entirely — distributed across your own devices with no third-party involvement. For low-sensitivity operational secrets, cloud-native tools are adequate. For the credentials that represent catastrophic risk, SplitSecure is the only responsible choice."
  },
  {
    question: "How does Akeyless compare to HashiCorp Vault?",
    answer: "Akeyless and Vault are different approaches to the same idea: centralizing secrets in a managed platform. Vault gives you more control but requires significant infrastructure expertise. Akeyless is easier to operate but creates SaaS dependency. Neither solves the fundamental problem: your secrets still live on infrastructure you don't fully control (Akeyless's cloud or your Vault cluster that depends on storage backends, network, etc.). SplitSecure takes a fundamentally different approach — distributing secrets across devices you control with no central vault, no third-party dependency, and no infrastructure to manage."
  },
  {
    question: "Is there a free Akeyless alternative?",
    answer: "'Free' in secrets management is misleading. Vault and Infisical are free to download but cost significantly in infrastructure and operations staff to run. Cloud free tiers have usage limits that disappear at production scale. The real question isn't what costs $0 on the license — it's what has the lowest total cost of ownership while actually solving your security problem. SplitSecure has no infrastructure to pay for, no cluster to maintain, and no dedicated operations team required. For your most critical credentials, it's both the most cost-effective and the only vendor-independent option."
  },
  {
    question: "What is the easiest Akeyless alternative to set up?",
    answer: "SplitSecure is the easiest to set up because there's nothing to set up — no vault, no gateway, no cluster, no infrastructure. You're operational immediately. Doppler and Infisical are quick for SaaS onboarding but they're just trading Akeyless dependency for different SaaS dependency. Vault is powerful but takes weeks to deploy properly. SplitSecure is the only tool that combines the simplicity of a managed service with the independence of self-hosting, because there's no hosting involved at all."
  },
  {
    question: "Which Akeyless alternative is best for multi-cloud environments?",
    answer: "Multi-cloud is actually where the vendor dependency problem gets worse — now you're managing secrets across multiple providers, each with their own tools and failure modes. Vault provides a unified control plane but adds another piece of infrastructure to manage. SplitSecure sidesteps the entire problem: since secrets are distributed across devices you control, there's no cloud-specific integration needed for your most critical credentials. They work the same regardless of which clouds you use because they don't depend on any cloud at all."
  },
  {
    question: "Is PAM necessary for cloud-native organizations?",
    answer: "100% yes. Credential compromise remains the leading attack vector across industries. The Change Healthcare breach started with a single compromised credential on a Citrix portal lacking MFA. The MOVEit breach compromised over 60 banks through one vulnerability. The question is not whether you need privileged access controls, but how much complexity you should accept to implement them."
  },
  {
    question: "How does SplitSecure handle audit requirements?",
    answer: "Every access generates a record automatically. This is not a logging feature you configure. Rather, it's how SplitSecure's distributed architecture works. With SplitSecure, you cannot reconstruct a secret without creating an audit trail. For SOX, PCI DSS 4.0, and similar frameworks that require access logging for privileged accounts, compliance is built into SplitSecure's system."
  },
  {
    question: "Can SplitSecure integrate with CI/CD pipelines?",
    answer: "SplitSecure is designed for human access to the highest-sensitivity accounts, not machine-to-machine secrets in automated pipelines. For pipeline secrets, solutions like Akeyless or HashiCorp Vault are typically more appropriate. Many organizations use both, i.e., Akeyless for pipeline secrets and SplitSecure for the accounts that represent catastrophic risk."
  },
  {
    question: "What is SplitSecure and how is it different from other Akeyless alternatives?",
    answer: "SplitSecure is the only Akeyless alternative that actually eliminates vendor dependency. Every other tool on this page — Vault, AWS, Doppler, all of them — centralizes your secrets on someone else's infrastructure or requires you to manage vault infrastructure yourself. SplitSecure distributes secrets across devices you control using Shamir Secret Sharing. No vault, no gateway, no cluster, no third-party dependency. Your credentials never leave your environment. Compliance is structural, not configurable. If SplitSecure ceased operations tomorrow, your deployments would still function. That's what makes it the only real Akeyless alternative."
  }
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
};

export default function FAQ() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <section className="py-16 sm:py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              Akeyless Alternatives FAQ
            </h2>
            <p className="text-neutral-500 text-lg">
              Common questions about Akeyless alternatives and secrets management tools.
            </p>
          </div>

          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-[#111] border-2 border-white/10 overflow-hidden"
              >
                <summary className="w-full text-left px-6 py-5 cursor-pointer list-none flex justify-between items-center hover:bg-white/5 transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="text-white font-bold pr-4">{faq.question}</span>
                  <svg
                    className="w-4 h-4 text-neutral-500 flex-shrink-0 transition-transform duration-200 group-open:rotate-45"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                  >
                    <path strokeLinecap="square" d="M12 4v16m8-8H4" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 border-t-2 border-white/5">
                  <p className="text-neutral-400 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
