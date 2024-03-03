import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
      mohave: ['Mohave', 'sans-serif']
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        black: '#000000',
        orange: '#FF6B01',
        pink: '#CC3272',
        green: '#061A19',
        gray: '#4B4B4B'
      }
    }
  },
  plugins: [require('@tailwindcss/typography')]
};
export default config;
