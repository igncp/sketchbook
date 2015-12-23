var d = diagrams.box.generateDefinition,
  l = diagrams.box.generateLink,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' resources',
  body: [
    l('Repo', "https://github.com/django/django"),
    l('Docs', "https://docs.djangoproject.com/en/1.9/"),
  ]
});
