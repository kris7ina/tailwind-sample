/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'quicksand': ['Quicksand'],
        'syne': ['Syne'],
        'wix': ['Wix Madefor Display'],
      }
    },
  },
  plugins: [require('tailwindcss-animated')],
}

