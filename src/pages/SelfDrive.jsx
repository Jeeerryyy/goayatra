import Reveal from "@/components/site/Reveal";
import CTABand from "@/components/site/CTABand";
import VehicleCard from "@/components/site/VehicleCard";
import { WhatsAppButton } from "@/components/site/CTAButtons";
import { selfDriveRows, selfDriveNotes } from "@/data/pricing";
import { selfDriveVehicles } from "@/data/vehicles";
import { BRAND } from "@/lib/site";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function SelfDrive() {
  return (
    <main data-testid="self-drive-page" className="pt-32 md:pt-40">
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-8">
            <p className="overline">Page 03 · Self-drive rentals</p>
            <Reveal
              as="h1"
              className="mt-4 font-display leading-[1.02] tracking-tight text-ink text-6xl md:text-7xl lg:text-[7vw]"
            >
              <em className="italic text-maroon font-normal">You</em> drive.
              <br />
              We hand over the keys.
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <div className="border-t border-gold pt-4 text-sm space-y-3">
                <p className="overline">Base</p>
                <p className="text-ink">{BRAND.address}</p>
                <p className="text-ink-muted">
                  {BRAND.phone} · {BRAND.email}
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-10 border-t border-hairline pt-10 md:pt-16">
          <div className="md:col-span-1">
            <span className="chapter-num">00</span>
          </div>
          <div className="md:col-span-11">
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight">
              Thirteen cars <em className="italic text-maroon font-normal">on the yard.</em>
            </h2>
            <p className="mt-3 text-sm text-ink-muted max-w-md">
              Tap any car for cabin & exterior photos, specs, and a WhatsApp-ready enquiry.
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
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10 items-end mb-8 border-t border-hairline pt-10 md:pt-16">
          <div className="md:col-span-1">
            <span className="chapter-num">01</span>
          </div>
          <div className="md:col-span-7">
            <h3 className="font-display text-4xl md:text-5xl text-ink tracking-tight">
              Fleet & rates <em className="italic text-maroon font-normal">per day</em>
            </h3>
            <p className="mt-3 text-sm text-ink-muted max-w-md">
              9:00 am to 9:00 am, strictly. Delivery and return pickup charged separately.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <WhatsAppButton
              label="Enquire on WhatsApp"
              message="Hi Goa Yatra, I'd like to enquire about self-drive rentals."
              testId="enquire-self-drive"
            />
          </div>
        </div>

        <Reveal className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
          <table className="goa-table min-w-[860px]">
            <thead>
              <tr>
                <th>Vehicle</th>
                <th>Manual</th>
                <th>Automatic</th>
                <th>Delivery</th>
                <th>Return pickup</th>
                <th>Security deposit</th>
              </tr>
            </thead>
            <tbody>
              {selfDriveRows.map((r) => (
                <tr key={r.veh}>
                  <td className="font-medium text-ink">{r.veh}</td>
                  <td className={r.manual === "N/A" ? "text-ink-muted" : "price"}>
                    {r.manual}
                  </td>
                  <td className={r.auto === "N/A" ? "text-ink-muted" : "price"}>
                    {r.auto}
                  </td>
                  <td>{r.delivery}</td>
                  <td>{r.pickup}</td>
                  <td>{r.deposit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </Reveal>
      </section>

      {/* Notes as clean two-column list */}
      <section
        data-testid="self-drive-notes"
        className="mx-auto max-w-[1440px] px-6 md:px-10 border-t border-hairline mt-20 md:mt-28 pt-12 md:pt-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 mb-10">
          <div className="md:col-span-4">
            <p className="overline">Fine print</p>
            <h3 className="mt-4 font-display text-4xl md:text-5xl text-ink tracking-tight leading-tight">
              Booking & pricing notes
            </h3>
          </div>
          <div className="md:col-span-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-5">
              {selfDriveNotes.map((n, i) => (
                <li
                  key={i}
                  className="flex gap-4 text-[15px] leading-relaxed text-ink border-t border-hairline pt-4"
                >
                  <span className="chapter-num shrink-0 pt-0.5">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span>{n}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Keys in hand"
        headline={
          <>
            Pick a car. <em className="italic text-maroon font-normal">We deliver.</em>
          </>
        }
        sub="Message us with your dates and we'll confirm availability instantly."
        waMsg="Hi Goa Yatra, I'd like to book a self-drive car. Here are my dates:"
        testId="self-drive-cta-band"
      />
    </main>
  );
}
