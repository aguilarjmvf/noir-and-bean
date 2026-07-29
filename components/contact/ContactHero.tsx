"use client";

import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/shared/Container";


const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: EASE, delay },
});

export function ContactHero() {
  return (
    <section aria-label="Contact header" className="bg-espresso pt-24 pb-16 md:pt-32 md:pb-20">
      <Container>
        <motion.p
          {...fadeUp(0.1)}
          className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold mb-6"
        >
          Get in Touch
        </motion.p>

        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <motion.h1
            {...fadeUp(0.22)}
            className="font-display font-light text-cream leading-[1.06]"
            style={{ fontSize: "clamp(2.75rem, 7vw, 5rem)" }}
          >
            We Read Every Message.
          </motion.h1>

          <motion.p
            {...fadeUp(0.36)}
            className="font-sans text-sm text-cream/50 leading-relaxed max-w-[46ch] md:text-right md:pb-2"
          >
            Questions about an order, a wholesale inquiry, or just something you
            want to say about the coffee — we respond within one business day.
          </motion.p>
        </div>
      </Container>

      <div className="mt-16 border-t border-gold/20" />
    </section>
  );
}
