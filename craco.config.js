const path = require('path');

module.exports = {
  style: {
    postcss: {
      plugins: [require('tailwindcss'), require('autoprefixer')],
    },
  },
  webpack: {
    alias: {
      '@icons': path.join(path.resolve(__dirname, './src/assets/icons.js')),
    },
  },
};
