import Reveal from "@/components/site/Reveal";
import PricingTable from "@/components/site/PricingTable";
import VehicleCard from "@/components/site/VehicleCard";
import CTABand from "@/components/site/CTABand";
import { chauffeurTables, driverNight } from "@/data/pricing";
import { chauffeurVehicles } from "@/data/vehicles";

export default function CarsWithDriver() {
  return (
    <main data-testid="cars-with-driver-page" className="pt-28 md:pt-36 bg-[#FAFAF8] text-[#1A1A1A]">
      {/* Header */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-badge bg-[#F5F3EE] text-[#C49A3C] border border-[#E8E4DC] text-xs font-semibold uppercase tracking-wider mb-3">
              Relaxed Chauffeur Rides
            </div>
            <Reveal
              as="h1"
              className="font-display font-bold leading-[1.05] tracking-tight text-[#1A1A1A] text-5xl md:text-6xl lg:text-7xl"
            >
              Chauffeur Cars &amp; Experienced <span className="text-[#C49A3C]">Local Drivers</span>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <div className="brand-card bg-white p-6 rounded-[24px] shadow-card border border-[#E8E4DC]">
                <p className="text-xs font-semibold text-[#C49A3C] uppercase tracking-wider">Rate Window</p>
                <p className="mt-1 font-bold text-[#1A1A1A] font-body text-base">
                  Standard Rate Sheet 2026
                </p>
                <p className="mt-1 text-xs text-[#6B6B6B] font-body">
                  Sedan · Ertiga · Innova · Crysta · Hycross
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 space-y-16 md:space-y-24">
        {/* Fleet grid — 5 chauffeur categories */}
        <section
          data-testid="chauffeur-fleet-grid"
          className="border-t border-[#E8E4DC] pt-10 md:pt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-10">
            <div className="md:col-span-12">
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
                The Chauffeur <span className="text-[#C49A3C]">Line-Up</span>
              </h2>
              <p className="mt-2 text-base text-[#4A4A4A] font-body max-w-md">
                Five packages — select any card for cabin details, specs and full price sheet.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {chauffeurVehicles.map((v, i) => (
              <VehicleCard key={v.slug} vehicle={v} index={i} testId={`chauffeur-tile-${v.slug}`} />
            ))}
          </div>
        </section>

        {chauffeurTables.map((t, i) => (
          <PricingTable
            key={t.id}
            name={t.name}
            tagline={t.tagline}
            rows={t.rows}
            waMessage={`Hi Goa Yatra! I'd like to enquire about the ${t.name} chauffeur package.`}
            testId={`chauffeur-${t.id}`}
          />
        ))}

        {/* Driver night overtime */}
        <section
          data-testid="driver-night"
          className="border-t border-[#E8E4DC] pt-10 md:pt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-8">
            <div className="md:col-span-12">
              <h3 className="font-display text-4xl md:text-5xl font-bold text-[#1A1A1A] tracking-tight">
                Driver Night — <span className="text-[#C49A3C]">Overtime Allowance</span>
              </h3>
              <p className="mt-2 text-base text-[#4A4A4A] font-body max-w-md">
                Applies when the driver stays on past 8:00 pm.
              </p>
            </div>
          </div>
          <Reveal>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 max-w-2xl">
              {driverNight.map((r) => (
                <div
                  key={r.slot}
                  className="bg-white rounded-[20px] p-6 border border-[#E8E4DC] shadow-card flex items-center justify-between"
                >
                  <div>
                    <span className="text-xs uppercase font-bold text-[#6B6B6B]">Overtime Slot</span>
                    <p className="font-heading font-bold text-base text-[#1A1A1A] mt-1">{r.slot}</p>
                  </div>
                  <div className="text-right">
                    <span className="font-heading font-extrabold text-2xl text-[#C49A3C]">{r.charge}</span>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>
      </section>

      <CTABand
        eyebrow="Direct Reservation"
        headline="Which car fits your day in Goa?"
        sub="Tell us your route, we'll recommend the ideal package instantly."
        waMsg="Hi Goa Yatra! I need a chauffeur-driven car — could you recommend a package?"
        testId="chauffeur-cta-band"
      />
    </main>
  );
}

