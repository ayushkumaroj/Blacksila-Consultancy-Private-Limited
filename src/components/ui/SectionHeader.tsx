import { cn } from "@/lib/utils";

interface SectionHeaderProps {
  label?: string;
  heading: string;
  subtext?: string;
  className?: string;
  align?: "left" | "center";
  accentLine?: boolean;
}

export function SectionHeader({
  label,
  heading,
  subtext,
  className,
  align = "left",
  accentLine = false,
}: SectionHeaderProps) {
  const isCenter = align === "center";

  return (
    <div className={cn("w-full flex flex-col", isCenter && "items-center text-center", className)}>
      {label && (
        <span className="type-label mb-3 inline-flex items-center gap-2">
          <span className="w-4 h-px bg-[var(--color-teal)]" />
          {label}
          <span className="w-4 h-px bg-[var(--color-teal)]" />
        </span>
      )}
      <h2 className="type-h2 text-[var(--color-navy)]">{heading}</h2>
      {accentLine && (
        <div className={cn("section-divider mt-4", isCenter && "mx-auto")} />
      )}
      {subtext && (
        <p className={cn("type-body text-gray-500 mt-4 max-w-[60ch]", isCenter && "mx-auto")}>
          {subtext}
        </p>
      )}
    </div>
  );
}
