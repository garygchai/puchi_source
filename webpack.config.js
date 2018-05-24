const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: {
    index: './static/index.tsx',
  },
  output: {
    path: path.resolve(__dirname, 'public/static/share'),
    // filename: '[name].[hash].bundle.js'
    filename: '[name].bundle.js'
  },
  mode: 'development',
  devServer: {
    contentBase: path.resolve(__dirname, 'public/static/share')
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/

      },
      {
        test: /\.(less|css)$/,
        use: [
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 25000,
          name: '[path][name].[hash].[ext]'
        }
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
};