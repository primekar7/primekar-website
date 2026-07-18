# Legal Content Audit

Retrieval date: 2026-07-18 · Method: read-only fetch of live static HTML.
**This audit identifies issues; it does not resolve, merge, rewrite, or harmonize any legal wording** (master prompt Section 11). It is not legal advice or a conformance review. Both legal pages must go to final human/legal review before production deployment.

## Captured sources (migration baseline)

| Page | URL | Title | Last-Updated (in body) | HTTP Last-Modified | SHA-256 (first 16) | Bytes |
|---|---|---|---|---|---|---|
| Privacy Policy | https://primekar.com/privacy.html | Privacy Policy — PrimeKar | **October 17, 2025** | Mon 18 May 2026 23:35:25 GMT | `88b144c9b3a6ac64…` | 10,888 |
| Terms & Conditions | https://primekar.com/terms.html | Terms & Conditions — PrimeKar | **October 31, 2025** | Mon 18 May 2026 23:35:25 GMT | `9cdb1f00a1efa38e…` | 12,251 |

Full raw HTML preserved locally in the session scratchpad for exact-migration comparison; the **legal body text must be preserved exactly** on migration (excluding legacy nav, footer, promo CTAs, and the stale copyright year, which are not part of the legal body).

## Legal entity & contact (as published — verify, do not alter)

- Entity: **"PrimeKar Corp."** ("PrimeKar", "we", "our", "us") — Privacy Policy.
- Contact surfaced on site: `support@primekar.com`, `+1 (403) 370-9700`, "Calgary, AB". No registered business address, GST number, or corporate registration number found on the audited pages.

## Identified issues (recorded, NOT resolved — all require user + legal approval)

| ID | Type | Location | Issue | Why it matters |
|---|---|---|---|---|
| L-1 | Internal conflict | Terms §2–3 vs. Terms preamble vs. Contact page | Terms §2 "All rides must be booked via **PrimeKar app**"; §3 "cancellations … within the app. **Do not cancel via phone or email**" — but the Terms preamble says bookings are "arranged … through our **dispatch team or app**," and `/contact` invites "**Call us anytime**." | Booking/cancellation channel is legally contradictory. Affects positioning + CTA routing. |
| L-2 | Positioning vs. brand | Terms preamble; site title/footer | Terms: "luxury transportation service, **not a rideshare**" (aligns). But site brands as "**limousine service**." | Category term inconsistent across legal vs. marketing. |
| L-3 | Verify | Privacy — data practices | Privacy Policy describes collecting payment info, precise ride location, driver PII, corporate data, app logs/crash reports. | Standard, but claims must match the actual live app/website data flows before publishing. Not yet verified. |
| L-4 | Effective dates | Both pages | Privacy "Last Updated Oct 17 2025"; Terms "Last Updated Oct 31 2025"; site copyright shows "© 2025". Site HTTP last-modified May 2026. | Dates may be stale relative to any 2026 changes; confirm current effective dates. |
| L-5 | Operational claims in Terms | Terms §2–3 | Payment methods (credit card, Apple Pay, Google Pay), 2-hour/100% no-show charge, 7-business-day refunds. | These are operational commitments; must match verified current policy. Preserve verbatim in legal body; do NOT surface as marketing (Section 10). |
| L-6 | Missing elements | Both pages | No visible governing-law/jurisdiction clause captured in the excerpts reviewed; full-text pass still pending. | Completeness check needed before launch. |

## Migration rule for this project

- Preserve the current Privacy Policy and Terms **body text exactly** until an approved replacement/correction is supplied.
- Do NOT resolve L-1…L-6. Each requires explicit user and, where appropriate, legal-professional sign-off.
- Legacy nav, old visual design, promo CTAs, and the "© 2025" copyright display are **not** part of the protected legal body and will be replaced by the new site chrome.

## Remaining work (Phase A continuation)

1. Extract the **complete** privacy and terms body text (not just the opening excerpts captured here) and store a full normalized-text checksum for launch-time exact-migration verification.
2. Confirm governing-law/jurisdiction and any dispute-resolution clauses (L-6).
3. Route L-1…L-6 to the user for legal decisions.
