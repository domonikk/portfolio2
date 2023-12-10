/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js}", " ./node_modules/flowbite/**/*.js"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#008080",
        secondary: "#800080",
        tertiary: "#C0C0C0",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
