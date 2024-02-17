import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        kavoon: ["var(--font-kavoon)"],
      },
      colors: {
        lightGreen: "#23DF81",
        tealGreen: "#11C9BF",
        darkBlue: "#001F55",
        darkGray: "#969696",
        lightGray: "#323232",
      },
    },
  },
  plugins: [],
};
export default config;
