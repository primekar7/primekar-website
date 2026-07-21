import type { MetadataRoute } from "next";
import { siteUrl } from "@/lib/seo";
import { publicRoutes } from "@/lib/site-routes";

export default function sitemap(): MetadataRoute.Sitemap {
  return publicRoutes.map((path) => ({
    url: new URL(path, siteUrl).toString(),
  }));
}
