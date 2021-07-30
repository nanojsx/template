const devServer = require('./webpack.server')
const { merge } = require('webpack-merge')

const server = {
  mode: 'production'
}

module.exports = merge(devServer, server)
