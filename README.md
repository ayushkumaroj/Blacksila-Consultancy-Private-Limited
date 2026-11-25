# Blacksila Consultancy Website

A single-page business-consultancy marketing website built with Next.js 16, React 19, TypeScript, and Tailwind CSS 4. The repository currently contains the public frontend, a contact route, and documentation-only scaffolding for future backend domains.

See [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) for project boundaries, route-layout rules, data conventions, environment handling, and known unchanged items.

## Run locally

Node.js 22 or newer is required.

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

Create a production build:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

Run the TypeScript check:

```bash
npx tsc --noEmit
```

## Folder layout

```text
src/app/                 App Router pages, layouts, route groups, and API routes
src/components/layout/   Navbar, footer, and structural site chrome
src/components/sections/ Public marketing-page sections
src/components/widgets/  Persistent interactive widgets
src/components/ui/       Reusable presentation primitives
src/data/                Typed static page content
src/types/               Shared content and domain types
src/config/              Site and contact configuration
src/lib/                 Shared utilities and environment accessors
src/modules/             Future feature-domain modules
src/server/              Future server-only infrastructure helpers
supabase/migrations/      Future database migrations
docs/                    Architecture and project documentation
```

## Environment variables

Copy `.env.example` to an appropriate local `.env*` file and configure these variable names:

- `NEXT_PUBLIC_APPS_SCRIPT_URL`
- `GMAIL_USER`
- `GMAIL_PASS`

Do not commit real environment values or credentials.
