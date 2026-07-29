"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/lib/motion";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { TestimonialCard } from "@/components/shared/TestimonialCard";
import { Container } from "@/components/shared/Container";
import { TESTIMONIALS } from "@/lib/data/testimonials";


export function TestimonialsSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section aria-label="Customer testimonials" className="bg-parchment py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="What People Say"
          heading="From the First Sip."
          subheading="We don't claim to be the best. We let the coffee speak, and then we listen."
          align="center"
        />

        <div
          ref={ref}
          className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {TESTIMONIALS.map((testimonial, i) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.65, ease: EASE, delay: i * 0.09 }}
            >
              <TestimonialCard testimonial={testimonial} />
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
