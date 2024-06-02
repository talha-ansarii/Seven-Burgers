import { SiCalendly } from "react-icons/si";

const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "bg-yellow": "#FED676",
        "font-blue": "#233780",
      },
      fontFamily: {
        migra: ["Migra", "sans-serif"],
      },
      animation: {
        marquee: "marquee 30s linear infinite",
        text: "text 5s ease infinite",
        glass: "glass 5s linear infinite",
        glass2: "glass2 6s linear infinite",
        star: "star 5s linear infinite",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-100%)" },
        },
        text: {
          "0%, 100%": {
            "background-size": "2% 0%",
            "background-position": "left center",
          },
          "50%": {
            "background-size": "2% 0%",
            "background-position": "right center",
          },
        },
        glass2: {
          "0%": {
            left: "0%",
          },

          "100%": {
            left: "100%",
          },
        },
        glass: {
          "0%": {
            left: "0%",
          },

          "100%": {
            left: "100%",
          },
        },
        star: {
          "0%": {
            transform: "rotate(0deg)",
            scale : "1"
          },
          "50%": {
            transform: "rotate(180deg)",
            scale : "0.7"
          },
          "100%": {
            transform: "rotate(360deg)",
            scale : "1"
          }
        },
       
      },
    },
  },

  plugins: [addVariablesForColors],
};

function addVariablesForColors({ addBase, theme }) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}
