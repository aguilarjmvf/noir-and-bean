import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center rounded-sm font-sans font-medium uppercase tracking-widest leading-none",
  {
    variants: {
      variant: {
        gold: "bg-gold text-noir px-2.5 py-1 text-[10px]",
        outline: "border border-linen text-ash px-2.5 py-1 text-[10px]",
        category:
          "bg-transparent text-gold border border-gold px-2.5 py-1 text-[10px]",
        roast: "bg-espresso text-cream px-2.5 py-1 text-[10px]",
        limited: "bg-noir text-gold px-2.5 py-1 text-[10px]",
      },
    },
    defaultVariants: {
      variant: "gold",
    },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <span className={cn(badgeVariants({ variant }), className)} {...props} />
  );
}

export { Badge, badgeVariants };
