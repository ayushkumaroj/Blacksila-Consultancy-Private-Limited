import type { LucideIcon } from "lucide-react";

export interface Faq {
  q: string;
  a: string;
}

export interface LicenseGuideItem {
  icon: LucideIcon;
  type: string;
  range: string;
}
