const Webpack = require('webpack');
const { merge } = require('webpack-merge');
const base = require('./webpack.config.base');
const { resolve, loadEnv } = require('./utils');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');

const NODE_ENV = process.env.NODE_ENV || 'production';
const env = loadEnv(NODE_ENV);

const webpackConfig = merge(base, {
  mode: 'production',
  output: {
    filename: 'docs/js/[name]-[contenthash:8].js',
    path: resolve('../dist'),
    publicPath: '/'
  },
  externals: {
    vue: 'Vue',
    'vue-router': 'VueRouter',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: ['css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new Webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
      __VUE_I18N_FULL_INSTALL__: true,
      __VUE_I18N_LEGACY_API__: false,
      __INTLIFY_PROD_DEVTOOLS__: false,
      'process.env': JSON.stringify(env)
    })
  ]
});

if (process.env.BUNDLE_ANALYZE) {
  webpackConfig.plugins.push(
    new BundleAnalyzerPlugin({
      analyzerMode: 'server',
      analyzerPort: 8889,
      statsFilename: './stats.json',
      generateStatsFile: true,
      openAnalyzer: true
    })
  );
}
module.exports = webpackConfig;
