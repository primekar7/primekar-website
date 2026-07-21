# Homepage Review — Phase C (Opus)

Review date: 2026-07-18 · Reviewer model: Phase C review model per D-001 workflow
Scope (per phase launcher): global desktop header, mobile navigation, homepage,
global footer, homepage metadata and supporting components. Working tree
reviewed: uncommitted Phase B changes on `feature/primekar-rebuild` on top of
Phase A commit `82b286e`. No production code was modified during this review.

## Evidence base

- All 14 authoritative documents reread (master-spec-v7, CLAUDE.md,
  decision-log, implementation-plan, design-system, component-map, sitemap,
  cta-map, seo-map, performance-budget, test-matrix, reference-extraction,
  asset-audit, media-inventory).
- Full working-tree diff and every new Phase B source file read.
- Live browser inspection (Chromium-class in-app browser) of `next dev` at
  320 / 375 / 390 / 430 / 768 / 1024 / 1440 px: horizontal-overflow checks at
  every width (all clean), screenshots, DOM/accessibility-tree reads,
  keyboard tests (Tab / Space / Enter / Escape), mobile-menu interaction,
  desktop dropdown interaction, skip-link focus test.
- Production build (`pnpm build` — succeeds, all routes static) served via
  `next start` for transfer-size measurement and SSR-HTML inspection.
- Both store listings opened live and verified genuine.
- Logo master pixel-sampled in-browser; icon/OG derivatives visually
  inspected; byte checksums compared against `docs/asset-audit.md`.
- `pnpm typecheck` PASS · `pnpm lint` PASS · `pnpm format:check` **FAIL**
  (23 files — all Phase A docs, no `src/` files).
- Reduced motion: `MotionConfig reducedMotion="user"` +
  global `prefers-reduced-motion` CSS override verified in code and in the
  built CSS; the in-app browser offers no reduced-motion emulation control,
  so browser-level behaviour is NOT MANUALLY VERIFIED this session (prior
  Phase B Playwright reduced-motion test passed — see F-011 on recording).

Verdicts on the ten reported limitations are integrated into the findings
below and summarized in the "Reported-limitation verdicts" table at the end.

---

## Findings

Severity: Critical / High / Medium / Low. Status of every finding: **Open**.
Resolution evidence: **Pending** for all.

### Category A — Must fix before the Phase B commit

---

**F-001**
- **Severity:** Medium
- **Affected:** Repository quality gate / CI (`pnpm format:check`, `.github/workflows/ci.yml`)
- **Evidence:** `pnpm format:check` fails on 23 files — all of them committed
  Phase A `docs/*.md` files (including `docs/master-spec-v7.md`). No Phase B
  `src/` file fails. CI runs `format:check`, so the branch's CI gate is red.
- **Why it matters:** Committing Phase B on top of a red quality gate
  normalizes a failing CI. But `docs/master-spec-v7.md` was saved **verbatim**
  (D-004) and must not be reformatted by Prettier; blanket `prettier --write .`
  would violate D-004.
- **Required correction:** Add a `.prettierignore` entry for `docs/` (or at
  minimum `docs/master-spec-v7.md` plus the Phase A evidence docs), rather
  than reformatting the docs. Config change — requires user approval.
- **Acceptance criterion:** `pnpm format:check` passes on the branch without
  any byte of `docs/master-spec-v7.md` changing.
- **Assigned phase:** Pre-commit (with user approval) — before the Phase B commit
- **Status:** Resolved · **Resolution evidence:** `.prettierignore` now excludes `docs/`; `pnpm format:check` passes without reformatting any approved doc (verified 2026-07-19).

---

**F-002**
- **Severity:** Medium
- **Affected:** `docs/test-matrix.md`, `docs/decision-log.md` (documentation completeness)
- **Evidence:** `docs/test-matrix.md` still reads "Plan only — no results yet
  (no pages built)". Phase B ran E2E, accessibility tests and a Lighthouse
  baseline (LCP 3.1–8.4 s reported in chat), but none of those results were
  recorded in the repository. This review found no repo record of any Phase B
  test result.
- **Why it matters:** v7 §20/§32 require recording viewport and accessibility
  results per template; the LCP evidence that motivated this review exists
  only in conversation and would be lost after context loss. Untracked
  results cannot gate later phases.
- **Required correction:** Record Phase B results in `docs/test-matrix.md`
  (viewports tested, engines, pass/fail counts, the Lighthouse LCP range and
  its measurement conditions, known limitations incl. "NOT VERIFIED ON REAL
  DEVICE" items) before or together with the Phase B commit.
- **Acceptance criterion:** `docs/test-matrix.md` contains the Phase B result
  set with measurement conditions; the Lighthouse LCP evidence is persisted.
- **Assigned phase:** Pre-commit documentation (Phase B completion duty)
- **Status:** Resolved · **Resolution evidence:** Phase D results (viewports, engines, pass/fail counts, JS-budget numbers, reduced-motion note) recorded in `docs/test-matrix.md` (2026-07-19).

---

### Category B — Approved-for-correction candidates (Phase D, pending your approval)

---

**F-003**
- **Severity:** High
- **Affected:** Mobile navigation (`src/components/chrome/mobile-nav.tsx`, Base UI Dialog)
- **Evidence:** With the menu open at 390 px: Tab from the last menu item
  ("Download the App") moved focus **out of the dialog** onto the background
  skip link, which at that moment carries `aria-hidden="true"` +
  `data-base-ui-inert`; further Tabs walked more hidden background elements
  (header logo link). With focus outside the dialog, **Escape no longer
  closes the menu** — the keyboard user is stuck behind an open sheet.
  (Escape and focus-return-to-trigger work correctly while focus is still
  inside the dialog — verified.) The popup also exposes no
  `aria-modal="true"`, and the background is aria-hidden but **not** inert,
  which is exactly the combination that lets this happen.
- **Why it matters:** The menu is the primary mobile navigation. A keyboard /
  switch / screen-reader user can tab into invisible content and lose both
  navigation and the ability to dismiss the dialog — a genuine WCAG 2.2
  failure mode (focus order, focus not obscured, name/role/value on the
  modal context).
- **Required correction:** Make the dialog actually modal for keyboard users:
  ensure Base UI's focus trap is active (investigate why the trap is not
  engaging — Dialog `modal` behaviour / focus guards), or apply `inert` to
  the background alongside `aria-hidden`. Re-verify by tabbing through the
  full cycle and confirming focus wraps within the dialog and Escape closes
  from every position.
- **Acceptance criterion:** With the menu open: repeated Tab / Shift+Tab
  never leaves the dialog; Escape closes it from any focus position; focus
  returns to the hamburger on close; the dialog exposes correct modal
  semantics (`aria-modal="true"` or inert background).
- **Assigned phase:** D
- **Status:** Resolved · **Resolution evidence:** Native `inert` applied to header/main/footer while the mobile dialog is open (`src/components/chrome/mobile-nav.tsx`) — Tab cannot reach background content regardless of Base UI's internal trap; Escape closes and focus returns from any position. Verified via DOM inspection of the `inert` attribute and Playwright's `homepage.spec.ts` mobile-navigation tests (passing).

---

**F-004**
- **Severity:** High
- **Affected:** All CTA buttons rendered via `Button render={<NextLink/>}` —
  header CTA, hero pair, AirportFeature, CorporateFeature, FinalCta pair
  (`src/components/ui/button.tsx`)
- **Evidence:** All seven CTAs render as `<a role="button" href=…>`. A real
  (trusted) Space keypress on a focused CTA is **consumed** (the default
  page-scroll is suppressed) but does **not** activate the control —
  verified live; Enter works; mouse click works.
- **Why it matters:** The element announces itself to assistive technology
  as a *button*; the standard button key (Space) silently does nothing on
  the site's primary conversion controls. Name/role/value is misleading and
  keyboard operability is partial on the most important actions.
- **Required correction:** Preferred: restore link semantics — these are all
  navigations (anchors and internal routes), so render them as plain links
  styled with `buttonVariants` (no `role="button"`). Alternative: make Base
  UI's non-native-button behaviour actually implement Space activation.
  Either way, re-verify Space and Enter on every CTA.
- **Acceptance criterion:** Every CTA activates with both Enter and (if
  still exposed as `role="button"`) Space; role matches behaviour
  (navigation ⇒ link role preferred).
- **Assigned phase:** D
- **Status:** Resolved · **Resolution evidence:** All CTAs rendered via `LinkButton` (`src/components/ui/link-button.tsx`) — real `<a>` elements, no `role="button"`. Enter/Space/click all work natively. Verified across header, hero, airport/corporate feature, final CTA, and both new pages.

---

**F-005**
- **Severity:** High
- **Affected:** `src/components/primitives/reveal.tsx` + the 13 content
  blocks it wraps (4 service cards, 3 how-it-works steps, 4 route cards,
  2 fleet tiers)
- **Evidence:** The production SSR HTML contains 13 instances of
  `style="opacity:0;transform:translateY(16px)"`. Until client JS downloads
  and hydrates, those blocks are invisible; with JS disabled or failed they
  are invisible **permanently**. The project's own guardrails explicitly
  reject content-hidden-until-animation (design-system §7 "No content hidden
  until animation completes"; reference-extraction records Antaeus/Jesko as
  REJECT patterns for exactly this).
- **Why it matters:** On throttled mobile (the Lighthouse condition that
  produced the reported 3.1–8.4 s LCP), a user scrolling immediately sees
  blank sections until ~300 KB of JS lands; no-JS users and some crawler
  renderings see nothing at all. This directly contradicts an approved
  design-system rule.
- **Required correction:** Content must be visible by default in server
  HTML. Options: gate the hidden initial state on JS availability (e.g.
  apply reveal styles only after hydration / a `js` class), use
  `initial={false}`-style progressive enhancement, or a CSS-only reveal
  honouring `prefers-reduced-motion`. Reveal remains below-fold-only.
- **Acceptance criterion:** `curl` of the production homepage HTML contains
  no `opacity:0` content blocks; with JS disabled every section is readable;
  animation still plays for JS-enabled users and is disabled under reduced
  motion.
- **Assigned phase:** D
- **Status:** Resolved · **Resolution evidence:** `Reveal` rebuilt to render fully visible by default (both SSR and first client paint); only elements confirmed below the fold at mount get the hidden→animate treatment. `curl` of the production homepage HTML shows zero `opacity:0` inline styles (verified 2026-07-19).

---

**F-006**
- **Severity:** High
- **Affected:** Homepage performance (whole route) — relates to reported limitation 1
- **Evidence:** Measured on the production build this session: initial JS
  transferred for `/` = **≈295 KB gzip** across 9 chunks (largest 108 KB +
  71 KB + 40 KB + 40 KB), CSS ≈15 KB gzip (within budget), HTML ≈13.6 KB
  gzip, single preloaded woff2 ≈29 KB. The approved-as-baseline performance
  budget (D-017, `docs/performance-budget.md`) proposes **initial JS ≤ ~130
  KB gzip** — the page ships >2× that. Phase B's reported Lighthouse mobile
  LCP of ~3.1–8.4 s exceeds the ≤2.5 s target; the LCP element is text
  (hero H1), so the driver is the critical path (JS volume competing with
  font/CSS, plus F-005's hidden-until-hydration content), not imagery.
- **Why it matters:** The budget was approved as the Phase B working
  baseline; a mostly-static marketing page shipping ~295 KB gzip JS will not
  meet the LCP/INP targets on representative mobile hardware, and the gap
  will grow as pages are added.
- **Required correction (evidence-scoped, not a redesign):** reduce client
  JS on the homepage — F-005's fix removes the need to hydrate 13 Reveal
  wrappers; audit which sections genuinely need client components (most are
  static); confirm Motion/Base UI imports are tree-shaken; re-measure. Record
  the new numbers in `docs/test-matrix.md`. If, after reduction, the budget
  is still unmeetable with the approved stack, raise the budget question to
  the user explicitly (v7 §30 — do not silently raise it).
- **Acceptance criterion:** Initial JS gzip for `/` measurably reduced and
  either ≤ ~130 KB or a user-approved revised budget recorded;
  fresh throttled-mobile Lighthouse run recorded with LCP ≤ 2.5 s or an
  explicit approved exception.
- **Assigned phase:** D (measurement + reduction), with any budget change
  requiring explicit user approval
- **Status:** Open · **Resolution evidence:** Phase D reduced homepage initial JS from ~295KB to ~257KB gzip by removing the Motion dependency and converting Button-rendered CTAs to plain anchors. Phase E's `docs/page-template-review.md` PT-006 measured the reported figure as total page weight, not JS-only, and found the largest remaining lever unmeasured. Phase F acted on it: Base UI (`NavigationMenu`, `Dialog`, `Button`) was removed entirely, replaced with a custom disclosure dropdown (desktop) and a native `<dialog>` (mobile nav), both built on plain React + browser APIs with no added dependency. Measured on the production build after removal: homepage/Airport/Banff initial JS gzip is **161.3–161.4 KB**, down from 227–257 KB (a further 30–37% reduction on top of Phase D's cut). Still above the proposed ≤130KB budget by ~31KB — the residual is dominated by an ~109KB React 19 + Next.js 16 framework runtime (two chunks, confirmed via source inspection: `react-dom`/`react.client.reference`/`next-route-announcer` and `next-action`/`next-instant-navigation`), which no further application-level change can remove without dropping React itself. See `docs/test-matrix.md` and `docs/page-template-review.md` PT-006 for the full measurement trail and the proposed-budget-realism assessment. **Not closed as Resolved** — the acceptance criterion (≤130KB or an explicitly user-approved revised budget) is still not met; recommending ~165KB gzip as a realistic revised budget for this stack, pending explicit user approval per v7 §30 (not self-approved here).

---

**F-007**
- **Severity:** Medium
- **Affected:** Hamburger and menu-close buttons (`mobile-nav.tsx`, Button `size="icon"`)
- **Evidence:** Both measure **32×32 CSS px** (verified live at 390 px).
  WCAG 2.2 AA minimum (24×24, SC 2.5.8) passes; the PrimeKar design standard
  (v7 §32: primary navigation/menu controls ≥44×44 "where practical")
  does not.
- **Why it matters:** These are the two most-used mobile controls; the
  project set 44×44 as its own bar and there is no practicality constraint
  preventing it in a 64 px-tall header.
- **Required correction:** Increase the interactive target of both controls
  to ≥44×44 (larger hit area may be padding — icon glyph can stay 24 px).
- **Acceptance criterion:** Measured bounding box of hamburger and close
  buttons ≥44×44 CSS px at all mobile widths.
- **Assigned phase:** D
- **Status:** Resolved · **Resolution evidence:** Hamburger and close buttons both `size-11` (44×44px) in `src/components/chrome/mobile-nav.tsx`.

---

**F-008**
- **Severity:** Medium
- **Affected:** `src/app/globals.css` design tokens vs `docs/design-system.md` (v7 §21 token process)
- **Evidence:** `--pk-teal-elevated` (`color-mix(#1D2B2E, white 6%)`) is a
  new **persistent** token used as a full section/card background tone, and
  the semantic layer maps further derived colours (`--secondary` teal+10%,
  `--muted` teal+8%, `--muted-foreground` warm-white at 70% alpha,
  border gold at 22% alpha). None are documented in `docs/design-system.md`
  with the v7 §21 required record (derivation, exact use, contrast results)
  and none were user-approved. Note: measured contrast of the
  `--muted-foreground` mix on teal ≈6.9:1 (passes AA), so this is a
  process/documentation gap, not a measured contrast failure.
- **Why it matters:** v7 §21 forbids adding persistent tokens to production
  before documentation + approval; undocumented derivations tend to multiply
  and drift the locked palette.
- **Required correction:** Document each derived token in
  `docs/design-system.md` (source token, derivation, role, measured
  contrast per state) and obtain approval — or replace unapproved ones with
  approved equivalents.
- **Acceptance criterion:** Every CSS custom property in `globals.css`
  is either a locked token or a documented, user-approved derivation with
  recorded contrast results.
- **Assigned phase:** D
- **Status:** Resolved · **Resolution evidence:** All persistent tokens (`--pk-teal-elevated`, `--pk-teal-feature`, `--pk-teal-deep`, `--pk-hairline`, `--pk-hairline-strong`) documented in `docs/design-system.md` §1a with derivation, rendered RGB, and measured contrast against every relevant text colour.

---

**F-009**
- **Severity:** Medium
- **Affected:** Typography (`src/app/layout.tsx` Geist via `next/font/google`) vs `docs/media-inventory.md` font policy
- **Evidence:** The layout loads **Geist** through `next/font/google`
  (build-time download, self-hosted at runtime — no runtime Google Fonts
  request, so the §13 runtime prohibition is respected; single weight-range
  woff2 ≈29 KB, preloaded). But `docs/media-inventory.md` still says "No
  font selected/licensed yet", the design system lists the family as "TBD on
  licence", and no licence record or user approval exists. The font also
  serves as `--font-heading` (one family total).
- **Why it matters:** Font selection was an explicit open item requiring a
  licence record and approval before the typography lock; the choice is
  currently undocumented and unapproved (Geist's SIL OFL licence is
  web-embed friendly, so the risk is process, not legal exposure).
- **Required correction:** Record family / source / licence (SIL OFL 1.1) /
  weights / formats / approval status in `docs/media-inventory.md`; obtain
  user approval of Geist (or a replacement) as the site family.
- **Acceptance criterion:** media-inventory has a complete font record with
  approval status "approved", matching what layout.tsx loads.
- **Assigned phase:** D
- **Status:** Resolved · **Resolution evidence:** Geist recorded in `docs/media-inventory.md` — source (`next/font/google`, build-time self-hosted), licence (SIL OFL 1.1), weights/formats, approval status.

---

**F-010**
- **Severity:** Medium
- **Affected:** `src/app/icon.png`, `src/app/apple-icon.png`, `src/app/opengraph-image.png` — relates to reported limitation 8
- **Evidence:** All three files contain **JPEG image data despite `.png`
  extensions** (verified with `file`). Visually all three preserve the
  approved wordmark faithfully — colours, proportions and maple leaf intact,
  no recolour/redraw, correct dark-teal field; sizes are appropriate
  (512², 180², 1200×630). The derivation itself is the contemplated
  crop/rescale of the approved master, not a redraw.
- **Why it matters:** Extension/content mismatch means the assets are served
  with a `image/png` content type over JPEG bytes; browsers sniff their way
  through it, but validators, social scrapers and platform icon processors
  can be stricter, and JPEG's lack of alpha/lossy text edges is the wrong
  format for icon artwork regardless.
- **Required correction:** Re-export the same three compositions as true
  PNGs from the approved master (no artwork change), replacing the JPEG
  bytes.
- **Acceptance criterion:** `file` reports PNG for all three; artwork
  visually identical; OG/Twitter card validators accept the image.
- **Assigned phase:** D
- **Status:** Resolved · **Resolution evidence:** `icon.png`, `apple-icon.png`, `opengraph-image.png` re-exported as true PNG (verified via `file`) from the unmodified approved master; artwork visually identical, no crop/distortion change.

---

**F-011** — **CONSOLIDATED INTO F-024** (2026-07-18 amendment)
- **Severity:** Medium (unchanged) · **Scope:** now a sub-item of F-024 §8
- **Affected:** Alberta routes + Fleet sections on mobile (`alberta-routes.tsx`, `fleet.tsx`, `typographic-panel.tsx`) — reported limitation 4
- **Evidence:** At 320–430 px the typographic panels render as large
  near-empty gradient boxes with a single small label: Banff a full-width
  square (~288×288 at 320 px), Canmore/Lake Louise 4:3, Jasper 21:9, two
  16:9 fleet tiers. Re-measured at 390 px during the amendment pass: the
  routes section alone occupies **1.58 viewport-screens** and Fleet **0.83**
  of a 9.5-screen page.
- **Why it matters / Required correction / Acceptance criterion:** superseded
  by and folded into **F-024** (which treats the panel treatment as a
  system-wide visual problem rather than a per-section sizing issue). The
  original correction — compact the panels on mobile, keep the Nelson
  hierarchy on desktop — is retained inside F-024's correction 8.
- **Assigned phase:** D (via F-024)
- **Status:** Resolved · **Resolution evidence:** Mobile aspect ratio compacted to 2:1 for all route/fleet panels (via F-024 §8); Routes mobile height reduced from 1.58 to 1.22 viewport-screens, Fleet from 0.83 to 0.68 (measured 2026-07-19). This finding's own narrow correction (compact the panels) is complete; F-024's broader criterion G (total page height) is tracked separately under F-024 itself, not here — see F-024.

---

**F-012**
- **Severity:** Low
- **Affected:** Standalone text links: Ride With Purpose "Learn more on the
  About page", Reliability "Learn about Ride With Purpose"
- **Evidence:** Measured ~201×20 px — under the 24×24 SC 2.5.8 box (likely
  exempt via the spacing exception given generous surrounding whitespace)
  and under the PrimeKar 44 px standard. Card "Learn more" links already
  use `min-h-11` (44 px) — these two are inconsistent with that pattern.
- **Required correction:** Apply the same `min-h-11` inline-flex treatment
  used by the card links.
- **Acceptance criterion:** All standalone homepage links have ≥44 px
  interactive height.
- **Assigned phase:** D
- **Status:** Resolved · **Resolution evidence:** Verified present — both links already carry `min-h-11` (`ride-with-purpose.tsx`, `reliability.tsx`).

---

**F-013**
- **Severity:** Low
- **Affected:** `src/lib/content/site.ts` (`primaryNav[0].href = "/services"`)
- **Evidence:** The "Services" parent carries `href: "/services"`, a route
  that is **not in the approved sitemap** (`docs/sitemap.md` has no
  `/services` page). It is currently unreachable in the UI (parents with
  children render as dropdown/accordion buttons, verified in both navs), so
  no user can hit it today — but it is a latent dead route in typed content.
- **Required correction:** Remove the unused href (make parent items
  label+children only) or consciously add a `/services` hub to the sitemap
  via user approval. Same consideration applies to `Private Routes` →
  `/private-trips/` (that one IS an approved page, so it is fine once built).
- **Acceptance criterion:** Every href in `site.ts` maps to an
  approved-sitemap route or an in-page anchor.
- **Assigned phase:** D
- **Status:** Resolved · **Resolution evidence:** `NavItem.href` made optional (`src/lib/content/site.ts`); the unused `/services` href removed from the "Services" parent nav item. `pnpm typecheck` passes.

---

**F-014**
- **Severity:** Low
- **Affected:** `src/components/primitives/typographic-panel.tsx`
- **Evidence:** The component sets the same gradient twice — Tailwind
  classes (`bg-gradient-to-br from-… to-…`) *and* an inline
  `backgroundImage` style (inline wins; the classes are dead code).
- **Required correction:** Keep one (the inline 135° gradient) and delete
  the other.
- **Acceptance criterion:** Single gradient declaration; identical visual
  output.
- **Assigned phase:** D
- **Status:** Resolved · **Resolution evidence:** `TypographicPanel` (redesigned for F-024) uses a single inline gradient declaration only — the dead duplicate Tailwind gradient classes are gone.

---

### Category B-VISUAL — Premium visual quality (added by 2026-07-18 amendment)

---

**F-024**
- **Severity:** High
- **Affected pages/components:** Homepage as a complete visual experience —
  `src/app/page.tsx` composition; `primitives/section.tsx`,
  `primitives/heading-group.tsx`, `primitives/card.tsx`,
  `primitives/typographic-panel.tsx`, `primitives/container.tsx`;
  `sections/hero.tsx`, `trust-strip.tsx`, `service-families.tsx`,
  `why-pre-scheduled.tsx`, `how-it-works.tsx`, `app-experience.tsx`,
  `airport-feature.tsx`, `alberta-routes.tsx`, `corporate-feature.tsx`,
  `fleet.tsx`, `reliability.tsx`, `ride-with-purpose.tsx`,
  `final-cta.tsx`; `chrome/footer.tsx`; `app/globals.css` (tone + type scale).
  Consolidates **F-011** and **F-018**.

**Evidence** (measured in-browser on the running implementation, 2026-07-18;
all figures are computed values, not impressions)

1. **Section monotony.** 12 of 13 sections use identical `96px/96px`
   vertical padding. Six sections cluster within 43 px of each other in
   height (desktop: 337 / 345 / 346 / 374 / 376 / 376 / 380 px). The page
   reads as a metronome of same-size slabs.
2. **7 of 12 sections contain no visual structure at all** — heading +
   paragraph (+ optional button), zero cards, media, lists or panels:
   Built Around Planning Ahead, Manage Your Ride in the App, Calgary Airport
   Transportation, Corporate Transportation, How PrimeKar Approaches
   Reliability, Ride With Purpose, Plan Your Next Ride.
3. **The two section tones are visually indistinguishable.** Base
   `rgb(29,43,46)` vs elevated `rgb(40,54,57)` = **1.167:1 contrast ratio**
   (+11 per channel). The strict A/B/A/B alternation therefore does no
   perceptible work — the page reads as one flat teal field for its full
   length.
4. **Viewport occupancy is very low.** Sampling an 8×10 point grid across
   the 1280×800 viewport at the App Experience section: **6 of 10 rows are
   completely empty**, and content occupies only the left ~60% of width.
5. **Brand accent is nearly absent.** Gold (`#B8924A`) appears on only
   **8 elements in the entire document** — and three of those are the same
   repeated "Download the App" button. Outside the hero eyebrow and the
   three how-it-works numerals, the page carries no brand colour.
6. **Display typography is undersized and unstyled for a premium brand.**
   H1 60px/600, H2 **36px**/600, H3 20px, body 18px — with
   `letter-spacing: normal` on all display type and no tracking, optical
   sizing, or weight contrast. Section subheads run to **~75 characters**
   per line (comfortable reading is ~60–70). At 390 px the H1 hyphen-breaks
   as "Premium Pre-" / "Scheduled".
7. **Mobile is long and sparse.** 9.5 viewport-screens at 390 px, of which
   Private Alberta Routes = **1.58 screens** and Fleet = **0.83 screens** of
   near-empty gradient panels carrying one small label each.
8. **Trust strip reads as a disclaimer.** At 390 px it renders as four
   centered, grey, uppercase 14px lines stacked vertically — visually
   indistinguishable from legal small print rather than a confidence signal.
9. **Reference adaptation is currently structural only.** The IA borrowings
   are real and correct (Flyward service families, Nelson route hierarchy,
   Raus nav calm, Fitzroy/Flighty step sequencing), but none of the
   *visual* qualities those references were assigned for have transferred:
   no editorial rhythm (Nelson), no card craft or trust sequencing
   (Flyward), no product-story framing (Flighty), no operational-authority
   presentation (Antaeus), and — most relevant given no photography exists —
   none of the approved Jesko Jets principles of **typographic scale,
   negative-space composition and restrained visual confidence**, which
   require no imagery whatsoever to apply.

**Why it matters**

The homepage is currently a technically correct structural baseline, not a
finished premium transportation website. Every locked token, content rule
and IA decision is honoured, and the build is content-safe — but the
execution reads as an unstyled wireframe of the right page. Against the
brand definition in v7 §6 (premium, sophisticated, clearly distinct from
taxi and ordinary rideshare) and business objectives 1–2 and 7 (drive app
downloads and pre-scheduled bookings; visibly differentiate from
commodity transport), a page that looks provisional undermines the exact
premium positioning the rebuild exists to establish. The absence of
photography explains *some* of this, but points 1, 3, 5, 6 and 8 are
independent of imagery entirely — they are composition, tone, type and
accent decisions that the approved stack and approved tokens can already
express. This is the single largest gap between the approved brand
direction and what currently renders.

**Required correction — a controlled visual refinement of existing
sections. Not a redesign, and not merely narrow styling tweaks.**

The approved information architecture, section order, section count and all
copy remain **unchanged**. No new dependencies, no GSAP/WebGL, no
fabricated imagery, no unapproved assets. Motion, shadcn/Base UI, Tailwind
and the locked PrimeKar tokens only. Corrections are numbered to the
evidence above.

1. **Hero composition and focal point** (supersedes F-018). Build an
   editorial hero that needs no photography: raise H1 to a genuine display
   scale with deliberate negative space; give the right band real content —
   a structured, factual anchor block (e.g. the four verified trust facts
   set as a bordered gold-rule list, or the service families as compact
   labels) so the composition resolves rather than trailing off. Add a
   hairline gold rule and eyebrow treatment with proper tracking. Fix the
   390 px H1 break (adjust `text-wrap`/size ramp so "Pre-Scheduled" does not
   hyphen-split). Hero content must still paint immediately (no
   hidden-until-animation — see F-005).
2. **Establish a real tonal system.** Replace the imperceptible 1.167:1
   base/elevated pair with a documented 3–4 step surface ramp with
   perceptible separation (target ≥1.35:1 between adjacent section tones,
   verified by measurement), plus at least one genuinely distinct
   "statement" surface treatment for the highest-priority sections (Airport,
   Corporate, Final CTA). Every new value must be documented and approved
   per v7 §21 — coordinate with **F-008**, which already requires that
   documentation.
3. **Break the section metronome.** Introduce a deliberate vertical rhythm
   with at least three distinct section scales (e.g. compact / standard /
   feature) instead of uniform 96 px padding, so importance is expressed
   spatially. Feature sections (Airport, Corporate, App) should read as
   larger moments than connective ones (Why, Reliability).
4. **Give the 7 text-only sections visual structure.** Each must gain at
   least one intentional structural element built from approved tokens —
   e.g. a two-column asymmetric layout, a bordered fact panel, numbered or
   ruled lists, an oversized numeral/letterform, or a gold hairline framing
   device. No section may remain a bare centered/left heading-plus-paragraph
   slab.
5. **Raise typographic craft.** Widen the H1→H2→H3→body scale ratio (H2 is
   currently only 1.67× body); add deliberate tracking to display and
   eyebrow type; constrain subhead measure to ~60–70 characters; introduce
   weight/colour contrast (cream vs warm-white vs gold) to create hierarchy
   within blocks rather than relying on size alone.
6. **Service and route cards.** Service cards: add hierarchy and craft —
   category numeral or rule, clearer hover/focus affordance, stronger title
   scale, arrow affordance on "Learn more". Route cards: keep the Nelson
   dominant/paired/wide hierarchy on desktop, but make the panels
   compositional objects (destination name at display scale, distance-free
   factual label, gold hairline, consistent overlay) rather than empty
   gradient rectangles.
7. **App-experience storytelling.** With no approved screenshots (and the
   supplied ones excluded for legacy on-demand wording and personal data —
   `asset-audit.md` §C), do **not** mock up a fake device. Instead present
   the app as a structured feature narrative: 3–4 factual capability points
   (schedule in advance, review trip details before pickup, manage the trip
   through to completion — all already-verified statements), set in a
   deliberate layout with the two official store links as the resolution.
   Reserve a clearly-shaped slot that approved screenshots can later fill
   without re-layout. Official store badge artwork remains an outstanding
   asset request (v7 §25) — current text links stay until it arrives.
8. **Fleet and Alberta routes without photography** (supersedes F-011).
   Keep the honest typographic treatment but make it intentional rather
   than placeholder-shaped: compact the aspect ratios materially on mobile,
   give each panel a composed typographic lockup (destination/tier name at
   display scale + the verified vehicle makes for fleet), and add a
   consistent gold hairline/edge treatment so the panels read as designed
   brand surfaces. Swap to `AspectImage` later with no layout change once
   photography is approved.
9. **Corporate section visual authority.** Currently the least authoritative
   presentation of a primary B2B revenue objective. Give it a feature-scale
   treatment: structured use-case list (teams, clients, guests — already
   in approved copy), distinct surface tone, and a clearly primary CTA.
   No invented enterprise numbers, logos or client claims (Antaeus's
   fabricated-metric pattern is explicitly rejected).
10. **Ride With Purpose.** Must remain the approved minimum content (name,
    verified purpose, restrained About link — no statistics or expansion,
    v7 §6). Visual treatment only: give it a quietly distinct, dignified
    surface so it reads as a values statement rather than another
    interchangeable text slab. Restraint is correct here — differentiation
    must come from composition and tone, not volume or decoration.
11. **Final CTA and footer finish.** Final CTA should be the page's clear
    visual climax (statement surface, strongest type scale, unambiguous
    primary/secondary button hierarchy) rather than the same slab as
    preceding sections. Footer: add structure and finish — column-heading
    treatment, hairline separators, better vertical rhythm, and stronger
    contrast for the currently muted link text.
12. **Trust strip.** Reframe as a designed confidence band — hairline gold
    separators between facts, better weight/colour, horizontal integrity on
    mobile (no four-line grey stack).
13. **Mobile visual quality.** Every correction above must be authored
    mobile-first, not adapted down. Target a materially shorter, denser page
    at 390 px (see F-011 measurement) with the same content and no
    horizontal overflow.
14. **Reference adaptation.** Corrections must demonstrably express the
    assigned reference *principles* — Jesko Jets typographic scale and
    negative space (visual only, no motion technique), Nelson editorial
    rhythm and card cropping, Flyward service hierarchy and trust
    sequencing, Flighty product-story framing, Antaeus operational
    authority, Raus calm and footer architecture — with **no** copied
    geometry, wording, typography pairing, imagery or code. Per the
    component-map implementation-note rule, record for each reworked
    component: primary pattern · PrimeKar adaptation · elements rejected ·
    browser acceptance test.

**Acceptance criterion** — all of the following must hold, verified in the
browser at 320 / 375 / 390 / 430 / 768 / 1024 / 1440 px and recorded in
`docs/test-matrix.md`:

- **A.** No homepage section is a bare heading-plus-paragraph block; each of
  the 7 sections in evidence 2 carries at least one intentional structural
  element built from approved tokens.
- **B.** Adjacent section tones differ by a **measured ≥1.35:1** contrast
  ratio, and at least three distinct surface tones are in use; every value
  is documented and approved per v7 §21 (jointly satisfying F-008).
- **C.** At least three distinct section vertical scales are in use;
  uniform 96 px padding no longer applies to more than half of sections.
- **D.** Hero resolves as a composed editorial layout with a defined focal
  point and no empty right band at ≥1024 px; H1 does not hyphen-break at
  390 px; hero content paints immediately (F-005 respected).
- **E.** Display type scale ratio increased (H2 ≥ 2× body size), deliberate
  tracking applied to display/eyebrow type, and all subhead measures ≤70
  characters.
- **F.** Brand gold appears as an intentional accent system across the page
  (rules, numerals, edges, key affordances) — not confined to the repeated
  primary button.
- **G.** Route and fleet panels read as composed brand surfaces with
  typographic lockups and consistent edge treatment; mobile page height at
  390 px materially reduced versus the 9.5-screen baseline, with routes no
  longer exceeding ~1 screen.
- **H.** App section presents a factual capability narrative plus both
  official store links, with a reserved screenshot slot; no fabricated
  device mockup, no unapproved screenshot, no invented app capability.
- **I.** Corporate and Final CTA sections are visibly higher-authority
  moments than connective sections; footer has structured finish and
  improved link contrast; trust strip reads as a designed band.
- **J.** Content, copy, section order, section count and IA are byte-for-byte
  unchanged in meaning; no fabricated imagery, no unapproved asset, no new
  dependency, no GSAP/WebGL/scroll-hijack; `[VERIFICATION REQUIRED]` absent
  from output.
- **K.** No regression against F-003–F-007 (keyboard trap, CTA semantics,
  SSR visibility, performance budget) — in particular the visual work must
  not increase initial JS beyond the F-006 target, and any new motion must
  respect `prefers-reduced-motion`.
- **L.** A reviewer comparing before/after at 390 px and 1440 px can state
  that the page reads as a finished premium transportation website rather
  than a structural baseline.

- **Assigned phase:** **D** (visual refinement of existing sections, executed
  together with the F-003–F-008 corrections so the page is only re-laid-out
  once). Photography/screenshot substitution remains deferred to whenever
  approved assets arrive and must not block this work.
- **Status:** Open · **Resolution evidence:** 13 of 14 corrections fully met with evidence: new hero focal panel, 3-tone/3-scale section rhythm, structure added to all 7 previously-bare sections, strengthened type scale, redesigned cards/panels/footer/trust-strip/final-CTA. Measured tone-contrast ratios (all adjacent pairs ≥1.35:1, verified 1.515–1.849), H2/body ratio 2.67, gold-as-accent element count increased from 8 to 59+, screenshots at 390/768/1024/1440px, zero axe-core violations. Two real defects were found and fixed: a `color-mix(in oklch, …, white N%)` rendering bug (switched to `in srgb`) and a CSS Grid `row-span-2` collapse on the dominant route card (switched to explicit aspect-ratio sizing). One accessibility regression was caught by axe-core and fixed before completion (gold-as-text and alpha-blended `--muted-foreground` both failed WCAG AA) — see F-008.
  **Criterion G is not met** and this finding is therefore kept **Open**, not Resolved (docs/page-template-review.md PT-009): G requires mobile page height "materially reduced versus the 9.5-screen baseline" — measured page length went from 9.5 → 10.4 screens (**+10%**, an increase, not a reduction), because criterion A's higher-priority requirement (give the 7 bare sections real structure) necessarily added content. The specific F-011 complaint this criterion also names (Routes/Fleet panels) did improve (Routes 1.58→1.22, Fleet 0.83→0.68 screens), but Routes still exceeds G's "~1 screen" target. This is a disclosed, reasoned trade-off — not a hidden shortfall — and needs an explicit user decision: accept the net length increase given criterion A was met (→ Deferred), or require further mobile-height reduction on top of the structural work (→ stays Open, assigned to Phase F/H).

---

### Category C — Deferred (blocked on an approved asset, business fact, page or hosting decision)

---

**F-015**
- **Severity:** Medium
- **Affected:** `src/app/layout.tsx` metadata + Organization JSON-LD — relates to reported limitation 7
- **Evidence:** `NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"` currently
  yields canonical `http://localhost:3000/`, `og:url`, JSON-LD `url` and
  `logo` all on localhost (verified in the rendered head). This is the
  designed fallback while hosting is unapproved (D-008: provider deferred).
  The code is correct for the feature branch; the **risk** is that nothing
  fails if the env var is missing at production deploy time — localhost
  canonicals would ship silently.
- **Why it matters:** v7 §28/§35 forbid non-production hosts in canonicals,
  OG URLs and structured data in production output.
- **Required correction:** When hosting is approved (Phase G–J), set
  `NEXT_PUBLIC_SITE_URL` in the deployment environment **and** add a
  production-build guard (fail or hard-warn when `NODE_ENV=production` and
  the variable is unset) plus a pre-deploy check in the quality gate.
  Nothing to change while hosting remains undecided.
- **Acceptance criterion:** A production build without `NEXT_PUBLIC_SITE_URL`
  cannot ship localhost URLs unnoticed (build guard or gate check), and the
  deployed head shows the approved canonical host.
- **Assigned phase:** Deferred — hosting decision (OPEN-1/D-008); guard implementable in D/H
- **Status:** Open · **Resolution evidence:** Pending

---

**F-016**
- **Severity:** Low
- **Affected:** Header/footer logo rendering (`logo.tsx`) — relates to reported limitation 2
- **Evidence (verdict: acceptable interim):** The approved dark JPEG master
  is byte-identical in `public/brand/` (SHA-256 `e550e5c1…` matches
  `docs/asset-audit.md`). The `object-fit: cover; object-position: 50% 46%`
  window (150×36 / 168×40) displays source rows ≈299–504 of the 855 px
  square; the full wordmark band including the maple-leaf tip (~y310) and
  letter baselines (~y485) fits **entirely inside** the window — nothing is
  cropped, aspect ratio is preserved (no distortion), and the "crop" removes
  only empty background. Pixel sampling shows the JPEG's baked background is
  `rgb(25,43,47)` vs CSS `#1D2B2E` = `rgb(29,43,46)` — a 4/255 red-channel
  delta, imperceptible in screenshots at 320–1440 px (no visible seam).
  The logo file itself is unchanged.
- **Why it matters:** The technique is sound but brittle: it only works on
  exact-teal surfaces, and any future section tone (e.g. `--pk-teal-elevated`)
  would expose the letterbox seam.
- **Required correction:** None now. Replace with the requested
  SVG/transparent-on-dark master when PrimeKar supplies it
  (`docs/asset-audit.md` §D, outstanding), then drop the object-position
  windowing.
- **Acceptance criterion:** Interim accepted; closes when the transparent/SVG
  master replaces the windowed JPEG.
- **Assigned phase:** Deferred — asset (logo SVG/transparent master)
- **Status:** Open · **Resolution evidence:** Pending

---

**F-017**
- **Severity:** Low
- **Affected:** Favicon legibility (`src/app/icon.png`) — relates to reported limitation 8
- **Evidence:** The favicon is the full "PrimeKar" wordmark on a 512²
  field; at real tab size (16–32 px) a full wordmark reduces to an
  unreadable strip. The artwork is faithful (see F-010) — the problem is
  that no approved icon-only mark (e.g. the maple-leaf element alone)
  exists, and creating one would be a derivative treatment requiring
  explicit approval (v7 §12 — no redraws or new marks without approval).
- **Required correction:** Request an approved icon-only/monogram mark from
  PrimeKar for favicon use; keep the current faithful wordmark favicon until
  then.
- **Acceptance criterion:** Closes when an approved icon-mark favicon
  replaces the wordmark favicon (or the user explicitly accepts the wordmark
  favicon as final).
- **Assigned phase:** Deferred — asset/approval
- **Status:** Open · **Resolution evidence:** Pending

---

**F-018** — **SEVERITY RAISED Low → Medium · RE-SCOPED · CONSOLIDATED INTO F-024** (2026-07-18 amendment)
- **Severity:** ~~Low~~ → **Medium** · **Scope:** reclassified from
  "Deferred — asset" to **actionable in Phase D**
- **Affected:** Desktop hero composition (`hero.tsx` at 1024–1440 px) — reported limitation 4
- **Evidence:** At 1440 px the hero is text-left with the right ~40–45% of
  the band empty except a faint radial gold wash. Re-measured during the
  amendment pass: hero H1 occupies **60% of a 1280 px container**, the
  section is 568 px tall, and no secondary visual element exists anywhere in
  the right band.
- **Why the reclassification:** the original finding concluded "none now —
  awaiting photography." On re-review that conclusion was wrong in one
  respect: the *absence of photography* does not require the absence of
  *composition*. A premium editorial hero can be built from type, rule
  lines, a structured fact block and negative space alone (the approved
  Jesko Jets principle is explicitly about typographic scale and negative
  space, not imagery). The hero is currently under-composed in a way that is
  fixable with approved tokens and no new assets.
- **Required correction / Acceptance criterion:** superseded by and folded
  into **F-024** correction 1. Photography, when approved, remains a later
  enhancement — it is no longer a precondition for a finished-looking hero.
- **Assigned phase:** D (composition) / Deferred only for the eventual photography swap
- **Status:** Resolved · **Resolution evidence:** Hero rebuilt with a bordered fact panel (service families) and an abstract SVG route-line device on the right band at ≥1024px — no empty band, composed focal point, no fabricated imagery. This finding's acceptance criterion is the composition, which is complete; photography was never part of it and remains a separate, later enhancement (tracked as its own asset item, not part of this finding).

---

**F-019**
- **Severity:** Low
- **Affected:** `public/brand/primekar-logo-light.png` (2.1 MB, publicly served, unused) — relates to reported limitation 3
- **Evidence (verdict: exclusion from chrome was correct):** Visual
  inspection confirms the "light" file is a **photographic/3-D backlit sign
  render** on a grey gradient background with glow — not a flat transparent
  production wordmark. Using it in header/footer chrome would have been
  wrong; excluding it was the right call. It currently ships in `public/`
  (D-011 designated `public/brand/` as its destination, so its presence is
  approved), but it is 2.1 MB, unreferenced by any page, and publicly
  fetchable.
- **Required correction:** None required. Optional: keep it out of `public/`
  until a real use exists, or accept the dormant file. A true flat
  light-background wordmark remains an outstanding asset request.
- **Acceptance criterion:** User acknowledges the exclusion verdict; closes
  with the outstanding light-wordmark asset request.
- **Assigned phase:** Deferred — asset
- **Status:** Open · **Resolution evidence:** Pending

---

### Category D — Accepted limitations (no correction required now)

---

**F-020**
- **Severity:** Low (accepted)
- **Affected:** Navigation/footer links to approved-but-unbuilt routes — relates to reported limitation 6
- **Evidence:** All service/route/company/legal links target
  approved-sitemap slugs; verified they currently return the framework
  default 404 ("This page could not be found", unbranded, no recovery
  links). This is inherent to building the homepage first on a feature
  branch; every target is scheduled (Phases D and F) and the branch is not
  deployable by policy (§34).
- **Verdict:** **Acceptable during the feature-branch build — no temporary
  nav treatment needed before the Phase B commit.** Hard condition: the
  branch must not merge/deploy while any public nav link 404s, and the
  branded accessible 404 page (v7 §17) must land in Phase F.
- **Assigned phase:** Accepted now; condition enforced at Phase G gate
- **Status:** Open · **Resolution evidence:** Calgary Airport Transportation and Calgary to Banff Transportation built and live in Phase D — those two nav links no longer 404. Additional service/route/company pages built during Phase F are tracked in `docs/page-template-review.md` PT-013 and `docs/decision-log.md`. Remains **Open** (not Resolved) until every public nav/footer link resolves — this finding's hard condition (no public nav link may 404 in production) is verified at the Phase G gate, not before.

---

**F-021**
- **Severity:** Low (accepted)
- **Affected:** Homepage structure without Testimonials — relates to reported limitation 5
- **Evidence:** Section order runs …Fleet → Reliability → Ride With Purpose
  → Final CTA. Read in the browser end-to-end at mobile and desktop widths:
  no visual gap, no dangling reference to testimonials anywhere in copy or
  nav; the narrative (services → proof-of-process → values → CTA) closes
  cleanly. v7 §18 explicitly authorizes omission when no verified
  testimonials exist; the omission is documented in `page.tsx` comments.
- **Verdict:** **Accepted.** Revisit only when verified testimonials are
  supplied (Testimonials page/section remain conditional in the sitemap).
- **Assigned phase:** Accepted
- **Status:** Deferred · **Resolution evidence:** Pending — accepted omission per v7 §18; revisit only when verified testimonials are supplied (Testimonials page/section remain conditional in the sitemap, docs/sitemap.md).

---

**F-022**
- **Severity:** Low (accepted)
- **Affected:** Reduced-motion verification scope
- **Evidence:** `MotionConfig reducedMotion="user"` (layout.tsx) + global
  `prefers-reduced-motion: reduce` CSS kill-switch (globals.css) present in
  source and in the built CSS; Phase B's Playwright reduced-motion test
  passed. This session's in-app browser has no reduced-motion emulation
  control, so live behaviour was not manually re-verified here.
- **Verdict:** Accepted for Phase C with the standing test-matrix rule: mark
  **NOT VERIFIED ON REAL DEVICE**; real-device reduced-motion check remains
  on the pre-launch list (v7 §20).
- **Assigned phase:** Accepted; re-verify at Phase H/I and on real devices pre-launch
- **Status:** Deferred · **Resolution evidence:** Pending — accepted for Phase C/D/E/F; real-device reduced-motion verification remains on the pre-launch list (v7 §20), re-verified at Phase H/I.

---

**F-023**
- **Severity:** Low (accepted)
- **Affected:** Footer copyright year (`footer.tsx`, `new Date().getFullYear()` at build time)
- **Evidence:** The page is statically prerendered, so the year freezes at
  build time. Correct today; would only stale on a build not refreshed
  across a year boundary. Deploys will rebuild.
- **Verdict:** Accepted — no correction now; note for the launch checklist.
- **Assigned phase:** Accepted
- **Status:** Deferred · **Resolution evidence:** Pending — accepted, no correction required now; carried on the launch checklist since deploys rebuild the year automatically.

---

## What was verified clean (no finding)

- **Branch/repo state:** on `feature/primekar-rebuild`, Phase A commit
  present, Phase B fully uncommitted, `main` untouched.
- **No horizontal overflow at any of the 7 widths** (JS-measured at each).
- **Console:** zero errors/warnings beyond dev-tools info lines.
- **Content compliance:** no "chauffeur", no on-demand/instant language
  (the single "on demand" occurrence is the approved contrast framing in
  Reliability), no invented capacities/pricing/guarantees/stats, no
  `[VERIFICATION REQUIRED]` in production source, no placeholder links,
  no `#AB8A63` print gold anywhere in CSS/source, no Lorem/TODO/FIXME.
- **Pre-scheduled positioning:** consistent in hero, Why, How-it-works,
  Reliability, App section; booking framed app-first per D-009; phone/email
  present only as footer contact (support framing).
- **Ride With Purpose:** exact minimum approved treatment (name + verified
  purpose + restrained About link), own section, separate from Reliability;
  Reliability links to it without restating it as service proof — compliant
  with v7 §6.
- **Trust strip:** four verifiable facts only.
- **Fleet:** tiers + supplied makes only (Lexus/Tesla/Lincoln; Suburban),
  no capacities/availability invented.
- **CTA accuracy:** "Download the App" → in-page app section holding the two
  verified store links — honest interim destination (no fake booking, no
  invented deep links; store URLs match cta-map with tracking param
  dropped). **Both store listings re-verified live this session**: App Store
  `id6753017125` "PrimeKar App" (developer PrimeKar, iPhone) and Google Play
  `com.primekar.customer` "PrimeKar" — genuine, plain `target="_blank"
  rel="noopener noreferrer"` links, no deep-link/smart-link behaviour
  (limitation 10 ✔).
- **Organization JSON-LD:** name/url/logo only — no address, phone,
  areaServed, hours, coordinates or any unverified business fact
  (limitation 9 ✔). URL fields inherit the env fallback (see F-015).
- **Metadata:** `lang="en-CA"`, one H1, unique title/description, theme
  colour `#1D2B2E`, OG/Twitter wired via file conventions (image format
  issue → F-010).
- **Header/nav:** 7-item desktop nav matches approved IA; dropdowns open on
  click, close on Escape with focus return; sticky header stable at all
  widths; skip link appears on focus and targets `#main-content`.
- **Mobile menu (pointer users):** full-height readable sheet, accordion
  groups work, CTA pinned, body scroll locked, Escape/close/focus-return
  correct *when focus is inside* (keyboard trap failure → F-003).
- **Heading/landmark structure:** logical h1→h2→h3, labelled nav/footer
  landmarks, list semantics preserved (Reveal `as="li"` works).
- **Colour contrast:** locked-token combinations follow §21 (teal-on-gold
  CTAs); measured muted-foreground-on-teal ≈6.9:1 (AA pass); no
  cream/warm-white-on-gold text found.
- **Reference adaptation:** patterns (Raus nav calm, Flyward service
  families, Nelson route-card hierarchy, Flighty-informed app section)
  rebuilt with PrimeKar tokens/content — no copied wording, geometry,
  imagery or typography identified.
- **Quality gates:** typecheck ✔, eslint ✔, production build ✔ (all routes
  static). (format:check → F-001.)
- **Logo integrity:** both masters byte-identical to the audited approved
  files (SHA-256 match).

## Reported-limitation verdicts (1–10)

| # | Reported limitation | Verdict | Finding |
|---|---|---|---|
| 1 | Lighthouse LCP 3.1–8.4 s | Confirmed root causes measured (295 KB gzip JS vs ≤130 KB budget; hidden-until-hydration content). Correctable | F-005, F-006 (+F-002 recording) |
| 2 | Logo via object-fit: cover | **No crop, no distortion, no visible seam** — verified pixel-level; acceptable interim pending SVG/transparent master | F-016 |
| 3 | "Light" logo excluded | **Exclusion correct** — it is a photographic sign render, confirmed visually | F-019 |
| 4 | Typography/gradient-only sections | **Revised by amendment: not currently strong enough on either breakpoint.** The treatment is honest and correctly avoids fabrication, but is placeholder-shaped rather than intentional; sections need composed typographic lockups, real tonal separation and structure — achievable now without photography | **F-024** (consolidating F-011, F-018) |
| 5 | Testimonials omitted | **No gap** — structure closes cleanly; omission compliant | F-021 (accepted) |
| 6 | Nav links 404 on future routes | **Acceptable on feature branch**, no temporary treatment needed; blocks merge/deploy, not commit | F-020 (accepted w/ condition) |
| 7 | NEXT_PUBLIC_SITE_URL localhost fallback | Correct interim design; **must never ship** — add production guard + deploy-time env; nothing committed is production-ready output by itself | F-015 |
| 8 | Favicon / Apple icon / OG image | Artwork faithful to approved logo ✔; **JPEG-in-.png format defect**; favicon wordmark illegible at 16 px (needs approved icon mark) | F-010, F-017 |
| 9 | Conservative Organization JSON-LD | **Clean** — name/url/logo only, no unverified facts | ✔ (F-015 for URL host only) |
| 10 | Store links genuine, no deep links | **Verified live this session** — both listings genuine; plain store links only | ✔ |

## Phase C verdict (revised by the 2026-07-18 visual amendment)

**Phase B is approved subject to corrections.**

The homepage is structurally faithful to the approved 16-section plan
(15 built + compliant Testimonials omission), content-safe (no prohibited
claims), technically sound, and clean at all seven viewports with a working
desktop nav and a well-designed mobile sheet for pointer users.

**It is not, however, visually finished.** The amendment adds **F-024
(High)**, which finds — on measured evidence — that the page currently
reads as a technically correct structural baseline rather than a premium
transportation website: 7 of 12 sections carry no visual structure, the two
section tones differ by only 1.167:1, brand gold appears on just 8 elements
page-wide, display type is undersized and untracked, and the assigned
reference *principles* (notably the imagery-independent Jesko Jets
typographic and negative-space principles) have not yet transferred. Much
of this is independent of the missing photography and is correctable now
with approved tokens and the approved stack.

The blocking substance is therefore five High findings: mobile-menu
keyboard trap (F-003), CTA role/Space semantics (F-004), SSR-hidden content
(F-005), performance-budget overshoot (F-006), and premium visual quality
(F-024). All are evidence-based and correctable in Phase D. F-024 is a
**controlled visual refinement of existing sections** — the approved
information architecture, section order and copy do not change.

**Sequencing note:** F-024 should be executed in the same Phase D pass as
F-003–F-008 so the homepage is re-laid-out only once, and so the visual work
is constrained by the performance budget (F-006) and the SSR-visibility fix
(F-005) rather than fighting them afterwards.

### Blocks the Phase B commit
- **F-001** (red `format:check`/CI — resolve via `.prettierignore`, needs approval)
- **F-002** (Phase B test results must be recorded in `docs/test-matrix.md`)

Nothing else blocks the commit: F-003–F-014 are working-tree defects that
Phase D corrects on the same branch, and no secret/private/unapproved
content was found in the staged-candidate files (pre-commit safety check
§3 still required at commit time).

### Blocks merge/deploy (not the commit)
- F-020 condition (no 404 nav targets in production), F-015 (canonical host),
  F-006 (budget), plus all standard later-phase gates.

---

## Phase D completion note (2026-07-19)

All findings assigned to Phase D above were addressed to the standard understood at the time — see each finding's individual **Status**/**Resolution evidence** fields for specifics. Summary (as originally reported):

- **Resolved in full:** F-001, F-002, F-003, F-004, F-005, F-007, F-008, F-009, F-010, F-011, F-012, F-013, F-014, F-018.
- **Resolved partially, with disclosed limitation:** F-006 (JS reduced 13%, budget still exceeded), F-020 (Airport + Banff built; remaining nav links accepted-limitation), F-024 (13 of 14 criteria met; criterion G — mobile page height — not met).
- **Unchanged (correctly still deferred/accepted):** F-015 (hosting decision), F-016 (logo asset — interim accepted), F-017 (favicon asset), F-019 (light-logo asset), F-021 (testimonials — accepted omission), F-022 (real-device reduced-motion — still not verified on a physical device), F-023 (build-time copyright year — accepted).

One accessibility regression was introduced by the F-024 visual work and caught before completion by Playwright's axe-core accessibility test: gold text and the alpha-blended `--muted-foreground` token both failed WCAG AA (4.5:1) against the new, lighter `elevated`/`feature` section tones. Both are fixed and documented under F-008 and in `docs/design-system.md` §1a. This is disclosed for Phase E's review, not hidden.

**Phase E correction (docs/page-template-review.md PT-009):** the "partially resolved, with disclosed limitation" status used above for F-006/F-020/F-024 is not one of the five statuses the master spec defines (Open / Approved / Rejected / Deferred / Resolved — v7 §2). Disclosing a shortfall is good practice, but it does not make a finding **Resolved** when its acceptance criterion is unmet. F-006, F-020 and F-024 are corrected to **Open** in their individual entries above (F-011 and F-018's own narrower criteria were in fact fully met and correctly stay **Resolved**; F-021/F-022/F-023 are corrected to **Deferred**). This correction is a status-vocabulary fix, not a re-opening of the underlying visual work, which was verified in-browser during Phase E and again during Phase F and holds.

Full Phase D report — every finding addressed, F-024 criteria A–L evidence, files changed, exact test results, remaining limitations, git status — was provided to the user in chat at the end of the Phase D session and is not duplicated here.
