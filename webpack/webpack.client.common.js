const path = require('path')
const glob = require('glob')
const CopyPlugin = require('copy-webpack-plugin')
const { WebpackManifestPlugin } = require('webpack-manifest-plugin')
const { REGEX, LOADER } = require('./const')

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
    chunkFilename: '[id].js',
    path: path.resolve(__dirname, '../dist/public/js')
  },
  module: {
    rules: [
      {
        test: REGEX.CLIENT_STYLES,
        use: LOADER.CLIENT_STYLES
      },
      {
        test: REGEX.STYLES,
        exclude: REGEX.CLIENT_STYLES,
        use: LOADER.NULL
      }
    ]
  },
  plugins: [
    new CopyPlugin({
      patterns: [{ from: 'public', to: '../' }]
    }),
    new WebpackManifestPlugin({
      publicPath: '',
      basePath: '',
      filter: file => {
        return /\.hydrate\.js$/.test(file.name)
      }
    })
  ]
}
