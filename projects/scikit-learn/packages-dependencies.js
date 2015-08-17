var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' packages dependencies',
  body: [
    c('python', [
      'NumPy',
      'SciPy',
      'Nosetests',
      d('Sphinx', 'For the docs'),
    ]),
    c('other', [
      d('ATLAS', 'Automatically Tuned Linear Algebra Software'),
    ]),
  ]
});
