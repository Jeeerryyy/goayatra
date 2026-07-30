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
    <main data-testid="fleet-page" className="pt-24 md:pt-28">
      {/* Header */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-12 md:pb-16">
        <div className="max-w-3xl">
          <h1 className="font-display text-4xl md:text-6xl text-ink tracking-tight leading-tight">
            All Fleet & <em className="italic text-maroon font-normal">Rental Packages.</em>
          </h1>
          <p className="mt-4 text-base md:text-lg text-ink-muted leading-relaxed">
            Choose from self-drive hatchbacks, SUVs, luxury cars, or chauffeur-driven vehicles & Tempo Travellers across Goa.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="mt-10 flex flex-wrap gap-2">
          {[
            { id: "all", label: "All Vehicles (18)" },
            { id: "self-drive", label: "Self-Drive (13)" },
            { id: "chauffeur", label: "Cars with Driver (5)" },
            { id: "group", label: "Group Travel" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setFilter(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === tab.id
                  ? "bg-maroon text-white shadow-sm"
                  : "bg-bg-alt text-ink hover:bg-maroon/10"
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
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24 border-t border-hairline/40">
        <div className="mb-12">
          <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight">
            Complete <em className="italic text-maroon font-normal">Rate Cards & Charges.</em>
          </h2>
          <p className="mt-2 text-base text-ink-muted max-w-lg">
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
              waMessage={`Hi Goa Yatra, I'd like to enquire about the ${t.name} package.`}
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
            waMessage="Hi Goa Yatra, I'd like to check self-drive availability."
            testId="fleet-self-drive-rates"
          />
        </div>
      </section>

      {/* CTA */}
      <CTABand
        eyebrow="Ready when you are"
        headline={
          <>
            Select your car.
            <br />
            <em className="italic text-maroon font-normal">Get moving in Goa.</em>
          </>
        }
        sub="Speak directly to our Porvorim office for immediate quotes and instant dispatch."
        waMsg="Hi Goa Yatra, I'm looking at the Fleet page and need a car quote."
        testId="fleet-cta-band"
      />
    </main>
  );
}
