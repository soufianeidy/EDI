/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2E8B57',
        secondary: '#F5F5F5',
      },
    },
  },
  plugins: [],
};