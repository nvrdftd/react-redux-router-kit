const path = require('path');
const webpack = require('webpack');
const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
  output: {
    filename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: ASSET_PATH
  },
  devtool: 'cheap-source-map',
  plugins: [
    new webpack.EnvironmentPlugin(['NODE_ENV']),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor'
    })
  ]
}
