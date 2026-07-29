/**
 * Shared easing curve for every Framer Motion transition across the site —
 * a quart-style ease-out. Kept in one place so motion feels consistent and
 * the tuple isn't re-declared in each component.
 */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
