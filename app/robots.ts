import type { MetadataRoute } from "next";
import { siteConfig } from "@/data/site-content";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = `https://${siteConfig.domain}`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
