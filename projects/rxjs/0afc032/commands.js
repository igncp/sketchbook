var d = diagrams.box.generateDefinition,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' commands',
  body: [
    d('grunt concat-min', 'Builds src (Concats and uglifies src)'),
    d('grunt qunit', 'Runs tests with the concatenated src'),
    d('grunt', 'Builds src and runs tests'),
    d('npm test', '(Same as grunt) Builds src and runs tests'),
  ]
});
