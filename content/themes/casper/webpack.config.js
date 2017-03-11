var path = require('path');
var webpack = require('webpack');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    path.join(__dirname, '/assets/js/webpack.entry.js')
  ],
  output: {
    path: path.join(__dirname, '/assets/dist'),
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
          test: /\.(ttf|eot|woff)(\?.*)?$/,
          loaders: ['url-loader']
      },
      {
          test: /\.(svg)(\?.*)?$/,
          loaders: ['url-loader', 'svgo-loader']
      },
      {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader', 'postcss-loader']
      },
      {
          test: /\.scss$/,
          loaders: ['style-loader', 'css-loader', 'sass-loader', 'postcss-loader']
      },
      {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel-loader']
      },
      {
          test: /\.html$/,
          loader: 'html-loader'
      }
    ]
  },
  plugins: [
    new webpack.LoaderOptionsPlugin({
      options: {
        postcss: function() {
          return [autoprefixer];
        }
      }
    })
  ]
};
