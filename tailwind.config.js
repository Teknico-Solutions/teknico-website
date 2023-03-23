/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ["var(--font-montserrat)"],
        opensans: ["var(--font-opensans)"],
      },
      colors: {
        primary: "#1D3C94",
        paragraph: "#212121",
      },
    },
  },
  plugins: [],
};
