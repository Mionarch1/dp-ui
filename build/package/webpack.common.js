const { resolve } = require('../utils');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'production',
  resolve: {
    alias: {
      '@packages': resolve('../packages'),
      '@themes': resolve('../themes')
    },
    extensions: ['.js', '.jsx', '.json', '.tsx', '.ts', '.vue', '.css', '.scss']
  },
  externals: {
    vue: 'vue'
  },
  optimization: {
    minimize: true
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          {
            loader: 'vue-loader'
          }
        ]
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }
    ]
  },
  plugins: [new VueLoaderPlugin()]
};
