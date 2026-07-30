import type { MetadataRoute } from "next";
import { SITE_URL, SITE_ROUTES } from "@/lib/site";
import { ALL_PRODUCTS } from "@/lib/data/products";
import { POSTS } from "@/lib/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = SITE_ROUTES.map((route) => {
    const isHome = route === "";
    const isFrequent = isHome || route === "/journal";

    return {
      url: `${SITE_URL}${route}`,
      changeFrequency: isFrequent ? "weekly" : "monthly",
      priority: isHome ? 1 : 0.8,
    };
  });

  const productPages: MetadataRoute.Sitemap = ALL_PRODUCTS.map((product) => ({
    url: `${SITE_URL}/shop/${product.slug}`,
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articlePages: MetadataRoute.Sitemap = POSTS.map((post) => ({
    url: `${SITE_URL}/journal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  return [...staticPages, ...productPages, ...articlePages];
}
