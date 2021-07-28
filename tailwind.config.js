const colors = require('tailwindcss/colors');

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    colors: {
      primary: colors.indigo,
      secondary: colors.yellow,
      neutral: colors.blueGray,
      background: colors.gray,
      text: colors.coolGray,
    },
  },
  variants: {
    extend: { textOpacity: ['dark'], textColor: ['visited'] },
  },
  plugins: [require('@tailwindcss/forms')],
};
