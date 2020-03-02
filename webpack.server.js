const path = require('path');
const merge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');
const webpackNodeExternals = require('webpack-node-externals');

const config = {
  // Inform webpack we are bulding a bundle
  // for nodeJS, rather than for the browser
  target: 'node',
  // Tell Webpack the root file of our server
  entry: './src/index.js',
  // Tell Webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build'),
  },
  externals: [webpackNodeExternals()]
};

module.exports = merge(baseConfig, config);
