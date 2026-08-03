import { motion } from "framer-motion";

/**
 * Continuous infinite horizontal moving marquee ticker strip.
 */
export default function Marquee({ items = [], separator = "·", testId = "marquee" }) {
  // Duplicate list so translate can loop seamlessly
  const list = [...items, ...items, ...items, ...items];

  return (
    <section
      data-testid={testId}
      className="relative overflow-hidden bg-[#F5F3EE] border-y border-[#E8E4DC] py-5 select-none"
    >
      <motion.div
        className="flex whitespace-nowrap gap-8 w-max"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 30,
        }}
      >
        {list.map((it, i) => (
          <span
            key={i}
            className="inline-flex items-center gap-8 font-heading font-semibold text-2xl md:text-3xl text-[#1A1A1A]"
          >
            <span>{it}</span>
            {separator && <span className="text-[#C49A3C] text-xl">{separator}</span>}
          </span>
        ))}
      </motion.div>
    </section>
  );
}
