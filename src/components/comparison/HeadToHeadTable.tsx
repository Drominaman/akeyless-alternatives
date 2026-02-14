import { FeatureComparisonRow } from '@/types/alternative';

interface HeadToHeadTableProps {
  alternativeName: string;
  rows: FeatureComparisonRow[];
}

export default function HeadToHeadTable({ alternativeName, rows }: HeadToHeadTableProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
          Feature-by-Feature Comparison
        </h2>
        <div className="bg-slate-800 border border-slate-700 rounded-xl overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-700">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300 w-1/3">Feature</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-blue-400 w-1/3">{alternativeName}</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-slate-300 w-1/3">Akeyless</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-700/50">
                {rows.map((row) => (
                  <tr key={row.feature} className="hover:bg-slate-750/50">
                    <td className="px-6 py-4 text-sm font-medium text-white">{row.feature}</td>
                    <td className="px-6 py-4 text-sm text-slate-300">{row.alternative}</td>
                    <td className="px-6 py-4 text-sm text-slate-400">{row.akeyless}</td>
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
