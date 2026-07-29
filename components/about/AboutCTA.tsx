"use client";

import Link from "next/link";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/lib/motion";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";
import { Separator } from "@/components/ui/separator";


export function AboutCTA() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section aria-label="Our philosophy" className="bg-noir py-24 md:py-32">
      <Container narrow>
        <div ref={ref} className="flex flex-col items-center text-center gap-8">
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold"
          >
            Our Philosophy
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 22 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
            className="font-display font-light text-cream leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            We&rsquo;re Not Trying to Scale.
            <br />
            We&rsquo;re Trying to Be Good.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE, delay: 0.22 }}
            className="font-sans text-sm text-cream/50 leading-relaxed max-w-[52ch]"
          >
            A lot of roasters grow until the quality thins out. You can feel it —
            the sourcing gets vaguer, the roasts get more consistent in the wrong
            direction, the farm names disappear from the bags. We&rsquo;ve had
            acquisition conversations. We&rsquo;ve said no to all of them. Noir &amp;
            Bean exists at the size where we can still taste everything that leaves
            this building. That&rsquo;s the line we won&rsquo;t cross.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="w-full"
          >
            <Separator className="opacity-[0.08]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: EASE, delay: 0.42 }}
            className="flex flex-wrap gap-4 justify-center"
          >
            <Link
              href="/shop"
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              Shop the Collection
            </Link>
            <Link
              href="/contact"
              className={buttonVariants({ variant: "secondary-dark", size: "lg" })}
            >
              Get in Touch
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.55 }}
            className="font-sans text-[10px] uppercase tracking-widest text-cream/20"
          >
            Portland, OR — Est. 2020
          </motion.p>
        </div>
      </Container>
    </section>
  );
}
