import Link from "next/link";
import { notFound } from "next/navigation";
import { services, siteConfig } from "@/data/site-content";
import { buildMetadata } from "@/lib/seo";

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    return buildMetadata({
      title: "Service Not Found",
      description: "The requested service page could not be found.",
      path: `/services/${params.slug}`,
    });
  }

  return buildMetadata({
    title: `${service.name} Services`,
    description: service.shortDescription,
    path: `/services/${service.slug}`,
  });
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const service = services.find((item) => item.slug === params.slug);

  if (!service) {
    notFound();
  }

  return (
    <div className="section-shell pt-12">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#5ea146]">Service Detail</p>
      <h1 className="mt-2 text-4xl font-semibold text-[#13241d]">{service.name}</h1>
      <p className="mt-4 max-w-3xl text-base leading-7 text-[#4a6458]">{service.intro}</p>

      <section className="mt-8 grid gap-6 lg:grid-cols-3">
        <article className="rounded-2xl border border-[#d8e6dd] bg-white p-5">
          <h2 className="text-lg font-semibold text-[#1a2f25]">What we handle</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#476257]">
            {service.whatWeHandle.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-[#d8e6dd] bg-white p-5">
          <h2 className="text-lg font-semibold text-[#1a2f25]">What to expect</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#476257]">
            {service.whatToExpect.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-2xl border border-[#d8e6dd] bg-white p-5">
          <h2 className="text-lg font-semibold text-[#1a2f25]">Safe and effective approach</h2>
          <ul className="mt-3 space-y-2 text-sm text-[#476257]">
            {service.safetyNotes.map((item) => (
              <li key={item}>• {item}</li>
            ))}
          </ul>
        </article>
      </section>

      <section className="mt-8 rounded-2xl bg-[#edf8ee] p-6">
        <h2 className="text-2xl font-semibold text-[#15261f]">{service.cta}</h2>
        <p className="mt-2 text-sm text-[#476257]">Need immediate support? Call now for a fast response.</p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`tel:${siteConfig.phoneHref}`}
            className="rounded-full bg-[#63c543] px-5 py-2.5 text-sm font-semibold text-[#0f1f14]"
          >
            Call {siteConfig.phoneDisplay}
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-[#63c543] px-5 py-2.5 text-sm font-semibold text-[#2e5f36]"
          >
            Get a Free Quote
          </Link>
        </div>
      </section>
    </div>
  );
}
