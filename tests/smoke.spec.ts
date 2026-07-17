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

    await page.goto("/");
    await page.waitForLoadState("networkidle");

    expect(errors, `Console errors found:\n${errors.join("\n")}`).toEqual([]);
  });

  test("mobile viewport loads", async ({ page, isMobile }) => {
    test.skip(!isMobile, "only relevant on mobile projects");
    const response = await page.goto("/");
    expect(response?.ok()).toBeTruthy();
    await expect(page.locator("body")).toBeVisible();
  });
});
