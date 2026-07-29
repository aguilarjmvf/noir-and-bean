"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/lib/motion";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Separator } from "@/components/ui/separator";


const BODY = [
  "Most coffee is treated as a commodity. Priced by weight. Blended to obscurity. Sold before anyone asks where it came from.",
  "We built Noir & Bean as the opposite of that. Every bean we carry is traceable to a specific farm, a specific harvest, and a specific elevation. We pay above Fair Trade minimums — not because it's good marketing, but because the quality we demand requires relationships that last longer than a season.",
  "Specialty coffee begins long before the roaster. It begins in the soil.",
];

const STATS = [
  { value: "18", label: "Farm partnerships across 9 countries" },
  { value: "72h", label: "From roast to your door" },
  { value: "100%", label: "Direct trade sourced" },
];

export function BrandStory() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section aria-label="Why choose us" className="bg-espresso overflow-hidden">
      <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2">

        {/* Image — full bleed on its column */}
        <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[680px] order-last lg:order-first">
          <Image
            src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?w=900&h=900&fit=crop&q=85"
            alt="Roaster sorting green coffee beans by hand"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
          {/* Vignette toward the right edge so text reads against it */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-espresso/30 lg:to-espresso/60" />
        </div>

        {/* Text column */}
        <div
          ref={ref}
          className="flex flex-col justify-center px-8 py-20 lg:px-16 lg:py-24 xl:px-20"
        >
          <SectionTitle
            eyebrow="Why We Exist"
            heading="Rooted in Respect."
            light
          />

          {/* Body paragraphs */}
          <div className="mt-8 flex flex-col gap-5">
            {BODY.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 18 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.65, ease: EASE, delay: 0.15 + i * 0.12 }}
                className="font-sans text-sm text-cream/60 leading-[1.75]"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
          >
            <Separator className="my-10 opacity-[0.12]" />
          </motion.div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-4">
            {STATS.map(({ value, label }, i) => (
              <motion.div
                key={value}
                initial={{ opacity: 0, y: 14 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.55, ease: EASE, delay: 0.6 + i * 0.1 }}
                className="flex flex-col gap-2"
              >
                <span className="font-display font-light text-gold leading-none"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}>
                  {value}
                </span>
                <span className="font-sans text-[11px] leading-snug text-cream/35">
                  {label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
