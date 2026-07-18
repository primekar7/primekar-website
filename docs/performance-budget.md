# Performance Budget (proposal — NOT approved)

Proposed limits for representative mobile (v7 §30–31, Blueprint p24–25). "Proposed" until the owner approves; do not silently raise a budget to pass (v7 §30). Core Web Vitals thresholds and transfer budgets are **separate controls**.

## Field targets (Core Web Vitals "good", 75th pct — v7 §31)
- **LCP ≤ 2.5 s** · **INP ≤ 200 ms** · **CLS ≤ 0.1**
- Lab (Lighthouse/Playwright) = **proxy only**; field pass not claimed until production field data exists.

## Proposed transfer/asset budgets (per page, mobile)

| Metric | Proposed budget | Rationale |
|---|---|---|
| Initial JS transferred | ≤ ~130 KB gzip | Next.js + minimal interactive (nav, accordion, form); limited client JS (Blueprint p25) |
| Initial JS executed | keep main-thread work low; defer non-critical | protects INP |
| CSS transferred | ≤ ~60 KB | Tailwind purged |
| Fonts | ≤ **2 families**, ≤ ~4 weights, woff2, self-host, preload only critical | v7 §13; avoid swap CLS |
| Hero image | ≤ ~200 KB (AVIF/WebP, responsive `srcset`) | LCP element |
| Largest above-fold image | ≤ ~250 KB | — |
| Total initial page weight | ≤ ~1.0–1.2 MB | premium but fast on mobile |
| Third-party requests / JS | **0** by default | no analytics/chat/pixels without approval (v7 §34) |
| CLS sources | reserve space for images/badges/app screens/fonts | Blueprint p20 |

## Techniques (Blueprint p25)
Static generation / server rendering; `next/image` w/ explicit width/height; lazy-load below fold; preload critical font + hero only; limit client JS to interactive components; short Motion reveals, no content delay, reduced-motion; no render-blocking third-party widgets.

## Verification (pre-launch, lab)
Representative mobile throttling; record hero-image loading, JS transferred/executed, CLS from fonts/images/badges/app screens, nav/menu interaction delay; document any page exceeding budget. Lighthouse config already scaffolded (`lighthouserc.js`) — collect-only, no invented thresholds until baseline.

## Open
Budgets above are **proposed**. Approve to lock; then test representative page types and record exceptions. Real hero/fleet/destination image weights unknown until assets supplied.
