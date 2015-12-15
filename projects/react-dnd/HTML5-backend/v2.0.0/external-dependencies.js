var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer;

diagrams.box({
  name: 'react-dnd-html5-backend external dependencies',
  body: [
    c('npm', [
      c('dependencies', [
        d('lodash'),
      ]),
      c('devDependencies', [
        d('babel'),
        d('babel-eslint'),
        d('babel-loader'),
        d('eslint'),
        d('eslint-config-airbnb'),
        d('expect.js'),
        d('mocha'),
        d('rimraf'),
        d('webpack'),
      ]),
      c('peerDependencies', [
        d('react-dnd'),
      ]),
    ]),
  ]
});
