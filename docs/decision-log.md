# Decision Log

Records every material user approval, rejection, or deferral. Reread at the start of every phase. Earlier entries are preserved and marked Superseded when replaced.

| ID | Date | Phase | Decision | Options considered | User-approved outcome | Affected | Status |
|---|---|---|---|---|---|---|---|
| D-001 | 2026-07-17 | Pre-A | Model workflow: Opus for audit/architecture/reviews, Sonnet for implementation | Single-model vs hybrid | Hybrid (user switched to Opus for Phase A) | All phases | Approved |
| D-002 | 2026-07-18 | A | Phase A executed as **evidence-first, partial** — evidence audits written; design/planning docs deferred | Attempt all 20 docs now vs. evidence-first per Depth Control | Pending user approval to continue Phase A (same model) | Phase A scope | **Pending** |
| D-003 | 2026-07-18 | A | Ingested **PrimeKar Website Build Blueprint (32 pp)** + Build Prompt from `~/Downloads`; copied byte-identical to `docs/source-material/` | — | User supplied files; copied unchanged, not committed | source-material, all planning docs | Done (recommend gitignoring `docs/source-material/`) |
| D-004 | 2026-07-18 | A | **v7 master spec saved** verbatim to `docs/master-spec-v7.md` (38 sections, tokens, phases verified) | — | User instruction (Phase A correction 1) | master-spec-v7.md | Done |
| D-005 | 2026-07-18 | A | **Logos relocated** byte-for-byte from `public/brand/` → `docs/source-material/assets/`; empty `public/` removed (Phase A = no `/public/` assets). App screenshots kept out of repo (audit-only) | — | User instruction (Phase A correction 2) | asset-audit.md, media-inventory.md | Done |
| D-006 | 2026-07-18 | A | **Live reference inspection completed** — 8 sites, homepage + internal page, desktop + mobile. 7 VERIFIED; **Sonder PARTIALLY VERIFIED** (CSS failed to load twice; IA readable, visual not verified) | — | User instruction (Phase A correction 3) | reference-extraction.md | Done |
| D-007 | 2026-07-18 | A | **Phase A approval packet** created with all unresolved decisions + recommended feature-branch name `rebuild/website-2026` (not created) | — | User instruction (Phase A correction 4) | phase-a-approval-packet.md | Done |

## Blueprint ↔ v7 master-spec reconciliations (surfaced, NOT silently resolved)

The Blueprint (dated 2026-07-14) predates the pasted **v7 master spec**. Per source-of-truth hierarchy (Section 37), **v7 is #1 for project implementation**; the Blueprint is an approved business/design document (#3) authoritative for content/reference patterns. Conflicts:

| ID | Blueprint says | v7 master spec says | Resolution (per hierarchy) | Needs user? |
|---|---|---|---|---|
| R-1 | IA includes **Travel Guides `/guides/`** | Section 17 sitemap **omits** Guides | v7 governs → Guides **deferred/optional** pending approval | **Yes** — approve include/defer |
| R-2 | **No** Ride With Purpose section | **Requires** Ride With Purpose (Sec 6, 18 #14) | v7 governs → **include** Ride With Purpose (Blueprint predates it) | Confirm only |
| R-3 | Homepage = **15** sections | Homepage = **16** sections (adds Ride With Purpose #14) | Reconcile to **v7's 16** | Confirm only |
| R-4 | States "PrimeKar **has live** iOS/Android apps" as baseline | Section 9 lists live apps as **requiring confirmation** | Keep **VERIFY**; Blueprint + live-site store IDs (`id6753017125`, `com.primekar.customer`) corroborate but don't finalize | **Yes** — confirm listings live |
| R-5 | Recommends `/docs/` files `reference-map.md` etc. | Section 36 lists a different doc set | **v7 doc set governs**; Blueprint content mapped into the v7 docs | No |

The Blueprint additionally provides **authoritative, adoptable** (pending approval) material now feeding the planning docs: exact SEO slugs (e.g. `/calgary-airport-transportation/`), the full per-page content pack, the 7-item desktop nav + Services/Private-Routes menus, the component-by-component reference-source map, reference influence % (Flyward 32 / Fitzroy 20 / Flighty 15 / Nelson 10 / Antaeus 10 / Raus 8 / Sonder 3 / Jesko 2), the homepage build spec (hero 45–50% text on desktop; mobile text→CTA→image; no QR above fold; one real vehicle), and the route-page template. All **operational facts in that copy remain VERIFY**.

## New open items

| Ref | Item | Where |
|---|---|---|
| OPEN-10 | Logo + app-screenshot **image files** are not on disk — supply real files for `/public/brand/` + `/public/app/` | `asset-audit.md`, `missing-assets.md` |
| OPEN-11 | Approve/deferral of the **Travel Guides** page (R-1) | `sitemap.md` |
| OPEN-12 | Approve gitignoring `docs/source-material/` (internal spec + logo masters) | `.gitignore` |
| OPEN-13 | **Sonder reassignment** — route "web→app handoff" visual evidence to Flighty (Sonder CSS un-renderable in this browser) | `reference-extraction.md` |

All 13 OPEN items are consolidated with full options/consequences in **`phase-a-approval-packet.md`**.

## Open items requiring user decision (surfaced in Phase A evidence)

These are **not yet decided** — logged so they are not lost:

| Ref | Item | Where |
|---|---|---|
| OPEN-1 | Hosting: move off GitHub Pages to a Node host (enables redirects, security headers, `next/image`, app-association files)? | `deployment-audit.md`, `redirect-map.md` |
| OPEN-2 | Legal booking-method conflict (app-only vs dispatch/phone) — L-1 | `legal-content-audit.md` |
| OPEN-3 | Claims matrix: approve status for every current-site claim (all Pending) | `current-site-audit.md` |
| OPEN-4 | Supply in-repo brand assets + clean approved app screenshots | `asset-audit.md`, `missing-assets.md` |
| OPEN-5 | Confirm store product pages live; provide booking destination + app-link signing evidence | `cta-map.md` |
| OPEN-6 | Classify the Section 9 unresolved prior claims (Jan-2026 launch, Edmonton/Lethbridge service, fixed pricing, live apps, "Calgary's first," zero cancellations) | see chat summary |
| OPEN-7 | Approve final sitemap / IA before implementation | `sitemap.md` (to be created) |
| OPEN-8 | Approve design system (`design-system.md`) and performance budget (`performance-budget.md`) | to be created |
| OPEN-9 | Branch: create feature branch before first commit (main is default+production) | `branch` audit, Section 4 |

## Phase A approval — 2026-07-18

User approved Phase A (all items in `phase-a-approval-packet.md`) with the specific decisions below. Superseding entries reference the earlier open item they resolve.

| ID | Date | Phase | Decision | Options considered | User-approved outcome | Affected | Status |
|---|---|---|---|---|---|---|---|
| D-008 | 2026-07-18 | A→B gate | **OPEN-1 hosting** — design for a Node-capable Next.js deployment, not static GitHub Pages | (a) Vercel/Netlify/Cloudflare; (b) stay GitHub Pages static export | (a) approved for design purposes only. **Provider selection deferred** — no deploy, DNS, paid-plan, or production hosting change yet | `deployment-audit.md`, `redirect-map.md`, `security-baseline.md`, Phase G/J | Approved (partial — provider TBD later) |
| D-009 | 2026-07-18 | A→B gate | **OPEN-2 legal booking-method conflict** — do not rewrite Privacy Policy or Terms; for new marketing copy, individual rides are pre-scheduled via the app; phone/email referenced only for corporate coordination, inquiries and support; no immediate-telephone-dispatch messaging | (a) confirm app-only; (b) confirm app+phone/dispatch; (c) defer, preserve legal verbatim, neutral CTAs | (c) with the specific marketing-copy rule above. L-1…L-6 remain **unresolved**, documented for separate legal review | `legal-content-audit.md` (L-1), `cta-map.md`, homepage/route CTA copy | Approved (legal conflict itself still deferred) |
| D-010 | 2026-07-18 | A→B gate | **OPEN-3 current-site claims matrix** — approve conservative recommendations; remove/defer all unsupported marketing claims (Always On Time, punctuality guaranteed, book in seconds/instant booking, VIP service, licensed & insured, screened/trained/experienced/discreet/professional driver claims, vehicle-maintenance claims, flight tracking, fixed-price claims, zero cancellations, "Calgary's first," unsupported ratings/stats/guarantees/awards); PrimeKar remains premium pre-scheduled only | (a) accept per-row recommendations; (b) amend rows; (c) supply evidence to upgrade specific rows | (a) approved in full per the list above. No claim publishes until separately verified and approved | `current-site-audit.md` (all 17 rows), all homepage/service-page copy | Approved |
| D-011 | 2026-07-18 | A→B gate | **OPEN-4/10 assets** — approve the two audited logo files (`primekar-logo-dark.jpg`, `primekar-logo-light.png`) for future website use, unmodified/un-redrawn/un-recoloured. Clean app screenshots, SVG logos, fleet and destination photography remain outstanding and must not be fabricated; they do not block branch creation or Phase A doc approval. Current app screenshots stay non-public | (a) supply now; (b) supply per-section; (c) proceed with raster masters + text-only placeholders | (c), with the two raster logos explicitly approved as interim masters | `asset-audit.md`, `media-inventory.md`, `missing-assets.md`, Phase B logo chrome | Approved (partial — SVG/screenshots/photography still outstanding) |
| D-012 | 2026-07-18 | A→B gate | **OPEN-5 store links, booking, app links** — verify direct live App Store/Google Play product-page URLs before implementing download CTAs; use both official badges on `/download-app` once verified; no Universal Links/Android App Links/smart links/deep links until identifiers, association files and signing evidence are supplied and verified; no fake booking engine | (a) confirm store links + provide booking destination; (b) provide app-link signing evidence; (c) direct-store-links only for now | (c) direct-store-links-only approach approved as the interim rule; store URLs (`id6753017125`, `com.primekar.customer`) still require verification before CTA implementation | `cta-map.md`, `/download-app` page (Phase F) | Approved (verification step still required pre-implementation) |
| D-013 | 2026-07-18 | A→B gate | **OPEN-6 prior business claims** — use conservative classification already recorded (see Section 9 table below); January 2026 launch, Edmonton, Lethbridge, fixed pricing, "Calgary's first," zero cancellations all deferred until separately verified; live iOS/Android apps may be approved only after the direct store listings are verified | (a) accept defaults; (b) supply evidence per claim; (c) narrower wording | (a) accepted in full | `decision-log.md` §9 table, `current-site-audit.md` row 17, `cta-map.md` | Approved |
| D-014 | 2026-07-18 | A→B gate | **OPEN-11/R-1 Travel Guides** — defer `/guides/`; prioritize core service pages, route pages, app-download page, About, Contact, Fleet, FAQ, legal pages; Guides reconsidered after core site is complete | (a) defer; (b) include now | (a) defer | `sitemap.md`, Phase B–F scope | Approved |
| D-015 | 2026-07-18 | A→B gate | **OPEN-12 source material** — approve adding `docs/source-material/` to `.gitignore`; do not commit blueprint PDF, build-prompt source file, audit-only logo masters, audit-only screenshots, or other private source material; approved master spec and derived Phase A Markdown docs may be committed | (a) gitignore it; (b) commit it; (c) commit only the two logo masters | (a) approved | `.gitignore`, first commit staging | Approved / Done — `.gitignore` updated |
| D-016 | 2026-07-18 | A→B gate | **OPEN-13 Sonder** — accept Sonder as PARTIALLY VERIFIED; stop troubleshooting its CSS; use Flighty as the primary reference for website-to-app handoff/app conversion; use Sonder only for the already-recorded readable-conversion and property-card observations | (a) keep troubleshooting; (b) accept partial + reassign to Flighty | (b) approved | `reference-extraction.md` | Approved |
| D-017 | 2026-07-18 | A→B gate | **Phase A plans** — approve the proposed sitemap, design system and performance budget as the working Phase B baseline, subject to the approved Opus review phases in the master spec | (a) approve as baseline; (b) amend before locking | (a) approved as working baseline (not final/immutable) | `sitemap.md`, `design-system.md`, `performance-budget.md` | Approved (baseline, subject to review phases) |
| D-018 | 2026-07-18 | A→B gate (Branch Policy, §4) | **Branch** — create and switch to `feature/primekar-rebuild` (supersedes the recommended-but-unused name `rebuild/website-2026` in `phase-a-approval-packet.md`); do not commit directly to `main` | `rebuild/website-2026` (recommended, not created) vs. `feature/primekar-rebuild` (user-specified) | `feature/primekar-rebuild` created off `main`; all untracked Phase A docs preserved in the working tree | branch policy, first commit | Done — branch created, currently checked out |

**Resolves / updates from the "Open items requiring user decision" and "New open items" tables above:** OPEN-1 through OPEN-6, OPEN-9 (branch), OPEN-10, OPEN-11, OPEN-12, OPEN-13 now have recorded outcomes per D-008–D-018. OPEN-7 (final sitemap) and OPEN-8 (design system + performance budget) are approved as the Phase B **working baseline** per D-017, not yet final/locked. Superseded/still-open sub-items (SVG logo, clean app screenshots, fleet/destination photography, font licence, store-URL verification, app-link signing evidence, L-1…L-6 legal conflict, hosting-provider selection) remain open and are **not** resolved by this approval — see the relevant source document for each.

## Section 9 unresolved-prior-claims classification (approved 2026-07-18 — see D-013)

| Claim | Recommended classification |
|---|---|
| Launched January 2026 | **Unsupported** until dated evidence supplied — do not publish |
| Serves Edmonton | **Not approved for public use** — no evidence; contradicts "Calgary-based" scope |
| Serves Lethbridge | **Not approved for public use** — same |
| Offers fixed pricing | **Unsupported** — appears in legacy app screenshot ("YYC FIXED FARE") only; no verified web policy; do not publish |
| Live iOS + Android apps | **Accurate but requires verification** — store links exist in site source (`id6753017125`, `com.primekar.customer`); confirm listings live before claiming |
| Calgary's **first** local app-based premium ride service | **Unsupported / high-risk superlative** — do not publish without proof |
| Zero cancellations | **Not approved — high-risk absolute claim** — do not publish (Section 9) |
