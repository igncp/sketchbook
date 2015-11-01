var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' hints',
  body: [
    'compilations can have children compilations',
    'dependencies blocks are arranged in an hierarchical way (i.e. they have parents)'
  ],
});
