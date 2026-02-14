import type { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Akeyless Alternatives',
    short_name: 'Akeyless Alt',
    description: 'Compare the best Akeyless alternatives for secrets management',
    start_url: '/',
    display: 'standalone',
    background_color: '#111111',
    theme_color: '#FF5733',
    icons: [
      {
        src: '/icon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
    ],
  };
}
