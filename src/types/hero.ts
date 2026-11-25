import type { LucideIcon } from "lucide-react";

export type HeroMarqueeService = string;
export type HeroComplianceState = "done" | "active";

export interface HeroComplianceService {
  icon: LucideIcon;
  label: string;
  status: string;
  state: HeroComplianceState;
}
