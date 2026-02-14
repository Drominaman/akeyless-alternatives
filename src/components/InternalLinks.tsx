import Link from 'next/link';
import { InternalLink } from '@/lib/internal-links';

interface InternalLinksProps {
  links: InternalLink[];
  title?: string;
}

const typeLabels: Record<string, string> = {
  comparison: 'Comparison',
  category: 'Category',
  'use-case': 'Use Case',
  home: 'Home',
};

export default function InternalLinks({ links, title = "Related Pages" }: InternalLinksProps) {
  if (links.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group bg-slate-800 border border-slate-700 rounded-xl p-5 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200"
            >
              <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-3">
                {typeLabels[link.type] || link.type}
              </span>
              <h3 className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors mb-1.5">
                {link.title}
              </h3>
              <p className="text-xs text-slate-400 line-clamp-2">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
