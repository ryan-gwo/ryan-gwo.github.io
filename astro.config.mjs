import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://ryan-gwo.github.io',
  i18n: {
    locales: ['en', 'zh-cn', 'zh-hk'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
});