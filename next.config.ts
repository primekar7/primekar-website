import path from "node:path";
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // The approved sitemap (docs/sitemap.md) and every nav/footer/CTA href
  // already built in src/lib/content/site.ts use trailing-slash URLs
  // (e.g. /calgary-airport-transportation/). Without this, Next.js's
  // default routing serves those paths without a trailing slash, which
  // would 404 or require a redirect for every internal link on the site.
  trailingSlash: true,
  turbopack: {
    // Pin the workspace root explicitly — an unrelated lockfile in the
    // parent home directory otherwise makes Turbopack guess the wrong root.
    root: path.resolve(__dirname),
  },
};

export default nextConfig;
