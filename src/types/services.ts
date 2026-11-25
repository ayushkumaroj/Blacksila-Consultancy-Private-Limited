import type { LucideIcon } from "lucide-react";

export type ServiceColor = "teal" | "navy";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string | null;
  tag: string | null;
  color: ServiceColor;
  items: readonly string[];
  closing: string | null;
}
