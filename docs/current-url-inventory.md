# Current URL Inventory

Retrieval date: 2026-07-18 · Live host: https://primekar.com/ (GitHub Pages, static).
Discovery method: fetched the five master-prompt URLs, then extracted all `href`s from the homepage and probed linked paths. No crawler run; additional deep pages may exist and are noted as a gap.

| # | Live URL | HTTP | Type | In current nav? | Proposed replacement (pending approved sitemap) | Disposition |
|---|---|---|---|---|---|---|
| 1 | `/` (index.html) | 200 | Home | Yes | `/` (new homepage) | Improve / rebuild |
| 2 | `/services.html` | 200 | Services overview | Yes | `/services` hub or merge into per-service pages | Verify → restructure |
| 3 | `/about.html` | 200 | About | Yes | `/about` (About PrimeKar) | Improve |
| 4 | `/fleet.html` | 200 | Fleet | Commented-out nav (linked in footer) | `/fleet` | Improve |
| 5 | `/corporate.html` | 200 | Corporate | Commented-out nav (linked) | `/corporate-transportation` | Improve |
| 6 | `/contact.html` | 200 | Contact | Yes | `/contact` | Improve (form dest. unverified) |
| 7 | `/privacy.html` | 200 | Privacy (legal) | Footer | `/privacy` | Preserve body; new URL needs redirect |
| 8 | `/terms.html` | 200 | Terms (legal) | Footer | `/terms` | Preserve body; new URL needs redirect |
| 9 | `/DownloadApp` | 200 | JS store-redirect | Hero/footer button | `/download` (real page) | Replace behaviour |
| 10 | `/style.css` | 200 | Stylesheet | — | (obsolete after rebuild) | Remove |
| 11 | `/primekarhalf.jpg` | 200 | Image/favicon | favicon | proper favicon set | Replace |
| 12 | `/sitemap.xml` | **404** | — | — | generate new | Create |
| 13 | `/robots.txt` | **404** | — | — | generate new | Create |

## Notes

- Legacy URLs use a `.html` suffix; the Next.js rebuild will use extensionless routes. Every `.html` → new-route mapping needs a redirect decision (`redirect-map.md`). **GitHub Pages cannot issue server-side redirects** — see `deployment-audit.md` for the hosting implication (this is a live blocker for a clean redirect strategy).
- No `sitemap.xml`/`robots.txt` exist today — nothing to preserve; both are net-new.

## Gaps / remaining work

1. No full crawl performed — confirm there are no additional deep/orphan pages (e.g. individual service pages) before finalizing.
2. Bodies of services/about/fleet/corporate not yet extracted (see `current-site-audit.md`).
