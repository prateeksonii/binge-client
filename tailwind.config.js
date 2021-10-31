module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Poppins",
    },
    extend: {
      gridTemplateColumns: {
        movie: "1fr 2fr",
        layout: "1fr 3fr 1fr",
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
