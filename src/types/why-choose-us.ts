import type { LucideIcon } from "lucide-react";

export interface AboutSummaryCard {
  value: string;
  label: string;
  sub: string;
}

export interface WhyChooseUsValue {
  icon: LucideIcon;
  title: string;
  desc: string;
  stat: string;
}
