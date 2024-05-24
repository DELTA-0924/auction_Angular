/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'bright-lg': '0 0 3px 5px rgba(255, 255, 255, 0.35)',
      },
    },
  },
  plugins: [],
}