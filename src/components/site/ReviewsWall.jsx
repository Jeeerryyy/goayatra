import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote, CheckCircle2, Pause, Play } from "lucide-react";
import Reveal from "./Reveal";
import ThreeDTiltCard from "./ThreeDTiltCard";
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
  const [isPaused, setIsPaused] = useState(false);

  // Duplicate reviews array to create seamless loop
  const marqueeReviewsRow1 = [...reviews, ...reviews, ...reviews];
  const marqueeReviewsRow2 = [...reviews.slice().reverse(), ...reviews.slice().reverse(), ...reviews.slice().reverse()];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [currentIndex, isPaused]);

  return (
    <section
      data-testid="reviews-wall"
      className="py-16 md:py-24 bg-[#FFF8F2] overflow-hidden relative border-t border-[#F0DED2]"
    >
      {/* Section Header */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10 mb-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-badge bg-[#FFF3EB] text-[#8B597B] border border-[#F0DED2] text-xs font-semibold uppercase tracking-wider mb-3">
              Google Customer Reviews
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#493129] tracking-tight">
              Real Experiences From <span className="text-[#8B597B]">Goa Travelers</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6D4F47] font-body max-w-lg">
              Automatically scrolling Google reviews. Hover any card to pause and read.
            </p>
          </div>

          {/* Stats Summary Badge */}
          <div className="flex items-center gap-4 bg-white rounded-badge px-6 py-4 border border-[#F0DED2] shadow-soft">
            <div className="h-12 w-12 rounded-full bg-[#FFF3EB] flex items-center justify-center text-[#8B597B] shrink-0 border border-[#F0DED2]">
              <GoogleGlyph size={24} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-heading text-2xl font-bold text-[#493129]">{reviewsMeta.avg}</span>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, k) => (
                    <Star key={k} size={15} className="text-[#8B597B] fill-[#8B597B]" />
                  ))}
                </div>
              </div>
              <p className="text-xs text-[#856A63] mt-0.5 font-semibold font-body">
                {reviewsMeta.count} Verified Google &amp; Direct Reviews
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTINUOUS AUTOMATIC SCROLLING MARQUEE TRACK (SINGLE ROW) */}
      <div className="relative w-full overflow-hidden mb-12 py-2">
        {/* Soft edge blur gradient */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#FFF8F2] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#FFF8F2] to-transparent z-10" />

        <div className="animate-marquee-loop gap-4 sm:gap-6 flex items-center">
          {marqueeReviewsRow1.map((item, idx) => (
            <ThreeDTiltCard key={`${item.id}-${idx}`} maxTilt={6} scale={1.02} className="shrink-0 w-[290px] sm:w-[380px] rounded-[24px]">
              <div className="bg-white p-6 rounded-[24px] border border-[#F0DED2] shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between h-[230px]">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <div className="flex gap-0.5">
                      {Array.from({ length: item.rating }).map((_, k) => (
                        <Star key={k} size={14} className="text-[#8B597B] fill-[#8B597B]" />
                      ))}
                    </div>
                    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#493129] bg-[#FFF3EB] px-2.5 py-1 rounded-badge border border-[#F0DED2]">
                      <GoogleGlyph size={12} />
                      <span>{item.source}</span>
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#493129] font-body line-clamp-3 leading-relaxed font-medium">
                    &ldquo;{item.text}&rdquo;
                  </p>
                </div>

                <div className="pt-3 border-t border-[#F0DED2] flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="h-9 w-9 rounded-full bg-[#493129] text-white font-heading text-xs font-bold flex items-center justify-center">
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="text-xs font-bold text-[#493129] font-body">{item.name}</h4>
                      <p className="text-[11px] text-[#856A63] font-body">{item.vehicle}</p>
                    </div>
                  </div>
                  <span className="text-[10px] text-[#856A63] font-semibold">{item.date}</span>
                </div>
              </div>
            </ThreeDTiltCard>
          ))}
        </div>
      </div>

      {/* FEATURED REVIEW SPOTLIGHT SLIDER */}
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <div className="relative bg-white rounded-[24px] p-6 sm:p-8 md:p-12 border border-[#F0DED2] shadow-large">
          <Quote size={44} className="text-[#8B597B]/15 absolute top-6 right-6 sm:top-8 sm:right-8" />

          <AnimatePresence mode="wait">
            <motion.div
              key={reviews[currentIndex].id}
              initial={{ opacity: 0, x: 15 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -15 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col justify-between min-h-[180px]"
            >
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex gap-0.5">
                    {Array.from({ length: reviews[currentIndex].rating }).map((_, k) => (
                      <Star key={k} size={18} className="text-[#8B597B] fill-[#8B597B]" />
                    ))}
                  </div>
                  <span className="text-xs font-semibold text-[#8B597B] uppercase tracking-wider ml-2">
                    Featured Review
                  </span>
                </div>

                <p className="font-display font-medium text-lg sm:text-2xl text-[#493129] leading-relaxed max-w-4xl">
                  &ldquo;{reviews[currentIndex].text}&rdquo;
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-[#F0DED2] flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 rounded-full bg-[#493129] text-white font-heading text-lg font-bold flex items-center justify-center shadow-soft">
                    {reviews[currentIndex].initials}
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-[#493129] font-body">{reviews[currentIndex].name}</h4>
                    <p className="text-xs text-[#856A63] font-body">
                      {reviews[currentIndex].date} · <span className="text-[#8B597B] font-semibold">{reviews[currentIndex].vehicle}</span>
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 text-xs font-semibold text-[#493129] bg-[#FFF3EB] px-3.5 py-1.5 rounded-badge border border-[#F0DED2]">
                  <GoogleGlyph size={16} />
                  <span>Verified Google Review</span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Controls bar */}
          <div className="mt-6 pt-4 border-t border-[#F0DED2] flex items-center justify-between">
            <div className="flex items-center gap-2">
              {reviews.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrentIndex(idx)}
                  aria-label={`View review ${idx + 1}`}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    idx === currentIndex ? "w-8 bg-[#8B597B]" : "w-2.5 bg-[#493129]/20 hover:bg-[#493129]/40"
                  }`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsPaused(!isPaused)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-badge border border-[#F0DED2] bg-[#FFF8F2] text-xs font-semibold text-[#493129] hover:bg-[#FFF3EB] transition-colors"
              >
                {isPaused ? <Play size={13} /> : <Pause size={13} />}
                <span>{isPaused ? "Play Auto-Scroll" : "Pause Auto-Scroll"}</span>
              </button>

              <button
                onClick={prevSlide}
                aria-label="Previous review"
                className="inline-flex h-9 w-9 items-center justify-center rounded-btn border border-[#F0DED2] bg-[#FFF8F2] hover:bg-[#8B597B] hover:text-white transition-colors text-[#493129]"
              >
                <ChevronLeft size={18} />
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next review"
                className="inline-flex h-9 w-9 items-center justify-center rounded-btn border border-[#F0DED2] bg-[#FFF8F2] hover:bg-[#8B597B] hover:text-white transition-colors text-[#493129]"
              >
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


