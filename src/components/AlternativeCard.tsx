import Link from 'next/link';
import { Alternative } from '@/types/alternative';

interface AlternativeCardProps {
  alternative: Alternative;
}

export default function AlternativeCard({ alternative }: AlternativeCardProps) {
  return (
    <div className="bg-slate-800 border border-slate-700 rounded-xl p-6 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 transition-all duration-200 flex flex-col">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-xl font-semibold text-white mb-1">{alternative.name}</h3>
          <span className="inline-block text-xs font-medium px-2.5 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
            {alternative.category}
          </span>
        </div>
        {alternative.rating && (
          <div className="flex items-center gap-1 text-sm text-amber-400 font-medium ml-3 flex-shrink-0">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            {alternative.rating}
          </div>
        )}
      </div>

      <p className="text-slate-300 text-sm mb-4 leading-relaxed">{alternative.shortDescription}</p>

      <div className="mb-4">
        <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Pricing</div>
        <p className="text-sm text-white font-medium">{alternative.pricing}</p>
      </div>

      <div className="mb-4">
        <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Best For</div>
        <p className="text-sm text-slate-300">{alternative.bestFor}</p>
      </div>

      <div className="mb-4">
        <div className="text-xs font-medium text-slate-400 uppercase tracking-wider mb-2">Key Features</div>
        <div className="flex flex-wrap gap-1.5">
          {alternative.features.slice(0, 4).map((feature) => (
            <span key={feature} className="text-xs px-2 py-1 rounded-md bg-slate-700/50 text-slate-300 border border-slate-600/50">
              {feature}
            </span>
          ))}
          {alternative.features.length > 4 && (
            <span className="text-xs px-2 py-1 text-slate-500">+{alternative.features.length - 4} more</span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-4">
        <div>
          <div className="text-xs font-medium text-emerald-400 uppercase tracking-wider mb-1.5">Pros</div>
          <ul className="space-y-1">
            {alternative.pros.slice(0, 3).map((pro) => (
              <li key={pro} className="text-xs text-slate-300 flex items-start gap-1.5">
                <svg className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {pro}
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className="text-xs font-medium text-red-400 uppercase tracking-wider mb-1.5">Cons</div>
          <ul className="space-y-1">
            {alternative.cons.slice(0, 3).map((con) => (
              <li key={con} className="text-xs text-slate-300 flex items-start gap-1.5">
                <svg className="w-3.5 h-3.5 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
                {con}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="flex items-center gap-3 text-xs text-slate-400 mb-5">
        {alternative.openSource && (
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            Open Source
          </span>
        )}
        {alternative.cloudHosted && (
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            Cloud
          </span>
        )}
        {alternative.selfHosted && (
          <span className="flex items-center gap-1">
            <span className="w-2 h-2 rounded-full bg-purple-500" />
            Self-Hosted
          </span>
        )}
      </div>

      <div className="mt-auto space-y-2">
        <a
          href={alternative.website}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center text-sm font-medium px-4 py-2.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
        >
          Visit Website
        </a>
        <Link
          href={`/akeyless-vs-${alternative.slug}`}
          className="block w-full text-center text-sm font-medium px-4 py-2 rounded-lg border border-slate-600 text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors"
        >
          Compare vs Akeyless
        </Link>
      </div>
    </div>
  );
}
