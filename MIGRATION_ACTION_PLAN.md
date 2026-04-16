# Migration Action Plan: React to Pure HTML, CSS and JavaScript

## Objective

Migrate this site from the current Vite + React application to a static implementation using only HTML, CSS and vanilla JavaScript, while preserving the existing visual design, behaviour and content.

The current implementation is centered around:

- [package.json](package.json)
- [vite.config.ts](vite.config.ts)
- [index.html](index.html)
- [src/main.tsx](src/main.tsx)
- [src/app/App.tsx](src/app/App.tsx)
- [src/app/routes.tsx](src/app/routes.tsx)
- [src/app/components/Layout.tsx](src/app/components/Layout.tsx)
- [src/styles/index.css](src/styles/index.css)
- [src/styles/tailwind.css](src/styles/tailwind.css)
- [src/styles/theme.css](src/styles/theme.css)
- [src/styles/fonts.css](src/styles/fonts.css)
- [default_shadcn_theme.css](default_shadcn_theme.css)

---

## Target Architecture

The migrated site should use:

- **HTML** for page structure
- **CSS** for all styling
- **Vanilla JavaScript** for interactivity
- **Optional CDNs** for third-party UI behaviour or iconography only where needed

Recommended target structure:

- `index.html`
- `about-the-order.html`
- `contact-us.html`
- `data-protection.html`
- `district-chapters.html`
- `events.html`
- `faq.html`
- `latest-news.html`
- `rose-croix-masonry.html`
- `assets/`
  - `css/`
  - `js/`
  - `images/`
  - `fonts/`
- `partials/` or `components/` for reusable HTML fragments if a simple include strategy is used

If a single-page static site is preferred, use hash-based navigation plus progressive enhancement in vanilla JS. If SEO and direct linking matter, use one HTML file per route.

---

## Migration Principles

1. **Preserve design first**
   - Reuse the existing CSS tokens, spacing, typography and colours from [default_shadcn_theme.css](default_shadcn_theme.css) and the files under [src/styles/](src/styles/).

2. **Remove framework dependency gradually**
   - Replace React rendering and routing only after the static HTML structure is stable.

3. **Prefer extraction over reimplementation**
   - Copy stable markup and styles from the current React pages into static HTML before rewriting behaviour.

4. **Use CDN libraries sparingly**
   - Only use CDNs where they materially reduce effort while maintaining the same appearance or behaviour.

---

## Phase 1: Audit the Current App

### 1.1 Inventory all routes and pages

Use [src/app/routes.tsx](src/app/routes.tsx) and the files under [src/app/pages/](src/app/pages/) to build a route inventory.

Expected initial route set includes pages such as:

- [src/app/pages/Home.tsx](src/app/pages/Home.tsx)
- [src/app/pages/AboutTheOrder.tsx](src/app/pages/AboutTheOrder.tsx)
- [src/app/pages/ContactUs.tsx](src/app/pages/ContactUs.tsx)
- [src/app/pages/DataProtection.tsx](src/app/pages/DataProtection.tsx)
- [src/app/pages/DistrictChapters.tsx](src/app/pages/DistrictChapters.tsx)
- [src/app/pages/Events.tsx](src/app/pages/Events.tsx)
- [src/app/pages/FAQ.tsx](src/app/pages/FAQ.tsx)
- [src/app/pages/LatestNews.tsx](src/app/pages/LatestNews.tsx)
- [src/app/pages/RoseCroixMasonry.tsx](src/app/pages/RoseCroixMasonry.tsx)

**Deliverable:** route-to-output-page mapping table.

### 1.2 Inventory shared layout and reusable UI

Review:

- [src/app/App.tsx](src/app/App.tsx)
- [src/app/components/Layout.tsx](src/app/components/Layout.tsx)
- [src/app/components/ui/](src/app/components/ui/)
- [src/app/components/figma/](src/app/components/figma/)

Classify each component as one of:

- static markup only
- styling wrapper only
- interactive widget
- third-party library wrapper

**Deliverable:** component migration matrix.

### 1.3 Inventory current dependencies

Use [package.json](package.json) to group dependencies into:

- **Can be removed completely**
  - `react`, `react-dom`, `react-router`, Vite-related dependencies
- **May be replaced with static HTML/CSS**
  - shadcn/Radix-style UI wrappers
  - MUI layout or icon usage
- **May need vanilla JS replacements**
  - accordion, dialog, tabs, carousel, dropdown, animation, forms

**Deliverable:** dependency replacement list.

---

## Phase 2: Define the Static Build Strategy

### 2.1 Choose page model

Select one of these approaches:

#### Option A: Multi-page static site
Best for direct links, SEO and simpler no-framework hosting.

- One `.html` file per route
- Shared header/footer injected via small JS include script or duplicated initially
- Standard relative links between pages

#### Option B: Single-page static site with hash routing
Best if minimising file count matters.

- One `index.html`
- Sections shown/hidden with vanilla JS
- URLs like `#/about-the-order`

**Recommendation:** use **Option A**.

### 2.2 Choose styling strategy

Recommended approach:

- Keep and adapt the existing CSS from:
  - [src/styles/fonts.css](src/styles/fonts.css)
  - [src/styles/index.css](src/styles/index.css)
  - [src/styles/theme.css](src/styles/theme.css)
  - [src/styles/tailwind.css](src/styles/tailwind.css)
  - [default_shadcn_theme.css](default_shadcn_theme.css)

- Consolidate into static files such as:
  - `assets/css/theme.css`
  - `assets/css/site.css`

If utility classes generated by Tailwind are deeply embedded in the markup, there are two realistic options:

1. **Keep a precompiled CSS output** generated once from the current project and ship it as plain CSS.
2. **Replace utility-heavy markup** with semantic classes gradually.

**Recommendation:** start with precompiled CSS.

### 2.3 Choose JS strategy

Create small focused vanilla JS modules:

- `assets/js/nav.js`
- `assets/js/accordion.js`
- `assets/js/dialog.js`
- `assets/js/carousel.js`
- `assets/js/forms.js`
- `assets/js/includes.js`

Avoid recreating a framework. Use plain DOM APIs and event delegation.

---

## Phase 3: Extract the Visual System

### 3.1 Preserve global design tokens

Move or copy the token system from [default_shadcn_theme.css](default_shadcn_theme.css) into the static CSS layer.

Preserve:

- colour variables
- spacing/radius variables
- typography settings
- dark mode variables if used

### 3.2 Preserve typography and assets

Audit references from:

- [src/styles/fonts.css](src/styles/fonts.css)
- [src/imports/](src/imports/)

Copy required assets into `assets/fonts/` and `assets/images/`.

### 3.3 Resolve Figma asset imports

The current app uses a Vite resolver in [`figmaAssetResolver`](vite.config.ts) inside [vite.config.ts](vite.config.ts) for `figma:asset/...` imports.

These imports must be replaced with direct static paths such as:

- `/assets/images/...`
- `./assets/images/...`

**Deliverable:** all `figma:asset/...` references converted to normal URLs.

---

## Phase 4: Convert Layout and Routing

### 4.1 Rebuild the global shell in HTML

Start with the shared app shell from:

- [index.html](index.html)
- [src/app/App.tsx](src/app/App.tsx)
- [src/app/components/Layout.tsx](src/app/components/Layout.tsx)

Create static equivalents for:

- document head metadata
- header
- navigation
- main content wrapper
- footer

### 4.2 Replace React Router

Current routing logic is defined in [src/app/routes.tsx](src/app/routes.tsx).

Replace with:

- plain anchor navigation for multi-page output

Update all internal links accordingly.

---

## Phase 5: Convert Each Page

For each page in [src/app/pages/](src/app/pages/):

1. Render the page in the browser.
2. Copy the stable DOM structure into a target `.html` file.
3. Replace React-specific syntax:
   - `className` -> `class`
   - inline JSX expressions -> static HTML or DOM-driven JS
   - component props -> fixed attributes or data attributes
4. Replace imported assets with static paths.
5. Reconnect any interactive features with vanilla JS.

Suggested order:

1. [src/app/pages/Home.tsx](src/app/pages/Home.tsx)
2. [src/app/pages/AboutTheOrder.tsx](src/app/pages/AboutTheOrder.tsx)
3. [src/app/pages/FAQ.tsx](src/app/pages/FAQ.tsx)
4. [src/app/pages/Events.tsx](src/app/pages/Events.tsx)
5. [src/app/pages/LatestNews.tsx](src/app/pages/LatestNews.tsx)
6. [src/app/pages/DistrictChapters.tsx](src/app/pages/DistrictChapters.tsx)
7. [src/app/pages/RoseCroixMasonry.tsx](src/app/pages/RoseCroixMasonry.tsx)
8. [src/app/pages/ContactUs.tsx](src/app/pages/ContactUs.tsx)
9. [src/app/pages/DataProtection.tsx](src/app/pages/DataProtection.tsx)

**Deliverable:** one static HTML page per route.

---

## Phase 6: Replace Interactive Components

### 6.1 Accordion, tabs, dropdowns, dialogs

Many current interactions may come from Radix or shadcn-related components declared in [package.json](package.json) and likely wrapped in [src/app/components/ui/](src/app/components/ui/).

Replacement options:

- **Preferred:** vanilla JS + semantic HTML
- **Optional CDN fallback:** lightweight libraries only if behaviour is complex

Suggested replacements:

- accordion -> native `<details>` where design permits, otherwise custom JS
- tabs -> buttons with `aria-selected`, `hidden`, and small JS controller
- dialogs -> native `<dialog>` where possible
- dropdowns/menus -> button + positioned panel + click-outside logic

### 6.2 Carousels/sliders

If the current site uses `embla-carousel-react` or `react-slick` from [package.json](package.json):

- First choice: CSS scroll-snap + vanilla JS controls
- CDN fallback: Embla core or Swiper via CDN if exact behaviour is needed

### 6.3 Animation

If the site depends on `motion`:

- Replace simple entrance/hover effects with CSS transitions and keyframes
- Use the Web Animations API only where sequencing is necessary

### 6.4 Forms

If forms use `react-hook-form`:

- Replace with semantic HTML forms
- Add lightweight validation with vanilla JS
- Keep validation messages and submission flow visually identical

---

## CDN Guidance

CDNs are acceptable only where they reduce migration risk without reintroducing framework complexity.

Good CDN candidates:

- icon libraries
- carousel libraries
- animation helpers
- font delivery

Avoid CDN dependence for:

- core page rendering
- routing
- basic layout/styling that can live in local CSS/JS
