var d = diagrams.box.generateDefinition,
  l = diagrams.box.generateLink,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' resources',
  body: [
    l('Repo', "https://github.com/prometheus/prometheus"),
    l('Go Walker entry', "https://gowalker.org/github.com/prometheus/prometheus/config"),
    l('Docs', "http://prometheus.io/docs/introduction/overview/"),
  ]
});
