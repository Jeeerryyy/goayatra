import Reveal from "@/components/site/Reveal";
import CTABand from "@/components/site/CTABand";
import { WhatsAppButton, CallButton } from "@/components/site/CTAButtons";
import { groupTables, driverNight, groupTravelMetadata } from "@/data/pricing";
import { Clock, Navigation, Moon, Phone, Mail, CheckCircle2, Users, ShieldCheck } from "lucide-react";
import ThreeDBackground from "@/components/site/ThreeDBackground";
import ThreeDTiltCard from "@/components/site/ThreeDTiltCard";

export default function GroupTravel() {
  return (
    <main data-testid="group-travel-page" className="relative pt-28 md:pt-36 bg-[#FFF8F2] text-[#493129]">
      {/* 3D Background Transition Animation Effect */}
      <ThreeDBackground className="opacity-75 fixed inset-0 pointer-events-none" />

      {/* Header Banner */}
      <section className="relative z-10 mx-auto max-w-[1440px] px-6 md:px-10 pb-12 md:pb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <div className="flex flex-wrap items-center gap-2 mb-4">
              <span className="px-3.5 py-1.5 rounded-badge bg-[#8B597B] text-white text-xs font-bold uppercase tracking-wider shadow-soft">
                {groupTravelMetadata.heading}
              </span>
              <span className="px-3 py-1 rounded-badge bg-[#FFF3EB] text-[#8B597B] border border-[#F0DED2] text-xs font-semibold uppercase tracking-wider">
                {groupTravelMetadata.validity}
              </span>
            </div>
            <Reveal
              as="h1"
              className="font-display font-bold leading-[1.05] tracking-tight text-[#493129] text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
            >
              Tempo Traveller &amp; <span className="text-[#8B597B]">Urbania Group Rides</span>
            </Reveal>
            <p className="mt-4 text-base md:text-lg text-[#6D4F47] font-body leading-relaxed max-w-2xl">
              Dedicated group vehicles with experienced local chauffeurs. Each vehicle features its own individual rate sheet, clear extra kilometer &amp; overtime rules, with zero mixing of car details.
            </p>
          </div>

          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <div className="bg-white p-6 rounded-[24px] shadow-card border border-[#F0DED2] space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-full bg-[#FFF3EB] flex items-center justify-center text-[#8B597B]">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#856A63] uppercase tracking-wider">Official Booking</p>
                    <p className="font-bold text-[#493129] text-base">GOA YATRA — TTG TRAVELS</p>
                  </div>
                </div>

                <div className="pt-3 border-t border-[#F0DED2] space-y-2 text-xs font-semibold text-[#493129]">
                  <a href={`tel:${groupTravelMetadata.phone}`} className="flex items-center gap-2 hover:text-[#8B597B] transition-colors">
                    <Phone size={14} className="text-[#8B597B]" />
                    <span>{groupTravelMetadata.phone}</span>
                  </a>
                  <a href={`mailto:${groupTravelMetadata.email}`} className="flex items-center gap-2 hover:text-[#8B597B] transition-colors">
                    <Mail size={14} className="text-[#8B597B]" />
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
        {groupTables.map((v, idx) => (
          <Reveal key={v.id} delay={idx * 0.1}>
            <ThreeDTiltCard maxTilt={5} scale={1.01} className="rounded-[28px]">
              <div
                data-testid={`group-vehicle-${v.id}`}
                className="bg-white rounded-[28px] border border-[#F0DED2] shadow-large overflow-hidden"
              >
              {/* Vehicle Header */}
              <div className="bg-[#493129] text-white p-6 md:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="px-3 py-1 rounded-full bg-[#8B597B] text-white font-bold text-xs uppercase tracking-wider">
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
                  <div className="relative rounded-[20px] overflow-hidden bg-[#FFF8F2] border border-[#F0DED2] aspect-[16/10] shadow-soft">
                    <img
                      src={v.image}
                      alt={`${v.name} for group travel in Goa`}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-3 left-3 bg-[#493129]/90 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-badge font-semibold flex items-center gap-1.5">
                      <Users size={14} className="text-[#8B597B]" />
                      <span>{v.seats}</span>
                    </div>
                  </div>

                  <ul className="space-y-2.5 text-xs sm:text-sm font-semibold text-[#493129] font-body">
                    <li className="flex items-center gap-2 bg-[#FFF8F2] px-3.5 py-2.5 rounded-xl border border-[#F0DED2]">
                      <CheckCircle2 size={16} className="text-[#8B597B] shrink-0" />
                      <span>Professional licensed local chauffeur included</span>
                    </li>
                    <li className="flex items-center gap-2 bg-[#FFF8F2] px-3.5 py-2.5 rounded-xl border border-[#F0DED2]">
                      <CheckCircle2 size={16} className="text-[#8B597B] shrink-0" />
                      <span>Clean, high-roof AC interior with ample luggage space</span>
                    </li>
                    <li className="flex items-center gap-2 bg-[#FFF8F2] px-3.5 py-2.5 rounded-xl border border-[#F0DED2]">
                      <CheckCircle2 size={16} className="text-[#8B597B] shrink-0" />
                      <span>Extra km: <strong className="text-[#8B597B]">{v.extraKm}</strong> · Extra hour: <strong className="text-[#8B597B]">{v.extraHr}</strong></span>
                    </li>
                  </ul>
                </div>

                {/* Individual Pricing Table (7 Cols) */}
                <div className="lg:col-span-7">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-heading font-bold text-xl text-[#493129]">
                      Individual Package Pricing
                    </h3>
                    <span className="text-xs font-semibold text-[#856A63]">
                      Individual vehicle rates only
                    </span>
                  </div>

                  <div className="overflow-x-auto rounded-[20px] border border-[#F0DED2] shadow-soft">
                    <table className="w-full text-left border-collapse font-body">
                      <thead>
                        <tr className="bg-[#493129] text-white text-xs uppercase tracking-wider font-heading">
                          <th className="p-4 font-bold">Package</th>
                          <th className="p-4 font-bold text-center">Price</th>
                          <th className="p-4 font-bold text-center">Extra km</th>
                          <th className="p-4 font-bold text-center">Extra hour</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-[#F0DED2] bg-white text-sm">
                        {v.rows.map((r, rIdx) => (
                          <tr
                            key={rIdx}
                            className="hover:bg-[#FFF3EB] transition-colors"
                          >
                            <td className="p-4 font-bold text-[#493129]">
                              <div className="flex items-center gap-2">
                                <Clock size={15} className="text-[#8B597B] shrink-0" />
                                <span>{r.pkg}</span>
                              </div>
                            </td>
                            <td className="p-4 text-center font-heading font-extrabold text-lg text-[#8B597B]">
                              {r.price}/-
                            </td>
                            <td className="p-4 text-center font-semibold text-[#493129]">
                              {r.extraKm.startsWith("₹") ? r.extraKm : `₹${r.extraKm}`}
                            </td>
                            <td className="p-4 text-center font-semibold text-[#493129]">
                              {r.extraHr.startsWith("₹") ? r.extraHr : `₹${r.extraHr}`}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-4 p-4 rounded-2xl bg-[#FFF8F2] border border-[#F0DED2] flex items-center justify-between text-xs text-[#6D4F47]">
                    <span>Valid from 3rd Jan to 28th Dec · Full fuel &amp; driver included</span>
                    <WhatsAppButton
                      label="Select &amp; Book"
                      size="sm"
                      message={`Hi Goa Yatra! I'd like to book the ${v.name} group package.`}
                      className="btn-primary text-xs py-1.5 px-3 rounded-lg"
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
          <div data-testid="group-driver-night" className="bg-white rounded-[28px] border border-[#F0DED2] shadow-large p-8 md:p-10">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-[#F0DED2]">
              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-badge bg-[#8B597B]/10 text-[#8B597B] font-bold text-xs uppercase tracking-wider mb-2">
                  <Moon size={14} />
                  Compulsory Policy
                </div>
                <h3 className="font-display text-3xl md:text-4xl font-bold text-[#493129] tracking-tight">
                  Driver night – overtime pay (compulsory)
                </h3>
                <p className="mt-1 text-sm text-[#6D4F47] font-body">
                  Overtime allowance applicable for trips operating past 8:00 pm.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              {driverNight.map((r, i) => (
                <div
                  key={i}
                  className="bg-[#FFF8F2] rounded-[20px] p-6 border border-[#F0DED2] shadow-soft flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-[#8B597B]/15 text-[#8B597B] flex items-center justify-center font-bold">
                      <Clock size={18} />
                    </div>
                    <div>
                      <span className="text-xs uppercase font-bold text-[#856A63]">Time Slot</span>
                      <p className="font-heading font-bold text-lg text-[#493129]">{r.slot}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="text-xs uppercase font-bold text-[#856A63] block">Overtime</span>
                    <span className="font-heading font-extrabold text-2xl text-[#8B597B]">{r.charge}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Contact Banner */}
        <Reveal>
          <div className="bg-[#493129] text-white rounded-[28px] p-8 md:p-12 shadow-large flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xs uppercase font-bold text-[#8B597B] tracking-wider bg-white/10 px-3 py-1 rounded-full">
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
                className="btn-secondary px-6 py-3.5 rounded-xl font-bold flex items-center justify-center gap-2 bg-white text-[#493129] hover:bg-[#FFF3EB] transition-colors"
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

