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
          "background": "#f8f5f2",
          "primary": "#078080",
          "secondary": "#f45d48",
          "tertiary": "#f8f5f2",
          "neutral": "#222525"
        },
      },
    ],
  },
}