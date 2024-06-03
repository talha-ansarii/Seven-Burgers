import { filter } from "lodash";
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
        glass: "glass 7s linear infinite",
        glass2: "glass2 10s linear infinite",
        star: "star 5s linear infinite",
        intro: "intro 1.5s ease 1",
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
          "57%": {
              left: "100%",
          },
          "100%" : {
              left: "120%", /* Hold position for 3 seconds */
          }
      },
        glass : {
          "0%": {
              left: "-30%",
          },
          "57%": {
              left: "100%",
          },
          "100%" : {
              left: "120%", /* Hold position for 3 seconds */
          }
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
        intro: {
          "0%": {
            scale : "0",
            filter : "blur(0px)"
          },
          "50%": {
            scale : "10",
            filter : "blur(0px)",
            top : "20%",
          },
          "100%": {
            scale : "25",
            filter : "blur(1px)",
            top : "-30%",
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
