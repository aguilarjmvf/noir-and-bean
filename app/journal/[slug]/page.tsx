import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { Badge } from "@/components/shared/Badge";
import { BlogCard } from "@/components/shared/BlogCard";
import { POSTS, getPostBySlug, getRelatedPosts } from "@/lib/data/posts";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams() {
  return POSTS.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const description = post.subtitle ?? post.excerpt;

  return {
    title: post.title,
    description,
    alternates: { canonical: `/journal/${slug}` },
    openGraph: {
      type: "article",
      title: `${post.title} | Noir & Bean`,
      description,
      url: `/journal/${slug}`,
      images: [{ url: post.image }],
      publishedTime: post.date,
      authors: [post.author],
    },
    twitter: {
      title: `${post.title} | Noir & Bean`,
      description,
      images: [post.image],
    },
  };
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = getRelatedPosts(slug);

  return (
    <article className="bg-parchment">
      {/* Header */}
      <header className="pt-28 md:pt-32">
        <Container narrow>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-ash">
              <li>
                <Link href="/journal" className="hover:text-espresso transition-colors">
                  Journal
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-espresso">{post.category}</li>
            </ol>
          </nav>

          <Badge variant="category">{post.category}</Badge>

          <h1
            className="mt-5 font-display font-light leading-[1.1] text-espresso"
            style={{ fontSize: "clamp(2.25rem, 5vw, 3.5rem)" }}
          >
            {post.title}
          </h1>

          {post.subtitle && (
            <p className="mt-5 font-sans text-lg leading-relaxed text-ash">
              {post.subtitle}
            </p>
          )}

          {/* Byline */}
          <div className="mt-8 flex flex-wrap items-center gap-3 border-y border-linen py-4 font-sans text-xs text-ash">
            <span className="font-medium text-espresso">{post.author}</span>
            <span aria-hidden="true" className="text-linen">·</span>
            <time dateTime={post.date}>{formatDate(post.date)}</time>
            <span aria-hidden="true" className="text-linen">·</span>
            <span>{post.readTime}</span>
          </div>
        </Container>
      </header>

      {/* Hero image */}
      <div className="mx-auto mt-12 w-full max-w-[1000px] px-6 md:px-10 lg:px-16">
        <div className="relative aspect-[16/9] overflow-hidden rounded-md border border-linen bg-cream">
          <Image
            src={post.image}
            alt={post.title}
            fill
            priority
            sizes="(max-width: 1000px) 100vw, 1000px"
            className="object-cover"
          />
        </div>
      </div>

      {/* Body */}
      <div className="py-16 md:py-20">
        <Container narrow>
          <div className="flex flex-col gap-6">
            {(post.content ?? [{ type: "paragraph", text: post.excerpt }]).map(
              (block, i) =>
                block.type === "heading" ? (
                  <h2
                    key={i}
                    className="mt-6 font-display font-light text-espresso"
                    style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
                  >
                    {block.text}
                  </h2>
                ) : (
                  <p
                    key={i}
                    className="font-sans text-[15px] leading-[1.85] text-espresso/80"
                  >
                    {block.text}
                  </p>
                )
            )}
          </div>

          {/* Back link */}
          <div className="mt-16 border-t border-linen pt-8">
            <Link
              href="/journal"
              className="inline-flex items-center gap-2 font-sans text-[11px] uppercase tracking-widest text-ash transition-colors hover:text-espresso"
            >
              <ArrowLeft size={14} strokeWidth={1.5} aria-hidden="true" />
              Back to the Journal
            </Link>
          </div>
        </Container>
      </div>

      {/* Related */}
      {related.length > 0 && (
        <section
          aria-label="Related reading"
          className="border-t border-linen bg-cream py-20 md:py-24"
        >
          <Container>
            <h2
              className="mb-10 font-display font-light text-espresso"
              style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)" }}
            >
              Related Reading
            </h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((item) => (
                <BlogCard key={item.slug} post={item} />
              ))}
            </div>
          </Container>
        </section>
      )}
    </article>
  );
}
