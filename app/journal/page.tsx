import type { Metadata } from "next";
import { JournalHero } from "@/components/journal/JournalHero";
import { JournalGrid } from "@/components/journal/JournalGrid";
import { Newsletter } from "@/components/shared/Newsletter";

const title = "The Journal";
const description =
  "Essays, brew guides, and origin stories from Noir & Bean. We write when we have something worth saying.";

export const metadata: Metadata = {
  title: "Journal",
  description,
  alternates: { canonical: "/journal" },
  openGraph: { title, description, url: "/journal" },
  twitter: { title, description },
};

export default function JournalPage() {
  return (
    <>
      <JournalHero />
      <JournalGrid />
      <Newsletter
        heading="Never Miss an Origin Story."
        body="New essays, brew guides, and farm dispatches — delivered the morning they publish. One email a week, never more."
      />
    </>
  );
}
