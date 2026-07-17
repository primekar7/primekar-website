import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("axe can execute against the default project page @accessibility", async ({
  page,
}) => {
  await page.goto("/");

  const results = await new AxeBuilder({ page }).analyze();

  // This only proves axe runs end-to-end and produces a report on the
  // scaffold page. It is not a PrimeKar accessibility gate — that gets
  // written once real pages exist.
  expect(Array.isArray(results.violations)).toBe(true);
});
