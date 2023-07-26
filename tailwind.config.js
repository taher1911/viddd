module.exports = {
  content: ["./pages/index.js"],
  purge: [
    "./pages/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#FF0000",
        secondary: "#00FF00",
        basebg: "#131B2A",
        lightbg: "#131B2A99",
        light_gray: "#eeeeee",
        dekstop_theme: "#e8e9ef",
        gray: {
          DEFAULT: "#2B323F",
          1: "#2B323F",
          2: "#8C98B0",
          3: "#496780 ",
          4: "#1F2634",
          5: "#C9CED4",
          6: "#242B38",
          7: "#C9CED5",
          8: "#131B2B",
          9: "#3F4B62",
          10: "#F0F1F5",
          11: "#e2e2e2",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Arial", "sans-serif"],
      },
    },
  },
  variants: [
    {
      extend: {},
    },
    "hover",
  ],
  plugins: [],
};
