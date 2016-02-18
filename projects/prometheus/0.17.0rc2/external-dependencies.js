var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' external dependencies',
  body: [
    c("vendor", [
      c("vendor", [
        c("github.com", [
          c("asaskevich", [
            d("govalidator", "'Package of validators and sanitizers for strings, numerics, slices and structs'"),
          ]),
          c("aws", [
            d("aws-sdk-go"),
          ]),
          c("beorn7", [
            d("perks", "'Perks contains the Go package quantile that computes approximate quantiles over an unbounded data stream within low memory and CPU bounds.'"),
          ]),
          c("golang", [
            d("protobuf", "'Go support for Google's protocol buffers'"),
            d("snappy", "'The Snappy compression format in the Go programming language.'"),
          ]),
          c("hashicorp", [
            d("consul", "'Consul is a tool for service discovery, monitoring and configuration'"),
          ]),
          c("influxdb", [
            d("influxdb"),
          ]),
          c("julienschmidt", [
            d("httprouter"),
          ]),
          c("matttproud", [
            d("golang_protobuf_extensions"),
          ]),
          c("miekg", [
            d("dns", "'Alternative (more granular) approach to a DNS library'"),
          ]),
          c("prometheus", [
            d("client_golang", "'Prometheus instrumentation library for Go applications'"),
            d("client_model", "'Data model artifacts for Prometheus.'"),
            d("common", "'This repository contains Go libraries that are shared across Prometheus components and libraries.'"),
            d("procfs", "'procfs provides functions to retrieve system, kernel and process metrics from the pseudo-filesystem proc.'"),
          ]),
          c("samuel", [
            d("go-zookeeper", "'Native ZooKeeper client for Go' 'Apache ZooKeeper is an effort to develop and maintain an open-source server which enables highly reliable distributed coordination.'"),
          ]),
          c("Sirupsen", [
            d("logrus"),
          ]),
          c("syndtr", [
            d("goleveldb", "'LevelDB key/value database in Go.'"),
          ]),
          c("vaughan0", [
            d("go-ini", "'INI parsing library for Go.'"),
          ]),
        ]),
        c("golang.org", [
          c("x", [
            d("net"),
          ]),
        ]),
        c("gopkg.in", [
          d("fsnotify.v1"),
          d("yaml.v2"),
        ]),
      ]),
    ]),
  ]
});
