import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ['selector', '[data-theme="light"]'], // This tells Tailwind to watch for this attribute
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;