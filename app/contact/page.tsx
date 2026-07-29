import type { Metadata } from "next";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactBody } from "@/components/contact/ContactBody";
import { MapPlaceholder } from "@/components/contact/MapPlaceholder";
import { FAQSection } from "@/components/contact/FAQSection";

const title = "Get in Touch";
const description =
  "Questions about an order, a wholesale inquiry, or something to say about the coffee — reach the Noir & Bean roastery in Portland, OR.";

export const metadata: Metadata = {
  title: "Contact",
  description,
  alternates: { canonical: "/contact" },
  openGraph: { title, description, url: "/contact" },
  twitter: { title, description },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactBody />
      <MapPlaceholder />
      <FAQSection />
    </>
  );
}
