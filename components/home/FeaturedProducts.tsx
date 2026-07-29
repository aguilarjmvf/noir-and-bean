import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { SectionTitle } from "@/components/shared/SectionTitle";
import { ProductCard } from "@/components/shared/ProductCard";
import { FEATURED_PRODUCTS } from "@/lib/data/products";

export function FeaturedProducts() {
  return (
    <section aria-label="Featured products" className="bg-parchment py-24 md:py-32">
      <Container>
        {/* Header row */}
        <div className="mb-14 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionTitle
            eyebrow="This Week's Roast"
            heading="The Collection"
            subheading="Four roast profiles. Dozens of origins. One uncompromising standard."
          />
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-ash transition-colors duration-200 hover:text-espresso shrink-0"
          >
            View All Coffees
            <ArrowRight size={13} strokeWidth={1.5} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </Container>
    </section>
  );
}
