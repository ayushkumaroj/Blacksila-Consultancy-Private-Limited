import { cn } from "@/lib/utils";

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  variant?: "default" | "elevated" | "flush";
}

export function Card({ hover, variant = "default", className, children, ...props }: CardProps) {
  const base = "bg-white rounded-2xl border border-[var(--color-grey-border)]";

  const variants = {
    default: "p-6",
    elevated: "p-6 shadow-[var(--shadow-card)]",
    flush: "p-0 overflow-hidden",
  };

  return (
    <div
      className={cn(
        base,
        variants[variant],
        hover && "transition-all duration-250 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
