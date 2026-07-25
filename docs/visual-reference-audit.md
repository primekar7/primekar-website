# Visual Reference Audit — High-Fidelity Reverse Engineering

**Phase:** Visual reset (concept phase). Research only — no production code modified.
**Branch:** `feature/primekar-visual-reset`
**Inspection date:** 2026-07-21 (this session), cross-referenced against the prior live inspection recorded in `reference-extraction.md` (2026-07-18).
**Method note (honesty):** Every reference was re-opened **live** in the in-app browser this session and its **hero / above-the-fold composition captured by screenshot** (the highest-signal, animation-independent evidence that differentiates concept directions). Full below-the-fold structure was read from live page text where the site allowed it (Flyward captured in full). Several references (Flyward, Antaeus, Jesko) hide below-fold content behind scroll-triggered reveal animations that render **blank until natural scroll** — this made programmatic deep-scroll screenshots unreliable, so internal-page section detail is taken from the already-verified `reference-extraction.md` (live 2026-07-18) which today's re-inspection confirms is still accurate. **Sonder still renders unstyled** in this browser (CSS fails to load — same failure as 2026-07-18); only its structural IA is verifiable, not its styled visual design. Nothing below is copied code, wording, imagery, or geometry — patterns and principles only.

---

## How to read the decision column

- **Adopt** — translate this principle strongly into PrimeKar (originalised to brand + content).
- **Adapt** — take the underlying idea but change it materially for PrimeKar's product (pre-scheduled black-car, app-based, no invented claims).
- **Reject** — do not use (anti-pattern, off-brand, or unverifiable-claim dependent).

Brand guardrails applied to every row: locked palette (teal `#1D2B2E` / gold `#B8924A` / cream `#F5DDCA` / warm-white `#F4EFE6`); Geist type; "driver" never "chauffeur"; no "limousine / always on time / in seconds / instant"; **no invented stats or proof**; hero content paints immediately; no WebGL/GSAP/scroll-hijack/autoplay-video; reduced-motion first-class.

---

## 1. FLYWARD — `flyward.com` (re-verified live 2026-07-21: hero + full homepage text)

| Aspect | Observation (live) | PrimeKar target | Decision | Reason |
|---|---|---|---|---|
| Hero composition | Photograph **masked into a geographic silhouette** (Australia landmass), centered thin **serif** display "WITH YOU AT EVERY HORIZON", faint cartographic grid + compass-star marks in margins, ghost "DISCOVER" pill | Hero (Dir A/C) | **Adapt** | Mask an **Alberta / Rockies** image (or route line) into a meaningful shape; keep the quiet cartographic motif. Use PrimeKar display type, not serif, unless Dir A adopts an editorial serif accent. |
| Service-world split | "TRAVEL DESIGNED AROUND YOU" → two families **PRIVATE TRAVEL** / **CORPORATE TRAVEL**, each with its own EXPLORE | Service-world separation | **Adopt** | Directly maps to PrimeKar's required personal-vs-corporate pathway split. |
| Numbered support | "HOW WE SUPPORT EVERY JOURNEY" → **4 numbered operational blocks** (end-to-end / 24-7 / live monitoring / problem resolution) | "How PrimeKar supports important journeys" | **Adopt** | The numbered-operational-block pattern is the single most reusable Flyward structure. Rewrite with verified PrimeKar operations only. |
| Proof stats | "EXPERIENCE YOU CAN RELY ON" → 94% repeat, 89% NPS, 5 yrs, 25+ agents | — | **Reject** | PrimeKar has **no verified stats**. Do not fabricate. Replace with a qualitative trust strip built only on verified facts (Calgary-based, app-managed, YYC coverage). |
| Testimonials | Named, outcome-specific quotes | Testimonials (conditional) | **Adapt** | Structure is good, but omit entirely until real testimonials exist (as the current build already does). |
| Security section | "Zero Trust / Data Kill Switch" framing | — | **Reject** | Invented/unverifiable security theatre. |
| Nav | Centered wordmark, split nav (About/Private/Corporate/Careers … Contact) | Header | **Adapt** | Centered-logo split nav is premium; PrimeKar keeps left logo + right app CTA for a stronger conversion anchor. |
| Typography | Elegant letter-spaced serif display vs sans body — high style contrast | Type system | **Adapt** | PrimeKar is single-family Geist; achieve contrast via **weight + scale + two-tone colour**, not a second serif family (Dir A may add one editorial display face if approved). |
| Motion | Below-fold content **hidden until scroll animation** fires (confirmed blank on jump-scroll) | — | **Reject** | Content-behind-animation anti-pattern. PrimeKar hero + sections paint immediately. |
| Mobile | Clean hero, hamburger, no overflow | Mobile nav | **Adopt** | Confirms a calm mobile stack works for this content depth. |

**Internal — `/corporate-service` & `/private-service`** (structure per `reference-extraction.md`, 2026-07-18): corporate hero → 3 service groups → stats → testimonials → FAQ; private = narrative + image-led pacing → conversion. → **Adopt** the corporate 3-group + private narrative structures for PrimeKar's corporate and private-trip pages (future phase), **Reject** the stats.

---

## 2. FITZROY TRAVEL — `fitzroy-travel.com` (re-verified live 2026-07-21: hero)

| Aspect | Observation (live) | PrimeKar target | Decision | Reason |
|---|---|---|---|---|
| Hero composition | **Left-aligned** oversized **two-tone** condensed display ("JOURNEYS TO" cream + "AFRICA" gold-tan), small eyebrow "WELCOME TO FITZROY", short subhead, **solid rectangular CTA**, atmospheric dark-gradient image behind | Hero (Dir A) | **Adopt** | Two-tone cream/gold display maps **exactly** to PrimeKar's locked palette. This is Direction A's hero DNA. |
| Destination discovery | Right-side **interactive dotted map** with location pins (labelled ZIMBABWE) | Alberta routes / hero side panel | **Adapt** | Replace with an **Alberta map** dotting Banff / Canmore / Lake Louise / Jasper — a genuine route-discovery focal element (far stronger than the current build's thin dotted line). |
| Nav | Light top bar, dropdown menus, phone number, solid accent CTA | Header | **Adapt** | PrimeKar keeps a dark header for brand, but the dropdown grouping (Services/Routes) is useful. |
| Typography | Heavy condensed uppercase display; small tracked eyebrow | Type | **Adapt** | Editorial-magazine confidence; achieve via Geist heavy weight + tight tracking. |
| Image treatment | Full-bleed atmospheric gradient over photography; text sits on negative-space side | Section media | **Adopt** | Kills the "flat teal slab" problem — every hero/section gets depth via image + gradient scrim. |
| Motion | Subtle; map dots animate in | Route map | **Adapt** | Gentle dot/label reveal only; reduced-motion static. |
| Mobile | Reflows cleanly, hamburger | Mobile | **Adopt** | — |

**Internal — destination index + `/…/kenya` long-form** (per prior inspection): breadcrumb → destination H1 → tagline → enquiry CTA → long-form editorial sections interrupted by imagery → sub-cards. → **Adopt** for PrimeKar route pages (Calgary-to-Banff etc.), **Reject** factual destination copy.

---

## 3. FLIGHTY — `flighty.com` (re-verified live 2026-07-21: hero)

| Aspect | Observation (live) | PrimeKar target | Decision | Reason |
|---|---|---|---|---|
| App-as-object hero | Oversized bold sans headline, then a **hand-held phone showing the real app UI** as the central visual object, surrounded by **floating real-UI notification cards** ("Mom landed", "Gate changed", "Check In open") | App storytelling (Dir B) | **Adapt** | PrimeKar makes the app the hero object too — but with **RESERVED app-screen placeholder frames** and **illustrative** status cards ("Driver assigned", "Trip scheduled 5:30 AM", "Arriving YYC"), because no approved app screenshots exist and legacy captures carry personal/financial data. |
| Progression control | Sticky **segmented pill** (Preflight / At the airport / After landing / Download) driving feature storytelling | App section / How pre-scheduling works | **Adopt** | Becomes PrimeKar's **Schedule → Ride → Arrive → Download** progression — a strong, non-repetitive way to sequence the experience. |
| Award badges | "Apple Design Award / App of the Year" | — | **Reject** | Not PrimeKar's; unverifiable. |
| Repeated app CTA | Context-sensitive "Get the app" repeated down the page; direct store link on mobile | App CTAs | **Adopt** | Confident, repeated, context-aware app CTAs (Apple `id6753017125`, Google `com.primekar.customer`). |
| Typography | Very large high-contrast black display on light ground | Type (Dir B may invert) | **Adapt** | Scale confidence yes; PrimeKar Dir B is dark-ground so display is cream on teal. |
| Motion | Cards drift/parallax gently around device | App section | **Adapt** | Gentle float only; no scroll-hijack; reduced-motion static grid. |
| Mobile | Hamburger + direct "Get the app" + single real app screen | Mobile app section | **Adopt** | — |

---

## 4. NELSON TRAVEL — `nelson.travel` (re-verified live 2026-07-21: hero)

| Aspect | Observation (live) | PrimeKar target | Decision | Reason |
|---|---|---|---|---|
| Photography-first hero | **Full-bleed** golden-hour landscape (silhouettes on a savannah ridge), centered elegant **serif** display "Timeless Holidays. Unlocked.", ghost CTA, **trust strip** below the fold edge | Hero (Dir A) | **Adopt** | The image *is* the hero — the direct antidote to the image-less rebuild. Use full-bleed Alberta landscape / black-car-on-mountain-highway. |
| Dual nav bars | Centered logo on white + dark secondary nav (Destinations/When to go/Itineraries/Accommodation/About) | Header | **Adapt** | Two-tier nav is heavier than PrimeKar needs; keep single dark header. |
| Card scale variation | Varied "worlds"/destination card sizes, consistent crop, location tags | Service worlds / Alberta routes | **Adopt** | The **Nelson route hierarchy** (one dominant, others paired/wide) directly informs PrimeKar's routes grid — kills the equal-card problem. |
| Surface transitions | Light ↔ dark surface changes down the page | Section-tone strategy | **Adopt** | Justifies more than teal-on-teal: introduce cream/warm-white light sections for rhythm. |
| Typography | Editorial serif display + clean sans body | Type | **Adapt** | Contrast via colour/scale in Geist; Dir A may add a serif display accent. |
| Motion | Subtle hero settle, hover mask on cards | Cards | **Adapt** | Image-mask hover reveal on route cards; reduced-motion static. |
| Mobile | Full-bleed hero, horizontally-scrolling section tabs | Route pages | **Adapt** | Horizontal section tabs useful on long route pages. |

---

## 5. ANTAEUS TRAVEL — `antaeustravel.com` (re-verified live 2026-07-21: hero)

| Aspect | Observation (live) | PrimeKar target | Decision | Reason |
|---|---|---|---|---|
| Enterprise minimalism | **Massive black display type** ("ONBOARD") on light-grey ground, heavy negative space | Corporate authority (Dir C) | **Adapt** | The calm, oversized-type-on-light enterprise language is Direction C's spine — but on brand teal/cream, not grey. |
| Numbered services | Numbered corporate offerings (24/7 support, account manager, negotiated fares, policy, tech) | Corporate section / numbered ops | **Adopt** | Numbered operational categories = trustworthy B2B structure. Rewrite with verified PrimeKar corporate use-cases only. |
| Proof/stats | 150+ customers, 97% retention, 38 years, office network | — | **Reject** | Explicitly invented-number risk. PrimeKar uses none. |
| Clipped-reveal hero | H1 **partially hidden**, revealed by scroll-clip animation (captured mid-clip live) | — | **Reject** | Content-hidden-until-animation anti-pattern. Confirmed live again. |
| Typography | Uppercase-heavy, oversized | Type | **Adapt** | Take the scale, drop the all-uppercase density. |
| Mobile | Clipped-hero behaviour persists | — | **Reject** | Same anti-pattern on mobile. |

**Internal — `/about-us` & `/corporatetravel`** (prior inspection): company-story timeline, values, alternating layouts, numbered corporate categories. → **Adapt** alternating layouts + numbered categories for PrimeKar About + Corporate pages (future phase); **Reject** any unverified history/number.

---

## 6. RAUS — `raus.life` (re-verified live 2026-07-21: hero)

| Aspect | Observation (live) | PrimeKar target | Decision | Reason |
|---|---|---|---|---|
| Calm wordmark hero | Huge chunky wordmark, one short subhead, **generous whitespace**, side-by-side photos | Header / quiet moments | **Adopt** | Spacing discipline and calm pacing between richer sections — the "premium quiet moment" PrimeKar lacks. |
| Restrained nav | ≤6 top-level items, language toggle | Header nav | **Adopt** | Keep PrimeKar nav uncluttered; group under Services/Routes. |
| Booking control bar | Region / dates / guests / Search widget in a warm panel | — | **Reject (as widget)** | PrimeKar booking is **app-based**, not a web booking widget. Translate only the *refined control-cluster styling* into a "Plan your ride" CTA group. |
| Footer | Simple, refined, organised | Footer | **Adopt** | Calm, well-grouped footer. |
| Typography | Chunky friendly display, quiet body | Type | **Adapt** | Confidence via weight; PrimeKar stays sharper/more premium. |
| Motion | Micro-interactions, gentle | Micro-interactions | **Adopt** | Restrained hovers only. |
| Mobile | Hamburger, readable links | Mobile menu | **Adopt** | — |

---

## 7. SONDER — `sonder.com/en-ca` (re-verified live 2026-07-21: **unstyled DOM only**)

| Aspect | Observation (live) | PrimeKar target | Decision | Reason |
|---|---|---|---|---|
| Intent-capture IA | "Select a city" search → **city-grouped property cards** (LA/Dubai/Montreal/NYC/Amsterdam) → carousel | App-in-service narrative | **Adapt (structure only)** | Confirms an intent-first "choose your context" IA. For PrimeKar: "choose airport / route / corporate" entry that leads into the app. |
| Styled visual design | **Not verifiable** (CSS fails to load in this browser, both sessions) | — | **N/A** | Do not fabricate Sonder's styled UX from memory. |
| Website→app handoff visual | Not assessable unstyled | App conversion | **Reassign to Flighty** | Per prior decision item: route the app-handoff *visual* evidence to Flighty (verified), keep Sonder for structural intent-capture only. |

---

## 8. JESKO JETS — `jeskojets.com` (re-verified live 2026-07-21: hero)

| Aspect | Observation (live) | PrimeKar target | Decision | Reason |
|---|---|---|---|---|
| Cinematic single-object hero | **One hyper-real focal object** (a lit airplane window into blue sky) centered in a **dark, warmly-lit field**, minimal top nav, single "Book the Flight" pill, almost no hero text | Hero (Dir B) | **Adapt** | Direction B's anchor: one dominant hyper-real focal object (black-car detail / interior / phone) in a dark teal atmosphere, heavy negative space, one confident CTA. |
| Negative space | Vast controlled emptiness around the focal object | Hero pacing | **Adopt** | *Intentional* negative space (vs the rebuild's *accidental* empty teal). |
| Dark premium mood | Warm rim-lighting, restrained palette | Dir B surfaces | **Adopt** | Maps to teal + gold rim-light. |
| Intro + blur reveal | Near-black intro animation; hero text blurred until animation completes (prior inspection) | — | **Reject** | Content-hidden-until-animation. PrimeKar paints hero immediately. |
| Typography | Bold display, sparse | Type | **Adapt** | Scale + restraint; content visible on first paint. |
| Mobile | Simplified single object | Mobile hero | **Adopt** | — |

---

## Cross-reference summary — which reference drives which PrimeKar section

| PrimeKar homepage section | Primary reference(s) | Pattern adopted |
|---|---|---|
| Header / mobile nav | Raus, Flyward | Calm ≤6-item nav, left logo + right app CTA, `inert`-trapped mobile modal |
| Hero | Jesko (B), Fitzroy + Nelson (A), Flyward (C) | Single focal object / two-tone editorial / masked-image |
| Positioning statement | Flyward | "We make complex travel simple" → PrimeKar pre-scheduled clarity |
| Service-world separation | Flyward | Private vs Corporate families, each EXPLORE |
| Why PrimeKar | Antaeus, Flyward | Verified-fact trust, no stats |
| How pre-scheduling works | Flighty, Flyward | Segmented Schedule→Ride→Arrive progression + numbered ops |
| App storytelling | Flighty (+ Sonder structure) | App-as-object + reserved screen frames + floating illustrative cards |
| YYC Airport | Nelson, Flyward | Full-bleed feature + operational clarity |
| Alberta routes | Fitzroy, Nelson | Route-discovery map + varied-scale route cards (Banff dominant) |
| Corporate | Antaeus, Flyward | Numbered corporate use-cases + enquiry pathway |
| Fleet | Nelson, Jesko | Consistent-crop vehicle cards / spec restraint; every shown vehicle bookable |
| Ride With Purpose | Nelson, Fitzroy | Editorial brand-story moment |
| Final app/contact conversion | Flighty, Jesko | Confident single conversion focus |
| Footer | Raus, Flighty | Organised multi-column, calm |

## Global reject guardrails (confirmed live this session)
Flyward (blank-until-scroll), Antaeus (clipped H1), and Jesko (blur-until-animation) all demonstrate the **content-hidden-until-animation** anti-pattern PrimeKar must avoid. All PrimeKar hero and server-rendered content must paint immediately; motion is additive only; reduced-motion is first-class. No reference code, geometry, wording, photography, or logo is reused — principles only.
