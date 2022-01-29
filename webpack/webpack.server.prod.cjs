const devServer = require('./webpack.server.cjs')
const { merge } = require('webpack-merge')

const server = {
  mode: 'production'
}

module.exports = merge(devServer, server)
