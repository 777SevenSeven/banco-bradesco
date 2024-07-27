import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    backgroundImage: {
      'img_bg_hero': "url('../assets/bg-red-bradesco.jpg')",
    },
    extend: {
      colors: {
      'primary-blue': '#002A6C',
      'primary-orange': '#C8102E',
      'primary-gray': '#4A4A4A',
      'second-gray': '#F4F4F4',
      'gray-phone': '#F1F1F1',
      'txt-gray': '#7A7786',
      'opacity-gray': 'rgba(100, 80, 57, 0.1)'
      }
    },
  },
  plugins: [],
};
export default config;
