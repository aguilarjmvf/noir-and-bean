"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/shared/Container";


const PILLARS = [
  { number: "18", label: "Farm partnerships" },
  { number: "9", label: "Countries sourced" },
  { number: "4,200", label: "Active subscribers" },
  { number: "100%", label: "Direct trade" },
];

export function VisionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section aria-label="Our vision" className="bg-parchment py-24 md:py-32">
      <Container>
        <div ref={ref} className="flex flex-col items-center text-center gap-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold"
          >
            Our Vision
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.85, ease: EASE, delay: 0.1 }}
            className="font-display font-light text-espresso leading-[1.12]"
            style={{ fontSize: "clamp(2rem, 5vw, 3.75rem)", maxWidth: "22ch" }}
          >
            A world where people trade the ordinary for the exceptional, one
            deliberate brew at a time.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.25 }}
            className="font-sans text-sm text-ash leading-relaxed max-w-[50ch]"
          >
            We&rsquo;re not trying to change how the world drinks coffee by becoming
            the world&rsquo;s biggest roaster. We&rsquo;re trying to change it one
            bag at a time — by making the bar high enough that ordinary stops feeling
            acceptable.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.65, ease: EASE, delay: 0.38 }}
            className="w-full mt-4 grid grid-cols-2 gap-px sm:grid-cols-4 border border-linen"
          >
            {PILLARS.map(({ number, label }) => (
              <div key={label} className="flex flex-col items-center gap-2 bg-cream py-10 px-6">
                <span
                  className="font-display font-light text-gold leading-none"
                  style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
                >
                  {number}
                </span>
                <span className="font-sans text-[11px] uppercase tracking-widest text-ash/60">
                  {label}
                </span>
              </div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
