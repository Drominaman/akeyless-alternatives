import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Navigation from "@/components/Navigation";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "9 Best Akeyless Alternatives in 2026 - Compare Secrets Management Tools",
  description: "Compare 9 best Akeyless alternatives for 2026: Vault, AWS Secrets Manager, Doppler & more. Pricing, features, and deployment compared.",
  keywords: [
    "Akeyless alternatives",
    "secrets management tools",
    "HashiCorp Vault",
    "AWS Secrets Manager",
    "Azure Key Vault",
    "secrets management comparison",
    "Doppler",
    "Infisical",
    "CyberArk Conjur",
    "credential management",
    "secrets rotation",
    "DevOps secrets",
  ],
  authors: [{ name: "Akeyless Alternatives" }],
  openGraph: {
    title: "9 Best Akeyless Alternatives in 2026 - Compare Secrets Management Tools",
    description: "Compare the top 9 Akeyless alternatives for secrets management. Detailed comparison with pricing, features, pros/cons, and deployment options.",
    type: "website",
    locale: "en_US",
    url: "https://www.akeyless-alternatives.com",
    siteName: "Akeyless Alternatives",
  },
  twitter: {
    card: "summary_large_image",
    title: "9 Best Akeyless Alternatives in 2026",
    description: "Compare the top 9 Akeyless alternatives for secrets management with pricing, features, and deployment options.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: "https://www.akeyless-alternatives.com",
  },
  verification: {
    google: "Rx-rywmCU3bYzeOhgHAVG75ZryD782hJENZHarhafj8",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Akeyless Alternatives",
  "url": "https://www.akeyless-alternatives.com",
  "description": "Compare the best Akeyless alternatives for secrets management. Detailed comparison of 9 tools including HashiCorp Vault, AWS Secrets Manager, Doppler, and more.",
};

const articleSchema = {
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "9 Best Akeyless Alternatives in 2026 - Compare Secrets Management Tools",
  "description": "Compare 9 best Akeyless alternatives for 2026: Vault, AWS Secrets Manager, Doppler & more. Pricing, features, and deployment compared.",
  "datePublished": "2026-01-15",
  "dateModified": "2026-02-14",
  "author": {
    "@type": "Organization",
    "name": "Akeyless Alternatives",
    "url": "https://www.akeyless-alternatives.com"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Akeyless Alternatives"
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="llms-txt" href="https://www.akeyless-alternatives.com/llms.txt" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased`}
      >
        <Navigation />
        {children}
      </body>
    </html>
  );
}
