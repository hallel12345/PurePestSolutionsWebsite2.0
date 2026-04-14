import { QuoteForm } from "@/components/quote/quote-form";
import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site-content";

export const metadata = buildMetadata({
  title: "Contact and Free Quote",
  description:
    "Contact Pure Pest Solutions for a free quote. Call, text, or submit the online form for fast response.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <div className="section-shell pt-12">
      <h1 className="text-4xl font-semibold text-[#13241d]">Get a Free Quote</h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-[#4b6558]">
        Tell us what you are seeing and where the issue is happening. Our team will follow up quickly with next steps.
      </p>

      <div className="mt-8 grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
        <aside className="rounded-2xl border border-[#dae8df] bg-white p-6">
          <h2 className="text-xl font-semibold text-[#172b22]">Contact options</h2>
          <ul className="mt-4 space-y-3 text-sm text-[#3e594c]">
            <li>
              Call: <a href={`tel:${siteConfig.phoneHref}`} className="font-semibold text-[#37723b]">{siteConfig.phoneDisplay}</a>
            </li>
            <li>
              Text: <a href={`sms:${siteConfig.phoneHref}`} className="font-semibold text-[#37723b]">{siteConfig.smsDisplay}</a>
            </li>
            <li>
              Email: <a href={`mailto:${siteConfig.email}`} className="font-semibold text-[#37723b]">{siteConfig.email}</a>
            </li>
            <li>Address: {siteConfig.address}</li>
          </ul>

          <h3 className="mt-6 text-sm font-semibold uppercase tracking-[0.18em] text-[#58814f]">Hours</h3>
          <ul className="mt-2 space-y-1 text-sm text-[#3e594c]">
            {siteConfig.hours.map((hour) => (
              <li key={hour}>{hour}</li>
            ))}
          </ul>
        </aside>

        <QuoteForm />
      </div>
    </div>
  );
}
