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
Plan only — no results yet (no pages built). CI already runs typecheck/lint/format/build/e2e on push (`.github/workflows/ci.yml`).
