const path = require('path')
const webpack = require('webpack')
const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
  context: __dirname,
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: ASSET_PATH
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: function(module) {
        return module.context && module.context.indexOf('node_modules') !== -1
      }
    })
  ]
}
