import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,

        screens: {
          sm: "640px", // Small screens
          md: "768px", // Medium screens
          lg: "1024px", // Large screens
          xl: "1170px", // Extra-large screens
        },
      },
      colors: {
        primary: "#399f6e",
        secondary: "#ffed4a",
        tertiary: "#0d2f3f",
        quaternary: "#141718",
        quinary: "#343839",
        senary: "#d9d9d9",
        color: "#f5fffa",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  important: true,
  plugins: [],
};
export default config;
