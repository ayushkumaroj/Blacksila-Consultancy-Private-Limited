import { Users, Award, FileCheck, Timer } from "lucide-react";

const STATS = [
  { icon: Users,     value: "Growing",    label: "Client Base",        sub: "Businesses & individuals" },
  { icon: Award,     value: "Expert",     label: "Advisory Team",      sub: "Consulting, legal & tax experts" },
  { icon: FileCheck, value: "Complete",   label: "Business Solutions", sub: "From idea to compliance" },
  { icon: Timer,     value: "On Time",    label: "Every Deadline",     sub: "No penalties, ever" },
];

export function StatsSection() {
  return (
    <section className="bg-gradient-navy relative overflow-hidden py-16 lg:py-20">
      {/* Subtle dot pattern */}
      <div className="absolute inset-0 hero-dot-grid opacity-50" />

      {/* Decorative circle */}
      <div
        className="absolute -right-24 top-1/2 -translate-y-1/2 w-80 h-80 rounded-full opacity-[0.06]"
        style={{ background: "radial-gradient(circle, var(--color-teal-light), transparent 70%)" }}
      />

      <div className="container-ds relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-0 divide-y sm:divide-y-0 divide-white/10">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            const isLast = i === STATS.length - 1;
            return (
              <div
                key={i}
                className="flex flex-col items-center text-center py-8 px-3 sm:px-4 relative"
              >
                {/* Vertical divider between items */}
                {!isLast && (
                  <div className="hidden md:block absolute right-0 top-8 bottom-8 w-px bg-white/10" />
                )}

                {/* Icon */}
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: "rgba(15,155,142,0.2)" }}
                >
                  <Icon size={20} className="text-[var(--color-teal-light)]" />
                </div>

                {/* Number */}
                <span
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold leading-none mb-1 tracking-tight"
                  style={{
                    background: "linear-gradient(135deg, #fff 0%, rgba(255,255,255,0.85) 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {stat.value}
                </span>

                {/* Label */}
                <p className="text-[0.9375rem] font-semibold text-white/90 mb-0.5">{stat.label}</p>
                <p className="text-[0.75rem] text-white/45 font-medium">{stat.sub}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
