import type { Metadata } from "next";
import { siteConfig } from "@/data/site-content";

type BuildMetadataParams = {
  title: string;
  description: string;
  path?: string;
};

export function buildMetadata({
  title,
  description,
  path = "/",
}: BuildMetadataParams): Metadata {
  const baseUrl = `https://${siteConfig.domain}`;
  const url = `${baseUrl}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url,
      siteName: siteConfig.companyName,
      images: [
        {
          url: `${baseUrl}/images/truck-side.jpeg`,
          width: 1200,
          height: 630,
          alt: `${siteConfig.companyName} service truck`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${baseUrl}/images/truck-side.jpeg`],
    },
  };
}
