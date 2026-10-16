import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://kiannordic.io',
  trailingSlash: 'ignore',
  i18n: {
    defaultLocale: 'da',
    locales: ['da', 'en'],
    routing: { prefixDefaultLocale: false },
  },
});
