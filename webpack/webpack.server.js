const path = require('path')
const common = require('./webpack.common')
const { merge } = require('webpack-merge')
const nodeExternals = require('webpack-node-externals')
const { REGEX, LOADER } = require('./const')

const server = {
  mode: 'development',
  target: 'node',
  entry: path.resolve(__dirname, '../src/server/server.tsx'),
  output: {
    filename: 'server.bundle.js',
    path: path.resolve(__dirname, '../dist')
  },
  module: {
    rules: [
      {
        test: REGEX.STYLES,
        exclude: REGEX.CLIENT_STYLES,
        use: LOADER.STYLES
      }
    ]
  },
  externals: [nodeExternals()]
}

module.exports = merge(common, server)
