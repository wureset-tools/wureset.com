import robotsTxt from 'astro-robots-txt';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://wureset.com',
  base: '/',
  integrations: [
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
  ],
});
