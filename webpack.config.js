'use strict';

var path = require('path');
var NodePolyfillPlugin = require('node-polyfill-webpack-plugin');

module.exports = [{
  devtool: 'inline-source-map',
  entry: './index.js',
  mode: 'development',
  plugins: [
		new NodePolyfillPlugin()
	],
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {targets: 'defaults'}]
            ]
          }
        }
      }
    ]
  },
  name: 'sway',
  resolve: {
    fallback: {
      fs: false
    }
  },
  optimization: {
    minimize: false
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sway.js',
    library: 'Sway'
  }
}, {
  entry: './index.js',
  mode: 'production',
  plugins: [
		new NodePolyfillPlugin()
	],
  module: {
    rules: [
      {
        test: /\.m?js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env', {targets: 'defaults'}]
            ]
          }
        }
      }
    ]
  },
  name: 'sway-min',
  resolve: {
    fallback: {
      fs: false
    }
  },
  optimization: {
    minimize: true
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'sway-min.js',
    library: 'Sway'
  }
}];
