/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "var(--primary-color)",
        bg_color: "var(--bg-color)",
        chart_color1: "#85FFC5",
        chart_color2: "#FFE8C6",
        chart_color3: "#FFB445",
      },
    },
  },
  plugins: [],
};
