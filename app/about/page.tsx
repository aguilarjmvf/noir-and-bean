import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { MissionSection } from "@/components/about/MissionSection";
import { VisionSection } from "@/components/about/VisionSection";
import { TeamSection } from "@/components/about/TeamSection";
import { TimelineSection } from "@/components/about/TimelineSection";
import { AboutCTA } from "@/components/about/AboutCTA";

const title = "Our Story";
const description =
  "The story behind Noir & Bean — two founders, one conviction, and a commitment to specialty coffee that honors every hand it passed through.";

export const metadata: Metadata = {
  title: "About",
  description,
  alternates: { canonical: "/about" },
  openGraph: { title, description, url: "/about" },
  twitter: { title, description },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <MissionSection />
      <VisionSection />
      <TeamSection />
      <TimelineSection />
      <AboutCTA />
    </>
  );
}
