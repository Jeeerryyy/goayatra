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
      className="py-16 md:py-28 mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 sm:gap-8 mb-8 sm:mb-12">
        <div>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#493129] tracking-tight">
            What Travelers Say <span className="text-[#8B597B]">About Goa Yatra</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-[#6D4F47] font-body max-w-md">
            Real experiences from travelers exploring Goa with us.
          </p>
        </div>

        {/* Stats summary badge */}
        <div className="flex items-center gap-4 sm:gap-6 bg-white rounded-badge px-5 sm:px-6 py-3.5 sm:py-4 border border-[#F0DED2] shadow-soft">
          <div>
            <div className="flex items-center gap-2">
              <span className="font-heading text-2xl sm:text-3xl font-bold text-[#493129]">{reviewsMeta.avg}</span>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} size={16} className="text-[#8B597B] fill-[#8B597B]" />
                ))}
              </div>
            </div>
            <p className="text-xs text-[#856A63] mt-1 font-semibold font-body">{reviewsMeta.count} Verified Google Reviews</p>
          </div>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative bg-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 md:p-14 border border-[#F0DED2] shadow-large">
        <Quote size={40} className="text-[#8B597B]/15 absolute top-6 right-6 sm:top-8 sm:right-8" />

        <AnimatePresence mode="wait">
          <motion.div
            key={currentReview.id}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="flex flex-col justify-between min-h-[200px] sm:min-h-[220px]"
            data-testid={`review-${currentReview.id}`}
          >
            {/* Stars & Quote */}
            <div>
              <div className="flex items-center gap-1.5 mb-3 sm:mb-4">
                {Array.from({ length: currentReview.rating }).map((_, k) => (
                  <Star key={k} size={18} className="text-[#8B597B] fill-[#8B597B]" />
                ))}
              </div>
              <p className="font-display font-medium text-lg sm:text-2xl md:text-3xl text-[#493129] leading-relaxed max-w-4xl">
                &ldquo;{currentReview.text}&rdquo;
              </p>
            </div>

            {/* Author details */}
            <div className="mt-8 pt-6 border-t border-[#F0DED2] flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-full flex items-center justify-center bg-[#493129] text-white font-heading text-xl font-bold shadow-soft">
                  {currentReview.initials}
                </div>
                <div>
                  <h4 className="text-base font-bold text-[#493129] font-body">{currentReview.name}</h4>
                  <p className="text-xs text-[#856A63] font-body">
                    {currentReview.date} · <span className="text-[#8B597B] font-semibold">{currentReview.vehicle}</span>
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2 text-xs font-semibold text-[#493129] bg-[#FFF3EB] px-3.5 py-1.5 rounded-badge border border-[#F0DED2]">
                <GoogleGlyph size={16} />
                <span>Verified {currentReview.source} Review</span>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Controls */}
        <div className="mt-8 flex items-center justify-between border-t border-[#F0DED2] pt-6">
          {/* Pagination Indicators */}
          <div className="flex items-center gap-2">
            {reviews.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? "w-8 bg-[#8B597B]" : "w-2.5 bg-[#493129]/20 hover:bg-[#493129]/40"
                }`}
              />
            ))}
          </div>

          {/* Prev/Next Buttons */}
          <div className="flex items-center gap-3">
            <button
              onClick={prevSlide}
              aria-label="Previous review"
              className="inline-flex h-11 w-11 items-center justify-center rounded-btn border border-[#F0DED2] bg-[#FFF8F2] hover:bg-[#8B597B] hover:text-white transition-colors text-[#493129] shadow-soft"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              aria-label="Next review"
              className="inline-flex h-11 w-11 items-center justify-center rounded-btn border border-[#F0DED2] bg-[#FFF8F2] hover:bg-[#8B597B] hover:text-white transition-colors text-[#493129] shadow-soft"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

