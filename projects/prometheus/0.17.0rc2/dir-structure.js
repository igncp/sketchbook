var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' structure',
  body: [
    c("prometheus", [
      c("cmd", [
        d("prometheus"),
        d("promtool"),
      ]),
      c("config", [
        d("testdata"),
      ]),
      d("console_libraries"),
      d("consoles"),
      c("documentation", [
        d("examples"),
        d("images"),
      ]),
      d("notification"),
      c("promql", [
        d("testdata"),
      ]),
      c("retrieval", [
        c("discovery", [
          d("fixtures"),
          d("kubernetes"),
          d("marathon"),
        ]),
        d("testdata"),
      ]),
      d("rules"),
      d("scripts"),
      c("storage", [
        c("local", [
          d("codable"),
          c("fixtures", [
            d("b0"),
          ]),
          d("index"),
        ]),
        d("metric"),
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
      c("vendor", [
        c("github.com", [
          c("Sirupsen", [
            d("logrus"),
          ]),
          c("asaskevich", [
            d("govalidator"),
          ]),
          c("aws", [
            c("aws-sdk-go", [
              c("aws", [
                d("awserr"),
                d("awsutil"),
                d("corehandlers"),
                c("credentials", [
                  d("ec2rolecreds"),
                ]),
                d("defaults"),
                d("ec2metadata"),
                d("request"),
                c("service", [
                  d("serviceinfo"),
                ]),
              ]),
              c("internal", [
                d("endpoints"),
                c("protocol", [
                  d("ec2query"),
                  c("query", [
                    d("queryutil"),
                  ]),
                  d("rest"),
                  c("xml", [
                    d("xmlutil"),
                  ]),
                ]),
                c("signer", [
                  d("v4"),
                ]),
              ]),
              c("service", [
                d("ec2"),
              ]),
            ]),
          ]),
          c("beorn7", [
            c("perks", [
              d("quantile"),
            ]),
          ]),
          c("golang", [
            c("protobuf", [
              d("proto"),
            ]),
            d("snappy"),
          ]),
          c("hashicorp", [
            c("consul", [
              d("api"),
            ]),
          ]),
          c("influxdb", [
            c("influxdb", [
              d("client"),
              d("tsdb"),
            ]),
          ]),
          c("julienschmidt", [
            d("httprouter"),
          ]),
          c("matttproud", [
            c("golang_protobuf_extensions", [
              d("pbutil"),
            ]),
          ]),
          c("miekg", [
            d("dns"),
          ]),
          c("prometheus", [
            c("client_golang", [
              d("prometheus"),
            ]),
            c("client_model", [
              d("go"),
            ]),
            c("common", [
              d("expfmt"),
              c("internal", [
                c("bitbucket.org", [
                  c("ww", [
                    d("goautoneg"),
                  ]),
                ]),
              ]),
              d("log"),
              d("model"),
              d("route"),
            ]),
            d("procfs"),
          ]),
          c("samuel", [
            c("go-zookeeper", [
              d("zk"),
            ]),
          ]),
          c("syndtr", [
            c("goleveldb", [
              c("leveldb", [
                d("cache"),
                d("comparer"),
                d("errors"),
                d("filter"),
                d("iterator"),
                d("journal"),
                d("memdb"),
                d("opt"),
                d("storage"),
                d("table"),
                d("util"),
              ]),
            ]),
          ]),
          c("vaughan0", [
            d("go-ini"),
          ]),
        ]),
        c("golang.org", [
          c("x", [
            c("net", [
              c("context", [
                d("ctxhttp"),
              ]),
            ]),
          ]),
        ]),
        c("gopkg.in", [
          d("fsnotify.v1"),
          d("yaml.v2"),
        ]),
      ]),
      d("version"),
      c("web", [
        c("api", [
          d("legacy"),
          d("v1"),
        ]),
        c("ui", [
          c("static", [
            d("css"),
            d("img"),
            d("js"),
            c("vendor", [
              c("bootstrap-3.3.1", [
                d("css"),
                d("fonts"),
                d("js"),
              ]),
              d("bootstrap-datetimepicker"),
              d("bootstrap3-typeahead"),
              d("js"),
              c("rickshaw", [
                d("vendor"),
              ]),
            ]),
          ]),
          d("templates"),
        ]),
      ]),
    ]),
  ]
});
