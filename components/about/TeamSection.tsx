"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/lib/motion";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";


const TEAM = [
  {
    name: "Elise Nakamura",
    title: "Co-Founder, Head of Sourcing",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&h=750&fit=crop&q=85",
    bio: "Elise spent eight years as a Q Grader for an international green coffee importer before leaving to build something she could put her name on. She has traveled to over 30 coffee-producing countries, speaks conversational Spanish and Amharic, and believes that the relationship between a roaster and a farmer is the most undervalued thing in the industry. She handles every farm visit, every cupping, and every sourcing decision for Noir & Bean.",
  },
  {
    name: "James Okafor",
    title: "Co-Founder, Head Roaster",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=600&h=750&fit=crop&q=85",
    bio: "James learned to roast on a salvaged 5kg drum in a shared warehouse in Oakland. Before Noir & Bean, he consulted for specialty roasters across the Pacific Northwest, developing roast profiles that won three Good Food Awards between 2019 and 2022. He roasts every batch at the Portland facility personally until the team grows large enough that he trusts someone else with it — which, by his own admission, may never happen.",
  },
];

export function TeamSection() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section aria-label="Our team" className="bg-parchment py-24 md:py-32">
      <Container>
        <SectionTitle
          eyebrow="The People"
          heading="Meet the Founders."
          subheading="Two people who disagreed about natural processing for four hours, then decided to build a roastery together."
        />

        <div ref={ref} className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-2 lg:gap-16">
          {TEAM.map(({ name, title, image, bio }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 28 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.7, ease: EASE, delay: i * 0.14 }}
              className="flex flex-col gap-6"
            >
              {/* Portrait */}
              <div className="relative overflow-hidden aspect-[4/5]">
                <Image
                  src={image}
                  alt={name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
                />
              </div>

              {/* Identity */}
              <div className="flex flex-col gap-1 border-l-2 border-gold pl-5">
                <h3 className="font-display font-light text-espresso"
                  style={{ fontSize: "clamp(1.25rem, 2vw, 1.625rem)" }}>
                  {name}
                </h3>
                <p className="font-sans text-[10px] uppercase tracking-widest text-gold">
                  {title}
                </p>
              </div>

              {/* Bio */}
              <p className="font-sans text-[13px] leading-[1.8] text-ash">
                {bio}
              </p>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
