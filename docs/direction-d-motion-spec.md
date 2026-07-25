# Direction D — Cinematic Alberta Journey · Motion Spec & Interaction Report

**Phase:** Visual reset (concept). Research/prototype only — **no production code modified, nothing committed.**
**Branch:** `feature/primekar-visual-reset`
**Prototype (gitignored):** `prototypes/direction-d-cinematic-journey.html`
**Live URL (this session):** `http://localhost:8145/direction-d-cinematic-journey.html` — open in Chrome and scroll/hover/tap. Re-serve with `cd prototypes && python3 -m http.server 8145`.
**Companion audits:** `docs/visual-reference-audit.md`, `docs/visual-concept-directions.md`.

Self-contained HTML + CSS + ~5KB vanilla JS. **No** GSAP / Lenis / Three / WebGL / scroll-hijack / custom cursor / autoplay video / large libraries. Motion = CSS transforms + keyframes + `IntersectionObserver` + a passive scroll handler (rAF only for the hero parallax transform). Locked PrimeKar tokens, "driver" not "chauffeur", no invented claims/stats. Media are **polished branded placeholders** (layered gradients + topographic lines + SVG ridges/car), never grey boxes and never on-page art-direction instruction text — the detailed art-direction lives here in the docs.

---

## Motion references — re-inspected live this session (animation technique)

Re-opened and probed in-browser (DOM + running-animation + sticky inspection), not from prior notes:

| Site | Technique found (live) | What D borrows (natively) |
|---|---|---|
| **jeskojets.com** | GSAP + **Lenis** smooth-scroll, **4 sticky** sections, ~110 orchestrated running animations, dark cinematic intro | The *feel*: layered depth, one focal object, orchestrated hero entrance — rebuilt with CSS keyframes + `position:sticky`, no libraries |
| **flighty.com** | **Framer**, a **720px sticky** app section, scroll-swapped device screens (4 canvas / 5 video), scroll-driven timeline supported | The **sticky phone + scroll-swapped screens** app-storytelling pattern — rebuilt with native sticky + JS class-swap on scroll progress |
| flyward / fitzroy / nelson / raus | Scroll-reveal entrances, masked hero media, calm nav, hover media swaps (content-hidden-until-scroll noted as a **reject**) | Reveal-on-scroll via IntersectionObserver that **never hides content permanently**; hover-driven service media swap |
| sonder.com/en-ca/app | Not re-verifiable — Sonder still renders **unstyled** in this browser (CSS fails to load, both sessions) | App-page intent structure only; app-visual role kept on Flighty |

Guardrail confirmed again: Jesko/Antaeus/Flyward all use content-hidden-until-animation. **D paints all hero and server-rendered content immediately** and treats motion as additive; reduced-motion is first-class.

---

## Motion storyboard (beat by beat)

**1 · Hero load (auto, immediately after paint):** sky gradient + gold sunrise glow (`glowPulse` 9s loop) → mountain ridge layers set → **route line draws** Calgary→Canmore→Banff→Lake Louise (`stroke-dashoffset` 2.6s) → **route labels pop** progressively (staggered 1.1s→3.1s) → **car silhouette** slides in from right (`carIn` 2.4s) with a repeating **light sweep** across it → headline lines **rise in sequence** (0.5/0.66/0.82s, third line gold) → lead → CTAs → scroll cue. Nav is present from first paint.

**2 · Hero → next (scroll):** hero layers **parallax** at per-layer depth (rAF); the `.intro` section overlaps with a gradient continuing the hero tone — no hard cut, no empty teal band.

**3 · Service worlds (hover/focus/click):** a large media stage cross-fades/scales between Airport / Alberta routes / Corporate; the supporting caption text swaps; a gold **active bar** scales in on the selected list item and an arrow slides in. Keyboard-focus and click also drive it.

**4 · Journey Plan→Schedule→Pickup→Travel→Arrive (scroll-driven, sticky):** the section pins; a **progress line fills** with scroll; step dots **activate in sequence** (gold fill + ring + scale); a large statement line **changes per step**.

**5 · App storytelling (scroll-driven, sticky — Flighty/Sonder):** the phone stays pinned centre while scroll **swaps the on-screen UI** (Schedule → Confirmed → En route → Arrived) and the side copy advances; floating "Trip scheduled" / "Driver assigned" chips fade in; progress ticks fill; store badges stay reachable.

**6 · Alberta routes (scroll-driven + interactive, sticky):** an SVG Alberta **map line extends** as the active destination advances Calgary→Canmore→Banff→Lake Louise; the active **pin pulses**; the side panel + media cross-fade. **Tabs and pins are clickable** to jump (scroll-follow pauses briefly).

**7 · Corporate:** reveal-on-scroll, numbered 01–04 capability rows, image/text composition, business-account CTA (calm, restrained).

**8 · Fleet (interactive editorial):** large vehicle stage; **tabs swap** the media + model info (Lexus / Tesla / Lincoln / SUV) with cross-fade; no invented capacity — "seating confirmed in the app."

**9 · Ride With Purpose:** restrained fade/scale over a low-opacity full-bleed plate; no numbers/testimonials.

**10 · Final + footer:** glow-lit conversion with personal/business path cards (hover lift) + store badges; footer columns reveal on entry.

**Micro-interactions:** header shrink + surface change past 40px; animated Services **dropdown** (hover/focus-within); animated **mobile menu** (hamburger morph + staggered links); button hover-lift + press-scale; **link underline** slide; destination hover/focus; card/media cross-fades; **FAQ** accordion; route-indicator movement.

**Reduced motion:** one media query zeroes all durations, forces every `.reveal`/hero element to its final visible state, and disables parallax, sweep and glow — nothing is hidden.

**Mobile simplification:** hero stacks (headline → CTAs → car), scattered route points hidden (simplified route treatment); sticky journey/app/route sections **collapse to static** (no pin-scroll) so the page is ~12.6k px with no overflow; fleet/route become tap-driven.

---

## Interactions IMPLEMENTED and verified working (in-browser state assertions)

1. Hero entrance timeline — nav → eyebrow → staggered headline lines → lead → CTAs (CSS keyframes on load). ✓
2. Hero route-line draw + progressive labels + car entrance + light sweep + glow pulse. ✓
3. Header shrink / surface change on scroll (`.scrolled` toggles past 40px). ✓ verified
4. Hero parallax (layers translate by depth). ✓ (rAF; runs in Chrome)
5. Reveal-on-scroll for all below-fold content (IntersectionObserver, with no-JS/reduced-motion fallback to visible). ✓
6. Interactive service-worlds selector — hover/focus/click swaps media + caption + active bar. ✓ verified (media index + heading change)
7. Journey scroll progression — fill line + sequential step activation + changing statement. ✓ verified (steps 1→3→5, fill 98%)
8. App sticky storytelling — scroll-driven screen swap + copy + floating chips + progress ticks. ✓ verified (screen 0→1→3, copy synced)
9. Alberta routes — scroll-driven active destination + map-line extend + pin pulse + panel swap. ✓ verified (pin 0→2→3, dashoffset→0)
10. Alberta routes manual control — tab/pin click selects a destination. ✓ verified
11. Fleet tabs — click swaps media + model info. ✓ verified
12. FAQ accordion — open/close with height transition + icon rotate. ✓ verified
13. Animated Services dropdown (CSS hover/focus-within, caret rotate). ✓
14. Animated mobile menu — hamburger morph + full-screen sheet + staggered links + scroll-lock. ✓
15. Micro states — button hover-lift/press-scale, animated link underline, store/path-card hover. ✓
16. `prefers-reduced-motion` — disables motion, forces final visible state. ✓

## Interactions that remain CONCEPTUAL (production, not in this prototype)

- **Real media:** all imagery is branded CSS placeholders; production needs approved photography (hero car/Alberta, YYC, routes, fleet) via `next/image`.
- **Real app screens:** the phone shows CSS-drawn reserved UI, not actual PrimeKar screens (legacy captures carry personal/financial data — excluded until clean approved captures exist).
- **Geographically accurate map:** the hero + routes map lines are stylised, not a real Alberta geo-map.
- **Scroll binding:** production could replace the rAF scroll handler with CSS **scroll-driven animations** (`animation-timeline: scroll()/view()`, supported in the test browser) + fallback, or the already-approved Motion library, for smoother binding on low-end devices.
- **Full menu a11y:** dropdown/mobile-menu need production ARIA (roving tabindex, Escape, focus return) and the repo's `inert` trap pattern.
- **Mobile route/app:** simplified to stacked/tap (no pin-scroll); a production build could add swipe and a compact pinned variant.
- **Momentum smooth-scroll** (Jesko's Lenis feel) intentionally omitted per constraints.

## Performance-risk notes

- **Low risk.** No external libraries, no WebGL, no video, no web fonts loaded at runtime (prototype uses a system stack; production self-hosts Geist). Total JS ~5KB; CSS-only motion.
- Scroll handler calls `getBoundingClientRect()` for 3 sticky sections per event — cheap, but production should throttle or move to IntersectionObserver **sentinels** / CSS scroll-timeline to guarantee 60fps on low-end mobiles.
- Sticky sections are tall (`300–420vh` desktop) — content weight is trivial (gradients/SVG); the real budget cost appears only when placeholders become **real images** → mitigate with responsive `next/image`, lazy-loading below the fold, AVIF/WebP, and preloading only the hero.
- Reduced-motion path removes all continuous animation (glow/sweep/parallax) entirely.

## Asset requirements (unchanged from `media-inventory.md` / `asset-audit.md`)

Hero cinematic car-on-Bow-Valley-highway plate (21:9→4:5); Alberta route photography (Banff/Cascade, Canmore/Three Sisters, Lake Louise, Icefields→Jasper); YYC/Calgary; **fleet** exteriors/interiors (every shown vehicle bookable, no stock limo); **clean approved app screens** (reserved until supplied); logo SVG/transparent-on-dark; official App Store (`id6753017125`) + Google Play (`com.primekar.customer`) badges; self-hosted Geist. Placeholders are branded and demonstrate scale/crop/overlay/lighting so real media drops in without layout change.

---

## Why D clears the bar

Visibly stronger than the live site, the rejected rebuild, and Directions A/B/C: **one memorable cinematic hero** (layered depth + drawn Alberta journey line + moving vehicle + light sweep + staggered display type, immediate paint); **four+ genuine motion-led sections** (interactive service worlds, scroll journey, sticky app, scroll route-map); real light↔dark rhythm (dark hero/worlds/journey/app → cream routes → paper corporate → black fleet → warm purpose); polished branded media (no wireframe captions); premium desktop **and** fixed mobile; no empty regions; no repeated card grid. It fuses A's Alberta route storytelling, B's cinematic hero + app storytelling + movement, and C's corporate clarity where it earns its place.
