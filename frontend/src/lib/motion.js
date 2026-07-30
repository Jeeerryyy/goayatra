// Shared framer-motion variants — opacity + y only (per brand rules).
export const ease = [0.22, 1, 0.36, 1];

export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, ease, delay: i * 0.08 },
  }),
};

export const maskLine = {
  hidden: { y: "110%" },
  visible: (i = 0) => ({
    y: "0%",
    transition: { duration: 1.0, ease, delay: 0.1 + i * 0.09 },
  }),
};

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 1.2, ease } },
};

export const staggerParent = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 },
  },
};
