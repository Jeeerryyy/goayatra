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
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-badge bg-[#F5F3EE] text-[#C49A3C] border border-[#E8E4DC] text-xs font-semibold uppercase tracking-wider mb-2">
          Rate Package Sheet
        </div>
        <h3 className="font-heading font-bold text-2xl sm:text-3xl md:text-4xl text-[#1A1A1A] tracking-tight">
          {name}
        </h3>
        {tagline && (
          <p className="mt-1.5 text-sm sm:text-base text-[#4A4A4A] font-body max-w-lg">{tagline}</p>
        )}
      </div>

      <Reveal>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {rows.map((r, i) => (
            <div
              key={i}
              className="group relative bg-white rounded-[20px] p-6 border border-[#E8E4DC] shadow-card hover:shadow-cardHover hover:border-[#C49A3C]/40 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Duration Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-badge bg-[#F5F3EE] text-[#1A1A1A] font-heading text-xs font-bold uppercase tracking-wider">
                    <Clock size={13} className="text-[#C49A3C]" />
                    {r.pkg}
                  </span>
                  {i === 1 && (
                    <span className="text-[10px] uppercase font-bold text-white bg-[#C49A3C] px-2 py-0.5 rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>

                {/* Price Display */}
                <div className="my-4">
                  <span className="font-heading text-3xl sm:text-4xl font-extrabold text-[#1A1A1A] tracking-tight">
                    {r.price}
                  </span>
                  <span className="text-xs text-[#6B6B6B] ml-1 font-semibold">/ package</span>
                </div>

                {/* Specs & Overtime Pills */}
                <div className="space-y-2 pt-3 border-t border-[#E8E4DC] text-xs text-[#4A4A4A] font-semibold">
                  <div className="flex items-center justify-between bg-[#FAFAF8] px-3 py-2 rounded-xl border border-[#E8E4DC]">
                    <span className="inline-flex items-center gap-1 text-[#6B6B6B]">
                      <Navigation size={13} className="text-[#C49A3C]" /> Extra Distance
                    </span>
                    <span className="font-bold text-[#1A1A1A]">{r.extraKm}</span>
                  </div>
                  <div className="flex items-center justify-between bg-[#FAFAF8] px-3 py-2 rounded-xl border border-[#E8E4DC]">
                    <span className="inline-flex items-center gap-1 text-[#6B6B6B]">
                      <Clock size={13} className="text-[#C49A3C]" /> Extra Time
                    </span>
                    <span className="font-bold text-[#1A1A1A]">{r.extraHr}</span>
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

