import { UseCaseRanking } from '@/types/use-case';
import { getAlternativeById } from '@/lib/alternatives';

interface RankedRecommendationsProps {
  rankings: UseCaseRanking[];
  title?: string;
}

export default function RankedRecommendations({ rankings, title = "Top Recommendations" }: RankedRecommendationsProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center uppercase tracking-tight">
          {title}
        </h2>
        <div className="space-y-3">
          {rankings.map((ranking) => {
            const alt = getAlternativeById(ranking.alternativeId);
            if (!alt) return null;

            return (
              <div key={ranking.alternativeId} className="bg-[#111] border-2 border-white/10 p-6">
                <div className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-10 h-10 bg-[#FF5733] text-white text-sm font-black flex items-center justify-center">
                    #{ranking.rank}
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-1">
                      <h3 className="text-lg font-bold text-white">{alt.name}</h3>
                      <span className="inline-block text-[10px] font-bold px-2 py-0.5 bg-white/5 text-[#FF5733] border border-[#FF5733]/30 uppercase tracking-widest">
                        {alt.category}
                      </span>
                    </div>
                    <p className="text-sm text-neutral-500 mb-2">{alt.pricing}</p>
                    <p className="text-neutral-400 text-sm leading-relaxed">{ranking.reason}</p>
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
