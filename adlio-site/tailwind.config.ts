import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#F8F9FB",
        accent: "#3B82F6",
        foreground: "#0F172A",
        muted: "#64748B",
        card: "#FFFFFF",
        border: "#E2E8F0",
        "dark-bg": "#0A0A0F",
        "dark-border": "rgba(255,255,255,0.06)",
        "dark-muted": "#6E6E6E",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        scroll: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        scroll: "scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;