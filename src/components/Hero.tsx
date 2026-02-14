export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 border-b border-slate-700/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center">
          <p className="text-blue-400 font-medium text-sm tracking-wide uppercase mb-4">
            Akeyless Alternatives &mdash; Secrets Management Tools Compared
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight mb-6">
            Best Akeyless Alternatives{' '}
            <span className="text-blue-400">in 2026</span>
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto mb-6 leading-relaxed">
            Looking for an Akeyless alternative? Akeyless is a SaaS-based secrets management platform known
            for its zero-knowledge architecture and centralized credential management. But it&apos;s not the only option.
          </p>
          <p className="text-base text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need an open-source alternative, deeper cloud-native integration,
            or enterprise PAM capabilities, we&apos;ve compared the 9 best Akeyless alternatives
            to help you find the right secrets management tool for your team.
          </p>

          {/* Table of Contents */}
          <nav className="inline-flex flex-wrap justify-center gap-2 text-sm" aria-label="Page sections">
            <a href="#alternatives" className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors">
              Top 9 Alternatives
            </a>
            <a href="#comparison" className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors">
              Feature Comparison
            </a>
            <a href="#how-to-choose" className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors">
              How to Choose
            </a>
            <a href="#faq" className="px-4 py-2 rounded-lg bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:border-blue-500/50 transition-colors">
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
