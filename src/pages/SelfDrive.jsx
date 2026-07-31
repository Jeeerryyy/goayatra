import Reveal from "@/components/site/Reveal";
import CTABand from "@/components/site/CTABand";
import VehicleCard from "@/components/site/VehicleCard";
import { WhatsAppButton } from "@/components/site/CTAButtons";
import { selfDriveRows, selfDriveNotes } from "@/data/pricing";
import { selfDriveVehicles } from "@/data/vehicles";
import { BRAND } from "@/lib/site";

export default function SelfDrive() {
  return (
    <main data-testid="self-drive-page" className="pt-28 md:pt-36 bg-[#FFF8F2] text-[#493129]">
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-badge bg-[#FFF3EB] text-[#8B597B] border border-[#F0DED2] text-xs font-semibold uppercase tracking-wider mb-3">
              Total Freedom &amp; Coastal Rides
            </div>
            <Reveal
              as="h1"
              className="font-display font-bold leading-[1.05] tracking-tight text-[#493129] text-5xl md:text-6xl lg:text-7xl"
            >
              You Drive. We Hand Over the <span className="text-[#8B597B]">Keys &amp; Premium Service</span>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <div className="brand-card bg-white p-6 rounded-[24px] shadow-card border border-[#F0DED2]">
                <p className="text-xs font-semibold text-[#8B597B] uppercase tracking-wider">Main Hub Base</p>
                <p className="mt-1 font-bold text-[#493129] font-body text-sm">{BRAND.address}</p>
                <p className="mt-1 text-xs text-[#856A63] font-body">
                  {BRAND.phone} · 24/7 Service
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Fleet grid — 13 self-drive vehicles */}
      <section
        data-testid="self-drive-fleet-grid"
        className="mx-auto max-w-[1440px] px-6 md:px-10 pb-16 md:pb-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-10 border-t border-[#F0DED2] pt-10 md:pt-16">
          <div className="md:col-span-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold text-[#493129] tracking-tight">
              Thirteen Self-Drive Cars <span className="text-[#8B597B]">Ready in Goa</span>
            </h2>
            <p className="mt-2 text-base text-[#6D4F47] font-body max-w-md">
              Select any car for specs, details, and instant WhatsApp reservations.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {selfDriveVehicles.map((v, i) => (
            <VehicleCard key={v.slug} vehicle={v} index={i} testId={`self-drive-tile-${v.slug}`} />
          ))}
        </div>
      </section>

      {/* Big editorial pricing table */}
      <section
        data-testid="self-drive-pricing"
        className="mx-auto max-w-[1440px] px-6 md:px-10"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-8 border-t border-[#F0DED2] pt-10 md:pt-16">
          <div className="md:col-span-8">
            <h3 className="font-display text-4xl md:text-5xl font-bold text-[#493129] tracking-tight">
              Self-Drive Daily <span className="text-[#8B597B]">Rate Sheet</span>
            </h3>
            <p className="mt-2 text-base text-[#6D4F47] font-body max-w-md">
              9:00 am to 9:00 am (24hr cycle). Delivery and return pickup available across Goa.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <WhatsAppButton
              label="Enquire on WhatsApp"
              message="Hi Goa Yatra! I'd like to enquire about self-drive rentals."
              testId="enquire-self-drive"
              className="btn-primary"
            />
          </div>
        </div>

        <Reveal>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {selfDriveRows.map((r, i) => (
              <div
                key={r.veh}
                className="group relative bg-white rounded-[20px] p-6 border border-[#F0DED2] shadow-card hover:shadow-cardHover transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <h4 className="font-heading font-bold text-xl text-[#493129]">{r.veh}</h4>
                    <span className="text-[10px] uppercase font-bold text-[#8B597B] bg-[#FFF3EB] px-2.5 py-1 rounded-full border border-[#F0DED2]">
                      24h Cycle
                    </span>
                  </div>

                  {/* Rates */}
                  <div className="grid grid-cols-2 gap-2 my-4">
                    <div className="bg-[#FFF8F2] p-3 rounded-xl border border-[#F0DED2] text-center">
                      <span className="text-[11px] uppercase font-bold text-[#856A63]">Manual</span>
                      <p className={`font-heading font-extrabold text-lg sm:text-xl mt-0.5 ${r.manual === "N/A" ? "text-[#856A63]" : "text-[#493129]"}`}>
                        {r.manual}
                      </p>
                    </div>
                    <div className="bg-[#FFF8F2] p-3 rounded-xl border border-[#F0DED2] text-center">
                      <span className="text-[11px] uppercase font-bold text-[#856A63]">Automatic</span>
                      <p className={`font-heading font-extrabold text-lg sm:text-xl mt-0.5 ${r.auto === "N/A" ? "text-[#856A63]" : "text-[#493129]"}`}>
                        {r.auto}
                      </p>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="space-y-1.5 pt-3 border-t border-[#F0DED2] text-xs text-[#6D4F47] font-semibold">
                    <div className="flex items-center justify-between">
                      <span className="text-[#856A63]">Delivery / Pickup</span>
                      <span className="font-bold text-[#493129]">₹500 each</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-[#856A63]">Refundable Deposit</span>
                      <span className="font-bold text-[#8B597B]">{r.deposit}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-5 pt-2">
                  <WhatsAppButton
                    label="Book This Car"
                    size="md"
                    message={`Hi Goa Yatra! I'd like to book the ${r.veh} for self-drive.`}
                    testId={`self-drive-book-${i}`}
                    className="btn-primary w-full justify-center text-xs py-2.5 rounded-xl shadow-soft"
                  />
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Notes as clean list */}
      <section
        data-testid="self-drive-notes"
        className="mx-auto max-w-[1440px] px-6 md:px-10 border-t border-[#F0DED2] mt-20 md:mt-28 pt-12 md:pt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-10">
          <div className="md:col-span-4">
            <span className="px-3 py-1 rounded-badge bg-[#FFF3EB] text-[#8B597B] border border-[#F0DED2] font-semibold text-xs uppercase tracking-wider">
              Fine Print
            </span>
            <h3 className="mt-3 font-display text-4xl md:text-5xl font-bold text-[#493129] tracking-tight leading-tight">
              Booking &amp; Pricing Notes
            </h3>
          </div>
          <div className="md:col-span-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {selfDriveNotes.map((n, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-base leading-relaxed text-[#6D4F47] font-body border-t border-[#F0DED2] pt-4"
                >
                  <span className="font-heading font-bold text-[#8B597B] shrink-0 pt-0.5 text-lg">
                    0{i + 1}
                  </span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Direct Handover"
        headline="Pick your car. We deliver directly to your hotel."
        sub="Message us with your dates and we'll confirm vehicle availability promptly."
        waMsg="Hi Goa Yatra! I'd like to book a self-drive car. Here are my dates:"
        testId="self-drive-cta-band"
      />
    </main>
  );
}

