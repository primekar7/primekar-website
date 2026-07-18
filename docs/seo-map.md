# SEO Map (proposal — pending approval)

Source: v7 §24, Blueprint pp.24–25. Canadian English, `lang="en-CA"`. NAP consistency across every page (verify first — `cta-map.md`): **support@primekar.com**, **+1 (403) 370-9700**, "Calgary, Alberta" (no public street address unless approved — do **not** publish a private/driver address for schema, v7 §24).

## Per-page SEO (H1 from Blueprint content pack; titles/descriptions to finalize on approval)

| Page | Primary intent | H1 (Blueprint) | Title (draft) | Schema |
|---|---|---|---|---|
| Home | brand + core | "Premium Pre-Scheduled Black Car Service in Calgary" | PrimeKar — Premium Pre-Scheduled Black-Car Service in Calgary | Organization / TransportationService (if verified) |
| Airport | YYC airport | "Calgary Airport Transportation You Can Schedule in Advance" | Calgary Airport Transportation (YYC) | Service + Breadcrumb |
| Executive | executive | "Executive Transportation in Calgary" | Executive Transportation in Calgary | Service + Breadcrumb |
| Corporate | B2B | "Reliable Corporate Transportation in Calgary" | Corporate Transportation in Calgary | Service + Breadcrumb |
| Events | events | "Pre-Scheduled Transportation for Calgary Events" | Event Transportation in Calgary | Service + Breadcrumb |
| Early-Morning | early departures | "Early-Morning Airport Transportation in Calgary" | Early-Morning Airport Transportation Calgary | Service + Breadcrumb |
| Private Trips | intercity hub | "Private Transportation from Calgary to Alberta Destinations" | Private Trips from Calgary | Service + Breadcrumb |
| Banff | route | "Calgary to Banff Private Transportation" | Calgary to Banff Transportation | Service + Breadcrumb |
| Canmore | route | "Calgary to Canmore Private Transportation" | Calgary to Canmore Transportation | Service + Breadcrumb |
| Lake Louise | route | "Calgary to Lake Louise Private Transportation" | Calgary to Lake Louise Transportation | Service + Breadcrumb |
| Jasper | route | "Calgary to Jasper Private Transportation" | Calgary to Jasper Transportation | Service + Breadcrumb |
| How It Works | process | "Schedule Your PrimeKar Ride in Three Steps" | How PrimeKar Works | — |
| Download | app | "Schedule and Manage Your Ride with the PrimeKar App" | Download the PrimeKar App | — |
| Fleet | vehicles | "PrimeKar Vehicle Options" | PrimeKar Fleet — Executive & Elite XL | — (capacities VERIFY) |
| About | trust | "Built in Calgary for Rides That Need to Be Planned" | About PrimeKar | Organization |
| Testimonials | proof | "What PrimeKar Customers Say" | PrimeKar Testimonials | Review only if verified |
| FAQ | questions | "PrimeKar Frequently Asked Questions" | PrimeKar FAQ | FAQPage **only** per rule below |
| Contact | support | "Contact PrimeKar" | Contact PrimeKar | Organization contactPoint |
| Legal | legal | (as migrated) | Privacy / Terms — PrimeKar | — |

## Targeted topics (v7 §24)
Calgary airport transportation · YYC airport transportation · Calgary airport transfer · Calgary black-car service · Calgary executive/corporate transportation · Calgary→Banff/Canmore/Lake Louise/Jasper transportation · early-morning airport transportation Calgary · pre-scheduled car service Calgary.

## Structured data rules
- Organization always; **TransportationService/LocalBusiness only when entity details verified + schema valid** (v7 §24). No fabricated hours/coordinates/address.
- **FAQPage:** add **only** if it accurately mirrors visible FAQ content and a documented non-Google consumer needs it — **not** for Google FAQ rich results (v7 §24). Visible FAQ uses semantic accordion regardless.
- Validate: Google Rich Results Test (Google-supported types only) vs Schema Markup Validator (generic Service). Don't conflate generic validity with rich-result eligibility.

## Technical SEO
One H1/page; logical H2/H3; crawlable HTML text (no headings/service copy inside images/canvas — Blueprint p24); self-referencing canonicals; internal links (airport↔routes↔corporate↔fleet↔FAQ↔guides); breadcrumbs on service/route pages; OG + social metadata; unique title + meta description each page. XML sitemap = only final indexable canonical URLs (exclude 404/error/redirect/thin). robots.txt to create (currently 404 live). `[VERIFICATION REQUIRED]` must never reach metadata/alt/structured data (v7 §23).

## Route/airport FAQ split (Blueprint p23)
Route-specific Qs on route pages; airport Qs on airport page; global FAQ must not duplicate every answer verbatim.

## Open
- Titles/descriptions to finalize on IA approval. NAP verification. Schema entity details pending verification. Guides page (R-1) SEO deferred with the page.
