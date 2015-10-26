var d = diagrams.box.generateDefinition,
  l = diagrams.box.generateLink,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + 'resources',
  body: [
    l('Repo', "https://github.com/webpack/webpack"),
    l('Docs', "https://github.com/webpack/docs")
  ]
});
