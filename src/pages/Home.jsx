import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Smile, Shield, Compass, Sparkles, Heart, Zap, ChevronDown, Phone, MapPin, Camera, ShieldCheck, Key, Waves } from "lucide-react";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import VehicleCard from "@/components/site/VehicleCard";
import PricingTable from "@/components/site/PricingTable";
import ReviewsWall from "@/components/site/ReviewsWall";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { selfDriveVehicles, chauffeurVehicles } from "@/data/vehicles";
import { chauffeurTables } from "@/data/pricing";
import { BRAND } from "@/lib/site";

export default function Home() {
  const [openFaq, setOpenFaq] = useState(0);

  const featuredCars = [
    ...selfDriveVehicles.slice(0, 4),
    ...chauffeurVehicles.slice(0, 2),
  ];

  const featuredRates = chauffeurTables.slice(0, 2);

  const brandValues = [
    { icon: Compass, title: "Coastal Explorations", desc: "Your Goa adventure starts here. Clean, well-maintained vehicles ready for coastal runs." },
    { icon: ShieldCheck, title: "Trust & Transparency", desc: "100% verified fleet, zero hidden fees, and clear pricing guaranteed." },
    { icon: Key, title: "Complete Freedom", desc: "Choose self-drive flexibility or relax with local experienced chauffeurs." },
    { icon: Zap, title: "Seamless Dispatch", desc: "No complex forms or delays. Reach out directly via call or WhatsApp for instant service." },
    { icon: Waves, title: "Custom Itineraries", desc: "From airport transfers to group Tempo Travellers and outstation journeys." },
    { icon: Heart, title: "Dedicated Support", desc: "Personalized service and assistance throughout your stay in Goa." },
  ];

  const galleryImages = [
    { url: "/images/cars/thar.png", caption: "Mahindra Thar 4x4 Coastal Drive" },
    { url: "/images/cars/crysta.png", caption: "Innova Crysta Family Sunset Cruise" },
    { url: "https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=1000&q=80", caption: "Scenic Coastline Beach Road" },
    { url: "/images/cars/tempo.png", caption: "Group Excursion in Tempo Traveller" },
  ];

  const faqs = [
    { q: "How do I book a car with Goa Yatra?", a: "Simply tap 'Book on WhatsApp' or call us at +91 7249216623. Share your dates and preferred car, and we will confirm your reservation promptly." },
    { q: "Do you offer airport pickup and drop-off?", a: "Yes, we provide 24/7 airport transfers across both Dabolim Airport (GOI) and Mopa Airport (GOX)." },
    { q: "What documents are required for self-drive car rentals?", a: "You need a valid Driving License and an Original ID proof (Aadhaar Card or Passport)." },
    { q: "Are there any hidden fees or extra charges?", a: "Zero hidden fees. All package terms, extra km rates, and hour limits are detailed transparently before booking." },
  ];

  return (
    <main data-testid="home-page" className="text-[#493129] bg-[#FFF8F2]">
      {/* 1. Hero */}
      <Hero />

      {/* Marquee Ticker */}
      <Marquee
        items={[
          "Coastal Drives ·",
          "Self Drive Fleet ·",
          "Chauffeur Services ·",
          "Airport Transfers ·",
          "Tempo Traveller ·",
          "Sunset Drives ·",
          "Premium Experience ·",
        ]}
        separator=""
        testId="home-marquee"
      />

      {/* 2. Popular Cars */}
      <section className="py-12 sm:py-16 md:py-24 mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-badge bg-[#FFF3EB] text-[#8B597B] border border-[#F0DED2] text-xs font-semibold uppercase tracking-wider mb-2">
              Popular Rides
            </div>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#493129] tracking-tight">
              Popular <span className="text-[#8B597B]">Cars &amp; Rentals</span>
            </h2>
            <p className="mt-2 text-sm sm:text-base text-[#6D4F47] max-w-md font-body">
              Explore Goa with our top-rated self-drive convertibles, SUVs, and chauffeur cars.
            </p>
          </div>
          <Link
            to="/fleet"
            className="btn btn-secondary inline-flex items-center justify-center gap-2 text-sm w-full sm:w-auto"
          >
            <span>View Full Fleet (18+ Cars)</span>
            <ArrowUpRight size={18} />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featuredCars.map((v, i) => (
            <VehicleCard key={v.slug} vehicle={v} index={i} testId={`home-car-${v.slug}`} />
          ))}
        </div>
      </section>

      {/* 3. Tour Packages & Pricing */}
      <section className="py-12 sm:py-16 md:py-24 bg-[#FFF3EB] border-y border-[#F0DED2]">
        <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-badge bg-white text-[#8B597B] border border-[#F0DED2] text-xs font-semibold uppercase tracking-wider mb-2">
                Flat Rates
              </div>
              <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#493129] tracking-tight">
                Tour Packages &amp; <span className="text-[#8B597B]">Transparent Rates</span>
              </h2>
              <p className="mt-2 text-sm sm:text-base text-[#6D4F47] max-w-md font-body">
                No hidden costs. Flat rates for 8hr, 12hr, and outstation trips.
              </p>
            </div>
            <Link
              to="/fleet"
              className="btn btn-primary inline-flex items-center justify-center gap-2 text-sm w-full sm:w-auto"
            >
              <span>Explore All Rates</span>
              <ArrowUpRight size={18} />
            </Link>
          </div>

          <div className="space-y-8 sm:space-y-12">
            {featuredRates.map((t, i) => (
              <PricingTable
                key={t.id}
                name={t.name}
                tagline={t.tagline}
                rows={t.rows}
                waMessage={`Hi Goa Yatra! I'd like to enquire about the ${t.name} package.`}
                index={`0${i + 1}`}
                testId={`home-pricing-${t.id}`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* 4. Why Choose Us (Brand Values) */}
      <section className="py-16 sm:py-20 md:py-28 mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <span className="px-4 py-1.5 rounded-badge bg-[#FFF3EB] text-[#8B597B] border border-[#F0DED2] font-semibold text-xs uppercase tracking-wider">
            Why Goa Yatra
          </span>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[#493129] mt-3">
            More Than Just Rentals. <br className="hidden sm:inline" /> We Are Your <span className="text-[#8B597B]">Goa Travel Partner</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-[#6D4F47] font-body">
            Delivering refined road trip experiences with clean vehicles and personalized service.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {brandValues.map((v, i) => {
            const IconComponent = v.icon;
            return (
              <Reveal key={i} delay={i * 0.05}>
                <div className="brand-card bg-white p-8 rounded-[24px] shadow-card hover:shadow-cardHover border border-[#F0DED2] h-full flex flex-col justify-between">
                  <div>
                    <div className="h-12 w-12 rounded-xl bg-[#FFF3EB] text-[#8B597B] flex items-center justify-center border border-[#F0DED2]">
                      <IconComponent size={24} />
                    </div>
                    <h3 className="font-heading font-bold text-2xl text-[#493129] mt-5 mb-2">
                      {v.title}
                    </h3>
                    <p className="text-sm text-[#6D4F47] font-body leading-relaxed">
                      {v.desc}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-[#F0DED2] flex items-center text-xs font-semibold text-[#8B597B]">
                    <span>Goa Yatra Guarantee &check;</span>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* 5. Customer Testimonials */}
      <ReviewsWall />

      {/* 6. Goa Vibes Photo Gallery */}
      <section className="py-16 md:py-24 bg-[#FFF3EB] border-y border-[#F0DED2]">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="flex items-center justify-between mb-12">
            <div>
              <span className="px-3 py-1 rounded-badge bg-white text-[#8B597B] border border-[#F0DED2] font-semibold text-xs uppercase tracking-wider">
                Memory Gallery
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold text-[#493129] mt-2">
                Goa Road Trip <span className="text-[#8B597B]">Memories</span>
              </h2>
            </div>
            <a
              href={BRAND.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 text-sm font-semibold text-[#8B597B] hover:text-[#493129]"
            >
              <span>Follow @goa.yatra.ttg</span>
              <ArrowUpRight size={18} />
            </a>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {galleryImages.map((img, i) => (
              <Reveal key={i} delay={i * 0.05}>
                <div className="group relative aspect-[4/3] rounded-[24px] overflow-hidden shadow-card border border-[#F0DED2]">
                  <img
                    src={img.url}
                    alt={img.caption}
                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#493129]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                    <p className="text-white font-heading text-lg font-semibold">
                      {img.caption}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* 7. FAQ Section */}
      <section className="py-20 md:py-28 mx-auto max-w-4xl px-6">
        <div className="text-center mb-14">
          <span className="px-3 py-1 rounded-badge bg-[#FFF3EB] text-[#8B597B] border border-[#F0DED2] font-semibold text-xs uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-[#493129] mt-2">
            Frequently Asked <span className="text-[#8B597B]">Questions</span>
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="brand-card bg-white p-6 rounded-[20px] shadow-card border border-[#F0DED2] cursor-pointer"
              onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="font-heading text-xl font-bold text-[#493129]">
                  {faq.q}
                </h3>
                <ChevronDown
                  size={20}
                  className={`text-[#8B597B] transition-transform duration-300 shrink-0 ${
                    openFaq === idx ? "rotate-180" : ""
                  }`}
                />
              </div>
              {openFaq === idx && (
                <p className="mt-3 text-sm text-[#6D4F47] font-body leading-relaxed border-t border-[#F0DED2] pt-3">
                  {faq.a}
                </p>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* 8. Direct Contact CTA Band */}
      <CTABand
        eyebrow="Explore Goa Together"
        headline="Book Today. Reserve Your Journey."
        sub="Connect directly with our team for transparent bookings and instant vehicle confirmation."
        waMsg="Hi Goa Yatra! I'd like to book a ride."
        testId="home-cta-band"
      />
    </main>
  );
}

