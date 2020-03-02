const path = require('path');

module.exports = {
  // Tell Webpack the root file of our server
  entry: './src/client/client.js',
  // Tell Webpack where to put the output file that is generated
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
  },
  // Tell Webpack to run bable on every file it runs through
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        options: {
          presets: [
            'react',
            'stage-0',
            ['env', { targets: { browsers: ['last 2 versions'] } }],
          ]
        }
      }
    ]
  }
};
