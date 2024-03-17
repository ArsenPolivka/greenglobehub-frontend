import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#61C67A',
        'primary-100': '#94F398',
        'secondary': '#BDFFFD',
        'main-black': '#040404',
        'main-white': '#F7F7F7',
        'main-gray': '#E9E9E9',
      }
    },
  },
  plugins: [],
};
export default config;
