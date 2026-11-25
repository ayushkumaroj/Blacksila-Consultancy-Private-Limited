'use client';

import { Button } from "@/components/ui/Button";
import {
  ArrowRight, Shield, Clock,
  FileText, Calculator, Building2, FileCode,
  CheckCircle2,
} from "lucide-react";

const ALL_SERVICES = [
  "Business Strategy Consulting",
  "GST Registration & Filing",
  "Company Registration",
  "Income Tax Filing",
  "Market Research & Analysis",
  "ROC Compliance",
  "Trademark Registration",
  "PF & ESIC Registration",
  "Labour Law Compliance",
  "Digital Marketing Strategy",
  "FSSAI License",
  "Import Export Code (IEC)",
];

// ── Service cards inside the right panel ─────────────────────────────
const SERVICES = [
  { icon: Calculator,  label: "GST Return",  status: "Filed ✓",     state: "done"    },
  { icon: FileText,    label: "ITR Filing",  status: "In Progress", state: "active"  },
  { icon: FileCode,    label: "ROC Annual",  status: "Filed ✓",     state: "done"    },
  { icon: Building2,   label: "Payroll",     status: "Processed",   state: "done"    },
];

// ── Right visual: Compliance Health Card ─────────────────────────────
function ComplianceCard() {
  return (
    <div className="relative w-full select-none">

      {/* Ambient glow behind card */}
      <div
        className="absolute -inset-8 rounded-full blur-3xl pointer-events-none"
        style={{ background: "radial-gradient(ellipse at 55% 45%, rgba(15,155,142,0.25), transparent 65%)" }}
      />

      {/* Decorative ring */}
      <div className="absolute -inset-5 rounded-[2rem] border border-white/[0.04] pointer-events-none hidden xl:block" />

      {/* ── Main card ── */}
      <div
        className="relative rounded-2xl overflow-hidden"
        style={{
          background: "linear-gradient(160deg, rgba(255,255,255,0.09) 0%, rgba(10,22,46,0.7) 100%)",
          backdropFilter: "blur(24px)",
          border: "1px solid rgba(255,255,255,0.13)",
          boxShadow: "0 32px 80px rgba(0,0,0,0.45), 0 0 0 1px rgba(255,255,255,0.05), inset 0 1px 0 rgba(255,255,255,0.12), 0 0 60px rgba(15,155,142,0.1)",
        }}
      >

        {/* ── Status header ── */}
        <div
          className="px-5 py-4 flex items-center gap-4"
          style={{
            background: "linear-gradient(135deg, rgba(15,155,142,0.22) 0%, rgba(15,155,142,0.06) 100%)",
            borderBottom: "1px solid rgba(255,255,255,0.07)",
          }}
        >
          {/* Shield icon */}
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center flex-shrink-0"
            style={{
              background: "linear-gradient(135deg, #0F9B8E 0%, #0A7A6F 100%)",
              boxShadow: "0 8px 24px rgba(15,155,142,0.45)",
            }}
          >
            <Shield size={28} className="text-white" />
          </div>

          {/* Status text */}
          <div className="flex-1 min-w-0">
            <p className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.45)" }}>
              Business Status
            </p>
            <p className="text-white text-[1.1rem] font-bold leading-tight mt-0.5">Fully Compliant</p>
            <div className="flex items-center gap-1.5 mt-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-emerald-300 text-[11px] font-medium">All filings up to date</span>
            </div>
          </div>

          {/* Score badge */}
          <div className="flex-shrink-0 text-right">
            <p className="text-emerald-300 text-[2rem] font-extrabold leading-none">A+</p>
            <p className="text-[9px] font-semibold uppercase tracking-wider mt-0.5" style={{ color: "rgba(255,255,255,0.35)" }}>
              Health Score
            </p>
          </div>
        </div>

        {/* ── Compliance progress bar ── */}
        <div className="px-5 py-3" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          <div className="flex items-center justify-between mb-2">
            <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: "rgba(255,255,255,0.35)" }}>
              Compliance Score
            </span>
            <span className="text-emerald-300 text-[10px] font-bold">Excellent</span>
          </div>
          <div className="h-2 rounded-full w-full" style={{ background: "rgba(255,255,255,0.08)" }}>
            <div
              className="h-full rounded-full"
              style={{ width: "92%", background: "linear-gradient(to right, #0F9B8E, #19C4B5)" }}
            />
          </div>
        </div>

        {/* ── Service 2 × 2 grid ── */}
        <div className="grid grid-cols-2" style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
          {SERVICES.map((svc, i) => {
            const Icon = svc.icon;
            const isDone = svc.state === "done";

            return (
              <div
                key={svc.label}
                className="px-4 py-3.5 flex items-start gap-3"
                style={{
                  borderRight:  i % 2 === 0 ? "1px solid rgba(255,255,255,0.06)" : undefined,
                  borderBottom: i < 2       ? "1px solid rgba(255,255,255,0.06)" : undefined,
                }}
              >
                {/* Icon */}
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5"
                  style={{
                    background: isDone
                      ? "rgba(15,155,142,0.15)"
                      : "rgba(245,158,11,0.12)",
                  }}
                >
                  <Icon
                    size={15}
                    style={{ color: isDone ? "var(--color-teal-light)" : "#F59E0B" }}
                  />
                </div>

                {/* Text */}
                <div className="min-w-0">
                  <p className="text-[10px] font-semibold uppercase tracking-wider mb-1" style={{ color: "rgba(255,255,255,0.38)" }}>
                    {svc.label}
                  </p>
                  <span
                    className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full"
                    style={{
                      background: isDone ? "rgba(52,211,153,0.12)" : "rgba(245,158,11,0.12)",
                      color:      isDone ? "#6EE7B7"                : "#FCD34D",
                      border:     `1px solid ${isDone ? "rgba(52,211,153,0.2)" : "rgba(245,158,11,0.2)"}`,
                    }}
                  >
                    {isDone ? "✓" : "⟳"} {svc.status}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* ── Next action footer ── */}
        <div
          className="px-4 py-3 flex items-center gap-3"
          style={{ background: "rgba(0,0,0,0.12)" }}
        >
          <div
            className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "rgba(15,155,142,0.2)" }}
          >
            <Clock size={13} className="text-teal-light" />
          </div>
          <div className="min-w-0 flex-1">
            <p className="text-[9.5px] font-semibold uppercase tracking-wider" style={{ color: "rgba(255,255,255,0.35)" }}>
              Next Action
            </p>
            <p className="text-[11.5px] font-semibold truncate" style={{ color: "rgba(255,255,255,0.85)" }}>
              ITR Filing · Being handled by your expert
            </p>
          </div>
          <span className="text-emerald-300 text-[10px] font-bold whitespace-nowrap">On Track</span>
        </div>
      </div>

      {/* ── Floating badge — top left ── */}
      <div className="absolute -top-5 left-6 animate-float z-10">
        <div
          className="bg-white rounded-2xl pl-3 pr-4 py-2.5 flex items-center gap-2.5"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.04)", border: "1px solid #f3f4f6" }}
        >
          <div className="w-8 h-8 rounded-full bg-emerald-50 flex items-center justify-center flex-shrink-0">
            <CheckCircle2 size={16} className="text-emerald-500" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-gray-800 leading-none">Company Registered</p>
            <p className="text-[10px] text-gray-400 mt-0.5 font-medium">Fast &amp; hassle-free</p>
          </div>
        </div>
      </div>

      {/* ── Floating badge — bottom right ── */}
      <div className="absolute -bottom-5 right-6 animate-float-delayed z-10">
        <div
          className="bg-white rounded-2xl pl-3 pr-4 py-2.5 flex items-center gap-2.5"
          style={{ boxShadow: "0 8px 32px rgba(0,0,0,0.14), 0 0 0 1px rgba(0,0,0,0.04)", border: "1px solid #f3f4f6" }}
        >
          <div
            className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ background: "linear-gradient(135deg, #0F9B8E, #1B3A6B)" }}
          >
            <Shield size={13} className="text-white" />
          </div>
          <div>
            <p className="text-[11px] font-bold text-gray-800 leading-none">Trusted Compliance Partner</p>
            <p className="text-[10px] text-gray-400 mt-0.5 font-medium">For businesses across India</p>
          </div>
        </div>
      </div>
    </div>
  );
}

// ── Hero section ───────────────────────────────────────────────────────
export function HeroSection() {
  return (
    <section
      className="relative flex flex-col"
      style={{
        background: "linear-gradient(145deg, #0B1628 0%, #0F1F3D 45%, #1B3A6B 100%)",
        minHeight: "100svh"
      }}
    >
      {/* Background layers — contained in overflow-hidden wrapper */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 hero-dot-grid opacity-70" />
        <div
          className="absolute inset-x-0 top-0 h-3/4"
          style={{ background: "radial-gradient(ellipse at 65% -5%, rgba(15,155,142,0.13) 0%, transparent 60%)" }}
        />
        <div
          className="absolute -top-20 -right-20 w-[560px] h-[560px] rounded-full blur-[130px]"
          style={{ background: "rgba(15,155,142,0.18)" }}
        />
        <div
          className="absolute bottom-0 -left-20 w-[420px] h-[420px] rounded-full blur-[110px]"
          style={{ background: "rgba(30,68,180,0.14)" }}
        />
        <div className="absolute right-[3%] top-[8%] w-[520px] h-[520px] rounded-full border border-white/[0.035] hidden lg:block" />
        <div className="absolute right-[7%] top-[14%] w-[360px] h-[360px] rounded-full border border-white/[0.025] hidden lg:block" />
      </div>

      {/* ── Main grid ── */}
      <div className="container-ds relative z-10 flex-1 flex flex-col justify-center pt-[4.25rem]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8 items-center py-2 sm:py-4 lg:py-6">

          {/* ── Left copy ── */}
          <div className="flex flex-col gap-3 lg:gap-4">

            {/* Eyebrow badge */}
            <div className="flex">
              <span className="badge-trust">
                <span className="relative flex h-2 w-2 flex-shrink-0">
                  <span
                    className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                    style={{ background: "var(--color-teal-light)" }}
                  />
                  <span className="relative inline-flex rounded-full h-2 w-2" style={{ background: "var(--color-teal-light)" }} />
                </span>
                Business Consulting &middot; Tax &middot; Compliance &middot; Business Growth
              </span>
            </div>

            {/* Headline */}
            <div className="flex flex-col gap-2.5 lg:gap-3">
              <h1
                className="text-white font-extrabold tracking-tight"
                style={{ fontSize: "clamp(1.625rem, 3vw, 2.5rem)", lineHeight: 1.15 }}
              >
                <span className="block">Your Trusted Partner</span>
                <span className="block">
                  for{" "}
                  <span className="relative inline-block">
                    <span className="text-gradient-teal">Business Consulting,</span>
                    <span
                      className="absolute -bottom-1 left-0 w-3/4 h-[3px] rounded-full"
                      style={{ background: "linear-gradient(to right, var(--color-teal), transparent)", opacity: 0.55 }}
                    />
                  </span>
                </span>
                <span className="block">Tax, Compliance &amp; Growth</span>
              </h1>

              <p
                className="text-[0.875rem] sm:text-[0.9375rem] leading-[1.6] max-w-[46ch]"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                We provide complete solutions to start, manage, and grow your business — from
                registration and taxation to expert consulting backed by market research.
              </p>
            </div>

            {/* Value proposition callout */}
            <div
              className="hidden sm:flex rounded-xl border p-3 flex-col gap-1"
              style={{
                background: "rgba(15,155,142,0.1)",
                borderColor: "rgba(15,155,142,0.3)",
              }}
            >
              <p className="text-[0.8125rem] font-semibold text-white leading-snug">
                Not sure your business idea will work?
              </p>
              <p className="text-[0.8125rem] leading-relaxed" style={{ color: "rgba(255,255,255,0.7)" }}>
                We provide one-to-one expert consulting based on real market insights, demand analysis,
                and future growth potential — so you start with confidence.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-2.5 mt-1 lg:mt-2">
              <Button
                variant="primary"
                className="h-10 sm:h-11 px-6 text-[0.875rem] sm:text-[0.9375rem] font-semibold w-full sm:w-auto justify-center"
                style={{ boxShadow: "0 8px 32px rgba(15,155,142,0.45)" }}
                onClick={() => document.getElementById("cta")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              >
                Get Free Consultation
                <ArrowRight size={16} className="ml-2" />
              </Button>
              <Button
                variant="ghost"
                className="h-10 sm:h-11 px-5 text-[0.875rem] sm:text-[0.9375rem] font-medium border border-white/20 hover:border-white/40 w-full sm:w-auto justify-center"
                onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth", block: "start" })}
              >
                Explore Services
              </Button>
            </div>

          </div>

          {/* ── Right visual ── */}
          <div className="hidden lg:flex items-center justify-center lg:pl-3 xl:pl-4">
            <ComplianceCard />
          </div>
        </div>
      </div>

      {/* ── Bottom service bar (Marquee) ── */}
      <div
        className="border-t relative z-10 mt-auto w-full flex-shrink-0 group"
        style={{ background: "rgba(0,0,0,0.18)", borderColor: "rgba(255,255,255,0.07)" }}
      >
        <div className="container-ds overflow-hidden px-0">
          <div className="py-3.5 animate-marquee group-hover:[animation-play-state:paused]">
          {[...ALL_SERVICES, ...ALL_SERVICES].map((service, i) => (
            <div key={`${service}-${i}`} className="flex items-center gap-6 px-6 md:gap-10 md:px-10 shrink-0">
              <span
                className="flex items-center gap-2.5 text-[0.8125rem] font-medium whitespace-nowrap cursor-default transition-colors duration-300 hover:text-white"
                style={{ color: "rgba(255,255,255,0.6)" }}
              >
                <CheckCircle2 size={14} className="text-teal-light opacity-80" />
                {service}
              </span>
              <div className="h-3.5 w-px bg-white/10 shrink-0" />
            </div>
          ))}
        </div>
        </div>
      </div>

      {/* ── Seamless SVG Divider ── */}
      <div className="absolute left-0 right-0 bottom-0 pointer-events-none translate-y-[99%] z-10 w-full overflow-hidden leading-none">
        <svg 
          viewBox="0 0 1440 60" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[40px] md:h-[50px] lg:h-[60px]"
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C400,60 1040,60 1440,0 L1440,60 L0,60 Z" 
            fill="white" 
          />
        </svg>
      </div>    
    </section>
  );
}
