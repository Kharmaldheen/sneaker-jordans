// import flowbitePlugin from "flowbite/plugin";
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        BeVietnam: "Be Vietnam Pro, sans-serif",
        montserrat: "Montserrat, sans-serif",
        sans: "Roboto Mono, monospace",
      },

      animation: {
        "spin-faster": "spin 1.7s linear infinite",
        "spin-reverse": "spin-reverse 0.6s linear infinite",
      },

      keyframes: {
        "spin-reverse": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(-360deg)" },
        },
      },
    },
  },
  plugins: [require("flowbite-react")],
};
