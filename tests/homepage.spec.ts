import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

// Phase B accessibility gate for the real homepage (docs/test-matrix.md).
// Automated Axe is required but not sufficient for WCAG 2.2 AA conformance —
// see docs/test-matrix.md for the manual-check list this does not replace.
test("homepage has no serious or critical automated accessibility violations @accessibility", async ({
  page,
}) => {
  // Reduced motion is emulated so the scan reads the page's settled final
  // state rather than a mid-transition animation frame. Without this, the
  // below-fold Reveal fade-in (opacity/translate CSS transition) can be
  // caught by axe-core mid-fade, producing a transient, non-representative
  // contrast violation that never occurs once the 250ms transition
  // completes for a real visitor (docs/homepage-review.md F-024 —
  // discovered via flaky Playwright runs during the Phase D test pass).
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const results = await new AxeBuilder({ page }).analyze();
  const seriousOrWorse = results.violations.filter(
    (v) => v.impact === "serious" || v.impact === "critical",
  );
  expect(seriousOrWorse, JSON.stringify(seriousOrWorse, null, 2)).toEqual([]);
});

// Required breakpoints per docs/master-spec-v7.md §20 / docs/test-matrix.md.
const breakpoints = [320, 375, 390, 430, 768, 1024, 1440];

for (const width of breakpoints) {
  test(`no horizontal overflow at ${width}px`, async ({ page }) => {
    await page.setViewportSize({ width, height: 900 });
    await page.goto("/");
    const { scrollWidth, clientWidth } = await page.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));
    expect(
      scrollWidth,
      `scrollWidth vs clientWidth at ${width}px`,
    ).toBeLessThanOrEqual(clientWidth);
  });
}

test.describe("mobile navigation", () => {
  test.use({
    viewport: { width: 390, height: 844 },
    hasTouch: true,
    isMobile: true,
  });

  test("opens via the menu trigger, closes via Escape, and returns focus", async ({
    page,
  }) => {
    await page.goto("/");
    const trigger = page.getByRole("button", { name: "Open menu" });
    await trigger.click();

    const dialog = page.getByRole("dialog", { name: "Mobile navigation" });
    await expect(dialog).toBeVisible();
    await expect(dialog.getByRole("link", { name: "Airport" })).toBeVisible();

    await page.keyboard.press("Escape");
    await expect(dialog).toBeHidden();
    await expect(trigger).toBeFocused();
  });

  test("nav links meet the 44px minimum touch-target height", async ({
    page,
  }) => {
    await page.goto("/");
    await page.getByRole("button", { name: "Open menu" }).click();
    const link = page.getByRole("link", { name: "Airport", exact: true });
    const box = await link.boundingBox();
    expect(box?.height ?? 0).toBeGreaterThanOrEqual(44);
  });
});

test("respects prefers-reduced-motion", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/");
  const durationSeconds = await page.evaluate(() => {
    const el = document.querySelector("h1");
    // parseFloat handles both "0.01ms" and scientific-notation "1e-05s" forms.
    return el ? parseFloat(getComputedStyle(el).transitionDuration) : 0;
  });
  // Global reduced-motion rule in globals.css forces transitions to ~0 (0.01ms).
  expect(durationSeconds).toBeLessThanOrEqual(0.01);
});

test("primary heading and skip link are present", async ({ page }) => {
  await page.goto("/");
  await expect(page.getByRole("heading", { level: 1 })).toHaveCount(1);
  await expect(
    page.getByRole("link", { name: "Skip to main content" }),
  ).toBeAttached();
});
