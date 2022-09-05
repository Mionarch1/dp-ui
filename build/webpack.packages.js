const { resolve } = require('./utils');
const { VueLoaderPlugin } = require('vue-loader');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  entry: './packages/index.js',
  output: {
    filename: 'dp-ui.min.js',
    path: resolve('../libs'),
    library: {
      name: 'DPUI',
      type: 'umd',
      export: 'default'
    }
  },
  resolve: {
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
      }
    ]
  },
  plugins: [new VueLoaderPlugin(), new CleanWebpackPlugin()]
};
