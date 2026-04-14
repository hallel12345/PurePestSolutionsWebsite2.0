import Image from "next/image";
import Link from "next/link";
import { QuoteForm } from "@/components/quote/quote-form";
import { ReviewsSection } from "@/components/sections/reviews-section";
import {
  pestsWeHandle,
  services,
  siteConfig,
  stateAreas,
  whyChooseUs,
} from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Pest Control in Utah & Idaho",
  description:
    "Professional pest control for homes and businesses in Utah and Idaho. Call now for fast service or request a free quote online.",
  path: "/",
});

export default async function HomePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#0f1714] pb-16 pt-12 text-white lg:pb-24 lg:pt-18">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(138,209,109,0.22),transparent_40%),radial-gradient(circle_at_80%_10%,rgba(56,110,74,0.36),transparent_35%)]" />
        <div className="section-shell relative grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[#9be384]">Trusted Local Protection</p>
            <h1 className="mt-4 text-4xl font-semibold leading-tight sm:text-5xl">
              Faster, safer pest control for Utah and Idaho properties
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-[#c7d8d0]">
              We help homeowners and businesses eliminate active pest issues and prevent them from returning.
              Expect clear communication, responsive scheduling, and dependable results.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="rounded-full bg-[#6ec94f] px-6 py-3 text-sm font-semibold text-[#0e1c14] transition hover:bg-[#8adf6f]"
              >
                {siteConfig.ctaPrimary}
              </a>
              <Link
                href="/contact"
                className="rounded-full border border-white/25 px-6 py-3 text-sm font-semibold text-white transition hover:border-[#9be384] hover:text-[#9be384]"
              >
                {siteConfig.ctaSecondary}
              </Link>
            </div>
            <div className="mt-7 grid max-w-xl gap-2 text-sm text-[#d5e2dc] sm:grid-cols-2">
              <p>Licensed & insured technicians</p>
              <p>Residential and commercial service</p>
              <p>Serving Utah and Idaho</p>
              <p>Fast response and clear scheduling</p>
            </div>
          </div>

          <div className="rounded-3xl bg-white/8 p-2 backdrop-blur">
            <QuoteForm compact />
          </div>
        </div>
      </section>

      <section className="section-shell mt-14">
        <div className="grid gap-6 rounded-3xl bg-white p-6 shadow-[0_18px_50px_-35px_rgba(20,38,30,0.6)] lg:grid-cols-3 lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5ea146]">Service Focus</p>
            <h2 className="mt-2 text-2xl font-semibold text-[#13231c]">What pests we handle</h2>
            <p className="mt-2 text-sm text-[#4b6558]">
              We build treatment plans around your specific property pressure, season, and risk profile.
            </p>
          </div>
          <ul className="grid gap-2 text-sm text-[#21372c] sm:grid-cols-2 lg:col-span-2">
            {pestsWeHandle.map((pest) => (
              <li key={pest} className="rounded-xl border border-[#d9e7de] bg-[#f7fbf8] px-3 py-2">
                {pest}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell mt-14">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5ea146]">Our Services</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#13231c]">Built for local homes and businesses</h2>
          </div>
          <Link href="/services" className="text-sm font-semibold text-[#3f744f] hover:text-[#61b349]">
            View all services
          </Link>
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.slice(0, 6).map((service) => (
            <article key={service.slug} className="rounded-2xl border border-[#dbe8df] bg-white p-5">
              <h3 className="text-xl font-semibold text-[#14251e]">{service.name}</h3>
              <p className="mt-2 text-sm leading-6 text-[#496357]">{service.shortDescription}</p>
              <Link
                href={`/services/${service.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-[#4f964f] hover:text-[#3f7f3e]"
              >
                Learn more →
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell mt-14 grid gap-8 lg:grid-cols-[1fr_1fr] lg:items-center">
        <div className="relative overflow-hidden rounded-3xl">
          <Image
            src="/images/truck-side.jpeg"
            alt="Pure Pest Solutions service truck"
            width={1400}
            height={760}
            className="h-full w-full object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5ea146]">Why Customers Choose Us</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#15261f]">Professional service without the runaround</h2>
          <ul className="mt-5 space-y-3 text-sm text-[#314a3d]">
            {whyChooseUs.map((item) => (
              <li key={item} className="flex gap-2">
                <span className="mt-2 h-2 w-2 rounded-full bg-[#6ec94f]" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell mt-14">
        <div className="grid gap-8 rounded-3xl border border-[#d9e6de] bg-white p-6 lg:grid-cols-2 lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5ea146]">Residential + Commercial</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#13231c]">Treatment plans built around your property</h2>
            <p className="mt-3 text-sm leading-7 text-[#496357]">
              Whether you need home protection or commercial pest management, we tailor service frequency and treatment strategy to your goals and risk level.
            </p>
            <div className="mt-5 grid gap-3 text-sm text-[#294436] sm:grid-cols-2">
              <p className="rounded-xl bg-[#f3faf5] px-3 py-2">Clear inspections and treatment steps</p>
              <p className="rounded-xl bg-[#f3faf5] px-3 py-2">Safe and effective product use</p>
              <p className="rounded-xl bg-[#f3faf5] px-3 py-2">Convenient scheduling options</p>
              <p className="rounded-xl bg-[#f3faf5] px-3 py-2">Ongoing preventative maintenance</p>
            </div>
          </div>
          <div className="relative overflow-hidden rounded-2xl">
            <Image
              src="/images/team-shirt.jpeg"
              alt="Pure Pest Solutions technicians"
              width={1200}
              height={800}
              className="h-full w-full object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      <section className="section-shell mt-14">
        <div className="rounded-3xl border border-[#d6e4db] bg-[#f6faf7] p-6 lg:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5ea146]">Service Areas</p>
          <h2 className="mt-2 text-3xl font-semibold text-[#15261f]">Serving Utah and Idaho</h2>
          <div className="mt-5 grid gap-4 sm:grid-cols-2">
            {stateAreas.map((area) => (
              <Link
                key={area.slug}
                href={`/service-areas/${area.slug}`}
                className="rounded-2xl border border-[#d4e2d8] bg-white p-5 transition hover:border-[#81cf65]"
              >
                <h3 className="text-xl font-semibold text-[#1a2f25]">{area.name}</h3>
                <p className="mt-2 text-sm text-[#4d675b]">{area.summary}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell mt-14">
        <ReviewsSection />
      </section>

      <section className="section-shell mt-14">
        <div className="grid gap-8 rounded-3xl bg-[#edf8ee] p-6 lg:grid-cols-2 lg:p-8">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#4f9a3b]">Easy Quote Process</p>
            <h2 className="mt-2 text-3xl font-semibold text-[#15261f]">Tell us what you need. We handle the rest.</h2>
            <p className="mt-3 text-sm leading-7 text-[#476156]">
              Submit a quote request and our team will follow up quickly with next steps. If your issue is urgent,
              call now for faster assistance.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href={`tel:${siteConfig.phoneHref}`}
                className="rounded-full bg-[#63c543] px-5 py-2.5 text-sm font-semibold text-[#102116]"
              >
                Call {siteConfig.phoneDisplay}
              </a>
              <a
                href={`sms:${siteConfig.phoneHref}`}
                className="rounded-full border border-[#63c543] px-5 py-2.5 text-sm font-semibold text-[#2f5e37]"
              >
                Text Us
              </a>
            </div>
          </div>
          <QuoteForm />
        </div>
      </section>
    </>
  );
}
