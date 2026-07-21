import { defineConfig, devices } from "@playwright/test";

export default defineConfig({
  testDir: "./tests",
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  reporter: "html",
  use: {
    baseURL: "http://localhost:3000",
    trace: "on-first-retry",
  },
  // Production build, not `next dev` (docs/page-template-review.md Phase F
  // finding): with no server already running, Playwright's `reuseExistingServer`
  // fallback previously spawned `pnpm dev`, and `next dev`'s CSS resolved
  // `--muted-foreground` to a visibly darker, WCAG-AA-failing colour than the
  // production build's — an axe-core run against dev mode was passing/failing
  // a colour that no real visitor is served. `pnpm build` is idempotent to
  // re-run here; `next start` serves the real production output every time,
  // in CI and locally, matching what docs/test-matrix.md already assumed
  // was happening.
  webServer: {
    command: "pnpm build && pnpm start",
    url: "http://localhost:3000",
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
  },
  projects: [
    {
      name: "Desktop Chromium",
      use: { ...devices["Desktop Chrome"] },
    },
    {
      name: "Mobile Chromium",
      use: { ...devices["Pixel 7"] },
    },
    {
      name: "Mobile WebKit",
      use: { ...devices["iPhone 14"] },
    },
  ],
});
