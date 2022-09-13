const { resolve } = require('../utils');
const common = require('./webpack.common');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = merge(common, {
  entry: './packages/desktop/index.js',
  output: {
    filename: 'index.js',
    path: resolve('../libs/dp-ui'),
    library: {
      name: 'DPUI',
      type: 'umd',
      export: 'default'
    }
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'dp-ui.css'
    })
  ]
});
