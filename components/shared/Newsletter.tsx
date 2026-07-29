"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "@/components/shared/Container";
import { cn } from "@/lib/utils";

const schema = z.object({
  email: z.string().email("Please enter a valid email address."),
});
type FormValues = z.infer<typeof schema>;

interface NewsletterProps {
  heading?: string;
  body?: string;
  className?: string;
}

export function Newsletter({
  heading = "Stay in the Rotation.",
  body = "New origins, brew guides, and early access to limited releases — straight to your inbox. No noise. No frequency guilt.",
  className,
}: NewsletterProps) {
  const [submitted, setSubmitted] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async () => {
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  return (
    <section
      className={cn("bg-noir py-24 md:py-32", className)}
      aria-labelledby="newsletter-heading"
    >
      <Container narrow>
        <div className="flex flex-col items-center text-center gap-6">
          <p className="font-sans text-xs font-medium uppercase tracking-widest text-gold">
            The Mailing List
          </p>

          <h2
            id="newsletter-heading"
            className="font-display font-light text-cream text-[clamp(2rem,4vw,2.75rem)] leading-tight"
          >
            {heading}
          </h2>

          <p className="font-sans text-base text-cream/60 leading-relaxed max-w-[44ch]">
            {body}
          </p>

          <div className="w-full max-w-md mt-2">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.4 }}
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="flex flex-col sm:flex-row gap-3 items-start"
                >
                  <div className="flex-1 w-full">
                    <Input
                      type="email"
                      placeholder="your@email.com"
                      aria-label="Email address"
                      {...register("email")}
                      className={cn(
                        "text-cream placeholder:text-cream/30 border-cream/20 focus:border-gold",
                        errors.email && "border-red-400"
                      )}
                    />
                    {errors.email && (
                      <p className="mt-1.5 text-xs text-red-400 font-sans text-left">
                        {errors.email.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    variant="primary"
                    size="md"
                    disabled={isSubmitting}
                    className="shrink-0 w-full sm:w-auto"
                  >
                    {isSubmitting ? "Subscribing…" : "Subscribe"}
                  </Button>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-2 py-4"
                >
                  <p className="font-display font-light text-cream text-xl">
                    You&rsquo;re in.
                  </p>
                  <p className="font-sans text-sm text-cream/50">
                    We&rsquo;ll be in touch — once a week, never more.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <p className="font-sans text-xs text-cream/30 mt-1">
            We send one email per week, maximum. Unsubscribe anytime.
          </p>
        </div>
      </Container>
    </section>
  );
}
