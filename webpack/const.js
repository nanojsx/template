exports.REGEX = {
  STYLES: /\.s[ac]ss$/i,
  CLIENT_STYLES: /\.client(\.module)?\.s?[ac]ss$/i
}

const LOADERS = ['css-loader?url=false', 'postcss-loader', 'sass-loader']

exports.LOADER = {
  STYLES: LOADERS,
  CLIENT_STYLES: ['style-loader', ...LOADERS],
  NULL: ['null-loader']
}
