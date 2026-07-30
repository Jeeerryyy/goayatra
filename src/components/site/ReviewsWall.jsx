import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Reveal from "./Reveal";
import { reviews, reviewsMeta } from "@/data/reviews";

function GoogleGlyph({ size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 48 48"
      aria-hidden="true"
    >
      <path fill="#EA4335" d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z" />
      <path fill="#4285F4" d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z" />
      <path fill="#FBBC05" d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z" />
      <path fill="#34A853" d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z" />
    </svg>
  );
}

export default function ReviewsWall() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(timer);
  }, [currentIndex]);

  const currentReview = reviews[currentIndex];

  return (
    <section
      data-testid="reviews-wall"
      className="py-20 md:py-28 mx-auto max-w-[1440px] px-6 md:px-10 border-t border-hairline/60"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
        <div>
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight">
            What travelers say <em className="italic text-maroon font-normal">about Goa Yatra.</em>
          </h2>
          <p className="mt-2 text-base text-ink-muted max-w-md">
            Real experiences from travelers across India & abroad.
          </p>
        </div>

        {/* Stats summary badge */}
        <div className="flex items-center gap-6 bg-bg-alt/80 rounded-2xl px-6 py-4 border border-hairline/80 shadow-sm">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display text-3xl font-bold text-maroon">{reviewsMeta.avg}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={14} className="text-gold fill-gold" />
                ))}
              </div>
            </div>
            <p className="text-xs text-ink-muted mt-1 font-medium">{reviewsMeta.count} Verified Reviews</p>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative bg-bg-alt/90 rounded-3xl p-8 md:p-14 border border-hairline/80 shadow-md">
        <Quote size={44} className="text-maroon/15 absolute top-8 right-8" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col justify-between min-h-[220px]"
            data-testid={`review-${currentReview.id}`}
          >
            {/* Stars & Quote */}
            <div>
              <div className="flex items-center gap-1.5 mb-4">
                {Array.from({ length: currentReview.rating }).map((_, k) => (
                  <Star key={k} size={18} className="text-gold fill-gold" />
                ))}
              </div>
              <p className="font-display text-2xl md:text-3xl text-ink leading-relaxed max-w-4xl">
                &ldquo;{currentReview.text}&rdquo;
              </p>
            </div>

            {/* Author details */}
            <div className="mt-8 pt-6 border-t border-hairline/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-maroon text-white font-display text-lg font-bold">
                  {currentReview.initials}
                </div>
                <div>
                  <h4 className="text-base font-semibold text-ink">{currentReview.name}</h4>
                  <p className="text-xs text-ink-muted">
                    {currentReview.date} · <span className="text-maroon font-medium">{currentReview.vehicle}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs tracking-wider text-ink-muted uppercase bg-bg px-3 py-1.5 rounded-full border border-hairline/60">
                <GoogleGlyph size={14} />
                <span>Verified {currentReview.source} Review</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center justify-between border-t border-hairline/40 pt-6">
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-maroon" : "w-2.5 bg-maroon/20 hover:bg-maroon/40"
                }`}
              />
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous review"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-bg hover:bg-maroon hover:text-white transition-colors text-ink shadow-sm"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next review"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-hairline bg-bg hover:bg-maroon hover:text-white transition-colors text-ink shadow-sm"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
