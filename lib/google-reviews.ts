import { testimonials } from "@/data/site-content";

export type NormalizedReview = {
  author: string;
  rating: number;
  text: string;
  relativeDate?: string;
};

export type ReviewsPayload = {
  placeName: string;
  rating: number;
  reviews: NormalizedReview[];
  source: "google" | "fallback";
  googleMapsUri?: string;
};

type PlacesApiReview = {
  relativePublishTimeDescription?: string;
  rating?: number;
  text?: {
    text?: string;
  };
  authorAttribution?: {
    displayName?: string;
  };
};

type PlacesApiResponse = {
  displayName?: {
    text?: string;
  };
  rating?: number;
  reviews?: PlacesApiReview[];
  googleMapsUri?: string;
};

const fallbackPayload: ReviewsPayload = {
  placeName: "Pure Pest Solutions",
  rating: 5,
  source: "fallback",
  reviews: testimonials.map((testimonial) => ({
    author: testimonial.author,
    rating: testimonial.rating,
    text: testimonial.text,
    relativeDate: testimonial.relativeDate,
  })),
};

function normalizeGoogleReviews(data: PlacesApiResponse): ReviewsPayload {
  const reviews = (data.reviews ?? [])
    .filter((review) => Boolean(review.text?.text))
    .map((review) => ({
      author: review.authorAttribution?.displayName ?? "Google Reviewer",
      rating: review.rating ?? 5,
      text: review.text?.text ?? "",
      relativeDate: review.relativePublishTimeDescription,
    }));

  if (!reviews.length) {
    return fallbackPayload;
  }

  return {
    placeName: data.displayName?.text ?? "Pure Pest Solutions",
    rating: data.rating ?? 5,
    reviews,
    source: "google",
    googleMapsUri: data.googleMapsUri,
  };
}

export async function getGoogleReviewsWithFallback(): Promise<ReviewsPayload> {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const placeId = process.env.GOOGLE_PLACE_ID;

  if (!apiKey || !placeId) {
    return fallbackPayload;
  }

  try {
    const response = await fetch(
      `https://places.googleapis.com/v1/places/${placeId}`,
      {
        headers: {
          "X-Goog-Api-Key": apiKey,
          "X-Goog-FieldMask": "displayName,rating,reviews,googleMapsUri",
        },
        next: {
          revalidate: 60 * 60 * 8,
          tags: ["google-reviews"],
        },
      },
    );

    if (!response.ok) {
      return fallbackPayload;
    }

    const data = (await response.json()) as PlacesApiResponse;
    return normalizeGoogleReviews(data);
  } catch {
    return fallbackPayload;
  }
}
