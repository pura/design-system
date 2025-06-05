const tokens = require('./src/tokens');

module.exports = {
  content: [
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    colors: tokens.colors,
    spacing: tokens.spacing,
    borderRadius: tokens.radii,
    fontFamily: tokens.fonts,
    extend: {},
  },
  plugins: [],
};
