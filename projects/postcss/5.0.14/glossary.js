var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' glossary',
  body: [
    c('Pending', 'Concepts with no knowledge about them', [
      "node raws"
    ]),
    c('General', [
      d("builder", "It is optionally provided to the Stringifier in the controller. It is a function, and it is called in some node types when stringifiying them.")
      d("container nodes", "Nodes that can be parents of other nodes: Root, AtRule, and Rule")
      d("plugin", "Can be used as middleware in the manipulation of the css"),
      d("processor", "'A Processor instance contains plugins to process CSS. Create one Processor instance, initialize its plugins, and then use that instance on numerous CSS files.'"),
      d("root node", "'Represents a CSS file and contains all its parsed nodes.'"),
      d("Parser", "'parse input string to node’s tree.'"),
      d("Stringifier", "'generate output string by node’s tree.'"),
      d("Syntax", "'Contains both parser and stringifier.'"),
    ]),
    c('Structured', [
    ]),
  ],
});
