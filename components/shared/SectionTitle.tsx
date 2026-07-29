"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface SectionTitleProps {
  eyebrow?: string;
  heading: string;
  subheading?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
  className?: string;
}

const alignClass = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

export function SectionTitle({
  eyebrow,
  heading,
  subheading,
  align = "left",
  light = false,
  className,
}: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const fadeUp = (delay: number) => ({
    initial: { opacity: 0, y: 24 },
    animate: inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 },
    transition: { duration: 0.6, ease: EASE, delay },
  });

  return (
    <div
      ref={ref}
      className={cn("flex flex-col gap-4", alignClass[align], className)}
    >
      {eyebrow && (
        <motion.p
          {...fadeUp(0)}
          className="font-sans text-xs font-medium uppercase tracking-widest text-gold"
        >
          {eyebrow}
        </motion.p>
      )}

      <motion.h2
        {...fadeUp(eyebrow ? 0.1 : 0)}
        className={cn(
          "font-display font-light leading-[1.1]",
          "text-[clamp(2rem,4vw,3rem)]",
          light ? "text-cream" : "text-espresso"
        )}
      >
        {heading}
      </motion.h2>

      {subheading && (
        <motion.p
          {...fadeUp(0.2)}
          className={cn(
            "font-sans text-base leading-relaxed max-w-[56ch]",
            light ? "text-cream/70" : "text-ash"
          )}
        >
          {subheading}
        </motion.p>
      )}
    </div>
  );
}
