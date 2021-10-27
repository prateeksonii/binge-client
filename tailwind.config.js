module.exports = {
  purge: [],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    fontFamily: {
      sans: "Poppins",
    },
    extend: {
      gridTemplateColumns: {
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
