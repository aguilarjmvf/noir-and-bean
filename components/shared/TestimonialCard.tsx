import { cn } from "@/lib/utils";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
  className?: string;
}

export function TestimonialCard({
  testimonial,
  className,
}: TestimonialCardProps) {
  const { quote, name, location } = testimonial;

  return (
    <figure
      className={cn(
        "flex flex-col gap-5 p-8 border border-linen rounded-md bg-cream",
        "shadow-card",
        className
      )}
    >
      <span
        aria-hidden="true"
        className="font-display text-[4rem] leading-none text-gold select-none -mb-2"
      >
        &ldquo;
      </span>

      <blockquote>
        <p className="font-display font-light text-[1.125rem] leading-relaxed text-espresso italic">
          {quote}
        </p>
      </blockquote>

      <figcaption className="mt-auto flex flex-col gap-0.5 pt-5 border-t border-linen">
        <span className="font-sans text-sm font-medium text-espresso">
          {name}
        </span>
        <span className="font-sans text-xs text-ash">{location}</span>
      </figcaption>
    </figure>
  );
}
