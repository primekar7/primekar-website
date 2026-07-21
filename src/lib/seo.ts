/**
 * Shared SEO helpers so every page resolves canonical/JSON-LD URLs from one
 * source instead of each page file hand-writing relative paths
 * (docs/page-template-review.md PT-007 — BreadcrumbList item URLs were
 * relative and would not validate).
 */
export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export function absoluteUrl(path: string): string {
  return new URL(path, siteUrl).toString();
}

export type BreadcrumbSegment = { name: string; path: string };

import type { Metadata } from "next";

export function buildMetadata({
  title,
  description,
  path,
}: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      title: `${title} — PrimeKar`,
      description,
      url: path,
    },
  };
}

export function breadcrumbJsonLd(segments: BreadcrumbSegment[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: segments.map((segment, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: segment.name,
      item: absoluteUrl(segment.path),
    })),
  };
}
