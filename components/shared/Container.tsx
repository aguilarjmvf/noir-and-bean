import { cn } from "@/lib/utils";

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
  narrow?: boolean;
}

export function Container({
  children,
  className,
  as: Tag = "div",
  narrow = false,
}: ContainerProps) {
  return (
    <Tag
      className={cn(
        "mx-auto w-full px-6 md:px-10 lg:px-16",
        narrow ? "max-w-[720px]" : "max-w-[1280px]",
        className
      )}
    >
      {children}
    </Tag>
  );
}
