# Security Baseline

Retrieval date: 2026-07-18. Evidence: response headers from https://primekar.com/.

## Current state (evidence)

Present: `access-control-allow-origin: *` (GitHub Pages default), `cache-control: max-age=600`.

**Absent** (none of these are set on the live site):
- Content-Security-Policy
- Strict-Transport-Security (HSTS)
- X-Content-Type-Options
- Referrer-Policy
- Permissions-Policy
- X-Frame-Options / frame-ancestors

So the current security-header posture is **effectively empty**, and `access-control-allow-origin: *` is broader than a marketing site needs.

## Proposed baseline for the rebuild (pending approval + host capability)

These require a host that can set response headers — **not possible on static GitHub Pages** (see `deployment-audit.md`). Proposed, to be tuned to actual sources once the design system, fonts, and any third parties are fixed:

| Header | Proposed direction | Note |
|---|---|---|
| Content-Security-Policy | Start strict; allow only self + confirmed asset/font origins. **No `unsafe-eval`.** | Must enumerate every real script/style/img/font/connect source first — do not copy a generic CSP. Fonts self-hosted (Section 13) keeps CSP tight. |
| Strict-Transport-Security | `max-age` yes; **`includeSubDomains`/`preload` only after every subdomain is confirmed HTTPS + user approves** | Section 29 |
| X-Content-Type-Options | `nosniff` | |
| Referrer-Policy | `strict-origin-when-cross-origin` | |
| Permissions-Policy | deny unused features (geolocation/camera/mic etc.) | |
| frame-ancestors | `'self'` (via CSP) | clickjacking |
| CORS | remove blanket `*`; scope only if genuinely needed | |

## Other baseline items

- **Server-only env vars must never reach client code.** `.env.local` and `.claude/settings.local.json` already gitignored (verified in setup). No secrets in repo (verified via history scan in setup).
- App-association files (`apple-app-site-association`, `assetlinks.json`) served with correct content-type from `/.well-known/` — depends on host + on app-team signing evidence (see `cta-map.md`; currently NOT VERIFIED).
- External links: use `rel="noopener"` on any `target="_blank"`.

## Constraint

Final headers must be tested in the deployed/representative environment — cannot be validated until hosting is chosen. Record limitations caused by static hosting if GitHub Pages is retained.
