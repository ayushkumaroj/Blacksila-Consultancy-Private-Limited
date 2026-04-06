'use client';

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { CheckCircle2, Lock, ShieldCheck, CheckCircle, AlertCircle, Loader2 } from "lucide-react";
import { WA_NUMBER, APPS_SCRIPT_URL } from "@/config/contact";

// ── Constants ────────────────────────────────────────────────────────────────
const TRUST_POINTS = [
  "Free initial consultation — no credit card",
  "Response within 2 business hours",
  "Dedicated expert assigned to your account",
];

const SERVICES = [
  "Business Consulting & Advisory",
  "Company Registration",
  "GST Registration & Filing",
  "Income Tax Filing",
  "Compliance & Legal Services",
  "Accounting & Bookkeeping",
  "Labour & HR Consulting",
  "Digital & Technology Consulting",
  "Business Registration / License",
  "Other",
];

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
    <section id="cta" className="bg-gradient-navy relative overflow-hidden py-12 lg:py-16">
      {/* Background texture */}
      <div className="absolute inset-0 hero-dot-grid opacity-40" />
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-[0.07]"
        style={{ background: "radial-gradient(ellipse, var(--color-teal-light), transparent 70%)" }}
      />

      <div className="container-ds relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* ── Left — copy ─────────────────────────────────────────── */}
          <div className="flex flex-col gap-6">
            <span className="type-label text-[var(--color-teal-light)]">
              <span className="inline-flex items-center gap-2">
                <span className="w-4 h-px bg-[var(--color-teal-light)]" />
                Get Started Today
                <span className="w-4 h-px bg-[var(--color-teal-light)]" />
              </span>
            </span>

            <h2 className="type-h2 text-white">
              Start your business journey — free consultation
            </h2>

            <p className="type-body-l" style={{ color: "rgba(255,255,255,0.7)" }}>
              Tell us what you need and an expert consultant will call you back within 2 hours.
              Zero commitment, completely free.
            </p>

            <ul className="flex flex-col gap-3">
              {TRUST_POINTS.map((pt) => (
                <li key={pt} className="flex items-center gap-3">
                  <CheckCircle2 size={16} className="text-[var(--color-teal-light)] flex-shrink-0" />
                  <span className="text-[0.9375rem] font-medium" style={{ color: "rgba(255,255,255,0.8)" }}>
                    {pt}
                  </span>
                </li>
              ))}
            </ul>

            {/* Reassurance pill */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-xl border border-white/15"
              style={{ background: "rgba(255,255,255,0.06)" }}
            >
              <ShieldCheck size={16} className="text-[var(--color-teal-light)] flex-shrink-0" />
              <span className="text-[0.8125rem] font-medium" style={{ color: "rgba(255,255,255,0.75)" }}>
                100% Free · No Commitment · Response in 2 Hours
              </span>
            </div>
          </div>

          {/* ── Right — form card ────────────────────────────────────── */}
          <div
            className="rounded-2xl p-5 md:p-6"
            style={{
              background: "rgba(255,255,255,0.96)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 20px 60px rgba(0,0,0,0.25)",
            }}
          >
            <h3 className="type-h3 mb-1">Request a free callback</h3>
            <p className="type-body-s mb-4">Fill in the form and we&apos;ll reach out within 2 hours.</p>

            <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">

              {/* Full Name */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.8125rem] font-semibold text-[var(--color-navy)]" htmlFor="cta-name">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  id="cta-name"
                  name="name"
                  type="text"
                  placeholder="Rahul Sharma"
                  className={`input-premium ${errors.name ? "!border-red-400 !shadow-[0_0_0_3px_rgba(239,68,68,0.12)]" : ""}`}
                  autoComplete="name"
                  value={form.name}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
                {errors.name && (
                  <p className="flex items-center gap-1.5 text-[0.75rem] text-red-500 font-medium">
                    <AlertCircle size={12} /> {errors.name}
                  </p>
                )}
              </div>

              {/* Mobile Number */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.8125rem] font-semibold text-[var(--color-navy)]" htmlFor="cta-phone">
                  Mobile Number <span className="text-red-500">*</span>
                </label>
                <input
                  id="cta-phone"
                  name="mobile"
                  type="tel"
                  placeholder="+91 XXXXX XXXXX"
                  className={`input-premium ${errors.mobile ? "!border-red-400 !shadow-[0_0_0_3px_rgba(239,68,68,0.12)]" : ""}`}
                  autoComplete="tel"
                  value={form.mobile}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
                {errors.mobile && (
                  <p className="flex items-center gap-1.5 text-[0.75rem] text-red-500 font-medium">
                    <AlertCircle size={12} /> {errors.mobile}
                  </p>
                )}
              </div>

              {/* Service Required */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.8125rem] font-semibold text-[var(--color-navy)]" htmlFor="cta-service">
                  Service Required <span className="text-red-500">*</span>
                </label>
                <select
                  id="cta-service"
                  name="service"
                  className={`input-premium ${errors.service ? "!border-red-400 !shadow-[0_0_0_3px_rgba(239,68,68,0.12)]" : ""}`}
                  value={form.service}
                  onChange={handleChange}
                  disabled={status === "loading"}
                >
                  <option value="">Select a service</option>
                  {SERVICES.map((s) => (
                    <option key={s} value={s}>{s}</option>
                  ))}
                </select>
                {errors.service && (
                  <p className="flex items-center gap-1.5 text-[0.75rem] text-red-500 font-medium">
                    <AlertCircle size={12} /> {errors.service}
                  </p>
                )}
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <label className="text-[0.8125rem] font-semibold text-[var(--color-navy)]" htmlFor="cta-message">
                  Message <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="cta-message"
                  name="message"
                  rows={2}
                  placeholder="Tell us your requirement..."
                  className={`input-premium resize-none ${errors.message ? "!border-red-400 !shadow-[0_0_0_3px_rgba(239,68,68,0.12)]" : ""}`}
                  style={{ lineHeight: "1.6" }}
                  value={form.message}
                  onChange={handleChange}
                  disabled={status === "loading"}
                />
                {errors.message && (
                  <p className="flex items-center gap-1.5 text-[0.75rem] text-red-500 font-medium">
                    <AlertCircle size={12} /> {errors.message}
                  </p>
                )}
              </div>

              {/* API-level error */}
              {status === "error" && apiError && (
                <div className="flex items-start gap-2 bg-red-50 border border-red-200 rounded-xl px-3 py-2.5">
                  <AlertCircle size={15} className="text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-[0.8125rem] text-red-600">{apiError}</p>
                </div>
              )}

              {/* Submit button */}
              <Button
                variant="primary"
                className="w-full h-11 text-[0.9375rem] mt-0.5 shadow-md"
                type="submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <span className="flex items-center justify-center gap-2">
                    <Loader2 size={16} className="animate-spin" />
                    Submitting…
                  </span>
                ) : (
                  "Request Free Consultation"
                )}
              </Button>

              <p className="flex items-center justify-center gap-1.5 text-[0.75rem] text-gray-400 text-center">
                <Lock size={11} />
                Your information is 100% secure and never shared
              </p>

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
