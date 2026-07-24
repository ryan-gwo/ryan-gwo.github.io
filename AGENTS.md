# Repository Guidelines

## Project Structure & Module Organization

This is an Astro static site for `ryan-gwo.github.io`. Source lives in `src/`:

- `pages/` contains Astro and Markdown routes. English routes are at the root; localized pages are in `zh-cn/` and `zh-hk/`.
- `components/` provides reusable page sections and UI; `layouts/` contains shared page shells.
- `data/` holds typed, structured content, notably `competitionResources.ts`; `styles/global.css` is the central design system.
- `public/` contains directly served images, fonts, PDFs, and SEO files. A file at `public/assets/x.svg` is referenced as `/assets/x.svg`.
- `scripts/seo-postbuild.mjs` updates generated SEO output after production builds.

## Build, Test, and Development Commands

Run commands from the repository root (with Node.js 22.12+):

```bash
npm install          # install dependencies
npm run dev          # start Astro development server (normally :4321)
npm run build        # build dist/ and run the SEO postbuild step
npm run preview      # serve the built site locally
```

There is no separate test suite. Treat `npm run build` as the required validation before handoff. For visual work, inspect representative English, Simplified Chinese, and Traditional Chinese pages at desktop and mobile widths.

## Coding Style & Naming Conventions

Follow existing Astro, TypeScript, and CSS patterns. Use two-space indentation and keep components focused. Name reusable components in PascalCase (for example, `SearchOverlay.astro`), route files in lowercase, and use clear camelCase identifiers in TypeScript. Prefer extending data modules over copying arrays into pages. Keep locale variants aligned whenever navigation, layout, metadata, or public labels change intentionally across languages.

## Content, Design, and SEO

Read `DESIGN-Apple.md` and `DESIGN-Claude.md` before substantial visual changes. Preserve the editorial astronomy style and use the shared tokens in `src/styles/global.css`. Avoid modifying canonicals, `hreflang`, sitemaps, robots, or verification metadata unless the task specifically concerns search indexing.

## Commits & Pull Requests

Use concise, imperative commit subjects such as `Refactor portfolio content and asset structure` or `Update project README`. Keep commits focused. Pull requests should explain the user-visible change, link relevant issues when available, list validation performed, and include before/after screenshots for visual changes.

## Maintenance

Do not edit `node_modules/` or generated build output. Never use `rm` for bulk deletion; move unneeded files to Trash instead.
