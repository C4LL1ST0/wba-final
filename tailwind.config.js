/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {

    fontFamily: {
      "roboto" : ["Roboto"]
    },

    extend: {
      colors: {
        "primary" : "#7A9D8C",
        "font-color" : "#050706"
      }
    },
  },
  plugins: [],
}