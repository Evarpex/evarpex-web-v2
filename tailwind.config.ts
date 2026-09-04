import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        evarpex: {
          orange: {
            DEFAULT: "#D45500",
            hover: "#BA4700",
            light: "#FFF4ED",
            50: "#FFF7F2",
            100: "#FFEBDD",
            200: "#FFD4B8",
            500: "#D45500",
            600: "#BA4700",
            700: "#9A3800",
          },
          navy: {
            DEFAULT: "#020B36",
            dark: "#020B36",
            surface: "#07133F",
            card: "#0D1B54",
            border: "#16276E",
            light: "#1E338A",
            emblem: "#0B1B6D",
          },
          bg: "#F7F8FC",
          text: "#101828",
          muted: "#667085",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-sans)",
          "Plus Jakarta Sans",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif",
        ],
        serif: [
          "var(--font-serif)",
          "Newsreader",
          "Playfair Display",
          "Georgia",
          "serif",
        ],
      },
      boxShadow: {
        subtle: "0 1px 3px 0 rgba(16, 24, 40, 0.05), 0 1px 2px 0 rgba(16, 24, 40, 0.03)",
        card: "0 4px 20px -2px rgba(2, 11, 54, 0.06), 0 2px 6px -1px rgba(2, 11, 54, 0.03)",
        glow: "0 12px 36px -4px rgba(212, 85, 0, 0.25)",
        "navy-glow": "0 20px 48px -8px rgba(2, 11, 54, 0.35)",
      },
      maxWidth: {
        container: "1280px",
      },
      borderRadius: {
        card: "22px",
      },
    },
  },
  plugins: [],
};
export default config;
