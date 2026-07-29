"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";
import { ProductCard } from "@/components/shared/ProductCard";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";
import { ALL_PRODUCTS } from "@/lib/data/products";
import type { Product } from "@/types";


type RoastFilter = Product["roast"] | "All";

const ROAST_ORDER: RoastFilter[] = [
  "All",
  "Light",
  "Light-Medium",
  "Medium",
  "Medium-Dark",
  "Dark",
];

// Only show roasts that exist in the catalogue
const AVAILABLE_FILTERS = ROAST_ORDER.filter(
  (r) => r === "All" || ALL_PRODUCTS.some((p) => p.roast === r)
);

export function ShopClient() {
  const [active, setActive] = useState<RoastFilter>("All");

  const filtered = useMemo(
    () => (active === "All" ? ALL_PRODUCTS : ALL_PRODUCTS.filter((p) => p.roast === active)),
    [active]
  );

  return (
    <section aria-label="Product catalogue" className="bg-parchment py-16 md:py-20">
      <Container>
        {/* Filter bar */}
        <div className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="font-sans text-[10px] uppercase tracking-widest text-ash">
            Browse by Roast
          </p>

          {/* Pills — horizontally scrollable on mobile */}
          <div
            className="flex gap-2 overflow-x-auto pb-1 sm:pb-0 -mx-6 px-6 sm:mx-0 sm:px-0"
            role="group"
            aria-label="Filter by roast"
          >
            {AVAILABLE_FILTERS.map((roast) => (
              <button
                key={roast}
                onClick={() => setActive(roast)}
                aria-pressed={active === roast}
                className={cn(
                  "shrink-0 font-sans text-[10px] font-medium uppercase tracking-widest",
                  "h-8 px-4 rounded-sm border transition-all duration-200",
                  active === roast
                    ? "bg-espresso border-espresso text-cream"
                    : "bg-transparent border-linen text-ash hover:border-espresso hover:text-espresso"
                )}
              >
                {roast}
              </button>
            ))}
          </div>

          {/* Result count */}
          <p className="font-sans text-[11px] text-ash/60 shrink-0 hidden sm:block">
            {filtered.length} of {ALL_PRODUCTS.length}
          </p>
        </div>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((product, i) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.35, ease: EASE, delay: i * 0.04 }}
              >
                <ProductCard product={product} className="h-full" />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty state (shouldn't happen with current data, but defensive) */}
        {filtered.length === 0 && (
          <p className="py-24 text-center font-sans text-sm text-ash">
            No products match this filter.
          </p>
        )}
      </Container>
    </section>
  );
}
