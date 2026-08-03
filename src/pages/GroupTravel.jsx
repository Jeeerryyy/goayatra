import Reveal from "@/components/site/Reveal";
import CTABand from "@/components/site/CTABand";
import { WhatsAppButton, CallButton } from "@/components/site/CTAButtons";
import { groupTravelMetadata } from "@/data/pricing";
import { useAdmin } from "@/context/AdminContext";
import { Clock, Navigation, Moon, Phone, Mail, CheckCircle2, Users, ShieldCheck } from "lucide-react";
import ThreeDBackground from "@/components/site/ThreeDBackground";
import ThreeDTiltCard from "@/components/site/ThreeDTiltCard";

export default function GroupTravel() {
  const { pricing } = useAdmin();

  const tempoData = pricing.tempoTraveller || {
    name: "Tempo Traveller",
    seats: "12 – 17 Seats",
    tagline: "Spacious AC group cruiser ideal for large families & friend groups",
    image: "/images/cars/tempo.png",
    extraKm: "₹40/km",
    extraHr: "₹400/hr",
    rows: [
      { pkg: "8 hours 80 km", price: "₹6,000", extraKm: "40", extraHr: "400" },
      { pkg: "12 hours 120 km", price: "₹9,000", extraKm: "40", extraHr: "400" },
      { pkg: "24 hours 120 km", price: "₹14,000", extraKm: "40", extraHr: "400" },
    ],
  };

  const urbaniaData = pricing.urbania || {
    name: "Force Urbania",
    seats: "13 – 17 Seats (Ultra Luxury)",
    tagline: "Premium luxury van with recliner seating & panoramic windows",
    image: "/images/cars/urbania.png",
    extraKm: "₹50/km",
    extraHr: "₹500/hr",
    rows: [
      { pkg: "8 hours 80 km", price: "₹10,000", extraKm: "50", extraHr: "500" },
      { pkg: "12 hours 120 km", price: "₹14,000", extraKm: "50", extraHr: "500" },
      { pkg: "24 hours 120 km", price: "₹20,000", extraKm: "50", extraHr: "500" },
    ],
  };

  const currentTables = [
    { ...tempoData, id: "tempo-traveller" },
    { ...urbaniaData, id: "force-urbania" },
  ];

  const currentDriverNight = [
    { slot: "08 pm to 12 am", charge: pricing.driverNight?.slot1 || "Rs.500/-" },
    { slot: "08 pm to 06 am", charge: pricing.driverNight?.slot2 || "Rs.1000/-" },
  ];
  return (
    <main data-testid="group-travel-page" className="relative pt-28 md:pt-36 bg-[#FAFAF8] text-[#1A1A1A]">
      {/* 3D Background Transition Animation Effect */}
      <ThreeDBackground className="opacity-75 fixed inset-0 pointer-events-none" />

      {/* Header Banner */}
      <section className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3.5 py-1.5 rounded-badge bg-[#C49A3C] text-white text-xs font-bold uppercase tracking-wider shadow-soft">
                {groupTravelMetadata.heading}
              </span>
              <span className="px-3 py-1 rounded-badge bg-[#F5F3EE] text-[#C49A3C] border border-[#E8E4DC] text-xs font-semibold uppercase tracking-wider">
                {groupTravelMetadata.validity}
              </span>
            </div>
            <Reveal
              as="h1"
              className="font-display font-bold leading-[1.05] tracking-tight text-[#1A1A1A] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Tempo Traveller &amp; <span className="text-[#C49A3C]">Urbania Group Rides</span>
            </Reveal>
            <p className="mt-4 text-base md:text-lg text-[#4A4A4A] font-body leading-relaxed max-w-2xl">
              Dedicated group vehicles with experienced local chauffeurs. Each vehicle features its own individual rate sheet, clear extra kilometer &amp; overtime rules, with zero mixing of car details.
            </p>
          </div>

          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <div className="bg-white p-6 rounded-[24px] shadow-card border border-[#E8E4DC] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#F5F3EE] flex items-center justify-center text-[#C49A3C]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#6B6B6B] uppercase tracking-wider">Official Booking</p>
                    <p className="font-bold text-[#1A1A1A] text-base">GOA YATRA — TTG TRAVELS</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#E8E4DC] space-y-2 text-xs font-semibold text-[#1A1A1A]">
                  <a href={`tel:${groupTravelMetadata.phone}`} className="flex items-center gap-2 hover:text-[#C49A3C] transition-colors">
                    <Phone size={14} className="text-[#C49A3C]" />
                    <span>{groupTravelMetadata.phone}</span>
                  </a>
                  <a href={`mailto:${groupTravelMetadata.email}`} className="flex items-center gap-2 hover:text-[#C49A3C] transition-colors">
                    <Mail size={14} className="text-[#C49A3C]" />
                    <span>{groupTravelMetadata.email}</span>
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Individual Vehicle Pricing Cards Section */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 space-y-16 md:space-y-24 pb-16">
        {currentTables.map((v, idx) => (
          <Reveal key={v.id} delay={idx * 0.1}>
            <ThreeDTiltCard maxTilt={5} scale={1.01} className="rounded-[28px]">
              <div
                data-testid={`group-vehicle-${v.id}`}
                className="bg-white rounded-[28px] border border-[#E8E4DC] shadow-large overflow-hidden"
              >
              {/* Vehicle Header */}
              <div className="bg-[#1A1A1A] text-white p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#C49A3C] text-white font-bold text-xs uppercase tracking-wider">
                    {v.seats}
                  </span>
                  <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mt-2">
                    {v.name}
                  </h2>
                  <p className="text-sm text-white/80 font-body mt-1">
                    {v.tagline}
                  </p>
                </div>
                <div className="flex items-center gap-3">
                  <WhatsAppButton
                    label={`Book ${v.name}`}
                    size="md"
                    message={`Hi Goa Yatra! I would like to book a ${v.name} for group travel.`}
                    className="btn-primary shadow-soft text-xs sm:text-sm"
                  />
                </div>
              </div>

              {/* Body: Left Car Visual + Right Rate Sheet */}
              <div className="p-6 md:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                {/* Vehicle Visual & Specs (5 Cols) */}
                <div className="lg:col-span-5 space-y-6">
                  <div className="relative rounded-[20px] overflow-hidden bg-[#FAFAF8] border border-[#E8E4DC] aspect-[16/10] shadow-soft">
                    <img
                      src={v.image}
                      alt={`${v.name} for group travel in Goa`}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#1A1A1A]/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-badge font-semibold flex items-center gap-1.5">
                      <Users size={14} className="text-[#C49A3C]" />
                      <span>{v.seats}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#1A1A1A] font-body">
                    <li className="flex items-center gap-2 bg-[#FAFAF8] px-3.5 py-2.5 rounded-xl border border-[#E8E4DC]">
                      <CheckCircle2 size={16} className="text-[#C49A3C] shrink-0" />
                      <span>Professional licensed local chauffeur included</span>
                    </li>
                    <li className="flex items-center gap-2 bg-[#FAFAF8] px-3.5 py-2.5 rounded-xl border border-[#E8E4DC]">
                      <CheckCircle2 size={16} className="text-[#C49A3C] shrink-0" />
                      <span>Clean, high-roof AC interior with ample luggage space</span>
                    </li>
                    <li className="flex items-center gap-2 bg-[#FAFAF8] px-3.5 py-2.5 rounded-xl border border-[#E8E4DC]">
                      <CheckCircle2 size={16} className="text-[#C49A3C] shrink-0" />
                      <span>Extra km: <strong className="text-[#C49A3C]">{v.extraKm}</strong> · Extra hour: <strong className="text-[#C49A3C]">{v.extraHr}</strong></span>
                    </li>
                  </ul>
                </div>

                {/* Individual Pricing Table (7 Cols) */}
                <div className="lg:col-span-7">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-heading font-bold text-xl text-[#1A1A1A]">
                      Individual Package Pricing
                    </h3>
                    <span className="text-xs font-semibold text-[#6B6B6B]">
                      Individual vehicle rates only
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-[20px] border border-[#E8E4DC] shadow-soft">
                    <table className="w-full text-left border-collapse font-body">
                      <thead>
                        <tr className="bg-[#1A1A1A] text-white text-xs uppercase tracking-wider font-heading">
                          <th className="p-4 font-bold">Package</th>
                          <th className="p-4 font-bold text-center">Price</th>
                          <th className="p-4 font-bold text-center">Extra km</th>
                          <th className="p-4 font-bold text-center">Extra hour</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#E8E4DC] bg-white text-sm">
                        {v.rows.map((r, rIdx) => (
                          <tr
                            key={rIdx}
                            className="hover:bg-[#F5F3EE] transition-colors"
                          >
                            <td className="p-4 font-bold text-[#1A1A1A]">
                              <div className="flex items-center gap-2">
                                <Clock size={15} className="text-[#C49A3C] shrink-0" />
                                <span>{r.pkg}</span>
                              </div>
                            </td>
                            <td className="p-4 text-center font-heading font-extrabold text-lg text-[#C49A3C]">
                              {r.price}/-
                            </td>
                            <td className="p-4 text-center font-semibold text-[#1A1A1A]">
                              {r.extraKm.startsWith("₹") ? r.extraKm : `₹${r.extraKm}`}
                            </td>
                            <td className="p-4 text-center font-semibold text-[#1A1A1A]">
                              {r.extraHr.startsWith("₹") ? r.extraHr : `₹${r.extraHr}`}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-[#FAFAF8] border border-[#E8E4DC] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-[#4A4A4A]">
                    <span>Valid from 3rd Jan to 28th Dec · Full fuel &amp; driver included</span>
                    <WhatsAppButton
                      label="Select &amp; Book"
                      size="sm"
                      message={`Hi Goa Yatra! I'd like to book the ${v.name} group package.`}
                      className="btn-primary text-xs py-2 px-4 rounded-lg w-full sm:w-auto justify-center"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ThreeDTiltCard>
        </Reveal>
        ))}

        {/* Compulsory Driver Night Overtime Section */}
        <Reveal>
          <div data-testid="group-driver-night" className="bg-white rounded-[28px] border border-[#E8E4DC] shadow-large p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#E8E4DC]">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-badge bg-[#C49A3C]/10 text-[#C49A3C] font-bold text-xs uppercase tracking-wider mb-2">
                  <Moon size={14} />
                  Compulsory Policy
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-[#1A1A1A] tracking-tight">
                  Driver night – overtime pay (compulsory)
                </h3>
                <p className="mt-1 text-sm text-[#4A4A4A] font-body">
                  Overtime allowance applicable for trips operating past 8:00 pm.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {currentDriverNight.map((r, i) => (
                <div
                  key={i}
                  className="bg-[#FAFAF8] rounded-[20px] p-6 border border-[#E8E4DC] shadow-soft flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#C49A3C]/15 text-[#C49A3C] flex items-center justify-center font-bold">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-[#6B6B6B]">Time Slot</span>
                      <p className="font-heading font-bold text-lg text-[#1A1A1A]">{r.slot}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase font-bold text-[#6B6B6B] block">Overtime</span>
                    <span className="font-heading font-extrabold text-2xl text-[#C49A3C]">{r.charge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Contact Banner */}
        <Reveal>
          <div className="bg-[#1A1A1A] text-white rounded-[28px] p-8 md:p-12 shadow-large flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-bold text-[#C49A3C] tracking-wider bg-white/10 px-3 py-1 rounded-full">
                GOA YATRA — TTG TRAVELS
              </span>
              <h3 className="font-display font-bold text-3xl md:text-4xl mt-3">
                Need customized group itinerary or instant quote?
              </h3>
              <p className="text-white/80 font-body text-sm mt-2 max-w-xl">
                Contact our reservation team directly by phone or email. We ensure individual vehicle allocation for your travel needs.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href={`tel:${groupTravelMetadata.phone}`}
                className="btn-secondary px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 bg-white text-[#1A1A1A] hover:bg-[#F5F3EE] transition-colors"
              >
                <Phone size={18} />
                <span>Call {groupTravelMetadata.phone}</span>
              </a>
              <WhatsAppButton
                label="WhatsApp Quote"
                size="lg"
                message="Hi Goa Yatra! I am looking for group travel rates for Tempo Traveller / Urbania."
                className="btn-primary px-6 py-3.5 rounded-xl font-bold"
              />
            </div>
          </div>
        </Reveal>
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

