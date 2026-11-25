import type { FooterLink, FooterSocialLink } from "@/types";

export const FOOTER_SERVICE_LINKS = [
  { label: "Company Registration", href: "#" },
  { label: "GST Services", href: "#" },
  { label: "Income Tax Filing", href: "#" },
  { label: "Accounting & Bookkeeping", href: "#" },
  { label: "ROC Compliance", href: "#" },
  { label: "Payroll Processing", href: "#" },
  { label: "Trademark Registration", href: "#" },
] satisfies readonly FooterLink[];

export const FOOTER_COMPANY_LINKS = [
  { label: "About Us", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#" },
] satisfies readonly FooterLink[];

export const FOOTER_POLICY_LINKS = [
  { label: "Privacy Policy", href: "#" },
  { label: "Terms of Service", href: "#" },
  { label: "Refund Policy", href: "#" },
] satisfies readonly FooterLink[];

export const FOOTER_SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#", icon: "linkedin" },
  { label: "Twitter / X", href: "#", icon: "twitter" },
  { label: "Facebook", href: "#", icon: "facebook" },
  { label: "Instagram", href: "#", icon: "instagram" },
] satisfies readonly FooterSocialLink[];
