"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/shared/Container";


const fadeUp = (delay: number) => ({
  initial: { opacity: 0, y: 22 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.75, ease: EASE, delay },
});

const STORY = [
  "Most coffee companies start with a roaster. We started with a question: why does buying specialty coffee feel like an act of faith? You read the tasting notes, you pay the premium, and then you hope the bag delivers on what the label promised.",
  "We built Noir & Bean to make that faith unnecessary. Every origin we carry is documented — the farm name, the farmer, the elevation, the process, the harvest date. We visited before we committed. We cup blind before we publish. We ship within 48 hours of the roast date, not the order date.",
  "None of this is difficult. It just requires caring more about the coffee than about the margin.",
];

export function AboutHero() {
  return (
    <>
      {/* Dark header */}
      <section aria-label="About Noir and Bean" className="bg-espresso pt-24 pb-20 md:pt-32 md:pb-28">
        <Container>
          <motion.p {...fadeUp(0.1)} className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold mb-6">
            The Roastery
          </motion.p>
          <motion.h1
            {...fadeUp(0.22)}
            className="font-display font-light text-cream leading-[1.06]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.75rem)", maxWidth: "18ch" }}
          >
            We Started Because We Were Tired of Compromise.
          </motion.h1>
          <motion.p
            {...fadeUp(0.38)}
            className="mt-6 font-sans text-cream/55 leading-relaxed"
            style={{ fontSize: "clamp(0.9rem, 1.4vw, 1rem)", maxWidth: "52ch" }}
          >
            There&rsquo;s a version of this story where two people just really liked coffee.
            That&rsquo;s true. But it&rsquo;s also about noticing how much of the industry is
            built on shortcuts, and deciding not to accept them.
          </motion.p>
        </Container>
      </section>

      {/* Story body — parchment + image split */}
      <section aria-label="Our story" className="bg-parchment">
        <div className="mx-auto max-w-[1280px] grid grid-cols-1 lg:grid-cols-2">
          {/* Image */}
          <div className="relative aspect-[4/3] lg:aspect-auto lg:min-h-[560px]">
            <Image
              src="https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=900&h=700&fit=crop&q=85"
              alt="Inside the Noir & Bean roastery"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>

          {/* Copy */}
          <div className="flex flex-col justify-center px-8 py-16 lg:px-16 xl:px-20">
            <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold mb-8">
              Why We Exist
            </p>
            <div className="flex flex-col gap-5">
              {STORY.map((paragraph, i) => (
                <p key={i} className="font-sans text-sm text-ash leading-[1.8]">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
