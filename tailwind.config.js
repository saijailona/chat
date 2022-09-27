/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#210916ff", //dark-purple
        "primary-light": "#E5C7B4ff", //desert-sand
        "primary-color": "#E27A6Fff", //congo-pink
        "secondary-dark": "#DF8F79ff", //middle red
      },
    },
  },
  plugins: [],
}
