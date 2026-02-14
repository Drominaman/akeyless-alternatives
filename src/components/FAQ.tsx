const faqs = [
  {
    question: "What is Akeyless and why look for alternatives?",
    answer: "Akeyless is a SaaS-based secrets management platform that uses a zero-knowledge encryption architecture to secure credentials, API keys, and certificates. Teams look for alternatives due to pricing, preference for open-source solutions, need for deeper cloud-native integration, or specific compliance requirements that Akeyless may not fully address."
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
    answer: "Pricing varies significantly. Open-source tools like HashiCorp Vault and Infisical are free to self-host. Cloud-native options like AWS Secrets Manager charge per-secret ($0.40/month) and per-API call. Developer platforms like Doppler and 1Password charge per-user ($6-8/month). Enterprise solutions like Delinea start around $10,000/year."
  },
  {
    question: "Can I self-host any of these Akeyless alternatives?",
    answer: "Yes. HashiCorp Vault, Infisical, CyberArk Conjur, and Delinea Secret Server all support self-hosted deployment. The cloud-native options (AWS Secrets Manager, Azure Key Vault, GCP Secret Manager) and Doppler are cloud-only. 1Password Business is also cloud-only."
  },
  {
    question: "Which alternative is best for small development teams?",
    answer: "Doppler and Infisical are the best choices for small teams. Doppler offers a free tier for individuals and an intuitive UI designed for developers. Infisical provides a free self-hosted option with a modern developer experience. Both integrate well with CI/CD pipelines and common development tools."
  },
  {
    question: "What should I consider when choosing a secrets management tool?",
    answer: "Key factors include: deployment model (cloud vs. self-hosted), pricing structure and total cost of ownership, integration with your existing cloud and DevOps tools, compliance and audit requirements, ease of setup and ongoing operations, secret rotation capabilities, and the strength of the community or vendor support."
  },
  {
    question: "Are cloud-native secret managers secure enough for production?",
    answer: "Yes. AWS Secrets Manager, Azure Key Vault, and GCP Secret Manager all meet rigorous security standards including SOC 2, ISO 27001, and FedRAMP certifications. They use hardware security modules (HSMs) for key protection and provide fine-grained access control through their respective IAM systems. The tradeoff is vendor lock-in."
  },
  {
    question: "How does Akeyless compare to HashiCorp Vault?",
    answer: "Akeyless is a managed SaaS platform with zero-knowledge encryption, while HashiCorp Vault is open-source and typically self-hosted. Vault offers more flexibility and the largest plugin ecosystem (3000+ integrations) but requires operational expertise to run. Akeyless provides easier setup with less infrastructure burden but offers less customization and creates vendor dependency. Teams with strong DevOps capabilities often prefer Vault; teams wanting a managed experience lean toward Akeyless or Doppler."
  },
  {
    question: "Is there a free Akeyless alternative?",
    answer: "Yes, several free Akeyless alternatives exist. HashiCorp Vault Community Edition and Infisical are fully free and open-source for self-hosting. CyberArk Conjur offers a free community edition. For managed services, Doppler has a free tier for individual developers, and Google Cloud Secret Manager includes 6 free active secret versions. AWS Secrets Manager and Azure Key Vault have no free tiers but charge low per-operation costs."
  },
  {
    question: "What is the easiest Akeyless alternative to set up?",
    answer: "For managed services, Doppler is the easiest Akeyless alternative to set up — it takes minutes and requires no infrastructure. AWS Secrets Manager is similarly quick if you're already on AWS. For self-hosted options, Infisical has the most modern setup experience with Docker Compose deployment and an intuitive web UI. HashiCorp Vault is powerful but has a steeper learning curve."
  },
  {
    question: "Which Akeyless alternative is best for multi-cloud environments?",
    answer: "HashiCorp Vault is the best Akeyless alternative for multi-cloud environments. It provides unified secrets management across AWS, Azure, GCP, and on-premises infrastructure with a single control plane. Doppler also works well for multi-cloud since it's platform-agnostic and syncs secrets to any environment. Cloud-native tools (AWS Secrets Manager, Azure Key Vault, GCP Secret Manager) are each limited to their own cloud."
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
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Akeyless Alternatives FAQ
            </h2>
            <p className="text-slate-400 text-lg">
              Common questions about Akeyless alternatives and secrets management tools.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group bg-slate-800 border border-slate-700 rounded-xl overflow-hidden"
              >
                <summary className="w-full text-left px-6 py-5 cursor-pointer list-none flex justify-between items-center hover:bg-slate-750/50 transition-colors [&::-webkit-details-marker]:hidden">
                  <span className="text-white font-medium pr-4">{faq.question}</span>
                  <svg
                    className="w-5 h-5 text-slate-400 flex-shrink-0 transition-transform duration-200 group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-5 border-t border-slate-700/50">
                  <p className="text-slate-300 leading-relaxed pt-4">{faq.answer}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
