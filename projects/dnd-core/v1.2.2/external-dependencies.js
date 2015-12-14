var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' external libraries',
  body: [
    c('npm', [
      c('dependencies', [
        "invariant",
        "lodash",
        "redux",
      ]),
      c('devDependencies', [
        'babel',
        'babel-plugin-object-assign',
        'expect.js',
        'istanbul',
        'mocha',
        'rimraf',
      ])
    ]),
  ]
});
