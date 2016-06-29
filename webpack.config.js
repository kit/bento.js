var webpack = require('webpack');
var path = require('path');

module.exports = {
  entry: path.join(__dirname, "./src/index.js"),
  output: {
    path: path.join(__dirname, "./dist"),
    filename: "bento.js"
  },
  module: {
    loaders: [
      {
        test: /\.js/,
        loader: "babel-loader",
        exclude: /node_modules/,
        query: {
          presets: ["es2015"],
        },
      },
      {
        test: /\.css$/,
        loader: "style!css",
      },
      {
        test: /\.scss$/,
        loaders: [ "style", "css", "sass" ],
      }
    ],
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false }
    })
  ],
};
