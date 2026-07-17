# Approved Tools & Sources

Reference list of every external source approved for the PrimeKar Website
2026 Rebuild setup, and what actually happened with each. No source outside
this list was used without a separate approval during setup.

| Tool                 | Approved source                                         | Status                    | Notes                                                                                                                                                                          |
| -------------------- | ------------------------------------------------------- | ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Claude Code plugins  | https://code.claude.com/docs/en/plugins                 | Used                      | Marketplace: `anthropics/claude-plugins-official`                                                                                                                              |
| Claude Code MCP      | https://code.claude.com/docs/en/mcp                     | Used                      | Reference for `.mcp.json` syntax, env-var expansion, scopes                                                                                                                    |
| UI/UX Pro Max        | https://github.com/nextlevelbuilder/ui-ux-pro-max-skill | Installed                 | v2.11.0 via official `ui-ux-pro-max-cli` npm package                                                                                                                           |
| 21st.dev Magic MCP   | https://github.com/21st-dev/magic-mcp                   | **Skipped**               | Recommended, not mandatory — skipped per explicit decision to keep setup to mandatory items only                                                                               |
| shadcn MCP           | https://ui.shadcn.com/docs/mcp                          | Installed                 | `pnpm dlx shadcn@latest mcp init --client claude`                                                                                                                              |
| Context7             | https://github.com/upstash/context7                     | Installed                 | Official `npx ctx7 setup --claude --mcp -p -y`; project-scoped, API key in gitignored local settings                                                                           |
| Playwright MCP       | https://github.com/microsoft/playwright-mcp             | Installed                 | `--isolated` profile (no persistent/logged-in browser state)                                                                                                                   |
| Next.js DevTools MCP | https://github.com/vercel/next-devtools-mcp             | Installed                 | Requires Next.js 16+ dev server running to connect                                                                                                                             |
| Chrome DevTools MCP  | https://github.com/ChromeDevTools/chrome-devtools-mcp   | **Skipped**               | Recommended, not mandatory — skipped per explicit decision                                                                                                                     |
| Official GitHub MCP  | https://github.com/github/github-mcp-server             | Not used                  | Optional; GitHub CLI (`gh`) used instead as the primary GitHub integration, per setup instructions — no demonstrated need for direct issue/PR/Actions management by Claude yet |
| Firecrawl            | https://github.com/firecrawl/firecrawl                  | Documented, not installed | See `primekar-reference-lab/README.md`                                                                                                                                         |
| Open Lovable         | https://github.com/firecrawl/open-lovable               | Documented, not installed | See `primekar-reference-lab/README.md` — executes AI-generated code in a remote sandbox, requires explicit approval before install                                             |
| Screenshot-to-Code   | https://github.com/abi/screenshot-to-code               | Documented, not installed | See `primekar-reference-lab/README.md` — runs a local Chromium preview, requires explicit approval before install                                                              |

## Claude Code plugins installed (from `anthropics/claude-plugins-official`)

| Plugin              | Purpose                                                                                                                         |
| ------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| `frontend-design`   | Distinctive, non-templated UI design guidance                                                                                   |
| `typescript-lsp`    | TypeScript/JS language server integration (requires `typescript-language-server` + `typescript` globally, installed separately) |
| `security-guidance` | Pattern-based edit warnings + Stop-time diff security review                                                                    |

`code-review` and `context7` plugins were also installed by the marketplace-add
step as a side effect; `code-review` was removed (no stated purpose in this
project), `context7` was kept as it satisfies the Context7 MCP requirement
directly (see `docs/setup-report.md` for the full explanation).

## Rule followed throughout

No forks, similarly-named packages, or unofficial replacements were used. Two
corrections were made when a prescribed command didn't match current official
documentation — both are logged in `docs/setup-report.md`:

1. pnpm installed via corepack pointed at a writable install directory
   (`--install-directory /opt/homebrew/bin`) instead of failing on a
   permissions error against the default location.
2. UI/UX Pro Max installed via the current package name `ui-ux-pro-max-cli`
   instead of the stale `uipro-cli`.
