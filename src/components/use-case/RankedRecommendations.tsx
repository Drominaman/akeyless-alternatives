import { UseCaseRanking } from '@/types/use-case';
import { getAlternativeById } from '@/lib/alternatives';

interface RankedRecommendationsProps {
  rankings: UseCaseRanking[];
  title?: string;
}

const rankColors: Record<number, string> = {
  1: 'bg-amber-500/20 border-amber-500/30 text-amber-400',
  2: 'bg-slate-400/20 border-slate-400/30 text-slate-300',
  3: 'bg-orange-700/20 border-orange-700/30 text-orange-400',
};

export default function RankedRecommendations({ rankings, title = "Top Recommendations" }: RankedRecommendationsProps) {
  return (
    <section className="py-16 sm:py-20 bg-slate-900/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
          {title}
        </h2>
        <div className="space-y-4">
          {rankings.map((ranking) => {
            const alt = getAlternativeById(ranking.alternativeId);
            if (!alt) return null;
            const rankStyle = rankColors[ranking.rank] || 'bg-slate-700/50 border-slate-600 text-slate-400';

            return (
              <div key={ranking.alternativeId} className="bg-slate-800 border border-slate-700 rounded-xl p-6">
                <div className="flex items-start gap-4">
                  <span className={`flex-shrink-0 w-10 h-10 rounded-full border text-sm font-bold flex items-center justify-center ${rankStyle}`}>
                    #{ranking.rank}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-semibold text-white">{alt.name}</h3>
                      <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                        {alt.category}
                      </span>
                    </div>
                    <p className="text-sm text-slate-400 mb-2">{alt.pricing}</p>
                    <p className="text-slate-300 text-sm leading-relaxed">{ranking.reason}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
