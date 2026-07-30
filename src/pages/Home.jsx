import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Hero from "@/components/site/Hero";
import Marquee from "@/components/site/Marquee";
import ManifestoChapters from "@/components/site/ManifestoChapters";
import CTABand from "@/components/site/CTABand";
import Reveal from "@/components/site/Reveal";
import { IconSedan, IconSUV, IconVan, IconBus } from "@/components/site/VehicleIcons";
import { BRAND, telLink } from "@/lib/site";

const services = [
  {
    to: "/cars-with-driver",
    n: "01",
    title: "Cars with Driver",
    sub: "Sedan to Hycross, city & outstation",
    body: "Chauffeur-driven Sedan, Ertiga, Innova, Crysta and Hycross — priced per 8 / 12 / 24 hour packages.",
    Icon: IconSedan,
    testId: "service-chauffeur",
  },
  {
    to: "/self-drive",
    n: "02",
    title: "Self-Drive Rentals",
    sub: "Swift to Fortuner Legender",
    body: "Manual and automatic — thirteen vehicles from Swift and Baleno through Thar, Fortuner and Fortuner Legender.",
    Icon: IconSUV,
    testId: "service-selfdrive",
  },
  {
    to: "/group-travel",
    n: "03",
    title: "Group Travel",
    sub: "Tempo Traveller & Urbania — 12 to 26 seats",
    body: "Weddings, tours, corporate runs. Comfortable, air-conditioned, driver-included group transport.",
    Icon: IconBus,
    testId: "service-group",
  },
];

export default function Home() {
  return (
    <main data-testid="home-page">
      <Hero />

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

      {/* Service cards */}
      <section className="border-t border-hairline py-24 md:py-32">
        <div className="mx-auto max-w-[1440px] px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16">
            <div className="md:col-span-4">
              <p className="overline">The line-up</p>
            </div>
            <div className="md:col-span-8">
              <Reveal as="h2" className="font-display text-5xl md:text-6xl leading-[1.05] tracking-tight text-ink">
                Three ways to move around Goa — <em className="italic text-maroon font-normal">one number</em> to book them all.
              </Reveal>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.08}>
                <Link
                  to={s.to}
                  data-testid={s.testId}
                  className="group block bg-bg-alt border-t-2 border-gold border-x border-b border-hairline p-8 md:p-10 h-full transition-colors hover:bg-[#EDE6D9]"
                >
                  <div className="flex items-center justify-between">
                    <span className="chapter-num">{s.n}</span>
                    <ArrowUpRight
                      size={20}
                      className="text-maroon transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div className="mt-14 text-maroon">
                    <s.Icon size={72} />
                  </div>
                  <h3 className="mt-10 font-display text-3xl text-ink leading-tight">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink-muted tracking-wide">
                    {s.sub}
                  </p>
                  <div className="mt-6 h-px w-full bg-hairline" />
                  <p className="mt-6 text-[15px] leading-relaxed text-ink">
                    {s.body}
                  </p>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ManifestoChapters />

      {/* Trust strip */}
      <section
        data-testid="trust-strip"
        className="border-t border-hairline py-20"
      >
        <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-4 gap-8">
          <TrustItem eyebrow="Base" line="Chogam Road, Porvorim" sub="Bardez, Goa – 403501" />
          <TrustItem
            eyebrow="Phone"
            line={
              <a href={telLink} className="hover-underline">
                {BRAND.phone}
              </a>
            }
            sub="Call, WhatsApp — same number"
          />
          <TrustItem
            eyebrow="Email"
            line={
              <a href={`mailto:${BRAND.email}`} className="hover-underline">
                {BRAND.email}
              </a>
            }
            sub="Reply usually within the hour"
          />
          <TrustItem eyebrow="Hours" line="Open 24 / 7" sub="Airport arrivals welcome" />
        </div>
      </section>

      <CTABand
        eyebrow="Ready when you are"
        headline={
          <>
            One tap.
            <br />
            <em className="italic text-maroon font-normal">On the road.</em>
          </>
        }
        sub="No booking engine. No forms. Speak to a real person in Porvorim and get a real quote in minutes."
        waMsg="Hi Goa Yatra, I saw your site — I'd like a quote."
        testId="home-cta-band"
      />
    </main>
  );
}

function TrustItem({ eyebrow, line, sub }) {
  return (
    <Reveal className="border-t border-hairline pt-6">
      <p className="overline">{eyebrow}</p>
      <p className="mt-3 font-display text-2xl text-ink leading-snug">{line}</p>
      <p className="mt-2 text-sm text-ink-muted">{sub}</p>
    </Reveal>
  );
}
