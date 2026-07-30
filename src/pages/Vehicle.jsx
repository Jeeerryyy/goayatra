import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Users, Fuel, Snowflake, Gauge, Briefcase } from "lucide-react";
import Reveal from "@/components/site/Reveal";
import CTABand from "@/components/site/CTABand";
import { CallButton, WhatsAppButton } from "@/components/site/CTAButtons";
import VehicleCard from "@/components/site/VehicleCard";
import { getVehicle, vehicles } from "@/data/vehicles";
import { chauffeurTables, selfDriveRows } from "@/data/pricing";

function getChauffeurTable(id) {
  return chauffeurTables.find((t) => t.id === id);
}
function getSelfDriveRow(name) {
  return selfDriveRows.find((r) => r.veh === name);
}

function CarImageCarousel({ images, carName }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div className="relative rounded-3xl overflow-hidden bg-bg-alt border border-hairline/80 shadow-md aspect-[4/3] md:aspect-[16/11]">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${carName} photo ${currentIndex + 1}`}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.35, ease: "easeInOut" }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        {/* Pagination Indicators */}
        <div className="flex items-center gap-2 bg-bg/85 backdrop-blur-md px-3 py-1.5 rounded-full border border-hairline/60">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-6 bg-maroon" : "w-2 bg-maroon/30 hover:bg-maroon/50"
              }`}
            />
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous image"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-bg/90 backdrop-blur-md text-ink hover:bg-maroon hover:text-white transition-colors shadow-sm"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next image"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-hairline bg-bg/90 backdrop-blur-md text-ink hover:bg-maroon hover:text-white transition-colors shadow-sm"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
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

  const carImages = [v.images?.hero, v.images?.cabin, v.images?.exterior].filter(Boolean);

  return (
    <main data-testid={`vehicle-page-${v.slug}`} className="pt-20 md:pt-24">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 mb-4">
        <div className="flex items-center gap-3 text-xs tracking-wider uppercase text-ink-muted">
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 hover:text-maroon transition-colors"
            data-testid="vehicle-back-link"
          >
            <ArrowLeft size={14} strokeWidth={1.8} />
            <span>Back to Fleet</span>
          </Link>
          <span className="text-gold">/</span>
          <span className="text-ink font-medium">{v.name}</span>
        </div>
      </div>

      {/* Hero section */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <span className="text-xs uppercase font-semibold text-maroon tracking-widest">{v.category}</span>
            <h1 className="mt-2 font-display text-4xl sm:text-5xl lg:text-6xl text-ink tracking-tight leading-tight">
              {v.name}
            </h1>
            <p className="mt-4 text-base md:text-lg text-ink-muted leading-relaxed max-w-xl">
              {v.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <CallButton label="Call to book" size="lg" testId="vehicle-call" />
              <WhatsAppButton
                label={`WhatsApp about ${v.name}`}
                size="lg"
                message={waMsg}
                testId="vehicle-whatsapp"
              />
            </div>

            {/* Quick Specs Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-bg-alt/70 rounded-2xl p-5 border border-hairline/60">
              <SpecItem Icon={Users} label="Seats" value={v.seats} />
              <SpecItem Icon={Gauge} label="Transmission" value={v.transmission} />
              <SpecItem Icon={Fuel} label="Fuel" value={v.fuel} />
              <SpecItem Icon={Briefcase} label="Luggage" value={v.luggage} />
            </div>
          </div>

          {/* Swipe Carousel for Car Images */}
          <div className="lg:col-span-5">
            <CarImageCarousel images={carImages} carName={v.name} />
          </div>
        </div>
      </section>

      {/* Story & Highlights */}
      <section
        data-testid="vehicle-story"
        className="mx-auto max-w-[1440px] px-6 md:px-10 py-12 md:py-16 border-t border-hairline/40"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-display text-2xl md:text-3xl text-ink leading-relaxed">
                {v.story}
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.08}>
              <h3 className="text-xs uppercase tracking-widest text-maroon font-semibold mb-4">Highlights</h3>
              <ul className="space-y-3">
                {v.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm text-ink bg-bg-alt/60 px-4 py-3 rounded-xl border border-hairline/60">
                    <span className="h-2 w-2 rounded-full bg-maroon shrink-0" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Pricing Sheet for vehicle */}
      {isChauffeur && chauffeurTable && (
        <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-12 md:py-16 border-t border-hairline/40">
          <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-6">
            Chauffeur Rates & Packages
          </h2>
          <div className="rounded-3xl bg-bg-alt/70 p-6 md:p-8 border border-hairline/80 shadow-sm overflow-hidden">
            <table className="goa-table min-w-[600px]">
              <thead>
                <tr>
                  <th>Package</th>
                  <th>Rate</th>
                  <th>Extra Km</th>
                  <th>Extra Hour</th>
                </tr>
              </thead>
              <tbody>
                {chauffeurTable.rows.map((r, i) => (
                  <tr key={i}>
                    <td className="font-medium">{r.pkg}</td>
                    <td className="price font-display">{r.price}</td>
                    <td>{r.extraKm}</td>
                    <td>{r.extraHr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {isSelfDrive && selfDriveRow && (
        <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-12 md:py-16 border-t border-hairline/40">
          <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-6">
            Self-Drive Rental Charges
          </h2>
          <div className="rounded-3xl bg-bg-alt/70 p-6 md:p-8 border border-hairline/80 shadow-sm overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-xs text-ink-muted uppercase">Manual Rate</p>
              <p className="font-display text-2xl text-maroon mt-1">{selfDriveRow.manual}</p>
            </div>
            <div>
              <p className="text-xs text-ink-muted uppercase">Automatic Rate</p>
              <p className="font-display text-2xl text-maroon mt-1">{selfDriveRow.auto}</p>
            </div>
            <div>
              <p className="text-xs text-ink-muted uppercase">Delivery / Pickup</p>
              <p className="font-display text-lg text-ink mt-1">₹500 / ₹500</p>
            </div>
            <div>
              <p className="text-xs text-ink-muted uppercase">Refundable Deposit</p>
              <p className="font-display text-lg text-ink mt-1">{selfDriveRow.deposit}</p>
            </div>
          </div>
        </section>
      )}

      {/* Related Fleet */}
      {related.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-12 md:py-16 border-t border-hairline/40">
          <h2 className="font-display text-3xl md:text-4xl text-ink tracking-tight mb-8">
            Similar <em className="italic text-maroon font-normal">Vehicles.</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {related.map((rv, i) => (
              <VehicleCard key={rv.slug} vehicle={rv} index={i} testId={`related-${rv.slug}`} />
            ))}
          </div>
        </section>
      )}

      {/* CTA Band */}
      <CTABand
        eyebrow="Ready to book?"
        headline={
          <>
            Book your {v.name}.
            <br />
            <em className="italic text-maroon font-normal">Directly on WhatsApp.</em>
          </>
        }
        sub="Speak directly to our Porvorim team for instant booking confirmation."
        waMsg={waMsg}
        testId="vehicle-cta-band"
      />
    </main>
  );
}

function SpecItem({ Icon, label, value }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1.5 text-xs text-ink-muted">
        <Icon size={14} className="text-maroon shrink-0" />
        <span>{label}</span>
      </div>
      <span className="font-semibold text-sm text-ink mt-1">{value}</span>
    </div>
  );
}
