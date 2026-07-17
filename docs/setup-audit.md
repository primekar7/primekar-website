> **Note:** this is the Phase 1 snapshot, captured before any installation
> happened. It's kept as a historical record of the starting state. For the
> current, post-setup state of every tool, see `docs/setup-report.md`.

# PrimeKar Website 2026 Rebuild — Setup Audit

Generated: 2026-07-15
Machine: Apple Silicon Mac (arm64), macOS 26.5.1 (build 25F80)

| Tool | Detected version | Required | Status | Action required | Notes |
|---|---|---|---|---|---|
| macOS | 26.5.1 (25F80) | Any recent macOS | OK | None | |
| Architecture | Apple Silicon (arm64) | — | OK | None | Homebrew must install to `/opt/homebrew` |
| Disk space (Data volume) | 25 GB free of 494 GB (95% used) | Several GB free | CAUTION | None blocking, but monitor | Root volume shows 25 GB avail; enough for this project (~1-2 GB for node_modules + Playwright browsers) but the volume overall is nearly full. Recommend freeing space soon, unrelated to this project. |
| Xcode Command Line Tools | Installed at `/Library/Developer/CommandLineTools` | Installed | OK | None | |
| Homebrew | Not installed (`/opt/homebrew` exists but empty, no `brew` binary) | Latest | MISSING | Install | `/opt/homebrew/bin` is already on PATH, so once installed no shell config changes needed |
| Git | 2.50.1 (Apple Git-155) at `/usr/bin/git` | Any recent | OK | None | System git, not Homebrew git — fine for our purposes |
| GitHub CLI (`gh`) | Not installed | Latest | MISSING | Install | Needed for repo creation + auth |
| GitHub authentication | N/A (`gh` not installed) | Authenticated | MISSING | Authenticate after install | |
| Node.js | v24.16.0 at `/usr/local/bin/node` (non-Homebrew install) | Current LTS | VERIFY | Confirm v24 is current LTS before deciding whether to switch to a version-manager-controlled install | Installed outside Homebrew/fnm/nvm — no version manager currently controls it |
| Node version manager | None found (no fnm, no nvm, no volta, no n) | fnm (preferred) | MISSING | Install fnm, migrate Node under it | |
| npm | 11.13.0 | Bundled with Node | OK | None | |
| pnpm | Not installed | Latest | MISSING | Install (via corepack, already present at v0.35.0) | `corepack` ships with Node 24 — can enable pnpm without a separate installer |
| Claude Code (standalone CLI, `claude` on PATH) | Not found in this shell's PATH | Working `claude` CLI in Terminal | MISSING (in Terminal) | Install standalone CLI if you want to run `/plugin`, `claude mcp add` etc. from a normal Terminal window | A **bundled** Claude Code (v2.1.209) exists under `~/Library/Application Support/Claude/claude-code/2.1.209/`, managed internally by the Claude desktop app — that's what's powering this very session. It is not exposed as a `claude` shell command, so it can't run interactive `/plugin` or `claude mcp add` commands from a plain Terminal. |
| Existing Claude plugins | `claude-mem` (from thedotmack marketplace) installed and enabled | — | INFO | None required | Installed earlier this session, unrelated to PrimeKar |
| Existing MCP servers | None configured in `~/.claude/settings.json` (`mcpServers: {}`); no `.mcp.json` found anywhere in home directory | — | OK (clean slate) | None | |
| Google Chrome | Installed at `/Applications/Google Chrome.app` | Installed | OK | None | |
| TypeScript language server | Not installed globally | typescript-language-server + typescript | MISSING | Install in Phase 3 | |
| Existing project folders | `~/Projects` does not exist yet; unrelated personal/dev folders exist in home (`~/Flowise` has its own git repo, plus `~/ntws`, `~/cp`, `~/cAlgo`, `~/cTrader`, `~/dashboard`, `~/Uber`, `~/Dilsher`) | — | INFO | None — will create `~/Projects/PrimeKar/` fresh | No conflicts with the PrimeKar project |
| Existing Git repositories (home, depth 3) | Only `~/Flowise/.git` found | — | INFO | None | Unrelated to PrimeKar |

## Serious unresolved problems?

None. Nothing here blocked proceeding to Phase 2. The two items flagged for attention:

1. **No `claude` CLI on PATH** — this session works fine (it runs through the desktop app's bundled Claude Code), but Phase 3 (`/plugin` commands) and Phase 6 (`claude mcp add` commands) were written assuming a Terminal with `claude` available. This turned out to matter throughout setup: `/plugin` commands had to be run by the user directly, and MCP servers were configured by editing `.mcp.json` directly instead of via `claude mcp add` (both officially supported mechanisms).
2. **Data volume was 95% full** (25 GB free). Did not block setup — final footprint (node_modules, Playwright browsers, Homebrew formulas) fit comfortably — but worth monitoring going forward, unrelated to this project.
