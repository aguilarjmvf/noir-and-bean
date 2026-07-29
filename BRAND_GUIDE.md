# Noir & Bean — Brand Guide

---

## Brand Story

Noir & Bean was born from a single conviction: that a truly great cup of coffee is an act of intention, not convenience. Founded by obsessive roasters who spent years tracing beans from remote farms in Ethiopia, Colombia, and Guatemala, the brand exists at the intersection of craft and ritual. Every bag carries a story — the altitude of the farm, the name of the farmer, the hours in the drum. We don't sell coffee. We sell the quiet ceremony of making something worth slowing down for.

---

## Mission

To source, roast, and share specialty coffee that honors every hand it passed through — from the farmer to the cup.

---

## Vision

A world where people trade the ordinary for the exceptional, one deliberate brew at a time.

---

## Target Audience

**Primary:** Urban professionals, 25–45, who treat quality consumables as a form of self-expression. They read ingredient labels, own a pour-over, and consider their morning ritual non-negotiable.

**Secondary:** Home baristas, third-wave coffee enthusiasts, and gift buyers seeking premium, story-driven products.

**Mindset:** Quality over quantity. Provenance matters. Aesthetics are not superficial — they are a signal of care.

---

## Color Palette

| Role | Name | Hex | Usage |
|---|---|---|---|
| Primary | Noir | `#0A0A0A` | Backgrounds, headers, high-contrast text |
| Background | Parchment | `#F5F0E8` | Page backgrounds, light sections |
| Accent | Gold | `#C9A96E` | CTAs, highlights, decorative lines, hover states |
| Surface | Espresso | `#1C1612` | Dark cards, footer, modal overlays |
| Muted | Ash | `#6B6560` | Secondary text, meta labels, placeholders |
| Border | Linen | `#E2DAD0` | Dividers, card borders, input outlines |
| White | Cream | `#FDFAF5` | Text on dark, icon fills on dark backgrounds |

**Usage rules:**
- Gold is used sparingly — one accent element per section maximum.
- Never place Ash text on Parchment at small sizes (fails contrast). Use Espresso instead.
- Dark sections (Noir or Espresso background) always use Cream body text and Gold accents.

---

## Typography

### Typefaces

| Role | Family | Style |
|---|---|---|
| Display / Headings | Cormorant Garamond | Serif, elegant, high contrast |
| Body / UI | DM Sans | Geometric sans-serif, clean, legible |
| Accent / Labels | DM Sans | All-caps, tracked, weight 500 |

### Scale (rem, base 16px)

| Token | Size | Usage |
|---|---|---|
| `text-hero` | 4.5rem / 72px | Hero headline |
| `text-display` | 3rem / 48px | Page titles, section openers |
| `text-heading` | 2rem / 32px | H2 section headings |
| `text-subheading` | 1.375rem / 22px | H3 card titles |
| `text-body-lg` | 1.125rem / 18px | Lead paragraphs |
| `text-body` | 1rem / 16px` | Default body copy |
| `text-sm` | 0.875rem / 14px` | Captions, meta, labels |
| `text-xs` | 0.75rem / 12px` | Eyebrow tags, badges |

### Rules
- Display headings: Cormorant Garamond, weight 300–400, generous line-height (1.1–1.2).
- Body: DM Sans, weight 400, line-height 1.6–1.7.
- Eyebrow labels: DM Sans, weight 500, `tracking-widest`, all-caps, Gold color.
- Never mix serif and serif — Cormorant for display only, never body.

---

## Design Principles

1. **Restraint is luxury.** Whitespace is not empty — it is intentional. Resist the urge to fill every gap.
2. **Warmth, not cold minimalism.** The palette and serif type should feel hand-crafted, not clinical.
3. **Hierarchy is the story.** Every section has one dominant element. Headlines first, then image, then body.
4. **Motion earns attention.** Animations reveal, they don't distract. Every motion has a purpose.
5. **Tactile before digital.** Design should feel like it could exist in print — weight, texture, grain.

---

## UI Style

- **Overall aesthetic:** Dark luxury editorial. Think Kinfolk magazine meets specialty roaster.
- **Hero sections:** Full-viewport, dark background with overlaid cream text. Parallax image beneath a semi-transparent layer.
- **Light sections:** Warm Parchment background, Espresso text, Gold accents. Generous vertical padding.
- **Cards:** Minimal border (`1px Linen`), subtle shadow, image-forward. Hover reveals a thin Gold underline or lifts the card slightly.
- **Buttons:**
  - *Primary:* Gold background, Noir text, no border, `rounded-sm`, slight scale on hover.
  - *Secondary:* Transparent background, `1px` Gold border, Cream/Noir text depending on context.
  - *Ghost:* No background, no border, underline-on-hover only.
- **Inputs:** Minimal — bottom border only (no full box), or subtle full-border on focused state. Cream background, Ash placeholder.
- **Navbar:** Fixed, `backdrop-blur` + semi-transparent Noir at scroll-top, transitions to solid Noir on scroll.
- **Section dividers:** Thin `1px` horizontal Gold line, centered, used sparingly (not between every section).

---

## Spacing System

8-point grid. All spacing is a multiple of 4px with intentional jumps at larger scales.

| Token | Value | Usage |
|---|---|---|
| `space-1` | 4px | Icon gaps, tight inline spacing |
| `space-2` | 8px | Component internal padding |
| `space-4` | 16px | Small component gaps |
| `space-6` | 24px | Card padding, list item gaps |
| `space-8` | 32px | Section-internal spacing |
| `space-12` | 48px | Between subsections |
| `space-16` | 64px | Between major blocks within a section |
| `space-24` | 96px | Section vertical padding (mobile) |
| `space-32` | 128px | Section vertical padding (desktop) |

**Content max-width:** `1280px`. Text columns capped at `720px` for readability.

---

## Border Radius

| Token | Value | Usage |
|---|---|---|
| `rounded-none` | 0px | Product images, hero images — sharp edges signal premium |
| `rounded-sm` | 2px | Buttons, badges, tags |
| `rounded-md` | 6px | Cards, inputs, modals |
| `rounded-full` | 9999px | Avatar circles, pill badges only |

**Rule:** Images are never rounded. The brand aesthetic is editorial and structured, not soft or playful.

---

## Shadows

Shadows are used sparingly — the brand relies on whitespace and contrast rather than elevation.

| Token | Value | Usage |
|---|---|---|
| `shadow-card` | `0 2px 12px rgba(10,10,10,0.06)` | Resting card state on light backgrounds |
| `shadow-card-hover` | `0 8px 32px rgba(10,10,10,0.12)` | Card hover lift |
| `shadow-modal` | `0 24px 64px rgba(10,10,10,0.3)` | Modals, drawers |
| `shadow-gold` | `0 0 0 1px rgba(201,169,110,0.4)` | Focus ring on Gold-accented elements |

No drop shadows on text. No colored glow effects.

---

## Icon Style

- **Library:** Lucide React — consistent stroke-based icon set.
- **Style:** Stroke only, never filled. `strokeWidth={1.5}` as the default.
- **Size:** `16px` inline with text, `20px` standalone UI icons, `24px` feature/section icons.
- **Color:** Inherits from parent text color, or explicitly set to Gold for decorative use.
- **Never:** Resize icons non-uniformly, mix Lucide with other libraries, or use icons as decoration without semantic purpose.
