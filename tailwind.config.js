/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      minHeight: {
        '12': '3rem'
      },
      width: {
        '120': '30rem',
        '160': '40rem'
      },
    },
  },
  plugins: [],
}
