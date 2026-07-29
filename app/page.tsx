import { HeroSection } from "@/components/home/HeroSection";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandStory } from "@/components/home/BrandStory";
import { ProcessSection } from "@/components/home/ProcessSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { Newsletter } from "@/components/shared/Newsletter";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedProducts />
      <BrandStory />
      <ProcessSection />
      <TestimonialsSection />
      <Newsletter />
    </>
  );
}
