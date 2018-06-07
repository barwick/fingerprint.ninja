const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'whatwg-fetch',
    'babel-polyfill',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    './app/index',
  ],
  output: {
    // Compile into public/index.js
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
    filename: 'index.js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/, // Transpile all imported .js files
        loaders: ['react-hot-loader/webpack', 'babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|svg|otf)$/,
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
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval-source-map',
  devServer: {
    contentBase: './public', // ['./public', path.join(__dirname, 'static')]
    hot: true,
    noInfo: true,
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
