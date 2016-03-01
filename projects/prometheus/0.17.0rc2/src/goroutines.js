var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: 'prometheus goroutines number (excluding tests) (48)',
  body: [
    c("cmd: 7", [
      c("prometheus: 7"),
      c("promtool: 0"),
    ]),
    d("config: 0"),
    d("notification: 0"),
    d("promql: 1"),
    d("retrieval: 10"),
    c("retrieval: 10", [
      d("discovery: 6"),
      c("discovery: 4", [
        d("marathon: 0"),
        d("kubernetes: 4"),
      ]),
    ]),
    d("rules: 3"),
    d("storage: 0"),
    c("storage: 15", [
      d("local: 12"),
      c("local", [
        d("codable: 0"),
        d("index: 0"),
      ]),
      d("metric: 0"),
      d("remote: 3"),
      c("remote: 0", [
        d("graphite: 0"),
        d("influxdb: 0"),
        d("opentsdb: 0"),
      ]),
    ]),
    d("template: 0"),
    c("util: 2", [
      d("cli: 0"),
      d("flock: 0"),
      d("httputil: 0"),
      d("stats: 0"),
      d("strutil: 0"),
      d("testutil: 0"),
      d("treecache: 2"),
    ]),
    d("version: 0"),
    d("web: 0"),
    c("web: 0", [
      c("api: 0", [
        d("legacy: 0"),
        d("v1: 0"),
      ]),
      d("ui: 0"),
    ]),
  ]
});
