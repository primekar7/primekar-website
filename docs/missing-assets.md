# Missing Assets

Retrieval date: 2026-07-18. All items below are **absent from the repository** and block visual implementation of the sections that depend on them (Section 12). Audit, sitemap, content, SEO, and architecture work continues without them.

## Required drop locations (create when supplying files)

| Asset | Target path | Preferred format(s) | Blocks |
|---|---|---|---|
| Logo — dark background | `public/brand/logo-dark.*` | SVG (master) + PNG | Header on dark, hero, footer |
| Logo — light background | `public/brand/logo-light.*` | SVG + PNG | Any light section |
| Wordmark / maple-leaf treatment | `public/brand/wordmark.*` | SVG | Brand lockups |
| Favicon set | `public/favicon.ico` + `public/icon.svg` + `public/apple-touch-icon.png` | ICO/SVG/PNG (180²) | Metadata (Section 26) |
| Open Graph / social image | `public/brand/og-image.png` | PNG 1200×630 | Social metadata |
| App screenshots (clean, approved) | `public/app/*.png` | PNG (device pixel ratio) | App-experience section, Download page |
| Approved device frame | `public/app/frame.*` | SVG/PNG (generic or official Apple artwork) | App mockups |
| Alberta destination imagery (Banff/Canmore/Lake Louise/Jasper) | `public/images/routes/*` | licensed real photography preferred (AVIF/WebP) | Route pages, homepage routes |
| Fleet imagery (Lexus/Tesla/Lincoln/Suburban) | `public/images/fleet/*` | licensed/owned (AVIF/WebP) | Fleet section/page |
| App-store badges (current official) | `public/badges/*` | official localized artwork | Download CTAs |
| Fonts (web-embed licensed) | `public/fonts/*` or Next font | woff2 | Typography |

## Rules

- Do **not** fabricate, trace, regenerate, or approximate any missing asset.
- Do **not** begin visual implementation of a section whose asset is missing.
- App screenshots and device frames require the approvals in `asset-audit.md` before any use.
- Destination/fleet photography requires documented rights before use (`media-inventory.md` — to be created).

## What is NOT blocked by these gaps

Design-system tokens/typography scale (tokens are locked in the spec), IA/sitemap, SEO map, content architecture, component structure, legal migration planning, deployment/security/performance planning. These proceed now.
