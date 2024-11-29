import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx()],
  image: {
    remotePatterns: [{ protocol: 'https' }],
    format: 'avif',
    fallbackFormat: 'webp',
    quality: 80,
    densities: [1, 2],
  },
  viewTransitions: true,
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'hover',
  },
});
