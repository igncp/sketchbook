var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' overview',
  body: [
    "Prometheus is a monitoring system that focus in the pull model (although it also supports the push model by the push gateway).",
    "It is written in go, and has clients for several languages, including go.",
  ]
});
