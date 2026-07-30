import { motion } from "framer-motion";

/**
 * Slow editorial horizontal marquee (single line).
 * The list is duplicated so the CSS translate can loop seamlessly.
 */
export default function Marquee({ items = [], separator = "·", testId = "marquee" }) {
  const list = [...items, ...items];
  return (
    <motion.section
      data-testid={testId}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
      className="relative overflow-hidden border-y border-hairline bg-bg-alt py-7"
    >
      <div className="marquee-track whitespace-nowrap">
        {list.map((it, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 font-display text-3xl md:text-4xl text-ink"
          >
            <span>{it}</span>
            <span className="text-gold text-xl">{separator}</span>
          </span>
        ))}
      </div>
    </motion.section>
  );
}
