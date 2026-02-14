import Breadcrumbs, { BreadcrumbItem } from './Breadcrumbs';

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHero({ eyebrow, headline, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0a0a0a] border-b-2 border-white/10">
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="text-center">
          <p className="text-[#FF5733] font-bold text-xs tracking-widest uppercase mb-6">
            {eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight mb-6 uppercase">
            {headline}
          </h1>
          <p className="text-lg sm:text-xl text-neutral-400 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
