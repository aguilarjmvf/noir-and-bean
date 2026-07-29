"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/lib/motion";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { Container } from "@/components/shared/Container";


const STEPS = [
  {
    step: "01",
    title: "Source",
    body: "We visit farms, not brokers. Every origin is evaluated in person — cup profile, altitude, soil, and the people behind the harvest.",
  },
  {
    step: "02",
    title: "Select",
    body: "Of every lot we cup, fewer than one in ten earns a spot. We buy the smallest quantity the farm will allow, so freshness is guaranteed.",
  },
  {
    step: "03",
    title: "Roast",
    body: "Small drum. One batch at a time. Every roast is profiled for the specific density and moisture of that harvest — not a standing recipe.",
  },
  {
    step: "04",
    title: "Ship",
    body: "We roast on Monday. We ship by Wednesday. The beans are at peak CO₂ for your first brew — not sitting in a warehouse waiting.",
  },
];

export function ProcessSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section aria-label="Our brewing process" className="bg-noir py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="How We Work"
          heading="The Four Commitments."
          subheading="Every decision we make — from sourcing to shipping — follows the same discipline."
          align="center"
          light
        />

        <div
          ref={ref}
          className="mt-16 grid grid-cols-1 gap-px sm:grid-cols-2 lg:grid-cols-4 border border-cream/[0.06]"
        >
          {STEPS.map(({ step, title, body }, i) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.1 }}
              className="relative flex flex-col gap-6 bg-espresso/40 p-8 md:p-10"
            >
              {/* Step number */}
              <span className="font-display font-light text-gold/40 leading-none select-none"
                style={{ fontSize: "clamp(2.5rem, 4vw, 3.5rem)" }}>
                {step}
              </span>

              {/* Content */}
              <div className="flex flex-col gap-3">
                <h3 className="font-display font-light text-cream"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.5rem)" }}>
                  {title}
                </h3>
                <p className="font-sans text-[13px] leading-[1.7] text-cream/45">
                  {body}
                </p>
              </div>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gold/0 transition-all duration-500 group-hover:bg-gold/30" />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
