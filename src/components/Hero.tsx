export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] border-b-2 border-white/10">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28">
        <div className="text-center">
          <p className="text-[#FF5733] font-bold text-xs tracking-widest uppercase mb-6">
            Secrets Management Tools Compared
          </p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight mb-6 uppercase">
            Best Akeyless Alternatives{' '}
            <span className="text-[#FF5733]">2026</span>
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto mb-6 leading-relaxed">
            Looking for an Akeyless alternative? Akeyless is a SaaS-based secrets management platform known
            for its zero-knowledge architecture and centralized credential management. But it&apos;s not the only option.
          </p>
          <p className="text-base text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need an open-source alternative, deeper cloud-native integration,
            enterprise PAM capabilities, or zero vendor dependency for your highest-sensitivity accounts,
            we&apos;ve compared the 10 best Akeyless alternatives
            to help you find the right secrets management tool for your team.
          </p>

          <nav className="inline-flex flex-wrap justify-center gap-2 text-sm" aria-label="Page sections">
            <a href="#alternatives" className="px-5 py-2.5 bg-[#0a0a0a] border-2 border-white/20 text-neutral-300 hover:text-white hover:border-[#FF5733] transition-colors font-medium uppercase tracking-wide text-xs">
              Alternatives
            </a>
            <a href="#comparison" className="px-5 py-2.5 bg-[#0a0a0a] border-2 border-white/20 text-neutral-300 hover:text-white hover:border-[#FF5733] transition-colors font-medium uppercase tracking-wide text-xs">
              Comparison
            </a>
            <a href="#how-to-choose" className="px-5 py-2.5 bg-[#0a0a0a] border-2 border-white/20 text-neutral-300 hover:text-white hover:border-[#FF5733] transition-colors font-medium uppercase tracking-wide text-xs">
              How to Choose
            </a>
            <a href="#faq" className="px-5 py-2.5 bg-[#0a0a0a] border-2 border-white/20 text-neutral-300 hover:text-white hover:border-[#FF5733] transition-colors font-medium uppercase tracking-wide text-xs">
              FAQ
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
