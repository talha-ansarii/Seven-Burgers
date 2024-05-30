/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "bg-yellow": "#FED676",
        "font-blue": "#233780",
      },
      fontFamily: {
        migra: ['Migra', 'sans-serif'],
      },
    },
  },
  
  plugins: [],
};
