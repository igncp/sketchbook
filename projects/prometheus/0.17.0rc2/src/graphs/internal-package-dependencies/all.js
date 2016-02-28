var n = diagrams.graph.generateNode,
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted'),
  config = {};

config.info = ["Internal package-dependencies"];
config[diagrams.graph.configurationKeys.SHY_CONNECTIONS] = true;

diagrams.graph([
  n("prometheus", [0, 2, 3, 4, 5, 9, 10, 11, 15, 13, 27, 28], "cmd/prometheus"),
  n("cli", [20], "util/cli"),
  n("codable", [14], "storage/local/codable"),
  n("config", [2], "config"),
  n("discovery", [6, 2, 24, 8, 7, 26], "retrieval/discovery"),
  n("flock", [21], "util/flock"),
  n("graphite", [16], "storage/remote/graphite"),
  n("httputil", [22], "util/httputil"),
  n("index", [15, 15], "storage/local/index"),
  n("influxdb", [17], "storage/remote/influxdb"),
  n("kubernetes", [8, 2, 24, 22], "retrieval/discovery/kubernetes"),
  n("legacy", [30, 4, 22, 11], "web/api/legacy"),
  n("local", [11, 12, 14, 15, 21], "storage/local"),
  n("marathon", [7, 2], "retrieval/discovery/marathon"),
  n("metric", [12], "storage/metric"),
  n("notification", [3, 2], "notification"),
  n("opentsdb", [18, 22], "storage/remote/opentsdb"),
  n("promql", [4, 11, 12, 23, 24], "promql"),
  n("promtool", [1, 2, 4, 20, 27], "cmd/promtool"),
  n("remote", [13, 2, 16, 18, 17], "storage/remote"),
  n("retrieval", [5, 2, 10, 11, 22, 6], "retrieval"),
  n("rules", [9, 4, 24, 2, 3, 10, 19, 24], "rules"),
  n("stats", [23], "util/stats"),
  n("storage", [10], "storage"),
  n("strutil", [24], "util/strutil"),
  n("template", [19, 4, 24], "template"),
  n("testutil", [25], "util/testutil Required by tests, which are omitted"),
  n("treecache", [26], "util/treecache"),
  n("ui", [29], "web/ui"),
  n("v1", [31, 4, 11, 12, 22], "web/api/v1"),
  n("version", [27], "version"),
  n("web", [28, 4, 12, 2, 5, 9, 11, 19, 22, 27, 30, 31, 29], "web"),
], config);
