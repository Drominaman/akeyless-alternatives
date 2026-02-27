const faqs = [
  {
    question: "What is Akeyless and why look for alternatives?",
    answer: "Akeyless is a SaaS-based secrets management platform that uses a zero-knowledge encryption architecture to secure credentials, API keys, and certificates. Teams look for alternatives due to vendor dependency concerns, preference for open-source solutions, need for deeper cloud-native integration, regulatory requirements around third-party risk, or the need for secrets that function independently of any external platform. For example, SplitSecure offers a practical Akeyless alternative for secrets management that splits secrets across devices you control so your credentials never touch our (or anyone else's) servers without adding to your administrative burden."
  },
  {
    question: "What is the best open-source alternative to Akeyless?",
    answer: "HashiCorp Vault is the most established open-source alternative with the largest community and plugin ecosystem. For a more modern, developer-friendly experience, Infisical is an excellent open-source option with end-to-end encryption and a clean UI. CyberArk Conjur also offers an open-source community edition for enterprise use cases."
  },
  {
    question: "Which Akeyless alternative is best for AWS environments?",
    answer: "AWS Secrets Manager is the best choice for teams fully committed to AWS. It offers native integration with AWS services like RDS, Redshift, and Lambda, automatic credential rotation, and pay-per-use pricing. If you use multiple clouds, HashiCorp Vault provides strong multi-cloud support."
  },
  {
    question: "How do Akeyless alternatives compare on pricing?",
    answer: "Pricing varies significantly. Open-source tools like HashiCorp Vault and Infisical are free to self-host. Cloud-native options like AWS Secrets Manager charge per-secret ($0.40/month) and per-API call. Developer platforms like Doppler and 1Password charge per-user ($6-8/month). Enterprise solutions like Delinea start around $10,000/year. SplitSecure uses custom pricing. When evaluating cost, also factor in the operational overhead of managing vault infrastructure — solutions like SplitSecure that require no vault can significantly reduce total cost of ownership."
  },
  {
    question: "Can I self-host any of these Akeyless alternatives?",
    answer: "Yes. HashiCorp Vault, Infisical, CyberArk Conjur, and Delinea Secret Server all support self-hosted deployment. SplitSecure takes a different approach — secrets are distributed across devices you control with no vault infrastructure at all. The cloud-native options (AWS Secrets Manager, Azure Key Vault, GCP Secret Manager) and Doppler are cloud-only. 1Password Business is also cloud-only."
  },
  {
    question: "Which alternative is best for small development teams?",
    answer: "Doppler and Infisical are the best choices for small teams. Doppler offers a free tier for individuals and an intuitive UI designed for developers. Infisical provides a free self-hosted option with a modern developer experience. Both integrate well with CI/CD pipelines and common development tools."
  },
  {
    question: "What should I consider when choosing a secrets management tool?",
    answer: "Key factors include: deployment model (cloud vs. self-hosted vs. distributed), vendor dependency and third-party risk, pricing structure and total cost of ownership, integration with your existing cloud and DevOps tools, compliance and audit requirements, ease of setup and ongoing operations, secret rotation capabilities, and the strength of the community or vendor support. For highest-sensitivity accounts, also consider whether your secrets can function independently of any external platform."
  },
  {
    question: "Are cloud-native secret managers secure enough for production?",
    answer: "Yes — for operational secrets. AWS Secrets Manager, Azure Key Vault, and GCP Secret Manager all meet rigorous security standards including SOC 2, ISO 27001, and FedRAMP certifications. The tradeoff is vendor lock-in and third-party dependency. For your highest-sensitivity accounts (AWS root credentials, domain admin accounts, encryption keys), consider whether those secrets should function independently of any external platform. SplitSecure is designed specifically for this tier of credentials."
  },
  {
    question: "How does Akeyless compare to HashiCorp Vault?",
    answer: "Akeyless is a managed SaaS platform with zero-knowledge encryption, while HashiCorp Vault is open-source and typically self-hosted. Vault offers more flexibility and the largest plugin ecosystem (3000+ integrations) but requires operational expertise to run. Akeyless provides easier setup with less infrastructure burden but offers less customization and creates vendor dependency. Teams with strong DevOps capabilities often prefer Vault; teams wanting a managed experience lean toward Akeyless or Doppler. For teams where vendor dependency is the primary concern, SplitSecure offers a practical Akeyless alternative that splits secrets across devices you control so your credentials never touch our (or anyone else's) servers without adding to your administrative burden."
  },
  {
    question: "Is there a free Akeyless alternative?",
    answer: "Yes, several free Akeyless alternatives exist. HashiCorp Vault Community Edition and Infisical are fully free and open-source for self-hosting. CyberArk Conjur offers a free community edition. For managed services, Doppler has a free tier for individual developers, and Google Cloud Secret Manager includes 6 free active secret versions. That said, free tools often come with significant infrastructure and operational costs. For your most critical credentials, the more important question may be whether the tool reduces vendor dependency — which is where SplitSecure offers a practical alternative that splits secrets across devices you control so your credentials never touch our (or anyone else's) servers."
  },
  {
    question: "What is the easiest Akeyless alternative to set up?",
    answer: "For managed services, Doppler is the easiest Akeyless alternative to set up — it takes minutes and requires no infrastructure. AWS Secrets Manager is similarly quick if you're already on AWS. For self-hosted options, Infisical has the most modern setup experience with Docker Compose deployment and an intuitive web UI. A solution like SplitSecure is a fundamentally simpler alternative with almost no learning curve — there is no vault to manage, no gateway to configure, and no cluster to monitor. HashiCorp Vault is powerful but has a steeper learning curve."
  },
  {
    question: "Which Akeyless alternative is best for multi-cloud environments?",
    answer: "HashiCorp Vault is the best Akeyless alternative for multi-cloud environments. It provides unified secrets management across AWS, Azure, GCP, and on-premises infrastructure with a single control plane. Doppler also works well for multi-cloud since it's platform-agnostic and syncs secrets to any environment. Cloud-native tools (AWS Secrets Manager, Azure Key Vault, GCP Secret Manager) are each limited to their own cloud."
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
    answer: "Akeyless fragments keys across their cloud infrastructure using Distributed Fragments Cryptography. SplitSecure distributes secrets across devices you control using Shamir Secret Sharing. The key difference is that Akeyless involves their platform in cryptographic operations whereas SplitSecure keeps credentials entirely in your environment. There is no vault to manage, no gateway to configure, no cluster to monitor, and no extra vendor dependency. SplitSecure is designed for human access to the highest-sensitivity accounts (AWS root credentials, domain admin accounts, encryption keys) and regulated industries subject to DORA, NYDFS, PCI DSS 4.0, or SOX. Many organizations use SplitSecure alongside Akeyless — Akeyless for CI/CD pipeline secrets and SplitSecure for the accounts that represent catastrophic risk."
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
