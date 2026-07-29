import * as React from "react";
import { cn } from "@/lib/utils";

interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: "horizontal" | "vertical";
  gold?: boolean;
}

function Separator({
  className,
  orientation = "horizontal",
  gold = false,
  ...props
}: SeparatorProps) {
  return (
    <hr
      role="separator"
      aria-orientation={orientation}
      className={cn(
        "shrink-0 border-none",
        orientation === "horizontal"
          ? "h-px w-full"
          : "h-full w-px inline-block",
        gold ? "bg-gold" : "bg-linen",
        className
      )}
      {...props}
    />
  );
}

export { Separator };
