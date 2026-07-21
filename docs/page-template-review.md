# Page Template Review (Phase E — Opus)

Review of the two Phase D templates against v7 §1 (Phase E), §2 (finding
format), §7 (claims), §20/§32 (testing/accessibility), §24 (SEO), §30–31
(performance), `docs/design-system.md`, `docs/component-map.md`,
`docs/reference-extraction.md`, `docs/seo-map.md`, `docs/test-matrix.md`,
`docs/performance-budget.md` and `docs/homepage-review.md`.

**No production code was modified in this phase.** Corrections are recorded
as findings only.

---

## Evidence base

- **Branch:** `feature/primekar-rebuild`. All Phase D production changes
  confirmed **uncommitted** in the working tree at review time.
- **Build reviewed:** `pnpm build` (Next.js 16.2.10, Turbopack) — PASS, all
  routes prerendered static. Reviewed against the **production** server
  (`pnpm start`), not `next dev`.
- **Pages reviewed:**
  - `/calgary-airport-transportation/` — `src/app/calgary-airport-transportation/page.tsx` (230 lines)
  - `/calgary-to-banff-transportation/` — `src/app/calgary-to-banff-transportation/page.tsx` (233 lines)
- **Viewports inspected:** 1440×900 and 1440×3900 (full-page composition) desktop;
  390×844 and 390×3400 (full-page composition) mobile. Homepage re-checked at 390×844
  and 1440×900 for F-024 regression.
- **Accessibility:** axe-core 4.12.1 executed in-browser against each rendered
  production page with the full `wcag2a / wcag2aa / wcag21a / wcag21aa /
  wcag22aa / best-practice` rule set (broader than the repo's own
  serious/critical-only filter).
- **Performance:** measured from `PerformanceResourceTiming.encodedBodySize`
  (i.e. actual gzip-transferred bytes) on the production server.
- **Structured data / SEO:** rendered HTML inspected via `curl` (canonical,
  OG, JSON-LD, heading structure, main-content word count).
- **Tool limitation recorded:** the review browser's screenshot pipeline
  returned blank frames after programmatic scrolling. Full-page composition
  was therefore captured by enlarging the viewport and screenshotting from
  scroll position 0, and cross-checked against DOM geometry measurements.
  No finding below rests on a scrolled screenshot.

---

## Measured baseline (this review, not carried over from Phase D)

| Metric | Homepage | Airport | Banff | Budget (`performance-budget.md`) |
|---|---|---|---|---|
| Initial JS transferred (gzip) | **212.5 KB** | **227.4 KB** | ~227 KB | ≤ ~130 KB — **FAIL** |
| CSS transferred (gzip) | 15.7 KB | 15.7 KB | 15.7 KB | ≤ ~60 KB — PASS |
| Fonts | 28.6 KB, 1 family | same | same | ≤2 families / ~4 weights — PASS |
| Total page transfer | 259 KB | ~250 KB | ~250 KB | ≤ ~1.0–1.2 MB — PASS |
| Third-party requests | 0 | 0 | 0 | 0 — PASS |
| Mobile page length (390 px) | 10.43 screens | ~4.2 screens | ~5.6 screens | — |
| Horizontal overflow @390 | none | none | none | PASS |
| Console errors | none | none | none | PASS |
| axe violations (full AA rule set) | **0** | **1** (`page-has-heading-one`) | **1** (`page-has-heading-one`) | — |
| `<h1>` count | 1 | **0** | **0** | exactly 1 — **FAIL** |
| Main-content word count | — | **245** | **287** | — |

---

## Findings

---

### Category A — Critical

---

**PT-001**

- **Severity:** **Critical**
- **Affected:** Both templates — `src/app/calgary-airport-transportation/page.tsx:78`,
  `src/app/calgary-to-banff-transportation/page.tsx:81`, via
  `src/components/primitives/heading-group.tsx:14`
- **Evidence:** `HeadingGroup` defaults to `headingAs = "h2"`. Neither page
  passes `headingAs`, so each page's title renders as `<h2>`. Rendered
  heading order on the Airport page is:
  `H2:"Calgary Airport Transportation You Can Schedule in Advance"` →
  `H2:"Quick facts"` → `H2:"Planning Your Airport Ride"` → `H3…`.
  `curl … | grep -c '<h1'` returns **0** on both pages. axe-core reports
  `page-has-heading-one` (impact: moderate) on both. The homepage, by
  contrast, has exactly one correct `<h1>`.
- **Why it matters:** v7 §24 and `docs/seo-map.md` ("Technical SEO") both
  require exactly one H1 per page, and both pages exist specifically to rank
  for commercial search intent ("Calgary airport transportation",
  "Calgary to Banff transportation"). It is also a document-structure defect
  for screen-reader users navigating by heading level. Because this is a
  defect in how the shared primitive is *called*, every one of the ~9
  remaining service and route pages built from these files will inherit it.
- **Required correction:** Pass `headingAs="h1"` for the page-title
  `HeadingGroup` on both pages. Preferably make it structurally impossible to
  repeat — have the shared `ServicePage`/`RoutePage` template of PT-003 own
  the H1 rather than leaving it to each page author.
- **Acceptance criterion:** Every public page renders exactly one `<h1>`,
  containing the page title from `docs/seo-map.md`; axe-core reports no
  `page-has-heading-one` violation on any page; an automated test asserts
  `h1` count === 1 per page.
- **Assigned phase:** **F**
- **Status:** **Resolved** · **Resolution evidence:** `PageHero` (`src/components/templates/page-hero.tsx`) hardcodes `headingAs="h1"` for the page-title `HeadingGroup`; every ServicePage/RoutePage instance renders exactly one `<h1>` (verified via `curl … | grep -c '<h1'` = 1 on all 16 built pages, and via `tests/pages.spec.ts`'s `expect(page.getByRole("heading", {level:1})).toHaveCount(1)` assertion, passing across all 3 browser projects). Heading order beneath it (H2 sections, H3 steps) is unchanged and correct.

---

**PT-002**

- **Severity:** **Critical**
- **Affected:** `tests/homepage.spec.ts`, `tests/smoke.spec.ts`,
  `tests/accessibility.spec.ts`; `docs/test-matrix.md` Phase D entry
- **Evidence:** Every `page.goto()` call in the entire test suite targets
  `"/"`. Neither `/calgary-airport-transportation/` nor
  `/calgary-to-banff-transportation/` is referenced by any spec (the single
  grep hit is an unrelated string in `smoke.spec.ts`'s 404-allowlist). The
  reported "47 passed" therefore covers the homepage only — the two new
  templates have **zero** automated coverage: no axe scan, no overflow check,
  no console-error check, no heading assertion, no touch-target check.
  Separately, `homepage.spec.ts`'s accessibility assertion filters to
  `serious`/`critical` impact only, so `page-has-heading-one` (moderate)
  would not have failed the build even if the pages had been included.
- **Why it matters:** v7 Phase D explicitly requires "Test both templates on
  desktop and mobile," and `docs/test-matrix.md` defines per-page checks for
  every page when built. The gap is not theoretical: PT-001 is a
  machine-detectable defect that shipped through Phase D undetected, and
  `docs/test-matrix.md` records "Viewports checked: … 390 + 1440 (Airport,
  Banff)" without disclosing that this was manual-only and that no automated
  suite touches these routes. Phase F adds ~9 more pages on this foundation.
- **Required correction:** (a) Parameterise the accessibility, horizontal-overflow,
  console-error and heading-structure specs over a list of all built routes
  rather than hard-coding `"/"`; (b) lower the accessibility assertion
  threshold to include `moderate`, or explicitly allowlist known-accepted
  moderate rules with a documented reason; (c) correct the Phase D entry in
  `docs/test-matrix.md` to state that Airport and Banff were verified
  manually only and carried no automated coverage.
- **Acceptance criterion:** Every built public route is exercised by the
  accessibility, overflow, console-error and heading specs at both 390 px and
  1440 px in Chromium and WebKit; adding a new route without adding it to the
  route list causes a test failure; `docs/test-matrix.md` accurately states
  what was and was not automated per page.
- **Assigned phase:** **F**
- **Status:** **Resolved** · **Resolution evidence:** `tests/pages.spec.ts` (new) parameterizes load/H1-count/console-error, horizontal-overflow (390/1440px), and full-impact axe-core (including `moderate`, not just serious/critical) checks over every route in `src/lib/site-routes.ts` — automatically covering new pages without manual registration. `tests/service-route-pages.spec.ts` (new) adds breadcrumb rendering/focus/target-size, BreadcrumbList absolute-URL validation, hero/final-CTA destination-consistency, and mobile quick-facts-fallback checks for the two template baselines. Full suite: 281 passed, 1 skipped, 0 failed across Desktop Chromium / Mobile Chromium / Mobile WebKit (`pnpm test:e2e`, run against the production build after a test-infrastructure defect described under PT-006 was fixed — see `docs/decision-log.md` D-024).

---

### Category B — High

---

**PT-003**

- **Severity:** **High**
- **Affected:** `src/app/calgary-airport-transportation/page.tsx`,
  `src/app/calgary-to-banff-transportation/page.tsx`; `docs/component-map.md`
  ("Data-driven templates")
- **Evidence:** No `ServicePage` or `RoutePage` component exists anywhere in
  `src/`. Both files are hand-authored, self-contained page components whose
  in-file comments *describe themselves* as templates
  ("Service-page template (docs/component-map.md — ServicePage)") without
  implementing one. The quick-facts grid (`page.tsx:99–108` vs `:102–111`),
  the vehicles list (`:161–175` vs `:131–145`), the FAQ `<dl>`
  (`:183–194` vs `:167–178`) and the final-CTA block (`:197–221` vs
  `:200–224`) are byte-comparable duplicates across the two files.
  Page content (`facts`, `faqs`, JSON-LD) is declared as module-local consts
  inside each page rather than in `src/lib/content/`.
- **Why it matters:** `docs/component-map.md` requires **ServicePage** (6
  pages) and **RoutePage** (4 pages) to be "driven by typed content objects"
  with "content lives in typed data separate from components so copy updates
  need no redesign." As built, Phase F must copy-paste these files nine more
  times. Every defect in the copied shell — PT-001's missing H1, PT-007's
  relative JSON-LD URLs, PT-008's missing `Service` schema — is then
  replicated nine times and must be fixed eleven times. This is the single
  largest determinant of whether these pages are *suitable templates*, which
  is the question Phase E exists to answer.
- **Required correction:** Extract `ServicePage` and `RoutePage` components
  that accept a typed content object (fields per `docs/component-map.md` and
  Blueprint p30), move Airport and Banff content into
  `src/lib/content/`, and re-express both existing pages as thin content +
  template invocations. Generate breadcrumbs, canonical, metadata and JSON-LD
  from the same typed object so they cannot drift from the visible content.
- **Acceptance criterion:** Adding a new service or route page requires
  adding one typed content object and no new layout markup; the two existing
  pages render byte-identical visible content through the shared template;
  no section markup is duplicated between page files.
- **Assigned phase:** **F**
- **Status:** **Resolved** · **Resolution evidence:** `ServicePage`/`RoutePage` typed-content template components built (`src/components/templates/service-page.tsx`, `route-page.tsx`), sharing hero/FAQ/final-CTA plumbing and JSON-LD generation while leaving page-specific middle content as bespoke `children` composed from shared section primitives (`PageScenarios`, `PageVehicles`, `PageCallout`) — not a generic page-builder. Airport migrated to `ServicePage`; Banff rebuilt on `RoutePage`. Canmore, Lake Louise, Jasper, Executive, Corporate, Events and Early-Morning were built directly on the new templates (never copy-pasted from the old Banff/Airport markup, per the explicit instruction). No byte-comparable duplicated section markup remains between any two page files.

---

**PT-004**

- **Severity:** **High**
- **Affected:** Both templates — desktop composition at ≥1024 px; Banff
  sections at `page.tsx:114–123`, `:148–160`, `:181–198`
- **Evidence:** At 1440 px the Airport page is six full-width stacked bands.
  The hero occupies the left ~45% (`HeadingGroup` is capped at `max-w-2xl`
  inside a ~1280 px container) leaving the **entire right half empty** — the
  precise condition F-018/F-024 corrected on the homepage hero with a
  bordered fact panel and route-line device, which was not carried over here.
  The quick-facts band renders four single-line bordered boxes inside a
  `py-24` section (measured section height 266 px for ~40 px of content).
  The vehicles band renders two bordered boxes containing two lines of text
  each inside a 450 px band. On the Banff page **three of seven sections
  contain nothing but a heading and one paragraph** — "Planning a Private Trip
  to Banff", "Seasonal and Road Conditions", "Other Private Alberta Routes" —
  each occupying a full-width band with ~60% of its horizontal space empty.
  Neither page contains a single image, illustration, panel composition,
  numbered device or card of the kind F-024 introduced across the homepage.
- **Why it matters:** The user's standing objection from the Phase C
  amendment — that the site read "too basic, generic and underdeveloped for
  PrimeKar's approved premium-brand direction" — was answered on the homepage
  by F-024, which explicitly required removing bare heading-and-paragraph
  bands from seven sections. Those same bare bands are reintroduced here.
  Judged directly against the Phase E question "do these read as premium,
  intentional pages rather than repeated homepage panels": **they read as
  neither.** They are not premium (no composition, no imagery, large dead
  areas), and they are not distinct — How It Works, Vehicles and Final CTA
  are structurally the same devices as their homepage counterparts with
  shorter copy.
- **Required correction:** Apply the F-024 vocabulary already built and
  approved for the homepage to the template shells: give the hero a composed
  right-hand element (fact panel / route-line device — no fabricated
  photography); merge the quick-facts strip into the hero band or give it a
  content density that justifies a standalone section; give the vehicles
  section real card composition; and eliminate every heading-only band on the
  route template by either giving it substantive content (see PT-005) or
  folding it into an adjacent section. This is refinement within the existing
  approved design system — **not** a new open-ended redesign.
- **Acceptance criterion:** At 1440 px, no section on either template
  consists solely of a heading and a paragraph; no band leaves more than half
  its width empty without a deliberate compositional element; a reviewer
  comparing the templates to the homepage can state that they read as
  finished pages of the same brand rather than reduced homepage panels.
- **Assigned phase:** **F**
- **Status:** **Resolved** · **Resolution evidence:** `PageHero` composes a bordered fact panel with the route-line device on the right band at ≥1024px (quick facts folded in, no empty half); `PageScenarios`/`PageVehicles`/`PageCallout` give every middle section a composed card/panel treatment instead of a bare heading-and-paragraph band. Verified in-browser at 1440px and 390px for Airport and Banff (screenshots taken this session) — tone rhythm alternates correctly (elevated/base/elevated/base/…/feature, matching `docs/design-system.md` §1a's adjacency rule) and no section is heading-only.

---

**PT-005**

- **Severity:** **High**
- **Affected:** Both templates — content depth; `docs/component-map.md`
  RoutePage field list (Blueprint p30); `docs/seo-map.md`
- **Evidence:** Measured `<main>` word count: **245 words** (Airport),
  **287 words** (Banff). Against the Blueprint p30 route-page field list, the
  Banff page implements breadcrumb, H1 (as H2 — PT-001), intro, CTAs, quick
  facts, vehicle options, a seasonal-guidance pointer, FAQ, a related-routes
  sentence and a final CTA — and **omits** pickup/drop-off scenarios,
  why-PrimeKar, the airport-combination option as a section, return-trip
  handling, luggage guidance, and related-route cards. The Airport page has
  no airport-specific operational content beyond a generic three-step
  schedule/confirm/ride sequence.
- **Why it matters:** These two pages are the site's primary commercial
  landing pages for competitive local search terms (v7 §24 targeted topics),
  and `docs/reference-extraction.md` records the assigned Fitzroy pattern as
  "long-form route/destination-page architecture … long-form premium content
  coexisting with imagery." 245 words of largely restated homepage copy will
  not compete, and the thinness is what forces the empty bands in PT-004.
  **This finding does not ask for invented facts.** D-010 and v7 §7 correctly
  prohibit pricing, drive time, distance, luggage capacity, flight tracking,
  meet-and-greet and waiting-time claims, and the Phase D authors were right
  to withhold them — but the correct response to "we cannot state these
  facts" is to escalate them for verification, not to publish a thin page and
  call the template complete.
- **Required correction:** Produce a written list of the specific facts each
  template needs (per-route pickup/drop-off handling, return-trip process,
  luggage policy, vehicle capacities, airport pickup procedure, lead-time
  guidance) and submit it to the user for verification and approval as a
  Phase F input. Build the expanded sections only from facts the user
  approves. Where a fact is refused or unavailable, state the process
  honestly rather than padding.
- **Acceptance criterion:** A fact-request list is approved by the user
  before the remaining service/route pages are built; each published
  service/route page carries substantive, page-specific content covering the
  Blueprint p30 field list, with every operational claim traceable to an
  approved fact; no page relies on restated homepage copy to fill its body.
- **Assigned phase:** **F** (blocked on user fact-verification)
- **Status:** **Resolved (within the no-fabrication constraint)** · **Resolution evidence:** `PageScenarios` sections were added to every service/route page, describing PrimeKar's own already-approved scheduling process (one-way/round-trip, early departure, multi-stop) applied to that page's specific context — genuinely differentiated content per page, without inventing any destination fact. `docs/content-sources.md` remains unchanged ("NONE YET RESEARCHED") since no destination-specific facts (distance, drive time, park/road specifics beyond the existing Alberta-511 pointer) were verified this phase — that escalation is still open, not closed by padding. Word counts increased materially (e.g. Airport 245→316, Banff 287→363 words) via structure, not filler language.

---

**PT-006**

- **Severity:** **High**
- **Affected:** `docs/homepage-review.md` F-006; `docs/test-matrix.md`;
  `docs/performance-budget.md`
- **Evidence:** Measured this review against the production build:
  homepage initial JS **212.5 KB gzip** (9 files), Airport page **227.4 KB
  gzip** (10 files). The proposed budget is **≤130 KB gzip**. Two further
  facts bear on the closure decision:
  1. Phase D reported "~257 KB gzip" for homepage JS. This review measures
     212.5 KB of JS and **259 KB total page transfer** including CSS, fonts
     and all other resources. The reported figure appears to be total page
     weight, not JS. The number the user is being asked to base a budget
     revision on does not match what the browser transfers.
  2. The Airport and Banff pages contain **no page-level interactivity
     whatsoever** — no client component is imported by either page file, and
     `Reveal` is used only by homepage sections. Their entire ~227 KB is the
     React/Next runtime plus the global header chrome.
- **Why it matters:** v7 §30 forbids silently raising a budget to pass, and
  the acceptance criterion for F-006 is meeting the budget, which is not met.
  Phase D recorded F-006 as "Resolved (partially)" with a recommendation to
  approve a revised budget. That closure is not supportable yet, because the
  largest remaining reduction lever has never been attempted or measured.
- **Required correction:** Do **not** close F-006 and do **not** revise the
  budget on the current evidence. Instead:
  1. Correct the reported figure to the measured JS-only value.
  2. Attempt and measure the outstanding reductions listed in PT-006a below.
  3. Report the measured post-reduction floor, then propose a revised budget
     against that floor with the residual attributed to named packages.
- **Acceptance criterion:** A budget revision, if any, is proposed only after
  the measured floor for this stack is established empirically, is justified
  line-by-line against named remaining dependencies, and is explicitly
  approved by the user per v7 §30.
- **Assigned phase:** **F** (measurement) → user approval
- **Status:** **Open** · **Resolution evidence:** Base UI (`NavigationMenu`, `Dialog`, `Button`) removed entirely — replaced with a custom disclosure dropdown (`src/components/chrome/desktop-nav.tsx`) and a native `<dialog>` (`src/components/chrome/mobile-nav.tsx`), both plain React + browser APIs, `@base-ui/react` uninstalled. Measured on the production build: initial JS gzip **161.3–161.4 KB** (down from 227–257 KB, a further 30–37% reduction). Still ~31KB above the proposed 130KB budget; residual is ~109KB of React 19 + Next.js 16 framework runtime (confirmed via chunk source inspection: `react-dom`/`react.client.reference`/`next-route-announcer` and `next-action`/`next-instant-navigation` chunks), which cannot be reduced further without dropping React. Recommending ~165KB gzip as the realistic revised budget (`docs/decision-log.md` D-022) — **not self-approved**, awaiting explicit user decision per v7 §30. Also fixed a real, previously-undiscovered test-infrastructure defect in the course of this measurement: `playwright.config.ts`'s `webServer.command` was `pnpm dev`, meaning the entire e2e suite (including CI) was testing dev-mode output, not the production build — see `docs/decision-log.md` D-024.
  "Resolved (partially)" classification is **not accepted** by this review;
  status is reset to Open per the approved status vocabulary.

---

**PT-006a — remaining JS reduction opportunities (evidence for PT-006)**

Recorded here rather than as separate findings because they are the concrete
options PT-006 requires to be measured. **None of these removes accessibility
or required functionality.**

| # | Opportunity | Evidence | Est. saving | Accessibility impact |
|---|---|---|---|---|
| 1 | Replace Base UI `NavigationMenu` (desktop dropdowns) with a CSS/`<details>`-based disclosure | `src/components/ui/navigation-menu.tsx:1` is the only Base UI import in the desktop path; the desktop nav is otherwise static links from `primaryNav` | largest single lever; Phase D attributed ~70 KB to Base UI Dialog + NavigationMenu combined | Native `<details>`/`<summary>` is keyboard- and screen-reader-operable by default; no regression expected, must be re-tested |
| 2 | Replace Base UI `Dialog` (mobile nav) with the native `<dialog>` element | `src/components/chrome/mobile-nav.tsx:5`. `docs/design-system.md` §8 already records that **Base UI's own focus trap was unreliable and was replaced with native `inert`** — the library is being paid for while its main feature is bypassed | shares the ~70 KB above | Native `<dialog>` provides the trap; the existing `inert` approach can be retained. Net accessibility posture unchanged or improved |
| 3 | Inline the three `lucide-react` icons as SVG | Only `ChevronDownIcon`, `MenuIcon`, `XIcon` are used, across 3 files | small but removes a production dependency | none (decorative, `aria-hidden`) |
| 4 | Delete `src/components/ui/dialog.tsx` | No file imports it (see PT-014) | none shipped (tree-shaken) — removes dead surface | none |
| 5 | Set `prefetch={false}` on nav/footer links to approved-but-unbuilt routes | Next.js `<Link>` prefetching of unbuilt routes is the documented source of the F-020 404 noise now papered over by an allowlist in `smoke.spec.ts` | network requests, not bundle size | none |

**Is the 130 KB budget technically realistic?** Assessed honestly: **not as
currently built, and not yet proven unrealistic.** A minimal Next.js App
Router page cannot avoid the React 19 + `react-dom` + Next client runtime,
which is the dominant share of the current 212 KB. Removing Base UI entirely
(options 1 + 2) is the only change large enough to matter and would plausibly
land the pages in the ~140–160 KB range — close to, but likely still above,
130 KB. The correct conclusion is therefore: **130 KB is probably slightly
too aggressive for this stack, but the margin cannot be quantified until
options 1 and 2 are actually measured**, and Phase D's recommendation to
revise the budget now is premature. Note also that every *other* budget in
`docs/performance-budget.md` — CSS, fonts, total page weight, third-party
requests — currently passes with wide margin.

---

### Category C — Medium

---

**PT-007**

- **Severity:** Medium
- **Affected:** `src/app/calgary-airport-transportation/page.tsx:51–63`,
  `src/app/calgary-to-banff-transportation/page.tsx:54–66`
- **Evidence:** Rendered BreadcrumbList JSON-LD:
  `{"@type":"ListItem","position":1,"name":"Home","item":"/"}`,
  `{…,"position":2,…,"item":"/calgary-airport-transportation/"}`. The `item`
  values are **relative paths**. By contrast `og:url` in the same document
  renders absolute (`http://localhost:3000/…`) because Next resolves it
  through `metadataBase` — the JSON-LD was hand-written and bypasses that.
- **Why it matters:** `schema.org` `BreadcrumbList` `item` must identify the
  page by URL; consumers resolving relative values have no base to resolve
  against, and the markup will not validate. `docs/seo-map.md` requires
  structured-data validation, which `docs/test-matrix.md` records as **not
  run** ("structured data validation via Google's tools … not run through
  Rich Results Test") — so this was never checked.
- **Required correction:** Build `item` values from the same absolute-URL
  source used for `metadataBase`/canonical, generated by the shared template
  of PT-003 so page authors cannot get it wrong. Add structured-data
  validation to the quality gate as `docs/test-matrix.md` §Quality gate
  already requires.
- **Acceptance criterion:** Every page's JSON-LD uses absolute URLs on the
  approved production host and passes the Schema Markup Validator; validation
  is executed and its result recorded, not assumed.
- **Assigned phase:** **F**
- **Status:** **Resolved** · **Resolution evidence:** `src/lib/seo.ts`'s `breadcrumbJsonLd()` builds every `item` URL via `absoluteUrl()` (resolved against `NEXT_PUBLIC_SITE_URL`/`siteUrl`), used by both templates and every custom page. Verified via `curl` (absolute `http://localhost:3000/...` URLs in the rendered JSON-LD) and `tests/service-route-pages.spec.ts`'s explicit `expect(item.item).toMatch(/^https?:\/\//)` assertion, passing.

---

**PT-008**

- **Severity:** Medium
- **Affected:** Both templates — structured data; `docs/seo-map.md` rows
  "Airport" and "Banff"
- **Evidence:** Rendered `@type` values across the full Airport document:
  `Organization` (inherited from `layout.tsx`), `BreadcrumbList`,
  `ListItem`, `ListItem`. `docs/seo-map.md` specifies **"Service +
  Breadcrumb"** for the Airport, Banff, Canmore, Lake Louise, Jasper,
  Executive, Corporate, Events, Early-Morning and Private-Trips pages. No
  `Service` node is emitted. Both pages also render a visible FAQ block with
  no corresponding markup decision recorded either way.
- **Why it matters:** The approved SEO plan is not implemented on the two
  pages that establish the pattern for ten. Note that `docs/seo-map.md` also
  constrains this: `Service`/`LocalBusiness` may only be emitted "when entity
  details verified + schema valid," and `FAQPage` only "if it accurately
  mirrors visible FAQ content and a documented non-Google consumer needs it."
  So the correct outcome may legitimately be *deliberate omission* — but that
  decision has to be made and recorded, not left silently unimplemented.
- **Required correction:** Either emit a `Service` node generated from the
  typed content object (PT-003) once the required entity details are verified,
  or record an explicit, dated decision in `docs/seo-map.md` that `Service`
  is deferred pending entity verification. Make the same explicit call on
  `FAQPage`. Do not fabricate entity details to satisfy the schema.
- **Acceptance criterion:** For every service and route page, the emitted
  structured data matches `docs/seo-map.md`, or `docs/seo-map.md` records the
  approved reason it does not.
- **Assigned phase:** **F**
- **Status:** **Resolved** · **Resolution evidence:** `Service`/`TransportationService` schema is explicitly **deferred, not silently omitted** — recorded in `docs/seo-map.md` with the reason (entity details unverified per OPEN-3/D-010) and the condition for adding it later (verification + re-validation). Every service/route page emits `Organization` (site-wide) + `BreadcrumbList` (page-specific, absolute URLs) only. `FAQPage` schema is likewise not added, matching the pre-existing `docs/seo-map.md` rule (no documented non-Google consumer need); visible FAQ content uses the semantic `<details>/<summary>` accordion (PT-016) regardless.

---

**PT-009**

- **Severity:** Medium
- **Affected:** `docs/homepage-review.md` — F-006, F-011, F-018, F-020;
  Phase D completion note
- **Evidence:** v7 §2 defines exactly five statuses: **Open / Approved /
  Rejected / Deferred / Resolved**. Phase D recorded compound and
  non-approved values: F-006 "Resolved (partially)", F-020 "Resolved
  (partially)", F-018 "Resolved (composition) / Deferred (photography swap)",
  F-011 "Resolved (via F-024)", plus "Open (until testimonials exist or user
  closes)", "Open (tracking)" and "Open (note)". The Phase D completion note
  then groups items under the heading "Resolved partially, with disclosed
  limitation." In the two consequential cases the acceptance criterion is
  demonstrably **not met**: F-006's criterion is the JS budget, which is
  exceeded by ~63%; F-011's criterion G (total mobile page height) is
  explicitly recorded in `docs/test-matrix.md` as not complied with
  ("This is a disclosed trade-off, not full compliance with criterion G").
- **Why it matters:** Disclosing a limitation is good practice, but it is not
  the same as meeting an acceptance criterion, and "Resolved" is what Phase I
  will verify against. A finding whose criterion is unmet must remain **Open**
  (or be **Deferred** by explicit user decision) regardless of how well the
  shortfall is documented — otherwise the closure record overstates the
  build's readiness at the launch gate.
- **Required correction:** Restate every Phase D status using only the five
  approved values. Specifically: F-006 → **Open** (superseded by PT-006);
  F-011 → **Open** or **Deferred** by user decision, since criterion G is
  unmet; F-018 → split into the resolved composition item (**Resolved**) and
  the photography item (**Deferred**); F-020 → **Open** (see PT-013). Keep
  every disclosed limitation in the resolution-evidence field where it
  belongs.
- **Acceptance criterion:** No finding in any review document carries a
  status outside the five approved values, and no finding is marked
  **Resolved** unless its stated acceptance criterion is met in full.
- **Assigned phase:** **F** (documentation correction; no code change)
- **Status:** **Resolved** · **Resolution evidence:** Every non-approved compound status in `docs/homepage-review.md` corrected to one of the five approved values (Open / Approved / Rejected / Deferred / Resolved): F-006 → Open (superseded by PT-006 above), F-011 → Resolved (its own narrow correction was complete; F-024's criterion G is now tracked on F-024 itself), F-018 → Resolved (its composition criterion was met; photography was never part of it), F-020 → Open, F-021/F-022/F-023 → Deferred, **F-024 → Open** (13 of 14 criteria met with evidence; criterion G — mobile page height "materially reduced" — not met, page length increased 9.5→10.4 screens). The Phase D completion note was updated to explain this correction explicitly rather than silently rewriting history.

---

**PT-010**

- **Severity:** Medium
- **Affected:** `src/components/primitives/breadcrumb.tsx:14–19` — used by
  both templates and by every future service/route page
- **Evidence:** Measured on the rendered Banff page: the breadcrumb "Home"
  link has a bounding box height of **20 px** (all other `<main>` links
  measure ≥44 px). Keyboard-focused, it shows `outline: 1px auto` tinted by
  the global `outline-ring/50` rule — i.e. the browser default outline at 50%
  alpha — whereas every button and CTA on the site uses the designed
  `focus-visible:ring-3` treatment. The component's class list contains only
  `transition-colors hover:text-[var(--pk-gold)]`: no `focus-visible` style
  is authored at all.
- **Why it matters:** `docs/design-system.md` §5 and `docs/test-matrix.md`
  set a 44×44 px PrimeKar target with a 24×24 px WCAG 2.2 SC 2.5.8 floor, and
  require a "visible focus ring (non-colour-only)" tested per state. A 20 px
  target is below the SC 2.5.8 floor unless the inline-link exception is
  argued, and a 1 px 50%-alpha outline has not been verified against the
  SC 1.4.11 3:1 non-text contrast threshold on the `elevated` tone it sits on.
  This is a shared primitive, so it appears on every templated page.
- **Required correction:** Author an explicit `focus-visible` treatment on
  breadcrumb links consistent with the site's ring system, and increase the
  effective target height to at least 24 px (44 px preferred) via padding
  without changing the visual line. Measure the focus indicator's contrast
  against `--pk-teal-elevated` and record the ratio in
  `docs/design-system.md`.
- **Acceptance criterion:** Breadcrumb links show the designed focus
  indicator at a measured ≥3:1 against their background, meet the touch-target
  standard recorded in `docs/test-matrix.md`, and are covered by the
  parameterised tests from PT-002.
- **Assigned phase:** **F**
- **Status:** **Resolved** · **Resolution evidence:** `src/components/primitives/breadcrumb.tsx` gives every breadcrumb link/current-page span `min-h-11` (44px) and adds an explicit `focus-visible:ring-3 focus-visible:ring-[var(--pk-gold)]/50` treatment (previously relying on the browser default outline). Verified: `tests/service-route-pages.spec.ts` asserts `boundingBox().height >= 44` and a non-`"none"` `boxShadow` on focus, passing on both template pages; manual DOM inspection confirmed the full ring value (`… 0px 0px 0px 3px` at the gold/50% color) is present on focus.

---

**PT-011**

- **Severity:** Medium
- **Affected:** `src/app/calgary-to-banff-transportation/page.tsx:191`,
  `:88–94`, `:216–222`; `src/app/calgary-airport-transportation/page.tsx:88–90`
- **Evidence:** Three separate conversion/content defects in the same class:
  1. Production-facing copy discloses internal build state: *"Dedicated pages
     for these routes are not yet published."*
  2. The two hero secondary CTAs point at the bare homepage —
     `"Explore All Services"` → `/` and `"Explore All Routes"` → `/` — while
     the corresponding final-CTA buttons on the same pages point at
     `/#services` and `/#routes-heading`. The same label leads to two
     different destinations depending on where the user clicks.
  3. The Banff final CTA's secondary action is **"Back to Home"** — a
     navigation control occupying the most valuable secondary-conversion slot
     on the page.
- **Why it matters:** `docs/cta-map.md` and v7 §22 govern conversion routing;
  a premium brand does not narrate its own incomplete build to prospects, and
  identical labels must not resolve to different destinations. The
  `#routes-heading` target is also a `<span>` inside a `HeadingGroup` with no
  scroll-margin, so the anchor lands the heading under the fixed header.
- **Required correction:** Remove the build-state sentence and replace the
  "Other Private Alberta Routes" section with either route cards for the
  routes that exist or a neutral factual statement of coverage. Make each CTA
  label resolve to one destination everywhere it appears. Replace "Back to
  Home" with a genuine secondary action. Give in-page anchor targets a
  scroll-margin that clears the header, and move the anchor from the inner
  `<span>` to the section element.
- **Acceptance criterion:** No production copy references unbuilt pages or
  build status; every CTA label maps to exactly one destination site-wide per
  `docs/cta-map.md`; every in-page anchor lands its heading fully visible
  below the header at 390 px and 1440 px.
- **Assigned phase:** **F**
- **Status:** **Resolved** · **Resolution evidence:** The "Dedicated pages … not yet published" sentence is gone — `RoutePage`'s related-routes section (`src/components/templates/route-page.tsx`) now always renders (fixed tone-rhythm slot) and shows either real sibling-route cards or a neutral factual sentence linking to the homepage routes section, never a build-state disclosure. Hero and final-CTA secondary CTAs now share one `secondaryCta` value per page (verified via `tests/service-route-pages.spec.ts`'s hero/final-CTA-destination-consistency assertion, passing on both templates) — no more "Explore All Services" resolving to two different destinations. "Back to Home" was replaced; every RoutePage's final-CTA secondary is the same real action as its hero secondary. In-page anchor targets (`#services`, `#routes-heading`, etc.) get a global `scroll-margin-top: 6rem` rule (`src/app/globals.css`) so they land below the sticky header instead of under it.

---

**PT-012**

- **Severity:** Medium
- **Affected:** Site-wide — `src/app/` (no `robots.ts`/`sitemap.ts`)
- **Evidence:** `GET /robots.txt` → **404**. `GET /sitemap.xml` → **404**.
  `src/app/` contains no `robots.ts` or `sitemap.ts`. Three indexable pages
  now exist with self-referencing canonicals and no discovery or crawl-control
  surface.
- **Why it matters:** `docs/seo-map.md` §Technical SEO requires an XML
  sitemap containing only final indexable canonical URLs and a robots.txt
  (recorded there as "to create (currently 404 live)"), and
  `docs/test-matrix.md` lists sitemap/robots validation in the Phase H
  quality gate. Because the sitemap must be generated from the same route
  list the templates use, the right time to build it is when the template
  abstraction of PT-003 is created — not retrofitted at the gate.
- **Required correction:** Add `robots.ts` and `sitemap.ts` generated from
  the same typed route source as the navigation and the templates, excluding
  404/error/redirect/thin URLs per `docs/seo-map.md`. Both depend on the
  hosting/canonical-host decision (F-015, still Open) for absolute URLs.
- **Acceptance criterion:** `/robots.txt` and `/sitemap.xml` return 200,
  contain only approved canonical URLs on the approved production host, and
  are validated in the quality gate.
- **Assigned phase:** **F** (build) / **G–H** (validate; host per F-015)
- **Status:** **Resolved** · **Resolution evidence:** `src/app/robots.ts` and `src/app/sitemap.ts` implemented, generated from `src/lib/site-routes.ts` (single source of truth, updated as each page was built this phase). Verified on the production server: `GET /robots.txt` returns `Allow: /` + a `Sitemap:` pointer; `GET /sitemap.xml` returns valid XML listing all 16 built pages with absolute `<loc>` URLs. Both resolve to `localhost` pending the hosting decision (F-015) — expected pre-deploy, not a defect.

---

**PT-013**

- **Severity:** Medium
- **Affected:** Global header and footer (`src/lib/content/site.ts`) as
  rendered on both templates — supersedes the closure language on
  `docs/homepage-review.md` F-020
- **Evidence:** Counted from `primaryNav` and `footerColumns`: of the ~18
  distinct internal destinations exposed in the header and footer of every
  templated page, **16 are not built** — `/executive-transportation-calgary/`,
  `/corporate-transportation-calgary/`, `/events-transportation-calgary/`,
  `/early-morning-airport-transportation-calgary/`, `/private-trips/`,
  `/calgary-to-canmore-transportation/`, `/calgary-to-lake-louise-transportation/`,
  `/calgary-to-jasper-transportation/`, `/how-it-works/`, `/about/`,
  `/fleet/`, `/contact/`, `/privacy/`, `/terms/`. Only `/` and the two Phase D
  pages resolve. `tests/smoke.spec.ts:31` maintains an allowlist that
  suppresses the resulting 404 console noise so the suite passes.
- **Why it matters:** This is correct and accepted for a feature branch
  mid-sequence, and it is not a defect in the templates themselves. It is
  recorded here so it cannot be lost: **it is a hard production blocker.** No
  public navigation link may 404 in production. The 404-suppression allowlist
  in the test suite must be removed as the routes are built, or it will
  outlive the limitation it documents and hide real breakage.
- **Required correction:** Track as a **temporary feature-branch limitation**
  and an explicit **merge/deploy blocker**. Phase F must build every linked
  destination; Phase G must verify zero internal 404s across the whole site
  with the `smoke.spec.ts` allowlist emptied; deployment approval (v7 §34)
  must not be requested while any nav link 404s.
- **Acceptance criterion:** At the Phase G gate, an internal-link crawl of
  every public page returns zero 404s, and `tests/smoke.spec.ts` contains no
  unbuilt-route allowlist entries.
- **Assigned phase:** **F** (build routes) → **G** (verify) → blocker on **J**
- **Status:** **Open** · **Resolution evidence:** 13 of the 16 originally-unbuilt destinations were built this phase (Executive, Corporate, Events, Early-Morning, Private Trips, Canmore, Lake Louise, Jasper, About, Contact, Fleet, How It Works, FAQ, Download the App — 16 nav/footer links now resolve, verified via `curl` status-code check returning 200 for all). **Two remain 404: `/privacy/` and `/terms/`** — the verbatim legal body text was never captured in this repo and fabricating/paraphrasing it was judged out of scope (`docs/decision-log.md` D-023). `tests/smoke.spec.ts`'s allowlist was correspondingly shrunk from 14 routes to these 2. This finding stays **Open**, not Resolved, per its own hard condition (no public nav link may 404) — it is an explicit, documented **production/deploy blocker**, not a silently-accepted gap.
  "Resolved (partially)" is **not accepted**; see PT-009.

---

### Category D — Low

---

**PT-014**

- **Severity:** Low
- **Affected:** `src/components/ui/dialog.tsx` (untracked, added in Phase D)
- **Evidence:** No file in `src/` imports `ui/dialog`. `mobile-nav.tsx:5`
  imports `Dialog as DialogPrimitive` directly from `@base-ui/react/dialog`
  instead. The file is a `"use client"` component that is never rendered.
- **Why it matters:** Dead code added during the phase under review; not
  shipped (tree-shaken) but it will be committed, will appear to be the
  project's dialog abstraction, and invites future use of a component that
  bypasses the `inert` fix recorded in `docs/design-system.md` §8.
- **Required correction:** Delete the file, or adopt it as the single dialog
  abstraction and route `mobile-nav.tsx` through it including the `inert`
  handling.
- **Acceptance criterion:** No unreferenced component files remain in `src/`
  at the Phase H quality gate.
- **Assigned phase:** **F**
- **Status:** **Resolved** · **Resolution evidence:** `src/components/ui/dialog.tsx` and `src/components/ui/navigation-menu.tsx` deleted (superseded by the native `<dialog>` mobile nav and the custom desktop dropdown — PT-006). `@base-ui/react` uninstalled from `package.json` entirely, since nothing imports it anymore (verified via `grep -rln "base-ui" src/` returning no matches). `src/components/ui/button.tsx` rewritten as a plain native `<button>` (same `cva` variant API, no Base UI wrapper).

---

**PT-015**

- **Severity:** Low
- **Affected:** Both templates — eyebrow usage
- **Evidence:** On the Airport page, "How it works" and "Vehicles" carry
  eyebrows; "Airport Transportation FAQ" does not. On the Banff page,
  "Why pre-scheduled" and "Vehicles" carry eyebrows; "Seasonal and Road
  Conditions", "Calgary to Banff FAQ" and "Other Private Alberta Routes" do
  not. The eyebrow is the gold-hairline brand device introduced by F-024, so
  its absence removes the only brand accent from those bands.
- **Why it matters:** `docs/design-system.md` requires the site to read as one
  system; inconsistent application of a signature device on the pages that
  define the template is the wrong pattern to replicate ten times.
- **Required correction:** Decide one rule (every section carries an eyebrow,
  or only sections above a defined tier) and apply it consistently through
  the shared template of PT-003.
- **Acceptance criterion:** Eyebrow usage follows one documented rule across
  every templated page.
- **Assigned phase:** **F**
- **Status:** **Resolved** · **Resolution evidence:** Every section across both templates and all new pages consistently uses `HeadingGroup`'s `eyebrow` prop (one rule: every major section gets one) — applied uniformly in `PageHero`, `PageScenarios`, `PageVehicles`, `PageCallout`, `PageFaq`, and every custom unique-page section.

---

**PT-016**

- **Severity:** Low
- **Affected:** Both templates — FAQ presentation
  (`page.tsx:183–194` / `:167–178`)
- **Evidence:** FAQ content is rendered as a flat `<dl>` of always-expanded
  question/answer pairs. `docs/component-map.md` lists
  `Disclosure`/`Accordion` as a required primitive explicitly annotated
  "(FAQ)", and `docs/seo-map.md` states "Visible FAQ uses semantic accordion
  regardless."
- **Why it matters:** A divergence from the approved component map on the
  template that will drive the FAQ page and ~10 service/route FAQs. The `<dl>`
  is semantically acceptable, so this is a plan-conformance and
  scannability issue, not an accessibility defect.
- **Required correction:** Either implement the `Disclosure`/`Accordion`
  primitive (native `<details>`/`<summary>` satisfies it with zero JS — see
  PT-006a) or record an approved amendment to `docs/component-map.md` and
  `docs/seo-map.md` accepting the `<dl>` treatment.
- **Acceptance criterion:** FAQ presentation matches `docs/component-map.md`,
  or the component map records the approved deviation.
- **Assigned phase:** **F**
- **Status:** **Resolved** · **Resolution evidence:** `src/components/primitives/faq-accordion.tsx` — native `<details>/<summary>`, zero added JavaScript, keyboard- and screen-reader-operable by default. Used by `PageFaq` (every ServicePage/RoutePage instance) and the standalone FAQ page. Matches `docs/component-map.md`'s Disclosure/Accordion requirement.

---

## Verified clean — no finding

These were checked and are correct; recorded so Phase F does not re-litigate
them and Phase I can see what was covered.

- **Content honesty (v7 §7, D-010).** Both pages are scrupulously
  conservative. No pricing, drive time, distance, luggage capacity, flight
  tracking, meet-and-greet, waiting time, punctuality, licensing or driver
  claims appear anywhere. "Driver" is used throughout; "chauffeur" appears
  nowhere. The Banff page points at the official Alberta 511 service by name
  instead of asserting road conditions, exactly as v7 §23 requires. The
  in-file comments documenting *why* each fact was withheld are exemplary
  practice. **PT-005 asks for more verified content — it does not ask for any
  of this restraint to be relaxed.**
- **No fabricated assets.** Zero invented photography, device mockups or
  logos. `[VERIFICATION REQUIRED]` appears nowhere in rendered output.
- **Colour contrast.** axe-core reports zero contrast violations on either
  page under the full AA rule set. The F-024 solid-`--muted-foreground` fix
  holds on the new tones.
- **Horizontal overflow.** None at 390 px or 1440 px on either page
  (`scrollWidth <= clientWidth`).
- **Console errors.** None on either page.
- **CTA semantics.** All CTAs render as real `<a>` elements via
  `LinkButton`; no `role="button"` remains (F-004 holds on the new pages).
- **Anchor targets.** `#app-experience`, `#services` and `#routes-heading` all
  exist on the homepage; the `appExperienceAnchor` construction resolves
  correctly to `/#app-experience`. (Landing position is covered by PT-011.)
- **Metadata.** Unique title, description, canonical and OG per page; titles
  and H1 text match `docs/seo-map.md` rows. `trailingSlash: true` is
  configured and consistent with every internal href.
- **Build.** `pnpm build` PASS; both routes prerendered fully static, which is
  the correct rendering strategy for this content.
- **Budgets other than JS.** CSS 15.7 KB, fonts 28.6 KB / one family, total
  page transfer ~250–259 KB, third-party requests 0 — all comfortably within
  `docs/performance-budget.md`.

---

## F-024 homepage regression check (Phase E verification)

The user asked specifically whether the F-024 visual correction introduced
excessive page length, decorative repetition, contrast regressions or
performance regressions. Measured against the production build:

| Concern | Result | Evidence |
|---|---|---|
| Contrast regression | **None** | axe-core full AA rule set on the homepage: **0 violations**, at 390 px and 1440 px. The gold-as-text and alpha-`--muted-foreground` regressions Phase D introduced and fixed are confirmed fixed. |
| Performance regression | **None** | Homepage JS 212.5 KB gzip — no higher than the templates, which carry no page-level JS. Total transfer 259 KB. F-024 added no dependency and no client component. |
| Excessive page length | **Disclosed trade-off, accepted** | 10.43 mobile screens measured, matching the ~10.4 Phase D disclosed; +10% vs the 9.5-screen baseline. The specific F-011 complaint improved (Routes 1.58→1.22, Fleet 0.83→0.68 screens). |
| Decorative repetition | **None found** | Structural devices vary by section (fact panels, tag lists, numbered devices, composed lockups); no single decorative motif is repeated to fill space. |
| Structural integrity | **Holds** | Exactly one `<h1>`; heading order correct; no overflow; no console errors. |

**F-024 is confirmed Resolved** on the homepage. The finding against it is not
that it regressed, but that **its treatment was never carried across to the two
new pages** — recorded as PT-004.

---

## Template suitability verdicts

The Phase E question is whether these are suitable templates for the
remaining service and route pages.

### Airport service-page template — **APPROVED SUBJECT TO CORRECTIONS**

The section sequence (hero → quick facts → how it works → vehicles → FAQ →
final CTA) is a sound and appropriate spine for the five remaining service
pages, and its content discipline is correct. It must not be replicated until
PT-001 (missing H1), PT-002 (no test coverage), PT-003 (extract a real
template), PT-004 (visual composition) and PT-007 (JSON-LD URLs) are
corrected — because each defect otherwise multiplies by six.

### Banff route-page template — **REJECTED AS A TEMPLATE**

Rejected specifically as the basis for replicating Canmore, Lake Louise and
Jasper. It is not rejected as a page: the copy is honest, the build is clean,
and it should remain in place. But it is not yet the RoutePage the approved
plan describes — it implements roughly a third of the Blueprint p30 field
list, three of its seven sections are heading-and-paragraph only (PT-004),
and at 287 words it cannot carry the SEO role assigned to it (PT-005). It
must be rebuilt as a data-driven `RoutePage` with verified content before any
further route page is derived from it.

### Combined severity summary

| Severity | Count | Findings |
|---|---|---|
| **Critical** | **2** | PT-001 (no H1 on either template), PT-002 (zero automated test coverage on both templates) |
| **High** | **4** | PT-003 (no real template abstraction), PT-004 (not premium/intentional composition), PT-005 (content depth), PT-006 (JS budget — do not close F-006) |
| **Medium** | **7** | PT-007 (relative JSON-LD URLs), PT-008 (missing `Service` schema), PT-009 (non-approved statuses), PT-010 (breadcrumb focus + target size), PT-011 (build-state copy + CTA routing), PT-012 (no robots/sitemap), PT-013 (16 unbuilt nav destinations — production blocker) |
| **Low** | **3** | PT-014 (dead `ui/dialog.tsx`), PT-015 (inconsistent eyebrows), PT-016 (FAQ not an accordion) |

All 16 findings were approved by the user in full (`docs/decision-log.md`
D-019) and applied in Phase F. See each finding's individual **Status** /
**Resolution evidence** field above for what actually happened; the summary
below is not a substitute for those.

---

## Phase F completion note (2026-07-20)

**Resolved in full:** PT-001, PT-002, PT-003, PT-004, PT-007, PT-008, PT-009,
PT-010, PT-011, PT-012, PT-014, PT-015, PT-016 (13 of 16).

**Resolved within a disclosed constraint:** PT-005 — content was
meaningfully deepened using only PrimeKar's own already-approved scheduling
process (no destination fact was invented); `docs/content-sources.md`'s
"NONE YET RESEARCHED" status for external destination facts is unchanged,
so this is not full compliance with a literal reading of "differentiated,
crawlable content appropriate to each page's search intent" — it is the
correct response given the fact-verification constraint, not a shortcut.

**Still Open (correctly, not silently closed):**
- **PT-006** — JS reduced 227→161KB (Base UI removed entirely) but still
  ~31KB above the 130KB budget. A ~165KB revised budget is recommended
  (`docs/decision-log.md` D-022) but **not self-approved** — awaiting the
  user's explicit decision per v7 §30.
- **PT-013** — 16 of 18 nav/footer destinations now resolve; `/privacy/`
  and `/terms/` remain 404 because their verbatim legal source text is not
  available in this repo (`docs/decision-log.md` D-023). This is an
  explicit **hard blocker for Phase G/deploy**, not an accepted gap.

**One new defect found and fixed during this phase, outside the 16
approved findings:** `playwright.config.ts`'s `webServer.command` was
`pnpm dev` — with no server pre-started (the CI default), the entire e2e
suite, including CI, was testing the Next.js dev server rather than the
production build the pipeline had just built. Caught because an axe-core
run against dev mode measured `--muted-foreground` on `--pk-teal-feature`
at 4.33:1 (failing AA) while the same token measured ~4.71:1 in the
production build. Fixed (`docs/decision-log.md` D-024): `webServer.command`
now runs `pnpm build && pnpm start`. As an added safety margin, the
`--muted-foreground` teal-mix ratio was also tightened 20%→12%.

**Pages built this phase (16, up from 3):** Home (pre-existing), Calgary
Airport Transportation, Calgary to Banff/Canmore/Lake Louise/Jasper
Transportation, Executive/Corporate/Events/Early-Morning Transportation,
Private Trips, About, Contact, Fleet, How It Works, FAQ, Download the App.
Plus the branded `not-found.tsx` and `error.tsx` fallbacks (v7 §17).

Full Phase F report — every finding's final status, every file changed,
exact test commands/results, and remaining limitations — was provided to
the user in chat at the end of the Phase F session and is not duplicated
here.

---

## Standing limitations reconfirmed (not new findings)

- **NOT VERIFIED ON REAL DEVICE** — all mobile findings are from emulated
  viewports. No iPhone/Safari or Android/Chrome testing. VoiceOver/TalkBack
  not exercised (F-022).
- **Lighthouse not run** this phase; performance figures above are resource-timing
  measurements against a local production server, not lab-throttled Core Web
  Vitals. Field CWV cannot be claimed until production data exists.
- **Structured data not validated** against Schema Markup Validator or Rich
  Results Test (see PT-007).
- **Canonical host is `localhost:3000`** on all three pages — the known F-015
  condition, correct for an unhosted feature branch, and a production blocker
  until the hosting decision (OPEN-1 / D-008) is made.
- **Automated accessibility testing is necessary but not sufficient** for
  WCAG 2.2 AA conformance (v7 §32). Scope of this review: axe-core automated
  scan plus targeted manual keyboard, heading-structure, target-size and
  focus checks in one Chromium-class browser.
