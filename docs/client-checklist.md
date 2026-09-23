# Client approval checklist

Placeholders and open items before launch. Search the code for `PLACEHOLDER`, `VERIFY`, `TODO(brand)` and `[… — TBC]` to find each one. Everything below is edited in [`/content/site.ts`](../content/site.ts) unless another file is named.

## Placeholders (visible on the site today)

- [ ] **Contact email.** Replace `company.contact.email` and set `emailIsPlaceholder: false` to enable the mailto link.
- [ ] **Contact phone.** Replace `company.contact.phone`, or remove it.
- [ ] **Story photo.** Real Kootenay landscape near the site. Add it to `/public/images/` and set `story.image.src`.
- [ ] **Headshots.**
  - Mark McKellar and Dr. Hussain: files exist in Drive (*Current core team* doc). Save them as `/public/team/mark-mckellar.jpg` and `/public/team/mohammed-hussain.jpg`, then uncomment `photo`.
  - David Sedmak, JJ McKellar, Russell Hunt: not supplied. Initials are shown until they are.
- [ ] **Russell Hunt.** Full bio and approved title (currently "Logistics, Good Neighbour & Operations Advisor").
- [ ] **Social / profile URLs** for JSON-LD `sameAs` (`company.sameAs`).

## Approvals needed

- [ ] **Dr. Mohammed M. Hussain** approves his bio and title (he asked to confirm wording before external use).
- [ ] **All team bios and titles**, especially JJ McKellar's title and full-name display.
- [ ] **2026 timeline entry** ("Development"). It is not a dated FAQ milestone.
- [ ] **Value-chain copy** for Compression, Storage and Transport (derived from the draft).
- [ ] **New connective copy:** section headings, intros and hero facts (see decision E5).
- [ ] **Ktunaxa naming:** "Ktunaxa First Nation" (FAQ Q3) vs "Ktunaxa Nation" (FAQ Q4, disclaimer).
- [ ] **Hero headline:** "Powered by Water. Driven by Vision." (client line) is in use; confirm it replaces the Brand Guide line in the hero.
- [ ] **Investment ask.** Confirm the $10M seed figure and copy, then set `NEXT_PUBLIC_SHOW_INVESTMENT_ASK=true`.
- [ ] **Legal:** confirm the "TIPI Coin" reference in the public disclaimer (§1).
- [ ] **Legal:** confirm the form's privacy note and investor-type options (no "accredited investor" self-certification is collected).

## Claims to verify (currently omitted)

- [ ] Any **"Canada's first…"** claim.
- [ ] **"No direct regional competition"** (Messaging Platform).
- [ ] **Patent-pending status** of the fire-retardant perimeter fence (for Mark McKellar's bio).

## Brand

- [ ] **Forest hex** from the designer. Replace `--tipi-forest` in `app/globals.css`, `FOREST` in `app/opengraph-image.tsx`, and `theme_color` in `app/manifest.ts`.
- [ ] **Black:** confirm pure `#000000` (the logo SVG default) is intended.
- [ ] **Cambria web licence** (optional). Currently Cambria → Caladea → Georgia.
- [ ] **Photography** to brief: real landscapes, clean tech, field work, Indigenous leadership shown naturally.

## Compliance and launch

- [ ] **Privacy policy page.** Recommended before collecting inquiries (PIPEDA / BC PIPA). None exists yet.
- [ ] **Analytics consent.** Decide whether a consent banner is needed before enabling GA4 (e.g. for visitors covered by Québec Law 25).
- [ ] **Inquiry mailbox and email provider.** Set `EMAIL_PROVIDER=resend` (or another provider) with `RESEND_API_KEY`, `INQUIRY_TO_EMAIL` and a verified `INQUIRY_FROM_EMAIL` domain.
- [ ] **GA4.** Set `NEXT_PUBLIC_GA_MEASUREMENT_ID`.
- [ ] **Google Search Console.** Set `GOOGLE_SITE_VERIFICATION`, or verify via a DNS TXT record at Squarespace.
- [ ] **Vercel domain.** Add `tipicanada.com` and `www.tipicanada.com` in Vercel, then add the A / CNAME records Vercel shows in Squarespace DNS. DNS stays at Squarespace.
- [ ] **Turn off review notes** for launch: `NEXT_PUBLIC_SHOW_REVIEW_NOTES=false`.
