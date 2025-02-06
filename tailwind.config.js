/** @type {import('tailwindcss').Config} */

const flowbite = require("flowbite-react/tailwind");


export default {
  content: [
    "./index.html", "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),

  ],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGray: "#4D4D4D",
        brandPrimary: "#28CB8B",
        neutralSilver: "#F5F7FA",
        neutralGray: "#717171",
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
};
