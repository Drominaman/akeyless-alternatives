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
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center uppercase tracking-tight">
          Pros &amp; Cons Comparison
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Alternative */}
          <div className="bg-[#111] border-2 border-white/10 p-6">
            <h3 className="text-lg font-black text-white mb-5 uppercase tracking-tight">{alternativeName}</h3>
            <div className="mb-5">
              <h4 className="text-[10px] font-bold text-[#FF5733] uppercase tracking-widest mb-3">Pros</h4>
              <ul className="space-y-2">
                {alternativePros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-neutral-300">
                    <span className="text-[#FF5733] font-bold flex-shrink-0">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-3">Cons</h4>
              <ul className="space-y-2">
                {alternativeCons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-neutral-300">
                    <span className="text-neutral-600 font-bold flex-shrink-0">&ndash;</span>
                    {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Akeyless */}
          <div className="bg-[#111] border-2 border-white/10 p-6">
            <h3 className="text-lg font-black text-white mb-5 uppercase tracking-tight">Akeyless</h3>
            <div className="mb-5">
              <h4 className="text-[10px] font-bold text-[#FF5733] uppercase tracking-widest mb-3">Pros</h4>
              <ul className="space-y-2">
                {akeylessPros.map((pro) => (
                  <li key={pro} className="flex items-start gap-2 text-sm text-neutral-300">
                    <span className="text-[#FF5733] font-bold flex-shrink-0">+</span>
                    {pro}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest mb-3">Cons</h4>
              <ul className="space-y-2">
                {akeylessCons.map((con) => (
                  <li key={con} className="flex items-start gap-2 text-sm text-neutral-300">
                    <span className="text-neutral-600 font-bold flex-shrink-0">&ndash;</span>
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
