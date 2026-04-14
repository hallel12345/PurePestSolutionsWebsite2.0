import Link from "next/link";
import { notFound } from "next/navigation";
import { cities, stateAreas } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return stateAreas.map((state) => ({ state: state.slug }));
}

export function generateMetadata({ params }: { params: { state: string } }) {
  const state = stateAreas.find((item) => item.slug === params.state);
  if (!state) {
    return buildMetadata({
      title: "Service Area Not Found",
      description: "The requested service area page could not be found.",
      path: `/service-areas/${params.state}`,
    });
  }

  return buildMetadata({
    title: `${state.name} Pest Control Service Area`,
    description: state.summary,
    path: `/service-areas/${state.slug}`,
  });
}

export default function StateAreaPage({ params }: { params: { state: string } }) {
  const state = stateAreas.find((item) => item.slug === params.state);
  if (!state) {
    notFound();
  }

  const stateCities = cities.filter((city) => city.stateSlug === state.slug);

  return (
    <div className="section-shell pt-12">
      <h1 className="text-4xl font-semibold text-[#14261f]">Pest Control in {state.name}</h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-[#4a6659]">{state.summary}</p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        {stateCities.map((city) => (
          <article key={city.slug} className="rounded-2xl border border-[#dae8df] bg-white p-5">
            <h2 className="text-xl font-semibold text-[#183026]">{city.name}</h2>
            <p className="mt-2 text-sm text-[#4c6659]">{city.description}</p>
            <Link
              href={`/service-areas/${state.slug}/${city.slug}`}
              className="mt-4 inline-flex text-sm font-semibold text-[#4d9648] hover:text-[#3f7d3b]"
            >
              Explore {city.name} page →
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
