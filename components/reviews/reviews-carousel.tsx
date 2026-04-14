"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import type { NormalizedReview } from "@/lib/google-reviews";

type ReviewsCarouselProps = {
  reviews: NormalizedReview[];
};

function Stars({ rating }: { rating: number }) {
  const stars = Math.max(0, Math.min(5, Math.round(rating)));
  return (
    <div aria-label={`${stars} out of 5 stars`} className="text-[#6ec94f]">
      {"★".repeat(stars)}
      <span className="text-[#d2dfd7]">{"★".repeat(5 - stars)}</span>
    </div>
  );
}

export function ReviewsCarousel({ reviews }: ReviewsCarouselProps) {
  const safeReviews = useMemo(() => (reviews.length ? reviews : []), [reviews]);
  const [index, setIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartRef = useRef<number | null>(null);

  useEffect(() => {
    if (!safeReviews.length || isPaused) {
      return;
    }

    const id = setInterval(() => {
      setIndex((prev) => (prev + 1) % safeReviews.length);
    }, 5000);

    return () => clearInterval(id);
  }, [safeReviews.length, isPaused]);

  if (!safeReviews.length) {
    return null;
  }

  return (
    <div
      className="relative"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={(event) => {
        touchStartRef.current = event.changedTouches[0]?.clientX ?? null;
      }}
      onTouchEnd={(event) => {
        const start = touchStartRef.current;
        const end = event.changedTouches[0]?.clientX ?? null;
        if (start === null || end === null) return;

        const delta = end - start;
        if (Math.abs(delta) < 40) return;
        if (delta < 0) {
          setIndex((prev) => (prev + 1) % safeReviews.length);
        } else {
          setIndex((prev) => (prev - 1 + safeReviews.length) % safeReviews.length);
        }
      }}
    >
      <div className="overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {safeReviews.map((review, reviewIndex) => (
            <article key={`${review.author}-${reviewIndex}`} className="w-full shrink-0 px-1">
              <div className="rounded-2xl border border-[#2b4036] bg-[#13221b] p-6 shadow-[0_15px_40px_-20px_rgba(0,0,0,0.7)]">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-semibold text-white">{review.author}</p>
                  <Stars rating={review.rating} />
                </div>
                <p className="mt-4 text-sm leading-7 text-[#d4e2db]">“{review.text}”</p>
                {review.relativeDate ? (
                  <p className="mt-3 text-xs uppercase tracking-wide text-[#8fa99d]">{review.relativeDate}</p>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </div>

      <button
        type="button"
        onClick={() => setIndex((prev) => (prev - 1 + safeReviews.length) % safeReviews.length)}
        className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/35 px-2 py-1 text-white"
        aria-label="Previous review"
      >
        ←
      </button>
      <button
        type="button"
        onClick={() => setIndex((prev) => (prev + 1) % safeReviews.length)}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full border border-white/20 bg-black/35 px-2 py-1 text-white"
        aria-label="Next review"
      >
        →
      </button>

      <div className="mt-4 flex justify-center gap-2">
        {safeReviews.map((_, dotIndex) => (
          <button
            key={dotIndex}
            type="button"
            aria-label={`Go to review ${dotIndex + 1}`}
            className={`h-2 w-2 rounded-full transition ${dotIndex === index ? "bg-[#6ec94f]" : "bg-[#2e463a]"}`}
            onClick={() => setIndex(dotIndex)}
          />
        ))}
      </div>
    </div>
  );
}
