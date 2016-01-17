const webpack = require(`webpack`)
const resolve = require(`path`).resolve

const LiveReloadPlugin = require(`webpack-livereload-plugin`)

const PATHS = {
  dist: resolve(__dirname, `dist`),
  frontend: resolve(__dirname, `frontend`),
}

const isWatching = process.argv[2] === `-w`
const plugins = []
var devtool // eslint-disable-line no-var

if (isWatching) {
  devtool = `source-map`
  plugins.push(new LiveReloadPlugin())
} else {
  devtool = `eval`
  plugins.push(new webpack.optimize.OccurenceOrderPlugin())
  plugins.push(new webpack.optimize.DedupePlugin())
  plugins.push(new webpack.optimize.UglifyJsPlugin({
    compress: {
      warnings: false,
    },
    minimize: true,
  }))
}

module.exports = {
  devtool,
  entry: {
    "common-styles": resolve(PATHS.frontend, `common-styles.js`),
    diagram: resolve(PATHS.frontend, `diagram.js`),
  },
  module: {
    loaders: [{
      exclude: /(node_modules|bower_components)/,
      loader: `babel`,
      query: {
        plugins: [`transform-decorators-legacy`],
        presets: [`es2015`, `stage-0`, `react`],
      },
      test: /\.js$/,
    }, {
      loaders: [`json`],
      test: /\.json$/,
    }, {
      loaders: [`style`, `css`],
      test: /\.css$/,
    }, {
      loaders: [`style`, `css`, `sass`],
      test: /\.scss$/,
    }],
  },
  noInfo: true,
  output: {
    filename: `[name].js`,
    path: PATHS.dist,
  },
  parser: `babel-eslint`,
  plugins,
  resolve: {
    extensions: [``, `.js`, `.json`],
    modulesDirectories: [
      `frontend`,
      `node_modules`,
    ],
    root: __dirname,
  },
  sassLoader: {
    includePaths: [
      PATHS.src,
      resolve(__dirname, `node_modules`, `compass-mixins`, `lib`),
    ],
  },
}
