/**
 * LogoPlaceholder — reserves the logo slot with a minimal label until the
 * official logo assets are ready.
 *
 * HOW TO REPLACE WITH THE REAL LOGO
 * -----------------------------------
 * 1. Delete (or archive) this file.
 * 2. In Navbar.tsx  – restore the two <img> elements (light + dark version).
 * 3. In Footer.tsx  – restore the <img> element (light version).
 * Everything else in those files stays the same.
 */

interface LogoPlaceholderProps {
  /** "light" for dark backgrounds (navbar hero, footer), "dark" for light backgrounds (scrolled navbar) */
  variant?: "light" | "dark";
}

export function LogoPlaceholder({ variant = "light" }: LogoPlaceholderProps) {
  const textColor =
    variant === "light"
      ? "rgba(255,255,255,0.35)"
      : "rgba(27,58,107,0.35)";

  return (
    <div
      aria-label="Logo coming soon"
      style={{
        /* Matches the original logo slot dimensions exactly */
        height:      "3.375rem",          /* 54 px — same as LOGO_H in Navbar */
        width:       "clamp(140px, 35vw, 248px)",
        display:     "flex",
        alignItems:  "center",
        userSelect:  "none",
        flexShrink:  0,
      }}
    >
      <span
        style={{
          fontSize:      "0.6875rem",     /* 11 px */
          fontWeight:    400,
          letterSpacing: "0.04em",
          color:         textColor,
          transition:    "color 0.45s ease",
          whiteSpace:    "nowrap",
        }}
      >
        Logo coming soon
      </span>
    </div>
  );
}
