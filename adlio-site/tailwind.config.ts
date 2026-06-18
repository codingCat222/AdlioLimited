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
        background: "#0D0D0F",
        accent: "#C8F031",
        foreground: "#FFFFFF",
        muted: "#8A8A9A",
        card: "#1A1A1C",
        border: "rgba(255,255,255,0.05)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
      },
      // 🟢 ADD THIS SECTION BELOW 🟢
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
export default  config;