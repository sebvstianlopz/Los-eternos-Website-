// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The site is served at the root of its own domain (GitHub Pages with a custom domain).
// To build it for a sub-path instead, set BASE_PATH (e.g. /some-path) and SITE_URL.
const site = process.env.SITE_URL ?? 'https://eternoscarrental.com';
const base = process.env.BASE_PATH ?? '/';

export default defineConfig({
  site,
  base,
  trailingSlash: 'always',
  build: { inlineStylesheets: 'always' },
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: { prefixDefaultLocale: false },
  },
  integrations: [
    sitemap({
      i18n: { defaultLocale: 'es', locales: { es: 'es-DO', en: 'en-US' } },
    }),
  ],
});
