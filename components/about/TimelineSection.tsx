"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";


const EVENTS = [
  {
    year: "2019",
    label: "The Beginning",
    event:
      "Elise and James meet at the SCAA Expo in Boston. They disagree about natural processing for four hours. By the end, they're planning a roastery.",
  },
  {
    year: "2020",
    label: "First Roasts",
    event:
      "Noir & Bean begins roasting in a 600 sq ft Portland warehouse. First public offering: three Ethiopian naturals and a Colombian washed. All sell out in three days.",
  },
  {
    year: "2021",
    label: "Direct Trade",
    event:
      "First farm partnership formalized with Tadesse Bekele in Gedeo Zone, Ethiopia. Elise spends six weeks at origin during harvest. The Yirgacheffe Natural is born.",
  },
  {
    year: "2022",
    label: "Recognition",
    event:
      "James wins his third Good Food Award. Bon Appétit includes Noir & Bean in \"12 Roasters Worth Knowing.\" Subscription waitlist hits 900 people.",
  },
  {
    year: "2023",
    label: "New Space",
    event:
      "Move to a 3,200 sq ft facility in Southeast Portland. New 25kg Loring roaster installed. First barista training program launched for local café partners.",
  },
  {
    year: "2024",
    label: "Where We Are",
    event:
      "18 farm partnerships across 9 countries. 4,200 active subscribers. Still roasting in batches of 12kg. Still tasting every single one.",
  },
];

export function TimelineSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section aria-label="Company timeline" className="bg-espresso py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="The Story So Far"
          heading="Five Years. Still Small on Purpose."
          light
        />

        <div ref={ref} className="mt-16 relative">
          {/* Vertical line — hidden on mobile, visible md+ */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-cream/[0.08] -translate-x-1/2" />

          <div className="flex flex-col gap-0">
            {EVENTS.map(({ year, label, event }, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={year}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.65, ease: EASE, delay: i * 0.1 }}
                  className="relative grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-0 md:gap-8 items-start py-10 md:py-12"
                >
                  {/* Left slot */}
                  <div className={isLeft ? "md:text-right md:pr-8" : "md:col-start-3 hidden md:block"}>
                    {isLeft && (
                      <TimelineContent year={year} label={label} event={event} align="right" />
                    )}
                  </div>

                  {/* Center dot */}
                  <div className="hidden md:flex items-start justify-center pt-1">
                    <div className="w-3 h-3 rounded-full border-2 border-gold bg-espresso shrink-0" />
                  </div>

                  {/* Right slot */}
                  <div className={!isLeft ? "md:pl-8" : "md:col-start-3 hidden md:block"}>
                    {!isLeft && (
                      <TimelineContent year={year} label={label} event={event} align="left" />
                    )}
                  </div>

                  {/* Mobile — always full width */}
                  <div className="md:hidden flex gap-5">
                    <div className="flex flex-col items-center gap-2 pt-1">
                      <div className="w-2.5 h-2.5 rounded-full border-2 border-gold bg-espresso shrink-0" />
                      {i < EVENTS.length - 1 && (
                        <div className="w-px flex-1 bg-cream/[0.08]" />
                      )}
                    </div>
                    <TimelineContent year={year} label={label} event={event} align="left" />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

function TimelineContent({
  year,
  label,
  event,
  align,
}: {
  year: string;
  label: string;
  event: string;
  align: "left" | "right";
}) {
  return (
    <div className={`flex flex-col gap-2 ${align === "right" ? "items-end" : "items-start"}`}>
      <span
        className="font-display font-light text-gold leading-none"
        style={{ fontSize: "clamp(1.5rem, 2.5vw, 2rem)" }}
      >
        {year}
      </span>
      <span className="font-sans text-[10px] uppercase tracking-widest text-cream/35">
        {label}
      </span>
      <p
        className={`font-sans text-[13px] leading-[1.75] text-cream/50 max-w-[36ch] ${
          align === "right" ? "text-right" : "text-left"
        }`}
      >
        {event}
      </p>
    </div>
  );
}
