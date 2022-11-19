/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
    "./icons/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5c6ac4",
        secondary: "#ecc94b",
        red: "#FC4747",
        "dark-blue": "#10141E",
        "greyish-blue": "#5A698F",
        "semi-dark-blue": "#161D2F",
        "pure-white": "#FFFFFF",
      },
      fontFamily: {
        sans: ['"Outfit"', "sans-serif"],
      },
    },
  },
};
