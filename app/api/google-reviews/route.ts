import { NextResponse } from "next/server";
import { getGoogleReviewsWithFallback } from "@/lib/google-reviews";

export async function GET() {
  const payload = await getGoogleReviewsWithFallback();

  return NextResponse.json(payload, {
    headers: {
      "Cache-Control": "public, s-maxage=28800, stale-while-revalidate=86400",
    },
  });
}
