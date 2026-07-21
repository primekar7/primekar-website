import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { publicRoutes } from "../src/lib/site-routes";

/**
 * Generalized per-page checks across every built public route
 * (docs/page-template-review.md PT-002 — Airport/Banff previously had zero
 * automated coverage; every hard-coded `page.goto("/")` in the older specs
 * only ever exercised the homepage). Parameterized over `site-routes.ts` so
 * a newly built page is covered automatically and a route can't be added
 * to navigation without also being added here.
 */
for (const path of publicRoutes) {
  test.describe(`page checks: ${path}`, () => {
    test(`loads, has exactly one h1, no console errors (${path})`, async ({
      page,
    }) => {
      const errors: string[] = [];
      page.on("console", (msg) => {
        if (msg.type() === "error") errors.push(msg.text());
      });
      const response = await page.goto(path, { waitUntil: "domcontentloaded" });
      expect(response?.ok()).toBeTruthy();
      await page.waitForTimeout(500);
      await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
      expect(
        errors,
        `Console errors on ${path}:\n${errors.join("\n")}`,
      ).toEqual([]);
    });

    for (const width of [390, 1440]) {
      test(`no horizontal overflow at ${width}px (${path})`, async ({
        page,
      }) => {
        await page.setViewportSize({ width, height: 900 });
        await page.goto(path);
        const { scrollWidth, clientWidth } = await page.evaluate(() => ({
          scrollWidth: document.documentElement.scrollWidth,
          clientWidth: document.documentElement.clientWidth,
        }));
        expect(scrollWidth).toBeLessThanOrEqual(clientWidth);
      });
    }

    // Full accessibility scan including `moderate` impact, not just
    // serious/critical (PT-002 — the repo's existing accessibility gate
    // filters moderate out; this suite does not).
    test(`no automated accessibility violations, moderate and up (${path})`, async ({
      page,
    }) => {
      await page.emulateMedia({ reducedMotion: "reduce" });
      await page.goto(path);
      const results = await new AxeBuilder({ page }).analyze();
      const moderateOrWorse = results.violations.filter((v) =>
        ["moderate", "serious", "critical"].includes(v.impact ?? ""),
      );
      expect(moderateOrWorse, JSON.stringify(moderateOrWorse, null, 2)).toEqual(
        [],
      );
    });
  });
}
