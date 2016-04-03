import webpack from "webpack"

import nested from "postcss-nested"
import cssnext from "postcss-cssnext"

const isProduction = process.env.NODE_ENV === "production"

const plugins = []
if (isProduction) {
  plugins.push(new webpack.optimize.UglifyJsPlugin())
}

const filename = isProduction ? "index.min.js" : "index.js"
const devtool = isProduction ? "eval" : "source-map"

export default {
  devtool,
  entry: `${__dirname}/../../frontend/main.js`,
  plugins,
  output: {
    path: `${__dirname}/../../dist`,
    filename,
  },
  resolve: {
    alias: {
      zepto: "zepto/zepto.min.js",
    },
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
      test: /zepto(\.min)?\.js$/, loader: "exports?Zepto; delete window.$; delete window.Zepto;",
    }],
  },
  postcss() {
    return [cssnext, nested]
  },
}

