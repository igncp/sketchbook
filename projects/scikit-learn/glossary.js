var d = diagrams.box.generateDefinition,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' glossary',
  body: [
    d('featues', 'input variables, in contraposition to target variables')
  ]
});
