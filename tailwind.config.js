/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"], // Add the paths to all of your template files
  theme: {
    fontFamily: {
      sans: ["Karla", "sans-serif"],
      serif: ["Libre Baskerville", "serif"],
    },
    container: {
      center: true,
      padding: "2rem",
    },
    extend: {
      backgroundImage: {
        companyBanner: "url('./src/assets/banner-company.webp')",
      },
      colors: {
        primary: "#af7f66",
        btn: "#242424",
        footer: "#212121",
      },
    },
  },
  plugins: [],
};
