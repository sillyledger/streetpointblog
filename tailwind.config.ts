import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: "#111010",
        observations: "#B84A28",
        readings: "#365840",
        experiments: "#9C711C",
      },
      fontFamily: {
        display: ["var(--font-big-shoulders)", "sans-serif"],
        sans: ["var(--font-ibm-plex-sans)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
