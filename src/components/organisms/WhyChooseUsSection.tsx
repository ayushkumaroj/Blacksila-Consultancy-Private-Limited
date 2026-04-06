import { SectionHeader } from "@/components/ui/SectionHeader";
import {
  Users, IndianRupee, UserCheck, ShieldCheck, TrendingUp, Layers,
  Target,
} from "lucide-react";

const VALUES = [
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
];

export function WhyChooseUsSection() {
  return (
    <>
      {/* ── About Us ──────────────────────────────────────────────── */}
      <section
        id="about"
        className="bg-white py-20 lg:py-28"
        style={{ borderBottom: "1px solid var(--color-grey-border)" }}
      >
        <div className="container-ds">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — text content */}
            <div className="flex flex-col gap-6">
              <SectionHeader
                label="About Blacksila Consultancy"
                heading="More than compliance — a true business partner"
                accentLine
              />

              <div className="flex flex-col gap-4 type-body text-gray-600 leading-relaxed">
                <p>
                  Blacksila Consultancy Private Limited is a professional consulting firm
                  specializing in taxation, compliance, and business advisory services.
                </p>
                <p>
                  We go beyond traditional services by offering strategic consulting based on
                  real-world market research, current industry trends, and future growth
                  opportunities.
                </p>
                <p>
                  Whether you are starting a new business or scaling an existing one, we provide
                  complete guidance at every stage — from idea validation to execution and
                  compliance.
                </p>
              </div>

              {/* Mission block */}
              <div
                className="rounded-xl border-l-4 pl-5 py-4 pr-4"
                style={{
                  borderLeftColor: "var(--color-teal)",
                  background: "rgba(15,155,142,0.05)",
                }}
              >
                <p
                  className="text-[0.75rem] font-bold uppercase tracking-widest mb-2"
                  style={{ color: "var(--color-teal)" }}
                >
                  Our Mission
                </p>
                <p className="text-[0.9rem] text-gray-700 leading-relaxed">
                  To simplify complex financial and legal processes while delivering strategic
                  business consulting, in-depth market research, and intelligent decision support
                  — enabling businesses to grow successfully and sustainably with confidence.
                </p>
              </div>
            </div>

            {/* Right — decorative stat cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { value: "End-to-End", label: "Business Solutions", sub: "From idea to execution" },
                { value: "1-on-1", label: "Expert Consulting", sub: "Personalized guidance" },
                { value: "Market", label: "Research Backed", sub: "Real insights, real data" },
                { value: "Legal &", label: "Tax Compliant", sub: "Fully covered, every step" },
              ].map((item, i) => (
                <div
                  key={i}
                  className="rounded-2xl border border-[var(--color-grey-border)] p-5 flex flex-col gap-1.5 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 transition-all duration-250"
                >
                  <span
                    className="text-2xl font-extrabold leading-none"
                    style={{ color: i % 2 === 0 ? "var(--color-teal)" : "var(--color-navy)" }}
                  >
                    {item.value}
                  </span>
                  <p className="text-[0.875rem] font-semibold text-[var(--color-navy)]">{item.label}</p>
                  <p className="text-[0.75rem] text-gray-400">{item.sub}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Choose Us ─────────────────────────────────────────── */}
      <section className="bg-white py-20 lg:py-28">
        <div className="container-ds">
          <SectionHeader
            align="center"
            label="Why Choose Us"
            heading="Why Blacksila Consultancy Private Limited?"
            subtext="We combine professional expertise, real market intelligence, and personalised service to ensure your business succeeds at every stage."
            accentLine
            className="mb-14"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <div
                  key={i}
                  className="group relative bg-white rounded-2xl border border-[var(--color-grey-border)] p-6 flex flex-col gap-4 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-0.5 hover:border-[var(--color-teal)]/20 transition-all duration-250"
                >
                  {/* Accent stripe */}
                  <div
                    className="absolute left-0 top-6 bottom-6 w-1 rounded-r-full"
                    style={{ background: "linear-gradient(to bottom, var(--color-teal), var(--color-teal-light))" }}
                  />

                  <div className="flex items-start gap-4 pl-2">
                    {/* Icon */}
                    <div className="icon-wrap-teal flex-shrink-0 group-hover:scale-110 transition-transform duration-250">
                      <Icon size={20} style={{ color: "var(--color-teal)" }} />
                    </div>

                    <div className="flex flex-col gap-1.5 min-w-0">
                      <h3 className="type-h5">{val.title}</h3>
                      <p className="type-body-s leading-relaxed">{val.desc}</p>
                    </div>
                  </div>

                  {/* Stat pill */}
                  <div className="pl-2">
                    <span
                      className="inline-flex items-center gap-1.5 text-[0.75rem] font-semibold px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(27,58,107,0.06)",
                        color: "var(--color-navy)",
                      }}
                    >
                      ✦ {val.stat}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
