var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: 'prometheus packages',
  body: [
    "Note: When a parent directory has its own package, it's duplicated",
    c("cmd", [
      d("prometheus"),
      d("promtool"),
    ]),
    d("config"),
    d("notification"),
    d("promql"),
    d("retrieval"),
    c("retrieval", [
      d("discovery"),
      c("discovery", [
        d("marathon"),
        d("kubernetes"),
      ]),
    ]),
    d("rules"),
    d("storage"),
    c("storage", [
      d("local"),
      c("local", [
        d("codable"),
        d("index"),
      ]),
      d("metric"),
      d("remote"),
      c("remote", [
        d("graphite"),
        d("influxdb"),
        d("opentsdb"),
      ]),
    ]),
    d("template"),
    c("util", [
      d("cli"),
      d("flock"),
      d("httputil"),
      d("stats"),
      d("strutil"),
      d("testutil"),
      d("treecache"),
    ]),
    d("version"),
    d("web"),
    c("web", [
      c("api", [
        d("legacy"),
        d("v1"),
      ]),
      d("ui"),
    ]),
  ]
});
