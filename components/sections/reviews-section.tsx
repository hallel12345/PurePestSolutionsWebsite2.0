import Link from "next/link";
import { siteConfig } from "@/data/site-content";
import { getGoogleReviewsWithFallback } from "@/lib/google-reviews";
import { ReviewsCarousel } from "@/components/reviews/reviews-carousel";

export async function ReviewsSection() {
  const reviewsData = await getGoogleReviewsWithFallback();

  return (
    <section className="rounded-3xl bg-[#0f1714] px-6 py-10 sm:px-10">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[#8cd879]">Customer Trust</p>
          <h2 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
            Real reviews from local customers
          </h2>
          <p className="mt-2 text-sm text-[#b7cbc0]">
            {reviewsData.source === "google"
              ? `Live Google reviews for ${reviewsData.placeName}.`
              : "Showing featured testimonials while live Google data is unavailable."}
          </p>
        </div>
        <Link
          href={reviewsData.googleMapsUri ?? siteConfig.socialLinks.googleBusiness}
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-[#2f473b] px-4 py-2 text-sm font-semibold text-[#a8ddb4] transition hover:border-[#79d15f] hover:text-[#c2f1cc]"
        >
          See More Reviews on Google
        </Link>
      </div>

      <div className="mt-6">
        <ReviewsCarousel reviews={reviewsData.reviews} />
      </div>

      <p className="mt-4 text-xs text-[#799486]">Google reviews data and attribution provided by Google Places API.</p>
    </section>
  );
}
