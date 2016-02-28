var d = diagrams.box.generateDefinition,
  l = diagrams.box.generateLink,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' resources',
  body: [
    l('Repo', "https://github.com/prometheus/prometheus"),
    l('Go Walker entry (latest)', "https://gowalker.org/github.com/prometheus/prometheus/config"),
    l('Docs (latest)', "http://prometheus.io/docs/introduction/overview/"),
    l('GoDoc (latest)', "https://godoc.org/github.com/prometheus/prometheus"),
  ]
});
