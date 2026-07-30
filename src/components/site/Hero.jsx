import { motion } from "framer-motion";
import { CallButton, WhatsAppButton } from "./CTAButtons";
import { ease, maskLine } from "@/lib/motion";
import { BRAND } from "@/lib/site";

/**
 * Signature on-load hero:
 * - Metadata overline slides in
 * - Massive editorial headline reveals line-by-line, mask-clipped
 * - Right-column spotlight photograph fades in with subtle parallax hint
 * - Persistent Call + WhatsApp CTAs
 */
export default function Hero() {
  const lines = ["Cars with drivers,", "and drivers who", "actually know Goa."];

  return (
    <section
      data-testid="hero"
      className="relative pt-24 md:pt-28 pb-10 md:pb-14 border-b border-hairline"
    >
      <div className="mx-auto max-w-[1440px] px-6 md:px-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
        {/* Copy column */}
        <div className="lg:col-span-8">
          <h1 className="font-display text-ink tracking-tight leading-[1.04] text-[9vw] sm:text-[6.5vw] lg:text-[4.8vw]">
            {lines.map((ln, i) => (
              <span key={i} className="mask-line">
                <motion.span
                  className="block"
                  variants={maskLine}
                  initial="hidden"
                  animate="visible"
                  custom={i}
                >
                  {i === 1 ? (
                    <span>
                      and drivers who
                    </span>
                  ) : i === 2 ? (
                    <span>
                      actually{" "}
                      <span className="italic text-maroon">know</span>{" "}
                      Goa.
                    </span>
                  ) : (
                    ln
                  )}
                </motion.span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.7 }}
            className="mt-6 max-w-xl text-base md:text-lg text-ink leading-relaxed"
          >
            {BRAND.positioning} No booking engine, no forms, no waiting. Tap
            <span className="text-maroon"> Call </span>
            or
            <span className="text-maroon"> WhatsApp </span>— a real person
            answers, a real quote follows.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.9 }}
            className="mt-6 flex flex-wrap gap-3"
          >
            <CallButton label="Call +91 7249216623" size="lg" testId="hero-call" />
            <WhatsAppButton
              label="WhatsApp us"
              size="lg"
              message="Hi Goa Yatra, I'd like a quick quote for a car."
              testId="hero-whatsapp"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, ease, delay: 1.1 }}
            className="mt-8 grid grid-cols-3 max-w-md text-[11px] tracking-[0.22em] uppercase text-ink-muted"
          >
            <div className="border-t border-gold pt-3">
              <div className="text-ink font-display text-2xl leading-none">24/7</div>
              <div className="mt-2">Dispatch</div>
            </div>
            <div className="border-t border-hairline pt-3 pl-4">
              <div className="text-ink font-display text-2xl leading-none">13+</div>
              <div className="mt-2">Vehicles</div>
            </div>
            <div className="border-t border-hairline pt-3 pl-4">
              <div className="text-ink font-display text-2xl leading-none">26</div>
              <div className="mt-2">Seat max</div>
            </div>
          </motion.div>
        </div>

        {/* Spotlight photograph */}
        <SpotlightImage />
      </div>
    </section>
  );
}

function SpotlightImage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.4, ease, delay: 0.4 }}
      className="lg:col-span-4 relative"
    >
      <div className="relative aspect-[3/4] w-full overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1638217989553-e6d87c341f68?auto=format&fit=crop&w=1200&q=80"
          alt="Palm-fringed Goa coast"
          className="absolute inset-0 h-full w-full object-cover"
          initial={{ scale: 1.08, y: 20 }}
          animate={{ scale: 1, y: 0 }}
          transition={{ duration: 2.2, ease }}
        />
        {/* Clipped frame — thin gold hairline signature */}
        <span className="pointer-events-none absolute inset-2 border border-bg/80" />
        <span className="pointer-events-none absolute inset-6 border-t border-gold" />
      </div>
      <div className="mt-3 flex items-center justify-between text-[10px] tracking-[0.24em] uppercase text-ink-muted">
        <span>Fig. 01 — the coast</span>
        <span>N 15.55° · E 73.83°</span>
      </div>
    </motion.div>
  );
}
