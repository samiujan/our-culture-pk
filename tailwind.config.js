module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        display: ["Noto Nastaliq Urdu"],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
