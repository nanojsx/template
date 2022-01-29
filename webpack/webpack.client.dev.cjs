const common = require('./webpack.common.cjs')
const hydrate = require('./webpack.client.common.cjs')
const { merge } = require('webpack-merge')

const dev = {
  mode: 'development',
  devtool: 'inline-cheap-source-map'
}

module.exports = merge(common, hydrate, dev)
