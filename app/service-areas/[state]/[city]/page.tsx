import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, services, siteConfig, stateAreas } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return cities.map((city) => ({
    state: city.stateSlug,
    city: city.slug,
  }));
}

export function generateMetadata({ params }: { params: { state: string; city: string } }) {
  const city = cities.find((entry) => entry.stateSlug === params.state && entry.slug === params.city);

  if (!city) {
    return buildMetadata({
      title: "City Page Not Found",
      description: "The requested city service page could not be found.",
      path: `/service-areas/${params.state}/${params.city}`,
    });
  }

  return buildMetadata({
    title: city.title,
    description: city.description,
    path: `/service-areas/${city.stateSlug}/${city.slug}`,
  });
}

export default function CityPage({ params }: { params: { state: string; city: string } }) {
  const city = cities.find((entry) => entry.stateSlug === params.state && entry.slug === params.city);
  if (!city) {
    notFound();
  }

  const state = stateAreas.find((entry) => entry.slug === city.stateSlug);

  return (
    <div className="section-shell pt-12">
      <h1 className="text-4xl font-semibold text-[#14251e]">{city.title}</h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-[#4a6458]">{city.description}</p>

      <section className="mt-8 rounded-2xl border border-[#d9e7de] bg-white p-6">
        <h2 className="text-2xl font-semibold text-[#173026]">Neighborhoods and nearby coverage</h2>
        <ul className="mt-4 grid gap-2 text-sm text-[#3c574a] sm:grid-cols-2">
          {city.neighborhoods.map((neighborhood) => (
            <li key={neighborhood} className="rounded-xl bg-[#f3faf5] px-3 py-2">
              {neighborhood}
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-8 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {services.slice(0, 6).map((service) => (
          <article key={service.slug} className="rounded-2xl border border-[#d9e6de] bg-white p-5">
            <h3 className="text-lg font-semibold text-[#172d24]">{service.name}</h3>
            <p className="mt-2 text-sm text-[#496458]">{service.shortDescription}</p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-3 inline-flex text-sm font-semibold text-[#4e9649] hover:text-[#3f7a3a]"
            >
              Learn more →
            </Link>
          </article>
        ))}
      </section>

      <section className="mt-8 rounded-2xl bg-[#edf8ee] p-6">
        <h2 className="text-2xl font-semibold text-[#15261f]">Need service in {city.name}?</h2>
        <p className="mt-2 text-sm text-[#496357]">
          Our team serves properties throughout {city.name}, {state?.name}. Call now or request a free quote and we will follow up quickly.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="rounded-full bg-[#63c543] px-5 py-2.5 text-sm font-semibold text-[#122216]"
          >
            Call {siteConfig.phoneDisplay}
          </a>
          <Link href="/contact" className="rounded-full border border-[#63c543] px-5 py-2.5 text-sm font-semibold text-[#2f6036]">
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
