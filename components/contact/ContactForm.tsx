"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const SUBJECTS = [
  "General Question",
  "Order Inquiry",
  "Wholesale & Trade",
  "Press & Media",
  "Collaboration",
  "Something Else",
] as const;

const schema = z.object({
  name: z.string().min(2, "Please enter your name."),
  email: z.string().min(1, "Email is required.").email("Please enter a valid email address."),
  subject: z.enum(SUBJECTS, {
    errorMap: () => ({ message: "Please choose a subject." }),
  }),
  message: z
    .string()
    .min(10, "Please tell us a little more — at least 10 characters."),
});

type FormValues = z.infer<typeof schema>;

const labelClass =
  "font-sans text-[10px] font-medium uppercase tracking-widest text-ash";
const errorClass = "mt-1.5 font-sans text-xs text-red-500";

export function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", email: "", subject: undefined, message: "" },
  });

  const onSubmit = async () => {
    // No backend — simulate a network round trip.
    await new Promise((r) => setTimeout(r, 700));
  };

  return (
    <div>
      <AnimatePresence mode="wait">
        {isSubmitSuccessful ? (
          <motion.div
            key="success"
            role="status"
            aria-live="polite"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45 }}
            className="flex flex-col gap-4 border border-linen rounded-md bg-cream p-10 shadow-card"
          >
            <h3 className="font-display font-light text-espresso text-[clamp(1.5rem,3vw,2rem)]">
              Got it. Thank you.
            </h3>
            <p className="font-sans text-sm text-ash leading-relaxed max-w-[46ch]">
              We&rsquo;ll be back in touch within one business day. If your question
              is urgent, you can also reach us directly at{" "}
              <a
                href="mailto:hello@noirandbean.com"
                className="text-espresso underline underline-offset-4 decoration-gold hover:text-gold transition-colors"
              >
                hello@noirandbean.com
              </a>
              .
            </p>
            <div>
              <Button
                type="button"
                variant="secondary"
                size="md"
                onClick={() => reset()}
                className="mt-2"
              >
                Send Another Message
              </Button>
            </div>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35 }}
            onSubmit={handleSubmit(onSubmit)}
            noValidate
            className="flex flex-col gap-8"
          >
            {/* Name + Email */}
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label htmlFor="name" className={labelClass}>
                  Full Name
                </label>
                <Input
                  id="name"
                  placeholder="Your name"
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  className={cn(errors.name && "border-red-400 focus:border-red-400")}
                  {...register("name")}
                />
                {errors.name && (
                  <p id="name-error" role="alert" className={errorClass}>
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className={labelClass}>
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  className={cn(errors.email && "border-red-400 focus:border-red-400")}
                  {...register("email")}
                />
                {errors.email && (
                  <p id="email-error" role="alert" className={errorClass}>
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* Subject */}
            <div className="flex flex-col gap-2">
              <label htmlFor="subject" className={labelClass}>
                What&rsquo;s this about?
              </label>
              <select
                id="subject"
                aria-invalid={!!errors.subject}
                aria-describedby={errors.subject ? "subject-error" : undefined}
                defaultValue=""
                className={cn(
                  "w-full bg-transparent font-sans text-sm text-espresso",
                  "border-b border-linen focus:border-gold",
                  "py-3 px-0 outline-none transition-colors duration-200 cursor-pointer",
                  "[&:invalid]:text-ash",
                  errors.subject && "border-red-400 focus:border-red-400"
                )}
                {...register("subject")}
              >
                <option value="" disabled>
                  Select a subject
                </option>
                {SUBJECTS.map((s) => (
                  <option key={s} value={s} className="text-espresso">
                    {s}
                  </option>
                ))}
              </select>
              {errors.subject && (
                <p id="subject-error" role="alert" className={errorClass}>
                  {errors.subject.message}
                </p>
              )}
            </div>

            {/* Message */}
            <div className="flex flex-col gap-2">
              <label htmlFor="message" className={labelClass}>
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                placeholder="Tell us what's on your mind."
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? "message-error" : undefined}
                className={cn(
                  "w-full resize-y bg-transparent font-sans text-sm text-espresso placeholder:text-ash",
                  "border-b border-linen focus:border-gold",
                  "py-3 px-0 outline-none transition-colors duration-200",
                  errors.message && "border-red-400 focus:border-red-400"
                )}
                {...register("message")}
              />
              {errors.message && (
                <p id="message-error" role="alert" className={errorClass}>
                  {errors.message.message}
                </p>
              )}
            </div>

            <div>
              <Button
                type="submit"
                variant="primary"
                size="lg"
                disabled={isSubmitting}
                className="w-full sm:w-auto"
              >
                {isSubmitting ? "Sending…" : "Send Message"}
              </Button>
            </div>
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
