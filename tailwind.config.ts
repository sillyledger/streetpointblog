import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        page: "#F4F1E9",
        ink: "#211D18",
        observations: "#C4664A",
        readings: "#31614B",
        experiments: "#D8A63F",
        muted: "#55503F",
        faint: "#8B8779",
        terracotta: {
          headline: "#241209",
          meta: "#3B1A10",
        },
        green: {
          headline: "#F0F4EC",
          meta: "#BFDCCB",
        },
        mustard: {
          headline: "#2E1F03",
          meta: "#4A3306",
        },
      },
      fontFamily: {
        serif: ["var(--font-fraunces)", "serif"],
        mono: ["var(--font-dm-mono)", "monospace"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        card: "18px",
      },
    },
  },
  plugins: [],
};
export default config;
