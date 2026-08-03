import Reveal from "./Reveal";
import { CallButton, WhatsAppButton } from "./CTAButtons";
import { Sparkles, Compass } from "lucide-react";

export default function CTABand({
  eyebrow = "Ready to explore Goa?",
  headline = "Tap once. Start your Goa road trip!",
  sub = "No forms, no corporate waiting lines. Real friendly local travel buddies in Goa answer in seconds.",
  callMsg,
  waMsg,
  testId = "cta-band",
}) {
  return (
    <section
      data-testid={testId}
      className="py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 md:px-10">
        <div className="bg-[#1A1A1A] text-white rounded-[20px] sm:rounded-[24px] p-6 sm:p-8 md:p-14 border border-[#4A4A4A] shadow-large grid grid-cols-1 md:grid-cols-12 gap-6 sm:gap-8 items-center relative overflow-hidden">
          {/* Background Accents */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#E8D5A3]/10 rounded-full filter blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#C49A3C]/15 rounded-full filter blur-3xl pointer-events-none" />

          <div className="md:col-span-8 z-10">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-badge bg-white/10 text-[#F5EEDF] text-xs font-bold uppercase tracking-wider mb-3 sm:mb-4">
                <Compass size={14} className="text-[#E8D5A3]" /> {eyebrow}
              </div>
              <h2 className="font-display text-2xl sm:text-4xl md:text-5xl font-bold leading-[1.1] sm:leading-[1.08] tracking-tight text-white">
                {headline}
              </h2>
              <p className="mt-2 sm:mt-3 text-sm sm:text-base md:text-lg text-[#F5EEDF]/90 font-body max-w-lg">{sub}</p>
            </Reveal>
          </div>
          <div className="md:col-span-4 z-10">
            <Reveal delay={0.1} className="flex flex-col gap-3">
              <WhatsAppButton
                label="Book on WhatsApp"
                size="md"
                message={waMsg || "Hi Goa Yatra! Let's explore Goa together."}
                testId={`${testId}-whatsapp`}
                className="btn-accent w-full justify-center text-sm sm:text-base font-semibold py-3 px-6 rounded-xl shadow-soft"
              />
              <CallButton
                label="Call +91 7249216623"
                size="md"
                testId={`${testId}-call`}
                className="btn-secondary w-full justify-center text-sm sm:text-base font-semibold py-3 px-6 rounded-xl shadow-soft"
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

