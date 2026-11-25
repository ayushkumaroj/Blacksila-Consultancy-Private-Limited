'use client';

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Lock, ShieldCheck, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { WA_NUMBER, APPS_SCRIPT_URL } from "@/config/contact";
import { CTA_TRUST_CLAIMS } from "@/data/cta";
import { SERVICE_OPTIONS } from "@/data/service-options";

// Indian mobile: 10 digits, starts with 6–9
const INDIAN_MOBILE_RE = /^[6-9]\d{9}$/;

// ── Types ────────────────────────────────────────────────────────────────────
interface FormData {
  name: string;
  mobile: string;
  service: string;
  message: string;
}

type FormErrors = Partial<FormData>;
type SubmitStatus = "idle" | "loading" | "success" | "error";

// ── Helpers ──────────────────────────────────────────────────────────────────
function validate(data: FormData): FormErrors {
  const errors: FormErrors = {};

  if (!data.name.trim() || data.name.trim().length < 2)
    errors.name = "Please enter your full name (at least 2 characters).";

  const digits = data.mobile.replace(/\D/g, "");
  if (!INDIAN_MOBILE_RE.test(digits))
    errors.mobile = "Enter a valid 10-digit Indian mobile number (starts with 6–9).";

  if (!data.service)
    errors.service = "Please select a service.";

  if (!data.message.trim() || data.message.trim().length < 5)
    errors.message = "Please describe your requirement (at least 5 characters).";

  return errors;
}

function buildWaMessage(data: FormData): string {
  return encodeURIComponent(
    `New Consultation Request\n\nName: ${data.name}\nMobile: ${data.mobile}\nService: ${data.service}\nMessage: ${data.message}`
  );
}

// ── Component ────────────────────────────────────────────────────────────────
export function CtaSection() {
  const [form, setForm] = useState<FormData>({
    name: "", mobile: "", service: "", message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<SubmitStatus>("idle");
  const [apiError, setApiError] = useState<string>("");

  function handleChange(
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    // Clear the error for this field as user types
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    setStatus("loading");
    setApiError("");

    try {
      // ── 1. Send to Google Sheets via Apps Script ────────────────
      // mode: 'no-cors' is required because Apps Script redirects to
      // googleusercontent.com. The response is opaque but data goes through.
      await fetch(APPS_SCRIPT_URL, {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, timestamp: new Date().toISOString() }),
      });

      // ── 2. Open WhatsApp with pre-filled structured message ──────
      const waHref = `https://wa.me/${WA_NUMBER}?text=${buildWaMessage(form)}`;
      window.open(waHref, "_blank", "noopener,noreferrer");

      // ── 3. Show success state & reset form ───────────────────────
      setStatus("success");
      setForm({ name: "", mobile: "", service: "", message: "" });

    } catch {
      setStatus("error");
      setApiError("Something went wrong. Please try WhatsApp to reach us directly.");
    }
  }

  // ── Success screen ──────────────────────────────────────────────────────
  if (status === "success") {
    return (
      <section id="cta" className="bg-gradient-navy relative overflow-hidden py-12 lg:py-16">
        <div className="absolute inset-0 hero-dot-grid opacity-40" />
        <div className="container-ds relative z-10 flex items-center justify-center min-h-[320px]">
          <div
            className="rounded-2xl p-10 text-center max-w-md w-full"
            style={{
              background: "rgba(255,255,255,0.96)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >
            <div className="flex justify-center mb-4">
              <CheckCircle size={48} className="text-[var(--color-teal)]" />
            </div>
            <h3 className="type-h3 mb-2">Request Submitted!</h3>
            <p className="type-body-s mb-5">
              Your details have been saved. We&apos;ve also opened WhatsApp so you can
              follow up instantly. Our team will reach you within 2 hours.
            </p>
            <button
              onClick={() => setStatus("idle")}
              className="text-[0.875rem] font-semibold underline underline-offset-2"
              style={{ color: "var(--color-teal)" }}
            >
              Submit another request
            </button>
          </div>
        </div>
      </section>
    );
  }

  // ── Main section ────────────────────────────────────────────────────────
  return (
    <section id="cta" className="bg-gradient-navy relative overflow-hidden py-16 lg:py-24">
      {/* Background texture */}
      <div className="absolute inset-0 hero-dot-grid opacity-40 mix-blend-overlay pointer-events-none" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full opacity-[0.08] pointer-events-none blur-[100px]"
        style={{ background: "radial-gradient(ellipse, var(--color-teal-light), transparent 70%)" }}
      />

      <div className="container-ds relative z-10 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* ── Left — copy ─────────────────────────────────────────── */}
          <div className="flex flex-col gap-8 lg:pr-8">
            <div className="flex flex-col gap-6">
              <span className="type-label flex items-center gap-3">
                <span className="w-6 h-[2px] bg-[var(--color-teal-light)] rounded-full" />
                <span className="text-[var(--color-teal-light)] tracking-[0.15em] font-extrabold uppercase text-[0.75rem]">Get Started Today</span>
              </span>

              <h2 className="type-h2 text-white font-extrabold tracking-tight leading-[1.15]" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
                Start your business journey with a free consultation
              </h2>

              <p className="text-[1.125rem] leading-relaxed max-w-[42ch]" style={{ color: "rgba(255,255,255,0.7)" }}>
                Tell us what you need and an expert consultant will immediately review your request and call you back within 2 hours. Zero commitment, completely free.
              </p>
            </div>

            <div className="h-px w-full max-w-sm" style={{ background: "linear-gradient(to right, rgba(255,255,255,0.1), transparent)" }} />

            <ul className="flex flex-col gap-4">
              {CTA_TRUST_CLAIMS.slice(0, 3).map((claim) => (
                <li key={claim.text} className="flex items-start gap-3.5">
                  <div 
                    className="mt-[4px] rounded-full p-[3px] flex-shrink-0"
                    style={{ background: "rgba(25,196,181,0.15)", color: "var(--color-teal-light)" }}
                  >
                    <CheckCircle2 size={15} strokeWidth={2.5} />
                  </div>
                  <span className="text-[1.0625rem] font-medium leading-relaxed" style={{ color: "rgba(255,255,255,0.85)" }}>
                    {claim.text}
                  </span>
                </li>
              ))}
            </ul>

            {/* Reassurance pill */}
            <div className="mt-2">
              <div
                className="inline-flex items-center gap-3 px-5 py-3 rounded-2xl border"
                style={{ background: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.15)", backdropFilter: "blur(8px)" }}
              >
                <ShieldCheck size={18} className="text-[var(--color-teal-light)] flex-shrink-0" />
                <span className="text-[0.875rem] font-bold tracking-wide" style={{ color: "rgba(255,255,255,0.85)" }}>
                  {CTA_TRUST_CLAIMS[3].text}
                </span>
              </div>
            </div>
          </div>

          {/* ── Right — form card ────────────────────────────────────── */}
          <div className="relative">
            {/* Soft glow behind form */}
            <div className="absolute -inset-4 rounded-[2rem] blur-2xl opacity-50 bg-[var(--color-teal-light)] -z-10" />

            <div
              className="rounded-[1.25rem] p-6 lg:p-8 relative overflow-hidden"
              style={{
                background: "rgba(255,255,255,1)",
                boxShadow: "0 24px 80px rgba(0,0,0,0.4), 0 0 0 1px rgba(255,255,255,0.1)",
              }}
            >
              <h3 className="text-[1.5rem] font-extrabold text-[var(--color-navy)] mb-5 tracking-tight">Request a free callback</h3>

              <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

                {/* Grid for compacting Name and Mobile into one row on desktop */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.8125rem] font-bold text-[var(--color-navy)] ml-1" htmlFor="cta-name">
                      Full Name <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="cta-name"
                      name="name"
                      type="text"
                      placeholder="Rahul Sharma"
                      className={`input-premium h-11 bg-gray-50 hover:bg-white focus:bg-white !shadow-sm focus:!shadow-md transition-all ${errors.name ? "!border-red-400 !shadow-[0_0_0_3px_rgba(239,68,68,0.12)]" : ""}`}
                      autoComplete="name"
                      value={form.name}
                      onChange={handleChange}
                      disabled={status === "loading"}
                    />
                    {errors.name && (
                      <p className="flex items-center gap-1.5 text-[0.75rem] text-red-500 font-medium mt-0.5 ml-1">
                        <AlertCircle size={12} /> {errors.name}
                      </p>
                    )}
                  </div>

                  {/* Mobile Number */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-[0.8125rem] font-bold text-[var(--color-navy)] ml-1" htmlFor="cta-phone">
                      Mobile Number <span className="text-red-500">*</span>
                    </label>
                    <input
                      id="cta-phone"
                      name="mobile"
                      type="tel"
                      placeholder="+91 XXXXX XXXXX"
                      className={`input-premium h-11 bg-gray-50 hover:bg-white focus:bg-white !shadow-sm focus:!shadow-md transition-all ${errors.mobile ? "!border-red-400 !shadow-[0_0_0_3px_rgba(239,68,68,0.12)]" : ""}`}
                      autoComplete="tel"
                      value={form.mobile}
                      onChange={handleChange}
                      disabled={status === "loading"}
                    />
                    {errors.mobile && (
                      <p className="flex items-center gap-1.5 text-[0.75rem] text-red-500 font-medium mt-0.5 ml-1">
                        <AlertCircle size={12} /> {errors.mobile}
                      </p>
                    )}
                  </div>
                </div>

                {/* Service Required */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.8125rem] font-bold text-[var(--color-navy)] ml-1" htmlFor="cta-service">
                    Service Required <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="cta-service"
                    name="service"
                    className={`input-premium h-11 bg-gray-50 hover:bg-white focus:bg-white !shadow-sm focus:!shadow-md transition-all ${errors.service ? "!border-red-400 !shadow-[0_0_0_3px_rgba(239,68,68,0.12)]" : ""}`}
                    value={form.service}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  >
                    <option value="">Select a service focus</option>
                    {SERVICE_OPTIONS.map(({ value, label }) => (
                      <option key={value} value={value}>{label}</option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="flex items-center gap-1.5 text-[0.75rem] text-red-500 font-medium mt-0.5 ml-1">
                      <AlertCircle size={12} /> {errors.service}
                    </p>
                  )}
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[0.8125rem] font-bold text-[var(--color-navy)] ml-1" htmlFor="cta-message">
                    Message <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="cta-message"
                    name="message"
                    rows={2}
                    placeholder="Tell us a little bit about what you need..."
                    className={`input-premium bg-gray-50 hover:bg-white focus:bg-white !shadow-sm focus:!shadow-md transition-all resize-none ${errors.message ? "!border-red-400 !shadow-[0_0_0_3px_rgba(239,68,68,0.12)]" : ""}`}
                    style={{ lineHeight: "1.5" }}
                    value={form.message}
                    onChange={handleChange}
                    disabled={status === "loading"}
                  />
                  {errors.message && (
                    <p className="flex items-center gap-1.5 text-[0.75rem] text-red-500 font-medium mt-0.5 ml-1">
                      <AlertCircle size={12} /> {errors.message}
                    </p>
                  )}
                </div>

                {/* API-level error */}
                {status === "error" && apiError && (
                  <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-4 py-3 mt-1">
                    <AlertCircle size={15} className="text-red-500 flex-shrink-0 mt-[2px]" />
                    <p className="text-[0.8125rem] font-medium text-red-700">{apiError}</p>
                  </div>
                )}

                {/* Submit button */}
                <Button
                  variant="primary"
                  className="w-full h-12 text-[1rem] font-extrabold mt-2 shadow-[0_8px_20px_rgba(15,155,142,0.3)] hover:-translate-y-0.5 transition-all"
                  type="submit"
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <span className="flex items-center justify-center gap-3">
                      <Loader2 size={18} className="animate-spin" />
                      Submitting Request...
                    </span>
                  ) : (
                    "Request Free Consultation"
                  )}
                </Button>

                <div className="flex items-center justify-center gap-2 mt-1">
                  <Lock size={11} className="text-gray-400" />
                  <p className="text-[0.75rem] text-gray-500 font-medium tracking-wide">
                    {CTA_TRUST_CLAIMS[4].text}
                  </p>
                </div>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
