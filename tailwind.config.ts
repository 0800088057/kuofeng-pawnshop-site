import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          sky: "#28a8d3",
          blue: "#1f9ccc",
          deep: "#155f82",
          dark: "#17384b",
          yellow: "#ffd65a",
          pink: "#f39ca9",
          paper: "#f8fdff",
        },
      },
      boxShadow: {
        comic: "0 8px 0 rgba(23, 56, 75, 0.18)",
        soft: "0 18px 45px rgba(21, 95, 130, 0.16)",
      },
    },
  },
  plugins: [],
};

export default config;
