# Media Inventory

Source + rights for every media asset (v7 §13). Possession ≠ ownership/web-use rights. Nothing published while rights are unverified.

## Present assets

| Asset | Source class | Rights status | Location | Use | Notes |
|---|---|---|---|---|---|
| `primekar-logo-dark.jpg` (855×855, JPEG, opaque, `e550e5c1…`) | Official PrimeKar | **Owned/approved** | `docs/source-material/assets/` (audit-only in Phase A) | Logo on dark → prod `public/brand/` after approval | Raster JPEG, no alpha; SVG/transparent-dark still needed (`asset-audit.md`) |
| `primekar-logo-light.png` (1536×1024, PNG, alpha, `ab609e61…`) | Official PrimeKar | **Owned/approved** | `docs/source-material/assets/` (audit-only in Phase A) | Logo on light → prod `public/brand/` after approval | Transparent PNG; SVG master still needed |
| App screenshots (home/mockup/invoice) | Official PrimeKar | **Not approved for production** (audit-only) | `~/Downloads/PrimeKar-assets/` (outside repo) | Audit only | Personal/financial/legacy content (`asset-audit.md`); kept out of repo |
| Build Blueprint PDF / Build Prompt txt | PrimeKar internal | Internal, not served | `docs/source-material/` | Spec | Gitignore before commit (OPEN-12) |

## Required, NOT yet supplied (block dependent sections; do not fabricate)

| Asset | Needed for | Rights requirement |
|---|---|---|
| Logo **SVG** + transparent on-dark | Header/hero/footer scaling | Owned — request |
| Favicon / Apple-touch / OG image | Metadata (v7 §26) | Derived from official logo + approved |
| Clean app screenshots | App section, Download page | Owned + sanitized + approved |
| Fleet photography (Lexus/Tesla/Lincoln/Suburban — exterior/interior/luggage/pickup) | Fleet section/page | **Owned or licensed**; every shown vehicle must be bookable (Blueprint p21). No stock limousine imagery |
| Calgary/YYC imagery | Hero, airport | Owned or licensed |
| Alberta destination imagery (Banff/Canmore/Lake Louise/Jasper) | Route pages, homepage routes | **Licensed real photography preferred**; generated only if clearly illustrative + not misrepresenting conditions + approved (v7 §13) |
| App-store badges (current official) | Download CTAs | Apple/Google official artwork per current guidelines (v7 §25) |

## Font policy (v7 §13) — **Geist, approved** (docs/homepage-review.md F-009)

Runtime Google/Adobe Fonts **not** used without approval + privacy review (current live-site runtime Poppins rejected).

| Field | Value |
|---|---|
| Family | Geist (Vercel) |
| Source | `next/font/google` — downloaded and self-hosted at **build time**; the deployed site makes no runtime request to Google Fonts, satisfying the runtime-loading prohibition |
| Licence | SIL Open Font License 1.1 — permissive, web-embedding explicitly permitted, no attribution requirement in end-product use |
| Weights/formats | Variable font subset (`latin`), served as woff2, single file ≈29KB gzip, preloaded |
| Roles | Both display (`--font-heading`) and body (`--font-sans`) — one family site-wide |
| Attribution | Not required by SIL OFL 1.1 for embedded/deployed use |
| Approval status | **Approved** — in production use since Phase B, confirmed here in Phase D |

## Prohibited (v7 §13)
No images from reference sites / Google Images / competitor vehicle photos / unlicensed tourism or social imagery / AI images misrepresenting the real fleet. Nelson = photography-treatment reference only, not a photo source.

## Open
- Rights/licence for all fleet + destination + Calgary imagery (none verified).
- Logo SVG. Badge artwork. Icon-only/monogram mark for favicon legibility (docs/homepage-review.md F-017). All in `media-sourcing-plan.md`.
- ~~Font licence~~ — resolved, see Font policy above.
