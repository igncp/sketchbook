import webpack from "webpack"

import nested from "postcss-nested"
import cssnext from "postcss-cssnext"

const isProduction = process.env.NODE_ENV === "production"

const plugins = []

if (isProduction) {
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    minimize: true,
  }))
}
const filename = isProduction ? "index.min.js" : "index.js"
const devtool = isProduction ? "cheap-module-source-map" : "source-map"

export default {
  devtool,
  entry: `${__dirname}/../../frontend/main.js`,
  plugins,
  output: {
    path: `${__dirname}/../../dist`,
    filename,
  },
  resolve: {
    extensions: ["", ".webpack.js", ".web.js", ".js", ".ts"],
    alias: {
      zepto: "zepto/zepto.min.js",
    },
  },
  node: {
    __dirname: true,
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      loader: "babel",
    }, {
      test: /\.css$/,
      exclude: /(node_modules|bower_components)/,
      loaders: ["style", "css", "postcss"],
    }, {
      test: /\.ts$/,
      exclude: /(node_modules|bower_components)/,
      loader: "ts",
    }, {
      test: /zepto(\.min)?\.js$/, loader: "exports?Zepto; delete window.$; delete window.Zepto;",
    }],
  },
  postcss() {
    return [cssnext, nested]
  },
}
