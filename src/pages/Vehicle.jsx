import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ChevronLeft, ChevronRight, Users, Fuel, Snowflake, Gauge, Briefcase, CheckCircle2 } from "lucide-react";
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
    <div className="relative rounded-[24px] overflow-hidden bg-white border border-[#E8E4DC] shadow-large aspect-[4/3] md:aspect-[16/11]">
      <AnimatePresence mode="wait">
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${carName} photo ${currentIndex + 1}`}
          initial={{ opacity: 0, scale: 1.02 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
        {/* Pagination Indicators */}
        <div className="flex items-center gap-2 bg-[#1A1A1A]/80 backdrop-blur-md px-3 py-1.5 rounded-badge border border-white/20">
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "w-6 bg-[#C49A3C]" : "w-2 bg-white/40 hover:bg-white/70"
              }`}
            />
          ))}
        </div>

        {/* Prev/Next Buttons */}
        <div className="flex items-center gap-2">
          <button
            onClick={prevSlide}
            aria-label="Previous image"
            className="inline-flex h-9 w-9 items-center justify-center rounded-btn border border-[#E8E4DC] bg-white text-[#1A1A1A] hover:bg-[#C49A3C] hover:text-white transition-colors shadow-soft"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            onClick={nextSlide}
            aria-label="Next image"
            className="inline-flex h-9 w-9 items-center justify-center rounded-btn border border-[#E8E4DC] bg-white text-[#1A1A1A] hover:bg-[#C49A3C] hover:text-white transition-colors shadow-soft"
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

  const waMsg = `Hi Goa Yatra! I'd like to enquire about the ${v.name}.`;

  const rawCarImages = [v.images?.hero, v.images?.cabin, v.images?.exterior].filter(Boolean);
  const carImages = Array.from(new Set(rawCarImages));

  return (
    <main data-testid={`vehicle-page-${v.slug}`} className="pt-28 md:pt-36 bg-[#FAFAF8] text-[#1A1A1A]">
      {/* Breadcrumb */}
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 mb-6">
        <div className="flex items-center gap-3 text-xs uppercase font-semibold text-[#6B6B6B] font-body">
          <Link
            to="/fleet"
            className="inline-flex items-center gap-2 hover:text-[#C49A3C] transition-colors"
            data-testid="vehicle-back-link"
          >
            <ArrowLeft size={14} strokeWidth={2} />
            <span>Back to Fleet</span>
          </Link>
          <span className="text-[#C49A3C]">/</span>
          <span className="text-[#1A1A1A] font-bold">{v.name}</span>
        </div>
      </div>

      {/* Hero section */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-12 md:pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          <div className="lg:col-span-7">
            <span className="px-3 py-1 rounded-badge bg-[#F5F3EE] text-[#C49A3C] border border-[#E8E4DC] font-semibold text-xs uppercase tracking-wider">
              {v.category}
            </span>
            <h1 className="mt-3 font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-[#1A1A1A] tracking-tight leading-tight">
              {v.name}
            </h1>
            <p className="mt-4 text-lg text-[#4A4A4A] font-body leading-relaxed max-w-xl">
              {v.tagline}
            </p>

            <div className="mt-6 flex flex-wrap gap-4">
              <WhatsAppButton
                label={`Book ${v.name} on WhatsApp`}
                size="lg"
                message={waMsg}
                testId="vehicle-whatsapp"
                className="btn-primary shadow-large"
              />
              <CallButton label="Call to Book" size="lg" testId="vehicle-call" className="btn-secondary" />
            </div>

            {/* Quick Specs Grid */}
            <div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-4 bg-white rounded-[20px] p-5 border border-[#E8E4DC] shadow-soft">
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
        className="mx-auto max-w-[1440px] px-6 md:px-10 py-12 md:py-16 border-t border-[#E8E4DC]"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-7">
            <Reveal>
              <h2 className="font-display font-medium text-2xl md:text-3xl text-[#1A1A1A] leading-relaxed">
                {v.story}
              </h2>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={0.08}>
              <h3 className="text-xs uppercase font-semibold tracking-wider text-[#C49A3C] mb-4">Highlights &amp; Features</h3>
              <ul className="space-y-3">
                {v.highlights.map((h, i) => (
                  <li key={i} className="flex items-center gap-3 text-sm font-semibold text-[#1A1A1A] bg-white px-4 py-3 rounded-[16px] border border-[#E8E4DC] shadow-soft font-body">
                    <CheckCircle2 size={18} className="text-[#C49A3C] shrink-0" />
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
        <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-12 md:py-16 border-t border-[#E8E4DC]">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A1A1A] tracking-tight mb-6">
            Chauffeur Rates &amp; <span className="text-[#C49A3C]">Packages</span>
          </h2>
          <div className="rounded-[24px] bg-white p-6 md:p-8 border border-[#E8E4DC] shadow-card overflow-hidden">
            <table className="goa-table min-w-[600px]">
              <thead>
                <tr>
                  <th className="font-heading font-bold text-[#1A1A1A]">Package</th>
                  <th className="font-heading font-bold text-[#1A1A1A]">Rate</th>
                  <th className="font-heading font-bold text-[#1A1A1A]">Extra Km</th>
                  <th className="font-heading font-bold text-[#1A1A1A]">Extra Hour</th>
                </tr>
              </thead>
              <tbody>
                {chauffeurTable.rows.map((r, i) => (
                  <tr key={i} className="hover:bg-[#F5F3EE] transition-colors">
                    <td className="font-bold text-[#1A1A1A] font-body">{r.pkg}</td>
                    <td className="price font-heading font-bold text-[#1A1A1A] text-2xl">{r.price}</td>
                    <td className="text-[#4A4A4A] font-body">{r.extraKm}</td>
                    <td className="text-[#4A4A4A] font-body">{r.extraHr}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      )}

      {isSelfDrive && selfDriveRow && (
        <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-12 md:py-16 border-t border-[#E8E4DC]">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A1A1A] tracking-tight mb-6">
            Self-Drive Rental <span className="text-[#C49A3C]">Charges</span>
          </h2>
          <div className="rounded-[24px] bg-white p-6 md:p-8 border border-[#E8E4DC] shadow-card overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            <div>
              <p className="text-xs font-semibold text-[#6B6B6B] uppercase">Manual Rate</p>
              <p className="font-heading font-bold text-3xl text-[#1A1A1A] mt-1">{selfDriveRow.manual}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#6B6B6B] uppercase">Automatic Rate</p>
              <p className="font-heading font-bold text-3xl text-[#1A1A1A] mt-1">{selfDriveRow.auto}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#6B6B6B] uppercase">Delivery / Pickup</p>
              <p className="font-heading font-bold text-xl text-[#1A1A1A] mt-1">₹500 / ₹500</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#6B6B6B] uppercase">Refundable Deposit</p>
              <p className="font-heading font-bold text-xl text-[#1A1A1A] mt-1">{selfDriveRow.deposit}</p>
            </div>
          </div>
        </section>
      )}

      {/* Related Fleet */}
      {related.length > 0 && (
        <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-12 md:py-16 border-t border-[#E8E4DC]">
          <h2 className="font-display font-bold text-3xl md:text-4xl text-[#1A1A1A] tracking-tight mb-8">
            Similar <span className="text-[#C49A3C]">Rides in Goa</span>
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
        eyebrow="Direct Reservation"
        headline={`Book your ${v.name} today.`}
        sub="Speak directly with our team for instant vehicle confirmation."
        waMsg={waMsg}
        testId="vehicle-cta-band"
      />
    </main>
  );
}

function SpecItem({ Icon, label, value }) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-1.5 text-xs text-[#6B6B6B] font-body">
        <Icon size={16} className="text-[#C49A3C] shrink-0" />
        <span>{label}</span>
      </div>
      <span className="font-heading font-bold text-base text-[#1A1A1A] mt-1">{value}</span>
    </div>
  );
}

