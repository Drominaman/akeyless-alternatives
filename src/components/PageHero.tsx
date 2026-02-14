import Breadcrumbs, { BreadcrumbItem } from './Breadcrumbs';

interface PageHeroProps {
  eyebrow: string;
  headline: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
}

export default function PageHero({ eyebrow, headline, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-900 via-slate-900 to-slate-800 border-b border-slate-700/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent" />
      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        <div className="mb-6">
          <Breadcrumbs items={breadcrumbs} />
        </div>
        <div className="text-center">
          <p className="text-blue-400 font-medium text-sm tracking-wide uppercase mb-4">
            {eyebrow}
          </p>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight mb-6">
            {headline}
          </h1>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>
  );
}
