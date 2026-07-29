import { Container } from "@/components/shared/Container";
import { ALL_PRODUCTS } from "@/lib/data/products";

export function ShopHero() {
  return (
    <section aria-label="Shop header" className="bg-espresso pt-24 pb-16 md:pt-32 md:pb-20">
      <Container>
        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold mb-5">
          The Full Collection
        </p>
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <h1
            className="font-display font-light text-cream leading-[1.08]"
            style={{ fontSize: "clamp(2.5rem, 6vw, 4.5rem)" }}
          >
            Every Origin.<br />
            One Standard.
          </h1>
          <p className="font-sans text-sm text-cream/45 leading-relaxed max-w-[42ch] md:text-right">
            {ALL_PRODUCTS.length} single-origin roasts, sourced directly from
            farms across {new Set(ALL_PRODUCTS.map((p) => p.country)).size} countries.
            All roasted to order.
          </p>
        </div>
      </Container>

      {/* Thin gold rule */}
      <div className="mt-16 border-t border-gold/20" />
    </section>
  );
}
