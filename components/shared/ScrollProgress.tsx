"use client";

import { motion, useScroll, useSpring } from "framer-motion";

/**
 * A thin gold bar pinned to the very top of the viewport that fills
 * left-to-right as the page scrolls. Sits above the navbar (z-[60]).
 */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    mass: 0.3,
  });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[2px] origin-left bg-gold"
    />
  );
}
