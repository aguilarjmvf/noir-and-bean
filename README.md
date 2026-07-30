<div align="center">

# ☕ Noir &amp; Bean

**Coffee Worth Slowing Down For.**

A portfolio-quality marketing website for a premium specialty‑coffee brand — dark‑luxury editorial design, buttery Framer Motion interactions, and a fully static, backend‑free architecture.

[![Next.js](https://img.shields.io/badge/Next.js-15.3-000000?logo=next.js&logoColor=white)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-149ECA?logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-3178C6?logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4-06B6D4?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12-0055FF?logo=framer&logoColor=white)](https://www.framer.com/motion/)
[![License: MIT](https://img.shields.io/badge/License-MIT-C9A96E.svg)](#-license)

</div>

---

## 📖 Overview

**Noir &amp; Bean** is a five‑page marketing site for a fictional single‑origin coffee roaster based in Portland, OR. It was built as a front‑end craft showcase: every page is composed from a small, reusable design system and animated with restraint, following a strict brand guide.

There is **no backend, database, or authentication** — all content is hardcoded and type‑safe, making the project trivial to deploy anywhere static Next.js is supported. Forms (newsletter, contact) validate fully on the client and simulate submission.

The design language is _"Kinfolk magazine meets specialty roaster"_: warm parchment surfaces, noir dark sections, a single gold accent, Cormorant Garamond display type over DM Sans, generous whitespace, and motion that reveals rather than distracts.

| | |
|---|---|
| **Pages** | Home · Shop · About · Journal · Contact |
| **Type** | Static marketing site (no server data) |
| **Status** | Complete — SEO‑optimized and accessibility‑reviewed |

---

## ✨ Features

### Pages &amp; content
- **Home** — full‑bleed hero, featured products, brand story, brewing process, testimonials, newsletter
- **Shop** — filterable product grid (by roast profile) with animated layout transitions
- **About** — story, mission, vision, founder profiles, company timeline, philosophy CTA
- **Journal** — editorial article grid (featured + recent posts)
- **Contact** — validated contact form, business info, FAQ accordion, map placeholder

### Design system
- 🧩 Reusable primitives — `Button`, `Input`, `Badge`, `Separator`, `Container`, `SectionTitle`, `ProductCard`, `BlogCard`, `TestimonialCard`, `Newsletter`
- 🎨 CSS‑first Tailwind v4 theme with brand tokens (`@theme`) — colors, fonts, shadows, radii
- 🔤 `next/font` self‑hosted Google Fonts (Cormorant Garamond + DM Sans), zero layout shift
- 📐 8‑point spacing grid, editorial max‑widths (1280 / 720)

### Motion &amp; UX
- 🎬 Subtle scroll‑reveal animations (`useInView`) throughout
- 🔀 Page transitions via App Router `template.tsx`
- 📊 Scroll‑progress bar, scroll‑to‑top control, animated nav underline (`layoutId`)
- ♿ Honors `prefers-reduced-motion` in both JS and CSS

### Forms
- ✅ **React Hook Form + Zod** schema validation (contact + newsletter)
- 💬 Inline error messaging and animated success states — no backend required

### SEO, performance &amp; accessibility
- 🔎 Per‑page metadata, Open Graph &amp; Twitter cards, dynamically generated OG image (`next/og`)
- 🤖 `robots.txt` + `sitemap.xml` (Next metadata routes) and JSON‑LD structured data (Organization / CafeOrCoffeeShop / WebSite)
- 🖼️ `next/image` with AVIF/WebP output, responsive `sizes`, and priority LCP loading
- 🧭 Semantic landmarks, skip link, focus‑visible rings, `aria` labels, keyboard‑navigable menus

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| **Framework** | [Next.js 15](https://nextjs.org/) (App Router) |
| **Language** | [TypeScript 5](https://www.typescriptlang.org/) (strict) |
| **UI runtime** | [React 19](https://react.dev/) |
| **Styling** | [Tailwind CSS v4](https://tailwindcss.com/) (CSS‑first `@theme`) |
| **Animation** | [Framer Motion 12](https://www.framer.com/motion/) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **Forms** | [React Hook Form](https://react-hook-form.com/) + [Zod](https://zod.dev/) |
| **UI patterns** | [shadcn/ui](https://ui.shadcn.com/) conventions (primitives authored manually) |
| **Utilities** | `clsx` + `tailwind-merge` (`cn` helper), `class-variance-authority` |
| **Tooling** | ESLint (`eslint-config-next`), PostCSS |

---

## 🚀 Installation

### Prerequisites
- **Node.js 18.18+** (18.20 LTS recommended)
- **npm** (or pnpm / yarn / bun)

### Setup

```bash
# 1. Clone the repository
git clone https://github.com/your-username/noir-and-bean.git
cd noir-and-bean

# 2. Install dependencies
npm install

# 3. Start the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Available scripts

| Script | Description |
|---|---|
| `npm run dev` | Start the development server (hot reload) |
| `npm run build` | Create an optimized production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

### Environment variables

All content is static, so **no environment variables are required** to run locally. For correct absolute URLs in metadata, sitemap, and structured data on a deployed site, set:

```bash
# .env.local  (optional)
NEXT_PUBLIC_SITE_URL=https://your-domain.com
```

If unset, it falls back to `https://noirandbean.com`.

> **Windows note:** Tailwind v4 relies on a native `@tailwindcss/oxide` binding. If a build fails with _"Cannot find native binding,"_ the platform package (`@tailwindcss/oxide-win32-x64-msvc`) is already pinned as a direct dependency to work around an npm optional‑dependency bug. A clean `npm install` after removing `node_modules` and `package-lock.json` resolves most cases.

---

## 📁 Folder Structure

```
noir_and_bean/
├── app/                      # Next.js App Router
│   ├── layout.tsx            # Root layout: fonts, metadata, nav/footer, structured data
│   ├── template.tsx          # Page-transition wrapper (re-mounts per navigation)
│   ├── page.tsx              # Home
│   ├── globals.css           # Tailwind v4 @theme tokens + base styles
│   ├── icon.svg              # Favicon (file-convention)
│   ├── opengraph-image.tsx   # Dynamically generated OG/Twitter image (next/og)
│   ├── robots.ts             # robots.txt (metadata route)
│   ├── sitemap.ts            # sitemap.xml (metadata route)
│   ├── shop/page.tsx
│   ├── about/page.tsx
│   ├── journal/page.tsx
│   └── contact/page.tsx
│
├── components/
│   ├── layout/               # Navbar, Footer, FooterNewsletter
│   ├── shared/               # Design system + cross-page pieces
│   │   ├── Container.tsx  SectionTitle.tsx  Badge.tsx
│   │   ├── ProductCard.tsx  BlogCard.tsx  TestimonialCard.tsx
│   │   ├── Newsletter.tsx  ScrollProgress.tsx  ScrollToTop.tsx
│   │   └── StructuredData.tsx
│   ├── ui/                   # Low-level primitives (button, input, separator)
│   ├── home/                 # Home page sections
│   ├── shop/                 # Shop page sections (+ client filter)
│   ├── about/                # About page sections
│   ├── journal/              # Journal page sections
│   └── contact/              # Contact page sections (form, info, FAQ, map)
│
├── lib/
│   ├── data/                 # Static content: products, posts, testimonials, nav
│   ├── site.ts               # Central site config (URL, name, description, keywords)
│   ├── motion.ts             # Shared Framer Motion easing curve
│   └── utils.ts              # cn() class-merge helper
│
├── types/index.ts            # Shared TypeScript interfaces
│
├── PROJECT_PLAN.md           # Project scope & page plan
├── BRAND_GUIDE.md            # Colors, typography, spacing, UI rules
├── CONTENT.md                # All page copy
├── IMAGE_GUIDE.md            # Image sourcing per section
├── next.config.ts            # Image optimization, package-import tree-shaking
└── tsconfig.json
```

---

## 📸 Screenshots

> Add screenshots to `docs/screenshots/` and they will render below.

| Home — Hero | Shop — Product Grid |
|:---:|:---:|
| ![Home hero](docs/screenshots/home-hero.png) | ![Shop grid](docs/screenshots/shop-grid.png) |

| About — Timeline | Contact — Form &amp; Map |
|:---:|:---:|
| ![About timeline](docs/screenshots/about-timeline.png) | ![Contact page](docs/screenshots/contact.png) |

| Journal — Article Grid | Mobile — Navigation |
|:---:|:---:|
| ![Journal grid](docs/screenshots/journal-grid.png) | ![Mobile menu](docs/screenshots/mobile-menu.png) |

---

## ☁️ Deployment

This is a standard Next.js App Router project and deploys anywhere Next.js is supported.

### Vercel (recommended)

1. Push the repository to GitHub/GitLab/Bitbucket.
2. Import the project at [vercel.com/new](https://vercel.com/new).
3. Vercel auto‑detects Next.js — no configuration needed.
4. (Optional) Add the `NEXT_PUBLIC_SITE_URL` environment variable set to your production domain so metadata, the sitemap, and structured data emit absolute URLs.
5. Deploy. 🎉

### Other platforms

Any host that runs a Node server or builds Next.js works — **Netlify**, **Cloudflare Pages**, **Render**, **Railway**, or a self‑hosted Node server:

```bash
npm run build
npm run start   # serves on http://localhost:3000
```

Remote images are loaded from Unsplash/Pexels, already allow‑listed in [`next.config.ts`](next.config.ts). Add any new image host there before referencing it.

---

## 📄 License

Released under the **MIT License** — see [`LICENSE`](LICENSE) for details.

> _Noir &amp; Bean is a fictional brand created for portfolio and educational purposes. All copy is original; imagery is sourced from royalty‑free providers (Unsplash / Pexels). Replace brand assets and content before any commercial use._

---

<div align="center">
<sub>Built with Next.js, Tailwind CSS, and Framer Motion · Roasted weekly in Portland, OR ☕</sub>
</div>
