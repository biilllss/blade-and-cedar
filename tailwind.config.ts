import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: "#121212",
        "charcoal-light": "#1B1A18", // slightly raised surface for cards
        cream: "#F2EDE4",
        gold: "#C9A24B",
        "gold-dark": "#A8853B", // hover state for gold buttons
        whatsapp: "#25D366", // brand green, used only on the floating chat button
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "7xl": "80rem",
      },
    },
  },
  plugins: [],
};

export default config;
