const { merge } = require('webpack-merge');
const { resolve, loadEnv } = require('../utils');
const common = require('./webpack.base');

const NODE_ENV = process.env.NODE_ENV || 'production';
const env = loadEnv(NODE_ENV);

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'dpui-docs/js/[name].[fullhash].js',
    path: resolve('../../dist'),
    publicPath: '/'
  },
  devServer: {
    historyApiFallback: true,
    client: {
      progress: true,
      reconnect: 3,
      overlay: {
        errors: true,
        warnings: false
      }
    },
    proxy: {
      '/api': {
        target: env.APP_PROXY_URL,
        changeOrigin: true,
        rewrite: url => url.replace(/^\/api/, '')
      }
    }
  }
});
