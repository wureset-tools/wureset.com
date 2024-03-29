import prefetch from '@astrojs/prefetch';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwind from '@astrojs/tailwind';
import astroI18next from 'astro-i18next';
import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://wureset.com',
  base: '/',
  integrations: [
    astroI18next(),
    sitemap(),
    prefetch(),
    react({
      include: ['**/react/*'],
    }),
    robotsTxt({
      host: 'wureset.com',
      policy: [
        {
          userAgent: 'Googlebot',
          allow: '/',
          crawlDelay: 10,
        },
        {
          userAgent: '*',
          allow: '/',
          crawlDelay: 10,
        },
      ],
    }),
    tailwind(),
  ],
});
