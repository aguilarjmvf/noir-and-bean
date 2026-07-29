import type { Metadata } from "next";
import { Container } from "@/components/shared/Container";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The terms that govern your use of the Noir & Bean website and store.",
  alternates: { canonical: "/terms" },
  robots: { index: false, follow: true },
};

const SECTIONS = [
  {
    heading: "Using this site",
    body: "By accessing Noir & Bean, you agree to use it lawfully and not to interfere with its operation or security. All content — copy, photography, and branding — is owned by Noir & Bean and may not be reproduced without permission.",
  },
  {
    heading: "Orders & pricing",
    body: "All prices are listed in US dollars and may change without notice. We reserve the right to refuse or cancel any order — for example, if a product is mispriced or out of stock — and to refund you in full where an order cannot be fulfilled.",
  },
  {
    heading: "Shipping",
    body: "We roast to order and ship within 48 hours of the roast date. Delivery timelines are estimates provided by our carriers and are not guaranteed. Risk of loss passes to you on delivery.",
  },
  {
    heading: "Returns",
    body: "Because roasted coffee is perishable, we can't accept returns on correctly shipped orders. If your order arrives damaged or incorrect, contact us within 7 days and we'll make it right.",
  },
  {
    heading: "Liability",
    body: "The site and products are provided “as is.” To the fullest extent permitted by law, Noir & Bean is not liable for indirect or consequential damages arising from your use of the site or products.",
  },
];

export default function TermsPage() {
  return (
    <section aria-label="Terms of service" className="bg-parchment pt-28 pb-24 md:pt-32">
      <Container narrow>
        <p className="font-sans text-[10px] font-medium uppercase tracking-[0.2em] text-gold">
          Legal
        </p>
        <h1
          className="mt-5 font-display font-light leading-[1.1] text-espresso"
          style={{ fontSize: "clamp(2.25rem, 5vw, 3.25rem)" }}
        >
          Terms of Service
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
          This is a sample document for a portfolio project and is not legal advice.
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
