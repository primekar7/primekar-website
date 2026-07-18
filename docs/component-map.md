# Component Map (proposal)

Reusable primitives + the reference-source owner for each (Blueprint p11 & p24). Prevents arbitrary per-section reference choices. Every component: PrimeKar tokens (`design-system.md`), mobile-first, accessible, typed, content separated from markup (Blueprint p25). Reference role = **pattern only**, never copied markup/geometry/wording.

## Primitives (build first — design foundation, Phase B/design)

`Container` · `Section` · `HeadingGroup` (eyebrow/H/sub) · `Button` (primary/secondary/ghost) · `Link` · `Card` base · `Icon` · `Badge` · `Image` (next/image wrapper w/ ratio) · form controls (`Field`, `Label`, `Error`, `Select`, `Textarea`, `ConsentCheckbox`) · `Breadcrumb` · `Disclosure`/`Accordion` (FAQ) · `Dialog`/`Sheet` (mobile nav) · `SkipLink`.

## Composite components → reference owner (Blueprint p11)

| Component | Primary ref | Supporting | Intent |
|---|---|---|---|
| Global design system | Flyward | Raus | Coherent premium structure, restrained spacing |
| Header + desktop nav | Raus | Flyward | Simple hierarchy, visible Download App |
| Mobile navigation | Raus | Sonder | Readable full-height menu, direct actions |
| Homepage hero | Flyward | Jesko Jets | Clear service statement + controlled premium atmosphere |
| Service-families grid | Flyward | Raus | Four categories, not twelve equal cards |
| How-it-works (3 steps) | Fitzroy | Flighty | Operational steps + real app proof |
| App-download section | Flighty | Sonder | Real app screens, QR/store badges, service integration |
| Trip-entry conversion | Sonder | Flighty | Low-friction, **honest app handoff** (no fake engine) |
| Airport page template | Fitzroy | Flyward | SEO content + reliability |
| Corporate page | Flyward | Antaeus | Premium hierarchy + operational detail |
| Route page template | Fitzroy | Nelson | Useful destination content + strong photography |
| Route-card grid | Nelson | Fitzroy | Banff dominant / Canmore+Lake Louise paired / Jasper wide |
| Fleet section | Jesko Jets | Flyward | Premium imagery + verified capacity/use-case facts |
| Trust & operations | Antaeus | Flyward | Real business details, policies, support |
| Testimonials | Flyward | Flighty | Outcome-specific verified stories (conditional) |
| FAQ | Fitzroy | Flyward | Page-specific Qs + clear answers |
| Footer | Raus | Antaeus | Organized services/routes/support/legal/app |
| **Ride With Purpose** (required, v7 §6) | — | — | Concise factual section; own homepage block, separate from Reliability; fuller on About |

## Data-driven templates (Blueprint p25 — typed content, no duplicate low-quality copy)

- **ServicePage** (Airport, Executive, Corporate, Events, Early-Morning, Private Trips) — driven by typed content objects.
- **RoutePage** (Banff/Canmore/Lake Louise/Jasper) — fields per Blueprint p30: breadcrumb, H1, intro, CTAs, quick facts, pickup/drop-off scenarios, why-PrimeKar, vehicle options, seasonal/road guidance, airport option, return-trip, luggage, FAQ, related routes, final CTA.
- **LegalPage** — preserves migrated legal body verbatim (`legal-content-audit.md`).
- Content lives in typed data separate from components so copy updates need no redesign.

## Implementation-note rule (Blueprint p11)

Before coding each composite, write a 4-line note: **primary pattern · PrimeKar adaptation · reference elements rejected · browser acceptance test.** Captured in the build phase, not fabricated up front.

## Per-component "reject" guardrails (from Blueprint)
No copied Flyward travel-agent wording / metrics; no Fitzroy safari prose or 3-step lead form for ordinary airport rides; no Flighty award/animation density / Apple-only identity; no Nelson global-scale taxonomy/carousels; no Antaeus invented enterprise numbers; no Raus booking/beige palette; no Sonder hotel search controls / fake engine; no Jesko scroll-hijack/WebGL/autoplay/custom cursor.
