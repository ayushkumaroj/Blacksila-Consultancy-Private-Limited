import { Mail, Phone, MapPin } from "lucide-react";
import { LogoPlaceholder } from "@/components/atoms/LogoPlaceholder";
import { PHONE_HREF, PHONE_DISPLAY } from "@/config/contact";

const SOCIAL = [
  {
    label: "LinkedIn",
    href: "#",
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "Twitter / X",
    href: "#",
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    svg: (
      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
];

const SERVICES_LINKS = [
  "Company Registration",
  "GST Services",
  "Income Tax Filing",
  "Accounting & Bookkeeping",
  "ROC Compliance",
  "Payroll Processing",
  "Trademark Registration",
];

const COMPANY_LINKS = [
  { label: "About Us", href: "#" },
  { label: "How It Works", href: "#" },
  { label: "Blog", href: "#" },
  { label: "Careers", href: "#" },
  { label: "Contact Us", href: "#" },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-navy-dark)] text-white/70">

      {/* Main grid */}
      <div className="container-ds pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">

          {/* Brand column */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/*
              PLACEHOLDER: swap for the real logo when assets are ready.
              Original image: /logo-light-version.png (light version for dark bg)
            */}
            <LogoPlaceholder variant="light" height="3.75rem" />

            <p className="text-[0.875rem] leading-relaxed max-w-[36ch]">
              Your trusted partner for business compliance, expert tax consulting, and legal advisory services across India.
            </p>

            {/* Contact info */}
            <ul className="flex flex-col gap-3 text-[0.875rem]">
              <li className="flex items-center gap-2.5">
                <Mail size={14} className="text-[var(--color-teal-light)] flex-shrink-0" />
                <a href="mailto:blacksila.services@gmail.com" className="hover:text-white transition-colors">
                  blacksila.services@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone size={14} className="text-[var(--color-teal-light)] flex-shrink-0" />
                <a href={PHONE_HREF} className="hover:text-white transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={14} className="text-[var(--color-teal-light)] flex-shrink-0 mt-0.5" />
                <span>Office No-07, Floor No-4th, Hotel Debonair Compex,<br />New Kalimati, Sakchi, Jamshedpur, Jharkhand-831001</span>
              </li>
            </ul>

            {/* Social icons */}
            <div className="flex items-center gap-2 pt-1">
              {SOCIAL.map(({ label, href, svg }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg border border-white/10 flex items-center justify-center text-white/50 hover:text-white hover:border-white/30 hover:bg-white/5 transition-all"
                >
                  {svg}
                </a>
              ))}
            </div>
          </div>

          {/* Services + Company — side by side on mobile via sub-grid */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-8 lg:contents">
            {/* Services column */}
            <div className="lg:col-span-3">
              <h4 className="text-[0.875rem] font-semibold text-white mb-5 uppercase tracking-wider">Services</h4>
              <ul className="flex flex-col gap-2.5">
                {SERVICES_LINKS.map((s) => (
                  <li key={s}>
                    <a
                      href="#"
                      className="text-[0.875rem] hover:text-[var(--color-teal-light)] inline-flex transition-colors"
                    >
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company column */}
            <div className="lg:col-span-2">
              <h4 className="text-[0.875rem] font-semibold text-white mb-5 uppercase tracking-wider">Company</h4>
              <ul className="flex flex-col gap-2.5">
                {COMPANY_LINKS.map(({ label, href }) => (
                  <li key={label}>
                    <a
                      href={href}
                      className="text-[0.875rem] hover:text-[var(--color-teal-light)] inline-flex transition-colors"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Newsletter column */}
          <div className="lg:col-span-3 md:col-span-2">
            <h4 className="text-[0.875rem] font-semibold text-white mb-5 uppercase tracking-wider">Stay Updated</h4>
            <p className="text-[0.875rem] leading-relaxed mb-4">
              Get monthly tax tips and compliance reminders straight to your inbox.
            </p>
            <form className="flex flex-col gap-2.5" action="#">
              <input
                type="email"
                placeholder="your@email.com"
                suppressHydrationWarning
                className="w-full min-w-0 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white placeholder:text-white/30 text-[0.875rem] focus:outline-none focus:border-[var(--color-teal)] transition-colors"
              />
              <button
                type="button"
                className="w-full py-2.5 rounded-xl bg-[var(--color-teal)] hover:bg-[var(--color-teal-dark)] text-white text-[0.875rem] font-semibold transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="text-[0.75rem] text-white/35 mt-2">No spam, unsubscribe anytime.</p>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="container-ds py-5 flex flex-col md:flex-row items-center justify-between gap-3 text-[0.8125rem]">
          <p className="text-white/40 text-center md:text-left">
            &copy; {new Date().getFullYear()} BlackSila Consultancy Pvt. Ltd. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-1">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map((link) => (
              <a key={link} href="#" className="text-white/40 hover:text-white/70 transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
