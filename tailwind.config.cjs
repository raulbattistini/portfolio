/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      poppins: ['poppins, "sans-serif"'],
      thin: ['poppins-thin, "sans-serif"'],
      light: ['poppins-light, "sans-serif"'],
      extralight: ['poppins-extralight, "sans-serif"'],
      bold: ['poppins-bold, "sans-serif"'],
    },
    extend: {
      animation: {
        text: "text 5s ease infinite",
      },
      keyframes: {
        text: {
          "0%, 100%": {
            "background-size": "200% 200%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "200% 200%",
            "background-position": "right center",
          },
        },
      },
      colors: {
        "black-rgba": "rgba(0, 0, 0, 0.5)",
        transparent: "rgba(255, 255, 255, 0)",
        "glass-white": "rgba(255, 255, 255, 0.1)",
      },
    },
  },
  plugins: [],
};
