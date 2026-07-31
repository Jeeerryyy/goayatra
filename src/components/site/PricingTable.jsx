import Reveal from "./Reveal";
import { WhatsAppButton } from "./CTAButtons";
import { Clock, Navigation } from "lucide-react";

export default function PricingTable({
  name,
  tagline,
  rows,
  waMessage,
  index,
  testId,
}) {
  return (
    <section
      data-testid={testId || `pricing-${name?.toLowerCase().replace(/\s+/g, "-")}`}
      className="pt-6 md:pt-10"
    >
      <div className="mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-badge bg-[#FFF3EB] text-[#8B597B] border border-[#F0DED2] text-xs font-semibold uppercase tracking-wider mb-2">
          Rate Package Sheet
        </div>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#493129] tracking-tight">
          {name}
        </h3>
        {tagline && (
          <p className="mt-1.5 text-sm sm:text-base text-[#6D4F47] font-body max-w-lg">{tagline}</p>
        )}
      </div>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rows.map((r, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[20px] p-6 border border-[#F0DED2] shadow-card hover:shadow-cardHover hover:border-[#8B597B]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Duration Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-badge bg-[#FFF3EB] text-[#493129] font-heading text-xs font-bold uppercase tracking-wider">
                    <Clock size={13} className="text-[#8B597B]" />
                    {r.pkg}
                  </span>
                  {i === 1 && (
                    <span className="text-[10px] uppercase font-bold text-white bg-[#8B597B] px-2 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Price Display */}
                <div className="my-4">
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#493129] tracking-tight">
                    {r.price}
                  </span>
                  <span className="text-xs text-[#856A63] ml-1 font-semibold">/ package</span>
                </div>

                {/* Specs & Overtime Pills */}
                <div className="space-y-2 pt-3 border-t border-[#F0DED2] text-xs text-[#6D4F47] font-semibold">
                  <div className="flex items-center justify-between bg-[#FFF8F2] px-3 py-2 rounded-xl border border-[#F0DED2]">
                    <span className="inline-flex items-center gap-1 text-[#856A63]">
                      <Navigation size={13} className="text-[#8B597B]" /> Extra Distance
                    </span>
                    <span className="font-bold text-[#493129]">{r.extraKm}</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#FFF8F2] px-3 py-2 rounded-xl border border-[#F0DED2]">
                    <span className="inline-flex items-center gap-1 text-[#856A63]">
                      <Clock size={13} className="text-[#8B597B]" /> Extra Time
                    </span>
                    <span className="font-bold text-[#493129]">{r.extraHr}</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-2">
                <WhatsAppButton
                  label="Book Package"
                  size="md"
                  message={`Hi Goa Yatra! I'd like to book the ${name} (${r.pkg}) package for ${r.price}.`}
                  testId={`book-${name?.toLowerCase().replace(/\s+/g, "-")}-${i}`}
                  className="btn-primary w-full justify-center text-xs sm:text-sm py-2.5 rounded-xl shadow-soft"
                />
              </div>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

