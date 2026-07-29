/**
 * Central site configuration — imported by metadata, robots, and sitemap
 * so the canonical URL and brand strings live in exactly one place.
 *
 * Override the URL per-environment with NEXT_PUBLIC_SITE_URL (e.g. a preview
 * or production domain); the fallback is the brand's implied domain.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ?? "https://noirandbean.com";

export const SITE_NAME = "Noir & Bean";

export const SITE_TAGLINE = "Coffee Worth Slowing Down For";

export const SITE_DESCRIPTION =
  "Single origin. Small batch. No compromise. Premium specialty coffee sourced directly from elevation-grown farms and roasted weekly in Portland, OR — shipped within 48 hours of roasting.";

export const SITE_KEYWORDS = [
  "specialty coffee",
  "single origin coffee",
  "small batch roaster",
  "direct trade coffee",
  "Portland coffee roaster",
  "fresh roasted coffee",
  "Ethiopian Yirgacheffe",
  "pour over coffee",
  "artisan coffee beans",
];

/** Primary navigable pages, used to generate the sitemap. */
export const SITE_ROUTES = ["", "/shop", "/about", "/journal", "/contact"] as const;

export const SOCIAL_HANDLE = "@noirandbean";
