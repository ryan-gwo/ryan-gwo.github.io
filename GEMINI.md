# Project Context: Personal Portfolio & Astronomy Resource Site

This project is a high-performance personal portfolio and resource hub built with Astro, featuring a refined design system inspired by Apple and full multi-language support.

## 🚀 Project Overview

- **Purpose**: A personal website for academic showcase and a centralized repository for international astronomy competition materials (IOAA, IAO, CNAO).
- **Tech Stack**:
    - **Framework**: Astro v6+
    - **Language**: TypeScript
    - **Styling**: Custom Vanilla CSS (Apple Design System)
    - **Content**: Markdown/MDX with MathJax support for technical equations.
    - **i18n**: Supported locales: `en` (default), `zh-cn`, `zh-hk`.

## 🛠 Building and Running

| Command | Action |
| :--- | :--- |
| `npm install` | Install all dependencies. |
| `npm run dev` | Start the local development server at `http://localhost:4321`. |
| `npm run build` | Build the production-ready site into `dist/`. |
| `npm run postbuild` | Run SEO optimization scripts (located in `scripts/seo-postbuild.mjs`). |
| `npm run preview` | Preview the production build locally. |
| `npm run astro ...` | Execute Astro CLI commands. |

## 🏗 Architecture & Key Files

- **`src/pages/`**: Contains the routing structure.
    - `/` (English/Default)
    - `/zh-cn/` (Simplified Chinese)
    - `/zh-hk/` (Traditional Chinese)
- **`src/data/competitionResources.ts`**: The central data source for astronomy competition materials. Update this file to add new editions or resources.
- **`src/components/`**: Reusable UI components like `Nav.astro`, `SearchOverlay.astro`, and `Icon.astro`.
- **`src/styles/global.css`**: The core styling engine, implementing the Apple-inspired design system using CSS variables.
- **`public/assets/`**: Static resources.
    - `pdf/`: Categorized by locale (`en-us`, `zh-cn`, `zh-hk`).
    - `logos/`: Logos for institutions and competitions.
- **`DESIGN-Apple.md`**: Detailed specification for the project's visual language. **Consult this before any UI changes.**

## 📏 Development Conventions

### Design & Styling
- **Apple Aesthetics**: Adhere strictly to the guidelines in `DESIGN-Apple.md`.
- **CSS Variables**: Use the variables defined in `global.css` for colors, spacing, and typography.
- **Layout**: Prefer the `container` class for centered content. Use `section-light` and `section-dark` for alternating background sections.

### i18n (Internationalization)
- **Routing**: Ensure links use the correct locale prefix (`/zh-cn/`, `/zh-hk/`). The default locale (`en`) has no prefix.
- **Data Sync**: When adding resources to `src/data/competitionResources.ts`, ensure entries are provided for all supported locales to maintain consistency.

### Academic Content
- **Math**: Use LaTeX syntax within Markdown files. The project uses `remark-math` and `rehype-mathjax` for rendering.

### Performance & SEO
- **Post-build**: Always run `npm run build` followed by `npm run postbuild` before deployment to ensure SEO scripts are applied.
- **Images**: Place high-quality assets in `public/assets/` and use appropriate formats (SVG for icons, optimized PNG/JPG for photos).
