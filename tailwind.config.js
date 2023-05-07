/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        upDown: {
          "0%, 100%": { transform: "translateY(-5px)" },
          "50%": { transform: "translateY(-2px)" },
        },
      },
      animation: {
        upDown: "upDown .4s ease-in-out infinite",
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#272625",
      white: "#fffff3",
      lightGray: "#e3dede",
      mediumGray: "#5e5e5f",
      darkGray: "#383a3f",
      default: "#4ea1d3",
      point: "#6C49B8",
      green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
