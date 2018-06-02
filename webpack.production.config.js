const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: ['whatwg-fetch', 'babel-polyfill', './app/index'],
  output: {
    // Compile into production/index.js
    path: path.resolve(__dirname, 'production'),
    publicPath: '/',
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // Transpile all imported .js files
        loaders: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|svg|otf)$/,
        loader: 'file-loader?name=img-[hash:6].[ext]',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js'],
  },
  target: 'web', // Make web variables accessible to webpack, e.g. window
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
    }),
    new webpack.optimize.UglifyJsPlugin({
      parallel: true,
      compress: {
        keep_fnames: true,
      },
      mangle: {
        keep_fnames: true, // maintains the `.name` property for function objects
      },
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
  ],
};
