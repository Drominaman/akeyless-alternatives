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
            <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
              {title}
            </h2>
            {description && (
              <p className="text-neutral-500 text-lg">{description}</p>
            )}
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
