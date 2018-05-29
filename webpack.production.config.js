const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: ['babel-polyfill', './app/index'],
  output: {
    // Compile into js/build.js
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
  ],
};
