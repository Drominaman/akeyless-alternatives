import { Alternative } from '@/types/alternative';

interface ComparisonTableProps {
  alternatives: Alternative[];
}

function Check() {
  return (
    <svg className="w-5 h-5 text-emerald-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function Cross() {
  return (
    <svg className="w-5 h-5 text-slate-600 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

export default function ComparisonTable({ alternatives }: ComparisonTableProps) {
  if (alternatives.length === 0) return null;

  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Akeyless Alternatives Feature Comparison
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Compare all 9 Akeyless alternatives side-by-side across pricing, deployment, and key capabilities.
          </p>
        </div>

        <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300 sticky left-0 bg-slate-800 z-10 min-w-[160px]">
                    Feature
                  </th>
                  {alternatives.map((alt) => (
                    <th key={alt.id} className="px-4 py-4 text-center min-w-[150px]">
                      <div className="text-sm font-semibold text-white">{alt.name}</div>
                      {alt.rating && (
                        <div className="text-xs text-amber-400 mt-1">
                          {'★'.repeat(Math.floor(alt.rating))} {alt.rating}
                        </div>
                      )}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                <tr className="hover:bg-slate-750/50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-300 sticky left-0 bg-slate-800">
                    Pricing Model
                  </td>
                  {alternatives.map((alt) => (
                    <td key={alt.id} className="px-4 py-4 text-sm text-slate-400 text-center">
                      {alt.pricingModel}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-750/50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-300 sticky left-0 bg-slate-800">
                    Open Source
                  </td>
                  {alternatives.map((alt) => (
                    <td key={alt.id} className="px-4 py-4">
                      {alt.openSource ? <Check /> : <Cross />}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-750/50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-300 sticky left-0 bg-slate-800">
                    Cloud-Hosted
                  </td>
                  {alternatives.map((alt) => (
                    <td key={alt.id} className="px-4 py-4">
                      {alt.cloudHosted ? <Check /> : <Cross />}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-750/50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-300 sticky left-0 bg-slate-800">
                    Self-Hosted
                  </td>
                  {alternatives.map((alt) => (
                    <td key={alt.id} className="px-4 py-4">
                      {alt.selfHosted ? <Check /> : <Cross />}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-750/50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-300 sticky left-0 bg-slate-800">
                    Best For
                  </td>
                  {alternatives.map((alt) => (
                    <td key={alt.id} className="px-4 py-4 text-sm text-slate-400 text-center">
                      {alt.bestFor}
                    </td>
                  ))}
                </tr>
                <tr className="hover:bg-slate-750/50">
                  <td className="px-6 py-4 text-sm font-medium text-slate-300 sticky left-0 bg-slate-800">
                    Key Features
                  </td>
                  {alternatives.map((alt) => (
                    <td key={alt.id} className="px-4 py-4 text-sm text-slate-400">
                      <ul className="space-y-1 text-left">
                        {alt.features.slice(0, 4).map((feature) => (
                          <li key={feature} className="flex items-start gap-1.5">
                            <span className="text-emerald-500 flex-shrink-0">&#8226;</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </td>
                  ))}
                </tr>
                <tr>
                  <td className="px-6 py-4 text-sm font-medium text-slate-300 sticky left-0 bg-slate-800">
                    Website
                  </td>
                  {alternatives.map((alt) => (
                    <td key={alt.id} className="px-4 py-4 text-center">
                      <a
                        href={alt.website}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block text-sm font-medium px-4 py-2 rounded-lg bg-blue-600 hover:bg-blue-500 text-white transition-colors"
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
