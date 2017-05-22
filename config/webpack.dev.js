const path = require('path');
const webpack = require('webpack');
const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
  entry: {
    main: ['react-hot-loader/patch',
           'webpack-dev-server/client?http://localhost:8080',
           'webpack/hot/only-dev-server',
           '../src/index.js'
    ]
  },
  output: {
    filename: '[name].js'
  },
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    compress: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, '../dist'),
    publicPath: ASSET_PATH
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ]
}
