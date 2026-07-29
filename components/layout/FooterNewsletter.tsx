"use client";

import { useState, type FormEvent } from "react";

export function FooterNewsletter() {
  const [done, setDone] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value;
    if (!email) return;
    setDone(true);
  }

  if (done) {
    return (
      <div className="py-2">
        <p className="font-display font-light text-cream text-lg">You&rsquo;re in.</p>
        <p className="font-sans text-xs text-cream/40 mt-1">
          One email per week. That&rsquo;s it.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3 mt-1" noValidate>
      <input
        type="email"
        name="email"
        required
        placeholder="your@email.com"
        aria-label="Email address for newsletter"
        className="w-full bg-transparent font-sans text-sm text-cream placeholder:text-cream/25 border-b border-cream/20 focus:border-gold py-2 outline-none transition-colors duration-200"
      />
      <button
        type="submit"
        className="inline-flex items-center justify-center h-9 px-5 font-sans text-[10px] font-medium uppercase tracking-widest rounded-sm bg-gold text-noir hover:brightness-105 active:scale-[0.98] transition-all duration-200 cursor-pointer"
      >
        Subscribe
      </button>
      <p className="font-sans text-[11px] text-cream/25">
        One email per week. Unsubscribe anytime.
      </p>
    </form>
  );
}
