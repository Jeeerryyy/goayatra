import Reveal from "@/components/site/Reveal";
import PricingTable from "@/components/site/PricingTable";
import CTABand from "@/components/site/CTABand";
import { groupTables, driverNight } from "@/data/pricing";
import { IconVan, IconBus } from "@/components/site/VehicleIcons";

export default function GroupTravel() {
  return (
    <main data-testid="group-travel-page" className="pt-24 md:pt-28">
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-8">
            <Reveal
              as="h1"
              className="mt-4 font-display leading-[1.02] tracking-tight text-ink text-6xl md:text-7xl lg:text-[7vw]"
            >
              Tempo Traveller <span className="text-gold">·</span>{" "}
              <em className="italic text-maroon font-normal">Urbania.</em>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <div className="border-t border-gold pt-4">
                <p className="overline">Seats</p>
                <p className="mt-2 text-lg text-ink">
                  <span className="text-maroon">12 – 17</span> seat Tempo · up to{" "}
                  <span className="text-maroon">26</span> seat Urbania
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  Weddings, corporate runs, family tours.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Vehicle callouts (line-art icons, no stock photos) */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 mb-16 md:mb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal className="bg-bg-alt border-t-2 border-gold border-x border-b border-hairline p-10">
            <div className="text-maroon">
              <IconVan size={96} />
            </div>
            <h3 className="mt-8 font-display text-3xl text-ink">Tempo Traveller</h3>
            <p className="mt-2 text-sm text-ink-muted">12 – 17 seats · AC · With driver</p>
            <p className="mt-6 text-[15px] leading-relaxed text-ink">
              The workhorse for mid-size group runs — airport transfers, wedding parties,
              school reunions, day-long sightseeing.
            </p>
          </Reveal>
          <Reveal delay={0.08} className="bg-bg-alt border-t-2 border-gold border-x border-b border-hairline p-10">
            <div className="text-maroon">
              <IconBus size={96} />
            </div>
            <h3 className="mt-8 font-display text-3xl text-ink">Urbania</h3>
            <p className="mt-2 text-sm text-ink-muted">Up to 26 seats · Premium · With driver</p>
            <p className="mt-6 text-[15px] leading-relaxed text-ink">
              Reclining premium seating, big luggage bay — the choice when the group is
              large and the drive is long.
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
            waMessage={`Hi Goa Yatra, I'd like a ${t.name} quote for our group.`}
            index={`0${i + 1}`}
            testId={`group-${t.id}`}
          />
        ))}

        <section
          data-testid="group-driver-night"
          className="border-t border-hairline pt-10 md:pt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-8">
            <div className="md:col-span-12">
              <h3 className="font-display text-4xl md:text-5xl text-ink tracking-tight">
                Driver night — <em className="italic text-maroon font-normal">compulsory overtime</em>
              </h3>
            </div>
          </div>
          <Reveal className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
            <table className="goa-table min-w-[520px] max-w-2xl">
              <thead>
                <tr>
                  <th>Slot</th>
                  <th>Charge</th>
                </tr>
              </thead>
              <tbody>
                {driverNight.map((r) => (
                  <tr key={r.slot}>
                    <td>{r.slot}</td>
                    <td className="price">{r.charge}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        </section>
      </section>

      <CTABand
        eyebrow="Big group, one call"
        headline={
          <>
            Wedding? Reunion? <em className="italic text-maroon font-normal">Corporate off-site?</em>
          </>
        }
        sub="Tell us headcount and route — we'll size the vehicle and quote in minutes."
        waMsg="Hi Goa Yatra, I'm planning a group trip — could you help size the vehicle?"
        testId="group-cta-band"
      />
    </main>
  );
}
