"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/shared/Badge";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { Product } from "@/types";

interface ProductCardProps {
  product: Product;
  className?: string;
}

const roastVariant: Record<Product["roast"], React.ComponentProps<typeof Badge>["variant"]> = {
  Light: "outline",
  "Light-Medium": "outline",
  Medium: "roast",
  "Medium-Dark": "roast",
  Dark: "roast",
};

export function ProductCard({ product, className }: ProductCardProps) {
  const {
    name,
    origin,
    country,
    elevation,
    roast,
    tastingNotes,
    price,
    image,
    badge,
    slug,
  } = product;

  const href = slug ? `/shop/${slug}` : "/shop";

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: EASE }}
      className={cn(
        "group flex flex-col border border-linen rounded-md overflow-hidden bg-cream",
        "shadow-card hover:shadow-card-hover transition-shadow duration-300",
        className
      )}
    >
      <Link href={href} className="block relative overflow-hidden aspect-[3/4]">
        <Image
          src={image}
          alt={`${name} — ${origin}`}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        {badge && (
          <div className="absolute top-3 left-3">
            <Badge variant="limited">{badge}</Badge>
          </div>
        )}
      </Link>

      <div className="flex flex-col gap-3 p-6">
        <div className="flex items-center justify-between">
          <Badge variant={roastVariant[roast]}>{roast}</Badge>
          <span className="font-sans text-xs text-ash tracking-wide">
            {country}
          </span>
        </div>

        <Link href={href} className="group/title block">
          <h3
            className={cn(
              "font-display font-light text-[1.375rem] leading-tight text-espresso",
              "transition-colors duration-200 group-hover/title:text-gold"
            )}
          >
            {name}
          </h3>
        </Link>

        <p className="font-sans text-xs text-ash leading-relaxed line-clamp-2">
          {tastingNotes}
          {elevation && (
            <span className="block mt-0.5 text-ash/70">{origin} · {elevation}</span>
          )}
        </p>

        <div className="mt-auto pt-2 flex items-center justify-between border-t border-linen">
          <span className="font-sans text-sm font-medium text-gold">
            from ${price.toFixed(2)}
          </span>
          <Link
            href={href}
            className="font-sans text-[10px] uppercase tracking-widest text-ash hover:text-espresso transition-colors underline-offset-4 hover:underline"
          >
            View
          </Link>
        </div>
      </div>
    </motion.article>
  );
}
