/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,svg}'],
  theme: {
    extend: {},
    fontFamily: {
      sans: ['ProximaNova', 'arial', 'Helvetica Neue', 'sans-serif'],
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.animate-spin-slow': {
          animationDuration: '2s', // Adjust the duration as per your preference
        },
      })
    },
  ],
}
