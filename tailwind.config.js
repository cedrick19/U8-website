/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./node_modules/framework7/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#A03D8C",
        "secondary": "#4C2CCA"
      },
      fontFamily : {
        sans: ["Nunito", "sans-serif"],
      }
    },
  },
  plugins: [],
};
