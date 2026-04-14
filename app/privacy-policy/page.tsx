import { buildMetadata } from "@/lib/seo";
import { siteConfig } from "@/data/site-content";

export const metadata = buildMetadata({
  title: "Privacy Policy",
  description: "Privacy policy for Pure Pest Solutions website and service communications.",
  path: "/privacy-policy",
});

export default function PrivacyPolicyPage() {
  return (
    <div className="section-shell pt-12">
      <h1 className="text-4xl font-semibold text-[#14251e]">Privacy Policy</h1>
      <p className="mt-3 text-sm text-[#4a6558]">Effective Date: April 14, 2026</p>

      <article className="mt-8 space-y-6 rounded-2xl border border-[#d9e7de] bg-white p-6 text-sm leading-7 text-[#365043]">
        <section>
          <h2 className="text-xl font-semibold text-[#183025]">1. Information We Collect</h2>
          <p>
            We collect information you submit through quote forms, phone calls, texts, and email inquiries. This may include name, phone, email, service address, city, and service details.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#183025]">2. How We Use Information</h2>
          <p>
            We use submitted information to respond to service requests, schedule appointments, provide updates, and improve service quality.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#183025]">3. Mobile and SMS Communications</h2>
          <p>
            If you provide a mobile number, we may send service-related text messages. You may opt out at any time by replying STOP.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#183025]">4. Data Sharing</h2>
          <p>
            We do not sell personal information. We may share data with trusted service providers necessary to operate scheduling, billing, or communication systems.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-[#183025]">5. Contact</h2>
          <p>
            For privacy requests, contact {siteConfig.companyName} at <a href={`mailto:${siteConfig.email}`} className="text-[#3b7a3b]">{siteConfig.email}</a> or {siteConfig.phoneDisplay}.
          </p>
        </section>
      </article>
    </div>
  );
}
