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
        // Sunset Color Palette v2.0
        brown: {
          DEFAULT: "#493129",
          hover: "#3C2721",
          light: "#6D4F47",
          muted: "#856A63",
        },
        plum: {
          DEFAULT: "#8B597B",
          hover: "#754A66",
        },
        pink: {
          DEFAULT: "#EFA3A0",
        },
        peach: {
          DEFAULT: "#F8DCC7",
        },
        
        // Backward-compatible semantic aliases mapped to Sunset Palette
        navy: {
          DEFAULT: "#493129",
          deep: "#3C2721",
          light: "#6D4F47",
        },
        orange: {
          DEFAULT: "#493129",
          hover: "#3C2721",
          soft: "#FFF3EB",
        },
        yellow: {
          DEFAULT: "#8B597B",
          soft: "#F8DCC7",
        },
        teal: {
          DEFAULT: "#8B597B",
          soft: "#FFF3EB",
        },
        sand: {
          DEFAULT: "#FFF8F2",
          muted: "#FFF3EB",
        },
        
        // Semantic mappings
        bg: {
          DEFAULT: "#FFF8F2",
          alt: "#FFF3EB",
          card: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#493129",
          muted: "#856A63",
          inverse: "#FFFFFF",
        },
        whatsapp: "#493129",
        hairline: "#F0DED2",

        // Shadcn compatibility tokens
        background: "#FFF8F2",
        foreground: "#493129",
        border: "#F0DED2",
        input: "#F0DED2",
        ring: "#8B597B",
        card: { DEFAULT: "#FFFFFF", foreground: "#493129" },
        popover: { DEFAULT: "#FFFFFF", foreground: "#493129" },
        primary: { DEFAULT: "#493129", foreground: "#FFFFFF" },
        secondary: { DEFAULT: "#8B597B", foreground: "#FFFFFF" },
        muted: { DEFAULT: "#FFF3EB", foreground: "#856A63" },
        accent: { DEFAULT: "#EFA3A0", foreground: "#493129" },
        destructive: { DEFAULT: "#8B597B", foreground: "#FFFFFF" },
      },
      fontFamily: {
        display: ["'Playfair Display'", "'Plus Jakarta Sans'", "sans-serif"],
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Plus Jakarta Sans'", "sans-serif"],
      },
      borderRadius: {
        card: "24px",
        button: "14px",
        btn: "14px",
        img: "24px",
        badge: "9999px",
        lg: "20px",
        md: "14px",
        sm: "8px",
      },
      boxShadow: {
        soft: "0 8px 24px rgba(73,49,41,0.06)",
        large: "0 20px 40px rgba(73,49,41,0.09)",
        card: "0 8px 24px rgba(73,49,41,0.06)",
        cardHover: "0 16px 36px rgba(73,49,41,0.10)",
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
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        wave: {
          "0%, 100%": { transform: "rotate(0deg)" },
          "50%": { transform: "rotate(10deg)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        marquee: "marquee 45s linear infinite",
        float: "float 4s ease-in-out infinite",
        wave: "wave 3s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
