const path = require('path')
const glob = require('glob')
const CopyPlugin = require('copy-webpack-plugin')
const ManifestPlugin = require('webpack-manifest-plugin')

module.exports = {
  // create one bundle for each file in /src/client
  entry: glob
    .sync(path.resolve(__dirname, '../src/client/') + '/**.ts*', {
      absolute: true
    })
    .reduce((acc, path) => {
      const entry = path.match(/[^\/]+\.tsx?$/gm)[0].replace('.tsx', '')
      acc[entry] = path
      return acc
    }, {}),
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, '../dist/public/js')
  },
  module: {
    rules: [
      {
        test: /\.s?[ac]ss$/i,
        use: ['null-loader']
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public', to: '../' }]
    }),
    new ManifestPlugin()
  ]
}