import { Calculator, Building2, Users, FileText, TrendingUp } from "lucide-react";
import type { RegistrationCategory } from "@/types";

export const REGISTRATION_CATEGORIES = [
  {
    label: "A",
    icon: Calculator,
    title: "Basic Tax Registrations",
    items: ["GST Registration", "PAN & TAN", "Professional Tax (if applicable)"],
    color: "teal",
  },
  {
    label: "B",
    icon: Building2,
    title: "Local Authority Licenses",
    items: ["Shop & Establishment Registration", "Trade License"],
    color: "navy",
  },
  {
    label: "C",
    icon: Users,
    title: "Employee-Related Registrations",
    items: ["PF (Provident Fund)", "ESIC Registration", "Labour License"],
    color: "teal",
  },
  {
    label: "D",
    icon: FileText,
    title: "Business-Specific Licenses",
    items: [
      "Import Export Code (IEC)",
      "FSSAI License",
      "Pollution Control License",
      "Factory License",
      "Drug License",
    ],
    color: "navy",
  },
  {
    label: "E",
    icon: TrendingUp,
    title: "Optional / Growth-Based Registrations",
    items: ["MSME (Udyam) Registration", "Startup India Registration", "Trademark Registration"],
    color: "teal",
  },
] satisfies readonly RegistrationCategory[];
