var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'eval',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
      loaders: [
        {
          test: /\.js$/,
          loaders: ['babel-loader'],
          include: path.join(__dirname, 'src')
        },
        {
          test: /\.json$/,
          loaders: ['json']
        },
        {
          test: /.*\.(gif|png|jpe?g|svg)$/i,
          loaders: [
            'file?hash=sha512&digest=hex&name=[hash].[ext]',
            'image-webpack'
          ]
        },
        {
          test: /\.jpg$/,
          loader: 'file'
        }
    ]
  }
};
