interface ComparisonProsConsGridProps {
  alternativeName: string;
  alternativePros: string[];
  alternativeCons: string[];
  akeylessPros: string[];
  akeylessCons: string[];
}

export default function ComparisonProsConsGrid({
  alternativeName,
  alternativePros,
  alternativeCons,
  akeylessPros,
  akeylessCons,
}: ComparisonProsConsGridProps) {
  return (
    <section className="py-16 sm:py-20 bg-slate-900/50">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
          Pros &amp; Cons Comparison
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Alternative */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-5">{alternativeName}</h3>
            <div className="mb-5">
              <h4 className="text-xs font-medium text-emerald-400 uppercase tracking-wider mb-3">Pros</h4>
              <ul className="space-y-2">
                {alternativePros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-red-400 uppercase tracking-wider mb-3">Cons</h4>
              <ul className="space-y-2">
                {alternativeCons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Akeyless */}
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-white mb-5">Akeyless</h3>
            <div className="mb-5">
              <h4 className="text-xs font-medium text-emerald-400 uppercase tracking-wider mb-3">Pros</h4>
              <ul className="space-y-2">
                {akeylessPros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-medium text-red-400 uppercase tracking-wider mb-3">Cons</h4>
              <ul className="space-y-2">
                {akeylessCons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-slate-300">
                    <svg className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
