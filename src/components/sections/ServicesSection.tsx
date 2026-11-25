import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  ArrowRight, Briefcase, Calculator, Building2, BookOpen,
  Users, Settings, Monitor, CheckCircle2,
} from "lucide-react";

const SERVICES = [
  {
    icon: Briefcase,
    title: "Business Consulting & Advisory",
    tag: "Core USP",
    color: "teal",
    items: [
      "Business Strategy Consulting",
      "Financial Consulting",
      "Market Research & Demand Analysis",
      "Competitor Analysis",
      "Business Model Design",
      "Risk Assessment",
      "Growth & Expansion Planning",
      "Decision Support & Business Advisory",
    ],
    closing: "We don't just help you start a business — we help you start the RIGHT business.",
  },
  {
    icon: Calculator,
    title: "Financial & Taxation Services",
    tag: null,
    color: "navy",
    items: [
      "Income Tax Filing & Planning",
      "GST Registration & Return Filing",
      "Budget Planning & Profit Improvement",
      "Investment Guidance",
      "Cost Reduction Strategies",
    ],
    closing: null,
  },
  {
    icon: Building2,
    title: "Compliance & Legal Services",
    tag: null,
    color: "teal",
    items: [
      "Company Registration (Pvt Ltd, LLP, OPC)",
      "ROC Compliance",
      "Legal Documentation & Agreements",
      "Tax Compliance & Advisory",
    ],
    closing: null,
  },
  {
    icon: BookOpen,
    title: "Accounting & Bookkeeping",
    tag: null,
    color: "navy",
    items: [
      "Financial Record Maintenance",
      "Bookkeeping Services",
      "Audit Preparation",
      "MIS & Financial Reporting",
    ],
    closing: null,
  },
  {
    icon: Users,
    title: "Labour & HR Consulting",
    tag: null,
    color: "teal",
    items: [
      "PF Registration & Compliance",
      "ESIC Registration",
      "Labour Law Compliance",
      "Hiring & Workforce Planning",
      "Salary Structure Design",
    ],
    closing: null,
  },
  {
    icon: Settings,
    title: "Operations Consulting",
    tag: null,
    color: "navy",
    items: [
      "Process Improvement",
      "Cost Optimization",
      "Efficiency Enhancement",
      "Supply Chain Optimization",
    ],
    closing: null,
  },
  {
    icon: Monitor,
    title: "Digital & Technology Consulting",
    tag: "New",
    color: "teal",
    items: [
      "Website Development (WordPress / E-commerce)",
      "Digital Marketing Strategy",
      "CRM Setup",
      "Business Automation Tools",
    ],
    closing: null,
  },
];

export function ServicesSection() {
  const [featured, ...rest] = SERVICES;
  const FeaturedIcon = featured.icon;  return (
    <section
      id="services"
      className="bg-[var(--color-grey-bg)] py-20 lg:py-28 relative z-10"
    >
      <div className="container-ds">
        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12 lg:mb-16">
          <SectionHeader
            label="Our Professional Services"
            heading="Integrated solutions for every business need"
            subtext="We offer integrated business consulting, financial management, taxation, and compliance services to ensure seamless business setup, regulatory adherence, and long-term success."
            accentLine
          />
        </div>

        {/* Master Grid Setup */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          
          {/* ── Featured card: Business Consulting & Advisory ── */}
          <div
            className="lg:col-span-3 group relative rounded-[1.25rem] border border-[var(--color-teal)]/30 p-8 lg:p-10 cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1 overflow-hidden bg-white"
          >
            {/* Ambient Background Gradient for Featured */}
            <div 
              className="absolute inset-0 pointer-events-none opacity-50"
              style={{
                background: "radial-gradient(ellipse at top right, rgba(15,155,142,0.08), transparent 50%), radial-gradient(ellipse at bottom left, rgba(27,58,107,0.04), transparent 50%)"
              }}
            />

            {/* Tag */}
            {featured.tag && (
              <span className="absolute top-6 right-6 lg:top-8 lg:right-8 text-[0.6875rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--color-teal)] text-white shadow-sm z-10">
                {featured.tag}
              </span>
            )}

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-10 lg:gap-14 items-center">
              {/* Left Column: Icon and Title */}
              <div className="flex flex-col items-start">
                <div
                  className="w-14 h-14 rounded-[0.85rem] flex items-center justify-center mb-6 shadow-sm"
                  style={{ background: "linear-gradient(135deg, rgba(15,155,142,0.15) 0%, rgba(25,196,181,0.08) 100%)" }}
                >
                  <FeaturedIcon size={24} style={{ color: "var(--color-teal)" }} />
                </div>
                
                <h3 className="text-2xl lg:text-[1.75rem] font-extrabold text-[var(--color-navy)] leading-tight mb-3">
                  {featured.title}
                </h3>
                <p className="text-[0.9375rem] font-medium leading-relaxed" style={{ color: "var(--color-teal-dark)" }}>
                  We help you make the right decisions with data-driven insights
                </p>

                <div className="mt-8 flex items-center gap-1.5 text-[var(--color-teal)] text-[0.875rem] font-bold opacity-0 -translate-x-2 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0">
                  Explore {featured.title.split(" ")[0]} Services
                  <ArrowRight size={15} className="ml-1" />
                </div>
              </div>

              {/* Right Column: Items Grid and Quote */}
              <div className="flex flex-col h-full justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                  {featured.items.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-[2px] rounded-full p-[2px] bg-[var(--color-teal)]/10 text-[var(--color-teal)] flex-shrink-0">
                        <CheckCircle2 size={13} strokeWidth={2.5} />
                      </div>
                      <span className="text-[0.9375rem] font-medium text-gray-700 leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
                
                {featured.closing && (
                  <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-[0.9375rem] font-semibold italic text-[var(--color-navy)]">
                      &ldquo;{featured.closing}&rdquo;
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* ── Remaining service cards ── */}
          {rest.map((s, i) => {
            const Icon = s.icon;
            const isTeal = s.color === "teal";
            return (
              <div
                key={i}
                className="group relative bg-white rounded-[1.25rem] border border-[var(--color-grey-border)] p-8 flex flex-col h-full cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1.5 hover:border-[var(--color-teal)]/30"
              >
                {/* Tag */}
                {s.tag && (
                  <span className="absolute top-5 right-5 text-[0.625rem] font-extrabold uppercase tracking-widest px-2.5 py-1 rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)]">
                    {s.tag}
                  </span>
                )}

                {/* Header: Icon + Title */}
                <div className="mb-6">
                  <div
                    className="w-12 h-12 rounded-[0.85rem] flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110 shadow-sm"
                    style={{
                      background: isTeal
                        ? "linear-gradient(135deg, rgba(15,155,142,0.12) 0%, rgba(25,196,181,0.06) 100%)"
                        : "linear-gradient(135deg, rgba(27,58,107,0.08) 0%, rgba(36,63,115,0.04) 100%)",
                    }}
                  >
                    <Icon
                      size={22}
                      style={{ color: isTeal ? "var(--color-teal)" : "var(--color-navy)" }}
                    />
                  </div>
                  <h3 className="text-[1.25rem] font-bold text-[var(--color-navy)] leading-snug">
                    {s.title}
                  </h3>
                </div>

                {/* Bullet list */}
                <ul className="flex flex-col gap-3 flex-1 mb-8">
                  {s.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div 
                        className="mt-[3px] rounded-full p-[2px] flex-shrink-0"
                        style={{ 
                          background: isTeal ? "rgba(15,155,142,0.1)" : "rgba(27,58,107,0.06)",
                          color: isTeal ? "var(--color-teal)" : "var(--color-navy)"
                        }}
                      >
                        <CheckCircle2 size={12} strokeWidth={2.5} />
                      </div>
                      <span className="text-[0.875rem] font-medium text-gray-600 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <div 
                  className="mt-auto flex items-center gap-1.5 text-[0.875rem] font-bold transition-all duration-300 group-hover:gap-2"
                  style={{ color: isTeal ? "var(--color-teal)" : "var(--color-navy)" }}
                >
                  Learn more
                  <ArrowRight size={14} className="opacity-70 group-hover:opacity-100" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
