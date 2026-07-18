# PrimeKar Design System (proposal — pending approval)

Governs the whole site so it reads as **one** system (Blueprint "critical control"). Sources: locked tokens (v7 §21), Blueprint pp.24–25, WCAG 2.2 AA (v7 §32). No token value is approximated.

## 1. Colour tokens (LOCKED — exact values)

| Token | Hex | Role |
|---|---|---|
| `--pk-teal` | `#1D2B2E` | Primary dark background; button text/icons on gold |
| `--pk-gold` | `#B8924A` | **Digital gold** — accent, border, icon, CTA fill. **Never** body text / long copy |
| `--pk-gold-print` | `#AB8A63` | **PRINT ONLY — must not appear in any digital UI/CSS var/component** |
| `--pk-cream` | `#F5DDCA` | Primary readable text on dark; warm surfaces |
| `--pk-warm-white` | `#F4EFE6` | Primary readable text on dark; light surfaces |

**Contrast (from v7 §21, to be re-verified per component/state):**
- Teal text on gold fill ≈ **5.04:1 → PASS** → gold CTA uses **teal** text/icons.
- Cream on gold ≈ 2.22:1 **FAIL**; warm-white on gold ≈ 2.53:1 **FAIL** → never put cream/warm-white text on a gold fill at normal size.
- Cream/warm-white on teal: to be measured (expected pass for body) — **every** combination tested before use; no colour assumed accessible because it's on-brand.
- Gold as text is allowed **only** for large display/accent on teal after passing ≥3:1 (large-text) / 4.5:1 (normal) as applicable — measure first; prefer cream/warm-white for reading.

Every state — default / hover / focus / active / disabled — tested independently. New persistent tokens require the v7 §21 documentation + approval; temporary opacity/overlay variants must still pass AA.

## 2. Typography (proposal — fonts pending licence, see `media-inventory.md`)

- **Do not** load Google Fonts at runtime (v7 §13; the current live site's runtime Poppins is rejected). Self-host or use `next/font` with a web-embed-licensed family.
- Proposed roles (family TBD on licence): **Display** (hero H1, section H2 — confident, premium, high legibility), **Body** (paragraphs, UI), optional **mono** only if needed. Keep to **one or two families**, limited weights (v7 §13).
- Type scale (rem, 1rem=16px) — mobile-first, fluid via `clamp()` at implementation:

| Role | Mobile | Desktop |
|---|---|---|
| H1 / hero | 2.0–2.5 | 3.0–3.75 |
| H2 | 1.5–1.75 | 2.0–2.5 |
| H3 | 1.25 | 1.5 |
| Body | 1.0 (16px min) | 1.0–1.125 |
| Small/label | 0.875 | 0.875 |

No tiny type (v7 §21). Body ≥16px. Line-height ~1.5 body / ~1.15–1.25 display. Prevent font-swap layout shift; preload only the critical hero font.

## 3. Spacing, grid, containers

- Spacing scale (px): **4, 8, 12, 16, 24, 32, 48, 64, 96, 128** (`--pk-space-*`).
- Container max-width ~**1200–1280px**, side padding 16 (mobile) → 24/32 (desktop).
- Grid: 12-col desktop, 4-col mobile; section vertical rhythm from the scale (calm whitespace — Raus influence).
- Breakpoints (align with `test-matrix.md`): 320 / 375 / 390 / 430 / 768 / 1024 / 1440. Mobile-first.

## 4. Radius, shadow, borders

- Radius: `--pk-radius-sm 6`, `-md 10`, `-lg 16`, `-pill 999`. One consistent card radius.
- Shadows: restrained (premium ≠ heavy). 1–2 elevation levels; avoid glow/neon.
- Borders/dividers: hairline gold at low opacity or cream/teal tints — never rely on colour alone for meaning.

## 5. Buttons (one system)

| Variant | Fill | Text/icon | Use |
|---|---|---|---|
| Primary | `--pk-gold` | `--pk-teal` | Download the App, primary CTA |
| Secondary | transparent + gold border | cream/warm-white (on teal) | Explore Services, secondary |
| Ghost/link | none | gold or cream | inline/tertiary |

Min target **44×44 CSS px** where practical (PrimeKar standard; AA minimum is 24×24 per SC 2.5.8) — see `test-matrix.md`. Visible focus ring (non-colour-only). All states defined + contrast-tested.

## 6. Cards, media ratios, sections

- **Service card**, **route card** (Nelson hierarchy: Banff dominant, Canmore/Lake Louise paired, Jasper wide), **app-feature block**, **testimonial**, **trust item**, **FAQ item**, **footer column** — the reusable primitives (Blueprint p25).
- Image ratios (consistent per card type): hero ~16:9/3:2; route cards a shared ratio with consistent overlay; fleet exterior/interior sets. Every image `next/image` with width/height, responsive, lazy below the fold, modern formats (AVIF/WebP).
- Consistent overlay treatment for text-on-image → maintain contrast (test).

## 7. Motion (Motion library only; no GSAP/WebGL/scroll-hijack)

- Vocabulary: short **opacity + translate** reveals (≤ ~300–400ms), subtle hover transitions. No content hidden until animation completes; hero content paints immediately (Blueprint p24).
- Durations `--pk-dur-fast 150 / -base 250 / -slow 400`; easing standard ease-out.
- **`prefers-reduced-motion`: reduce** → disable non-essential transforms, keep content fully available (v7 §32). Reduced-motion is a first-class path, tested.

## 8. Accessibility constraints (baked in)

Semantic landmarks, one H1/page, logical heading order, skip link, visible focus, labelled forms with associated errors, accessible menu/dialog, no colour-only meaning, 200% zoom/reflow, decorative images `alt=""`. Automated (Axe) **plus** manual checks (`test-matrix.md`) — automated pass ≠ conformance (v7 §32).

## Open items

- Font family + licence (OPEN — `media-inventory.md`).
- Logo SVG/transparent-dark master (OPEN — `asset-audit.md`).
- Confirm measured contrast for cream/warm-white on teal and any gold-as-text use at implementation.
