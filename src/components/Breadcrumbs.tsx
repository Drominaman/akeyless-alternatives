import Link from 'next/link';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.label,
      ...(item.href && { "item": `https://www.akeyless-alternatives.com${item.href}` }),
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <nav aria-label="Breadcrumb" className="text-sm text-slate-400">
        <ol className="flex items-center gap-1.5 flex-wrap">
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1.5">
              {index > 0 && (
                <svg className="w-3.5 h-3.5 text-slate-600 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
              {item.href ? (
                <Link href={item.href} className="hover:text-blue-400 transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-slate-300">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
