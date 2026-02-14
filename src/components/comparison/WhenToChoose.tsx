interface WhenToChooseProps {
  alternativeName: string;
  whenToChooseAlternative: string[];
  whenToChooseAkeyless: string[];
}

export default function WhenToChoose({ alternativeName, whenToChooseAlternative, whenToChooseAkeyless }: WhenToChooseProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-black text-white mb-8 text-center uppercase tracking-tight">
          When to Choose Each Tool
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#111] border-2 border-[#FF5733]/30 p-6">
            <h3 className="text-sm font-bold text-[#FF5733] mb-4 uppercase tracking-widest">
              Choose {alternativeName} when:
            </h3>
            <ul className="space-y-3">
              {whenToChooseAlternative.map((reason) => (
                <li key={reason} className="flex items-start gap-2 text-sm text-neutral-300">
                  <span className="text-[#FF5733] font-bold flex-shrink-0 mt-0.5">+</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#111] border-2 border-white/10 p-6">
            <h3 className="text-sm font-bold text-neutral-400 mb-4 uppercase tracking-widest">
              Choose Akeyless when:
            </h3>
            <ul className="space-y-3">
              {whenToChooseAkeyless.map((reason) => (
                <li key={reason} className="flex items-start gap-2 text-sm text-neutral-400">
                  <span className="text-neutral-600 font-bold flex-shrink-0 mt-0.5">+</span>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
