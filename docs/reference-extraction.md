# Reference-Site Extraction

Live inspection via the in-app browser (Playwright-class). Homepage **and** one role-relevant internal page per reference, **desktop (1440×900) and mobile (375×812)**. Read-only (no forms/bookings/accounts). Inspection date: **2026-07-18**.

Blueprint influence weighting (decision influence, not visual copying): **Flyward 32% · Fitzroy 20% · Flighty 15% · Nelson 10% · Antaeus 10% · Raus 8% · Sonder 3% · Jesko 2%.**

## Live inspection results

### 1. Flyward — VERIFIED
- Homepage: `https://flyward.com/` · Internal: `https://flyward.com/corporate-service` · Desktop 1440×900 + Mobile 375×812.
- **Assigned pattern verified:** overall homepage structure, service hierarchy (Private/Corporate families), trust sequence, testimonials, corporate presentation, content→CTA. Homepage flow: hero → "complex travel simple" → Private/Corporate families (each EXPLORE) → 4 numbered operational blocks → proof stats (94% repeat, 89% NPS) → outcome-specific testimonials → security → contact form → footer. Corporate page: hero → 3 service groups (Corporate Travel Mgmt / MICE & Group / Global Mobility) → stats → testimonials → FAQ.
- **Useful:** clear service division; numbered operational blocks; outcome-specific testimonials; restrained whitespace; single CTA per section.
- **Rejected:** travel-agent wording; invented proof metrics (94%/89%); "Zero Trust/Data Kill Switch" security framing; exact geometry/typography.
- **Change noted (v7 §15):** Blueprint's `/private` and `/corporate` now 404; live routes are `/private-service`, `/corporate-service`. Recorded, not inferred.
- **Accessibility/Perf:** cookie modal blocks nav until dismissed; SPA hydration briefly returns an empty tree (JS-dependent). Mobile: clean hero, hamburger nav, no horizontal overflow.

### 2. Fitzroy Travel — VERIFIED
- Homepage: `https://fitzroy-travel.com/` · Internal: `https://fitzroy-travel.com/destinations/kenya/` · Desktop + Mobile.
- **Assigned pattern verified:** long-form route/destination-page architecture. Kenya page: breadcrumb ("Home — Kenya") → destination H1 → tagline → Enquire CTA → long-form sections (heritage/wildlife/communities) → accommodation/camp cards → related content. Nav: Destinations / Departures / Our Process / About Us.
- **Useful:** breadcrumb + destination H1; long-form premium content coexisting with imagery; sub-destination/camp cards; enquiry path.
- **Rejected:** safari prose/pricing; multi-step lead form for simple rides; luxury-travel language.
- **Accessibility/Perf:** hero image lazy-loads (white area before paint); mobile reflows cleanly, hamburger nav, share icons.

### 3. Flighty — VERIFIED
- Homepage: `https://flighty.com/` · Internal: `https://flighty.com/business` · Desktop + Mobile.
- **Assigned pattern verified:** app-download storytelling, real interface screens, feature sequencing (#before-fly / #at-the-airport / #after-fly), device framing, download conversion. Business page: business inquiries (bulk/accounts/API/perks) + structured footer columns (Product/Compare/Company/Support).
- **Useful:** real product screens over generic icons; problem→interface→benefit; repeated context-sensitive "Get the app"; direct store link on mobile.
- **Rejected:** award treatment; Apple-only identity; animation density; long homepage.
- **Accessibility/Perf:** bold high-contrast type; direct App Store link (`id1358823008`). Mobile: hamburger + direct "Get the app" + real app screen; no overflow.

### 4. Nelson Travel — VERIFIED
- Homepage: `https://www.nelson.travel/` · Internal: `https://www.nelson.travel/destinations/kenya` · Desktop + Mobile.
- **Assigned pattern verified:** destination-image placement, editorial composition, section hierarchy, property/route cards. Kenya page: breadcrumb → section tabs (Overview/Gallery/When to Go/Accommodation/Itineraries) → editorial intro + "Our Take" → key locations/experiences → property cards with consistent crop + location tags.
- **Useful:** full-bleed destination hero; consistent card cropping; editorial rhythm; section tabs; trust strip near top.
- **Rejected:** global-destination taxonomy scale; review volumes; carousels; busy "everything everywhere" homepage.
- **Accessibility/Perf:** large hero imagery; mobile shows full-bleed destination hero + horizontally-scrolling section tabs; cookie overlay.

### 5. Antaeus Travel Group — VERIFIED
- Homepage: `https://www.antaeustravel.com/` · Internal: `https://antaeustravel.com/services/corporatetravel/` · Desktop + Mobile.
- **Assigned pattern verified:** corporate categories + operational capability + B2B trust. Corporate page: categories (Business/VIP, Bleisure, Meetings, Incentives, Conferences, Events) → MICE breakdown → numbered offerings (24/7 support, dedicated account manager, negotiated fares, digital approach, policy consultancy, supplier mgmt) → proof stats → technology → cross-service links → contact CTA.
- **Useful:** corporate use-case grouping; operational-support language; technology-through-tasks; trust via real business details.
- **Rejected (explicitly):** invented enterprise numbers (150+ customers, 97% retention, 38 years, office network); uppercase-heavy design; dated nav.
- **Accessibility/Perf concern:** homepage + corporate hero use a **scroll-reveal clip animation that leaves the H1 partially hidden** in a static state (content-behind-animation) — a REJECT pattern; flag as accessibility/reduced-motion risk. Mobile confirmed the clipped-hero behaviour.

### 6. Raus — VERIFIED
- Homepage: `https://www.raus.life/` · Internal: `https://www.raus.life/staying-with-us` · Desktop + Mobile.
- **Assigned pattern verified:** calm navigation, whitespace, taxonomy, footer. Nav ≤7 items (Book a cabin / Staying with us / Extras & Experiences / Become a host / Gift Cards + EN/DE). Internal page: calm sectioned content (Cabins / Farms & Estates) with generous whitespace.
- **Useful:** simple top-level nav; generous spacing; intent-based categories; restrained premium feel.
- **Rejected:** cabin-booking widget; sustainability claims; beige palette; location-search UI.
- **Accessibility/Perf:** chunky logotype; mobile hamburger with readable links; cookie modal. No overflow.

### 7. Sonder — PARTIALLY VERIFIED
- Homepage: `https://www.sonder.com/en-ca` (redirects to `sonder.com`) · Internal: **not separately styled-inspected** (see below) · Desktop attempted.
- **Failure recorded (v7 §15):** Sonder's **CSS failed to load in this browser on both attempts** (last session + this session) — page renders as **unstyled DOM**. This is a rendering/asset-blocking issue in the in-app browser, not a content 404.
- **What IS verifiable (DOM/IA level):** city selector + "Select a city" search entry; property cards grouped by city (The Winfield/LA, Business Bay/Dubai, Maisonneuve/Montreal, One Platt/NYC, Park House/Amsterdam); carousel controls. This confirms the *booking-entry / city-selection* IA at a structural level.
- **NOT verified:** styled visual design, conversion UX, page-specific CTA styling, website→app handoff visuals — cannot be assessed from an unstyled render. **Not substituted from memory or the Blueprint.**
- **Proposed reassignment (pending approval, Blueprint fallback):** move the "website→app handoff / conversion-visual" evidence role to **Flighty** (already VERIFIED for app conversion) and keep Sonder only for the *structural* intent-capture pattern. → decision item.
- **Accessibility/Perf:** not assessable (unstyled).

### 8. Jesko Jets — VERIFIED
- Homepage: `https://jeskojets.com/` · Internal: same-URL fleet/spec section (`#flight`; single-page site, anchor nav About/Our Fleet/Advantages/Global) · Desktop + Mobile.
- **Assigned pattern verified (visual only):** confident display type ("We are movement / We are distinction"), heavy negative space, dark premium atmosphere, cinematic 3D airplane-window hero; fleet spec presentation (Gulfstream 650ER spec table observed prior session).
- **Useful (in-scope):** bold hero type scale; dark teal-adjacent premium mood; restrained palette; fleet spec table concept.
- **Rejected (explicitly, out of scope for PrimeKar stack):** the blurred **text-behind-animation reveal**, scroll-controlled sequences, heavy 3D/WebGL feel, "spec theatre." Only the static visual *principles* transfer (Section 16/25).
- **Accessibility/Perf concern:** hero display text renders **blurred until an animation completes** (content-hidden-until-animation) — a REJECT pattern; PrimeKar must show hero content immediately.

## Summary table

| # | Reference | Homepage | Internal page | Desktop | Mobile | Status |
|---|---|---|---|---|---|---|
| 1 | Flyward | `/` | `/corporate-service` | ✅ | ✅ | **VERIFIED** |
| 2 | Fitzroy | `/` | `/destinations/kenya/` | ✅ | ✅ | **VERIFIED** |
| 3 | Flighty | `/` | `/business` | ✅ | ✅ | **VERIFIED** |
| 4 | Nelson | `/` | `/destinations/kenya` | ✅ | ✅ | **VERIFIED** |
| 5 | Antaeus | `/` | `/services/corporatetravel/` | ✅ | ✅ | **VERIFIED** |
| 6 | Raus | `/` | `/staying-with-us` | ✅ | ✅ | **VERIFIED** |
| 7 | Sonder | `/en-ca` | not styled-inspectable | ⚠ unstyled | — | **PARTIALLY VERIFIED** |
| 8 | Jesko | `/` | `#flight` (single-page) | ✅ | ✅ | **VERIFIED** |

## Global "reject" guardrails (confirmed live)
Antaeus scroll-clip hero + Jesko blurred-until-animation hero both demonstrate the **content-hidden-until-animation** anti-pattern PrimeKar must avoid (hero content paints immediately; reduced-motion first-class). No source code, layout geometry, wording, photography, or typography is copied — patterns only.

## Open decision
- **Sonder reassignment** (route "web→app handoff" visual evidence to Flighty) — pending approval. All other references VERIFIED for their assigned roles.
