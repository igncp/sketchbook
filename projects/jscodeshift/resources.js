var d = diagrams.box.generateDefinition,
  l = diagrams.box.generateLink,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + 'resources',
  body: [
    l('Repo', "https://github.com/facebook/jscodeshift"),
    l('Article', "https://medium.com/@cpojer/effective-javascript-codemods-5a6686bb46fb"),
    l('Presentation', "https://www.youtube.com/watch?v=d0pOgY8__JM"),
  ]
});
