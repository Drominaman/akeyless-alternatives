import { FAQItem } from '@/types/category';

interface PageFAQProps {
  faqs: FAQItem[];
  title?: string;
  description?: string;
}

export default function PageFAQ({ faqs, title = "Frequently Asked Questions", description }: PageFAQProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer,
      },
    })),
  };

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
              {title}
            </h2>
            {description && (
              <p className="text-slate-400 text-lg">
                {description}
              </p>
            )}
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
