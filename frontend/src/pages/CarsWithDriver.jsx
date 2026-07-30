import Reveal from "@/components/site/Reveal";
import PricingTable from "@/components/site/PricingTable";
import CTABand from "@/components/site/CTABand";
import { chauffeurTables, driverNight } from "@/data/pricing";

export default function CarsWithDriver() {
  return (
    <main data-testid="cars-with-driver-page" className="pt-32 md:pt-40">
      {/* Editorial header (inline, no colored banner) */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-8">
            <p className="overline">Page 02 · Chauffeur-driven</p>
            <Reveal
              as="h1"
              className="mt-4 font-display leading-[1.02] tracking-tight text-ink text-6xl md:text-7xl lg:text-[7vw]"
            >
              Cars with <em className="italic text-maroon font-normal">drivers.</em>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <div className="border-t border-gold pt-4">
                <p className="overline">Rate window</p>
                <p className="mt-2 text-lg text-ink">
                  Price valid <span className="text-maroon">3rd Jan – 28th Dec 2026</span>
                </p>
                <p className="mt-2 text-sm text-ink-muted">
                  Sedan · Ertiga · Innova · Crysta · Hycross
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1440px] px-6 md:px-10 space-y-16 md:space-y-24">
        {chauffeurTables.map((t, i) => (
          <PricingTable
            key={t.id}
            name={t.name}
            tagline={t.tagline}
            rows={t.rows}
            waMessage={`Hi Goa Yatra, I'd like to enquire about the ${t.name} chauffeur package.`}
            index={`0${i + 1}`}
            testId={`chauffeur-${t.id}`}
          />
        ))}

        {/* Driver night overtime */}
        <section
          data-testid="driver-night"
          className="border-t border-hairline pt-10 md:pt-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-8">
            <div className="md:col-span-1">
              <span className="chapter-num">06</span>
            </div>
            <div className="md:col-span-11">
              <h3 className="font-display text-4xl md:text-5xl text-ink tracking-tight">
                Driver night — <em className="italic text-maroon font-normal">compulsory overtime</em>
              </h3>
              <p className="mt-3 text-sm text-ink-muted max-w-md">
                Applies when the driver stays on with you past 8:00 pm.
              </p>
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
        eyebrow="Same number, every car"
        headline={
          <>
            Which car <em className="italic text-maroon font-normal">fits your day?</em>
          </>
        }
        sub="Tell us your route, we'll tell you the sharpest package."
        waMsg="Hi Goa Yatra, I need a chauffeur-driven car — could you recommend a package?"
        testId="chauffeur-cta-band"
      />
    </main>
  );
}
