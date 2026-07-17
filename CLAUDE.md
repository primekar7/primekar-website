# PrimeKar Website 2026 Rebuild

This is the PrimeKar Website 2026 Rebuild. Environment setup is complete; page
design and implementation have not started yet. This file will grow further
once the master build prompt is provided.

## Core rules

- **Do not invent business claims.** If a fact about PrimeKar (pricing,
  coverage area, fleet size, certifications, etc.) isn't verified, flag it as
  missing rather than filling it in.
- **Do not copy reference-website code, wording, photography, or branding.**
  The `primekar-reference-lab` sibling directory exists for *learning from*
  competitor/reference sites, never for lifting their content directly.
- **Terminology:** use "driver," never "chauffeur."

## Tech stack

- Next.js (App Router) + TypeScript + Tailwind CSS + shadcn/ui + Motion
- pnpm as the package manager
- Use **Context7** to pull current documentation for any library before
  relying on remembered API shapes — library APIs move fast and training data
  goes stale.

## Testing and completion standards

- Test implemented pages through Playwright, not just by reading the code.
- **Compilation alone does not mean completion.** A page that type-checks and
  builds can still be visually broken, inaccessible, or functionally wrong —
  verify it actually renders and behaves correctly.
- Respect `prefers-reduced-motion` in all animation work (Motion supports this
  natively — use it).
- Avoid scroll hijacking, heavy WebGL, and autoplay hero video.

## UI/UX Pro Max

UI/UX Pro Max is an advisory tool for design systems, layout, typography,
spacing, responsive behaviour, accessibility and UX patterns.

It must not override:
- PrimeKar brand colours and logo
- PrimeKar Website Build Blueprint
- Approved reference-site assignments
- SEO and accessibility requirements
- Performance restrictions
- Verified PrimeKar business facts
- The rule to use "driver," never "chauffeur"

Use it to create one consistent design system. Do not let it independently
redesign every page.
