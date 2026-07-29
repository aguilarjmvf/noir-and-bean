# Noir & Bean — Project Plan

## Overview

A portfolio-quality marketing website for a premium specialty coffee brand. Built with Next.js 15 (App Router), TypeScript, Tailwind CSS v4, shadcn/ui, Framer Motion, Lucide React, React Hook Form, and Zod. No backend, no database, no authentication — all content is static/hardcoded.

---

## Folder Structure

```
noir_and_bean/
├── app/
│   ├── layout.tsx                  # Root layout (fonts, metadata, providers)
│   ├── page.tsx                    # Home page
│   ├── globals.css                 # Tailwind base + CSS custom properties
│   ├── shop/
│   │   └── page.tsx
│   ├── about/
│   │   └── page.tsx
│   ├── journal/
│   │   ├── page.tsx                # Journal index
│   │   └── [slug]/
│   │       └── page.tsx            # Individual journal post
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PageWrapper.tsx         # Shared page entrance animation wrapper
│   │
│   ├── ui/                         # shadcn/ui primitives (auto-generated)
│   │   ├── button.tsx
│   │   ├── input.tsx
│   │   ├── textarea.tsx
│   │   ├── badge.tsx
│   │   ├── card.tsx
│   │   ├── select.tsx
│   │   ├── separator.tsx
│   │   └── ...
│   │
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── FeaturedProducts.tsx
│   │   ├── BrandStory.tsx
│   │   ├── ProcessSection.tsx
│   │   └── TestimonialsSection.tsx
│   │
│   ├── shop/
│   │   ├── ProductGrid.tsx
│   │   ├── ProductCard.tsx
│   │   ├── ProductFilter.tsx
│   │   └── ProductModal.tsx        # Lightbox-style detail view
│   │
│   ├── about/
│   │   ├── FounderSection.tsx
│   │   ├── ValuesGrid.tsx
│   │   └── TimelineSection.tsx
│   │
│   ├── journal/
│   │   ├── PostGrid.tsx
│   │   ├── PostCard.tsx
│   │   └── PostContent.tsx         # Rendered article body
│   │
│   ├── contact/
│   │   ├── ContactForm.tsx         # react-hook-form + zod
│   │   └── ContactInfo.tsx
│   │
│   └── shared/
│       ├── SectionHeading.tsx
│       ├── AnimatedText.tsx        # Framer Motion text reveals
│       ├── ParallaxImage.tsx
│       ├── ScrollProgress.tsx
│       └── CursorGlow.tsx          # Optional: custom cursor effect
│
├── lib/
│   ├── data/
│   │   ├── products.ts             # Static product catalog
│   │   ├── journal-posts.ts        # Static blog/journal entries
│   │   └── testimonials.ts
│   ├── validations/
│   │   └── contact.ts              # Zod schema for contact form
│   └── utils.ts                    # cn() helper + misc utilities
│
├── hooks/
│   ├── useScrollProgress.ts
│   └── useReducedMotion.ts
│
├── types/
│   └── index.ts                    # Shared TypeScript interfaces
│
├── public/
│   ├── images/
│   │   ├── hero/
│   │   ├── products/
│   │   ├── about/
│   │   └── journal/
│   └── fonts/                      # Self-hosted if needed
│
├── next.config.ts
├── tailwind.config.ts
├── tsconfig.json
├── components.json                 # shadcn/ui config
└── PROJECT_PLAN.md
```

---

## Component Architecture

### Layout Shell
- **Navbar** — Fixed, transparent-on-top that transitions to opaque on scroll. Logo left, nav links center, CTA button right. Mobile: hamburger drawer.
- **Footer** — Four-column layout: brand tagline, nav links, social links, newsletter opt-in input. Full-bleed dark background.
- **PageWrapper** — Wraps every page in a Framer Motion `<motion.div>` for page-transition animations (fade + slight vertical slide).

### Design System Decisions
- **Colors**: Near-black (`#0A0A0A`) primary, warm cream (`#F5F0E8`) background, muted gold (`#C9A96E`) accent.
- **Typography**: Serif display font (e.g. Playfair Display or Cormorant) for headings; clean sans-serif (e.g. Inter or DM Sans) for body.
- **Motion**: Framer Motion `useInView` triggers for all section reveals. Staggered children for grids. Parallax on hero and feature images.
- **Spacing**: 8-point grid via Tailwind. Generous padding — this is a premium brand.

---

## Page Hierarchy

### 1. Home (`/`)
- **HeroSection** — Full-viewport, dark background, animated headline, CTA buttons, parallax hero image.
- **FeaturedProducts** — Horizontal scroll or 3-column grid of top SKUs.
- **BrandStory** — Split layout: large image left, copy + stat counters right.
- **ProcessSection** — Numbered step cards (Source → Roast → Brew → Enjoy).
- **TestimonialsSection** — Auto-scrolling marquee of customer quotes.

### 2. Shop (`/shop`)
- **ProductFilter** — Category tabs (All / Single Origin / Blends / Equipment / Merchandise).
- **ProductGrid** — Masonry-style or uniform card grid with hover reveal and quick-view.
- **ProductModal** — Slide-in drawer or modal with product details, flavor notes, and a "Notify Me" form (no real checkout).

### 3. About (`/about`)
- **FounderSection** — Full-width narrative with large portrait image.
- **ValuesGrid** — Icon + heading + body for 4–6 brand values.
- **TimelineSection** — Animated vertical timeline of the brand's story milestones.

### 4. Journal (`/journal`)
- **PostGrid** — Filtered grid of journal entries (feature post large, rest in 3-col grid).
- **[slug]** page — Full article layout: hero image, metadata bar, rich text body, related posts.
- Categories: Brew Guides, Origins, Recipes, Culture.

### 5. Contact (`/contact`)
- **ContactForm** — React Hook Form + Zod. Fields: name, email, subject (select), message. Submit shows success toast (no actual send).
- **ContactInfo** — Address block, hours, email, social links, embedded static map image.

---

## Reusable Components

| Component | Purpose |
|---|---|
| `SectionHeading` | Eyebrow label + H2 + optional subtitle, with animation |
| `AnimatedText` | Word-by-word or line-by-line reveal via Framer Motion |
| `ParallaxImage` | `next/image` wrapped with scroll-driven Y transform |
| `ScrollProgress` | Thin top bar showing page read progress |
| `ProductCard` | Image, name, origin, price, hover actions |
| `PostCard` | Thumbnail, category badge, title, excerpt, date |
| `PageWrapper` | Route-level fade/slide transition |
| `CursorGlow` | Optional custom cursor halo for desktop |

---

## Development Roadmap

### Phase 1 — Foundation
1. Initialize Next.js 15 project with TypeScript and Tailwind CSS v4.
2. Install and configure shadcn/ui, Framer Motion, Lucide React, React Hook Form, Zod.
3. Define CSS custom properties (color tokens, font stacks) in `globals.css`.
4. Build `Navbar` and `Footer`.
5. Create `PageWrapper` with route transition animation.
6. Populate `lib/data/` with all static content (products, journal posts, testimonials).
7. Define all TypeScript interfaces in `types/index.ts`.

### Phase 2 — Home Page
8. Build `HeroSection` with parallax and animated headline.
9. Build `FeaturedProducts` section.
10. Build `BrandStory` split layout.
11. Build `ProcessSection`.
12. Build `TestimonialsSection` marquee.

### Phase 3 — Shop Page
13. Build `ProductCard` and `ProductGrid`.
14. Build `ProductFilter` tab bar.
15. Build `ProductModal` drawer.

### Phase 4 — About & Journal
16. Build all About page sections.
17. Build `PostCard`, `PostGrid`, and journal index.
18. Build individual journal `[slug]` page.

### Phase 5 — Contact & Polish
19. Build `ContactForm` with validation and success state.
20. Build `ContactInfo` block.
21. Audit animations — add entrance reveals to all sections.
22. Responsive QA across mobile, tablet, and desktop breakpoints.
23. Lighthouse performance and accessibility audit.
24. Final copy, image, and metadata pass.

---

## Notes

- All images will use `next/image` with explicit width/height for LCP optimization.
- No real e-commerce or form submission — shop and contact are UI demonstrations.
- Journal posts are stored as static objects in `lib/data/journal-posts.ts` (not MDX, keeping it simple).
- `useReducedMotion` hook will disable Framer Motion animations for users who prefer reduced motion.
- `shadcn/ui` components will be customized via CSS variables to match the brand palette, not used with default styling.
