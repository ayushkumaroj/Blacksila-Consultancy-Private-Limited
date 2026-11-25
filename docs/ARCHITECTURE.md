# Architecture

This document describes the current project structure and the boundaries to preserve as backend capabilities are added.

## Folder structure

```text
src/
├── app/                    # Next.js App Router layouts, pages, route groups, metadata, and route handlers.
│   ├── (public)/           # Public marketing routes and the shared public-site chrome.
│   └── api/                # HTTP route handlers; currently contains the contact email endpoint.
├── components/
│   ├── layout/             # Site-wide structural components such as Navbar and Footer.
│   ├── sections/           # Composed marketing-page sections rendered by public pages.
│   ├── widgets/            # Persistent interactive UI such as contact buttons and the cookie banner.
│   └── ui/                 # Reusable, presentation-focused UI primitives.
├── config/                 # Stable site and contact configuration that is not page content.
├── data/                   # Typed static content arrays consumed by components.
├── lib/                    # Shared utilities and separated public/server environment accessors.
├── modules/                # Future feature-domain boundaries for backend and business workflows.
├── server/                 # Future server-only infrastructure helpers such as the database client.
├── styles/                 # Global Tailwind theme, design tokens, utilities, and shared styles.
└── types/                  # Domain types for content and shared application data shapes.

supabase/
└── migrations/             # Future versioned database migration files only.
```

The current module scaffolds are `auth`, `catalog`, `leads`, `orders`, `documents`, `payments`, `notifications`, and `admin`. Each module README defines its intended boundary.

## Route and layout structure

`src/app/layout.tsx` is the required root layout. It owns the document `<html>` and `<body>`, global CSS, metadata, and hydration-warning attributes, but does not apply public-site chrome to every route.

`src/app/(public)/layout.tsx` owns the public marketing shell: Navbar, the main-content wrapper, Footer, and persistent widgets. The `(public)` route-group name is omitted from URLs, so `src/app/(public)/page.tsx` still resolves to `/`.

Future customer pages can live under a `(customer)` group, for example `src/app/(customer)/dashboard/`, with a customer-specific layout. Future staff pages can live under an `(admin)` group, for example `src/app/(admin)/admin/`, with a separate protected admin layout. Both groups remain wrapped by the root document layout while avoiding the public Navbar, Footer, and widgets.

## Data layer rules

- Page-content collections belong in `src/data/`, not inside page or section components.
- Content shapes belong in domain files under `src/types/` and are re-exported from `src/types/index.ts`.
- Components should import typed content and focus on rendering; they should not define service, article, FAQ, testimonial, navigation, or similar content arrays.
- Data files must remain usable by both Server and Client Components and must not receive a `"use client"` directive without a genuine runtime need.

## Environment-variable rules

- `src/lib/env.public.ts` contains only `NEXT_PUBLIC_*` variables that are safe to expose to browser bundles.
- Public variables must use literal access such as `process.env.NEXT_PUBLIC_APPS_SCRIPT_URL`; dynamic keys or an aliased `process.env` object will not be inlined by Next.js.
- `src/lib/env.server.ts` contains server secrets only and must never be imported by a Client Component or by any module in a client import graph.
- Server environment helpers are currently consumed only by server route handlers.
- Real `.env*` files stay untracked. `.env.example` documents names without values.

## Rules for future backend work

- Business logic belongs in `src/modules/<feature>/`, organized by domain, never inside page or presentation components.
- Server-only infrastructure belongs in `src/server/` and must not enter client import graphs.
- Prices, discounts, entitlements, roles, and permissions must be calculated or authorized server-side; client values are display input, not authority.
- Every API route must validate and normalize its input before invoking business logic or external services.
- Secrets and privileged provider credentials must remain server-side and must never be committed.

## Known items not changed in this refactor

- `src/components/ui/Badge.tsx` and `src/components/ui/Card.tsx` are currently unused.
- The logo PNG files and the starter SVG assets in `public/` are currently not rendered; the application still uses `LogoPlaceholder`.
- The `images.unsplash.com` and `picsum.photos` remote image domains in `next.config.ts` are configured but unused.
- `/api/contact` exists but is not called by the consultation form, which currently posts directly to Google Apps Script.
- Several navigation, footer, policy, social, testimonial, and cookie-information links still use dead `#` destinations.
- `ShieldCheck` remains an unused import in `WhyChooseUsSection.tsx` and produces the existing lint warning.
- The address spelling `Hotel Debonair Compex` is preserved exactly as existing content.
- There is no custom `not-found.tsx`. The generated `/_not-found` route is outside `(public)`, so it no longer renders the public Navbar and Footer.
