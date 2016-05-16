var d = diagrams.box.generateDefinition,
  l = diagrams.box.generateLink,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' resources',
  body: [
    l('generator Base implementation', "https://github.com/yeoman/generator/blob/master/lib/base.js"),
  ]
});
