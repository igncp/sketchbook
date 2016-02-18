var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' domain glossary',
  body: [
    c('Pending', 'Concepts with no knowledge about them', [
      c("prometheus", [
        c("config", [
          c("config.go", [
            "[prometheus] model",
            "bearer token file",
            "ca file",
            "config.xxx",
            "[Twitter] serverset",
            "honor labels",
            "marshall/unmarshall",
            "refresh interval",
            "relabel",
            "rule files",
            "scheme(http)",
            "scrape/evaluation",
            "sd config",
            "serverset",
            "target address",
            "label",
            "target groups",
            "tls config",
            "type (srv)",
          ])
        ]),
      ])
    ]),
    c('General', []),
    c('Structured', [
      c("config", [
        c("config.go", [
          d("AirBnB Nerve", "'Nerve is a utility for tracking the status of machines and services. It runs locally on the boxes which make up a distributed system, and reports state information to a distributed key-value store.'"),
          d("Consul datacenter", "'We define a datacenter to be a networking environment that is private, low latency, and high bandwidth. This excludes communication that would traverse the public internet, but for our purposes multiple availability zones within a single EC2 region would be considered part of a single datacenter.'"),
          d("EC2", "'Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.'"),
          d("Kubernetes kubelet", "'The kubelet is the primary \"node agent\" that runs on each node. The kubelet works in terms of a PodSpec. A PodSpec is a YAML or JSON object that describes a pod. The kubelet takes a set of PodSpecs that are provided through various mechanisms (primarily through the apiserver) and ensures that the containers described in those PodSpecs are running and healthy.'"),
          d("Marathon", "By mesosphere. 'A cluster-wide init and control system for services in cgroups or Docker containers'"),
          d("model", "'Prometheus fundamentally stores all data as time series: streams of timestamped values belonging to the same metric and the same set of labeled dimensions. Besides stored time series, Prometheus may generate temporary derived time series as the result of queries.'"),
          d("SD", "Service Discovery"),
          d("TLS", "'Transport Layer Security (TLS) is a protocol that ensures privacy between communicating applications and their users on the Internet. When a server and client communicate, TLS ensures that no third party may eavesdrop or tamper with any message. TLS is the successor to the Secure Sockets Layer (SSL).'"),
        ])
      ]),
    ]),
  ],
});
