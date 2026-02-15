import { Alternative } from '@/types/alternative';

interface ComparisonTableProps {
  alternatives: Alternative[];
}

export default function ComparisonTable({ alternatives }: ComparisonTableProps) {
  if (alternatives.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black text-white mb-4 uppercase tracking-tight">
            Akeyless Alternatives Feature Comparison
          </h2>
          <p className="text-neutral-500 text-lg max-w-2xl mx-auto">
            Compare all 10 Akeyless alternatives side-by-side across pricing, deployment, and key capabilities.
          </p>
        </div>

        <div className="bg-[#111] border-2 border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-white/10">
                  <th className="px-6 py-4 text-left text-xs font-bold text-neutral-400 sticky left-0 bg-[#111] z-10 min-w-[160px] uppercase tracking-widest">
                    Feature
                  </th>
                  {alternatives.map((alt) => (
                    <th key={alt.id} className="px-4 py-4 text-center min-w-[150px]">
                      <div className="text-sm font-bold text-white">{alt.name}</div>
                      {alt.rating && (
                        <div className="text-xs text-[#FF5733] mt-1">
                          {'★'.repeat(Math.floor(alt.rating))} {alt.rating}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                <tr className="hover:bg-white/5">
                  <td className="px-6 py-4 text-sm font-bold text-neutral-300 sticky left-0 bg-[#111]">
                    Pricing Model
                  </td>
                  {alternatives.map((alt) => (
                    <td key={alt.id} className="px-4 py-4 text-sm text-neutral-400 text-center">
                      {alt.pricingModel}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="px-6 py-4 text-sm font-bold text-neutral-300 sticky left-0 bg-[#111]">
                    Open Source
                  </td>
                  {alternatives.map((alt) => (
                    <td key={alt.id} className="px-4 py-4 text-center">
                      <span className={`font-bold ${alt.openSource ? 'text-[#FF5733]' : 'text-neutral-700'}`}>
                        {alt.openSource ? '+' : '–'}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="px-6 py-4 text-sm font-bold text-neutral-300 sticky left-0 bg-[#111]">
                    Cloud-Hosted
                  </td>
                  {alternatives.map((alt) => (
                    <td key={alt.id} className="px-4 py-4 text-center">
                      <span className={`font-bold ${alt.cloudHosted ? 'text-[#FF5733]' : 'text-neutral-700'}`}>
                        {alt.cloudHosted ? '+' : '–'}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="px-6 py-4 text-sm font-bold text-neutral-300 sticky left-0 bg-[#111]">
                    Self-Hosted
                  </td>
                  {alternatives.map((alt) => (
                    <td key={alt.id} className="px-4 py-4 text-center">
                      <span className={`font-bold ${alt.selfHosted ? 'text-[#FF5733]' : 'text-neutral-700'}`}>
                        {alt.selfHosted ? '+' : '–'}
                      </span>
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="px-6 py-4 text-sm font-bold text-neutral-300 sticky left-0 bg-[#111]">
                    Best For
                  </td>
                  {alternatives.map((alt) => (
                    <td key={alt.id} className="px-4 py-4 text-sm text-neutral-400 text-center">
                      {alt.bestFor}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-white/5">
                  <td className="px-6 py-4 text-sm font-bold text-neutral-300 sticky left-0 bg-[#111]">
                    Key Features
                  </td>
                  {alternatives.map((alt) => (
                    <td key={alt.id} className="px-4 py-4 text-sm text-neutral-400">
                      <ul className="space-y-1 text-left">
                        {alt.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-start gap-1.5">
                            <span className="text-[#FF5733] flex-shrink-0">&#8226;</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-bold text-neutral-300 sticky left-0 bg-[#111]">
                    Website
                  </td>
                  {alternatives.map((alt) => (
                    <td key={alt.id} className="px-4 py-4 text-center">
                      <a
                        href={alt.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-bold px-4 py-2 bg-[#FF5733] hover:bg-[#cc4529] text-white transition-colors uppercase tracking-wide"
                      >
                        Visit
                      </a>
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
