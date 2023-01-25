const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const entryPath = path.join(__dirname, 'src', 'index.js');
const bundlePath = path.join(__dirname, 'dist');
const htmlTemplatePath = path.join(__dirname, 'src', 'index.html');
const assetsPath = path.resolve(__dirname, 'src', 'assets');

module.exports = {
  entry: entryPath,
  output: {
    filename: '[name].bundle.js',
    publicPath: '/',
    path: bundlePath,
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'router-demo',
      alwaysWriteToDisk: true,
      template: htmlTemplatePath,
      inject: 'body',
      clean: true,
    }),
    new CleanWebpackPlugin(),
  ],
  devtool: 'source-map',
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist'),
    },
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/i,
        type: 'asset',
      },
      {
        test: /\.(html)$/i,
        use: ['html-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.js'],
    alias: { assets: assetsPath },
  },
};
