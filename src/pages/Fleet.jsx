import { useState } from "react";
import VehicleCard from "@/components/site/VehicleCard";
import PricingTable from "@/components/site/PricingTable";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { selfDriveVehicles, chauffeurVehicles, vehicles } from "@/data/vehicles";
import { chauffeurTables, selfDriveRows } from "@/data/pricing";

export default function Fleet() {
  const [filter, setFilter] = useState("all");

  const displayedVehicles =
    filter === "self-drive"
      ? selfDriveVehicles
      : filter === "chauffeur"
      ? chauffeurVehicles
      : filter === "group"
      ? vehicles.filter((v) => v.category.toLowerCase().includes("group") || v.seats.includes("12") || v.seats.includes("26"))
      : vehicles;

  return (
    <main data-testid="fleet-page" className="pt-28 md:pt-36 bg-[#FFF8F2] text-[#493129]">
      {/* Header */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-12 md:pb-16">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-badge bg-[#FFF3EB] text-[#8B597B] border border-[#F0DED2] text-xs font-semibold uppercase tracking-wider mb-3">
            Explore Goa Fleet
          </div>
          <h1 className="font-display text-4xl md:text-6xl font-bold text-[#493129] tracking-tight leading-tight">
            All Fleet &amp; <span className="text-[#8B597B]">Rental Packages</span>
          </h1>
          <p className="mt-4 text-base md:text-lg text-[#6D4F47] font-body leading-relaxed">
            Choose from self-drive hatchbacks, SUVs, luxury convertibles, or chauffeur-driven vehicles &amp; Tempo Travellers across Goa.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap gap-3">
          {[
            { id: "all", label: "All Vehicles (18)" },
            { id: "self-drive", label: "Self-Drive (13)" },
            { id: "chauffeur", label: "Cars with Driver (5)" },
            { id: "group", label: "Group Travel" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-6 py-3 rounded-badge text-sm font-semibold transition-all duration-300 shadow-soft ${
                filter === tab.id
                  ? "bg-[#493129] text-white"
                  : "bg-white text-[#493129] hover:bg-[#FFF3EB] border border-[#F0DED2]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </section>

      {/* Fleet Cards Grid */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedVehicles.map((v, i) => (
            <VehicleCard key={v.slug} vehicle={v} index={i} testId={`fleet-tile-${v.slug}`} />
          ))}
        </div>
      </section>

      {/* Detailed Charges & Rate Sheets */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24 border-t border-[#F0DED2]">
        <div className="mb-12">
          <span className="px-3 py-1 rounded-badge bg-[#FFF3EB] text-[#8B597B] border border-[#F0DED2] font-semibold text-xs uppercase tracking-wider">
            Pricing Sheet
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#493129] tracking-tight mt-2">
            Complete <span className="text-[#8B597B]">Rate Cards &amp; Charges</span>
          </h2>
          <p className="mt-2 text-base text-[#6D4F47] font-body max-w-lg">
            Flat transparent rates. No hidden fees or surprise surcharges.
          </p>
        </div>

        {/* Chauffeur Rate Tables */}
        <div className="space-y-12">
          {chauffeurTables.map((t) => (
            <PricingTable
              key={t.id}
              name={t.name}
              tagline={t.tagline}
              rows={t.rows}
              waMessage={`Hi Goa Yatra! I'd like to enquire about the ${t.name} package.`}
              testId={`fleet-pricing-${t.id}`}
            />
          ))}
        </div>

        {/* Self Drive Daily Rates Table */}
        <div className="mt-16">
          <PricingTable
            name="Self-Drive Daily Rate Sheet"
            tagline="Calculated from 9:00 am to 9:00 am (24hr cycle). Refundable security deposit applies."
            columns={["Vehicle", "Manual Rate", "Automatic Rate", "Delivery", "Return Pickup", "Security Deposit"]}
            rows={selfDriveRows}
            keys={["veh", "manual", "auto", "delivery", "pickup", "deposit"]}
            waMessage="Hi Goa Yatra! I'd like to check self-drive availability."
            testId="fleet-self-drive-rates"
          />
        </div>
      </section>

      {/* CTA */}
      <CTABand
        eyebrow="Your Trip Awaits"
        headline="Select your ride &amp; reserve your journey in Goa."
        sub="Connect directly with our team for instant quotes &amp; quick reservations."
        waMsg="Hi Goa Yatra! I'm looking at the Fleet page and need a car quote."
        testId="fleet-cta-band"
      />
    </main>
  );
}

