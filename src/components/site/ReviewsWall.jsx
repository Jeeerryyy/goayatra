import Reveal from "./Reveal";
import { reviews, reviewsMeta } from "@/data/reviews";
import { Star } from "lucide-react";

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

function InstagramGlyph({ size = 16 }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="#5C1A1A"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <rect width="20" height="20" x="2" y="2" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r=".7" fill="#5C1A1A" />
    </svg>
  );
}

export default function ReviewsWall() {
  return (
    <section
      data-testid="reviews-wall"
      className="border-t border-hairline py-20 md:py-28"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        {/* Header */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-14 items-end">
          <div className="md:col-span-4">
            <p className="overline">Reviews · {reviewsMeta.sourceNote}</p>
            <Reveal
              as="h2"
              className="mt-4 font-display text-4xl md:text-5xl leading-tight text-ink tracking-tight"
            >
              What people say <em className="italic text-maroon font-normal">after the trip.</em>
            </Reveal>
          </div>
          <div className="md:col-span-8">
            <Reveal delay={0.08}>
              <div className="grid grid-cols-3 gap-6">
                <StatBlock kpi={reviewsMeta.avg} sub="Average rating" showStars />
                <StatBlock kpi={reviewsMeta.count} sub="Trips reviewed" />
                <StatBlock kpi="98%" sub="Would rebook" />
              </div>
            </Reveal>
          </div>
        </div>

        {/* Reviews grid — asymmetric bento */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-6">
          {reviews.map((r, i) => (
            <Reveal
              key={r.id}
              delay={i * 0.06}
              className={`border-t-2 border-gold border-x border-b border-hairline bg-bg-alt p-8 md:p-10 ${
                // Asymmetric spans — first two are wider, then rotate
                i === 0
                  ? "md:col-span-4"
                  : i === 1
                  ? "md:col-span-2"
                  : i === 2
                  ? "md:col-span-2"
                  : i === 3
                  ? "md:col-span-4"
                  : "md:col-span-3"
              }`}
              data-testid={`review-${r.id}`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="h-11 w-11 flex items-center justify-center border border-hairline bg-bg text-maroon font-display text-base">
                    {r.initials}
                  </div>
                  <div>
                    <p className="text-sm text-ink font-medium">{r.name}</p>
                    <p className="text-[11px] tracking-[0.2em] uppercase text-ink-muted mt-0.5">
                      {r.date} · {r.vehicle}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-1.5" title={`${r.rating} stars`}>
                  {Array.from({ length: r.rating }).map((_, k) => (
                    <Star
                      key={k}
                      size={13}
                      strokeWidth={1.4}
                      className="text-gold"
                      fill="#B08D57"
                    />
                  ))}
                </div>
              </div>

              <p className="mt-7 font-display text-xl md:text-2xl leading-[1.35] text-ink">
                &ldquo;{r.text}&rdquo;
              </p>

              <div className="mt-7 flex items-center gap-2 text-[11px] tracking-[0.22em] uppercase text-ink-muted">
                {r.source === "Google" ? <GoogleGlyph /> : <InstagramGlyph />}
                <span>Via {r.source}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function StatBlock({ kpi, sub, showStars = false }) {
  return (
    <div className="border-t border-hairline pt-4">
      <div className="flex items-baseline gap-2">
        <span className="font-display text-4xl md:text-5xl text-maroon leading-none">
          {kpi}
        </span>
        {showStars && (
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, k) => (
              <Star
                key={k}
                size={11}
                strokeWidth={1.4}
                className="text-gold"
                fill="#B08D57"
              />
            ))}
          </div>
        )}
      </div>
      <p className="mt-2 text-[11px] tracking-[0.22em] uppercase text-ink-muted">
        {sub}
      </p>
    </div>
  );
}
