import type { MetadataRoute } from "next";
import { cities, services, siteConfig, stateAreas } from "@/data/site-content";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = `https://${siteConfig.domain}`;

  const staticRoutes = [
    "",
    "/about",
    "/services",
    "/service-areas",
    "/reviews",
    "/contact",
    "/careers",
    "/privacy-policy",
  ];

  const staticEntries = staticRoutes.map((route) => ({
    url: `${baseUrl}${route || "/"}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${baseUrl}/services/${service.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const stateEntries = stateAreas.map((state) => ({
    url: `${baseUrl}/service-areas/${state.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.75,
  }));

  const cityEntries = cities.map((city) => ({
    url: `${baseUrl}/service-areas/${city.stateSlug}/${city.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticEntries, ...serviceEntries, ...stateEntries, ...cityEntries];
}
