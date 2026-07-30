import { useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Users, Fuel, Snowflake, Gauge, Briefcase } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import CTABand from "@/components/site/CTABand";
import { CallButton, WhatsAppButton } from "@/components/site/CTAButtons";
import VehicleCard from "@/components/site/VehicleCard";
import { getVehicle, vehicles } from "@/data/vehicles";
import { chauffeurTables, selfDriveRows } from "@/data/pricing";
import { ease, maskLine } from "@/lib/motion";

function getChauffeurTable(id) {
  return chauffeurTables.find((t) => t.id === id);
}
function getSelfDriveRow(name) {
  return selfDriveRows.find((r) => r.veh === name);
}

export default function Vehicle() {
  const { slug } = useParams();
  const nav = useNavigate();
  const v = getVehicle(slug);

  useEffect(() => {
    if (!v) nav("/", { replace: true });
  }, [v, nav]);

  if (!v) return null;

  const isChauffeur = v.fleet.includes("chauffeur");
  const isSelfDrive = v.fleet.includes("self-drive");
  const chauffeurTable = isChauffeur ? getChauffeurTable(v.chauffeurTableId) : null;
  const selfDriveRow = isSelfDrive ? getSelfDriveRow(v.selfDriveVehicle) : null;

  const related = vehicles
    .filter(
      (o) =>
        o.slug !== v.slug &&
        (o.category.split("·")[0].trim() === v.category.split("·")[0].trim() ||
          o.fleet.some((f) => v.fleet.includes(f)))
    )
    .slice(0, 3);

  const waMsg = `Hi Goa Yatra, I'd like to enquire about the ${v.name}.`;

  return (
    <main data-testid={`vehicle-page-${v.slug}`} className="pt-32 md:pt-40">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 mb-10">
        <div className="flex items-center gap-3 text-[11px] tracking-[0.22em] uppercase text-ink-muted">
          <Link
            to={isChauffeur ? "/cars-with-driver" : "/self-drive"}
            className="inline-flex items-center gap-2 hover:text-maroon transition-colors"
            data-testid="vehicle-back-link"
          >
            <ArrowLeft size={12} strokeWidth={1.6} />
            <span>{isChauffeur ? "Cars with Driver" : "Self-Drive"}</span>
          </Link>
          <span className="text-gold">/</span>
          <span className="text-ink">{v.name}</span>
        </div>
      </div>

      {/* Hero */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <p className="overline">{v.category}</p>
            <h1 className="mt-4 font-display leading-[1.02] tracking-tight text-ink text-6xl md:text-7xl lg:text-[6.4vw]">
              <span className="mask-line">
                <motion.span
                  className="block"
                  variants={maskLine}
                  initial="hidden"
                  animate="visible"
                  custom={0}
                >
                  {v.name.split(" ")[0]}
                </motion.span>
              </span>
              {v.name.split(" ").length > 1 && (
                <span className="mask-line">
                  <motion.span
                    className="block italic text-maroon"
                    variants={maskLine}
                    initial="hidden"
                    animate="visible"
                    custom={1}
                  >
                    {v.name.split(" ").slice(1).join(" ")}
                  </motion.span>
                </span>
              )}
            </h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.55 }}
              className="mt-8 max-w-xl text-lg text-ink leading-relaxed"
            >
              {v.tagline}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.7 }}
              className="mt-8 flex flex-wrap gap-3"
            >
              <CallButton label="Call to book" size="lg" testId="vehicle-call" />
              <WhatsAppButton
                label={`WhatsApp about the ${v.name}`}
                size="lg"
                message={waMsg}
                testId="vehicle-whatsapp"
              />
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.4, ease, delay: 0.35 }}
            className="lg:col-span-5"
          >
            <div className="relative aspect-[4/5] overflow-hidden bg-bg-alt">
              <motion.img
                src={v.images.hero}
                alt={`${v.name} — hero`}
                className="absolute inset-0 h-full w-full object-cover"
                initial={{ scale: 1.06 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2.4, ease }}
              />
              <span className="pointer-events-none absolute inset-2 border border-bg/70" />
              <span className="pointer-events-none absolute inset-6 border-t border-gold" />
            </div>
            <div className="mt-3 flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-ink-muted">
              <span>Fig. — {v.name}</span>
              <span>{v.category}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story + Specs */}
      <section
        data-testid="vehicle-story"
        className="border-t border-hairline mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="overline">The story</p>
              <p className="mt-6 font-display text-2xl md:text-3xl leading-[1.35] text-ink">
                {v.story}
              </p>
            </Reveal>

            <Reveal delay={0.08} className="mt-12">
              <p className="overline">Highlights</p>
              <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
                {v.highlights.map((h, i) => (
                  <li
                    key={i}
                    className="flex gap-3 text-[15px] leading-relaxed text-ink border-t border-hairline pt-4"
                  >
                    <span className="chapter-num shrink-0 pt-0.5">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.05}>
              <div className="border-t border-gold pt-6">
                <p className="overline">At a glance</p>
                <dl className="mt-6 divide-y divide-hairline border-t border-hairline">
                  <SpecRow Icon={Users} label="Seats" value={v.seats} />
                  <SpecRow Icon={Gauge} label="Transmission" value={v.transmission} />
                  <SpecRow Icon={Fuel} label="Fuel" value={v.fuel} />
                  <SpecRow Icon={Briefcase} label="Luggage" value={v.luggage} />
                  <SpecRow Icon={Snowflake} label="AC" value={v.ac ? "Yes" : "No"} />
                </dl>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Photo strip */}
      <section
        data-testid="vehicle-photos"
        className="border-t border-hairline mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24"
      >
        <div className="mb-10 flex items-end justify-between">
          <p className="overline">Photography · Fig. 02 & 03</p>
          <span className="text-[10px] tracking-[0.24em] uppercase text-ink-muted">
            Cabin · Exterior
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Reveal>
            <div className="relative aspect-[4/3] overflow-hidden bg-bg-alt">
              <img
                src={v.images.cabin}
                alt={`${v.name} — cabin`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <span className="pointer-events-none absolute inset-2 border border-bg/70" />
            </div>
            <p className="mt-3 text-[10px] tracking-[0.24em] uppercase text-ink-muted">
              Fig. 02 — the cabin
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="relative aspect-[4/3] overflow-hidden bg-bg-alt">
              <img
                src={v.images.exterior}
                alt={`${v.name} — exterior`}
                className="absolute inset-0 h-full w-full object-cover"
                loading="lazy"
              />
              <span className="pointer-events-none absolute inset-2 border border-bg/70" />
            </div>
            <p className="mt-3 text-[10px] tracking-[0.24em] uppercase text-ink-muted">
              Fig. 03 — the exterior
            </p>
          </Reveal>
        </div>
      </section>

      {/* Pricing */}
      <section
        data-testid="vehicle-pricing"
        className="border-t border-hairline mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end mb-10">
          <div className="md:col-span-1">
            <span className="chapter-num">04</span>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-ink tracking-tight">
              What it costs
            </h2>
            <p className="mt-3 text-sm text-ink-muted max-w-md">
              Reproduced from the {isChauffeur ? "chauffeur" : "self-drive"} rate card — the
              same numbers you'll see quoted on WhatsApp.
            </p>
          </div>
          <div className="md:col-span-4 flex md:justify-end">
            <WhatsAppButton
              label="Get a quote on WhatsApp"
              message={waMsg}
              testId={`vehicle-enquire-${v.slug}`}
            />
          </div>
        </div>

        {chauffeurTable && (
          <Reveal className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
            <table className="goa-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Price</th>
                  <th>Extra km</th>
                  <th>Extra hour</th>
                </tr>
              </thead>
              <tbody>
                {chauffeurTable.rows.map((r, i) => (
                  <tr key={i}>
                    <td>{r.pkg}</td>
                    <td className="price">{r.price}</td>
                    <td>{r.extraKm}</td>
                    <td>{r.extraHr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Reveal>
        )}

        {selfDriveRow && (
          <Reveal className="overflow-x-auto -mx-6 md:mx-0 px-6 md:px-0">
            <table className="goa-table min-w-[640px]">
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Manual</th>
                  <th>Automatic</th>
                  <th>Delivery</th>
                  <th>Return pickup</th>
                  <th>Security deposit</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="font-medium">Per day (9am — 9am)</td>
                  <td className={selfDriveRow.manual === "N/A" ? "text-ink-muted" : "price"}>
                    {selfDriveRow.manual}
                  </td>
                  <td className={selfDriveRow.auto === "N/A" ? "text-ink-muted" : "price"}>
                    {selfDriveRow.auto}
                  </td>
                  <td>{selfDriveRow.delivery}</td>
                  <td>{selfDriveRow.pickup}</td>
                  <td>{selfDriveRow.deposit}</td>
                </tr>
              </tbody>
            </table>
          </Reveal>
        )}
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section
          data-testid="vehicle-related"
          className="border-t border-hairline mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24"
        >
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="overline">Also in the fleet</p>
              <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-ink tracking-tight">
                Three others <em className="italic text-maroon font-normal">worth a look</em>
              </h2>
            </div>
            <Link
              to={isChauffeur ? "/cars-with-driver" : "/self-drive"}
              className="hidden md:inline-flex items-center gap-2 text-sm text-maroon hover-underline"
              data-testid="vehicle-view-all"
            >
              View full fleet
              <ArrowUpRight size={14} strokeWidth={1.6} />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {related.map((r, i) => (
              <VehicleCard key={r.slug} vehicle={r} index={i} />
            ))}
          </div>
        </section>
      )}

      <CTABand
        eyebrow={`About the ${v.name}`}
        headline={
          <>
            Book the {v.name.split(" ")[0]}. <em className="italic text-maroon font-normal">Today, if you like.</em>
          </>
        }
        sub="One WhatsApp gets you a real quote — usually within the hour."
        waMsg={waMsg}
        testId={`vehicle-cta-${v.slug}`}
      />
    </main>
  );
}

function SpecRow({ Icon, label, value }) {
  return (
    <div className="grid grid-cols-12 gap-4 items-center py-4">
      <div className="col-span-1">
        <Icon size={14} strokeWidth={1.6} className="text-gold" />
      </div>
      <dt className="col-span-4 overline">{label}</dt>
      <dd className="col-span-7 text-ink text-[15px]">{value}</dd>
    </div>
  );
}
