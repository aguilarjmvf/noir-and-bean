import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { Container } from "@/components/shared/Container";

export function ShopCTA() {
  return (
    <section aria-label="Subscription prompt" className="bg-noir py-24 md:py-32">
      <Container narrow>
        <div className="flex flex-col items-center text-center gap-8">
          <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
            Not Sure Where to Start
          </p>

          <h2
            className="font-display font-light text-cream leading-[1.1]"
            style={{ fontSize: "clamp(2rem, 4.5vw, 3.25rem)" }}
          >
            Let the Roast Choose You.
          </h2>

          <p className="font-sans text-sm text-cream/50 leading-relaxed max-w-[48ch]">
            Every roast profile begins with a different intention. Light for
            clarity. Medium for balance. Dark for depth. Read about our sourcing
            philosophy and find what fits your palate — then come back and order
            with conviction.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/about"
              className={buttonVariants({ variant: "primary", size: "lg" })}
            >
              Read Our Story
            </Link>
            <Link
              href="/journal"
              className={buttonVariants({ variant: "secondary-dark", size: "lg" })}
            >
              Browse the Journal
            </Link>
          </div>

          {/* Small reassurance line */}
          <p className="font-sans text-[10px] uppercase tracking-widest text-cream/20 mt-2">
            Free shipping on orders over $40 · Roasted to order · Ships in 48h
          </p>
        </div>
      </Container>
    </section>
  );
}
