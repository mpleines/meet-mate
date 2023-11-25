import type { Config } from 'tailwindcss';
const colors = require('tailwindcss/colors');

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      ...colors,
      'foreground-color': '#fff',
      'background-color': '#000',
      'background-color-lighter': '#0A0A0A',
      'background-color-lightest': '#1A1A1A',
    },
  },
  plugins: [],
};
export default config;
