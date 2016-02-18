var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' src patterns',
  body: [
    "`Must` is a prefix used in functions that panic instead of returning an error",
  ],
});
