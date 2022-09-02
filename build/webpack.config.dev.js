const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const { resolve, loadEnv } = require('./utils');
const common = require('./webpack.config.base.js');

const NODE_ENV = process.env.NODE_ENV || 'production';
const env = loadEnv(NODE_ENV);
console.log('using env:', JSON.stringify(env, null, 2));

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'docs/js/[name].[fullhash].js',
    path: resolve('../dist'),
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['vue-style-loader', 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new Webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
      'process.env': JSON.stringify(env)
    })
  ],
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
