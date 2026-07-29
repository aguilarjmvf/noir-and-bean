import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Noir & Bean collects, uses, and protects your personal information.",
  alternates: { canonical: "/privacy" },
  robots: { index: false, follow: true },
};

const SECTIONS = [
  {
    heading: "What we collect",
    body: "When you place an order, join our mailing list, or contact us, we collect the details you provide — your name, email address, shipping address, and order history. We also collect basic, anonymized analytics about how our site is used.",
  },
  {
    heading: "How we use it",
    body: "We use your information to fulfil orders, respond to enquiries, send the emails you've asked for, and improve the site. We never sell your personal data, and we only share it with the service providers required to run the business — payment and shipping partners — under strict confidentiality.",
  },
  {
    heading: "Email & marketing",
    body: "You'll only receive marketing email if you opt in. Every email includes a one-click unsubscribe link, and we honour it immediately. We send at most one newsletter per week.",
  },
  {
    heading: "Cookies",
    body: "We use a small number of essential and analytics cookies. You can decline non-essential cookies in your browser at any time without losing core functionality.",
  },
  {
    heading: "Your rights",
    body: "You can request a copy of the data we hold about you, ask us to correct it, or ask us to delete it entirely. Email hello@noirandbean.com and we'll action the request within 30 days.",
  },
];

export default function PrivacyPage() {
  return (
    <section aria-label="Privacy policy" className="bg-parchment pt-28 pb-24 md:pt-32">
      <Container narrow>
        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
          Legal
        </p>
        <h1
          className="mt-5 font-display font-light leading-[1.1] text-espresso"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}
        >
          Privacy Policy
        </h1>
        <p className="mt-4 font-sans text-sm text-ash">
          Last updated: January 2025
        </p>

        <div className="mt-12 flex flex-col gap-10">
          {SECTIONS.map(({ heading, body }) => (
            <div key={heading} className="flex flex-col gap-3">
              <h2 className="font-display font-light text-espresso text-[clamp(1.25rem,2.5vw,1.625rem)]">
                {heading}
              </h2>
              <p className="font-sans text-sm leading-[1.8] text-ash">{body}</p>
            </div>
          ))}
        </div>

        <p className="mt-14 border-t border-linen pt-8 font-sans text-xs leading-relaxed text-ash/70">
          This is a sample policy for a portfolio project and is not legal advice.
          Questions? Email{" "}
          <a
            href="mailto:hello@noirandbean.com"
            className="text-espresso underline underline-offset-4 decoration-gold hover:text-gold transition-colors"
          >
            hello@noirandbean.com
          </a>
          .
        </p>
      </Container>
    </section>
  );
}
