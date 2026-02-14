import { FeatureComparisonRow } from '@/types/alternative';

interface HeadToHeadTableProps {
  alternativeName: string;
  rows: FeatureComparisonRow[];
}

export default function HeadToHeadTable({ alternativeName, rows }: HeadToHeadTableProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center uppercase tracking-tight">
          Feature-by-Feature Comparison
        </h2>
        <div className="bg-[#111] border-2 border-white/10 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b-2 border-white/10">
                  <th className="px-6 py-4 text-left text-xs font-bold text-neutral-400 w-1/3 uppercase tracking-widest">Feature</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-[#FF5733] w-1/3 uppercase tracking-widest">{alternativeName}</th>
                  <th className="px-6 py-4 text-left text-xs font-bold text-neutral-400 w-1/3 uppercase tracking-widest">Akeyless</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {rows.map((row) => (
                  <tr key={row.feature} className="hover:bg-white/5">
                    <td className="px-6 py-4 text-sm font-bold text-white">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-neutral-300">{row.alternative}</td>
                    <td className="px-6 py-4 text-sm text-neutral-400">{row.akeyless}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
