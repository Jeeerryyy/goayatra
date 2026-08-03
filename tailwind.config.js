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
        // Black & Gold Logo Palette
        brown: {
          DEFAULT: "#1A1A1A",
          hover: "#000000",
          light: "#4A4A4A",
          muted: "#6B6B6B",
        },
        plum: {
          DEFAULT: "#C49A3C",
          hover: "#A6802E",
        },
        pink: {
          DEFAULT: "#E8D5A3",
        },
        peach: {
          DEFAULT: "#F5EEDF",
        },
        
        // Backward-compatible semantic aliases mapped to Logo Palette
        navy: {
          DEFAULT: "#1A1A1A",
          deep: "#000000",
          light: "#4A4A4A",
        },
        orange: {
          DEFAULT: "#1A1A1A",
          hover: "#000000",
          soft: "#F5F3EE",
        },
        yellow: {
          DEFAULT: "#C49A3C",
          soft: "#F5EEDF",
        },
        teal: {
          DEFAULT: "#C49A3C",
          soft: "#F5F3EE",
        },
        sand: {
          DEFAULT: "#FAFAF8",
          muted: "#F5F3EE",
        },
        
        // Semantic mappings
        bg: {
          DEFAULT: "#FAFAF8",
          alt: "#F5F3EE",
          card: "#FFFFFF",
        },
        ink: {
          DEFAULT: "#1A1A1A",
          muted: "#6B6B6B",
          inverse: "#FFFFFF",
        },
        whatsapp: "#1A1A1A",
        hairline: "#E8E4DC",

        // Shadcn compatibility tokens
        background: "#FAFAF8",
        foreground: "#1A1A1A",
        border: "#E8E4DC",
        input: "#E8E4DC",
        ring: "#C49A3C",
        card: { DEFAULT: "#FFFFFF", foreground: "#1A1A1A" },
        popover: { DEFAULT: "#FFFFFF", foreground: "#1A1A1A" },
        primary: { DEFAULT: "#1A1A1A", foreground: "#FFFFFF" },
        secondary: { DEFAULT: "#C49A3C", foreground: "#FFFFFF" },
        muted: { DEFAULT: "#F5F3EE", foreground: "#6B6B6B" },
        accent: { DEFAULT: "#E8D5A3", foreground: "#1A1A1A" },
        destructive: { DEFAULT: "#C49A3C", foreground: "#FFFFFF" },
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
        soft: "0 8px 24px rgba(26,26,26,0.06)",
        large: "0 20px 40px rgba(26,26,26,0.09)",
        card: "0 8px 24px rgba(26,26,26,0.06)",
        cardHover: "0 16px 36px rgba(26,26,26,0.10)",
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
