var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' code overview',
  body: [
    c("lib", [
      c('Compiler.js', [
        "Requires dependencies",
        c("Defines the Watching constructor and prototype properties", [
          d('constructor(compiler, watchOptions, handler)', "Sets properties, reads the compiler records and if everything went fine, sets some stats, compiles, emitAssets and starts watching."),
          '... (eg. watch, invalidate, close, etc.)'
        ]),
        c("Defines the Compiler constructor and prototype properties", [
          d('constructor()', "It extends the Tapable constructor. It sets own properties, and initializes the resolvers and the parser."),
          "Attaches the Watching class to the Compiler directly: Compiler.Watching = Watching",
          "Defines all the prototype methods. The `run` is the one called by webpack if it is not watching."
        ]),
      ]),
      c('webpack.js', 'Exposes (one ?) entry point of the library, along with many modules', [
        "Requires the first level modules: Compiler, MultiCompiler, NodeEnvironmentPlugin, WebpackOptionsApply, WebpackOptionsDefaulter",
        c("Defines the main exported function, which accepts options and a callback", [
          "Creates the compiler, with some defaults, and applies an environment-related plugin",
          "Returns the compiler unless there is a callback, in which case it runs it with the compiler as an argument"
        ]),
        "Exposes the `webpack` function, with many modules (not all) attached to it as properties"
      ])
    ]),
  ]
});
