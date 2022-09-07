const { merge } = require('webpack-merge');
const common = require('./webpack.base');
const { resolve } = require('../utils');

module.exports = merge(common, {
  mode: 'production',
  output: {
    filename: 'dpui-docs/js/[name]-[contenthash:8].js',
    path: resolve('../dist'),
    publicPath: '/'
  },
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter'
  }
});
