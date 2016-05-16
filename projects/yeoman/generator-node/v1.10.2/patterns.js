var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' patterns',
  body: [
    "It adds the available options in the constructor",
    "It uses `this.fs.copyTpl` for templates",
  ],
});
