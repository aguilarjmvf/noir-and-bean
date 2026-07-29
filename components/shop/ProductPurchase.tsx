"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ProductPurchaseProps {
  basePrice: number;
}

// Pricing tiers derived from the 250g base — mirrors the wholesale ratios
// used across the catalogue (e.g. $22 / $40 / $74).
const SIZES = [
  { label: "250g", multiplier: 1 },
  { label: "500g", multiplier: 1.82 },
  { label: "1kg", multiplier: 3.36 },
];

export function ProductPurchase({ basePrice }: ProductPurchaseProps) {
  const [sizeIndex, setSizeIndex] = useState(0);
  const [added, setAdded] = useState(false);

  const price = Math.round(basePrice * SIZES[sizeIndex].multiplier);

  function handleAdd() {
    setAdded(true);
    window.clearTimeout((handleAdd as { _t?: number })._t);
    (handleAdd as { _t?: number })._t = window.setTimeout(
      () => setAdded(false),
      2400
    );
  }

  return (
    <div className="flex flex-col gap-6">
      {/* Size selector */}
      <div className="flex flex-col gap-3">
        <span
          id="size-label"
          className="font-sans text-[10px] font-medium uppercase tracking-widest text-ash"
        >
          Size
        </span>
        <div
          role="radiogroup"
          aria-labelledby="size-label"
          className="flex gap-2"
        >
          {SIZES.map((size, i) => {
            const active = i === sizeIndex;
            return (
              <button
                key={size.label}
                type="button"
                role="radio"
                aria-checked={active}
                onClick={() => setSizeIndex(i)}
                className={cn(
                  "h-11 flex-1 rounded-sm border font-sans text-xs font-medium uppercase tracking-widest transition-all duration-200",
                  active
                    ? "border-espresso bg-espresso text-cream"
                    : "border-linen text-ash hover:border-espresso hover:text-espresso"
                )}
              >
                {size.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Price + add */}
      <div className="flex items-center justify-between gap-6 border-t border-linen pt-6">
        <div className="flex items-baseline gap-2">
          <motion.span
            key={price}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="font-display font-light text-espresso"
            style={{ fontSize: "clamp(1.75rem, 3vw, 2.25rem)" }}
          >
            ${price}.00
          </motion.span>
          <span className="font-sans text-xs text-ash">
            / {SIZES[sizeIndex].label}
          </span>
        </div>

        <Button
          type="button"
          variant="primary"
          size="lg"
          onClick={handleAdd}
          className="shrink-0"
        >
          <AnimatePresence mode="wait" initial={false}>
            {added ? (
              <motion.span
                key="added"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="inline-flex items-center gap-2"
              >
                <Check size={16} strokeWidth={2} aria-hidden="true" />
                Added
              </motion.span>
            ) : (
              <motion.span
                key="add"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                Add to Bag
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </div>

      {/* Accessible live confirmation */}
      <p role="status" aria-live="polite" className="sr-only">
        {added ? `Added ${SIZES[sizeIndex].label} to your bag.` : ""}
      </p>

      <p className="font-sans text-[11px] leading-relaxed text-ash/70">
        Roasted to order · Ships within 48 hours · Free shipping over $40
      </p>
    </div>
  );
}
