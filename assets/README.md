# Assets: where files go

Everything served by the website lives in `public/`. Original, full-size source files live here in `assets/`, which is **not** served.

## Where to put a new file

| You have… | Put it in | Referenced as |
| --- | --- | --- |
| A photo or illustration used in one section | `public/images/sections/` | `/images/sections/<name>.jpg` in `content/site.ts` |
| A background texture (full-bleed, decorative) | `public/images/textures/` | `textures` in `content/site.ts` |
| A team headshot | `public/images/team/` (create it) | `photo: "/images/team/<first-last>.jpg"` |
| A logo | `public/brand/` | `components/ui/Logo.tsx`, `lib/brand-assets.ts` |
| An icon (SVG) | `public/icons/` (create it) | `next/image` or inline SVG component |
| The original upload of any of the above | `assets/source-images/` | not referenced by code |
| An original icon from the creative director | `assets/source-icons/` | not referenced by code; web copies go to `public/icons/` |

Fonts are loaded through `next/font` in `app/layout.tsx` and don't need files. The favicon and Apple icon are generated from `app/icon.svg` and `app/apple-icon.tsx`.

## Naming

- Use lowercase kebab-case that says what the image shows: `hero-turtle.jpg`, `feathers-dark.jpg`. Never `image1.png` or `final.png`.
- Keep stock IDs in the original's name (`waves-shutterstock-2519998867.jpg`) so licences can be traced.
- Give a web copy the same base name as its original.

## Preparing web images

Export at **2400px wide**, JPEG (mozjpeg, quality ~80), usually 0.1–1 MB. `next/image` then serves AVIF/WebP at the right size for each device. Keep the full-size original in `assets/source-images/`.

GitHub's web upload stops at 25 MB, so resize larger originals before uploading.

## Current originals → web copies

| Original (`assets/source-images/`) | Web copy (`public/images/`) | Originally uploaded as |
| --- | --- | --- |
| `hero-turtle-extended.jpg` | `sections/hero-turtle.jpg` | Turtle in the sea_extemded copy.jpg |
| `birds-watercolour-indigenous-accents.png` | `sections/birds-watercolour.jpg` (cropped to the birds) | birds with indigenous accents but no feathers.png |
| `water-to-hydrogen-no-gradient.jpg` | `sections/water-to-hydrogen.jpg` | Water becoming Hydrogen cover NO GRADIENT copy.jpg |
| `feathers-dark.jpg` | `textures/feathers-dark.jpg` | Feathers Dark_2.jpg |
| `feathers-bright-shutterstock-2609285383.jpg` | `textures/feathers-bright.jpg` | shutterstock_2609285383.jpg |
| `swirl-painterly.jpg` | `textures/swirl-painterly.jpg` | Swirl Painterly_Abstract  copy.jpg |
| `waves-shutterstock-2519998867.jpg` | `textures/waves.jpg` | shutterstock_2519998867.jpg |
| `waves-blue-watercolour-shutterstock-2034489200.jpg` | `textures/blue-watercolour.jpg` | shutterstock_2034489200.jpg (resized for upload) |
| `texture-green-painterly-ethos.jpg` | `textures/green-painterly.jpg` (cropped to 4:3) | ETHOS GREEN BACKGROUND.jpg (resized for upload) |
| `feathers-colour-closeup.png` | not used yet | Feathers.png |

## Icon originals (`assets/source-icons/`)

Received from the creative director on 29 Sept 2026 (Slack). PNG with transparency. None are used on the site yet.

| File | Likely meant for (Messaging Platform) | Originally named |
| --- | --- | --- |
| `voice-icons-1.png` … `voice-icons-6.png` | The six Voice traits: Respectful, Purpose-Driven, Collaborative, Well-Researched, Strategic, Credible (order to confirm) | Voice Icons_1.png … Voice Icons_6.png (`_4` was "Voice Icons_4png.png") |
| `differ-icons-3.png`, `-4`, `-5` | Key Differentiators 3–5: Financially Sustainable, Repeatable Community Model, Strategic Regional Advantage. Icons 1 and 2 not received yet. | Differ Icons_3.png … Differ Icons_5.png |
