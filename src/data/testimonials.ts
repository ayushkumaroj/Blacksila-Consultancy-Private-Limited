import type { Testimonial } from "@/types";

export const TESTIMONIALS = [
  {
    name: "Verified Client",
    company: "Business Owner",
    initials: "BC",
    text: "Blacksila Consultancy helped us with company registration and GST. The process was smooth and quick. Highly recommended!",
    service: "Company Registration + GST",
    color: "from-teal to-navy",
  },
  {
    name: "Verified Client",
    company: "Entrepreneur",
    initials: "VC",
    text: "Very professional and supportive team. Their business consulting gave us clarity before we invested. We now feel confident about our business direction.",
    service: "Business Consulting",
    color: "from-navy to-navy-light",
    featured: true,
  },
  {
    name: "Rahul Sharma",
    company: "Tech Startup Founder",
    initials: "RS",
    text: "From market research to compliance — Blacksila handled everything. Their one-to-one consulting approach is what sets them apart from the rest.",
    service: "End-to-End Advisory",
    color: "from-teal-dark to-teal",
  },
] satisfies readonly Testimonial[];
