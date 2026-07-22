import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#F2F1ED",
        ink: "#191916",
        muted: "#55544D",
        faint: "#7B7A73",
        featured: "#F7F5F1",
        corner: "#E05A1C",
        observations: {
          tint: "#EBDCD3",
          meta: "#7A4A36",
          headline: "#3A1E12",
          accent: "#C4664A",
          feedMeta: "#B4573E",
        },
        readings: {
          tint: "#DFE6DF",
          meta: "#44604F",
          headline: "#1C332A",
          accent: "#31614B",
          feedMeta: "#44604F",
        },
        experiments: {
          tint: "#EDE4D2",
          meta: "#6E5B33",
          headline: "#2E2503",
          accent: "#D8A63F",
          feedMeta: "#8A6A1F",
        },
      },
      fontFamily: {
        display: ["var(--font-archivo)", "sans-serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};
export default config;
