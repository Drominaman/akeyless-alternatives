'use client';

import { useState } from 'react';
import Link from 'next/link';

const comparisons = [
  { slug: 'hashicorp-vault', name: 'HashiCorp Vault' },
  { slug: 'aws-secrets-manager', name: 'AWS Secrets Manager' },
  { slug: 'azure-key-vault', name: 'Azure Key Vault' },
  { slug: 'gcp-secret-manager', name: 'GCP Secret Manager' },
  { slug: 'cyberark-conjur', name: 'CyberArk Conjur' },
  { slug: 'doppler', name: 'Doppler' },
  { slug: 'infisical', name: 'Infisical' },
  { slug: 'delinea-secret-server', name: 'Delinea Secret Server' },
  { slug: '1password-business', name: '1Password Business' },
];

const categories = [
  { slug: 'open-source-secrets-management', name: 'Open Source' },
  { slug: 'cloud-secrets-management', name: 'Cloud' },
  { slug: 'enterprise-secrets-management', name: 'Enterprise' },
];

const useCases = [
  { slug: 'kubernetes-secrets-management', name: 'Kubernetes' },
  { slug: 'devops-secrets-management', name: 'DevOps' },
  { slug: 'ci-cd-secrets-management', name: 'CI/CD' },
  { slug: 'multi-cloud-secrets-management', name: 'Multi-Cloud' },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-[#0a0a0a] border-b-2 border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-14">
          <Link href="/" className="text-white font-bold text-sm sm:text-base tracking-tight flex items-center gap-2 flex-shrink-0 uppercase">
            <span className="w-6 h-6 bg-[#FF5733] flex items-center justify-center">
              <svg className="w-4 h-4 text-white" viewBox="0 0 32 32" fill="none">
                <path d="M16 7a5.5 5.5 0 0 0-5.5 5.5V15h-.5a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2h-.5v-2.5A5.5 5.5 0 0 0 16 7zm-3 5.5a3 3 0 1 1 6 0V15h-6v-2.5zm4.25 9.5a1.25 1.25 0 1 1-2.5 0v-1.5a1.25 1.25 0 1 1 2.5 0v1.5z" fill="currentColor"/>
              </svg>
            </span>
            <span className="hidden sm:inline">Akeyless Alternatives</span>
          </Link>

          <div className="hidden md:flex items-center gap-0">
            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('comparisons')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-[#FF5733] transition-colors uppercase tracking-wide flex items-center gap-1">
                Comparisons
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'comparisons' && (
                <div className="absolute top-full left-0 mt-0 w-72 bg-[#0a0a0a] border-2 border-white/20 shadow-2xl py-1 z-50">
                  {comparisons.map((c) => (
                    <Link key={c.slug} href={`/akeyless-vs-${c.slug}`} className="block px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-[#FF5733] transition-colors font-medium">
                      Akeyless vs {c.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('categories')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-[#FF5733] transition-colors uppercase tracking-wide flex items-center gap-1">
                Categories
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'categories' && (
                <div className="absolute top-full left-0 mt-0 w-72 bg-[#0a0a0a] border-2 border-white/20 shadow-2xl py-1 z-50">
                  {categories.map((c) => (
                    <Link key={c.slug} href={`/${c.slug}`} className="block px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-[#FF5733] transition-colors font-medium">
                      {c.name} Secrets Management
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <div
              className="relative"
              onMouseEnter={() => setOpenDropdown('usecases')}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <button className="px-4 py-2 text-sm font-medium text-neutral-400 hover:text-[#FF5733] transition-colors uppercase tracking-wide flex items-center gap-1">
                Use Cases
                <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="square" strokeLinejoin="miter" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {openDropdown === 'usecases' && (
                <div className="absolute top-full left-0 mt-0 w-72 bg-[#0a0a0a] border-2 border-white/20 shadow-2xl py-1 z-50">
                  {useCases.map((u) => (
                    <Link key={u.slug} href={`/${u.slug}`} className="block px-4 py-2.5 text-sm text-neutral-300 hover:text-white hover:bg-[#FF5733] transition-colors font-medium">
                      {u.name} Secrets Management
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>

          <button
            className="md:hidden p-2 text-neutral-400 hover:text-[#FF5733] transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="square" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                <path strokeLinecap="square" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t-2 border-white/10 bg-[#0a0a0a] max-h-[80vh] overflow-y-auto">
          <div className="px-4 py-4 space-y-5">
            <div>
              <p className="text-xs font-bold text-[#FF5733] uppercase tracking-widest mb-2">Comparisons</p>
              {comparisons.map((c) => (
                <Link key={c.slug} href={`/akeyless-vs-${c.slug}`} className="block py-1.5 text-sm text-neutral-300 hover:text-white font-medium" onClick={() => setMobileOpen(false)}>
                  vs {c.name}
                </Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-bold text-[#FF5733] uppercase tracking-widest mb-2">Categories</p>
              {categories.map((c) => (
                <Link key={c.slug} href={`/${c.slug}`} className="block py-1.5 text-sm text-neutral-300 hover:text-white font-medium" onClick={() => setMobileOpen(false)}>
                  {c.name}
                </Link>
              ))}
            </div>
            <div>
              <p className="text-xs font-bold text-[#FF5733] uppercase tracking-widest mb-2">Use Cases</p>
              {useCases.map((u) => (
                <Link key={u.slug} href={`/${u.slug}`} className="block py-1.5 text-sm text-neutral-300 hover:text-white font-medium" onClick={() => setMobileOpen(false)}>
                  {u.name}
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
