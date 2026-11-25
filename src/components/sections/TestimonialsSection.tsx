import { SectionHeader } from "@/components/ui/SectionHeader";
import { ExternalLink, CheckCircle2 } from "lucide-react";
import { TESTIMONIALS } from "@/data/testimonials";



export function TestimonialsSection() {
  return (
    <section className="bg-gradient-section py-20 lg:py-28">
      <div className="container-ds">
        {/* Header row */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeader
            label="Client Testimonials"
            heading="What our clients say"
            subtext="Real feedback from businesses we have helped start, manage, and grow."
            accentLine
          />
          {/* Trust badge */}
          <div className="flex-shrink-0 self-start md:self-auto flex items-center gap-3 bg-white rounded-xl border border-[var(--color-grey-border)] px-4 py-3 shadow-sm">
            <div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center">
              <CheckCircle2 size={20} className="text-emerald-500" />
            </div>
            <div className="flex flex-col">
              <span className="text-[1rem] font-bold text-[var(--color-navy)]">Verified Clients</span>
              <p className="text-[0.75rem] text-gray-500 font-medium">Authentic feedback from real businesses</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {TESTIMONIALS.map((t, i) => (
            <div
              key={i}
              className={`relative bg-white rounded-2xl border p-5 sm:p-7 flex flex-col gap-5 transition-all duration-250 hover:-translate-y-1 hover:shadow-[var(--shadow-card-hover)] ${t.featured
                  ? "border-[var(--color-teal)]/30 shadow-[var(--shadow-card)]"
                  : "border-[var(--color-grey-border)]"
                }`}
            >
              {/* Featured ribbon */}
              {t.featured && (
                <div
                  className="absolute top-4 right-4 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full text-white"
                  style={{ background: "var(--color-teal)" }}
                >
                  Featured
                </div>
              )}

              {/* Quote mark */}
              <div
                className="text-5xl font-serif leading-none select-none"
                style={{ color: "var(--color-teal)", opacity: 0.2, lineHeight: "0.8" }}
                aria-hidden
              >
                &#8220;
              </div>

              {/* Text */}
              <p className="type-body-s leading-relaxed flex-1 text-gray-600 -mt-2">
                &ldquo;{t.text}&rdquo;
              </p>

              {/* Service tag */}
              <span
                className="inline-flex items-center self-start text-[0.6875rem] font-semibold px-2.5 py-1 rounded-full uppercase tracking-wide"
                style={{
                  background: "rgba(15,155,142,0.08)",
                  color: "var(--color-teal-dark)",
                }}
              >
                {t.service}
              </span>

              {/* Author */}
              <div className="flex items-center gap-3 pt-1 border-t border-gray-100">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center text-white text-[0.75rem] font-bold flex-shrink-0 bg-gradient-to-br ${t.color}`}
                >
                  {t.initials}
                </div>
                <div>
                  <div className="flex items-center gap-1.5">
                    <p className="text-[0.875rem] font-semibold text-[var(--color-navy)]">{t.name}</p>
                    <CheckCircle2 size={13} className="text-[var(--color-teal-light)]" />
                  </div>
                  <p className="text-[0.75rem] text-gray-400">{t.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[0.875rem] font-semibold text-[var(--color-teal)] hover:underline"
          >
            Read more client success stories
            <ExternalLink size={13} />
          </a>
        </div>
      </div>
    </section>
  );
}
