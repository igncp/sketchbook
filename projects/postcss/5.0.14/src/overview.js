var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' src overview',
  body: [
    c("The main components are...", [
      "The processor, which generates a result.",
      "The result uses the parse function, which handles the input and converts it in a node tree.",
      "The nodes that can be parents of other nodes are the containers (rule, at-rule and root) and the ones that not are declarations and comments.",
    ]),
  ]
});
