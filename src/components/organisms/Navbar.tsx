'use client';

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "#" },
  { label: "Services", href: "#services" },
  { label: "About Us", href: "#about" },
  { label: "Blog", href: "#blog" },
];

// ── Logo dimensions ─────────────────────────────────────────────────────
// Actual logo aspect ratio ≈ 4.5 : 1  (wide horizontal lockup)
// Mobile: 160px keeps it readable without overflow on 320px screens
// Desktop: 248px fills the full natural width
const LOGO_H = "3.375rem";         // 54px — fills navbar nicely
const LOGO_MAX_W_MOBILE = "160px"; // safe on 320px+ screens
const LOGO_MAX_W = "248px";        // full width on md+


export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className="w-full fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled
          ? "rgba(255,255,255,0.97)"
          : "rgba(11,22,40,0.76)",
        backdropFilter: "blur(20px)",
        WebkitBackdropFilter: "blur(20px)",
        borderBottom: scrolled
          ? "1px solid rgba(229,231,235,0.8)"
          : "1px solid rgba(255,255,255,0.08)",
        boxShadow: scrolled ? "0 4px 32px rgba(27,58,107,0.09)" : "none",
      }}
    >
      {/*
        Three-column layout:
          left   → logo (flex-shrink-0, fixed max-width)
          center → nav links (flex-1, justify-center)
          right  → spacer matching logo width (hidden on mobile)

        This keeps nav links pixel-perfectly centered on every breakpoint.
      */}
      <div className="container-ds flex items-center h-[4.25rem] gap-4">

        {/* ── Logo ─────────────────────────────────────────────────────── */}
        <a
          href="#"
          aria-label="Blacksila Consultancy home"
          className="flex-shrink-0 relative flex items-center"
          style={{ height: LOGO_H, width: "clamp(140px, 35vw, 248px)" }}
        >
          {/*
            Two images stacked via absolute positioning.
            opacity cross-fade at scroll ≥ 60px gives a smooth brand transition.
          */}

          {/* LIGHT version — white/gold elements on transparent bg → dark hero */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-light-version.png"
            alt=""
            aria-hidden={scrolled}
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              height: LOGO_H,
              maxWidth: "clamp(140px, 35vw, 248px)",
              width: "auto",
              objectFit: "contain",
              objectPosition: "left center",
              userSelect: "none",
              opacity: scrolled ? 0 : 1,
              pointerEvents: scrolled ? "none" : "auto",
              transition: "opacity 0.45s ease",
            }}
          />

          {/* DARK version — navy/gold elements on transparent bg → white navbar */}
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/logo-dark-version.png"
            alt="BlackSila Consultancy Pvt. Ltd."
            aria-hidden={!scrolled}
            style={{
              position: "absolute",
              top: "50%",
              left: 0,
              transform: "translateY(-50%)",
              height: LOGO_H,
              maxWidth: "clamp(140px, 35vw, 248px)",
              width: "auto",
              objectFit: "contain",
              objectPosition: "left center",
              userSelect: "none",
              opacity: scrolled ? 1 : 0,
              pointerEvents: scrolled ? "auto" : "none",
              transition: "opacity 0.45s ease",
            }}
          />
        </a>

        {/* ── Desktop nav links — centered in flex-1 ────────────────────── */}
        <div className="hidden md:flex flex-1 justify-center items-center gap-9">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="nav-link px-1 py-2"
              style={{
                color: scrolled ? undefined : "rgba(255,255,255,0.90)",
                transition: "color 0.4s ease",
              }}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* ── Right spacer = logo width → keeps nav links true-center ──── */}
        <div
          className="hidden md:block flex-shrink-0"
          style={{ width: LOGO_MAX_W }}
        />

        {/* ── Mobile hamburger ─────────────────────────────────────────── */}
        <button
          className="md:hidden ml-auto w-10 h-10 flex items-center justify-center rounded-lg"
          style={{ color: scrolled ? "var(--color-navy)" : "white" }}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* ── Mobile menu ──────────────────────────────────────────────────── */}
      <div
        className={cn(
          "md:hidden overflow-hidden transition-all duration-300 ease-in-out",
          mobileOpen ? "max-h-[400px] opacity-100" : "max-h-0 opacity-0"
        )}
        style={{
          background: scrolled ? "rgba(255,255,255,0.97)" : "rgba(11,22,40,0.96)",
          backdropFilter: "blur(20px)",
          borderTop: scrolled
            ? "1px solid rgba(229,231,235,0.6)"
            : "1px solid rgba(255,255,255,0.08)",
        }}
      >
        <div className="container-ds py-4 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="block px-4 py-3.5 rounded-xl text-[1rem] font-medium transition-colors hover:bg-white/5"
              style={{ color: scrolled ? "#374151" : "rgba(255,255,255,0.88)" }}
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
