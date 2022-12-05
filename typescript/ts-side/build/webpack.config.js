const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  entry: './src/index.ts',
  output: {
    filename: 'main.js'
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js']
  },
  module: {
    rules: [{
      test: /\.tsx?$/,
      use: 'ts-loader',
      exclude: /node_modules/
    }]
  },
  devtool: process.env.NODE_ENV === 'production' ? false : 'inline-source-map',
  // stats: 'errors-only',
  devServer: {
    static: './dist',
    compress: false,
    host: 'localhost',
    port: 8089
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.join(__dirname, '../src/template/index.html'),
      filename: 'index.html'
    }),
    new CleanWebpackPlugin()
  ]
}