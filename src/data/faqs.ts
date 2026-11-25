import { Users, Briefcase, Building2 } from "lucide-react";
import type { Faq, LicenseGuideItem } from "@/types";

export const LICENSE_GUIDE = [
  { icon: Users, type: "Proprietorship", range: "2–4 registrations" },
  { icon: Briefcase, type: "Partnership Firm", range: "3–5 registrations" },
  { icon: Building2, type: "Company (Pvt Ltd / LLP)", range: "4–6 registrations" },
] satisfies readonly LicenseGuideItem[];

export const FAQS = [
  {
    q: "How many licenses does my business need?",
    a: "The number of licenses depends on your business structure, industry, and operations. A Proprietorship typically needs 2–4 registrations, a Partnership Firm needs 3–5, and a Company (Pvt Ltd / LLP) needs 4–6. Additional licenses may be required based on employees, industry type, and specific business activities. Contact us for a personalised assessment.",
  },
  {
    q: "What is the first step to start a business in India?",
    a: "The first step is choosing the right business structure (Proprietorship, LLP, or Pvt Ltd Company) and then completing the required registrations — typically GST, PAN/TAN, and a local authority license. Our experts can guide you from idea validation to full registration.",
  },
  {
    q: "Do I need GST registration even if my turnover is low?",
    a: "GST registration is mandatory if your annual turnover exceeds ₹20 lakhs (₹10 lakhs for special category states), or if you sell goods/services online, or if you're involved in interstate supply. Even below the threshold, voluntary registration can benefit B2B businesses by allowing input tax credit.",
  },
  {
    q: "What is the difference between Pvt Ltd, LLP, and OPC?",
    a: "A Private Limited Company offers limited liability and is ideal for scaling with investors. An LLP combines limited liability with operational flexibility. A One Person Company (OPC) is designed for solo entrepreneurs who want limited liability. We provide expert guidance to help you choose the right structure for your goals.",
  },
  {
    q: "What does business consulting at Blacksila involve?",
    a: "Our business consulting is data-driven and tailored to your business. It includes market research and demand analysis, competitor mapping, business model design, financial planning, risk assessment, and growth strategy. We help you make informed decisions before you invest.",
  },
  {
    q: "Are there hidden charges in your pricing?",
    a: "Absolutely not. We share a complete fee structure upfront — our professional fees plus any applicable government or portal charges. Nothing is added later. You only pay what you agreed to.",
  },
] satisfies readonly Faq[];
