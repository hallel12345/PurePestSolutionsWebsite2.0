import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig, stateAreas } from "@/data/site-content";

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[#d8e6dd] bg-[#f4f8f5]">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-12 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <Image
            src="/brand/logo-wordmark.png"
            alt="Pure Pest Solutions"
            width={170}
            height={50}
            className="rounded"
          />
          <p className="mt-4 text-sm text-[#294436]">{siteConfig.coverageLine}</p>
          <p className="mt-2 text-sm text-[#294436]">Licensed & insured in Utah and Idaho</p>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#1d3228]">Company</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#294436]">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="hover:text-[#6ec94f]">
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/privacy-policy" className="hover:text-[#6ec94f]">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#1d3228]">Service Regions</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#294436]">
            {stateAreas.map((area) => (
              <li key={area.slug}>
                <Link href={`/service-areas/${area.slug}`} className="hover:text-[#6ec94f]">
                  {area.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-[#1d3228]">Contact</h3>
          <ul className="mt-3 space-y-2 text-sm text-[#294436]">
            <li>
              <a href={`tel:${siteConfig.phoneHref}`} className="hover:text-[#6ec94f]">
                {siteConfig.phoneDisplay}
              </a>
            </li>
            <li>
              <a href={`mailto:${siteConfig.email}`} className="hover:text-[#6ec94f]">
                {siteConfig.email}
              </a>
            </li>
            <li>{siteConfig.address}</li>
            <li>Hours: Mon-Sat 8:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-[#d8e6dd] px-4 py-4 text-center text-xs text-[#496457]">
        © {new Date().getFullYear()} {siteConfig.companyName}. All rights reserved.
      </div>
    </footer>
  );
}
