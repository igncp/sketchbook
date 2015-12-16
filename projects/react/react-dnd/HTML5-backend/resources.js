var d = diagrams.box.generateDefinition,
  l = diagrams.box.generateLink,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' resources',
  body: [
    l('Repo', "https://github.com/gaearon/react-dnd-html5-backend"),
    l('React dnd docs', "http://gaearon.github.io/react-dnd/docs-overview.html"),
  ]
});
