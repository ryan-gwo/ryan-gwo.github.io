import { defineConfig } from 'astro/config';
import remarkMath from 'remark-math';
import rehypeMathjax from 'rehype-mathjax/chtml';

export default defineConfig({
  site: 'https://ryan-gwo.github.io',
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
        packages: { '[+]': ['boldsymbol'] },
      },
      chtml: {
        fontURL: 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/output/chtml/fonts/woff-v2',
      },
    }]],
  },
});