// tailwind.config.ts
import { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        etrusco: ["EtruscoNowCondensed", "sans-serif"],
        etruscoMedium: ["EtruscoNow", "sans-serif"],
        urbanist: ["Urbanist", "sans-serif"],
        bebas: ["Bebas Neue", "Oswald", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;