# Brand tokens — Brand Guide V10

Implemented in [`app/globals.css`](../app/globals.css) as CSS custom properties and Tailwind theme colours.

## Colour

| Token | Hex | Source | Notes |
| --- | --- | --- | --- |
| `--tipi-yellow` | `#FDCB25` | Brand Guide V10 · logo SVG `.cls-1` | Energy / Optimism |
| `--tipi-white` | `#FFFFFF` | Brand Guide V10 | Clarity / Openness |
| `--tipi-red` | `#CA3630` | Logo SVG `.cls-2` | Human-centred emphasis |
| `--tipi-black` | `#000000` | Logo SVG (default fill) | Confirm no custom off-black is intended |
| `--tipi-forest` | **TODO** (temp `#1F3D2B`) | Not in the guide text or logo files | **Designer to supply the official hex** |
| `--tipi-paper` | `#F5F4EF` | Derived neutral | Quiet section background; not a brand colour |
| `--tipi-ink-muted` | `#3F3F3F` | Derived neutral | Secondary text on light surfaces |

### Approved pairings and measured contrast (WCAG 2.2)

| Pairing | Ratio | Use |
| --- | --- | --- |
| Black / White | 21:1 | Body copy, headings |
| Yellow / Black | 13.7:1 | Primary buttons, accents on black |
| White / Forest (temp) | 11.9:1 | Hero, Community, Contact sections |
| Yellow / Forest (temp) | 7.8:1 | Eyebrow labels on Forest |
| Red / White | 5.1:1 | Eyebrow labels, roles (≥ 12px bold) |
| Red / Paper | 4.7:1 | Eyebrow labels on Paper |
| **Yellow / White** | **1.5:1 — never use for text** | Decorative only |

## Typography

| Role | Spec | Implementation |
| --- | --- | --- |
| H1 | Cambria Bold 36–48px | `.type-h1` (36 mobile → 48 desktop) |
| H2 | Cambria Bold 26–32px | `.type-h2` (26 → 32) |
| Subhead | Inter Bold 18–22px | `.type-subhead` (18 → 20) |
| Body | Inter Regular 16–18px | body 16px, `.type-lead` 17 → 18 |
| Label | Inter Bold 11–13px | `.type-label` 12px, uppercase, tracked |

**Cambria licensing.** Cambria is a licensed Microsoft font and no web licence has been supplied. The heading stack is `Cambria, Caladea, Georgia, "Times New Roman", serif`. Caladea is metric-compatible with Cambria (SIL OFL) and is self-hosted via `next/font/google`. Visitors with Cambria installed (most Windows and Microsoft Office users) see Cambria. If the client licenses Cambria for web, swap Caladea for `next/font/local` in `app/layout.tsx`.

## Logo

- The official SVGs from *TIPI Logo Files* are in `/public/brand/`: `logo-primary.svg` (horizontal lockup), `logo-mark.svg` (turtle mark, colour) and `logo-mark-white.svg`.
- The only change is that each file's `viewBox` was trimmed from the 2500×2500 canvas to the artwork bounds. Paths, colours and proportions are untouched, and the file bytes otherwise match Drive.
- **Usage:** primary lockup on the white nav bar (clean background); white mark on the black footer; colour mark for the favicon and Apple touch icon.
- **Rules:** never distort, recolour, rotate or add effects. Clear space = height of the turtle's inner circular core.

## Linework and imagery

- Thin 1px flowing lines (river / ridge), `components/ui/Linework.tsx`, at low opacity behind content: a "quiet connective device".
- There is no photography yet. Placeholders mark where real landscape, clean-tech or field-work photography goes.
- Client feedback: avoid industrial hydrogen-tank imagery.
