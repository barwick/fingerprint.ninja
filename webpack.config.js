const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'babel-polyfill',
    'webpack-dev-server/client',
    'webpack/hot/only-dev-server',
    './app/index',
  ],
  output: {
    // Compile into js/build.js
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
        test: /\.(png|svg|otf)$/,
        loader: 'file-loader?name=img-[hash:6].[ext]',
      },
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './app/index.html',
    }),
    new webpack.HotModuleReplacementPlugin(),
  ],
  resolve: {
    modules: ['node_modules', 'app'],
    extensions: ['.js'],
  },
  devtool: 'eval-source-map',
  target: 'web', // Make web variables accessible to webpack, e.g. window
  devServer: {
    contentBase: './public', // ['./public', path.join(__dirname, 'static')]
    hot: true,
    noInfo: true,
    historyApiFallback: {
      index: 'index.html',
    },
  },
};
