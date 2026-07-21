/**
 * Single source of truth for which routes are live and indexable right now
 * (docs/page-template-review.md PT-012). `sitemap.ts` and `robots.ts` both
 * read this instead of hand-listing URLs, so a route can't be forgotten in
 * one place and not the other. Updated as each page in docs/sitemap.md is
 * actually built — never lists a route ahead of it existing.
 */
export const publicRoutes: string[] = [
  "/",
  "/calgary-airport-transportation/",
  "/calgary-to-banff-transportation/",
  "/calgary-to-canmore-transportation/",
  "/calgary-to-lake-louise-transportation/",
  "/calgary-to-jasper-transportation/",
  "/executive-transportation-calgary/",
  "/corporate-transportation-calgary/",
  "/events-transportation-calgary/",
  "/early-morning-airport-transportation-calgary/",
  "/private-trips/",
  "/about/",
  "/contact/",
  "/fleet/",
  "/how-it-works/",
  "/faq/",
  "/download-app/",
];
