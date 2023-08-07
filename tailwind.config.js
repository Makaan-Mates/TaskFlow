/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx,svg}'],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
    },
    fontFamily: {
      sans: ['ProximaNova', 'arial', 'Helvetica Neue', 'sans-serif'],
    },
  },
  plugins: [],
}
