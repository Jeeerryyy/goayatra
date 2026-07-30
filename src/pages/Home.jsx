import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import VehicleCard from "@/components/site/VehicleCard";
import PricingTable from "@/components/site/PricingTable";
import ReviewsWall from "@/components/site/ReviewsWall";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { selfDriveVehicles, chauffeurVehicles } from "@/data/vehicles";
import { chauffeurTables } from "@/data/pricing";

export default function Home() {
  // Show top featured vehicles on home page
  const featuredCars = [
    ...selfDriveVehicles.slice(0, 4),
    ...chauffeurVehicles.slice(0, 2),
  ];

  const featuredRates = chauffeurTables.slice(0, 2);

  return (
    <main data-testid="home-page">
      {/* 1. Hero */}
      <Hero />

      {/* Marquee Ticker */}
      <Marquee
        items={[
          "Chauffeur ·",
          "Self-Drive ·",
          "Tempo Traveller ·",
          "Urbania ·",
          "Airport pickups ·",
          "Outstation ·",
          "Weddings ·",
          "Beach runs",
        ]}
        separator=""
        testId="home-marquee"
      />

      {/* 2. Available Cars & Travels (Fleet Showcase) */}
      <section className="py-16 md:py-24 mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight">
              Available <em className="italic text-maroon font-normal">Cars & Travels.</em>
            </h2>
            <p className="mt-2 text-base text-ink-muted max-w-md">
              Top self-drive rentals & chauffeur-driven cars ready across Goa.
            </p>
          </div>
          <Link
            to="/self-drive"
            className="inline-flex items-center gap-2 text-sm font-semibold text-maroon hover:underline"
          >
            <span>View Full Fleet (18+ Vehicles)</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredCars.map((v, i) => (
            <VehicleCard key={v.slug} vehicle={v} index={i} testId={`home-car-${v.slug}`} />
          ))}
        </div>
      </section>

      {/* 3. Charges & Rental Rates */}
      <section className="py-16 md:py-24 mx-auto max-w-[1440px] px-6 md:px-10 border-t border-hairline/60">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <h2 className="font-display text-4xl md:text-5xl text-ink tracking-tight">
              Transparent <em className="italic text-maroon font-normal">Charges & Packages.</em>
            </h2>
            <p className="mt-2 text-base text-ink-muted max-w-md">
              No hidden fees. Flat rates for 8hr, 12hr & outstation packages.
            </p>
          </div>
          <Link
            to="/cars-with-driver"
            className="inline-flex items-center gap-2 text-sm font-semibold text-maroon hover:underline"
          >
            <span>View All Rate Sheets</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="space-y-12">
          {featuredRates.map((t, i) => (
            <PricingTable
              key={t.id}
              name={t.name}
              tagline={t.tagline}
              rows={t.rows}
              waMessage={`Hi Goa Yatra, I'd like to enquire about the ${t.name} package.`}
              index={`0${i + 1}`}
              testId={`home-pricing-${t.id}`}
            />
          ))}
        </div>
      </section>

      {/* 4. Customer Reviews Wall */}
      <ReviewsWall />

      {/* 5. Direct Call/WhatsApp CTA */}
      <CTABand
        eyebrow="Ready when you are"
        headline={
          <>
            One tap.
            <br />
            <em className="italic text-maroon font-normal">On the road.</em>
          </>
        }
        sub="No booking engine. No forms. Speak to a real person in Goa and get a real quote in minutes."
        waMsg="Hi Goa Yatra, I saw your site — I'd like a quote."
        testId="home-cta-band"
      />
    </main>
  );
}
