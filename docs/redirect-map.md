# Redirect Map

Status: **proposed — not approved, not implemented.** Depends on the hosting decision in `deployment-audit.md` (a hard blocker: GitHub Pages cannot do server-side redirects).

## Legacy `.html` → new route (proposed 301)

| Legacy URL | New URL | Redirect | Notes |
|---|---|---|---|
| `/index.html` | `/` | 301 | canonical home |
| `/services.html` | `/services` (or per-service hub) | 301 | pending sitemap decision |
| `/about.html` | `/about` | 301 | |
| `/fleet.html` | `/fleet` | 301 | |
| `/corporate.html` | `/corporate-transportation` | 301 | name pending sitemap |
| `/contact.html` | `/contact` | 301 | |
| `/privacy.html` | `/privacy` | 301 | legal body preserved |
| `/terms.html` | `/terms` | 301 | legal body preserved |
| `/DownloadApp` | `/download` | 301 | behaviour replaced (see `cta-map.md`) |
| `/style.css`, `/primekarhalf.jpg` | (removed) | 410 or drop | obsolete assets |

## Rules to honour (Section 28)

- Each old URL reaches its final target in **≤1 redirect**; no loops.
- Do **not** redirect unrelated removed pages to the homepage.
- Preserve tracking params only when approved and safe.
- Verify final production host in canonicals, sitemap, structured data, OG URLs.

## BLOCKER — hosting cannot do this today

The current site is on **GitHub Pages (static)**, which does not support server-side 301s or custom headers. Options to record for user decision (see `deployment-audit.md`):
- **(a)** Move hosting to a platform with redirect + header support (e.g. Vercel/Netlify/Cloudflare Pages) — recommended for a Next.js rebuild, enables real 301s, security headers, and SSR/ISR if wanted.
- **(b)** Stay on GitHub Pages with a static export — redirects become meta-refresh/JS only (SEO-inferior), no custom security headers. Not recommended.

No redirect can be implemented until this hosting decision is approved.
