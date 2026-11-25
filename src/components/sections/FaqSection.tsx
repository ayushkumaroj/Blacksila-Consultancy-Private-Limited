import { SectionHeader } from "@/components/ui/SectionHeader";
import { FAQS, LICENSE_GUIDE } from "@/data/faqs";

export function FaqSection() {
  return (
    <section className="bg-gradient-section py-20 lg:py-28">
      <div className="container-ds">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left sticky label */}
          <div className="lg:col-span-4 lg:sticky lg:top-28 flex flex-col gap-8">
            <SectionHeader
              label="License Guide & FAQ"
              heading="Frequently asked questions"
              subtext="Browse our most common questions below. Still need help? Our team is always a message away."
              accentLine
            />

            {/* License Requirement Guide card */}
            <div
              className="rounded-2xl border p-5 flex flex-col gap-4"
              style={{
                background: "rgba(15,155,142,0.05)",
                borderColor: "rgba(15,155,142,0.2)",
              }}
            >
              <p className="text-[0.8125rem] font-bold uppercase tracking-widest" style={{ color: "var(--color-teal)" }}>
                License Requirement Guide
              </p>
              <div className="flex flex-col gap-3">
                {LICENSE_GUIDE.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div key={item.type} className="flex items-center gap-3">
                      <div
                        className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0"
                        style={{ background: "rgba(15,155,142,0.12)" }}
                      >
                        <Icon size={15} style={{ color: "var(--color-teal)" }} />
                      </div>
                      <div>
                        <p className="text-[0.8125rem] font-semibold text-[var(--color-navy)]">{item.type}</p>
                        <p className="text-[0.75rem]" style={{ color: "var(--color-teal-dark)" }}>{item.range}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <p className="text-[0.75rem] text-gray-500 leading-relaxed border-t border-gray-100 pt-3">
                Additional licenses may be required based on employees, industry type, and specific business activities.
              </p>
            </div>
          </div>

          {/* Right FAQ list */}
          <div className="lg:col-span-8 flex flex-col gap-3">
            {FAQS.map((faq, idx) => (
              <details
                key={idx}
                className="group bg-white rounded-2xl border border-[var(--color-grey-border)] overflow-hidden [&_summary::-webkit-details-marker]:hidden hover:border-[var(--color-teal)]/30 transition-colors"
              >
                <summary className="flex items-center justify-between gap-4 cursor-pointer px-6 py-5 list-none">
                  <span className="text-[0.9375rem] font-semibold text-[var(--color-navy)] leading-snug pr-2">
                    {faq.q}
                  </span>
                  {/* Plus / Minus icon */}
                  <span
                    className="flex-shrink-0 w-7 h-7 rounded-full border-2 border-[var(--color-grey-border)] flex items-center justify-center transition-all duration-200 group-open:bg-[var(--color-teal)] group-open:border-[var(--color-teal)]"
                    aria-hidden
                  >
                    <svg
                      className="w-3.5 h-3.5 text-gray-500 group-open:text-white transition-transform duration-200 group-open:rotate-45"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m-8-8h16" />
                    </svg>
                  </span>
                </summary>

                <div className="px-6 pb-5">
                  <div className="h-px bg-gray-100 mb-4" />
                  <p className="text-[0.9rem] text-gray-600 leading-relaxed">{faq.a}</p>
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
