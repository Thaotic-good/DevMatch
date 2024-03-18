/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
      "./src/*.{js, jsx}",
      "./public/index.html"
  ],
    purge: ['./src/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
}

