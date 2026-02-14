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
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center uppercase tracking-tight">
          {title}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="group bg-[#111] border-2 border-white/10 p-5 hover:border-[#FF5733] transition-colors"
            >
              <span className="inline-block text-[10px] font-bold px-2 py-0.5 bg-white/5 text-[#FF5733] border border-[#FF5733]/30 uppercase tracking-widest mb-3">
                {typeLabels[link.type] || link.type}
              </span>
              <h3 className="text-sm font-bold text-white group-hover:text-[#FF5733] transition-colors mb-1.5">
                {link.title}
              </h3>
              <p className="text-xs text-neutral-500 line-clamp-2">
                {link.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
