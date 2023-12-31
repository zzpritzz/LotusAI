/** @type {import('tailwindcss').Config} */
const { nextui } = require("@nextui-org/react");
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        // Montserrat: ["Lora", "serif"],
        // header: ["Raleway", "sans-serif"],
        // head: ["Montserrat", "sans-serif"],
        Montserrat: ["Lato", "sans-serif"],
        Lato: ["Lato", "sans-serif"],
        // Montserrat: ['Merriweather', "serif"],
        threeline: ["Bungee Outline", "cursive"],
        header: ["Lato", "sans-serif"],
        head: ["Lato", "sans-serif"],
      },
      backgroundImage: {
        "hero-pattern": "url('/Rect.png')",
      },
      spacing: {
        84: "20rem",
      },
      colors: {
        "custom-yellow": "#FFA921",
        "custom-light-yellow": "#FFEAC9",
        "custom-verylight-yellow": "#FFFAF3",
        "custom-rose": "#F77C92",
        // "custom-yellow": "#000080",
        // "custom-light-yellow": "#24248f",
        // "custom-verylight-yellow": "#4141fa",
        // "custom-grey": "#747373",
        // primaryblue: "#000080",
        // primarygold: "#FFD700",
        // "secondary-lightgrey": "#F2F2F2",
        // "secondary-darkgrey": "#808080",
        // accent: "#EC9A97",
      },
      aspectRatio: {
        rect: "3 / 4",
      },
      keyframes: {
        marquee: {
          from: { transform: "translateY(0%)" },
          to: { transform: "translateY(-100%)" },
        }
      },
      animation: {
        carousel: "marquee 20s linear infinite",
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            default:"#FFA921",
            focus: "#FFA921",
            active : "#FFA921",
            hover : "#FFA921"
          },
        },
      },
    }),
  ],
};
