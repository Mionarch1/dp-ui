const { resolve } = require('../utils');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  entry: './packages/components/material/index.js',
  output: {
    filename: 'index.js',
    path: resolve('../libs/meta-ui'),
    library: {
      name: 'MetaUI',
      type: 'umd',
      export: 'default'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'meta-ui.css'
    })
  ]
});
