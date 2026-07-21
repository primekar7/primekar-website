import { test, expect } from "@playwright/test";

/**
 * Template-specific coverage for ServicePage/RoutePage instances
 * (docs/page-template-review.md PT-002/PT-003/PT-007/PT-011): breadcrumbs,
 * BreadcrumbList structured data, CTA destination consistency, and mobile
 * hero fact fallback. Airport is the ServicePage baseline; Banff is the
 * RoutePage baseline.
 */
const templatePages = [
  {
    path: "/calgary-airport-transportation/",
    breadcrumbLabel: "Calgary Airport Transportation",
    heroSecondaryCta: "Explore All Services",
  },
  {
    path: "/calgary-to-banff-transportation/",
    breadcrumbLabel: "Calgary to Banff Transportation",
    heroSecondaryCta: "Explore All Routes",
  },
];

for (const { path, breadcrumbLabel, heroSecondaryCta } of templatePages) {
  test.describe(`template page: ${path}`, () => {
    test(`breadcrumb renders Home + current page (${path})`, async ({
      page,
    }) => {
      await page.goto(path);
      const breadcrumb = page.getByRole("navigation", { name: "Breadcrumb" });
      await expect(
        breadcrumb.getByRole("link", { name: "Home" }),
      ).toHaveAttribute("href", "/");
      await expect(breadcrumb.getByText(breadcrumbLabel)).toBeVisible();
    });

    test(`breadcrumb link meets the 44px touch target and shows a focus ring (${path})`, async ({
      page,
    }) => {
      await page.goto(path);
      const homeLink = page
        .getByRole("navigation", { name: "Breadcrumb" })
        .getByRole("link", { name: "Home" });
      const box = await homeLink.boundingBox();
      expect(box?.height ?? 0).toBeGreaterThanOrEqual(44);
      await homeLink.focus();
      const outline = await homeLink.evaluate(
        (el) => getComputedStyle(el).boxShadow,
      );
      expect(outline).not.toBe("none");
    });

    test(`BreadcrumbList JSON-LD uses absolute URLs (${path})`, async ({
      page,
    }) => {
      await page.goto(path);
      const jsonLd = await page.evaluate(() => {
        const scripts = [
          ...document.querySelectorAll('script[type="application/ld+json"]'),
        ];
        const match = scripts
          .map((s) => JSON.parse(s.textContent || "{}"))
          .find((d) => d["@type"] === "BreadcrumbList");
        return match;
      });
      expect(jsonLd).toBeTruthy();
      for (const item of jsonLd.itemListElement) {
        expect(item.item).toMatch(/^https?:\/\//);
      }
    });

    test(`hero primary and secondary CTAs point to the same destinations as the final CTA (${path})`, async ({
      page,
    }) => {
      await page.goto(path);
      const heroDownload = page
        .locator("main")
        .getByRole("link", { name: "Download the App" })
        .first();
      const heroSecondary = page
        .locator("main")
        .getByRole("link", { name: heroSecondaryCta })
        .first();
      const finalDownload = page
        .locator("main")
        .getByRole("link", { name: "Download the App" })
        .last();
      const finalSecondary = page
        .locator("main")
        .getByRole("link", { name: heroSecondaryCta })
        .last();

      const [heroDlHref, heroSecHref, finalDlHref, finalSecHref] =
        await Promise.all([
          heroDownload.getAttribute("href"),
          heroSecondary.getAttribute("href"),
          finalDownload.getAttribute("href"),
          finalSecondary.getAttribute("href"),
        ]);

      expect(heroDlHref).toBe(finalDlHref);
      expect(heroSecHref).toBe(finalSecHref);
    });

    test(`quick facts are present on mobile without the desktop panel (${path})`, async ({
      page,
    }) => {
      await page.setViewportSize({ width: 390, height: 844 });
      await page.goto(path);
      const mobileFacts = page.locator("main ul.grid.lg\\:hidden li");
      expect(await mobileFacts.count()).toBeGreaterThan(0);
    });
  });
}
