import Reveal from "@/components/site/Reveal";
import PricingTable from "@/components/site/PricingTable";
import CTABand from "@/components/site/CTABand";
import { groupTables, driverNight } from "@/data/pricing";
import { IconVan, IconBus } from "@/components/site/VehicleIcons";

export default function GroupTravel() {
  return (
    <main data-testid="group-travel-page" className="pt-28 md:pt-36 bg-[#FFF8F2] text-[#493129]">
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-badge bg-[#FFF3EB] text-[#8B597B] border border-[#F0DED2] text-xs font-semibold uppercase tracking-wider mb-3">
              Group Trips &amp; Celebrations
            </div>
            <Reveal
              as="h1"
              className="font-display font-bold leading-[1.05] tracking-tight text-[#493129] text-5xl md:text-6xl lg:text-7xl"
            >
              Tempo Traveller &amp; <span className="text-[#8B597B]">Urbania Group Rides</span>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <div className="brand-card bg-white p-6 rounded-[24px] shadow-card border border-[#F0DED2]">
                <p className="text-xs font-semibold text-[#8B597B] uppercase tracking-wider">Group Capacity</p>
                <p className="mt-1 font-bold text-[#493129] font-body text-base">
                  12 – 17 Seats Tempo · 26 Seats Urbania
                </p>
                <p className="mt-1 text-xs text-[#856A63] font-body">
                  Weddings, corporate off-sites, family reunions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vehicle callouts */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Reveal className="brand-card bg-white border border-[#F0DED2] p-8 md:p-10 rounded-[24px] shadow-card">
            <div className="text-[#8B597B]">
              <IconVan size={80} />
            </div>
            <h3 className="mt-6 font-heading font-bold text-3xl text-[#493129]">Tempo Traveller</h3>
            <p className="mt-1 text-sm font-semibold text-[#8B597B]">12 – 17 seats · AC · With Driver</p>
            <p className="mt-4 text-base leading-relaxed text-[#6D4F47] font-body">
              The favorite choice for mid-size group runs — airport transfers, wedding parties, school reunions, and day-long sightseeing across North &amp; South Goa.
            </p>
          </Reveal>

          <Reveal delay={0.08} className="brand-card bg-white border border-[#F0DED2] p-8 md:p-10 rounded-[24px] shadow-card">
            <div className="text-[#8B597B]">
              <IconBus size={80} />
            </div>
            <h3 className="mt-6 font-heading font-bold text-3xl text-[#493129]">Urbania Premium</h3>
            <p className="mt-1 text-sm font-semibold text-[#8B597B]">Up to 26 seats · Premium · With Driver</p>
            <p className="mt-4 text-base leading-relaxed text-[#6D4F47] font-body">
              Reclining luxury seating, high ceiling, spacious luggage bay — the ultimate choice when your whole group travels together in luxury.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 space-y-16 md:space-y-24">
        {groupTables.map((t, i) => (
          <PricingTable
            key={t.id}
            name={t.name}
            tagline={t.tagline}
            rows={t.rows}
            waMessage={`Hi Goa Yatra! I'd like a ${t.name} quote for our group.`}
            index={`0${i + 1}`}
            testId={`group-${t.id}`}
          />
        ))}

        <section
          data-testid="group-driver-night"
          className="border-t border-[#F0DED2] pt-10 md:pt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-8">
            <div className="md:col-span-12">
              <h3 className="font-display text-4xl md:text-5xl font-bold text-[#493129] tracking-tight">
                Driver Night — <span className="text-[#8B597B]">Compulsory Overtime</span>
              </h3>
            </div>
          </div>
          <Reveal className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
            <div className="rounded-[24px] bg-white p-6 md:p-8 border border-[#F0DED2] shadow-card min-w-[520px] max-w-2xl">
              <table className="goa-table w-full">
                <thead>
                  <tr>
                    <th className="font-heading font-bold text-[#493129]">Slot</th>
                    <th className="font-heading font-bold text-[#493129]">Charge</th>
                  </tr>
                </thead>
                <tbody>
                  {driverNight.map((r) => (
                    <tr key={r.slot} className="hover:bg-[#FFF3EB] transition-colors">
                      <td className="font-body text-[#6D4F47] text-base">{r.slot}</td>
                      <td className="price font-heading font-bold text-[#493129]">{r.charge}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </section>
      </section>

      <CTABand
        eyebrow="Group Travel Consultation"
        headline="Wedding? Reunion? Corporate off-site in Goa?"
        sub="Tell us your headcount and route — we'll size the vehicle and quote in minutes."
        waMsg="Hi Goa Yatra! I'm planning a group trip — could you help size the vehicle?"
        testId="group-cta-band"
      />
    </main>
  );
}

