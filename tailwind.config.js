module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brand: "#0097dd",
        brandLight: "#11a7ec",
        dark: "#384146",
        mid: "#8d9aa1",
        light: "#c6ccd0",
        xlight: "#e9f1f4",
        xxlight: "#f7f9fa",
        xxxlight: "#f7f9fa",
      },
      fontFamily: {
        display: ['"neue-haas-unica"', "sans-serif"],
        body: ['"neue-haas-unica"', "sans-serif"],
      },
      container: {
        padding: {
          DEFAULT: "1.3rem",
          sm: "2rem",
          lg: "3rem",
        },
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
