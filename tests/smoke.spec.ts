import { test, expect } from "@playwright/test";

test.describe("smoke", () => {
  test("homepage loads", async ({ page }) => {
    const response = await page.goto("/");
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("body")).toBeVisible();
  });

  test("no serious console errors on the default project page", async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("console", (msg) => {
      if (msg.type() === "error") errors.push(msg.text());
    });

    // Phase F built every previously-unbuilt nav/footer destination except
    // Privacy Policy and Terms and Conditions (docs/page-template-review.md
    // Phase F report): the verbatim legal body text was never actually
    // captured in this repo (docs/legal-content-audit.md's raw-HTML capture
    // was session-scoped scratchpad, not committed), and fabricating or
    // paraphrasing legal text is out of scope — escalated to the user
    // rather than invented. These two remain the only accepted-missing
    // routes; also set `prefetch={false}` on both nav links
    // (docs/page-template-review.md PT-006) so this list should stay short.
    const acceptedMissingRoutes = ["/privacy/", "/terms/"];
    const unexpected404s: string[] = [];
    page.on("response", (res) => {
      if (res.status() !== 404) return;
      const path = new URL(res.url()).pathname;
      if (!acceptedMissingRoutes.includes(path)) unexpected404s.push(res.url());
    });

    // `networkidle` is unreliable with Next.js — client-side router
    // prefetching keeps issuing background requests and the condition can
    // time out indefinitely (verified during the Phase D test pass; also
    // Playwright's own documented advice against relying on `networkidle`).
    // `domcontentloaded` plus a brief settle window is deterministic here.
    await page.goto("/", { waitUntil: "domcontentloaded" });
    await page.waitForTimeout(1000);

    const unexpected404Text = /Failed to load resource.*404/;
    const realErrors = errors.filter((e) => !unexpected404Text.test(e));

    expect(
      realErrors,
      `Console errors found:\n${realErrors.join("\n")}`,
    ).toEqual([]);
    expect(
      unexpected404s,
      `Unexpected 404s (not an accepted F-020 unbuilt route):\n${unexpected404s.join("\n")}`,
    ).toEqual([]);
  });

  test("mobile viewport loads", async ({ page, isMobile }) => {
    test.skip(!isMobile, "only relevant on mobile projects");
    const response = await page.goto("/");
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("body")).toBeVisible();
  });
});
