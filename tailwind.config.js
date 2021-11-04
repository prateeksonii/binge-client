module.exports = {
  purge: [],
  important: "#app",
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Poppins",
    },
    extend: {
      gridTemplateColumns: {
        movie: "1fr 2fr",
        layout: "1fr 4fr",
      },
      height: {
        "500px": "500px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
