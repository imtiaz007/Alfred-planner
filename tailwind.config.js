module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        // Configure your color palette here
        primary: {
          light: "#6d6d6d",
          main: "#424242",
          dark: "#1b1b1b",
          text: "#fff",
        },
        secondary: {
          light: "#82e9de",
          main: "#4db6ac",
          dark: "#00867d",
          text: "#000",
        },
        background: "#212121",
      },
    },
  },
  variants: {
    extend: { textOpacity: ["dark"] },
  },
  plugins: [],
};
