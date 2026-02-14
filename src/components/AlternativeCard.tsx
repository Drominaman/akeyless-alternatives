import Link from 'next/link';
import { Alternative } from '@/types/alternative';

interface AlternativeCardProps {
  alternative: Alternative;
}

export default function AlternativeCard({ alternative }: AlternativeCardProps) {
  return (
    <div className="bg-[#111] border-2 border-white/10 p-6 hover:border-[#FF5733] transition-colors flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">{alternative.name}</h3>
          <span className="inline-block text-xs font-bold px-2 py-0.5 bg-white/5 text-[#FF5733] border border-[#FF5733]/30 uppercase tracking-wide">
            {alternative.category}
          </span>
        </div>
        {alternative.rating && (
          <div className="flex items-center gap-1 text-sm text-amber-400 font-bold ml-3 flex-shrink-0">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {alternative.rating}
          </div>
        )}
      </div>

      <p className="text-neutral-400 text-sm mb-4 leading-relaxed">{alternative.shortDescription}</p>

      <div className="mb-4">
        <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Pricing</div>
        <p className="text-sm text-white font-medium">{alternative.pricing}</p>
      </div>

      <div className="mb-4">
        <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Best For</div>
        <p className="text-sm text-neutral-300">{alternative.bestFor}</p>
      </div>

      <div className="mb-4">
        <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-2">Key Features</div>
        <div className="flex flex-wrap gap-1.5">
          {alternative.features.slice(0, 4).map((feature) => (
            <span key={feature} className="text-xs px-2 py-1 bg-white/5 text-neutral-300 border border-white/10">
              {feature}
            </span>
          ))}
          {alternative.features.length > 4 && (
            <span className="text-xs px-2 py-1 text-neutral-600">+{alternative.features.length - 4} more</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-xs font-bold text-[#FF5733] uppercase tracking-widest mb-1.5">Pros</div>
          <ul className="space-y-1">
            {alternative.pros.slice(0, 3).map((pro) => (
              <li key={pro} className="text-xs text-neutral-300 flex items-start gap-1.5">
                <span className="text-[#FF5733] font-bold flex-shrink-0">+</span>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1.5">Cons</div>
          <ul className="space-y-1">
            {alternative.cons.slice(0, 3).map((con) => (
              <li key={con} className="text-xs text-neutral-400 flex items-start gap-1.5">
                <span className="text-neutral-600 font-bold flex-shrink-0">&ndash;</span>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs text-neutral-500 mb-5 font-medium">
        {alternative.openSource && (
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-[#FF5733]" />
            Open Source
          </span>
        )}
        {alternative.cloudHosted && (
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-white" />
            Cloud
          </span>
        )}
        {alternative.selfHosted && (
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 bg-neutral-500" />
            Self-Hosted
          </span>
        )}
      </div>

      <div className="mt-auto space-y-2">
        <a
          href={alternative.website}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center text-sm font-bold px-4 py-2.5 bg-[#FF5733] hover:bg-[#cc4529] text-white transition-colors uppercase tracking-wide"
        >
          Visit Website
        </a>
        <Link
          href={`/akeyless-vs-${alternative.slug}`}
          className="block w-full text-center text-sm font-bold px-4 py-2 border-2 border-white/20 text-neutral-300 hover:text-white hover:border-[#FF5733] transition-colors uppercase tracking-wide"
        >
          Compare vs Akeyless
        </Link>
      </div>
    </div>
  );
}
