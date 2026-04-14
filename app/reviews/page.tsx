import { ReviewsSection } from "@/components/sections/reviews-section";
import { buildMetadata } from "@/lib/seo";

export const metadata = buildMetadata({
  title: "Customer Reviews",
  description:
    "Read trusted feedback from homeowners and businesses who use Pure Pest Solutions across Utah and Idaho.",
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <div className="section-shell pt-12">
      <h1 className="text-4xl font-semibold text-[#15261f]">Customer Reviews</h1>
      <p className="mt-3 max-w-3xl text-base leading-7 text-[#4a6458]">
        We are proud of the trust our customers place in our team. Here is what people are saying about their experience with Pure Pest Solutions.
      </p>
      <div className="mt-8">
        <ReviewsSection />
      </div>
    </div>
  );
}
