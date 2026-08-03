import { Link } from "react-router-dom";
import { ArrowUpRight, Users, Fuel } from "lucide-react";
import Reveal from "./Reveal";
import ThreeDTiltCard from "./ThreeDTiltCard";

/**
 * Playful & friendly vehicle card matching Brand Guidelines v1.0 with 3D Tilt
 */
export default function VehicleCard({ vehicle, index = 0, testId }) {
  const isSelfDrive = vehicle.fleet?.includes("self-drive");

  return (
    <Reveal delay={index * 0.05}>
      <ThreeDTiltCard maxTilt={8} scale={1.02} className="rounded-[24px]">
        <Link
          to={`/vehicle/${vehicle.slug}`}
          data-testid={testId || `vehicle-card-${vehicle.slug}`}
          className="group block relative brand-card bg-white p-6 rounded-[24px] shadow-card hover:shadow-cardHover border border-[#E8E4DC] transition-all duration-300"
        >
        {/* Badge */}
        {vehicle.serviceTypes?.[0] && (
          <span className="absolute top-9 right-9 z-10 inline-flex items-center px-3 py-1 rounded-badge text-xs font-semibold bg-[#F5F3EE] text-[#C49A3C] border border-[#E8E4DC] shadow-soft">
            {vehicle.serviceTypes[0]}
          </span>
        )}

        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-[20px] bg-[#F5F3EE] mb-5">
          <img
            src={vehicle.images.hero}
            alt={vehicle.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
          />
        </div>

        {/* Meta & Details */}
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-heading text-2xl font-bold text-[#1A1A1A] group-hover:text-[#C49A3C] transition-colors">
              {vehicle.name}
            </h3>
            <p className="mt-0.5 text-xs text-[#6B6B6B] line-clamp-1">
              {vehicle.tagline}
            </p>
          </div>
          <div className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#F5F3EE] text-[#C49A3C] transition-all duration-300 group-hover:bg-[#C49A3C] group-hover:text-white">
            <ArrowUpRight
              size={18}
              strokeWidth={2.5}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </div>
        </div>

        {/* PROMINENT BIG PRICE DISPLAY */}
        <div className="mt-3.5 mb-4 bg-[#FAFAF8] p-3.5 rounded-2xl border border-[#E8E4DC] flex items-baseline justify-between">
          <div>
            <span className="text-[10px] uppercase font-bold text-[#6B6B6B] tracking-wider block">
              {isSelfDrive ? "Starting Daily Rate" : "Base Package Rate"}
            </span>
            <div className="flex items-baseline gap-1 mt-0.5">
              <span className="font-heading text-3xl font-extrabold text-[#1A1A1A] tracking-tight">
                {vehicle.basePrice || vehicle.displayPrice?.split(" ")[1] || vehicle.displayPrice}
              </span>
              <span className="text-xs font-semibold text-[#C49A3C]">
                {vehicle.priceUnit || (isSelfDrive ? "/ day" : "/ 8 hrs")}
              </span>
            </div>
          </div>
          <span className="text-xs font-bold text-[#C49A3C] group-hover:translate-x-1 transition-transform inline-flex items-center gap-0.5">
            Details &rarr;
          </span>
        </div>

        {/* Rate Breakdown Pills */}
        {isSelfDrive && vehicle.selfDriveRates ? (
          <div className="grid grid-cols-2 gap-1.5 text-[11px] font-semibold text-[#4A4A4A]">
            <div className="bg-[#F5F3EE] px-2.5 py-1.5 rounded-lg flex items-center justify-between border border-[#E8E4DC]">
              <span className="text-[#6B6B6B]">Manual</span>
              <span className="font-bold text-[#1A1A1A]">{vehicle.selfDriveRates.manual}</span>
            </div>
            <div className="bg-[#F5F3EE] px-2.5 py-1.5 rounded-lg flex items-center justify-between border border-[#E8E4DC]">
              <span className="text-[#6B6B6B]">Auto</span>
              <span className="font-bold text-[#1A1A1A]">{vehicle.selfDriveRates.auto}</span>
            </div>
            <div className="bg-[#F5F3EE] px-2.5 py-1.5 rounded-lg flex items-center justify-between border border-[#E8E4DC]">
              <span className="text-[#6B6B6B]">Deposit</span>
              <span className="font-bold text-[#C49A3C]">{vehicle.selfDriveRates.deposit}</span>
            </div>
            <div className="bg-[#F5F3EE] px-2.5 py-1.5 rounded-lg flex items-center justify-between border border-[#E8E4DC]">
              <span className="text-[#6B6B6B]">Delivery</span>
              <span className="font-bold text-[#1A1A1A]">₹500</span>
            </div>
          </div>
        ) : (
          <div className="flex flex-wrap gap-1.5 text-[11px] font-semibold text-[#4A4A4A]">
            {vehicle.ratesBreakdown ? (
              vehicle.ratesBreakdown.map((r, k) => (
                <span key={k} className="bg-[#F5F3EE] px-2.5 py-1.5 rounded-lg border border-[#E8E4DC]">
                  {r.label}: <strong className="text-[#1A1A1A]">{r.price}</strong>
                </span>
              ))
            ) : (
              <>
                <span className="bg-[#F5F3EE] px-2.5 py-1.5 rounded-lg border border-[#E8E4DC]">
                  <Users size={12} className="inline text-[#C49A3C] mr-1" /> {vehicle.seats} Seats
                </span>
                <span className="bg-[#F5F3EE] px-2.5 py-1.5 rounded-lg border border-[#E8E4DC]">
                  <Fuel size={12} className="inline text-[#C49A3C] mr-1" /> {vehicle.fuel}
                </span>
              </>
            )}
          </div>
        )}
      </Link>
      </ThreeDTiltCard>
    </Reveal>
  );
}

