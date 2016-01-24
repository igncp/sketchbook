var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' hints',
  body: [
    "PLUGIN1.process(css, options) is the same than postcss([ PLUGIN1(options) ]).process(css);",
    "Existing node types: root, atrule, rule, decl, or comment",
  ],
});
