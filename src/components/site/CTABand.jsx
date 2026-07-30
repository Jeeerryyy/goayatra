import Reveal from "./Reveal";
import { CallButton, WhatsAppButton } from "./CTAButtons";

export default function CTABand({
  eyebrow = "Ready when you are",
  headline = "Tap once. Get on the road.",
  sub = "Real people answer. Real quotes in minutes.",
  callMsg,
  waMsg,
  testId = "cta-band",
}) {
  return (
    <section
      data-testid={testId}
      className="py-16 md:py-24"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10">
        <div className="bg-bg-alt/80 rounded-3xl p-8 md:p-14 border border-hairline/80 shadow-sm grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="font-display text-4xl md:text-5xl leading-[1.05] tracking-tight text-ink">
                {headline}
              </h2>
              <p className="mt-3 text-base md:text-lg text-ink-muted max-w-lg">{sub}</p>
            </Reveal>
          </div>
          <div className="md:col-span-4">
            <Reveal delay={0.1} className="flex flex-col gap-3">
              <CallButton
                label="Call now"
                size="lg"
                testId={`${testId}-call`}
              />
              <WhatsAppButton
                label="WhatsApp us"
                size="lg"
                message={waMsg}
                testId={`${testId}-whatsapp`}
              />
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
