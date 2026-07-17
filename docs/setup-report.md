# PrimeKar Website 2026 Rebuild — Setup Report

This report is built up incrementally during environment setup. The full
report (system tools, all MCP servers, final readiness status, etc.) is
completed in the last setup phase.

## UI/UX Pro Max

- **Source:** https://github.com/nextlevelbuilder/ui-ux-pro-max-skill (official repo only, no fork)
- **Installed version:** 2.11.0 (`ui-ux-pro-max-cli` on npm)
- **Installation location:**
  - CLI binary: `/opt/homebrew/bin/uipro` (installed via `npm install -g --prefix /opt/homebrew ui-ux-pro-max-cli`)
  - Skill files: `~/Projects/PrimeKar/primekar-website/.claude/skills/ui-ux-pro-max/`
- **Verification result:**
  - `SKILL.md`, `data/`, `scripts/` all confirmed present on disk.
  - `data/` contains 12 reference CSVs (colors, typography, styles, landing patterns, motion, etc.) plus a `stacks/` subfolder.
  - `scripts/` contains `core.py`, `design_system.py`, `search.py`.
  - Ran `python3 .claude/skills/ui-ux-pro-max/scripts/search.py "minimal saas landing page"` directly — executed cleanly (exit 0), returned three coherent, well-formed pattern results from `landing.csv`. Confirms the script runs without errors and requires no network access, matching the README's claim.
  - **Not verified from this session:** whether the skill shows up in Claude Code's live skill list. This chat session's project root is a different directory than `primekar-website`, so skills/plugins scoped to that project don't load here (same limitation already noted for the project's MCP servers in Phase 6). Run `/skills` (or check the skill is offered when relevant) from a Claude Code session opened at `~/Projects/PrimeKar/primekar-website` to confirm live.
- **Errors:** None. One correction made before install: the user-provided install recipe specified npm package `uipro-cli`, but the current official README states that package name is stale and the correct current package is `ui-ux-pro-max-cli` — used the correct one.

### Bundled companion skills

`uipro init --ai claude` installs a suite of companion skills alongside
`ui-ux-pro-max`, not just the one skill — this is the official CLI's own
packaging behavior, not a substitution. Of the six installed
(`banner-design`, `brand`, `design`, `design-system`, `slides`,
`ui-styling`), two were removed as not currently needed:

| Skill           | Kept?   | Reason                                                                      |
| --------------- | ------- | --------------------------------------------------------------------------- |
| `ui-ux-pro-max` | Yes     | Originally requested                                                        |
| `brand`         | Yes     | Brand identity/voice consistency for PrimeKar                               |
| `design`        | Yes     | Design-token and asset generation support                                   |
| `design-system` | Yes     | Token architecture / component specs                                        |
| `ui-styling`    | Yes     | shadcn/Tailwind UI implementation support                                   |
| `banner-design` | Removed | Not needed for the site build; ad/social banners out of current scope       |
| `slides`        | Removed | Not needed for the site build; presentation generation out of current scope |

All five retained skills verified structurally: valid `SKILL.md` frontmatter,
and every bundled Python script (`brand`, `design`, `design-system`,
`ui-styling`, `ui-ux-pro-max`) compiles cleanly via `python3 -m py_compile`.
Removed skills can be reinstalled later with `uipro init --ai claude` if
banner or presentation work comes up.

- **Scope discipline:** No additional optional tools beyond this bundle were installed in this step, per instruction.
