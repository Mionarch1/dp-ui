const Webpack = require('webpack');
const { resolve } = require('./utils');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');

module.exports = {
  entry: './docs/main.js',
  devtool: 'source-map',
  target: 'web',
  resolve: {
    alias: {
      '@docs': resolve('../docs'),
      '@packages': resolve('../packages'),
      '@themes': resolve('../themes'),
    },
    extensions: ['.js', '.jsx', '.json', '.tsx', '.ts', '.vue', '.css', '.scss']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin()
  ],
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
        test: /\.md$/,
        use: [
          {
            loader: 'vue-loader'
          },
          {
            loader: resolve('../utils/md-loader/index.js')
          }
        ]
      },
      // swc,
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'page/images/[name].[contenthash:8][ext]'
        }
      },
      {
        test: /\.(eot|ttf|otf|woff|woff2)(\?\S*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'page/fonts/[name].[contenthash:8][ext]'
        }
      }
    ]
  }
};
