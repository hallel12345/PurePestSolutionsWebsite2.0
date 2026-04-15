import Image from "next/image";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { siteConfig, whyChooseUs } from "@/data/site-content";

export const metadata = buildMetadata({
  title: "About Our Company",
  description:
    "Learn about Pure Pest Solutions, our local service approach, and why families and businesses across Utah and Idaho trust our team.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="section-shell pt-12">
      <section className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5ea146]">About Pure Pest Solutions</p>
          <h1 className="mt-3 text-4xl font-semibold text-[#14251e]">A local team focused on reliable results</h1>
          <p className="mt-4 text-base leading-7 text-[#486257]">
            Pure Pest Solutions was built around one simple promise: provide professional pest control with honest communication and dependable follow-through. We serve Utah and Idaho with practical solutions that protect people, properties, and peace of mind.
          </p>
          <p className="mt-4 text-base leading-7 text-[#486257]">
            We are not interested in one-time transactions. Our goal is long-term protection and trust, backed by clear recommendations, respectful service, and responsive support.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={`tel:${siteConfig.phoneHref}`}
              className="rounded-full bg-[#63c543] px-5 py-2.5 text-sm font-semibold text-[#0f1d14]"
            >
              {siteConfig.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="rounded-full border border-[#6ec94f] px-5 py-2.5 text-sm font-semibold text-[#2f5f35]"
            >
              Request a Quote
            </Link>
          </div>
        </div>
        <div className="overflow-hidden rounded-3xl">
          <Image
            src="/images/team-shirt.jpeg"
            alt="Pure Pest Solutions team member"
            width={1200}
            height={800}
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mt-12 rounded-3xl border border-[#dae8df] bg-white p-6 lg:p-8">
        <h2 className="text-3xl font-semibold text-[#14251e]">Why customers keep choosing us</h2>
        <ul className="mt-5 grid gap-3 text-sm text-[#324b3e] md:grid-cols-2">
          {whyChooseUs.map((item) => (
            <li key={item} className="rounded-xl bg-[#f3faf5] px-4 py-3">
              {item}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
