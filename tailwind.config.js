/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,ts,jsx,tsx}', './node_modules/framework7/**/*.{ts,tsx}'],
  theme: {
    extend: {
      keyframes: {
        marquee: {
          '100%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-180%)' },
        },
      },
      animation: {
        marquee: 'marquee 10s linear infinite',
      },
      backgroundImage: {
        'primary-gradient': 'linear-gradient(to right, #A03D8C, #4C2CCA)',
      },
      colors: {
        primary: '#A03D8C',
        secondary: '#4C2CCA',
        inactive: '#AD9DCE',
      },
      textColor: {
        primary: '#A03D8C',
        secondary: '#4C2CCA',
        inactive: '#AD9DCE',
      },
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
