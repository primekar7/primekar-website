# Phase A Approval Packet

Every unresolved decision needed to approve Phase A and begin Phase B. Nothing here is resolved by me (v7 §37 conflict-handling). Format per decision: **Issue · Evidence · Recommendation · Options · Consequences · Blocks Phase B? · Exact decision required.**

Phase B builds only the **global header, mobile nav, homepage, global footer** (v7 §1). "Blocks Phase B?" = whether the decision must be settled before that specific work.

---

## OPEN-1 — Hosting platform
- **Issue:** Current site is static **GitHub Pages**; it cannot do server-side 301s, security headers, or `next/image` optimization. The rebuild is Next.js 16.
- **Evidence:** `deployment-audit.md` (headers: `server: GitHub.com`, no CSP/HSTS); `redirect-map.md`; `security-baseline.md`.
- **Recommendation:** Move production to a Node-capable host (e.g. Vercel) before launch.
- **Options:** (a) Vercel/Netlify/Cloudflare (SSR/ISR + redirects + headers + image opt); (b) stay GitHub Pages via static export (meta/JS redirects only, no custom headers).
- **Consequences:** (a) enables redirect/security/app-link strategy; a hosting/DNS change needing approval (v7 §27). (b) permanently limits redirects, headers, image optimization; weaker SEO/security.
- **Blocks Phase B?** **No** (homepage builds locally either way). **Yes** for redirects/security/deploy phases.
- **Decision required:** Approve target host, or defer to before Phase G/J.

## OPEN-2 — Legal booking-method conflict (+ L-2…L-6)
- **Issue:** Terms say **app-only** booking ("do not cancel via phone or email"); Terms preamble says "dispatch team or app"; Contact says "Call us anytime." Internally contradictory.
- **Evidence:** `legal-content-audit.md` (L-1…L-6); entity "PrimeKar Corp."
- **Recommendation:** Preserve legal body verbatim now; you + a Canadian lawyer resolve L-1…L-6; do not let me edit legal wording (v7 §11/§37).
- **Options:** (a) confirm app-only and align site copy/CTAs; (b) confirm app+phone/dispatch; (c) defer, preserve legal verbatim, keep CTAs neutral.
- **Consequences:** determines CTA labels/routing (`cta-map.md`) and whether "Call to book" is truthful. Publishing conflicting terms is a legal risk.
- **Blocks Phase B?** **Partially** — homepage CTA wording depends on it; can proceed with neutral "Download the App" / "Contact PrimeKar" until resolved.
- **Decision required:** Pick booking channel of record (or defer with neutral CTAs).

## OPEN-3 — Current-site claims matrix
- **Issue:** Live-site marketing claims conflict with pre-scheduled positioning.
- **Evidence:** `current-site-audit.md` 17-row matrix (all Pending).
- **Recommendation:** Remove "limousine," "Always On Time," "punctuality guaranteed," "in seconds/instant," "experienced/courteous/discreet/professional drivers"; Verify "Licensed & Insured," "24/7 Support," NAP, store links; Preserve services + legal.
- **Options:** (a) accept my per-row recommendations; (b) amend specific rows; (c) supply verified wording/evidence to upgrade "Verify" items.
- **Consequences:** governs all homepage copy; unverified claims must stay out of production (v7 §23).
- **Blocks Phase B?** **Yes** — homepage copy needs approved claim statuses (can use Blueprint content-pack copy, which is already conservative, as the safe default).
- **Decision required:** Approve the matrix dispositions (bulk-approve my column, or edit).

## OPEN-4 / OPEN-10 — Missing & unapproved assets
- **Issue:** No logo **SVG / transparent-on-dark**; app screenshots are audit-only (personal/financial/legacy content); no fleet/destination imagery, badges, or licensed fonts.
- **Evidence:** `asset-audit.md`, `missing-assets.md`, `media-inventory.md`, `media-sourcing-plan.md`. Supplied logos are raster only, relocated to `docs/source-material/assets/`.
- **Recommendation:** Supply logo SVG (+ transparent-dark), clean sanitized app screenshots, fleet/destination photography with rights, official store badges, a licensed/`next/font` family.
- **Options:** (a) supply now; (b) supply per-section as phases need them; (c) proceed with raster logo master + text-only placeholders where assets are missing (no fabrication).
- **Consequences:** logo chrome + app section + fleet + route visuals are blocked without real files; I will not fabricate/trace (v7 §12/§13).
- **Blocks Phase B?** **Partially** — header/footer can use the raster logo master; the homepage **app section** and any fleet/route imagery are blocked until assets arrive.
- **Decision required:** Confirm asset-delivery plan; approve raster logo as interim master; approve which homepage image-dependent sections may ship text-only vs. wait.

## OPEN-5 — Store URLs, booking destination, app links
- **Issue:** Store links exist in live source but product pages unconfirmed; real booking destination unknown; no app-link (Universal/App Links) signing evidence.
- **Evidence:** `cta-map.md` — Apple `id6753017125`, Google `com.primekar.customer`; `/DownloadApp` is a JS-only UA redirect (broken for SEO/a11y); "APP-LINK INFRASTRUCTURE NOT VERIFIED."
- **Recommendation:** Confirm both store listings are live; use direct store links + a real `/download` page showing both badges; no Universal/App Links until signing evidence supplied.
- **Options:** (a) confirm store links + provide booking destination; (b) provide app-link signing (AASA/assetlinks + SHA-256) to enable deep links; (c) direct-store-links only for now.
- **Consequences:** determines CTA truthfulness; deep links can't be claimed without verification (v7 §19).
- **Blocks Phase B?** **Partially** — homepage "Download the App" can use direct store links now; a real scheduling CTA needs the booking destination.
- **Decision required:** Confirm store links live; provide booking destination; choose app-link approach.

## OPEN-6 — Previously discussed business claims (v7 §9)
- **Issue:** Jan-2026 launch, Edmonton, Lethbridge, fixed pricing, live apps, "Calgary's first," zero cancellations — all require confirmation.
- **Evidence:** `decision-log.md` classification; Blueprint p3 "claims requiring confirmation."
- **Recommendation:** Do not publish any of them except where verified. My defaults: launch date / Edmonton / Lethbridge / fixed pricing / "Calgary's first" / "zero cancellations" → **Unsupported/Not approved**; live apps → **Verify** (store links exist).
- **Options:** (a) accept defaults; (b) supply evidence to approve specific claims; (c) approve narrower wording.
- **Consequences:** unverified/absolute claims create credibility + liability risk (esp. "zero cancellations," "Calgary's first").
- **Blocks Phase B?** **No** for the homepage if we omit them (safe default); **Yes** only if you want any of them published.
- **Decision required:** Confirm which (if any) are approved with evidence.

## OPEN-11 / R-1 — Travel Guides page
- **Issue:** Blueprint IA includes **Travel Guides `/guides/`**; v7 §17 sitemap omits it.
- **Evidence:** `sitemap.md`, `decision-log.md` R-1.
- **Recommendation:** **Defer** Guides for the initial build (v7 governs); add later if you want an SEO content hub.
- **Options:** (a) defer; (b) include now.
- **Consequences:** (a) leaner initial site; (b) more SEO surface but more content to write/verify + thin-page risk.
- **Blocks Phase B?** **No** (Guides isn't a homepage/Phase-B item).
- **Decision required:** Include or defer Guides.

## OPEN-12 — Should `docs/source-material/` be committed?
- **Issue:** It holds the internal Blueprint PDF, Build Prompt, and audit-only logo masters — internal, not for public serving; the invoice/app screenshots are deliberately **not** in it.
- **Evidence:** `asset-audit.md`, `media-inventory.md`.
- **Recommendation:** **Gitignore `docs/source-material/`** so internal spec + masters aren't committed/published; keep it local. (Modifying `.gitignore` is itself a config change to review separately — v7 §14 — so I have **not** edited it.)
- **Options:** (a) gitignore it (recommended); (b) commit it into the private repo intentionally; (c) commit only the two logo masters, ignore the PDFs.
- **Consequences:** (a) keeps internal/spec out of git; (b) puts internal spec in repo history; (c) mixed.
- **Blocks Phase B?** **No**, but must be decided **before the first commit**.
- **Decision required:** Choose (a)/(b)/(c); if (a), approve the `.gitignore` edit.

## Proposed SITEMAP (approve to lock)
- **Evidence/detail:** `sitemap.md` (adopts Blueprint SEO slugs). Home + Airport + Executive + Corporate + Events + Early-Morning + Private Trips + 4 route pages + How It Works + Download + Fleet + About (+Ride With Purpose) + Testimonials(conditional) + FAQ + Contact + Privacy + Terms. Guides = OPEN-11. Nav: 7 top-level (Services▾ · Airport · Private Routes▾ · Corporate · How It Works · About · Download App).
- **Blocks Phase B?** **Yes** (homepage links into these routes).
- **Decision required:** Approve the sitemap + slugs (and Testimonials-conditional rule).

## DESIGN SYSTEM (approve to lock)
- **Evidence/detail:** `design-system.md` — locked tokens (`#1D2B2E`/`#B8924A` screen/`#F5DDCA`/`#F4EFE6`; `#AB8A63` print-only), gold CTA uses teal text (5.04:1), cream/warm-white never on gold; type scale (fonts pending licence), spacing, cards, Motion-only, WCAG 2.2 AA.
- **Blocks Phase B?** **Yes** (header/homepage inherit it). Font family can be finalized on licence without blocking token/layout work.
- **Decision required:** Approve the design-system proposal (and note font licence as OPEN under assets).

## PERFORMANCE BUDGET (approve to lock)
- **Evidence/detail:** `performance-budget.md` — CWV good (LCP≤2.5s/INP≤200ms/CLS≤0.1); proposed transfer budgets (JS ≤~130KB, hero ≤~200KB, 0 third-party by default, etc.).
- **Blocks Phase B?** **No** (targets guide build; verified later), but approving now sets the bar.
- **Decision required:** Approve proposed budgets or adjust.

## BRANCH CREATION + FEATURE-BRANCH NAME
- **Issue:** `main` is the only branch → it is **default and production**. v7 §4 forbids committing Phase A docs to the default/production branch without explicit approval.
- **Evidence:** branch audit — `main`, clean, in sync; remote `github.com/primekar7/primekar-website`.
- **Recommendation:** Create one long-lived feature branch off `main` for the rebuild, with a separate clearly-named commit per approved phase.
- **Recommended feature-branch name:** **`rebuild/website-2026`** (alt: `rebuild/phase-a-foundation` if you prefer per-phase branches). *I will not create or switch branches until you approve.*
- **Blocks Phase B?** **Yes** — the first commit (approved Phase A docs) must land on the approved branch before Phase B work is committed.
- **Decision required:** Approve creating `rebuild/website-2026` (or name it), and confirm Phase A docs commit there (not `main`).

---

## Minimum to unblock Phase B (homepage)
Approve: **sitemap** + **design system** + **claims matrix (OPEN-3)** + **branch name/creation** + **OPEN-12 gitignore**. OPEN-1 (hosting), OPEN-2 (legal), OPEN-5 (booking), OPEN-6 (prior claims), OPEN-11 (Guides), and full asset delivery (OPEN-4/10) can be settled in parallel or at their dependent phase, with safe defaults (Blueprint content-pack copy, neutral CTAs, raster logo master, direct store links) used until then.
