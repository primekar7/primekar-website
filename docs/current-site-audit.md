# Current PrimeKar Website Audit

Retrieval date: 2026-07-18 · Live host inspected: https://primekar.com/
Method: read-only HTTP inspection + browser rendering. No forms submitted, no bookings, no accounts, no data entered.

## Hosting snapshot (see `deployment-audit.md` for detail)

- **Static HTML on GitHub Pages** (`server: GitHub.com`, Fastly CDN, Calgary/YYC edge). `content-length` ~8.7 KB homepage. Static files only — no SSR, no server-side redirects, no custom response headers.
- Runtime **Google Fonts (Poppins)** loaded from `fonts.googleapis.com` — conflicts with the master-prompt font policy (Section 13); flag for the new build.
- Favicon is `primekarhalf.jpg` (a JPG used as an icon).

## Page inventory (all 200 unless noted)

| URL | Title | Status | Disposition |
|---|---|---|---|
| `/` (index.html) | PrimeKar — Premium Limousine Service Calgary | 200 | Improve (rebuild) |
| `/services.html` | (linked from nav/footer) | 200 | Verify content, then Improve |
| `/about.html` | (linked) | 200 | Verify content, then Improve |
| `/fleet.html` | (linked; nav item commented out) | 200 | Verify content, then Improve |
| `/corporate.html` | (linked; nav item commented out) | 200 | Verify content, then Improve |
| `/contact.html` | Contact Us — PrimeKar | 200 | Improve (form destination unverified) |
| `/privacy.html` | Privacy Policy — PrimeKar | 200 | Preserve legal body (see `legal-content-audit.md`) |
| `/terms.html` | Terms & Conditions — PrimeKar | 200 | Preserve legal body (see `legal-content-audit.md`) |
| `/DownloadApp` | PrimeKar — Premium Limousine Service Calgary | 200 | Replace behaviour (see `cta-map.md`) |
| `/style.css`, `/primekarhalf.jpg` | assets | 200 | n/a |
| `/sitemap.xml` | — | **404** | Create (new) |
| `/robots.txt` | — | **404** | Create (new) |

Full inventory + replacement mapping in `current-url-inventory.md`; redirect decisions in `redirect-map.md`.

> **Note:** `services.html`, `about.html`, `fleet.html`, `corporate.html` bodies were confirmed reachable (200) and linked, but their full text has **not yet been extracted and audited** — see "Remaining work" at the end of this file. The claims matrix below covers the homepage and contact page (fully extracted) plus the legal preambles.

## Current-claims matrix

Wording type: **L** = legal, **M** = marketing, **A** = app-screen. Status legend: Preserve / Improve / Verify / Remove. All "user approval" cells are **Pending** — nothing here is approved yet.

| # | Exact claim | Source | Type | Conflict? | Evidence / note | Recommended status |
|---|---|---|---|---|---|---|
| 1 | "Premium **Limousine** Service Calgary" (title + footer "Calgary's premium limousine service") | `/`, `/contact` footer | M | Yes — positioning is premium **black-car / pre-scheduled**, not "limousine" (Section 6) | Category mislabel | **Remove/Improve** — drop "limousine" |
| 2 | "Your Premium Ride. **Always On Time.**" | `/` hero | M | Yes | On-time guarantee = prohibited absolute claim (Sections 7, 10) | **Remove** |
| 3 | "**Punctuality guaranteed** for every ride" | `/` Why-choose | M | Yes | Explicit guarantee, unverifiable | **Remove** |
| 4 | "Licensed & Insured" | `/` trust strip | M | — | Needs licence/insurance evidence (Section 10) | **Verify** |
| 5 | "VIP Service" | `/` trust strip | M | — | Vague marketing | **Verify/Improve** |
| 6 | "24/7 Support" | `/` trust strip; `/contact` "here to assist you 24/7" | M | Possible — contradicts app-only booking in Terms | Support-availability claim unverified | **Verify** |
| 7 | "Premium Fleet — Luxury vehicles **maintained to the highest standards**" | `/` | M | — | Vehicle-maintenance claim (Section 10) | **Verify** |
| 8 | "Professional — **Experienced, courteous, and discreet** drivers" | `/` | M | Yes | All prohibited driver descriptors until verified (Section 23) | **Remove** (use neutral "driver") |
| 9 | "book your premium ride **in seconds**" / "instant booking" (`/contact`) | `/`, `/contact` | M | Yes | "in seconds"/instant = on-demand messaging; PrimeKar is pre-scheduled (Section 6) | **Remove** |
| 10 | "Ready to Experience **Luxury Travel**?" / "experience luxury transportation" | `/`, `/contact` | M | Soft | Vague-luxury language (Section 23) | **Improve** |
| 11 | Services: Airport Transfers, Executive Travel, Events & Occasions | `/` | M | — | Aligns with approved services (Section 7) | **Preserve/Improve** |
| 12 | Phone **+1 (403) 370-9700**; email **support@primekar.com**; "Calgary, AB" | `/contact`, footer | M/NAP | — | NAP data — verify before reuse (Section 24) | **Verify** |
| 13 | "© **2025** PrimeKar. All rights reserved." | all footers | M | Yes | Stale copyright year (site last-modified May 2026) | **Improve** |
| 14 | "PrimeKar operates as a luxury transportation service, **not a rideshare**. All bookings arranged … through our dispatch team or app." | `/terms` preamble | L | Yes — conflicts with #15 | Positioning-positive, but booking-method conflict | **Verify** (do not edit legal — see legal audit) |
| 15 | "**All rides must be booked via PrimeKar app**" + "cancellations must be made within the app. **Do not cancel via phone or email**" | `/terms` §2–3 | L | Yes — conflicts with #14 & contact "Call us anytime" | App-only vs dispatch/phone conflict | **Verify** (legal approval required) |
| 16 | Cancellation: no-show or cancel within **2 hours** → **100% fare**; refunds within **7 business days** | `/terms` §3 | L | — | Specific policy — preserve exactly in legal body; do NOT restate as marketing | **Preserve (legal only)** |
| 17 | App-store links: Apple `id6753017125`, Google `com.primekar.customer` | `/`, `/DownloadApp` | M | — | Candidate verified store IDs (Section 19) — confirm product pages live | **Verify** |

## Prohibited / conflicting messaging summary (for the rebuild)

Remove from all new marketing copy: "limousine," "Always On Time," "punctuality guaranteed," "in seconds"/"instant booking," "experienced/courteous/discreet/professional drivers." These conflict with the pre-scheduled, evidence-based positioning. Legal body wording is handled separately (do not rewrite — `legal-content-audit.md`).

## Remaining work (not yet done — Phase A continuation)

1. Extract and audit full body text of `services.html`, `about.html`, `fleet.html`, `corporate.html` and fold their claims into this matrix.
2. Obtain user approval status for every row (all currently Pending).
3. Confirm NAP (row 12) and store links (row 17) against authoritative sources.
