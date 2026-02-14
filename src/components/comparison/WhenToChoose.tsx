interface WhenToChooseProps {
  alternativeName: string;
  whenToChooseAlternative: string[];
  whenToChooseAkeyless: string[];
}

export default function WhenToChoose({ alternativeName, whenToChooseAlternative, whenToChooseAkeyless }: WhenToChooseProps) {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-8 text-center">
          When to Choose Each Tool
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-800 border border-blue-500/30 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              Choose {alternativeName} when:
            </h3>
            <ul className="space-y-3">
              {whenToChooseAlternative.map((reason) => (
                <li key={reason} className="flex items-start gap-2 text-sm text-slate-300">
                  <svg className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                  {reason}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-slate-800 border border-slate-700 rounded-xl p-6">
            <h3 className="text-lg font-semibold text-slate-300 mb-4">
              Choose Akeyless when:
            </h3>
            <ul className="space-y-3">
              {whenToChooseAkeyless.map((reason) => (
                <li key={reason} className="flex items-start gap-2 text-sm text-slate-400">
                  <svg className="w-5 h-5 text-slate-500 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
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
