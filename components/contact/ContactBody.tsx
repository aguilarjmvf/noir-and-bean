import { Container } from "@/components/shared/Container";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export function ContactBody() {
  return (
    <section aria-label="Contact form and details" className="bg-parchment py-20 md:py-24">
      <Container>
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-[1.4fr_1fr] lg:gap-20">
          {/* Form */}
          <div>
            <p className="font-sans text-[10px] font-medium uppercase tracking-widest text-gold mb-8">
              Send a Message
            </p>
            <ContactForm />
          </div>

          {/* Business info */}
          <div className="lg:border-l lg:border-linen lg:pl-16">
            <p className="font-sans text-[10px] font-medium uppercase tracking-widest text-gold mb-8">
              Roastery Details
            </p>
            <ContactInfo />
          </div>
        </div>
      </Container>
    </section>
  );
}
