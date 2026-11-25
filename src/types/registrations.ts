import type { LucideIcon } from "lucide-react";

export type RegistrationColor = "teal" | "navy";

export interface RegistrationCategory {
  label: string;
  icon: LucideIcon;
  title: string;
  items: readonly string[];
  color: RegistrationColor;
}
