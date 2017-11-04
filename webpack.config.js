var webpack = require('webpack')
var combineLoaders = require('webpack-combine-loaders')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var path = require('path')


module.exports = {
  context: path.join(__dirname, 'app/views'),
  devtool: process.env.NODE_ENV !== 'production' ? 'inline-sourcemap' : null,
  entry: {
    app: './js/appEntry.js',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-0'],
          plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy']
        }
      },
      {
        test: /\.css$/,
        loader: combineLoaders([
          {
            loader: 'style-loader'
          }, {
            loader: 'css-loader',
            query: {
              modules: true,
              localIdentName: '[name]__[local]___[hash:base64:5]'
            }
          }
        ])
      }
    ]
  },
  output: {
    path: path.join(__dirname, 'app/build'),
    filename: '[name].min.js'
  },

  plugins: process.env.NODE_ENV !== 'production' ? [
    new ExtractTextPlugin('styles.css'),
  ] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]

}

