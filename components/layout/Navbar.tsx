"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { buttonVariants } from "@/components/ui/button";
import { NAV_LINKS } from "@/lib/data/nav";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();
  const toggleRef = useRef<HTMLButtonElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  /* Scroll detection */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 48);
    onScroll(); // set initial state without waiting for scroll event
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  /* Lock body scroll when menu is open */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  /* Close on route change */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  /* Focus management + trap while the mobile menu is open */
  useEffect(() => {
    if (!menuOpen) return;
    const menu = menuRef.current;
    if (!menu) return;

    const getFocusable = () =>
      Array.from(
        menu.querySelectorAll<HTMLElement>(
          'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])'
        )
      ).filter((el) => el.offsetParent !== null);

    // Move focus into the dialog when it opens.
    getFocusable()[0]?.focus();

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setMenuOpen(false);
        toggleRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;

      const items = getFocusable();
      if (items.length === 0) return;
      const first = items[0];
      const last = items[items.length - 1];

      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  function close() {
    setMenuOpen(false);
  }

  return (
    <>
      {/* ── Fixed header ── */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled || menuOpen
            ? "bg-noir shadow-[0_1px_0_rgba(201,169,110,0.12)]"
            : "bg-noir/60 backdrop-blur-md"
        )}
      >
        <div className="mx-auto max-w-[1280px] px-6 md:px-10 lg:px-16">
          <div className="flex h-16 items-center justify-between gap-8">

            {/* Logo */}
            <Link
              href="/"
              onClick={close}
              aria-label="Noir & Bean — home"
              className="shrink-0 font-display text-xl font-light tracking-wide text-cream hover:text-gold transition-colors duration-200"
            >
              Noir <span className="text-gold">&amp;</span> Bean
            </Link>

            {/* Desktop nav */}
            <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => {
                const active = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    aria-current={active ? "page" : undefined}
                    className={cn(
                      "font-sans text-xs font-medium uppercase tracking-widest transition-colors duration-200 relative group py-1",
                      active ? "text-gold" : "text-cream/65 hover:text-cream"
                    )}
                  >
                    {label}
                    {/* Hover underline (inactive links) */}
                    {!active && (
                      <span className="absolute -bottom-0.5 left-0 h-px w-full origin-left scale-x-0 bg-gold/50 transition-transform duration-300 ease-out group-hover:scale-x-100" />
                    )}
                    {/* Active underline — shared element slides between links */}
                    {active && (
                      <motion.span
                        layoutId="nav-underline"
                        className="absolute -bottom-0.5 left-0 h-px w-full bg-gold"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right side */}
            <div className="flex items-center gap-3">
              <Link
                href="/shop"
                className={cn(
                  buttonVariants({ variant: "primary", size: "sm" }),
                  "hidden md:inline-flex"
                )}
              >
                Shop Now
              </Link>

              {/* Mobile toggle */}
              <button
                ref={toggleRef}
                type="button"
                aria-label={menuOpen ? "Close menu" : "Open menu"}
                aria-expanded={menuOpen}
                aria-controls="mobile-menu"
                onClick={() => setMenuOpen((v) => !v)}
                className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-cream hover:text-gold transition-colors duration-200"
              >
                <AnimatePresence mode="wait" initial={false}>
                  {menuOpen ? (
                    <motion.span
                      key="close"
                      initial={{ rotate: -45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: 45, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <X size={20} strokeWidth={1.5} aria-hidden="true" />
                    </motion.span>
                  ) : (
                    <motion.span
                      key="open"
                      initial={{ rotate: 45, opacity: 0 }}
                      animate={{ rotate: 0, opacity: 1 }}
                      exit={{ rotate: -45, opacity: 0 }}
                      transition={{ duration: 0.18 }}
                    >
                      <Menu size={20} strokeWidth={1.5} aria-hidden="true" />
                    </motion.span>
                  )}
                </AnimatePresence>
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* ── Mobile full-screen overlay ── */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            key="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Site menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="fixed inset-0 z-40 bg-noir flex flex-col"
          >
            {/* Nav links — vertically centered with offset for header */}
            <div className="flex flex-1 flex-col items-center justify-center gap-2 pt-16">
              <nav
                aria-label="Mobile navigation"
                className="flex flex-col items-center gap-2 w-full px-8"
              >
                {NAV_LINKS.map(({ label, href }, i) => (
                  <motion.div
                    key={href}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 12 }}
                    transition={{ duration: 0.32, delay: i * 0.06, ease: EASE }}
                    className="w-full"
                  >
                    <Link
                      href={href}
                      onClick={close}
                      className={cn(
                        "block w-full text-center font-display font-light leading-none py-5",
                        "text-[clamp(2.25rem,8vw,3rem)]",
                        "border-b border-cream/8 transition-colors duration-200",
                        pathname === href
                          ? "text-gold"
                          : "text-cream hover:text-gold"
                      )}
                    >
                      {label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              {/* CTA */}
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.32, delay: NAV_LINKS.length * 0.06 + 0.04, ease: EASE }}
                className="mt-10"
              >
                <Link
                  href="/shop"
                  onClick={close}
                  className={buttonVariants({ variant: "primary", size: "lg" })}
                >
                  Shop Now
                </Link>
              </motion.div>
            </div>

            {/* Bottom info strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="pb-10 flex flex-col items-center gap-1"
            >
              <div className="w-8 h-px bg-gold opacity-30 mb-5" />
              <p className="font-sans text-[11px] text-cream/25 uppercase tracking-widest">
                Portland, OR
              </p>
              <a
                href="mailto:hello@noirandbean.com"
                className="font-sans text-[11px] text-cream/25 hover:text-cream/50 transition-colors duration-200"
              >
                hello@noirandbean.com
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
