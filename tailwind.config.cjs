/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "media",
  purge: ["./src/**/*.html", "./src/**/*.js"],
  content: [],
  theme: {
    extend: {},
  },
  plugins: [{ tailwindcss: {}, autoprefixer: {} }],
};
