import { MapPin, Clock, Mail, Instagram, Twitter } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const EMAILS = [
  { label: "General", address: "hello@noirandbean.com" },
  { label: "Wholesale & Trade", address: "trade@noirandbean.com" },
  { label: "Press", address: "press@noirandbean.com" },
];

export function ContactInfo() {
  return (
    <aside aria-label="Business information" className="flex flex-col gap-10">
      {/* Address */}
      <div className="flex gap-4">
        <MapPin size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
        <div className="flex flex-col gap-1.5">
          <h3 className="font-sans text-[10px] font-medium uppercase tracking-widest text-ash">
            The Roastery
          </h3>
          <address className="font-sans text-sm not-italic text-espresso leading-relaxed">
            Noir &amp; Bean Roastery<br />
            2847 SE Division Street<br />
            Portland, OR 97202
          </address>
        </div>
      </div>

      <Separator />

      {/* Hours */}
      <div className="flex gap-4">
        <Clock size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
        <div className="flex flex-col gap-1.5">
          <h3 className="font-sans text-[10px] font-medium uppercase tracking-widest text-ash">
            Hours
          </h3>
          <ul className="font-sans text-sm text-espresso leading-relaxed">
            <li className="flex justify-between gap-8">
              <span>Monday – Friday</span>
              <span className="text-ash">8am – 5pm PST</span>
            </li>
            <li className="flex justify-between gap-8">
              <span>Saturday</span>
              <span className="text-ash">10am – 2pm PST</span>
            </li>
            <li className="flex justify-between gap-8">
              <span>Sunday</span>
              <span className="text-ash">Closed</span>
            </li>
          </ul>
        </div>
      </div>

      <Separator />

      {/* Emails */}
      <div className="flex gap-4">
        <Mail size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
        <div className="flex flex-col gap-2.5">
          <h3 className="font-sans text-[10px] font-medium uppercase tracking-widest text-ash">
            Email
          </h3>
          <ul className="flex flex-col gap-2">
            {EMAILS.map(({ label, address }) => (
              <li key={address} className="flex flex-col">
                <span className="font-sans text-[11px] text-ash">{label}</span>
                <a
                  href={`mailto:${address}`}
                  className="font-sans text-sm text-espresso underline-offset-4 hover:text-gold hover:underline transition-colors w-fit"
                >
                  {address}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Separator />

      {/* Socials */}
      <div className="flex gap-4">
        <Instagram size={18} strokeWidth={1.5} className="mt-0.5 shrink-0 text-gold" />
        <div className="flex flex-col gap-2.5">
          <h3 className="font-sans text-[10px] font-medium uppercase tracking-widest text-ash">
            Follow Along
          </h3>
          <div className="flex flex-col gap-2">
            <a
              href="https://instagram.com/noirandbean"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-espresso hover:text-gold transition-colors w-fit"
            >
              <Instagram size={14} strokeWidth={1.5} />
              @noirandbean
            </a>
            <a
              href="https://x.com/noirandbean"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 font-sans text-sm text-espresso hover:text-gold transition-colors w-fit"
            >
              <Twitter size={14} strokeWidth={1.5} />
              @noirandbean
            </a>
          </div>
        </div>
      </div>
    </aside>
  );
}
