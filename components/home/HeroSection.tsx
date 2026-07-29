"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { ArrowDown } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";


const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, ease: EASE, delay },
});

export function HeroSection() {
  return (
    <section
      aria-label="Hero"
      className="relative min-h-screen flex items-end bg-noir overflow-hidden"
    >
      {/* Background image + layered gradient */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1497515114629-f71d768fd07c?w=1920&q=85"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        {/* Bottom-heavy gradient so text is always readable */}
        <div className="absolute inset-0 bg-gradient-to-t from-noir via-noir/75 to-noir/30" />
        {/* Subtle left-edge vignette for the copy area */}
        <div className="absolute inset-0 bg-gradient-to-r from-noir/60 via-transparent to-transparent" />
      </div>

      {/* Copy — pinned to the bottom-left */}
      <div className="relative z-10 w-full pb-20 md:pb-28 lg:pb-32">
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
          <div className="max-w-[640px]">
            {/* Eyebrow */}
            <motion.p
              {...fadeUp(0.15)}
              className="mb-6 font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold"
            >
              Single Origin. Small Batch. No Compromise.
            </motion.p>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.3)}
              className="mb-6 font-display font-light text-cream leading-[1.04]"
              style={{ fontSize: "clamp(3rem, 7.5vw, 5.5rem)" }}
            >
              Coffee Worth<br />
              Slowing Down For.
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              {...fadeUp(0.45)}
              className="mb-10 font-sans text-cream/60 leading-relaxed"
              style={{ fontSize: "clamp(0.9375rem, 1.5vw, 1.0625rem)", maxWidth: "46ch" }}
            >
              We source rare beans from elevation-grown farms, roast them in
              small batches, and deliver them to your door before they peak.
              This is not convenience. This is craft.
            </motion.p>

            {/* CTAs */}
            <motion.div {...fadeUp(0.6)} className="flex flex-wrap gap-4">
              <Link
                href="/shop"
                className={buttonVariants({ variant: "primary", size: "lg" })}
              >
                Explore the Collection
              </Link>
              <Link
                href="/about"
                className={buttonVariants({ variant: "secondary-dark", size: "lg" })}
              >
                Our Story
              </Link>
            </motion.div>
          </div>

          {/* Caption */}
          <motion.p
            {...fadeUp(0.8)}
            className="mt-14 font-sans text-[10px] uppercase tracking-[0.18em] text-cream/30"
          >
            Roasted weekly in Portland, OR — shipped within 48 hours.
          </motion.p>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} strokeWidth={1.5} className="text-cream/20" />
        </motion.div>
      </motion.div>
    </section>
  );
}
