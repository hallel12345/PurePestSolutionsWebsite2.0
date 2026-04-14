import Link from "next/link";
import { buildMetadata } from "@/lib/seo";
import { careers, siteConfig } from "@/data/site-content";

export const metadata = buildMetadata({
  title: "Careers",
  description:
    "Explore career opportunities with Pure Pest Solutions in Utah and Idaho.",
  path: "/careers",
});

export default function CareersPage() {
  return (
    <div className="section-shell pt-12">
      <h1 className="text-4xl font-semibold text-[#15261f]">{careers.headline}</h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-[#486257]">{careers.intro}</p>

      <div className="mt-8 grid gap-4">
        {careers.roles.map((role) => (
          <article key={role.title} className="rounded-2xl border border-[#d9e7de] bg-white p-5">
            <h2 className="text-2xl font-semibold text-[#162b22]">{role.title}</h2>
            <p className="mt-1 text-sm font-semibold text-[#5e8b54]">{role.type} · {role.location}</p>
            <p className="mt-2 text-sm leading-6 text-[#486257]">{role.summary}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 rounded-2xl bg-[#edf8ee] p-6">
        <h2 className="text-2xl font-semibold text-[#15261f]">Ready to apply?</h2>
        <p className="mt-2 text-sm text-[#486257]">
          Email your resume and a short introduction. We are always looking for dependable people who care about doing the job right.
        </p>
        <div className="mt-4 flex flex-wrap gap-3">
          <a
            href={`mailto:${siteConfig.email}?subject=Career%20Application`}
            className="rounded-full bg-[#63c543] px-5 py-2.5 text-sm font-semibold text-[#102116]"
          >
            Email Application
          </a>
          <Link
            href="/contact"
            className="rounded-full border border-[#63c543] px-5 py-2.5 text-sm font-semibold text-[#2f6036]"
          >
            Contact Our Team
          </Link>
        </div>
      </div>
    </div>
  );
}
