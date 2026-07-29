"use client";

import { motion, useReducedMotion } from "framer-motion";
import { EASE } from "@/lib/motion";


/**
 * template.tsx re-mounts on every route change, so this fade+rise plays
 * as a subtle page-transition each time the user navigates.
 */
export default function Template({ children }: { children: React.ReactNode }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      {children}
    </motion.div>
  );
}
