"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/lib/motion";
import { MapPin, Clock, Leaf, BookOpen, Handshake, FlaskConical } from "lucide-react";
import { Container } from "@/components/shared/Container";


const VALUES = [
  {
    Icon: MapPin,
    label: "Traceability",
    body: "Every coffee is traceable to a named farm, a specific harvest, and a verified elevation. No commodity blends of unknown origin.",
  },
  {
    Icon: Handshake,
    label: "Direct Trade",
    body: "We pay above Fair Trade premiums on 100% of purchases. Multi-year farmer relationships. Annual farm visits. No brokers.",
  },
  {
    Icon: Clock,
    label: "Freshness",
    body: "Coffee peaks within 5–21 days of roasting. We ship within 48 hours of the roast date — not the order date.",
  },
  {
    Icon: Leaf,
    label: "Sustainability",
    body: "Recyclable packaging, carbon-neutral domestic shipping, and 1% of revenue to Rainforest Alliance reforestation.",
  },
  {
    Icon: FlaskConical,
    label: "Craft",
    body: "Maximum batch size: 12kg. Every roast is profiled, documented, and tasted before it leaves the building.",
  },
  {
    Icon: BookOpen,
    label: "Education",
    body: "Free brew guides, origin stories, processing explainers — not to upsell, but because an informed drinker makes better coffee.",
  },
];

export function MissionSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section aria-label="Our mission" className="bg-noir py-24 md:py-32">
      <Container>
        {/* Statement */}
        <div ref={ref} className="max-w-[800px]">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, ease: EASE }}
            className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold mb-6"
          >
            Our Mission
          </motion.p>
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="font-display font-light text-cream leading-[1.2]"
            style={{ fontSize: "clamp(1.625rem, 3.5vw, 2.5rem)" }}
          >
            To source, roast, and share specialty coffee that honors every hand it
            passed through — from the farmer to the cup.
          </motion.blockquote>
        </div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 0.7, ease: EASE, delay: 0.35 }}
          style={{ originX: 0 }}
          className="my-16 h-px bg-cream/[0.08]"
        />

        {/* Values grid */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {VALUES.map(({ Icon, label, body }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 18 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, ease: EASE, delay: 0.4 + i * 0.08 }}
              className="flex gap-5"
            >
              <div className="mt-0.5 shrink-0">
                <Icon size={18} strokeWidth={1.5} className="text-gold" />
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-sans text-[10px] font-medium uppercase tracking-widest text-cream/70">
                  {label}
                </h3>
                <p className="font-sans text-[13px] leading-[1.7] text-cream/40">
                  {body}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
