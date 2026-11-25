import { SectionHeader } from "@/components/ui/SectionHeader";
import { Button } from "@/components/ui/Button";
import { ArrowRight, Clock } from "lucide-react";

const ARTICLES = [
  {
    title: "Everything you need to know about the new GST rates for 2026",
    date: "April 2, 2026",
    category: "GST",
    readTime: "5 min read",
    excerpt: "A comprehensive breakdown of the latest GST rate revisions and how they impact your business filings this year.",
    gradientFrom: "#0F9B8E",
    gradientTo: "#132B55",
    authorInitials: "MJ",
    authorName: "Meera Joshi",
  },
  {
    title: "Top 5 legal compliances for startups in their first year",
    date: "March 28, 2026",
    category: "Compliance",
    readTime: "7 min read",
    excerpt: "From company incorporation to first GST filing — the compliance checklist every new founder needs in Year 1.",
    gradientFrom: "#1B3A6B",
    gradientTo: "#243F73",
    authorInitials: "RK",
    authorName: "Rajiv Kumar",
  },
  {
    title: "How to save income tax under the new regime vs old regime",
    date: "March 15, 2026",
    category: "Income Tax",
    readTime: "6 min read",
    excerpt: "A side-by-side comparison with real-world examples to help you choose the right tax regime for FY 2025-26.",
    gradientFrom: "#0A7A6F",
    gradientTo: "#1B3A6B",
    authorInitials: "SP",
    authorName: "Sneha Patel",
  },
];

export function BlogSection() {
  return (
    <section id="blog" className="bg-white py-20 lg:py-28">
      <div className="container-ds">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 lg:mb-14">
          <SectionHeader
            label="Insights"
            heading="From our knowledge centre"
            subtext="Expert articles on tax, compliance, and business growth."
            accentLine
          />
          <Button variant="secondary" className="self-start flex-shrink-0 h-10 px-5 text-[0.875rem]">
            View all articles
            <ArrowRight size={15} className="ml-2" />
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((a, i) => (
            <article
              key={i}
              className="group bg-white rounded-2xl border border-[var(--color-grey-border)] overflow-hidden flex flex-col cursor-pointer transition-all duration-250 hover:shadow-[var(--shadow-card-hover)] hover:-translate-y-1"
            >
              {/* Gradient image placeholder */}
              <div
                className="h-44 relative overflow-hidden flex-shrink-0"
                style={{
                  background: `linear-gradient(135deg, ${a.gradientFrom} 0%, ${a.gradientTo} 100%)`,
                }}
              >
                {/* Pattern overlay */}
                <div className="absolute inset-0 hero-dot-grid opacity-40" />

                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className="badge-category bg-white/20 text-white border-0 backdrop-blur-sm">
                    {a.category}
                  </span>
                </div>

                {/* Read time */}
                <div className="absolute bottom-4 right-4 flex items-center gap-1.5 text-white/70 text-[11px] font-medium">
                  <Clock size={11} />
                  {a.readTime}
                </div>
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-3 flex-1">
                <p className="text-[0.75rem] text-gray-400 font-medium">{a.date}</p>
                <h3 className="type-h5 group-hover:text-[var(--color-teal)] transition-colors leading-snug line-clamp-2">
                  {a.title}
                </h3>
                <p className="type-body-s leading-relaxed line-clamp-2 flex-1">{a.excerpt}</p>

                {/* Author + CTA row */}
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 mt-1">
                  <div className="flex items-center gap-2">
                    <div
                      className="w-7 h-7 rounded-full flex items-center justify-center text-white text-[0.625rem] font-bold flex-shrink-0"
                      style={{
                        background: `linear-gradient(135deg, ${a.gradientFrom}, ${a.gradientTo})`,
                      }}
                    >
                      {a.authorInitials}
                    </div>
                    <span className="text-[0.75rem] text-gray-500 font-medium">{a.authorName}</span>
                  </div>
                  <span className="text-[0.8125rem] font-semibold text-[var(--color-teal)] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Read
                    <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
