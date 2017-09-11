const webpack = require('webpack');
const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  context: path.resolve(__dirname, 'src'),

  entry: {
    app: [
      'webpack-hot-middleware/client?reload=true',
      './index.jsx'
    ],
    styles: './index.less',
    vendor: ['lodash']
  },

  output: {
    path: path.join(__dirname, 'build'),
    filename: '[name].js',
    publicPath: '/'
  },

  devtool: 'eval',

  module: {
    rules: [
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'less-loader']
        })
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            plugins: ['transform-react-jsx'],
            presets: ['env']
          }
        }
      }
    ]
  },

  resolve: {
    extensions: ['.js', '.jsx', '.less']
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['common', 'vendor'],
      minChunks: 2
    }),
    new HTMLWebpackPlugin({
      title: 'Netflix API App',
      hash: true,
      template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'styles.css',
      allChunks: true
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
