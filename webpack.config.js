const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge')
const commonConfig = require('./config/webpack.common')
const devConfig = require('./config/webpack.dev')
const prodConfig = require('./config/webpack.prod')

module.exports = (env) => {
  if (env === 'production') {
    return merge(commonConfig, prodConfig)
  } else {
    return merge(commonConfig, devConfig)
  }
}
