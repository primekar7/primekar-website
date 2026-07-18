# CTA & Conversion Routing Map

Status: **audit + proposal.** No production CTA is implemented. All destinations below are recorded from evidence; "verification status" reflects what is actually confirmed.

## App-store destinations (evidence from live site)

Extracted from `/` and `/DownloadApp` source:

- **Apple App Store:** `https://apps.apple.com/ca/app/primekar/id6753017125` (app id `6753017125`, `ca` storefront)
- **Google Play:** `https://play.google.com/store/apps/details?id=com.primekar.customer&pcampaignid=web_share` (package `com.primekar.customer`)

Verification status: **product-page existence not yet confirmed** (I did not open the store listings this pass). Confirm both resolve to a live PrimeKar app before use. Drop the `pcampaignid=web_share` param unless approved (Section 28 — keep tracking params only when approved).

## `/DownloadApp` behaviour audit (Section 10)

The page is a **client-side JavaScript user-agent redirect** — not a server redirect (HTTP was a plain 200). Source logic:

```js
const isApple = /iPad|iPhone|iPod|Mac/i.test(navigator.userAgent);
location.replace(isApple ? appStore : playStore, '_blank');
```

Findings / defects:
- **Requires JavaScript.** With JS disabled the page is **blank** — no links, no content. **No crawlable content** → SEO-dead, and inaccessible to some users/bots.
- `location.replace(url, '_blank')` — the `'_blank'` arg is **ignored** by `location.replace`; it navigates the current tab, not a new one (harmless but sloppy).
- **`/Mac/i` sends desktop Mac users to the iOS App Store** — if the app is iPhone-only this is a poor/confusing destination on a Mac.
- Windows/Linux desktop → **Google Play** (an Android store page opened on desktop).
- Hides one platform from every user based purely on user-agent — **violates the "keep both store choices accessible" rule** (Section 19).

Recommendation: replace with a real, crawlable **`/download` page** that shows **both** official store badges (keyboard/screen-reader accessible), with optional platform emphasis, no auto-redirect. Detail in the sitemap/IA proposal.

## Provisional CTA map (all labels pending approval)

| CTA | Page/section | Proposed destination | Type | Leaves site? | Verification status |
|---|---|---|---|---|---|
| Get the PrimeKar App | Home hero, Download page, footer | `/download` page (→ both store links) | Internal → store | Only on store click | Store links **Verify** |
| Explore Services | Home hero secondary | `/services` (or services section) | Internal | No | OK once IA approved |
| Schedule Your Airport Ride | Airport page | **Only if** a real scheduling destination exists; else use "Get the PrimeKar App" or "Contact PrimeKar" | Internal/app | TBD | **Booking destination NOT verified** |
| Discuss Corporate Transportation | Corporate | `/contact` (corporate inquiry) | Internal | No | Form destination **NOT verified** |
| Plan This Private Trip | Route pages | `/contact` or app | Internal | No | **NOT verified** |
| Contact PrimeKar | Contact | `mailto:support@primekar.com` / `tel:+14033709700` | mailto/tel | Opens client | Verify NAP |

## App-link (Universal Links / App Links) status

**APP-LINK INFRASTRUCTURE NOT VERIFIED.** No `apple-app-site-association` or `assetlinks.json` confirmed; no app-team signing evidence (Apple Team ID / bundle ID entitlement, Android package SHA-256 / Play App Signing). Per Section 19: **do not implement or claim Universal Links / App Links.** Use direct store product-page links + the `/download` page with platform detection only for emphasis, never to hide a platform or auto-redirect.

## Hard rules being enforced

No placeholder links, no invented deep links, no fake booking engine, no "Book Now" unless a real booking/scheduling destination is confirmed. Unverified/non-functional CTAs are excluded from production.

## Remaining work

1. Confirm both store product pages are live PrimeKar apps.
2. Get the real booking/scheduling destination (app-only? dispatch? web?) — ties to legal conflict L-1.
3. Obtain app-side association/signing evidence before any app-link work.
4. Approve final CTA labels + destinations.
