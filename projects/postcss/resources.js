var d = diagrams.box.generateDefinition,
  l = diagrams.box.generateLink,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' resources',
  body: [
    l('Repo', "https://github.com/postcss/postcss"),
    l('Docs', "https://github.com/postcss/postcss/tree/5.0.14/docs"),
    l('Plugins list', "https://github.com/himynameisdave/postcss-plugins"),
  ]
});
