import type { Metadata } from "next";
import { ShopHero } from "@/components/shop/ShopHero";
import { ShopClient } from "@/components/shop/ShopClient";
import { ShopCTA } from "@/components/shop/ShopCTA";

const title = "Shop the Collection";
const description =
  "Browse our full collection of single-origin, small-batch specialty coffees. Sourced directly from elevation-grown farms and roasted to order.";

export const metadata: Metadata = {
  title: "Shop",
  description,
  alternates: { canonical: "/shop" },
  openGraph: { title, description, url: "/shop" },
  twitter: { title, description },
};

export default function ShopPage() {
  return (
    <>
      <ShopHero />
      <ShopClient />
      <ShopCTA />
    </>
  );
}
