const { resolve } = require('../utils');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  entry: './packages/components/mobile/index.js',
  output: {
    filename: 'index.js',
    path: resolve('../libs/dpm-ui'),
    library: {
      name: 'DPMUI',
      type: 'umd',
      export: 'default'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'dpm-ui.css'
    })
  ]
});
