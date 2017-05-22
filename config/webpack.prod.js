const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack');

module.exports = {
  entry: {
    main: '../src/index.js'
  },
  output: {
    filename: '[name].[chunkhash].js',
  },
  devtool: 'cheap-source-map',
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'production'
    }),
    new webpack.optimize.UglifyJsPlugin(),
  ]
}
