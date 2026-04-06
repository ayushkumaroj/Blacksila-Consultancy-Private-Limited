import { cn } from "@/lib/utils";
import React from "react";

export type ButtonVariant = "primary" | "secondary" | "ghost" | "navy" | "outline-teal";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", className, children, ...props }: ButtonProps) {
  const base =
    "inline-flex items-center justify-center font-semibold rounded-lg px-6 py-3 text-[0.9375rem] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[var(--color-teal)] text-white hover:bg-[var(--color-teal-dark)] shadow-sm hover:shadow-md focus-visible:ring-[var(--color-teal)] active:scale-[0.98]",
    secondary:
      "bg-white text-[var(--color-navy)] border border-[var(--color-grey-border)] hover:border-[var(--color-teal)] hover:text-[var(--color-teal)] hover:bg-gray-50 focus-visible:ring-[var(--color-teal)]",
    ghost:
      "text-white bg-transparent hover:bg-white/10 focus-visible:ring-white",
    navy:
      "bg-[var(--color-navy)] text-white hover:bg-[var(--color-navy-light)] shadow-sm hover:shadow-md focus-visible:ring-[var(--color-navy)] active:scale-[0.98]",
    "outline-teal":
      "bg-transparent text-[var(--color-teal)] border border-[var(--color-teal)] hover:bg-[var(--color-teal)] hover:text-white focus-visible:ring-[var(--color-teal)]",
  };

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
