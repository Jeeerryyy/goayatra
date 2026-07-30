import { motion } from "framer-motion";
import { fadeUp } from "@/lib/motion";

/**
 * Scroll-reveal wrapper. Opacity + Y only. No scale/tilt/shadow-pop.
 */
export default function Reveal({
  children,
  as: Tag = "div",
  className = "",
  delay = 0,
  amount = 0.25,
  y = 32,
  once = true,
  ...rest
}) {
  const MotionTag = motion[Tag] || motion.div;
  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay }}
      {...rest}
    >
      {children}
    </MotionTag>
  );
}

export { fadeUp };
