import { cn } from "@/lib/utils";
import React from "react";

export type BadgeVariant = "trust" | "default" | "category" | "success" | "warning";

interface BadgeProps {
  variant?: BadgeVariant;
  className?: string;
  children: React.ReactNode;
}

export function Badge({ variant = "default", className, children }: BadgeProps) {
  const base = "inline-flex items-center text-[0.75rem] font-medium rounded-full";

  const variants: Record<BadgeVariant, string> = {
    trust:    "badge-trust",
    default:  "bg-gray-100 text-gray-700 px-3 py-1",
    category: "badge-category",
    success:  "bg-emerald-50 text-emerald-700 border border-emerald-200/60 px-3 py-1",
    warning:  "bg-amber-50 text-amber-700 border border-amber-200/60 px-3 py-1",
  };

  return (
    <span className={cn(base, variants[variant], className)}>
      {children}
    </span>
  );
}
