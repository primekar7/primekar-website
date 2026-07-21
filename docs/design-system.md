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

### 1a. Section-tone ramp (added Phase D, docs/homepage-review.md F-008/F-024)

Three additional persistent tokens, each derived from the two locked tokens plus white/black via `color-mix(in srgb, …)` — no new raw colour. (`in oklch` was tried first and rejected: `color-mix(in oklch, <chromatic>, white N%)` renders as a muddy off-hue colour in this stack, confirmed by canvas pixel-sampling — the browser resolves the mix to a `hue: none` value that paints incorrectly. `in srgb` has no hue channel and renders correctly.)

| Token | Derivation | Rendered RGB | Contrast vs `--pk-teal` | Use |
|---|---|---|---|---|
| `--pk-teal-elevated` | `--pk-teal` + 13% white | `rgb(58,71,73)` | **1.515:1** | Standard alternate section tone |
| `--pk-teal-feature` | `--pk-teal-elevated` + 16% gold | `rgb(78,83,73)` | **1.849:1** | Statement/feature sections only (Corporate, Final CTA) — never placed adjacent to `--pk-teal-elevated` (measured 1.220:1 between them, below the 1.35 target) |
| `--pk-teal-deep` | `--pk-teal` + 25% black | `rgb(22,32,35)` | 1.161:1 vs base | Card/panel insets only (e.g. How It Works numeral badges) — not used as a full-bleed section tone |

Plus two hairline tokens: `--pk-hairline` (gold at 65% transparent) and `--pk-hairline-strong` (gold at 35% transparent) — deliberate rule/edge lines distinguishing this pass from the previous near-invisible `--border` (78% transparent).

**Text-on-surface contrast, measured in-browser:**

| Combination | Ratio | Passes normal-text AA (4.5:1)? |
|---|---|---|
| cream on elevated | 7.38:1 | Yes |
| warm-white on elevated | 8.42:1 | Yes |
| cream on feature | 6.05:1 | Yes |
| warm-white on feature | 6.90:1 | Yes |
| gold on `--pk-teal` (base) | 5.04:1 | Yes |
| **gold on elevated** | **3.33:1** | **No** — found and fixed during the F-024 pass; gold text (eyebrows, numerals, panel meta lines) was switched to warm-white everywhere it sat on an elevated or feature surface. Gold remains fine as a **non-text** graphical accent (hairlines, icons, decorative bullets) on elevated/feature surfaces per WCAG 1.4.11 (≥3:1), which both 3.33 and the feature-surface 2.73 pass. |
| **gold on feature** | **2.73:1** | **No** — same fix applied |
| **`--muted-foreground` (subheadings, captions) on feature** | **4.33:1 (old alpha-based token)** | **No** — caught by the Playwright/axe-core accessibility test, not manual sampling. The old token was 70%-alpha warm-white; alpha compositing against the *brightest* tone (feature) eroded contrast below AA even though the same token passed on base (7.02:1) and elevated (5.08:1). Fixed by redefining `--muted-foreground` as a **solid** colour (`warm-white mixed with 20% teal`, not alpha) — solid colours don't shift with whatever's behind them. Now: 8.70:1 base / 5.74:1 elevated / 4.70:1 feature, all passing. |

Section-tone sequence (Hero→Footer) is fixed so no two adjacent sections share a tone and `feature` never sits next to `elevated`: elevated, base, elevated, base, elevated, base, elevated, base, **feature**, base, elevated, base, **feature**. Verified by canvas pixel-sampling every adjacent pair — all ≥1.35:1.

## 2. Typography — **Geist**, approved (docs/media-inventory.md record below)

- **Do not** load Google Fonts at runtime (v7 §13; the current live site's runtime Poppins is rejected). Implemented via `next/font/google` (Geist), which downloads at **build time** and self-hosts the resulting woff2 — no runtime request to Google, no third-party runtime dependency. Single family, one weight range, preloaded, ~29KB.
- One family for both display and body roles (`--font-heading` aliases `--font-sans`) — keeps the "one or two families" rule with zero swap risk.
- Type scale strengthened in Phase D (docs/homepage-review.md F-024 criterion E — original ratio undersold the brand's editorial confidence):

| Role | Mobile | Desktop | Notes |
|---|---|---|---|
| H1 / hero | 2.25rem (36px) | 4.25rem (68px) | `tracking-[-0.02em]` |
| H2 (standard) | 1.875rem (30px) | 3rem (48px) | `tracking-[-0.015em]` |
| H2 (feature sections) | 2.25rem (36px) | 3.75rem (60px) | Airport/Corporate/App/Final CTA only |
| H3 | 1.125rem (18px) | 1.25rem (20px) | — |
| Body | 1.0rem (16px) | 1.125rem (18px) | — |
| Eyebrow/label | 0.875rem (14px) | 0.875rem (14px) | `tracking-[0.08em]`, warm-white not gold (contrast — §1a) |

Measured H2(desktop)/body ratio = **2.67** (target was ≥2×). Subheading paragraphs capped at `max-w-[58ch]` regardless of font-size, so line length stays readable at every breakpoint. No tiny type (v7 §21). Body ≥16px. Prevent font-swap layout shift; preload only the critical hero font (already default via `next/font`).

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

## 7. Motion (no GSAP/WebGL/scroll-hijack; the `motion` package remains an approved, installed dependency but is not currently used)

- Vocabulary: short **opacity + translate** reveals (≤ ~300–400ms), subtle hover transitions. No content hidden until animation completes; hero content paints immediately (Blueprint p24).
- Durations `--pk-dur-fast 150 / -base 250 / -slow 400`; easing standard ease-out.
- **`prefers-reduced-motion`: reduce** → a single global CSS rule (`globals.css`) forces all `animation-duration`/`transition-duration` to `0.01ms` — reduced-motion is enforced at the CSS layer for every animated element, with no per-component JS branching required.
- **Implementation change (Phase D, docs/homepage-review.md F-005/F-006):** the below-fold `Reveal` primitive was rebuilt on native `IntersectionObserver` + CSS transitions instead of the `motion` library. Two problems drove this: (1) Motion's `initial` prop shipped literal `opacity:0` in server-rendered HTML, so no-JS/pre-hydration visitors saw blank sections (F-005); (2) Motion was the single largest chunk in the homepage's JS bundle (~2× the approved budget) for what is a one-effect use case (F-006). The CSS/IntersectionObserver version: renders fully visible in SSR HTML and on first paint; only animates elements confirmed (client-side, post-mount) to be below the initial viewport, so already-visible content never flashes out and back in; respects reduced-motion via the existing global CSS rule with no additional code. `motion` (`MotionConfig`) was removed from `layout.tsx` since nothing else in the homepage uses it. It remains listed in `package.json` and available if a future page genuinely needs its richer capabilities (e.g. gesture-driven or physics-based motion) — this is a scoped simplification for one effect, not a stack change.

## 8. Accessibility constraints (baked in)

Semantic landmarks, one H1/page, logical heading order, skip link, visible focus, labelled forms with associated errors, accessible menu/dialog, no colour-only meaning, 200% zoom/reflow, decorative images `alt=""`. Automated (Axe) **plus** manual checks (`test-matrix.md`) — automated pass ≠ conformance (v7 §32).

Mobile navigation modal (Phase D, F-003): Base UI Dialog's own focus trap proved unreliable under manual keyboard testing — Tab could reach background elements that carried `aria-hidden` but remained focusable. Fixed with native `inert` applied to the header/main/footer landmarks while the dialog is open — the browser itself removes `inert` subtrees from the tab order and the accessibility tree, so escape is impossible regardless of the library's internal trap behaviour. See `src/components/chrome/mobile-nav.tsx`.

## Open items

- Logo SVG/transparent-dark master (OPEN — `asset-audit.md`).
- Real device / VoiceOver / TalkBack smoke test of the `inert`-based mobile-nav trap (NOT VERIFIED ON REAL DEVICE — emulated browser testing only so far).
