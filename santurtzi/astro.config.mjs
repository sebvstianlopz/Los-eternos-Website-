// @ts-check
import { defineConfig } from 'astro/config';

// Served from the repo's GitHub Pages site at /firstrepo-/santurtzi/.
// For a custom domain, build with BASE_PATH=/ and SITE_URL=https://your-domain.
const site = process.env.SITE_URL ?? 'https://sebvstianlopz.github.io';
const base = process.env.BASE_PATH ?? '/firstrepo-/santurtzi';

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
});
