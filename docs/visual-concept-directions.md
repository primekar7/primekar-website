# PrimeKar Homepage — Three Visual Concept Directions

**Phase:** Visual reset (concept phase). Research/prototype only — **no production code modified, nothing committed.**
**Branch:** `feature/primekar-visual-reset`
**Prototypes (gitignored):** `prototypes/direction-a-editorial-alberta.html`, `prototypes/direction-b-cinematic-app.html`, `prototypes/direction-c-modern-corporate.html`
**View locally:** served over HTTP during this session at `http://localhost:8145/<file>.html`. To re-serve: `cd prototypes && python3 -m http.server 8145`.
**Companion:** `docs/visual-reference-audit.md` (live reference reverse-engineering + Adopt/Adapt/Reject table).

All three are self-contained HTML/CSS with a tiny vanilla-JS reveal (no framework, no external requests). They use the **locked PrimeKar tokens** (teal `#1D2B2E`, gold `#B8924A`, cream `#F5DDCA`, warm-white `#F4EFE6`), a Geist-compatible system stack (production uses self-hosted Geist), "driver" not "chauffeur", no prohibited claims, **no invented stats**, and **intentional art-direction placeholders** (never grey rectangles — each carries subject/angle/crop/lighting/aspect/overlay/position/movement). Heroes and all server-rendered content paint immediately; motion is additive and reduced-motion-safe.

---

## Why the current build was rejected (baseline)

| | Current **live** site (primekar.com) | Current **rebuild** (localhost) |
|---|---|---|
| Does better | Cinematic full-bleed black-car hero photo; warm, premium mood | Correct brand system (teal/gold/cream, Geist), correct pre-scheduled messaging, accessibility, service breadth |
| Does poorly | Rejected claims ("Always On Time", "Limousine", "in seconds"); emoji cards; off-brand pale-yellow CTA + runtime Poppins; thin 3-section page | **Image-less** — flat teal slabs, abstract dotted route line, large *accidental* empty regions, repeated heading+paragraph blocks; reads as a styled wireframe |
| Must preserve | The **image-led hero impact** | The **brand system, messaging discipline, and section breadth** |
| Must replace | Everything else | The **flat-slab visual language** — add real focal points, image rhythm, varied surfaces and compositions |

**The whole job of this reset:** keep the rebuild's correct brand/messaging/section foundation, and give it the live site's (and the references') image-led premium impact — without copying anyone.

---

## Section-by-section — what each of the 15 required sections becomes

| # | Section | Direction A — Editorial Alberta | Direction B — Cinematic + App | Direction C — Modern Corporate |
|---|---|---|---|---|
| 1 | Header | Dark, left logo + right gold app CTA, 5 grouped links | Dark, minimal, translucent; nav recedes to let the hero object dominate | Light/paper header, adds a **"Business account"** button beside the app CTA |
| 2 | Mobile nav | Full-screen teal sheet, 26px links | Full-screen near-black sheet | Full-screen paper sheet |
| 3 | Hero | **Asymmetric editorial**: two-tone cream/gold display + Alberta **route-discovery map card** over a full-bleed golden-hour highway plate | **Cinematic single focal object** centered (car interior/phone) in a dark glow field, minimal centered display, one CTA | **Structured corporate split**: display headline + inline trust facts + composed SUV-at-office plate |
| 4 | Positioning | Cream surface, asymmetric image + "calmer way to move" statement | Centered oversized statement "replaces the scramble with a schedule" | Wide calm statement "premium isn't a car category" |
| 5 | Service worlds | Two tall image cards (Private / Corporate) with gradient scrim | Two dramatic full-height panels | Two structured bordered cards with bulleted use-lists |
| 6 | Why PrimeKar | Warm surface, editorial numbered 01–04 list (no cards) | Folded into the segmented progression | **Teal feature band, 6 numbered operational-capability blocks** (Antaeus/Flyward) |
| 7 | How pre-scheduling | 4-step top-lined timeline | **Segmented tab progression** Schedule→Confirm→Ride→Arrive (Flighty) | Staggered numbered step rows (large numerals) |
| 8 | App storytelling | Single device + 3 floating illustrative status cards | **Three-phone deck** + floating cards, reserved screens | Clean split, single device, receipts/expense angle |
| 9 | YYC Airport | Full-bleed sky feature + capability chips | Full-bleed with giant **"YYC"** numeral | Split feature (image / cream text) + chips |
| 10 | Alberta routes | **Varied-scale grid** (Banff dominant, Canmore/Lake Louise, Jasper wide) | **Alternating cinematic bands** (image ↔ text, side-swapping) | Structured index (one featured + compact) |
| 11 | Corporate | Teal-elevated split, 4 use tiles | Teal-elevated numbered uses + image | **Teal feature band** + business-account panel |
| 12 | Fleet | 4 consistent-crop vehicle cards | **Spec-table rows** (Jesko restraint) | Structured bordered fleet cards on cream |
| 13 | Ride With Purpose | Warm-gold full-bleed centered editorial | Dark centered statement over faint plate | Calm two-column editorial |
| 14 | Final conversion | Warm surface, store badges + contact | Dark glow, "one plan away", badges | Teal band, "set up your account", account + badges |
| 15 | Footer | Teal-deep, 4-column + app badges | Near-black, 4-column | Teal, 4-column |

Every direction delivers the **visual-acceptance checklist**: a real focal point; ≥5 distinct section-composition patterns; ≥3 surface treatments; full-bleed media; asymmetric layouts; varied image scales and intentional crops; distinct desktop/mobile hierarchy; a complete footer; defined motion; **no equal-card grids, no repeated heading+paragraph slabs, no accidental empty regions, no generic-SaaS / generic-limo look.**

---

## Reference → PrimeKar implementation map (per direction)

- **A (35% Flyward · 30% Fitzroy · 25% Nelson · 10% original):** Flyward = service-world split + numbered support + hero-to-app journey; Fitzroy = left-aligned two-tone editorial display + destination map; Nelson = full-bleed photography + varied route-card hierarchy + light/dark surface changes.
- **B (35% Jesko · 30% Flighty · 20% Sonder · 15% original):** Jesko = single hyper-real focal object + dark premium negative space; Flighty = app-as-object + floating real-UI cards + segmented progression + repeated app CTAs; Sonder = intent-capture structure (choose context → app). *Jesko's blur-until-animation and Flighty's award badges rejected.*
- **C (35% Flyward · 30% Antaeus · 20% Raus · 15% original):** Flyward = numbered "how we support" + service families; Antaeus = numbered corporate capability + oversized-type authority (on brand, not grey); Raus = calm nav, spacing discipline, refined footer. *Antaeus stats + clipped hero rejected; Raus booking widget rejected.*

---

## Motion storyboard

Shared vocabulary (all directions): opacity+translate reveals ≤300–400ms, ease-out; hover = 2px lift / 1.03 image zoom; **no** WebGL/Three/GSAP/Lenis, no scroll-hijack, no autoplay video, no parallax beyond a ≤1.04 hero drift; **reduced-motion** = one global CSS rule zeroes all durations and disables the hero drift; nothing is hidden until animation completes.

| Beat | A | B | C |
|---|---|---|---|
| Hero entrance | Headline paints instantly; route-card dots/labels fade+draw (600ms) | Focal object paints instantly, then 5s ≤1.03 "breathe"; text static | Headline + trust facts paint instantly; plate fades once |
| Focal media | 6s ≤1.04 highway drift | Gentle breathe on the one object | None — composed still |
| Route line | Dashed path draws once on reveal | Bands cross-fade image↔text on entry | Static; featured card lifts on hover |
| Section reveal | Stagger children 60ms | Stage cross-fade on tab change | Numbered rows reveal top-down |
| Image-mask | Route cards 1.03 hover zoom under gradient | Panel 1.03 hover | Card border/gold-edge on hover |
| App screens | Floating cards settle then idle-float 8s (≤4px) | Deck: side phones scale-in, floating cards drift ≤6px | Single device fades; list rows stagger |
| Nav transition | Sheet slides from top 400ms | Same | Same |
| Card / CTA interaction | 2px lift + gold border warm | 2px lift; store badges gold glimmer | 2px lift; ink→gold border |
| Reduced-motion | All of the above → instant, static | Same | Same |

---

## Asset plan (no approved photography exists yet — see `docs/media-inventory.md`, `docs/asset-audit.md`)

Every image in every prototype is an **intentional art-direction placeholder** (gradient + grain + scrim + on-tile spec), never a grey box. To ship any direction, supply/approve, with documented rights:

1. **Hero plate** — black car on a Bow Valley highway at golden hour (A), car interior/apron at night or a clean app-screen render (B), SUV at a downtown Calgary office (C). 21:9 desktop → 4:5 mobile.
2. **Alberta route imagery** — Banff/Cascade, Canmore/Three Sisters, Lake Louise, Icefields→Jasper. Licensed real photography preferred; consistent crop + overlay per card.
3. **YYC / Calgary** — departures curb, terminal glow, downtown.
4. **Fleet** — Lexus / Tesla / Lincoln / Suburban, exterior + interior + luggage; **every shown vehicle must be bookable** (no stock limo imagery).
5. **App screens** — **reserved frames only** until clean, approved captures exist (legacy captures carry personal/financial data + "Tap and Go"/"Fixed Fare" wording — excluded). Verified functionality only.
6. **Logo SVG / transparent-on-dark**, favicon/OG, current official App Store + Google Play badge artwork (Apple `id6753017125`, Google `com.primekar.customer`).
7. **Font:** self-hosted Geist (already approved) replaces the system stack used in prototypes.

Directions **A** and **C** degrade most gracefully if photography is delayed (editorial gradients + text carry the page). Direction **B**'s impact is the most photography-dependent — with placeholders it trends dark/empty, i.e. closer to the current problem.

---

## Comparison, complexity & performance

| Criterion | A — Editorial Alberta | B — Cinematic + App | C — Modern Corporate |
|---|---|---|---|
| Premium feel | High (warm, editorial) | Highest (cinematic) — **if** photography lands | High (restrained, executive) |
| Differentiation vs generic | High | High | Medium (most "expected") |
| Serves dual audience (private + corporate) | **Best** | Good (app-led) | Corporate-led, under-serves leisure |
| Alberta route storytelling | **Strongest** | Strong (bands) | Structured but flatter |
| App storytelling | Good | **Strongest** | Good (expense angle) |
| Asset dependency / risk if delayed | Low–Med | **High** | Low–Med |
| Implementation complexity (existing Next/Tailwind/shadcn stack) | **Medium** | Medium-High (3-phone deck, tab state, alternating bands) | Medium (mostly grid/borders) |
| Performance risk | Low (static images + CSS reveal) | Medium (more large media, device deck) | Low |
| Accessibility risk | Low | Medium (segmented tabs need proper roles/keyboard) | Low |
| Reuses existing section components | High | Medium | High |

Complexity notes: all three fit the **existing stack** (Next App Router + Tailwind + shadcn + the CSS/IntersectionObserver reveal already in the repo — no new deps). B adds a client tabbed-progression component (needs `role="tablist"`/keyboard) and a layered device deck (image-weight + mobile fallback). Perf budgets are met by static `next/image` (AVIF/WebP), lazy below-fold, and CSS-only motion; B carries the most image weight.

---

## Recommendation — **Direction A (Editorial Alberta Luxury)**, with two grafts

**A is the primary recommendation.** It best matches PrimeKar's approved premium direction while fixing the exact failure of the rebuild:

1. **It kills the flat-slab problem directly** — image-rich editorial rhythm, cream/warm/teal/gold surface changes, varied image scales, asymmetric layouts, a real route-discovery focal point in the hero.
2. **It serves both audiences** — the private/Alberta-leisure world *and* the corporate world get first-class, visually distinct treatment (B is app-first; C under-sells leisure).
3. **It is the strongest Alberta-route story** — the varied-scale route grid is the most premium, least repetitive routes system of the three.
4. **Lowest asset + performance + a11y risk**, highest reuse of existing section components, and it **degrades gracefully** with placeholders while photography is sourced.

**Graft in from the others:**
- From **B**: the **app section's device-deck + segmented Schedule→Ride→Arrive progression** — the most confident way to tell the app story (use reserved screens until approved captures exist).
- From **C**: the **numbered operational-capability block** and the explicit **business-account pathway** — adds corporate rigor and a B2B conversion path without going full-corporate.

**Runner-up:** C (safest, most executive) if the near-term priority is corporate accounts over premium consumer brand. **B** is the highest-ceiling look but should wait until real cinematic photography and approved app screens exist — otherwise it reintroduces the dark-empty problem.

> Awaiting your direction selection before any production build. No further changes will be made until you choose.
