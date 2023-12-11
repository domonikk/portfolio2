/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#00B3B3",
        primarydark: "#008080",
        secondary: "#800080",
        tertiary: "#C0C0C0",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
