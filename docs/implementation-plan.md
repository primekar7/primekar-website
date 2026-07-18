# Implementation Plan

Maps the v7 phase workflow (§1) to concrete PrimeKar work, grounded in the Blueprint. Phase A = this planning set (no production UI). Model switches + review approvals are the user's; nothing proceeds without them.

## Sequence (v7 phases)

| Phase | Model | Work | Gate |
|---|---|---|---|
| **A** (now) | Opus | Audits + all planning docs (this set). Reference evidence, sitemap/IA, SEO, components, design system, media, perf, tests, plan. | Show summary → **user approval** → Branch Policy → commit approved docs |
| **B** | Sonnet | Design tokens + primitives; **global header, mobile nav, homepage, global footer**; desktop + mobile; browser tests + screenshots | Stop → switch to Opus |
| **C** | Opus | Homepage review → `homepage-review.md` (format §2) | Show findings → **approval** before D |
| **D** | Sonnet | Approved homepage fixes; build **Airport** service template + **Banff** route template; test both | Stop → Opus |
| **E** | Opus | Review both templates → `page-template-review.md` | **Approval** before F |
| **F** | Sonnet | Remaining approved pages (unique layouts for Download/About/Contact/FAQ/Fleet/Testimonials/Legal/404 — not forced into templates); full test battery (§20/32) | Stop → Opus |
| **G** | Opus | Final site audit → `final-site-audit.md` | **Approval** before H |
| **H** | Sonnet | Approved G fixes; `final-fix-log.md`; Final Quality Gate (§33); production build | Stop → Opus |
| **I** | Opus | Verify each finding vs acceptance criterion; `launch-readiness.md` | **Launch/remediation approval** |
| **J** | Sonnet | Deploy — **only** after explicit deployment approval (§34) | — |

## Foundation build order (Phase B start, Blueprint p25)
Tokens → primitives (Container/Section/HeadingGroup/Button/Card/Image/form/nav) → header + footer → homepage sections in Blueprint p24 order (with **Ride With Purpose #14** added per v7). Content from typed data objects (copy pack = starting content, operational facts VERIFY).

## Homepage section order (v7 §18 — 16 incl. Ride With Purpose)
Header · Hero · Trust strip · Service families (4) · Why pre-scheduled · How it works · App experience · Airport feature · Alberta routes · Corporate feature · Fleet · Testimonials(cond.) · Reliability & trust · **Ride With Purpose** · Final CTA · Footer.

## Hard dependencies / blockers (do not build past these)
- **Hosting decision** (OPEN-1) — before redirects, security headers, app-association, deploy.
- **Logo SVG/transparent-dark + clean app screenshots** (OPEN-4/10) — before logo chrome + app section visuals.
- **Fleet/destination imagery + rights** — before Fleet + route visuals.
- **Legal decisions** (OPEN-2) + **claims approvals** (OPEN-3) + **Section 9 classifications** — before publishing affected copy.
- **CTA/booking destination + store-link/app-link verification** (OPEN-5) — before CTAs go live.
- **Font licence** — before typography lock.
- **Testimonials/Fleet capacities/trust stats** — sections conditional on verified content (v7 §18); omit/narrow/replace-with-process rather than fabricate.

## Standing rules every phase
Reread master-spec-v7 + CLAUDE.md + decision-log + preceding review before acting (§1). No commit/push/branch/merge without approval (§3–4). `[VERIFICATION REQUIRED]` internal-only, never in production output. Compilation ≠ completion — browser-verify desktop + mobile. Motion+shadcn only; no GSAP/WebGL/scroll-hijack. Use Context7 for version-matched docs.

## Pre-first-commit checklist (after Phase A approval, Branch Policy §4)
1. Confirm feature branch (main = default+production → create feature branch).
2. Recommend `.gitignore` add: `docs/source-material/` (internal spec + would-be-sensitive), and confirm app screenshots stay out of repo.
3. Stage only approved Phase A docs; review full diff; secret scan + manual inspection (§3).
4. Commit only after branch + staged files approved; push only after separate approval.
