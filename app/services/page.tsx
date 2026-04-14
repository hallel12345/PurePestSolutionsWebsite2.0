import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { services } from "@/data/site-content";

export const metadata = buildMetadata({
  title: "Pest Control Services",
  description:
    "Explore residential and commercial pest control services including ants, spiders, wasps, rodents, termites, and more.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <div className="section-shell pt-12">
      <h1 className="text-4xl font-semibold text-[#14251e]">Pest Control Services</h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-[#4a6458]">
        Choose the service that matches your pest pressure. Every treatment plan is customized to your property and backed by clear communication from start to finish.
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {services.map((service) => (
          <article key={service.slug} className="rounded-2xl border border-[#d8e6dd] bg-white p-5">
            <h2 className="text-2xl font-semibold text-[#16271f]">{service.name}</h2>
            <p className="mt-2 text-sm leading-6 text-[#4c6659]">{service.shortDescription}</p>
            <Link
              href={`/services/${service.slug}`}
              className="mt-4 inline-flex text-sm font-semibold text-[#4e984a] hover:text-[#3b7a3a]"
            >
              View service details →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
