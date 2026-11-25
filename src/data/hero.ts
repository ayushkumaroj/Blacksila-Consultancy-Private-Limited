import { Calculator, FileText, FileCode, Building2 } from "lucide-react";
import type { HeroComplianceService, HeroMarqueeService } from "@/types";

export const HERO_MARQUEE_SERVICES = [
  "Business Strategy Consulting",
  "GST Registration & Filing",
  "Company Registration",
  "Income Tax Filing",
  "Market Research & Analysis",
  "ROC Compliance",
  "Trademark Registration",
  "PF & ESIC Registration",
  "Labour Law Compliance",
  "Digital Marketing Strategy",
  "FSSAI License",
  "Import Export Code (IEC)",
] satisfies readonly HeroMarqueeService[];

export const HERO_COMPLIANCE_SERVICES = [
  { icon: Calculator, label: "GST Return", status: "Filed ✓", state: "done" },
  { icon: FileText, label: "ITR Filing", status: "In Progress", state: "active" },
  { icon: FileCode, label: "ROC Annual", status: "Filed ✓", state: "done" },
  { icon: Building2, label: "Payroll", status: "Processed", state: "done" },
] satisfies readonly HeroComplianceService[];
