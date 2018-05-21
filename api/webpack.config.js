const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
  entry: slsw.lib.entries,
  target: 'node',
  // externals: ['aws-sdk'],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /(node_modules|.serverless)/,
        query: {
          presets: ['react', 'env', 'stage-0'],
        },
      },
    ],
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
};
