import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { cities, stateAreas } from "@/data/site-content";

export const metadata = buildMetadata({
  title: "Service Areas",
  description: "See where Pure Pest Solutions provides pest control services across Utah and Idaho.",
  path: "/service-areas",
});

export default function ServiceAreasPage() {
  return (
    <div className="section-shell pt-12">
      <h1 className="text-4xl font-semibold text-[#13231c]">Service Areas</h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-[#4b6659]">
        We serve communities across Utah and Idaho with responsive, local pest control support for residential and commercial properties.
      </p>

      <div className="mt-8 grid gap-5 md:grid-cols-2">
        {stateAreas.map((area) => {
          const stateCities = cities.filter((city) => city.stateSlug === area.slug);
          return (
            <article key={area.slug} className="rounded-2xl border border-[#d8e7de] bg-white p-6">
              <h2 className="text-2xl font-semibold text-[#182e24]">{area.name}</h2>
              <p className="mt-2 text-sm text-[#4c6659]">{area.summary}</p>
              <ul className="mt-4 grid gap-2 text-sm text-[#365144] sm:grid-cols-2">
                {stateCities.map((city) => (
                  <li key={city.slug}>
                    <Link href={`/service-areas/${area.slug}/${city.slug}`} className="hover:text-[#5da844]">
                      {city.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <Link
                href={`/service-areas/${area.slug}`}
                className="mt-4 inline-flex text-sm font-semibold text-[#4d9349] hover:text-[#3f7c3b]"
              >
                View {area.name} coverage →
              </Link>
            </article>
          );
        })}
      </div>
    </div>
  );
}
