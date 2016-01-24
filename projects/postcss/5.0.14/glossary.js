var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' glossary',
  body: [
    c('Pending', 'Concepts with no knowledge about them', [
      "stringifier builder",
    ]),
    c('General', [
      d("container nodes", "Nodes that can be parents of other nodes: Root, AtRule, and Rule")
      d("plugin", "Can be used as middleware in the manipulation of the css"),
      d("processor", "'A Processor instance contains plugins to process CSS. Create one Processor instance, initialize its plugins, and then use that instance on numerous CSS files.'"),
      d("root node", "'Represents a CSS file and contains all its parsed nodes.'"),
    ]),
    c('Structured', [
    ]),
  ],
});
