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
import { MapPin, Phone, Mail, Clock, Instagram, Heart, ShieldCheck, Sun, Compass } from "lucide-react";

export default function AboutContact() {
  return (
    <main data-testid="about-page" className="pt-28 md:pt-36 bg-[#FFF8F2] text-[#493129]">
      {/* Editorial Header */}
      <section className="mx-auto max-w-[1440px] px-6 md:px-10 pb-16 md:pb-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
          <div className="md:col-span-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-badge bg-[#FFF3EB] text-[#8B597B] border border-[#F0DED2] text-xs font-semibold uppercase tracking-wider mb-3">
              Your Travel Partner in Goa
            </div>
            <Reveal
              as="h1"
              className="font-display font-bold leading-[1.05] tracking-tight text-[#493129] text-5xl md:text-6xl lg:text-7xl"
            >
              Making Every Goa Trip <span className="text-[#8B597B]">Simple, Refined & Unforgettable</span>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1}>
              <div className="brand-card bg-white p-6 rounded-[24px] shadow-card border border-[#F0DED2]">
                <p className="text-xs font-semibold text-[#8B597B] uppercase tracking-wider">Proprietor & Founder</p>
                <p className="mt-1 font-heading text-2xl font-bold text-[#493129]">{BRAND.owner}</p>
                <p className="mt-1 text-sm text-[#6D4F47] font-body">Goa Yatra — TTG Travels</p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Brand Values & Story */}
      <section
        data-testid="about-bio"
        className="border-t border-[#F0DED2] mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10"
      >
        <div className="md:col-span-5">
          <div className="relative aspect-[4/5] rounded-[24px] overflow-hidden shadow-large border-4 border-white">
            <img
              src="https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?auto=format&fit=crop&w=900&q=80"
              alt="Goa beach sunset road trip"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#493129]/80 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 text-white">
              <span className="bg-[#8B597B] text-white px-3 py-1 rounded-badge text-xs font-semibold shadow-soft">
                Good Vibes Only
              </span>
              <p className="mt-2 font-heading text-xl font-bold">Porvorim Base · Goa</p>
            </div>
          </div>
        </div>

        <div className="md:col-span-7 flex flex-col justify-center">
          <Reveal>
            <span className="text-xs font-semibold text-[#8B597B] uppercase tracking-wider">Our Story & Mission</span>
            <h2 className="mt-2 font-display text-3xl md:text-4xl font-bold text-[#493129] leading-snug">
              Goa Yatra delivers direct-to-customer car rentals & group travels dispatched from Porvorim.
            </h2>
            <p className="mt-6 text-base md:text-lg leading-relaxed text-[#6D4F47] font-body">
              We are your reliable, dedicated travel partners who understand Goa inside out. From self-drive convertibles and airport transfers to 26-seater Tempo Travellers for group journeys, we ensure you get on the road with transparent service and zero hassle.
            </p>

            <div className="mt-8 p-6 rounded-[20px] bg-white border border-[#F0DED2] shadow-card grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <h4 className="font-heading font-bold text-lg text-[#493129] flex items-center gap-2">
                  <Heart size={18} className="fill-[#8B597B] text-[#8B597B]" /> Our Mission
                </h4>
                <p className="mt-1 text-xs text-[#6D4F47] font-body">
                  To become Goa's most trusted travel brand by delivering memorable road trips with reliable service.
                </p>
              </div>
              <div>
                <h4 className="font-heading font-bold text-lg text-[#8B597B] flex items-center gap-2">
                  <Sun size={18} /> Brand Promise
                </h4>
                <p className="mt-1 text-xs text-[#6D4F47] font-body">
                  "We make every Goa trip simple, affordable, and unforgettable."
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Contact Block + Google Map */}
      <section
        data-testid="about-contact-block"
        className="border-t border-[#F0DED2] mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24 grid grid-cols-1 md:grid-cols-12 gap-10"
      >
        <div className="md:col-span-5 space-y-8">
          <Reveal>
            <span className="text-xs font-semibold text-[#8B597B] uppercase tracking-wider">Get In Touch</span>
            <h2 className="mt-2 font-display text-4xl md:text-5xl font-bold text-[#493129] leading-tight">
              Speak directly with <span className="text-[#8B597B]">Yuvraj</span> for instant quotes
            </h2>
          </Reveal>

          <Reveal delay={0.08} className="space-y-4 border-t border-[#F0DED2] pt-6">
            <ContactRow Icon={MapPin} label="Address" value={BRAND.address} />
            <ContactRow
              Icon={Phone}
              label="Phone / WhatsApp"
              value={
                <a href={telLink} className="font-bold text-[#493129] hover:text-[#8B597B] transition-colors">
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
                  className="font-bold text-[#493129] hover:text-[#8B597B] transition-colors"
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
                  className="font-bold text-[#8B597B] hover:text-[#493129]"
                >
                  @goa.yatra.ttg
                </a>
              }
            />
          </Reveal>

          <Reveal delay={0.16} className="flex flex-wrap gap-4 pt-4">
            <CallButton label="Call Now" size="lg" testId="about-call" className="btn-secondary" />
            <WhatsAppButton
              label="Book on WhatsApp"
              size="lg"
              message="Hi Yuvraj! Let's explore Goa together. Could you help me with a car booking?"
              testId="about-whatsapp"
              className="btn-primary shadow-large"
            />
          </Reveal>
        </div>

        {/* Google Map iframe */}
        <div className="md:col-span-7">
          <Reveal delay={0.12}>
            <div className="relative w-full aspect-[4/3] md:aspect-[5/4] rounded-[24px] overflow-hidden shadow-large border-4 border-white">
              <iframe
                title="Goa Yatra — Chogam Road, Porvorim map"
                data-testid="about-map"
                src="https://www.google.com/maps?q=Chogam+Road+Porvorim+Bardez+Goa&output=embed"
                className="absolute inset-0 h-full w-full"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-semibold text-[#856A63]">
              <span>Main Hub Base</span>
              <span>Chogam Road · Porvorim · Goa</span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Reviews Wall */}
      <ReviewsWall />

      {/* FAQ Section */}
      <section
        data-testid="about-faq"
        className="border-t border-[#F0DED2] mx-auto max-w-[1440px] px-6 md:px-10 py-16 md:py-24"
      >
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
          <div className="md:col-span-4">
            <span className="px-3 py-1 rounded-badge bg-[#FFF3EB] text-[#8B597B] border border-[#F0DED2] font-semibold text-xs uppercase tracking-wider">
              Quick Answers
            </span>
            <h2 className="mt-3 font-display text-4xl md:text-5xl font-bold text-[#493129] leading-tight">
              Frequently Asked <span className="text-[#8B597B]">Questions</span>
            </h2>
            <p className="mt-4 text-sm text-[#6D4F47] font-body">
              Have questions? Call or WhatsApp us anytime — we reply promptly.
            </p>
          </div>
          <div className="md:col-span-8">
            <Reveal>
              <Accordion type="single" collapsible className="border-t border-[#F0DED2]">
                {faqs.map((f, i) => (
                  <AccordionItem
                    key={i}
                    value={`item-${i}`}
                    className="border-b border-[#F0DED2]"
                    data-testid={`faq-${i}`}
                  >
                    <AccordionTrigger className="text-left font-heading font-bold text-xl md:text-2xl text-[#493129] hover:no-underline py-6">
                      <span className="flex items-center gap-4">
                        <span className="text-[#8B597B] font-bold text-lg">
                          0{i + 1}
                        </span>
                        <span>{f.q}</span>
                      </span>
                    </AccordionTrigger>
                    <AccordionContent className="text-[#6D4F47] font-body text-base leading-relaxed pb-6 pl-10">
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
        eyebrow="Direct Reservations"
        headline="Book Today. Reserve Your Journey."
        sub="Call or WhatsApp Yuvraj at Goa Yatra — your reliable travel partner in Goa."
        waMsg="Hi Yuvraj! I'd like to book a ride with Goa Yatra."
        testId="about-cta-band"
      />
    </main>
  );
}

function ContactRow({ Icon, label, value }) {
  return (
    <div className="grid grid-cols-12 gap-4 items-center border-b border-[#F0DED2] pb-4">
      <div className="col-span-1">
        <Icon size={18} className="text-[#8B597B]" />
      </div>
      <div className="col-span-3">
        <p className="text-xs font-semibold text-[#856A63] uppercase tracking-wider">{label}</p>
      </div>
      <div className="col-span-8 text-[#493129] text-sm font-body">
        {value}
      </div>
    </div>
  );
}
