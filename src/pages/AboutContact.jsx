import * as React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Reveal from "@/components/site/Reveal";
import CTABand from "@/components/site/CTABand";
import ReviewsWall from "@/components/site/ReviewsWall";
import { CallButton, WhatsAppButton } from "@/components/site/CTAButtons";
import { faqs } from "@/data/pricing";
import { BRAND, telLink } from "@/lib/site";
import { MapPin, Phone, Mail, Clock, Instagram } from "lucide-react";

export default function AboutContact() {
  return (
    <main data-testid="about-page" className="pt-24 md:pt-28">
      {/* Editorial header */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-8">
            <Reveal
              as="h1"
              className="mt-4 font-display leading-[1.02] tracking-tight text-ink text-6xl md:text-7xl lg:text-[7vw]"
            >
              A family business, <em className="italic text-maroon font-normal">run from Porvorim.</em>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <div className="border-t border-gold pt-4 text-sm">
                <p className="overline">Proprietor</p>
                <p className="mt-2 font-display text-2xl text-ink">{BRAND.owner}</p>
                <p className="mt-2 text-ink-muted">Goa Yatra · TTG Travels</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Mini-bio */}
      <section
        data-testid="about-bio"
        className="border-t border-hairline mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10"
      >
        <div className="md:col-span-4">
          <div className="relative aspect-[4/5] overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1759677956964-e1f8a791c956?auto=format&fit=crop&w=900&q=80"
              alt="Modern white villa and palm — Porvorim"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <span className="pointer-events-none absolute inset-2 border border-bg/80" />
            <span className="pointer-events-none absolute inset-6 border-t border-gold" />
          </div>
          <div className="mt-3 flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-ink-muted">
            <span>Fig. 02 — the base</span>
            <span>Chogam Rd · Porvorim</span>
          </div>
        </div>
        <div className="md:col-span-8">
          <Reveal>
            <p className="overline">Since day one</p>
            <p className="mt-4 font-display text-3xl md:text-4xl leading-[1.15] text-ink">
              Goa Yatra is the direct-to-customer rental arm of TTG Travels — chauffeur-driven cars,
              self-drive rentals and group vehicles, all dispatched from a single base on
              Chogam Road in Porvorim.
            </p>
            <p className="mt-8 text-lg leading-relaxed text-ink-muted max-w-2xl">
              Every enquiry is answered by a real person, not a bot. Every car is checked before
              it leaves the yard. And every driver is local — the kind who knows which side-road
              beats the highway at 5 pm, and where the best fish curry is served after a long day
              of driving.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Contact block + map */}
      <section
        data-testid="about-contact-block"
        className="border-t border-hairline mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10"
      >
        <div className="md:col-span-5 space-y-8">
          <Reveal>
            <p className="overline">Direct contact</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-ink">
              Speak to <em className="italic text-maroon font-normal">Yuvraj</em> — same number for Call and WhatsApp.
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="space-y-5 border-t border-hairline pt-8">
            <ContactRow Icon={MapPin} label="Address" value={BRAND.address} />
            <ContactRow
              Icon={Phone}
              label="Phone / WhatsApp"
              value={
                <a href={telLink} className="hover-underline text-ink">
                  {BRAND.phone}
                </a>
              }
            />
            <ContactRow
              Icon={Mail}
              label="Email"
              value={
                <a
                  href={`mailto:${BRAND.email}`}
                  className="hover-underline text-ink"
                >
                  {BRAND.email}
                </a>
              }
            />
            <ContactRow Icon={Clock} label="Hours" value={BRAND.hours} />
            <ContactRow
              Icon={Instagram}
              label="Instagram"
              value={
                <a
                  href={BRAND.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover-underline text-ink"
                >
                  @goa.yatra.ttg
                </a>
              }
            />
          </Reveal>

          <Reveal delay={0.16} className="flex flex-wrap gap-3 pt-4">
            <CallButton label="Call now" size="lg" testId="about-call" />
            <WhatsAppButton
              label="WhatsApp us"
              size="lg"
              message="Hi Goa Yatra, I found you via the site — could you help me with a booking?"
              testId="about-whatsapp"
            />
          </Reveal>
        </div>

        {/* Google Map iframe (keyless embed) */}
        <div className="md:col-span-7">
          <Reveal delay={0.12}>
            <div className="relative w-full aspect-[4/3] md:aspect-[5/4] border border-hairline">
              <iframe
                title="Goa Yatra — Chogam Road, Porvorim map"
                data-testid="about-map"
                src="https://www.google.com/maps?q=Chogam+Road+Porvorim+Bardez+Goa&output=embed"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0, filter: "grayscale(0.15) contrast(0.95)" }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
              <span className="pointer-events-none absolute inset-0 border border-bg/60" />
            </div>
            <div className="mt-3 flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-ink-muted">
              <span>Fig. 03 — the pin</span>
              <span>Chogam Road · Porvorim · Goa</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reviews wall — inserted before FAQ so trust signal lands before pricing questions */}
      <ReviewsWall />

      {/* FAQ */}
      <section
        data-testid="about-faq"
        className="border-t border-hairline mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <p className="overline">FAQ</p>
            <h2 className="mt-4 font-display text-4xl md:text-5xl leading-tight text-ink">
              Six answers to <em className="italic text-maroon font-normal">the usual questions.</em>
            </h2>
            <p className="mt-6 text-sm text-ink-muted">
              Anything else, tap Call or WhatsApp — we reply within the hour.
            </p>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <Accordion type="single" collapsible className="border-t border-hairline">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-hairline"
                    data-testid={`faq-${i}`}
                  >
                    <AccordionTrigger className="text-left font-display text-xl md:text-2xl text-ink hover:no-underline py-6">
                      <span className="flex items-center gap-6">
                        <span className="chapter-num shrink-0">
                          {String(i + 1).padStart(2, "0")}
                        </span>
                        <span>{f.q}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-ink-muted text-[15px] leading-relaxed pb-6 pl-16">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </Reveal>
          </div>
        </div>
      </section>

      <CTABand
        eyebrow="Talk to a real person"
        headline={
          <>
            One tap. <em className="italic text-maroon font-normal">One drive.</em>
          </>
        }
        sub="Call or WhatsApp Yuvraj at Goa Yatra — a real quote inside a few minutes."
        waMsg="Hi Yuvraj, I found Goa Yatra via the site — I'd like to enquire."
        testId="about-cta-band"
      />
    </main>
  );
}

function ContactRow({ Icon, label, value }) {
  return (
    <div className="grid grid-cols-12 gap-4 items-start border-b border-hairline pb-5">
      <div className="col-span-1 pt-1">
        <Icon size={16} strokeWidth={1.6} className="text-gold" />
      </div>
      <div className="col-span-3">
        <p className="overline">{label}</p>
      </div>
      <div className="col-span-8 text-ink text-[15px] leading-relaxed">
        {value}
      </div>
    </div>
  );
}
