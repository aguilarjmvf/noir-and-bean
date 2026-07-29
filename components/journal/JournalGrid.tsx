"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { EASE } from "@/lib/motion";
import { BlogCard } from "@/components/shared/BlogCard";
import { Container } from "@/components/shared/Container";
import { FEATURED_POST, RECENT_POSTS } from "@/lib/data/posts";


export function JournalGrid() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section aria-label="Articles" className="bg-parchment py-16 md:py-20">
      <Container>
        <div ref={ref} className="flex flex-col gap-6 md:gap-8">
          {/* Featured — full width, horizontal on md+ */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, ease: EASE }}
          >
            <BlogCard post={FEATURED_POST} featured />
          </motion.div>

          {/* Remaining four — responsive grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {RECENT_POSTS.map((post, i) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, ease: EASE, delay: 0.15 + i * 0.1 }}
                className="h-full"
              >
                <BlogCard post={post} className="h-full" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
