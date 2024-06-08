/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.html", "./src/**/*.{js,jsx,ts,tsx,vue}"],
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      white: "#fff",
      home: "#1B1107",
      menu: "#DCB288",
      review: "#EFDFC5",
      btn: "#C7AC8F",
    },
  },
  plugins: [],
};
