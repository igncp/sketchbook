var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' external libraries',
  body: [
    c('npm', [
      c('dependencies', [
        'async',
        'clone',
        c('enhanced-resolve', "Offers a async require.resolve function. It's highly configurable.", [
          d('NodeJsInputFileSystem', "An interface to the native node fs module, exposing only a few async methods"),
          d('CachedInputFileSystem', "Used to improve performance, is passed a fileStystem and a durantion and it handles caching with a Storage class.")
        ]),
        'esprima',
        'interpret',
        'memory-fs',
        'mkdirp',
        d('node-libs-browser', "The node core libs for in browser usage."),
        'optimist',
        'supports-color',
        d('tapable', "'Tapable is a class for plugin binding and applying. Just extend it.'"),
        'uglify-js',
        d('watchpack', "'Wrapper library for directory and file watching.'"),
        d('webpack-core', "'The shared core of webpack and enhanced-require. It mainly encapsulate the loader stuff, SourceMap stuff. Not useable as standalone module, but this may change in the future.'"),
      ]),
      c('devDependencies', [
        'benchmark',
        'bundle-loader',
        'codecov.io',
        'coffee-loader',
        'component-webpack-plugin',
        'coveralls',
        'css-loader',
        'diff',
        'eslint',
        'eslint-plugin-nodeca',
        'express',
        'extract-text-webpack-plugin',
        'file-loader',
        'glob',
        'i18n-webpack-plugin',
        'istanbul',
        'jade-loader',
        'js-beautify',
        'json-loader',
        'less-loader',
        'loader-utils',
        'mocha',
        'mocha-lcov-reporter',
        'raw-loader',
        'script-loader',
        'should',
        'style-loader',
        'url-loader',
        'val-loader',
        'vm-browserify',
        'webpack-dev-middleware',
        'worker-loader',
      ])
    ]),
  ]
});
