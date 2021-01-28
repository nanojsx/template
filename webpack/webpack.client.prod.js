const common = require('./webpack.common')
const hydrate = require('./webpack.client.common')
const { merge } = require('webpack-merge')

const prod = {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  }
}

module.exports = merge(common, hydrate, prod)
