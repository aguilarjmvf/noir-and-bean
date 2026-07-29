"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Badge } from "@/components/shared/Badge";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import type { BlogPost } from "@/types";

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
  className?: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export function BlogCard({ post, featured = false, className }: BlogCardProps) {
  const { slug, title, excerpt, category, author, date, readTime, image } =
    post;

  return (
    <motion.article
      whileHover={{ y: -4 }}
      transition={{ duration: 0.3, ease: EASE }}
      className={cn(
        "group flex flex-col border border-linen rounded-md overflow-hidden bg-cream",
        "shadow-card hover:shadow-card-hover transition-shadow duration-300",
        featured && "md:flex-row md:aspect-auto",
        className
      )}
    >
      <Link
        href={`/journal/${slug}`}
        className={cn(
          "block relative overflow-hidden shrink-0",
          featured
            ? "aspect-[4/3] md:w-1/2 md:aspect-auto"
            : "aspect-video"
        )}
      >
        <Image
          src={image}
          alt={title}
          fill
          sizes={
            featured
              ? "(max-width: 768px) 100vw, 50vw"
              : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          }
          className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
      </Link>

      <div
        className={cn(
          "flex flex-col gap-4 p-6",
          featured && "md:p-10 md:justify-center"
        )}
      >
        <Badge variant="category">{category}</Badge>

        <Link href={`/journal/${slug}`} className="group/title block">
          <h3
            className={cn(
              "font-display font-light text-espresso leading-tight transition-colors duration-200 group-hover/title:text-gold",
              featured
                ? "text-[clamp(1.5rem,3vw,2rem)]"
                : "text-[1.375rem]"
            )}
          >
            {title}
          </h3>
        </Link>

        <p
          className={cn(
            "font-sans text-sm text-ash leading-relaxed",
            featured ? "line-clamp-3" : "line-clamp-2"
          )}
        >
          {excerpt}
        </p>

        <div className="mt-auto flex items-center gap-3 pt-4 border-t border-linen">
          <span className="font-sans text-xs text-espresso font-medium">
            {author}
          </span>
          <span className="text-linen">·</span>
          <time
            dateTime={date}
            className="font-sans text-xs text-ash"
          >
            {formatDate(date)}
          </time>
          <span className="text-linen">·</span>
          <span className="font-sans text-xs text-ash">{readTime}</span>
        </div>
      </div>
    </motion.article>
  );
}
