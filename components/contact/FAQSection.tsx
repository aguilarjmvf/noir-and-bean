"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";
import { Plus } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { cn } from "@/lib/utils";


const FAQS = [
  {
    q: "How fresh is the coffee when it ships?",
    a: "We roast every Monday, Wednesday, and Friday. All orders placed before 10am on a roast day ship the same afternoon. Orders placed between roast days ship on the next one. You'll always receive coffee within 72 hours of its roast date.",
  },
  {
    q: "Do you offer subscriptions?",
    a: "Not yet. We're working on a subscription model that allows full customization — origin, roast, grind, and frequency — without locking you into anything. Planned for mid-2025. Join our mailing list to be notified first.",
  },
  {
    q: "Can I visit the roastery?",
    a: "We do monthly open roastery days, typically on the first Saturday of each month. Email us to get on the list.",
  },
  {
    q: "Do you offer wholesale pricing for cafés?",
    a: "Yes. We work with a small number of café and restaurant partners in the Pacific Northwest. Reach out at trade@noirandbean.com with your location and monthly volume and we'll take it from there.",
  },
  {
    q: "What's your return policy?",
    a: "If your coffee arrives damaged or you receive the wrong item, contact us within 7 days of delivery and we'll make it right immediately. Because of the perishable nature of roasted coffee, we can't accept returns on correctly shipped orders, but we stand behind every bag we send.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section aria-label="Frequently asked questions" className="bg-cream py-24 md:py-32 border-t border-linen">
      <Container narrow>
        <SectionTitle
          eyebrow="Common Questions"
          heading="Before You Write."
          align="center"
        />

        <div className="mt-14 flex flex-col">
          {FAQS.map(({ q, a }, i) => {
            const isOpen = open === i;
            return (
              <div key={q} className="border-b border-linen first:border-t">
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-6 py-6 text-left group"
                  >
                    <span
                      className={cn(
                        "font-display font-light text-espresso leading-snug transition-colors duration-200",
                        "text-[clamp(1.125rem,2vw,1.375rem)]",
                        "group-hover:text-gold"
                      )}
                    >
                      {q}
                    </span>
                    <motion.span
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3, ease: EASE }}
                      className="shrink-0 text-gold"
                    >
                      <Plus size={20} strokeWidth={1.5} />
                    </motion.span>
                  </button>
                </h3>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: EASE }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 pr-10 font-sans text-sm text-ash leading-[1.75]">
                        {a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
