const common = require('./webpack.common.cjs')
const hydrate = require('./webpack.client.common.cjs')
const { merge } = require('webpack-merge')

const prod = {
  mode: 'production',
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[id].[chunkhash].js'
  }
}

module.exports = merge(common, hydrate, prod)
