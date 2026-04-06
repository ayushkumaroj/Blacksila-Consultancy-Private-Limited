'use client';

import { useState } from "react";
import { PhoneCall, X } from "lucide-react";
import { WA_HREF, PHONE_HREF, PHONE_DISPLAY } from "@/config/contact";

const WHATSAPP_ICON = (
  <svg width="26" height="26" viewBox="0 0 24 24" fill="white" aria-hidden>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

export function WhatsAppWidget() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip label */}
      <span className="bg-[var(--color-navy)] text-white text-[0.75rem] font-semibold px-3 py-1.5 rounded-lg shadow-lg opacity-0 translate-x-2 pointer-events-none transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-0 hidden md:block">
        Chat on WhatsApp
      </span>
      <a
        href={WA_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="group w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200"
        style={{ background: "linear-gradient(135deg, #25D366, #1DAD57)" }}
      >
        {/* Pulse ring */}
        <span className="absolute w-14 h-14 rounded-full bg-[#25D366] opacity-30 animate-ping" aria-hidden />
        {WHATSAPP_ICON}
      </a>
    </div>
  );
}

export function CallFAB() {
  return (
    <div className="fixed bottom-6 left-6 z-50 md:hidden">
      <a
        href={PHONE_HREF}
        aria-label={`Call Us: ${PHONE_DISPLAY}`}
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-xl hover:scale-110 active:scale-95 transition-transform duration-200"
        style={{
          background: "linear-gradient(135deg, var(--color-navy), var(--color-navy-light))",
        }}
      >
        <PhoneCall size={22} className="text-white" />
      </a>
    </div>
  );
}

export function CookieBanner() {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 px-4 pb-4 pointer-events-none">
      <div
        className="pointer-events-auto max-w-2xl mx-auto rounded-2xl border border-gray-200 bg-white shadow-[0_8px_32px_rgba(0,0,0,0.12)] p-4 flex flex-col sm:flex-row items-start sm:items-center gap-4"
      >
        {/* Cookie icon */}
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 text-xl"
          style={{ background: "rgba(15,155,142,0.1)" }}
          aria-hidden
        >
          🍪
        </div>

        <p className="text-[0.8125rem] text-gray-600 flex-1 leading-relaxed">
          We use cookies to improve your experience and personalise content.{" "}
          <a href="#" className="text-[var(--color-teal)] font-semibold hover:underline">
            Learn more
          </a>
        </p>

        <div className="flex items-center gap-2 flex-shrink-0">
          <button
            onClick={() => setDismissed(true)}
            className="text-[0.8125rem] font-medium text-gray-500 hover:text-gray-800 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
          >
            Decline
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="text-[0.8125rem] font-semibold text-white px-4 py-2 rounded-lg transition-colors"
            style={{ background: "var(--color-teal)" }}
          >
            Accept All
          </button>
          <button
            onClick={() => setDismissed(true)}
            className="w-7 h-7 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 hover:bg-gray-100 transition-colors ml-1"
            aria-label="Close cookie banner"
          >
            <X size={14} />
          </button>
        </div>
      </div>
    </div>
  );
}
