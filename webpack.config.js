const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    filename: 'login.js'
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader'
          },
          {
            loader: 'postcss-loader',
            options: {
              plugins: function() {
                return [require('autoprefixer')];
              }
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  }
};