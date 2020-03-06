const postcssImport = require('postcss-import');
const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const cssnano = require('cssnano');

const env = process.env.NODE_ENV;

const plugins = [
  postcssImport, // Sass like Import
  tailwindcss('./tailwind.config.js'),
  autoprefixer
];

if (env !== 'development') {
  plugins.push(cssnano);
}

module.exports = { plugins };
