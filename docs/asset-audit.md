# Asset Audit

Updated: 2026-07-18.

## A. Source/reference material — IN REPO (not publicly served)

Copied byte-identical from `~/Downloads` into `docs/source-material/` (originals preserved; not committed):

| File | SHA-256 (first 16) | Bytes | Type | Serve publicly? |
|---|---|---|---|---|
| `PrimeKar_Website_Build_Blueprint.pdf` | `f6069f7500e487e7…` | 667,129 | Controlling build specification (32 pp) | **No** — internal |
| `PrimeKar_Claude_Build_Prompt.txt` | `8b682976b899b321…` | 8,771 | Appendix-A master prompt (earlier than the pasted v7) | **No** — internal |

These are the authoritative content source for the sitemap, SEO slugs, page copy, component-source map, and homepage spec. Recommend adding `docs/source-material/` to `.gitignore` before any commit (internal spec — keep out of the published repo), pending your call.

## B. Logo assets — AUDIT-ONLY in `docs/source-material/assets/` (Phase A: not in `/public/`)

Phase A permits audit/planning material only, so **no asset is placed in `/public/` during Phase A**. The two approved logos were relocated **byte-for-byte, unchanged** from `/public/brand/` into `docs/source-material/assets/` (an audit-only, non-served location). The empty `public/brand/` and `public/` directories (created only during Phase A) were removed. The originals in `~/Downloads/PrimeKar-assets/` are untouched.

| Field | `primekar-logo-dark.jpg` | `primekar-logo-light.png` |
|---|---|---|
| Current audit-only location | `docs/source-material/assets/` | `docs/source-material/assets/` |
| Original source (untouched) | `~/Downloads/PrimeKar-assets/primekar-logo-dark.jpg` | `~/Downloads/PrimeKar-assets/primekar-logo-light.PNG` |
| Original filename | primekar-logo-dark.jpg | primekar-logo-light.png |
| Format | JPEG | PNG |
| Dimensions | 855×855 | 1536×1024 |
| Bytes | 33,862 | 2,120,247 |
| SHA-256 (first 16) | `e550e5c1c2e54ebe…` | `ab609e610de41ae2…` |
| Transparency | **No** (opaque, baked dark bg) | **Yes** (alpha) |
| Intended future use | Logo on **dark** sections (header/hero/footer); social avatar | Logo on **light/transparent** backgrounds; favicon/OG source |
| Approval status | Approved artwork (source-of-truth logo); **format limitations below** | Approved artwork; **limitations below** |
| Recommended production destination (after Phase A approval) | `public/brand/primekar-logo-dark.jpg` (+ ideally an SVG / transparent-dark master) | `public/brand/primekar-logo-light.png` (+ SVG master) |

These are **different files for different backgrounds**, not competing candidates for one use → no logo-conflict to resolve. Observed artwork matches the brand: cream/warm-white "Prime" + muted-gold "Kar" with a small gold maple-leaf over the "i" (dark lockup); peach→cream gradient "Prime" + gold "Kar" (light lockup).

**Limitations to resolve before production (do not fix by altering the files):**
- **No SVG master supplied.** Blueprint p24 prefers **SVG**; raster logos don't scale crisply. Request an SVG.
- **Dark logo is a JPEG with no transparency** — it carries a baked dark background, so it can only sit on the exact matching `#1D2B2E`; it can't overlay photography or other section colours cleanly. A **transparent PNG/SVG on-dark** version is needed for flexible placement.
- **Light logo is 2.1 MB / 1536×1024** — fine as the master; production will render an optimized derivative via `next/image` (the original master stays unchanged in `/public/brand/`).
- Favicon set, Apple touch icon, and OG image still need to be **derived + approved** (Section 26) — a derivation step, not a redraw of the wordmark.

## C. App screenshots — SUPPLIED but AUDIT-ONLY → deliberately NOT placed in the repo

Source files present at `~/Downloads/PrimeKar-assets/` (all 1206×2622 PNG phone captures):

| File | Bytes | SHA-256 | Why audit-only / not approved for public |
|---|---|---|---|
| `primekar-app-home.PNG` | 1,169,421 | `5eb8a50b3cf0905f…` | Personal name "Bonjour, Jatinder"; legacy "Tap and Go" / "Experience Luxury on Demand" / "Ride in minutes"; "YYC FIXED FARE" (unverified) |
| `primekar-app-phone-mockup.PNG` | 1,335,139 | `b517e0738768368e…` | Personal name "Hi, John"; same legacy on-demand messaging; simulated iPhone frame (device-frame rule) |
| `primekar-app-invoice.PNG` | 668,858 | `0f8212c242e04550…` | Invoice/receipt — customer + financial data; **excluded from the website entirely** |

**Placement decision (and why I did not follow "app screenshots → /public/app/" for these):** your instruction was to *copy only the **approved** source files*, and to treat screenshots with personal names / invoice data / "Tap and Go" / "Luxury on Demand" / fixed-fare wording as **audit-only, not approved for public use.** These three trigger that rule. Putting them in `/public/` would make Next.js **serve them publicly** and would stage personal/financial data for commit (the pre-commit safety rule, Section 3, explicitly forbids committing customer/invoice/unredacted-screenshot data). So I **left them at `~/Downloads/PrimeKar-assets/`, outside the repo**, and inventoried them here by reference. `/public/app/` stays empty until clean approved screens exist.

**To publish an app section (Blueprint p6/p20/p24 + Section 12):** supply **clean, current** PrimeKar app screens — captured from a demo account, **pre-scheduled messaging** (no "Tap and Go"/"in minutes"/"Fixed Fare"), all personal + financial + test data removed — showing verified workflows (scheduling; pricing only if shown pre-confirmation; upcoming trip; driver/vehicle; receipts only if supported). Each approved individually. The invoice may only appear as a **separately reviewed, fully sanitized** derivative if explicitly approved.

## D. Outstanding asset requests (do not fabricate — supply as files)

1. **Logo SVG master** (+ transparent on-dark PNG/SVG) — for crisp scaling and flexible placement.
2. **Clean, approved app screenshots** for `/public/app/` (per C above).
3. **Fleet + Alberta destination photography** with documented rights (`media-inventory.md`).
4. **Official current app-store badge artwork** (Section 25).
5. Web-embed-licensed **font files** (or confirm Next.js system/self-host plan).

Until 1–2 arrive, visual implementation of the logo chrome and app section is limited to the raster masters on hand — a Phase B concern; Phase A planning is unaffected.

## E. Brand tokens (usable now, independent of assets)

Locked tokens drive the design system immediately: `#1D2B2E` / `#B8924A` (screen) / `#AB8A63` (**print only**) / `#F5DDCA` / `#F4EFE6`. Do not sample colour from screenshots when tokens + official logo files exist.
