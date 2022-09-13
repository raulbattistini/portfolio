/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'poppins': ['poppins, "sans-serif"'],
      'thin': ['poppins-thin, "sans-serif"'],
      'light': ['poppins-light, "sans-serif"'],
      'extralight': ['poppins-extralight, "sans-serif"'],
      'bold': ['poppins-bold, "sans-serif"'],
    },
    extend: {
      colors: {
        'black-rgba': 'rgba(0, 0, 0, 0.5)',
        'transparet': 'rgba(255, 255, 255, 0)',
        'glass-white': 'rgba(255, 255, 255, 0.1)'
      }},
  },
  plugins: [],
}