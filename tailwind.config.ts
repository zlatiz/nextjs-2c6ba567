import type { Config } from 'tailwindcss';
const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffd400',
        footerText: '#777777',
        brandText: '#111827'
      },
      fontFamily: {
        sans: ['Manrope', 'ui-sans-serif', 'system-ui']
      }
    }
  },
  plugins: []
};
export default config;