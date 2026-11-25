import { CheckCircle2, ShieldCheck, Lock } from "lucide-react";
import type { CtaTrustClaim } from "@/types";

export const CTA_TRUST_CLAIMS = [
  {
    text: "Free initial consultation — no credit card",
    icon: CheckCircle2,
    placement: "bullet",
  },
  {
    text: "Response within 2 business hours",
    icon: CheckCircle2,
    placement: "bullet",
  },
  {
    text: "Dedicated expert assigned to your account",
    icon: CheckCircle2,
    placement: "bullet",
  },
  {
    text: "100% Free · No Commitment · Response within 2 Hours",
    icon: ShieldCheck,
    placement: "reassurance",
  },
  {
    text: "Your information is 100% secure and never shared",
    icon: Lock,
    placement: "security",
  },
] satisfies readonly CtaTrustClaim[];
