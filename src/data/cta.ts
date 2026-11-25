import { CheckCircle2 } from "lucide-react";
import type { CtaTrustPoint } from "@/types";

export const CTA_TRUST_POINTS = [
  {
    text: "Free initial consultation — no credit card",
    icon: CheckCircle2,
  },
  {
    text: "Response within 2 business hours",
    icon: CheckCircle2,
  },
  {
    text: "Dedicated expert assigned to your account",
    icon: CheckCircle2,
  },
] satisfies readonly CtaTrustPoint[];

export const CTA_BADGE_TEXT = "100% Free · No Commitment · Response within 2 Hours";

export const CTA_PRIVACY_NOTE = "Your information is 100% secure and never shared";
