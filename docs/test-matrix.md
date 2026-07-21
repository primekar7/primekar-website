# Test Matrix (plan — populated during build phases)

Defines what gets tested where (v7 §20, §32). Results filled in during Phases B/D/F/H. Automated Axe/Playwright is **required but not sufficient** for WCAG conformance (v7 §32).

## Viewport coverage

- **Every public page:** 390px (mobile) + 1440px (desktop).
- **Key templates** (Home, Service, Route, App-download, Contact, Legal): 320 / 375 / 390 / 430 / 768 / 1024 / 1440.
- Engines: **Chromium + WebKit** key paths; Firefox final smoke when available.
- Playwright config already has Desktop Chromium / Mobile Chromium / Mobile WebKit projects (`playwright.config.ts`).

## Per-page checks (each page, when built)
No horizontal overflow · no console errors · visible focus · keyboard operable · headings/landmarks correct · images have width/height + alt · CTAs correct destination (`cta-map.md`) · reduced-motion respected · forms labelled with error association.

## Responsive/mobile behaviours (v7 §20)
Portrait orientation · safe-area insets · 200% text zoom · keyboard-only nav · reduced-motion · sticky CTA behaviour · one app screenshot at a time · no dominant QR on mobile · direct store buttons on mobile · no hover-only functionality · 44×44 targets where practical.

## Accessibility manual checks (WCAG 2.2 AA, documented per template — v7 §32)
Keyboard order/traps · focus visible + not obscured · menu/dialog/skip-link operation · heading/landmark structure · link purpose/accessible names · form labels/errors/status · text resize/reflow/200% zoom · reduced motion · colour-independent meaning · touch-target sizing (SC 2.5.8, 24×24 min; 44×44 PrimeKar target) · screen-reader smoke when available.
Record: criterion · page/component · method · browser/AT · result · limitation · correction. **No "WCAG certified"; use "tested against applicable WCAG 2.2 AA within documented scope."**

## Real-device (before launch, v7 §20)
iPhone/current Safari + Android/current Chrome for: mobile nav, sticky CTAs, safe-area, store links, QR, Universal/App Links, orientation, text zoom, form controls, reduced motion. If unavailable → mark **NOT VERIFIED ON REAL DEVICE**; don't claim Safari/iPhone/Android/app-link compatibility from emulation alone.

## Fallback pages (v7 §17)
404 + runtime-error: tested status code, rendered result, robots directive recorded; recovery links; no stack traces/secrets; excluded from sitemap; not canonicalized to home.

## Quality gate (v7 §33 — Phase H)
typecheck · lint · format:check · build · e2e · accessibility · internal-link validation · external-link review · structured-data validation · sitemap/robots validation · console-error · horizontal-overflow · `[VERIFICATION REQUIRED]`/TODO/placeholder scan. Existing scripts: `pnpm typecheck|lint|format:check|build|test:e2e|test:accessibility|lighthouse`. Gaps marked NOT CONFIGURED (not silently substituted).

## Status

### Phase D results (2026-07-19) — Homepage, Airport, Banff

**Quality gate:** `pnpm typecheck` PASS · `pnpm lint` PASS · `pnpm format:check` PASS (after adding `docs/` to `.prettierignore`, F-001) · `pnpm build` PASS, all 3 pages prerendered static.

**Playwright (`pnpm test:e2e`, 3 projects — Desktop Chromium / Mobile Chromium / Mobile WebKit, run against the production build via `pnpm start`):** 47 passed, 1 skipped (mobile-only test correctly skipped on Desktop Chromium), 0 failed. Stable across repeated runs.

Two pre-existing test-quality issues were found and fixed during this pass (not homepage defects):
- `homepage.spec.ts`'s accessibility test scanned the page without waiting for the below-fold Reveal fade-in transition to settle, occasionally catching axe-core mid-animation and producing a transient, non-representative contrast reading. Fixed by emulating `prefers-reduced-motion: reduce` before the scan (also the more correct testing posture — reduced motion is a fully supported, tested user path).
- `smoke.spec.ts` used Playwright's `networkidle` wait condition, which is documented-unreliable with Next.js's client-side prefetching and timed out consistently. Replaced with `domcontentloaded` + a fixed settle window. The same test also needed to distinguish the accepted F-020 404-prefetch noise (Next.js `<Link>` prefetching approved-but-unbuilt nav routes) from a genuinely broken resource — it now tracks 404s by path against the known-unbuilt route list rather than treating any 404 as a failure.

**Homepage-specific findings caught by this pass, fixed:**
- `color-contrast` (serious): gold text (eyebrows, card/step numerals, panel meta lines) measured 3.33:1 on the new `--pk-teal-elevated` tone and 2.73:1 on `--pk-teal-feature` — both below the 4.5:1 AA minimum for normal text. Switched to warm-white everywhere gold was used as text; gold retained as a non-text accent (hairlines, icons, decorative bullets), which only needs the WCAG 1.4.11 ≥3:1 non-text threshold.
- `color-contrast` (serious): `--muted-foreground` (used for all subheadings/captions) was a 70%-alpha warm-white; alpha-compositing against the brightest tone (`--pk-teal-feature`) eroded it to 4.33:1. Redefined as a **solid** colour (warm-white mixed with 20% teal, no transparency) — 8.70:1 base / 5.74:1 elevated / 4.70:1 feature, all passing, and no longer background-dependent.
- Visual/rendering bug (not accessibility, found manually): `color-mix(in oklch, <chromatic>, white N%)` rendered as a muddy off-hue colour in this browser stack (resolves to a `hue: none` OKLCH value). All colour-mix calls involving white/black were switched to `in srgb`.
- Layout bug (found manually): the Alberta Routes "dominant" card used `row-span-2` + `aspect-auto`, which collapsed to ~100px tall because nothing else occupied its spanned grid rows. Replaced with an explicit `aspect-[2/1]` at full width.

**Manual browser verification (Chromium-class in-app browser):**
- Viewports checked: 320, 375, 390, 430, 768, 1024, 1440 (homepage); 390 + 1440 (Airport, Banff). No horizontal overflow at any width (JS-measured: `scrollWidth <= clientWidth`).
- Mobile-nav keyboard trap (F-003): with the dialog open, background `<header>`/`<main>`/`<footer>` carry native `inert` — Tab cannot reach them; Escape closes from any focus position; focus returns to the trigger. Verified via DOM inspection (`inert` attribute present/absent correctly on open/close) — this is a stronger guarantee than a focus-order Tab trace since `inert` is browser-enforced.
- CTA keyboard activation (F-004): all CTAs are now real `<a>` elements (via `LinkButton`), so Enter/Space/click all work via native anchor semantics — no synthetic `role="button"` Space-key gap remains.
- SSR visibility (F-005): `curl` of the production homepage HTML shows zero `opacity:0` inline styles.
- JS bundle (F-006): homepage initial JS reduced from ~295KB gzip (Phase C baseline) to ~257KB gzip (−13%) by removing the Motion-library dependency from the below-fold reveal effect (replaced with native IntersectionObserver + CSS transitions) and converting Button-rendered CTAs to plain anchors. Still above the proposed ≤130KB budget — the remainder is dominated by React/ReactDOM + Next.js framework runtime (~150KB, unavoidable for any interactive Next.js page) and Base UI's Dialog/NavigationMenu components (~70KB, providing the tested-working accessible mobile menu and desktop dropdown). Recommend the user approve a revised, realistic JS budget for this stack rather than further reduction risking the accessibility work just completed.
- Reduced motion: global CSS rule (`@media (prefers-reduced-motion: reduce)`) zeroes all transition/animation durations; confirmed present in compiled CSS and exercised by the Playwright reduced-motion test and the (fixed) accessibility test's `emulateMedia` call. Real-device VoiceOver/TalkBack smoke test — **NOT VERIFIED ON REAL DEVICE**.
- Console errors: zero unexpected errors on homepage, Airport, Banff (verified via `page.on("console")` in Playwright and manual `read_console_messages`). Expected 404s from Next.js prefetching not-yet-built nav routes are the accepted F-020 limitation.

**Mobile total page length (390×844):** reduced from the ~9.5-screen F-011 baseline read, then increased to ~11.4 screens after F-024's mandated structural additions to 7 previously-bare sections, then trimmed back to **~10.4 screens** via targeted mobile-only reductions (compacted route/fleet panel aspect ratios, reduced Card padding, hidden the AppExperience reserved device slot below `lg`). Net: **+10% vs the original 9.5-screen baseline**, while the specific F-011 complaint (Routes/Fleet oversized-empty panels) improved (Routes 1.58→1.22 screens, Fleet 0.83→0.68 screens). This is a disclosed trade-off, not full compliance with criterion G's total-height wording — seven sections that were literally empty now carry real content and structure, which was criterion A's explicit, higher-priority requirement.

**NOT run this pass (unchanged from Phase B/C status):** Lighthouse/`pnpm lighthouse` (config exists, not re-run); structured-data validation via Google's tools (JSON-LD reviewed visually, not run through Rich Results Test); real-device testing (all NOT VERIFIED ON REAL DEVICE, per the standing rule).

CI already runs typecheck/lint/format/build/e2e on push (`.github/workflows/ci.yml`).

### Phase F results (2026-07-20) — full site rebuild

**Infrastructure defect found and fixed:** `playwright.config.ts`'s `webServer.command` was `pnpm dev`. With no server already running (the CI default, since `reuseExistingServer` is forced `false` under `process.env.CI`), every `pnpm test:e2e` run — including CI — was testing the **Next.js dev server**, not the production build the same pipeline had just built. This was caught because an axe-core run against dev mode measured `--muted-foreground` on `--pk-teal-feature` at 4.33:1 (failing AA) while the identical token measured ~4.71:1 in the production build and in manual verification — dev mode resolves the `color-mix()` token differently from production in this stack. Fixed: `webServer.command` now runs `pnpm build && pnpm start`, so Playwright (local and CI) always tests the real production output. As a further safety margin (not solely relying on the corrected measurement), `--muted-foreground`'s teal-mix ratio was also tightened from 20% to 12% (`src/app/globals.css`).

**Quality gate:** `pnpm typecheck` PASS · `pnpm lint` PASS · `pnpm format:check` PASS · `pnpm build` PASS — 24 routes prerendered static (16 content pages + `/`, `/_not-found`, `robots.txt`, `sitemap.xml`, icon/OG image routes).

**Playwright (`pnpm test:e2e`, run against the production build), 3 projects:** 281 passed, 1 skipped, 0 failed. New suites added: `tests/pages.spec.ts` (parameterized over every route in `src/lib/site-routes.ts` — load/H1/console-error check, overflow at 390/1440px, full axe scan including `moderate` impact, not just serious/critical) and `tests/service-route-pages.spec.ts` (breadcrumb rendering/focus/target-size, BreadcrumbList absolute-URL validation, hero/final-CTA destination consistency, mobile quick-facts fallback) — this closes docs/page-template-review.md PT-002, which found the Phase D templates had **zero** automated coverage.

**Pages built this phase (16 total, up from 3):** Home, Calgary Airport Transportation, Calgary to Banff/Canmore/Lake Louise/Jasper Transportation, Executive/Corporate/Events/Early-Morning Transportation, Private Trips (hub), About, Contact, Fleet, How It Works, FAQ, Download the App. Every one measured 0 axe violations (full `wcag2a/wcag2aa/wcag21a/wcag21aa/wcag22aa/best-practice` rule set, not the serious/critical-only filter used previously), exactly 1 `<h1>`, no horizontal overflow at 390/1440px, no console errors — verified both via the Playwright suite above and manual in-browser inspection for a representative subset (homepage, Airport, Banff, About, the branded 404).

**JS bundle (docs/page-template-review.md PT-006):** Base UI (`NavigationMenu`, `Dialog`, `Button`) removed entirely and replaced with a custom disclosure dropdown (desktop nav) and a native `<dialog>` (mobile nav) — both plain React + browser APIs, no added dependency; `@base-ui/react` uninstalled. Measured on the production build: homepage/service/route-page initial JS **161.3–161.4 KB gzip**, down from 227–257 KB (a 30–37% reduction on top of Phase D's earlier cut). Still ~31KB above the proposed 130KB budget; the residual is ~109KB of React 19 + Next.js 16 framework runtime (confirmed via chunk source inspection), which cannot be reduced further without dropping React. Recommending the user consider a ~165KB gzip revised budget — not self-approved, per v7 §30.

**Not-found / error fallback (v7 §17):** `src/app/not-found.tsx` (branded, `robots: noindex`, recovery links to Home/Services/Contact) and `src/app/error.tsx` (client boundary, `reset()` retry + recovery links, no stack trace/error detail rendered) both implemented and manually verified rendering correctly at `/privacy/` (still-404) and via direct inspection.

**robots.txt / sitemap.xml (PT-012):** `src/app/robots.ts` / `src/app/sitemap.ts` implemented, generated from `src/lib/site-routes.ts`. Both verified returning correct content on the production server. URLs resolve to `localhost` pending the hosting decision (F-015) — expected pre-deploy.

**Remaining gap — Privacy Policy and Terms and Conditions:** **not built.** The verbatim legal body text required for these pages (docs/legal-content-audit.md) was never committed to this repo — only opening excerpts were audited in Phase A, and the "full raw HTML preserved locally in the session scratchpad" no longer exists in any accessible location this session. Fabricating or paraphrasing legal text was judged out of scope (v7 prohibits inventing content, and legal text specifically requires exact preservation, not summary). `/privacy/` and `/terms/` still 404 to the branded 404 page; both links carry `prefetch={false}`. This is the one remaining nav-link gap tracked under docs/page-template-review.md PT-013 and is a **hard blocker for Phase G/deploy** until the user supplies the verbatim source or approves a specific re-fetch method.

**NOT run this pass (unchanged real-device/Lighthouse status):** Lighthouse, Rich Results Test / Schema Markup Validator, real-device testing — all remain NOT VERIFIED ON REAL DEVICE per the standing rule.
