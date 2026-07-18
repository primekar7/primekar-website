# Deployment Audit

Retrieval date: 2026-07-18. Evidence: response headers from https://primekar.com/.

## Current production hosting (evidence)

```
server: GitHub.com
via: 1.1 varnish  ·  x-served-by: cache-yyc1430024-YYC  ·  x-cache: HIT   (Fastly CDN, Calgary edge)
content-type: text/html; charset=utf-8
cache-control: max-age=600
access-control-allow-origin: *
last-modified: Mon, 18 May 2026 23:35:25 GMT
```

- **Provider: GitHub Pages** (static hosting) fronted by Fastly.
- **Output mode: static HTML/CSS/JS.** No SSR, no server-side redirects, no custom response headers, no image optimization service.
- Current repo `primekar7/primekar-website` is the **new Next.js app** and is separate from whatever repo serves the live static site (the live site's source repo/branch was not inspected — recorded as a gap).

## Rebuild target — decision required

The new build is **Next.js 16 (App Router)**. Next.js can run as:
- **SSR/ISR** (needs a Node host: Vercel, Netlify, Cloudflare, self-host) — enables server redirects, security headers, `next/image` optimization, dynamic rendering.
- **Static export** (`output: 'export'`) — deployable to GitHub Pages, but loses server redirects, custom headers, and on-server image optimization.

| Capability needed by this project | GitHub Pages (static export) | Node host (Vercel/Netlify/CF) |
|---|---|---|
| Server-side 301 redirects (`redirect-map.md`) | ❌ meta/JS only | ✅ |
| Security response headers / CSP (`security-baseline.md`) | ❌ | ✅ |
| `next/image` optimization | ❌ (unoptimized) | ✅ |
| SSR/ISR for future dynamic content | ❌ | ✅ |
| `apple-app-site-association` / `assetlinks.json` at `/.well-known/` with correct content-type | ⚠️ possible but fiddly | ✅ |

**Recommendation (pending approval): move production to a Node-capable host** (e.g. Vercel) so the redirect strategy, security headers, and app-link association files work correctly. This is a hosting/DNS change and therefore **requires explicit user approval** (master prompt Section 27 — do not change hosting/DNS without approval).

## Not yet determined (remaining work)

- Current live-site source repo + production branch (only the new repo's branch was audited: `main`, clean, in sync).
- Build command / Node version / env-var requirements for the chosen host.
- DNS/registrar and where `primekar.com` A/CNAME currently points.
- CI deploy workflow (current repo has a CI test workflow but **no deploy** — intentional per setup).

Do not change hosting, DNS, domain, CI secrets, or deploy settings without explicit approval.
