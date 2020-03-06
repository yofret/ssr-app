module.exports = {
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
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'postcss-loader'],
      },
    ]
  }
};
