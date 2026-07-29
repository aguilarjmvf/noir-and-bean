import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-sans text-sm font-medium tracking-widest uppercase transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-40 rounded-sm cursor-pointer",
  {
    variants: {
      variant: {
        primary:
          "bg-gold text-noir hover:scale-[1.02] hover:brightness-105 active:scale-[0.98]",
        secondary:
          "border border-gold text-gold bg-transparent hover:bg-gold hover:text-noir active:scale-[0.98]",
        "secondary-dark":
          "border border-cream text-cream bg-transparent hover:bg-cream hover:text-noir active:scale-[0.98]",
        ghost:
          "bg-transparent text-espresso underline-offset-4 hover:underline hover:text-gold",
        "ghost-light":
          "bg-transparent text-cream underline-offset-4 hover:underline hover:text-gold",
        destructive:
          "bg-red-600 text-white hover:bg-red-700 active:scale-[0.98]",
      },
      size: {
        sm: "h-8 px-4 text-xs",
        md: "h-11 px-7",
        lg: "h-13 px-10 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
