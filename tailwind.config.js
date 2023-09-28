/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        right: "0px 4px 23px 0px rgba(0, 0, 0, 0.05)",
      },
    },
    colors: {
      "primary-green": "#087B2F",
      "primary-dark-green": "#00635B",
      "primary-blue": "#1D4ED8",
      "primary-sky-blue": "#D0F7FA",
      "light-text-color": "#979797",
      "primary-purple": "#9C4DE2",
      "primary-red": "#A80000",
    },
  },
  plugins: [],
};
