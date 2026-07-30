import Reveal from "./Reveal";
import { CallButton, WhatsAppButton } from "./CTAButtons";

/**
 * Closing CTA band — quiet, editorial. NO colored banner block;
 * uses off-white background with a maroon rule and inline call-to-action.
 */
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
      className="border-t border-hairline py-24 md:py-32"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
        <div className="md:col-span-2 flex md:items-end">
          <span className="h-px w-16 bg-gold" />
        </div>
        <div className="md:col-span-7">
          <Reveal>
            <p className="overline">{eyebrow}</p>
            <h2 className="mt-4 font-display text-5xl md:text-6xl leading-[1.02] tracking-tight text-ink">
              {headline}
            </h2>
            <p className="mt-6 text-lg text-ink-muted max-w-lg">{sub}</p>
          </Reveal>
        </div>
        <div className="md:col-span-3">
          <Reveal delay={0.1} className="flex flex-col gap-3 md:items-start">
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
    </section>
  );
}
