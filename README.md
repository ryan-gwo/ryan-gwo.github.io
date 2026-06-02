# Yuze Guo Personal Website

Astro static site for `https://ryan-gwo.github.io`, combining an academic personal homepage, CV, writing pages, and a multilingual astronomy resource archive.

The site is built as a lightweight static project with custom CSS, localized routes, MathJax support for technical writing, and a post-build SEO step for sitemap and robots handling.

## Site Structure

```text
src/
  components/      Shared UI components, navigation, search, icons, and resource views
  data/            Structured resource data, especially competitionResources.ts
  layouts/         Base page and writing-post layouts
  pages/           Astro and Markdown routes
  styles/          Global visual system and responsive styling
public/
  assets/          Icons, logos, PDFs, images, and downloadable resources
  fonts/           Self-hosted display fonts
scripts/
  seo-postbuild.mjs
```

Default English pages live directly under `src/pages/`. Simplified Chinese routes live under `src/pages/zh-cn/`, and Traditional Chinese routes live under `src/pages/zh-hk/`.

## Commands

Run commands from the repository root.

| Command | Purpose |
| --- | --- |
| `npm install` | Install dependencies. Ask before downloading missing tools. |
| `npm run dev` | Start the Astro development server, usually at `localhost:4321`. |
| `npm run build` | Build the production site into `dist/` and run the SEO postbuild script. |
| `npm run preview` | Preview the built `dist/` output locally. |
| `npm run astro -- --help` | Inspect Astro CLI options. |

There is no separate test script. Use `npm run build` as the required validation step before handing off changes.

## Content and Routing

- Homepage variants: `src/pages/index.astro`, `src/pages/zh-cn/index.astro`, and `src/pages/zh-hk/index.astro`.
- Top-level pages include research, CV, writings, interests, publications, and resources.
- Writing posts are Markdown files under each locale's `writing/` folder.
- Resource archive pages are backed primarily by `src/data/competitionResources.ts`.
- Static files in `public/` are served from the site root, so `public/assets/...` becomes `/assets/...`.

When changing navigation, homepage structure, shared metadata, or public-facing resource labels, keep the three locales aligned unless the difference is intentional.

## Design System

The current visual direction is an Apple-inspired, editorial astronomy style:

- Clean glass navigation and restrained interface chrome.
- Warm off-white canvases paired with dark astronomy panels.
- Serif display typography for major headings, with system CJK serif fallbacks for Chinese pages.
- Hairline dividers and flatter surfaces instead of excessive card shadows.
- Subtle astronomical visual cues such as coordinate grids, orbital lines, and annotated research panels.

Most styling lives in `src/styles/global.css`. Consult `DESIGN-Apple.md` and `DESIGN-Claude.md` before major visual changes.

## SEO and Build Notes

`npm run build` triggers Astro's production build and then `scripts/seo-postbuild.mjs`. The postbuild step maintains sitemap and robots output, including localized and resource routes.

Avoid changing sitemap, canonical, `hreflang`, robots, or verification metadata unless the task is specifically about search indexing or SEO.

## Maintenance Rules

- Do not edit `node_modules/` or generated dependency files unless the task is dependency maintenance.
- Do not use `rm` for bulk deletion; move files to Trash when removal is necessary.
- Keep route filenames lowercase and use clear PascalCase names for reusable components.
- Prefer structured TypeScript data modules over duplicated arrays inside pages.
- For layout or content changes, validate with `npm run build`; for visual changes, also preview representative desktop and mobile routes.
