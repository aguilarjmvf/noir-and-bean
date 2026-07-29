import Link from "next/link";
import { Instagram, Twitter, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Container } from "@/components/shared/Container";
import { FooterNewsletter } from "@/components/layout/FooterNewsletter";
import { NAV_LINKS } from "@/lib/data/nav";

const SOCIAL_LINKS = [
  { label: "Instagram", href: "https://instagram.com/noirandbean", Icon: Instagram },
  { label: "Twitter / X", href: "https://twitter.com/noirandbean", Icon: Twitter },
  { label: "Email us", href: "mailto:hello@noirandbean.com", Icon: Mail },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-espresso" aria-label="Site footer">
      <Separator gold className="opacity-30" />

      <Container className="py-16 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              className="font-display text-2xl font-light text-cream hover:text-gold transition-colors duration-200 w-fit"
            >
              Noir <span className="text-gold">&amp;</span> Bean
            </Link>
            <p className="font-sans text-sm text-cream/50 leading-relaxed max-w-[26ch]">
              Single origin. Small batch. Roasted weekly in Portland, OR.
            </p>
            <div className="flex items-center gap-5 mt-1">
              {SOCIAL_LINKS.map(({ label, href, Icon }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="text-cream/35 hover:text-gold transition-colors duration-200"
                >
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex flex-col gap-5" aria-label="Footer navigation">
            <p
              id="footer-nav-heading"
              className="font-sans text-[10px] font-medium uppercase tracking-widest text-gold"
            >
              Navigate
            </p>
            <ul className="flex flex-col gap-3" role="list">
              {NAV_LINKS.map(({ label, href }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="font-sans text-sm text-cream/60 hover:text-cream transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Roastery */}
          <div className="flex flex-col gap-5">
            <p className="font-sans text-[10px] font-medium uppercase tracking-widest text-gold">
              The Roastery
            </p>
            <address className="not-italic flex flex-col gap-2">
              <span className="font-sans text-sm text-cream/60 leading-relaxed">
                2847 SE Division Street<br />
                Portland, OR 97202
              </span>
              <a
                href="mailto:hello@noirandbean.com"
                className="font-sans text-sm text-cream/60 hover:text-cream transition-colors duration-200 mt-0.5 w-fit"
              >
                hello@noirandbean.com
              </a>
              <span className="font-sans text-xs text-cream/35 mt-1 leading-relaxed">
                Mon – Fri: 8am – 5pm PST<br />
                Sat: 10am – 2pm
              </span>
            </address>
          </div>

          {/* Newsletter */}
          <div className="flex flex-col gap-5">
            <p className="font-sans text-[10px] font-medium uppercase tracking-widest text-gold">
              Stay in the Rotation
            </p>
            <p className="font-sans text-sm text-cream/50 leading-relaxed">
              New origins, brew guides, and limited releases — weekly.
            </p>
            <FooterNewsletter />
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-cream/10">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <p className="font-sans text-xs text-cream/25">
              &copy; {year} Noir &amp; Bean. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy"
                className="font-sans text-xs text-cream/25 hover:text-cream/60 transition-colors duration-200"
              >
                Privacy
              </Link>
              <Link
                href="/terms"
                className="font-sans text-xs text-cream/25 hover:text-cream/60 transition-colors duration-200"
              >
                Terms
              </Link>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
