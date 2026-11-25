import { SectionHeader } from "@/components/ui/SectionHeader";
import { Calculator, Building2, Users, FileText, TrendingUp, CheckCircle2 } from "lucide-react";

const REGISTRATION_CATEGORIES = [
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
];

export function HowItWorksSection() {
  return (
    <section id="registrations" className="bg-gradient-section py-20 lg:py-28">
      <div className="container-ds">
        <SectionHeader
          align="center"
          label="Business Registrations & Licenses"
          heading="Complete assistance for all required registrations"
          subtext="We provide end-to-end support across every registration and license your business needs to operate legally and efficiently."
          accentLine
          className="mb-14 lg:mb-20"
        />

        {/* 5-card grid: 1 col on mobile, 2 on md, 3 on lg */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {REGISTRATION_CATEGORIES.map((cat, i) => {
            const Icon = cat.icon;
            const isTeal = cat.color === "teal";
            
            return (
              <div
                key={i}
                className="group relative bg-white rounded-[1.25rem] border border-[var(--color-grey-border)] p-8 flex flex-col h-full cursor-pointer transition-all duration-300 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1.5 hover:border-[var(--color-teal)]/30"
              >
                {/* Subtle Tag: Top Right */}
                <span className="absolute top-6 right-6 text-[0.6875rem] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[var(--color-teal)]/10 text-[var(--color-teal)] shadow-sm">
                  Category {cat.label}
                </span>

                {/* Header: Icon + Title */}
                <div className="mb-6 mt-1">
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
                  <h3 className="text-[1.25rem] pr-12 font-bold text-[var(--color-navy)] leading-snug">
                    {cat.title}
                  </h3>
                </div>

                {/* Items */}
                <ul className="flex flex-col gap-3 flex-1">
                  {cat.items.map((item) => (
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
                      <span className="text-[0.875rem] font-medium text-gray-700 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
