import type { LucideIcon } from "lucide-react";

export type CtaTrustClaimPlacement = "bullet" | "reassurance" | "security";

export interface CtaTrustClaim {
  text: string;
  icon: LucideIcon;
  placement: CtaTrustClaimPlacement;
}
