import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/chtml';

export default defineConfig({
  site: 'https://ryan-gwo.github.io',
  integrations: [sitemap()],
  i18n: {
    locales: ['en', 'zh-cn', 'zh-hk'],
    defaultLocale: 'en',
    routing: {
      prefixDefaultLocale: false,
    },
  },
  markdown: {
    remarkPlugins: [remarkMath],
    rehypePlugins: [[rehypeMathjax, {
      tex: {
        tags: 'ams',
        processRefs: true,
      },
      chtml: {
        fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2',
      },
    }]],
  },
});