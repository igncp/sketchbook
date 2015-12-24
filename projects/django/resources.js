var d = diagrams.box.generateDefinition,
  l = diagrams.box.generateLink,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' resources',
  body: [
    l('Repo', "https://github.com/django/django"),
    l('Official resources', "https://code.djangoproject.com/wiki/DjangoResources"),
    l('Docs', "https://docs.djangoproject.com/en/1.9/"),
    l('Contribution guidelines', "https://docs.djangoproject.com/en/1.9/internals/contributing/"),
    l('Easy tickets', "https://code.djangoproject.com/query?status=!closed&easy=1"),
  ]
});
