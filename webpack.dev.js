const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const webpack = require('webpack');
const localIp = require('my-local-ip')();

console.log(`Loacal IP is ${localIp}`);
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    host: localIp,
    port: 3000,
    hot: true,
    open: true
  },
  plugins: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
});