import { Users, IndianRupee, UserCheck, TrendingUp, Layers, Target } from "lucide-react";
import type { AboutSummaryCard, WhyChooseUsValue } from "@/types";

export const ABOUT_SUMMARY_CARDS = [
  { value: "End-to-End", label: "Business Solutions", sub: "From idea to execution" },
  { value: "1-on-1", label: "Expert Consulting", sub: "Personalized guidance" },
  { value: "Market", label: "Research Backed", sub: "Real insights, real data" },
  { value: "Legal &", label: "Tax Compliant", sub: "Fully covered, every step" },
] satisfies readonly AboutSummaryCard[];

export const WHY_CHOOSE_US_VALUES = [
  {
    icon: Users,
    title: "Experienced & Professional Team",
    desc: "A seasoned team of consultants, tax experts, and compliance professionals handling every case with expertise and care.",
    stat: "Expert team",
  },
  {
    icon: TrendingUp,
    title: "Fast and Reliable Service",
    desc: "Quick turnarounds and proactive updates ensure your business never faces unnecessary delays or missed deadlines.",
    stat: "On-time delivery",
  },
  {
    icon: IndianRupee,
    title: "Transparent Pricing",
    desc: "Clear, upfront quotes with no hidden fees. Government charges communicated in advance — you pay only what you agree to.",
    stat: "No hidden fees",
  },
  {
    icon: UserCheck,
    title: "Personalized One-to-One Consulting",
    desc: "Dedicated expert assigned to your account who knows your business and provides personalised guidance at every step.",
    stat: "1-on-1 support",
  },
  {
    icon: Target,
    title: "Market-Based Business Guidance",
    desc: "We back every recommendation with real market research, demand analysis, and industry trend data — not just general advice.",
    stat: "Data-driven insights",
  },
  {
    icon: Layers,
    title: "End-to-End Business Solutions",
    desc: "From idea validation and registration to compliance, taxation, and growth planning — we support you at every stage.",
    stat: "Complete coverage",
  },
] satisfies readonly WhyChooseUsValue[];
