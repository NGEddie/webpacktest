const path = require('path');

module.exports = {
  mode: 'production',
  entry: {
    main: './src/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'js'),
    filename: 'authForm.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
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
      },
      {
        test: /.*\.(gif|png|jpe?g|svg)$/i,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8000,
              name: '[name].[ext]',
              outputPath: '../img',
              publicPath: './img'
            }
          }
        ]
      }
    ]
  }
};
