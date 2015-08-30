var d = diagrams.box.generateDefinition,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' dev commands',
  body: [
    d('grunt', 'Builds react'),
  ]
});
