# Client approval checklist

Placeholders and open items before launch. Search the code for `PLACEHOLDER`, `VERIFY`, `TODO(brand)` and `[… — TBC]` to find each one. Everything below is edited in [`/content/site.ts`](../content/site.ts) unless another file is named.

> See also [`content-review.md`](content-review.md): the full cross-check of every linked document (24 Sept 2026). Its sections 2 and 3 are decisions for the client and legal.

## Placeholders (visible on the site today)

- [ ] **Contact email.** Replace `company.contact.email` and set `emailIsPlaceholder: false` to enable the mailto link.
- [ ] **Contact phone.** Replace `company.contact.phone`, or remove it.
- [ ] **Story photo.** Real Kootenay landscape near the site. Add it to `/public/images/sections/` and set `story.image.src`.
- [ ] **Headshots.**
  - Mark McKellar and Dr. Hussain: files exist in Drive (*Current core team* doc). Save them as `/public/images/team/mark-mckellar.jpg` and `/public/images/team/mohammed-hussain.jpg`, then uncomment `photo`.
  - David Sedmak, JJ McKellar, Russell Hunt: not supplied. Initials are shown until they are.
- [ ] **Russell Hunt.** Full bio and approved title (currently "Logistics, Good Neighbour & Operations Advisor").
- [ ] **Social / profile URLs** for JSON-LD `sameAs` (`company.sameAs`).

## Approvals needed

- [ ] **Dr. Mohammed M. Hussain** approves his bio and title (he asked to confirm wording before external use).
- [ ] **All team bios and titles**, especially JJ McKellar's title and full-name display.
- [ ] **2026 timeline entry** ("Development"). It is not a dated FAQ milestone.
- [ ] **Value-chain copy** for Compression, Storage and Transport (derived from the draft).
- [ ] **New connective copy:** section headings, intros and hero facts (see decision E5), including the new "How we work" section's eyebrow and heading (E8).
- [x] **Voice icons:** Voice Icons 1–6 map to Respectful … Credible in Messaging Platform order (confirmed by the creative director, 1 Oct 2026).
- [x] **Differentiator icons:** all five received and shown in Key Differentiators (1 Oct 2026).
- [ ] **Ktunaxa naming:** "Ktunaxa First Nation" (FAQ Q3) vs "Ktunaxa Nation" (FAQ Q4, disclaimer).
- [ ] **Hero headline:** "Powered by Water. Driven by Vision." (client line) is in use; confirm it replaces the Brand Guide line in the hero.
- [ ] **Investment ask.** Confirm the seed amount. It is now `[SEED AMOUNT — TBC]`, because sources say $1–5M, $2–7M and $10M. Then set `NEXT_PUBLIC_SHOW_INVESTMENT_ASK=true`.
- [ ] **Hubs:** confirm Castlegar (2031) and Trail (2033) are final. The July documents and the letter to the Nations say Cranbrook.
- [ ] **Nations:** confirm the territorial statement ("within ʔamakʔis Ktunaxa") and naming, and that the Ktunaxa agree to appear in the ownership chart.
- [ ] **Economic claims:** confirm or soften "robust economics / designed to deliver long-term returns" (see content-review §2.4).
- [ ] **Legal:** confirm the "TIPI Coin" reference in the public disclaimer (§1).
- [ ] **Legal:** confirm the form's privacy note and investor-type options (no "accredited investor" self-certification is collected).

## Claims to verify (currently omitted)

- [ ] Any **"Canada's first…"** claim.
- [ ] **"No direct regional competition"** (Messaging Platform).
- [ ] **Patent-pending status** of the fire-retardant perimeter fence (for Mark McKellar's bio).

## Imagery (added 28 Sept 2026)

- [ ] **Licences:** confirm the three Shutterstock images (`shutterstock_2519998867` waves, `shutterstock_2609285383` feathers, `shutterstock_2034489200` blue watercolour) and the "ETHOS green background" texture are licensed for web use by the client or the agency.
- [ ] **Rights / AI disclosure:** confirm usage rights for the turtle, birds, swirl, dark-feathers and "water becoming hydrogen" images, and whether any are AI-generated or AI-edited (the turtle file is named "extended"). Some clients and Nations prefer disclosure.
- [ ] **Cultural review:** the birds illustration carries generic "Indigenous-inspired" chevron and sun motifs, and feathers carry cultural significance for many Nations. The client (and ideally Ktunaxa contacts) should confirm this treatment feels respectful and not pan-Indigenous or stereotypical, per Brand Guide V10.
- [ ] **Subject accuracy:** the hero shows a sea turtle, which is symbolic of Turtle Island rather than a Kootenay species. Confirm this is intended.
- [ ] **Real project photography** (Blewett site, Kootenay River, team in the field) is still wanted for credibility. It can replace or join these images later.
- [ ] **Source files:** the originals were uploaded into `app/` and were moved to `assets/source-images/` (`app/` is the Next.js routing folder) and renamed to match their web copies. Upload future originals to `assets/source-images/`; see [`assets/README.md`](../assets/README.md).

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
