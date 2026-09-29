@AGENTS.md

# CLAUDE.md: tipicanada.com

Project guide for AI assistants working in this repository. It covers **this project only**.

## Project

Single-page investor website for **Turtle Island Power Inc.** (14638093 Canada Inc.), a majority Indigenous-owned green hydrogen developer (Kootenay Green Hydrogen Project, Blewett, BC). Client work by Brand Iron.

- Domain: `tipicanada.com`. Hosting: Vercel (Git integration). DNS stays at Squarespace.
- The current design is **approved** by the creative director. Change only what a task asks for.

## Stack

- Next.js **16** App Router (Turbopack) and React 19. This version differs from older training data: read `node_modules/next/dist/docs/` before using a Next API (see `AGENTS.md`).
- TypeScript (strict), Tailwind CSS **4** (`@theme inline` tokens in `app/globals.css`, no `tailwind.config`).
- zod v4 (form validation), `@next/third-parties` (GA4). npm (`package-lock.json`). Node 22 in CI.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Dev server on :3000 |
| `npm run lint` | ESLint (flat config, `eslint-config-next`) |
| `npm run typecheck` | `next typegen && tsc --noEmit` (typegen creates `LayoutProps`/route types on a fresh clone) |
| `npm run build` | Production build |
| `npm start` | Serve the build |

There is no test suite. CI (`.github/workflows/ci.yml`) runs install, lint, typecheck and build on every push and PR.

## Architecture

```
app/page.tsx            section order, JSON-LD, SHOW_INVESTMENT_ASK gating
app/layout.tsx          fonts (Inter, Caladea), metadata, GA4, GSC token
app/actions.ts          contact form server action (zod, honeypot, time trap)
app/{sitemap,robots,manifest,opengraph-image,apple-icon}.ts(x), icon.svg
components/sections/    one component per page section (Hero, Story, OurPath, ...)
components/ui/          shared primitives: Section/Container, Button, ImageSlot,
                        BackgroundTexture, Reveal, Linework, Logo, ReviewBadge
content/site.ts         ALL copy and image paths (typed). Components never hard-code text.
lib/config.ts           env-driven flags and settings
lib/{inquiry,email,jsonld,brand-assets}.ts
public/brand/           official logo SVGs (only the viewBox was trimmed)
public/images/          web-sized images (2400px, mozjpeg)
assets/source-images/   original uploads from the creative director (not served)
docs/                   sources, brand tokens, content decisions and review, client checklist
```

## Conventions

- **Copy:** edit `content/site.ts` only. Always write "Turtle Island Power Inc.". Invent nothing. Placeholders use `[… — TBC]`, and unconfirmed claims carry `// VERIFY:`. Any "Canada's first" claim stays omitted until verified.
- **Source priority for content:** FAQ > Messaging Platform > content draft (see `docs/content-decisions.md`).
- **Styling:** use the Tailwind utilities with the brand tokens (`bg-navy`, `text-yellow`, `bg-forest`, ...) and fluid tokens (`py-(--section-y)`, `mb-(--section-head-gap)`, `.container-page`, `.type-h1/.type-h2/.type-lead/.type-label`). Arbitrary values must not contain spaces.
  - Gotcha: a base `inline-flex` overrides `hidden`, so toggle visibility on a wrapper.
- **Sections:** build on `<Section tone=...>` and reuse `ImageSlot`/`BackgroundTexture` for imagery. Put text on photos only over an overlay that keeps WCAG AA contrast.
- **Colours:** Brand Guide V10 (Yellow `#FDCB25`, White, Red `#CA3630`, Black). Navy `#010F29` is derived from the hero photo. Forest `#1F3D2B` is a **temporary placeholder** until the designer supplies the hex. Never use yellow text on white, or red text on navy.
- **Accessibility:** WCAG 2.2 AA, 44px tap targets, visible focus, `prefers-reduced-motion` respected. Content must render without JS.
- **Images:** use `next/image` with correct `sizes`. New web images go to `public/images/`, and originals to `assets/source-images/` (never into `app/`).

## Environment

See `.env.example` (placeholders only; `.env*` is git-ignored). Every variable has a safe default, and the build needs none.

- `NEXT_PUBLIC_SHOW_INVESTMENT_ASK` (default `false`) and `NEXT_PUBLIC_SHOW_REVIEW_NOTES` (default `true`, set `false` at launch).
- `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GA_MEASUREMENT_ID`, `GOOGLE_SITE_VERIFICATION`.
- `EMAIL_PROVIDER` (`log` by default, which sends nothing; `resend` needs `RESEND_API_KEY`, `INQUIRY_TO_EMAIL`, `INQUIRY_FROM_EMAIL`).
- Indexing: only `VERCEL_ENV=production` is indexable. Previews get `noindex`.

## Constraints

- Keep confidential material (financials, counterparties, compensation, internal team assessments) off the public site and out of the repo.
- Open client items (contact email, Forest hex, seed amount, headshots, licences and cultural review of imagery) are tracked in `docs/client-checklist.md`. Don't resolve them by guessing.
- Git: conventional commits (`feat:`, `fix:`, `docs:`, `chore:` ...). No force-push or history rewrites. Never commit secrets or `.env` files.
