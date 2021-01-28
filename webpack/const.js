exports.REGEX = {
  STYLES: /\.s[ac]ss$/i,
  CLIENT_STYLES: /\.client(\.module)?\.s?[ac]ss$/i
}

exports.LOADER = {
  STYLES: ['css-loader?url=false', 'postcss-loader', 'sass-loader'],
  CLIENT_STYLES: [
    'style-loader',
    'css-loader?url=false',
    'postcss-loader',
    'sass-loader'
  ],
  NULL: ['null-loader']
}
