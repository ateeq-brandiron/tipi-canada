# tipicanada.com: Turtle Island Power Inc. investor site

A single-page scrolling investor website for **Turtle Island Power Inc.** (14638093 Canada Inc.) and the Kootenay Green Hydrogen Project.

Built with Next.js 16 (App Router), TypeScript and Tailwind CSS 4, and deployed on Vercel. DNS stays at Squarespace.

## Quick start

```bash
npm install
cp .env.example .env.local   # optional; every variable has a safe default
npm run dev                  # http://localhost:3000
```

| Script | What it does |
| --- | --- |
| `npm run dev` | Local dev server |
| `npm run build` | Production build (also type-checks) |
| `npm start` | Serve the production build |
| `npm run lint` | ESLint |

## Editing content

**All copy lives in [`content/site.ts`](content/site.ts).** Components never hard-code text, so copy edits never touch them.

- Placeholders are written as `[… — TBC]`. Statements needing confirmation carry `// VERIFY:` comments.
- Team headshots go in `/public/team/`. Set `photo` on the team member; initials show until then.
- Photos go in `/public/images/`. Set `src` on the relevant image slot.
- Sources, conflicts and the approval checklist are in [`/docs`](docs/README.md).

## Structure

```
app/
  layout.tsx            fonts, metadata, GA4, GSC verification
  page.tsx              section order, JSON-LD, investment flag
  actions.ts            contact form server action
  sitemap.ts, robots.ts, manifest.ts, opengraph-image.tsx, apple-icon.tsx, icon.svg
components/
  sections/             one component per page section
  ui/                   Section, Button, Logo, Linework, Reveal, ImageSlot, ReviewBadge
content/site.ts         all site copy (typed)
lib/
  config.ts             feature flags and env config
  inquiry.ts            form schema (zod) and types
  email.ts              env-selected email provider (log | resend)
  jsonld.ts             Organization + WebSite + FAQPage structured data
public/brand/           official logo SVGs (viewBox trimmed only)
docs/                   sources, brand tokens, decisions, client checklist
```

## Feature flags and environment

See [`.env.example`](.env.example). Key switches:

| Variable | Default | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SHOW_INVESTMENT_ASK` | `false` | Shows "The Investment" section and nav link once the client approves it. |
| `NEXT_PUBLIC_SHOW_REVIEW_NOTES` | `true` | Shows "[Pending confirmation]" badges and photo notes. Set `false` at launch. |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | — | Loads GA4 only when set. |
| `GOOGLE_SITE_VERIFICATION` | — | Search Console HTML-tag token. |
| `EMAIL_PROVIDER` | `log` | `log` (stub; nothing is sent) or `resend`. |

Search engines index only the Vercel **production** deployment. Preview deployments get `noindex` and a disallow-all `robots.txt`.

## Contact form

The form is a server action (`app/actions.ts`) with zod validation. Spam protection is a hidden honeypot field plus a minimum fill time. Bots receive a normal-looking success response. Delivery goes through `lib/email.ts`:

- `EMAIL_PROVIDER=log` (the default) logs subject and recipients only.
- `EMAIL_PROVIDER=resend` sends via Resend and requires `RESEND_API_KEY`, `INQUIRY_TO_EMAIL` and `INQUIRY_FROM_EMAIL`.

NDA requests are tagged `[NDA REQUEST]` in the subject line.

## Accessibility and performance

- WCAG 2.2 AA colour pairings (see [`docs/brand-tokens.md`](docs/brand-tokens.md)), a skip link, visible focus rings, a native `<details>` FAQ, and labelled form errors with focus management.
- `prefers-reduced-motion` disables all scroll animation. Content is visible without JavaScript.
- Lighthouse on the production build (local): **Mobile 94–97 / 100 / 100 / 100**, **Desktop 100 / 100 / 100 / 100** (Performance / Accessibility / Best Practices / SEO). axe-core: 0 violations.

## Deploying to Vercel with Squarespace DNS

1. Import the GitHub repo in Vercel. The framework preset auto-detects Next.js.
2. Add the environment variables from `.env.example` to the Production environment.
3. In Vercel → Domains, add `tipicanada.com` and `www.tipicanada.com`.
4. In Squarespace → Domains → DNS settings, add the records Vercel shows (an `A` record for the apex and a `CNAME` for `www`). Keep Squarespace as the DNS host.
5. For Search Console, either set `GOOGLE_SITE_VERIFICATION` or add Google's TXT record in Squarespace DNS.
