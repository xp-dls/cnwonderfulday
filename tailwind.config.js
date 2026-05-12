/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'chinese-red': '#C41E3A',
        'ink-black': '#1A1A2E',
        'rice-paper': '#F8F4F0',
        'mountain-blue': '#1A5276',
        'jade-green': '#2E7D32',
        'golden': '#F9A825',
      },
      fontFamily: {
        'display': ['Playfair Display', 'Noto Serif', 'serif'],
        'body': ['Inter', 'Noto Sans', 'sans-serif'],
      }
    },
  },
  plugins: [],
}