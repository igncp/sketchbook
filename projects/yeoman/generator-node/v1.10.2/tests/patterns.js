var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' tests patterns',
  body: [
    "To check that a file doesn't exist, it uses assert.noFile from yeoman-assert",
  ],
});
