var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer;

diagrams.box({
  name: 'dnd-core external libraries',
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
