# Migration Handoff — PrimeKar Website

Written as part of the laptop/account migration checkpoint on 2026-07-24.
This document is itself part of the checkpoint commit it describes.

## Repository

- **Path:** `~/Projects/PrimeKar/primekar-website`
  (`/Users/dilshersingh/Projects/PrimeKar/primekar-website`)
- **Remote:** `origin` → `https://github.com/primekar7/primekar-website.git`
  (fetch and push)
- **Branch:** `feature/primekar-visual-reset`
- **Prior commit (before this checkpoint):** `37b3a13` — "Checkpoint Phase
  B-F functional baseline before visual redesign"
- **This checkpoint's commit hash:** see `git log -1` after this commit —
  not known at the time this file was written, since the file is included
  in the commit it documents.

## Current uncommitted work captured by this checkpoint

At the time this checkpoint was created, the working tree had:

**Modified (tracked):**
- `.gitignore` — added `/prototypes/` (visual-reset concept prototypes,
  research phase, never committed)
- `src/app/page.tsx` — removed `<TrustStrip />` from the homepage
- `src/components/chrome/header.tsx` — header height `h-16 sm:h-20` →
  `h-16 sm:h-[88px]`; logo gets a narrow-viewport size override
  (`max-[359px]:h-7 max-[359px]:w-[112px]`); added a mobile-only
  "Download the App" / "Download" CTA button (`lg:hidden`) alongside the
  existing desktop CTA and `MobileNav`
- `src/components/sections/hero.tsx` — rewritten (+191/-60 lines): single
  approved "mountain" hero scene, typed for future scenes but only
  rendering one; static (non-animated) vehicle image

**New (untracked), now committed:**
- `.claude/launch.json` — dev-server launch config (`pnpm dev`, port 3000);
  no secrets
- `docs/direction-d-motion-spec.md`
- `docs/visual-concept-directions.md`
- `docs/visual-reference-audit.md`
- `src/components/sections/hero.module.css`
- `public/images/hero/*.png` (production hero assets — see below)
- `docs/migration-handoff.md` (this file)
- `docs/migration-asset-manifest.txt`

**Deliberately NOT committed (gitignored, confirmed via `git check-ignore`):**
- `docs/source-material/` (includes `assets/hero-refs/` reference images) —
  per D-015, internal source material, never committed
- `/prototypes/` — visual-reset HTML concept prototypes, research phase only
- `.claude/settings.local.json` — may contain the Context7 MCP API key
- `node_modules/`, `.next/`, `test-results/`, `playwright-report/`,
  `.DS_Store` files, Python `__pycache__/` dirs, `next-env.d.ts`,
  `tsconfig.tsbuildinfo`

## Completed v7 phases (per `docs/decision-log.md`)

- **Phase A** (2026-07-18): evidence audits, master spec ingestion, reference
  inspection, logo approval, branch creation (`feature/primekar-rebuild`) —
  all approved per D-001–D-018.
- **Phases B–F** (through 2026-07-20): sitemap, design system, performance
  budget baseline; service/route page templates built; 16 Phase D findings
  corrected and re-verified; Playwright test-infrastructure fix (now tests
  the production build, not `next dev`). Confirmed working: typecheck, lint,
  format, build all pass; 24 routes prerender (D-019–D-024).
- **Phase B–F checkpoint (D-025, 2026-07-21):** functional baseline frozen,
  Phase G (final site audit) **paused** — the prior Phase G run was
  interrupted mid-session before `docs/final-site-audit.md` was ever
  created, so there is no partial Phase G document to worry about excluding.
  Visual direction was rejected as below the premium-brand bar; a full
  redesign was authorized before Phase G resumes. New branch
  `feature/primekar-visual-reset` created for this work.
- **Still open / blocking Phase G and deploy:**
  - D-022 — revised JS budget (~165KB gzip) proposed, **not yet approved**
    by the user.
  - D-023 — Privacy Policy / Terms and Conditions body text is missing
    (never committed verbatim); `/privacy/` and `/terms/` still 404. This is
    a **hard blocker** for Phase G / deploy.
  - Store-link verification (D-012), hosting-provider selection (D-008),
    SVG logo / clean app screenshots / fleet photography (D-011) all remain
    outstanding.

## Visual-reset status

The visual-reset work (this branch) is **in progress, not complete**:

- One hero scene — the "mountain" scene (Alberta mountain-destination
  travel) — is built, approved, and is what currently renders on the
  homepage. `src/components/sections/hero.tsx` is a Server Component with
  zero client JavaScript; the vehicle image is static (no entrance
  animation, no timers, no `IntersectionObserver`).
- The header was adjusted (taller on `sm+`, mobile download CTA added,
  small-viewport logo sizing) as part of the same pass.
- `<TrustStrip />` was removed from the homepage.
- Two full concept-direction docs exist (`docs/visual-concept-directions.md`
  naming Direction A as the primary recommendation, and
  `docs/direction-d-motion-spec.md` as a full motion spec for Direction D,
  "Cinematic Alberta Journey"). **No decision-log entry records which
  direction was ultimately chosen** — Direction D has the more recent and
  detailed spec, which suggests it superseded A, but this is an inference,
  not a confirmed decision. Resolve this with the user before doing
  significant new visual work.
- Four HTML prototypes exist under `/prototypes/` (directions A–D) —
  gitignored, kept locally only, never committed.

### Approved Mountain-scene hero

Confirmed via `src/components/sections/hero.tsx`'s own header comment as the
"approved mountain/Lexus scene," built from:
- `public/images/hero/primekar-mountain-hero-background.png` — real
  photography background
- `public/images/hero/lexus-lx600-stopped.png` — real transparent vehicle
  cutout (RGBA, verified — not an illustration)
- `public/images/hero/lexus-lx600-moving.png` is on disk but **not
  currently loaded anywhere** — reserved for a possible future scene.

### Four-scene hero order — NOT independently verified in project docs

The migration instruction that produced this checkpoint specified a
four-scene hero order:

1. Airport Pickup and Drop-off
2. Mountain Travel
3. Family and Group Travel
4. Corporate Transportation

That exact sequence and those exact scene titles are recorded here **as
given**, but per this project's own CLAUDE.md rule ("do not invent business
claims — flag unverified facts rather than filling them in"), it should be
flagged: this specific ordering and wording does **not** appear anywhere in
`docs/decision-log.md`, `docs/visual-concept-directions.md`,
`docs/direction-d-motion-spec.md`, or `docs/visual-reference-audit.md`. What
the repo itself documents is narrower:
- `hero.tsx`'s own comment names three *unordered* future scenes: "airport,
  family, corporate."
- `docs/direction-d-motion-spec.md` describes an interactive "service
  worlds" stage cross-fading between **Airport / Alberta routes /
  Corporate** (three, not four, and no "family" world).

Before building the remaining three scenes, get this ordering and wording
explicitly confirmed and recorded as a numbered decision-log entry (the
project's own convention, e.g. `D-026`), rather than treating this
migration note as that confirmation.

## Current header and hero decisions

- Header height: `h-16` (mobile) / `h-[88px]` (`sm:` and up), was `h-20`.
- Logo shrinks further only below 360px viewport width
  (`max-[359px]:h-7 max-[359px]:w-[112px]`).
- Mobile (`lg:hidden`) header now shows a dedicated "Download the App" CTA
  (label collapses to just "Download" below 360px) in addition to
  `MobileNav`; the desktop CTA (`hidden lg:inline-flex`) is unchanged.
- Hero renders exactly one scene (mountain); no carousel, no dots, no
  "coming soon" placeholder for the other three.
- `<TrustStrip />` removed from the homepage section order in `page.tsx`.

## Current production hero asset filenames

`public/images/hero/`:
- `primekar-mountain-hero-background.png`
- `lexus-lx600-stopped.png` (in use)
- `lexus-lx600-moving.png` (on disk, not currently referenced)

Full sizes, dimensions, and SHA-256 checksums are in
`docs/migration-asset-manifest.txt`.

**Known checksum finding (not fixed in this checkpoint):**
`public/images/hero/lexus-lx600-moving.png` is byte-identical to
`docs/source-material/assets/hero-refs/lexus-lx600-stopped-clean.png`, and
`public/images/hero/lexus-lx600-stopped.png` is byte-identical to
`docs/source-material/assets/hero-refs/lexus-lx600-moving-clean.png` — the
"moving"/"stopped" labels are swapped between the production filenames and
the "-clean" reference filenames. This does not affect current behavior
(the code only loads `lexus-lx600-stopped.png`, and that file is confirmed
by the code comment to be the verified transparent cutout actually in use),
but the naming should be reconciled deliberately, not assumed correct,
before it's used to key off "moving" vs. "stopped" semantics anywhere else.

## Approved reference-image filenames

Under `docs/source-material/assets/hero-refs/` (gitignored — internal
source material, never committed, listed here for continuity only):
- `primekar-approved-desktop-hero-reference.PNG`
- `primekar-approved-mobile-hero-reference.PNG`
- `primekar-mountain-hero-background.PNG` (source for the production PNG)
- `lexus-lx600-stopped-clean.png`, `lexus-lx600-moving-clean.png` (cleaned
  cutouts — see checksum-swap note above for which production file each
  actually matches)
- `lexus-lx600-stopped.PNG`, `lexus-lx600-moving.PNG` (raw/uncleaned
  originals)
- `primekar-current-hero-comparison.png`, `primekar-current-rejected-hero.png`
  (comparison/rejected reference material)

These live only on this machine's working tree (and whatever the new
laptop's clone/transfer preserves outside git) — they are not in any git
history on this branch. If the new laptop only clones from `origin`, this
whole `docs/source-material/` tree will be **missing** and must be copied
over separately (see "Files that must not be changed" below).

## Files that must not be changed

- `docs/decision-log.md` — append-only decision record; do not edit past
  entries, only add new numbered `D-0xx` rows.
- `docs/source-material/` — internal, gitignored, approved for internal use
  only (D-015); do not modify or attempt to commit.
- `docs/master-spec-v7.md` — saved verbatim as the source-of-truth spec;
  do not edit.
- Legal-adjacent content: no Privacy Policy / Terms body text should be
  fabricated or paraphrased (D-023 — escalated, unresolved).
- Any current-site marketing claim on the "do not publish" list in
  `docs/decision-log.md`'s Section 9 table (launch date, Edmonton/Lethbridge
  service, fixed pricing, "Calgary's first," zero cancellations, etc.).
- CLAUDE.md's core rules: no invented business claims, no copying
  reference-site code/wording/photography/branding, "driver" never
  "chauffeur."

## Exact next task

1. Confirm with the user which visual direction is actually being pursued
   (Direction A vs. Direction D — see "Visual-reset status" above) if that
   hasn't already happened outside this repo's docs.
2. Get the four-scene hero order (Airport / Mountain / Family & Group /
   Corporate, or whatever is actually decided) confirmed and recorded as a
   new `docs/decision-log.md` entry — do not build the remaining three
   scenes off an unrecorded assumption.
3. Resolve the `lexus-lx600-moving.png`/`lexus-lx600-stopped.png` vs.
   `-clean` reference-filename swap noted above before it causes confusion
   in a second scene.
4. Once confirmed, build the remaining hero scenes following the existing
   `HeroScene` type in `src/components/sections/hero.tsx` (already typed for
   this — only `mountainScene` is currently populated and rendered).
5. Separately, Phase G (final site audit) is still paused and has two
   pre-existing hard blockers unrelated to the visual reset: the D-022 JS
   budget approval and the D-023 legal-copy gap.

## Tests currently passing (this checkpoint)

Run on 2026-07-24 against this exact working tree, before commit:

- `pnpm run typecheck` — clean, no errors
- `pnpm run lint` — "ESLint: No issues found"
- `pnpm run format:check` — "All matched files use Prettier code style!"
- `pnpm run build` — succeeds; 24 routes prerender as static content
- `pnpm exec playwright test` — **281 passed, 0 failed, 1 skipped**
  (Desktop Chromium, Mobile Chromium, Mobile WebKit projects; tests the
  production build via `next start`, per the D-024 fix, not `next dev`)
- `pnpm exec playwright test --grep @accessibility` — **6 passed, 0 failed**

## Known limitations

- Only one of four planned hero scenes is built; no in-repo record of the
  final scene order (see above).
- `lexus-lx600-moving.png` is unused; its filename doesn't match its actual
  (swapped) content relative to the `-clean` reference pair.
- JS budget still exceeds the original 130KB target (~161KB gzip measured);
  a revised ~165KB budget is proposed but not yet approved (D-022).
- Privacy Policy and Terms and Conditions pages are unbuilt; verbatim legal
  text was never captured in this repo (D-023) — hard blocker for Phase G
  and any deploy.
- Store-link verification, hosting-provider selection, SVG logo, clean app
  screenshots, and fleet/destination photography are all still outstanding
  per Phase A open items.
- `docs/source-material/assets/hero-refs/` and `/prototypes/` exist only on
  this machine's disk, not in git history — they will not transfer with a
  plain `git clone` of `origin`.

## Commands to install, build, test, and run

```bash
pnpm install
pnpm run dev          # local dev server, http://localhost:3000
pnpm run build        # production build
pnpm run start         # serve the production build
pnpm run typecheck
pnpm run lint
pnpm run lint:fix
pnpm run format
pnpm run format:check
pnpm exec playwright test                        # full e2e suite
pnpm exec playwright test --grep @accessibility   # accessibility subset
pnpm run lighthouse   # Lighthouse CI (lhci autorun)
```

Package manager is pinned to `pnpm@11.13.1` (`packageManager` field in
`package.json`).

## Deployment status

**Nothing has been merged, deployed, or opened as a pull request as part of
this checkpoint or any prior session captured in this document.** This is a
checkpoint commit on `feature/primekar-visual-reset` only, pushed to
`origin` for continuity across the laptop/account migration. `main` is
unaffected.
