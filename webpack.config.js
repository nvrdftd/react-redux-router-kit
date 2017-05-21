/*const webpack = require('webpack')
const merge = require('webpack-merge')
const commonConfig = require('./config/webpack.common')
const devConfig = require('./config/webpack.dev')
const prodConfig = require('./config/webpack.prod')

module.exports = () => {
  if (process.env.NODE_ENV === 'production') {
    return merge(commonConfig, prodConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
}*/

const path = require('path');
const webpack = require('webpack');
const ASSET_PATH = process.env.ASSET_PATH || '/'

module.exports = {
  entry: {
    vendor: ['react', 'react-dom', 'react-redux'],
    main: ['react-hot-loader/patch',
           'webpack-dev-server/client?http://localhost:8080',
           'webpack/hot/only-dev-server',
           './src/index.js'
    ]
  },
  output: {
    filename: '[name].js',
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
  devtool: 'inline-source-map',
  devServer: {
    hot: true,
    compress: true,
    historyApiFallback: true,
    contentBase: path.resolve(__dirname, 'dist'),
    publicPath: ASSET_PATH
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development'
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
  ]
}
