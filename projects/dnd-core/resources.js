var d = diagrams.box.generateDefinition,
  l = diagrams.box.generateLink,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' resources',
  body: [
    l('Repo', "https://github.com/gaearon/dnd-core"),
    l('React dnd docs', "http://gaearon.github.io/react-dnd/docs-overview.html"),
  ]
});
