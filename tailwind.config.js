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
        accent: "#FC4747",
        "on-background": "#ffffff",
        "on-surface": "#5A698F",
      },
      fontFamily: {
        sans: ['"Outfit"', "sans-serif"],
      },
      backgroundColor: {
        default: "#10141E",
        surface: "#161D2F",        
      },
    },
  },
};
