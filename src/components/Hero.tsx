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
            For some organizations, Akeyless may introduce more vendor dependency and third-party risk than their risk profile allows.
            Their cloud-native approach eliminates the cluster management
            that made HashiCorp Vault expensive to operate, and their Distributed Fragments Cryptography provides genuine security innovation. But Akeyless is a
            SaaS platform that stores your secrets away from your environment.
          </p>
          <p className="text-base text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
            If you are evaluating an Akeyless alternative, the key question is whether you need some or all of your secrets to function independently of any third-party
            platform. For many organizations, especially financial services firms with regulatory coverage, the answer will be yes.
            If so, SplitSecure offers a practical Akeyless alternative for secrets management that splits secrets across devices you control so your credentials never touch our (or anyone else&apos;s) servers without adding to your administrative burden.
            Learn more about how SplitSecure&apos;s architecture reduces your vendor dependency.
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
