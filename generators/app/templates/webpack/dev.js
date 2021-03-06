const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./common');

module.exports = merge(common, {
  devtool: 'eval-source-map',
  devServer: {
    historyApiFallback: true
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ]
});