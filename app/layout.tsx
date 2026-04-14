import type { Metadata } from "next";
import { Manrope, Sora } from "next/font/google";
import { MobileCtaBar } from "@/components/layout/mobile-cta-bar";
import { SiteFooter } from "@/components/layout/site-footer";
import { SiteHeader } from "@/components/layout/site-header";
import { siteConfig } from "@/data/site-content";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const sora = Sora({
  variable: "--font-sora",
  subsets: ["latin"],
});

const baseUrl = `https://${siteConfig.domain}`;

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: `${siteConfig.companyName} | Pest Control in Utah & Idaho`,
    template: `%s | ${siteConfig.companyName}`,
  },
  description:
    "Premium pest control for Utah and Idaho homes and businesses. Fast response, safe treatment, and dependable long-term protection.",
  openGraph: {
    type: "website",
    title: `${siteConfig.companyName} | Pest Control in Utah & Idaho`,
    description:
      "Fast, professional pest control for homes and businesses in Utah and Idaho.",
    url: baseUrl,
    siteName: siteConfig.companyName,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.companyName,
    image: `${baseUrl}/images/truck-side.jpeg`,
    telephone: siteConfig.phoneDisplay,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: "1185 N Washington Blvd",
      addressLocality: "Ogden",
      addressRegion: "UT",
      postalCode: "84404",
      addressCountry: "US",
    },
    url: baseUrl,
    areaServed: ["Utah", "Idaho"],
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "08:00",
        closes: "18:00",
      },
    ],
  };

  return (
    <html lang="en" className={`${manrope.variable} ${sora.variable}`}>
      <body className="min-h-screen bg-[#fbfdfa] text-[#16261f]">
        <SiteHeader />
        <main className="pb-24 lg:pb-0">{children}</main>
        <SiteFooter />
        <MobileCtaBar />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </body>
    </html>
  );
}
