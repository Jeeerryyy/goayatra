/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        // Brand palette (locked)
        bg: {
          DEFAULT: "#FAF7F2",
          alt: "#F1ECE3",
        },
        ink: {
          DEFAULT: "#1B1B1B",
          muted: "#5A5450",
          inverse: "#FAF7F2",
        },
        maroon: {
          DEFAULT: "#5C1A1A",
          deep: "#490F0D",
        },
        gold: "#B08D57",
        whatsapp: "#25D366",
        hairline: "#E4DED3",

        // Shadcn tokens kept for compatibility
        background: "#FAF7F2",
        foreground: "#1B1B1B",
        border: "#E4DED3",
        input: "#E4DED3",
        ring: "#5C1A1A",
        card: { DEFAULT: "#FAF7F2", foreground: "#1B1B1B" },
        popover: { DEFAULT: "#FAF7F2", foreground: "#1B1B1B" },
        primary: { DEFAULT: "#5C1A1A", foreground: "#FAF7F2" },
        secondary: { DEFAULT: "#F1ECE3", foreground: "#1B1B1B" },
        muted: { DEFAULT: "#F1ECE3", foreground: "#5A5450" },
        accent: { DEFAULT: "#F1ECE3", foreground: "#1B1B1B" },
        destructive: { DEFAULT: "#5C1A1A", foreground: "#FAF7F2" },
      },
      fontFamily: {
        display: ["'Playfair Display'", "serif"],
        body: ["Inter", "sans-serif"],
      },
      borderRadius: {
        lg: "8px",
        md: "6px",
        sm: "4px",
      },
      letterSpacing: {
        "wide-ux": "0.2em",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 45s linear infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
