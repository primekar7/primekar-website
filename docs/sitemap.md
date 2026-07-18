# Sitemap & Information Architecture (proposal — pending approval)

Source: Blueprint p11 (slugs) + v7 §17. Evaluated per v7 §17 for distinct intent, unique content, conversion purpose, cannibalization risk, thin-page risk. **Nothing implemented until approved.**

## Proposed pages

| Page | Slug (Blueprint) | Search intent | Unique content? | Conversion | Notes / risk |
|---|---|---|---|---|---|
| Home | `/` | Brand + all intents | Yes | App download / schedule | — |
| Calgary Airport Transportation | `/calgary-airport-transportation/` | YYC/airport | Yes (airport-specific) | Schedule airport ride / app | Core SEO page |
| Executive Transportation | `/executive-transportation-calgary/` | Executive/individual | Yes | Schedule / corporate | Distinct from Corporate (individual vs org) |
| Corporate Transportation | `/corporate-transportation-calgary/` | B2B/org | Yes | Corporate enquiry | Antaeus-depth |
| Events Transportation | `/events-transportation-calgary/` | Events | Yes | Plan event transport | Watch overlap w/ Corporate — keep event-specific |
| Early-Morning Transportation | `/early-morning-airport-transportation-calgary/` | Early-departure pain point | Yes (narrow) | Schedule early ride | **Cannibalization watch** vs Airport — must stay a distinct pain-point page, cross-link, not duplicate |
| Private Trips (overview) | `/private-trips/` | Intercity overview | Yes (hub) | Explore routes | Hub → route pages |
| Calgary → Banff | `/calgary-to-banff-transportation/` | Route | Yes (per route template) | Plan private trip / app | Banff = largest demand |
| Calgary → Canmore | `/calgary-to-canmore-transportation/` | Route | Yes (distinct, not shortened Banff) | Plan trip | Blueprint p18 warns against duplication |
| Calgary → Lake Louise | `/calgary-to-lake-louise-transportation/` | Route | Yes | Plan trip | — |
| Calgary → Jasper | `/calgary-to-jasper-transportation/` | Route (long) | Yes (longer-route framing) | Enquiry | — |
| How It Works | `/how-it-works/` | Process | Yes | App download | Real app screens |
| Download the App | `/download-app/` | App | Yes | **Both** store badges | Replaces the JS-redirect `/DownloadApp` (`cta-map.md`) |
| Fleet | `/fleet/` | Vehicle choice | Yes | Schedule | Capacities VERIFY |
| About PrimeKar | `/about/` | Trust/brand | Yes | How it works / contact | **Hosts fuller Ride With Purpose** (v7 §6) |
| Testimonials | `/testimonials/` | Proof | **Conditional** | Schedule | **Only with verified testimonials** (v7 §18) — else defer |
| FAQ | `/faq/` | Questions | Yes | App / contact | Route-specific Qs live on route pages (Blueprint p23) |
| Contact | `/contact/` | Support/enquiry | Yes | Enquiry | Form destination VERIFY |
| Privacy Policy | `/privacy/` (preserve legacy) | Legal | Preserve verbatim | — | `legal-content-audit.md` |
| Terms & Conditions | `/terms/` (preserve legacy) | Legal | Preserve verbatim | — | " |
| **Travel Guides** | `/guides/` | Informational SEO | — | Internal links | **R-1 CONFLICT** — in Blueprint, **not** in v7 §17. **Deferred pending approval** (OPEN-11) |
| Cookie Policy | `/cookie/` | Legal | — | — | **Only if** real tracking is added (none yet) |
| 404 / error | — | — | — | Recovery links | v7 §17 technical-fallback rules |

## Navigation (Blueprint p12 — ≤7 top-level, Raus rule)

**Desktop:** Services ▾ · Airport · Private Routes ▾ · Corporate · How It Works · About · **Download App** (primary)
- **Services menu:** Airport, Executive, Corporate, Events, Early-Morning, Private Trips
- **Private Routes menu:** Banff, Canmore, Lake Louise, Jasper

**Mobile:** full-height readable menu, visible close, direct actions (Raus); Download App prominent; no gesture-only nav.

**Footer (Raus + Antaeus):** Services · Routes · Company (About/Testimonials/Contact) · Support · Legal (Privacy/Terms) · App links · NAP.

## Cannibalization / thin-page controls
- Airport vs Early-Morning: distinct intent, cross-linked, **no** duplicated copy.
- Executive vs Corporate: individual vs organization framing.
- Route pages: each unique (pickup context, distance/time variability, seasonal notes) — **no** "same text, swapped destination" (Blueprint p24, v7 §17).
- Events vs Corporate: event-specific use cases only.

## Decisions needed
- **OPEN-11:** include or defer Travel Guides `/guides/` (R-1).
- Testimonials page conditional on verified content.
- Confirm final slugs (adopting Blueprint's SEO slugs as proposed).
