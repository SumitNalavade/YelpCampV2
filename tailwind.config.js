/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          "background": "#FFFF",
          "primary": "#00A699",
          "secondary": "#f45d48",
          "tertiary": "#FC642D",
          "neutral": "#484848",
          "base-200": "#767676"
        },
      },
    ],
  },
}