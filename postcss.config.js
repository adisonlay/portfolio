const purgecss = require('@fullhuman/postcss-purgecss')({
  content: [ './*.html' ],
  defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
});

module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    purgecss
  ]
};
