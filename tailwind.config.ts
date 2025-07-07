import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx,js,jsx}",
    "./src/components/**/*.{ts,tsx,js,jsx}",
    "./src/pages/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: "#1F1F1F",
          white: "#FFFFFF",
          pink: "#FF6F91",
          purple: "#9D7BF9",
          gray: "#F5F5F5",
        },
        accent: {
          gold: "#FFD700",
          blue: "#56CCF2",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
