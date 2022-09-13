const Webpack = require('webpack');
const { resolve, loadEnv } = require('../utils');
const { VueLoaderPlugin } = require('vue-loader');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const NODE_ENV = process.env.NODE_ENV || 'production';
const env = loadEnv(NODE_ENV);
console.log('using env:', JSON.stringify(env));

module.exports = {
  entry: './docs/main.js',
  devtool: 'source-map',
  target: 'web',
  resolve: {
    alias: {
      '@docs': resolve('../docs'),
      '@packages': resolve('../packages'),
      '@themes': resolve('../themes')
    },
    extensions: ['.js', '.jsx', '.json', '.tsx', '.ts', '.vue', '.css', '.scss', '.md']
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html'
    }),
    new VueLoaderPlugin(),
    new Webpack.DefinePlugin({
      __VUE_OPTIONS_API__: true,
      __VUE_PROD_DEVTOOLS__: true,
      __INTLIFY_PROD_DEVTOOLS__: false,
      'process.env': JSON.stringify(env)
    }),
    new MiniCssExtractPlugin({
      filename: 'dpui-docs/css/[name]-[contenthash:8].css'
    }),
    new CleanWebpackPlugin()
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
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader']
      },
      {
        test: /\.(scss|sass)$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(png|jpg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'dpui-docs/images/[name].[contenthash:8][ext]'
        }
      },
      {
        test: /\.(eot|ttf|otf|woff|woff2)(\?\S*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'dpui-docs/fonts/[name].[contenthash:8][ext]'
        }
      }
    ]
  }
};
