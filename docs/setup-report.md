# PrimeKar Website 2026 Rebuild — Setup Report

Generated: 2026-07-17
Environment setup only — no PrimeKar pages have been designed or implemented.

## 1. System tools and versions

| Tool                               | Version                | Notes                                                                                                                                                                            |
| ---------------------------------- | ---------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| macOS                              | 26.5.1                 | Apple Silicon (arm64)                                                                                                                                                            |
| Xcode Command Line Tools           | Installed              | `/Library/Developer/CommandLineTools` (already present)                                                                                                                          |
| Homebrew                           | 6.0.11                 | Installed by user directly (sudo required, not runnable from this session)                                                                                                       |
| Git                                | 2.50.1 (Apple Git-155) | System git, left unchanged — already worked                                                                                                                                      |
| GitHub CLI                         | 2.96.0                 | Installed via Homebrew; authenticated as `primekar7` (keyring-stored token, scopes: `gist`, `read:org`, `repo`, `workflow`)                                                      |
| Node.js                            | v24.16.0               | Left unchanged — already worked, no compatibility issue found                                                                                                                    |
| npm                                | 11.13.0                | Bundled with Node                                                                                                                                                                |
| pnpm                               | 11.13.1                | Enabled via corepack, shimmed to `/opt/homebrew/bin` (Node's own `/usr/local/bin` is root-owned)                                                                                 |
| fnm                                | 1.39.0                 | Installed via Homebrew as a binary; **not** wired into the shell (would have changed which `node` is active — left the working Node install alone)                               |
| TypeScript language server         | 5.3.0 (+ `tsc` 7.0.2)  | Installed globally to `/opt/homebrew/bin` (same root-owned-path workaround as pnpm)                                                                                              |
| Python 3                           | 3.14.0                 | Required by UI/UX Pro Max's search scripts                                                                                                                                       |
| Google Chrome                      | Installed              | Pre-existing                                                                                                                                                                     |
| Claude Code (`claude` CLI on PATH) | Not present            | This session runs via the Claude desktop app's bundled Claude Code (v2.1.209), not a standalone terminal CLI. See "Manual approvals still required" below for what this affects. |

## 2. Claude Code plugins installed

Marketplace: `anthropics/claude-plugins-official`

| Plugin              | Purpose                                                                                |
| ------------------- | -------------------------------------------------------------------------------------- |
| `frontend-design`   | Distinctive, non-templated UI design guidance                                          |
| `typescript-lsp`    | TS/JS language server integration (binary installed separately, see above)             |
| `security-guidance` | Pattern-based edit warnings + Stop-time diff security review                           |
| `context7`          | Context7 MCP server (community-managed, kept — satisfies the Context7 MCP requirement) |

`code-review@claude-plugins-official` was also installed as a side effect of the marketplace-add step; removed, no stated purpose in this project.

## 3. MCP servers installed

All configured in `~/Projects/PrimeKar/primekar-website/.mcp.json` (project scope):

| Server          | Transport                                       | Status                                                                      |
| --------------- | ----------------------------------------------- | --------------------------------------------------------------------------- |
| `context7`      | HTTP                                            | Configured, official OAuth setup completed (account: `primekar7@gmail.com`) |
| `shadcn`        | stdio (`npx shadcn@latest mcp`)                 | Configured                                                                  |
| `playwright`    | stdio (`npx @playwright/mcp@latest --isolated`) | Configured, isolated non-persistent browser profile                         |
| `next-devtools` | stdio (`npx next-devtools-mcp@latest`)          | Configured, requires the Next.js 16+ dev server running to connect          |
| `21st`          | HTTP                                            | Configured, official browser login completed (account: `primekar7`)         |

**Skipped (recommended, not mandatory), per explicit decision:** Chrome DevTools MCP.

### 21st.dev Magic MCP detail

- **CLI version:** `@21st-dev/cli@1.7.2`
- **Installation source:** official npm package `@21st-dev/cli`, cross-checked against all three approved sources (`github.com/21st-dev/cli`, `github.com/21st-dev/magic-mcp`, `21st.dev`) before installing. The two GitHub READMEs turned out to be stale relative to the live product — they described only a manual `--api-key` flow with no `login`/`whoami`/`init` subcommands and no OAuth. The live `21st.dev` site and the installed CLI's own `--help` output (ground truth) confirmed the browser-login flow, `21st whoami`, `21st init --client claude`, and the `API_KEY_21ST` env var all exist and are current.
- **MCP configuration location:** `~/Projects/PrimeKar/primekar-website/.mcp.json`, merged in via `21st init --client claude --write` (its own tool, not a manual edit) — verified afterward that `context7`, `shadcn`, `playwright`, and `next-devtools` were all preserved unchanged, and the file remains valid JSON.
- **Authentication method:** browser-based login (`21st login`, saves a token locally), not a pasted API key. The token was copied from the CLI's own local cache (`~/.config/21st/auth.json`) directly into `.claude/settings.local.json`'s `env` block (gitignored, never printed to chat or committed) as `API_KEY_21ST`, referenced from `.mcp.json` via `${API_KEY_21ST}` expansion — no literal key in `.mcp.json` or anywhere in git history.
- **Verification result:**
  - `21st whoami` → confirmed logged in as `primekar7`.
  - `21st search "premium hero section luxury transportation" --type c` → returned 3 real results.
  - `21st get 1946 --json` → returned full component detail (code, install command targeting `npx shadcn@latest add ...`, i.e. confirmed shadcn-registry-compatible, React/Tailwind).
  - `generate`/`iterate`/`take` subcommands confirmed present in `--help` (AI generation capability exists) — not actually invoked, since doing so opens a browser and creates real account-side state/quota usage beyond what's needed to confirm the capability exists.
  - No component was added to PrimeKar source — read-only verification only, per instruction.
- **Shows "Connected" in `/mcp`?** Not verified from this session — same structural limitation as the other three MCP servers (this chat session's project root differs from `primekar-website`; see section 4). Needs to be confirmed the same way, via `/mcp` in a Claude Code session rooted at the project.
- **Unresolved warnings:** none. One note worth carrying forward (also added to `CLAUDE.md`): some 21st.dev components use the `framer-motion` package rather than `motion` — must be translated when adapting a component, not added as a second animation dependency.

## 4. MCP scope and configuration location

- Config file: `~/Projects/PrimeKar/primekar-website/.mcp.json` (project scope, committed to git — contains no secrets, see Security section)
- Context7's API key and the 21st.dev token both live in `~/Projects/PrimeKar/primekar-website/.claude/settings.local.json` (gitignored), referenced from `.mcp.json` via `${CONTEXT7_API_KEY}` and `${API_KEY_21ST}` expansion respectively — Claude Code's documented mechanism for this, confirmed against official docs.

**Verification limitation, disclosed rather than glossed over:** this chat session's project root is a different directory (`/Users/dilshersingh/Dilsher/Claude`), so project-scoped `.mcp.json` servers do not connect _in this session_ — confirmed by testing (no Context7/shadcn tools reachable here even after correct, committed configuration). Configuration correctness was verified at the file level (valid JSON, correct commands/args, no secrets). Live connectivity (`/mcp` showing "Connected", asking Claude to search for a shadcn component, etc.) needs to be confirmed by opening Claude Code with `~/Projects/PrimeKar/primekar-website` as the project root and running `/mcp`.

## 5. Project packages installed

**Production:** `next` 16.2.10, `react`/`react-dom` 19.2.4, `motion` 12.42.2, shadcn/ui foundation (`@base-ui/react`, `class-variance-authority`, `clsx`, `lucide-react`, `tailwind-merge`, `tw-animate-css`).

**Dev:** `typescript`, `eslint` + `eslint-config-next`, `tailwindcss` + `@tailwindcss/postcss`, `prettier`, `@playwright/test`, `@axe-core/playwright`, `@lhci/cli`, `shadcn` (CLI).

No animation library besides Motion, no additional component library besides shadcn, no GSAP/Lenis/Three.js/React Three Fiber — confirmed via dependency scan.

Two install-time issues resolved (both documented as they happened, not silently worked around):

- `pnpm install` initially aborted on unapproved native build scripts (`sharp`, `unrs-resolver`) — both are standard transitive deps of `create-next-app`/ESLint tooling, approved via `pnpm approve-builds --all`.
- A `postcss` XSS advisory (GHSA-qx2v-qp2m-jg93) affecting Next.js's internal `postcss@8.4.31` was fixed via a `pnpm-workspace.yaml` override pinning `postcss` to `^8.5.10` — a same-major-version patch bump, not a forced major upgrade.

## 6. API keys still required

- **Context7, 21st.dev:** both already generated/obtained and stored (see above) — nothing outstanding.
- No other API keys are required for anything currently installed. `.env.example` documents where future keys (analytics, forms, etc.) would go once those features are actually added — none exist yet, per scope.

## 7. Manual approvals still required

- **Live MCP verification:** open Claude Code with `~/Projects/PrimeKar/primekar-website` as the project root, run `/mcp`, confirm all five servers (`context7`, `shadcn`, `playwright`, `next-devtools`, `21st`) show "Connected," and approve the project's `.mcp.json` servers if prompted (Claude Code asks for this by default on first load of a new project).
- **`/plugin` commands, if any further plugins are wanted later:** this session cannot run them; run in a terminal with the standalone `claude` CLI, or through the desktop app's own plugin UI.

## 8. Tests completed

All run directly, not assumed from a successful exit code alone:

| Check                                          | Result                                                                                                                                                                                                                                                                                                                           |
| ---------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `pnpm typecheck`                               | ✅ Pass                                                                                                                                                                                                                                                                                                                          |
| `pnpm lint`                                    | ✅ Pass (after excluding `.claude/**` vendor skill bundles from ESLint scope)                                                                                                                                                                                                                                                    |
| `pnpm format:check`                            | ✅ Pass (after adding `.prettierignore` and formatting previously-unformatted scaffold files)                                                                                                                                                                                                                                    |
| `pnpm build`                                   | ✅ Pass (Turbopack, after pinning `turbopack.root` to resolve a workspace-root ambiguity warning)                                                                                                                                                                                                                                |
| `pnpm test:e2e`                                | ✅ 11 passed, 1 correctly skipped (mobile-only test on the desktop project), across Desktop Chromium / Mobile Chromium / Mobile WebKit                                                                                                                                                                                           |
| `pnpm test:accessibility`                      | ✅ 3 passed (axe executes cleanly on all three projects)                                                                                                                                                                                                                                                                         |
| GitHub Actions CI (`.github/workflows/ci.yml`) | ✅ Confirmed green on a real run against `main`: [run 29558357993](https://github.com/primekar7/primekar-website/actions/runs/29558357993), 3m28s, every step passed. One harmless annotation: `pnpm/action-setup@v4` targets Node 20 internally, auto-forced to Node 24 by GitHub's runners — not a problem with this workflow. |

## 9. Failed or skipped installations

- **Chrome DevTools MCP** — skipped, recommended (not mandatory), per explicit decision to limit setup to mandatory items. (21st.dev Magic MCP was initially skipped for the same reason, then installed separately — see section 3.)
- **Open Lovable, Screenshot-to-Code** — not installed; documented only in `primekar-reference-lab/README.md`, pending a deliberate future decision (both execute AI-generated code).
- **Firecrawl** — not installed; documented only, same reasoning.
- **`banner-design`, `slides` skills** — installed as part of the UI/UX Pro Max CLI's bundle, then removed per explicit decision (not needed for the site build).
- Two mid-setup corrections (not failures, but worth logging): the stale `uipro-cli` npm package name was corrected to `ui-ux-pro-max-cli`, and `npm install -g`/`corepack enable` had to target `/opt/homebrew` instead of the root-owned default Node install location.

## 10. Security warnings

- `pnpm audit`: 3 remaining findings, all in `@lhci/cli`'s own bundled dependencies (dev-only tooling — `@lhci/cli` never ships to production or runs as part of the website itself):
  - `tmp` path traversal (high) and symlink write (low) — no patched `@lhci/cli` release exists yet upstream.
  - `uuid` buffer bounds issue (moderate) — patched only in `uuid@11.x`; `@lhci/cli` pins `uuid@8.x`. **Not forced**, per instruction not to force major-version upgrades just to silence an audit — this is a transitive dependency of a dev-only CLI tool, not exercised with untrusted input in this project.
- No secrets found anywhere in git history (verified via full-history grep for key-shaped strings).
- No GitHub token stored in any repository file — `gh` stores it in the system keyring.
- `.mcp.json` contains no raw credentials (Context7 key referenced via `${CONTEXT7_API_KEY}` expansion).
- `.env.local` and `.claude/settings.local.json` are both gitignored and confirmed via `git check-ignore`.
- Playwright MCP uses `--isolated` — no persistent or logged-in browser profile. Chrome DevTools MCP was not installed, so no browser-profile question applies there.
- Two of my own mistakes were caught and fixed during setup, not left in: Python `__pycache__` bytecode files and Playwright's generated `playwright-report/`/`test-results/` output were briefly committed, then removed and gitignored.

## 11. Optional tools not installed

Chrome DevTools MCP, Firecrawl, Open Lovable, Screenshot-to-Code, `banner-design` skill, `slides` skill, GitHub MCP (official) — GitHub CLI is used as the primary GitHub integration instead, per instruction, with no demonstrated need yet for Claude to manage issues/PRs/Actions directly.

## 12. Exact command to start the development server

```
cd ~/Projects/PrimeKar/primekar-website
pnpm dev
```

## 13. Exact command to restart Claude Code

This session runs through the Claude desktop app's bundled Claude Code, not a standalone terminal process — "restart" means restarting the Claude desktop app itself (Cmd+Q, reopen), or if using a separate standalone `claude` CLI session elsewhere, exit it (Ctrl+D or `/exit`) and run `claude` again from `~/Projects/PrimeKar/primekar-website`.

## 14. Final readiness status

**READY FOR MASTER PROMPT**, with one outstanding manual step: live `/mcp` verification (section 7) should be done in a Claude Code session actually rooted at `~/Projects/PrimeKar/primekar-website` before relying on the MCP servers during the build. Everything else — tooling, project scaffold, dependencies, scripts, tests, CI, and documentation — is in place and verified.
