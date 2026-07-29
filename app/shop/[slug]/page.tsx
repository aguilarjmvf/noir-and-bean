import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/shared/Badge";
import { ProductCard } from "@/components/shared/ProductCard";
import { ProductPurchase } from "@/components/shop/ProductPurchase";
import {
  ALL_PRODUCTS,
  getProductBySlug,
  getRelatedProducts,
} from "@/lib/data/products";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return ALL_PRODUCTS.map((product) => ({ slug: product.slug! }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return {};

  const description = `${product.tastingNotes} A ${product.roast.toLowerCase()} roast from ${product.origin}${product.elevation ? `, grown at ${product.elevation}` : ""}.`;

  return {
    title: product.name,
    description,
    alternates: { canonical: `/shop/${slug}` },
    openGraph: {
      title: `${product.name} | Noir & Bean`,
      description,
      url: `/shop/${slug}`,
      images: [{ url: product.image }],
    },
    twitter: {
      title: `${product.name} | Noir & Bean`,
      description,
      images: [product.image],
    },
  };
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(slug);

  const facts: [string, string | undefined][] = [
    ["Origin", product.origin],
    ["Elevation", product.elevation],
    ["Process", product.process],
    ["Roast", product.roast],
    ["Harvest", product.harvest],
  ];

  return (
    <>
      {/* Detail */}
      <section aria-label={product.name} className="bg-parchment pt-28 pb-24 md:pt-32">
        <Container>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-10">
            <ol className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-ash">
              <li>
                <Link href="/" className="hover:text-espresso transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/shop" className="hover:text-espresso transition-colors">
                  Shop
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-espresso" aria-current="page">
                {product.name}
              </li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-16">
            {/* Image */}
            <div className="relative aspect-[4/5] overflow-hidden rounded-md border border-linen bg-cream">
              <Image
                src={product.image}
                alt={`${product.name} — ${product.origin}`}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              {product.badge && (
                <div className="absolute left-4 top-4">
                  <Badge variant="limited">{product.badge}</Badge>
                </div>
              )}
            </div>

            {/* Details */}
            <div className="flex flex-col">
              <div className="flex items-center gap-3">
                <Badge variant={product.roast === "Light" ? "outline" : "roast"}>
                  {product.roast}
                </Badge>
                <span className="font-sans text-xs uppercase tracking-widest text-ash">
                  {product.country}
                </span>
              </div>

              <h1
                className="mt-5 font-display font-light leading-[1.1] text-espresso"
                style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}
              >
                {product.name}
              </h1>

              <p className="mt-4 font-sans text-base italic text-gold">
                {product.tastingNotes}
              </p>

              {product.description && (
                <p className="mt-6 font-sans text-sm leading-[1.8] text-ash">
                  {product.description}
                </p>
              )}

              {/* Facts */}
              <dl className="mt-8 grid grid-cols-2 gap-x-6 gap-y-4 border-t border-linen pt-8 sm:grid-cols-3">
                {facts
                  .filter(([, value]) => Boolean(value))
                  .map(([key, value]) => (
                    <div key={key} className="flex flex-col gap-1">
                      <dt className="font-sans text-[10px] uppercase tracking-widest text-ash/70">
                        {key}
                      </dt>
                      <dd className="font-sans text-sm text-espresso">{value}</dd>
                    </div>
                  ))}
              </dl>

              {/* Purchase (client) */}
              <div className="mt-10">
                <ProductPurchase basePrice={product.price} />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section aria-label="You might also like" className="bg-cream py-20 md:py-24 border-t border-linen">
          <Container>
            <div className="mb-10 flex items-end justify-between gap-6">
              <h2
                className="font-display font-light text-espresso"
                style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
              >
                You Might Also Like
              </h2>
              <Link
                href="/shop"
                className="inline-flex shrink-0 items-center gap-2 font-sans text-[10px] uppercase tracking-widest text-ash transition-colors hover:text-espresso"
              >
                All Coffees
                <ArrowRight size={13} strokeWidth={1.5} aria-hidden="true" />
              </Link>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <ProductCard key={item.id} product={item} />
              ))}
            </div>

            <div className="mt-14">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-ash transition-colors hover:text-espresso"
              >
                <ArrowLeft size={14} strokeWidth={1.5} aria-hidden="true" />
                Back to the Collection
              </Link>
            </div>
          </Container>
        </section>
      )}
    </>
  );
}
