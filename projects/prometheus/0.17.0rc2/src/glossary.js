var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' domain glossary',
  body: [
    c('Pending', 'Concepts with no knowledge about them', [
      c("prometheus", [
        c("cmd", [
          c("prometheus", [
            c("config.go", [
              "query engine",
              "sync strategy (e.g. adaptive)",
            ]),
            c("main.go", [
              "fanout", "target manager", "rule manager",
            ]),
          ]),
        ]),
        c("config", [
          c("config.go", [
            "[prometheus] model",
            "bearer token file",
            "ca file",
            "config.xxx",
            "[Twitter] serverset",
            "marshall/unmarshall",
            "refresh interval",
            "scheme(http)",
            "scrape/evaluation",
            "sd config",
            "serverset",
            "target groups",
            "tls config",
            "type (srv)",
          ]),
        ]),
      ])
    ]),
    c('General', [
      d("prometheus target", "'One application, server or endpoint that Prometheus is scraping.'"),
      d("prometheus instance", "'Any individually scraped target is called an instance, usually corresponding to a single process. A collection of instances of the same type (replicated for scalability or reliability) is called a job.'"),
      d("prometheus counter", "'A counter is a cumulative metric that represents a single numerical value that only ever goes up. A counter is typically used to count requests served, tasks completed, errors occurred, etc.'"),
      d("prometheus gauge", "'A gauge is a metric that represents a single numerical value that can arbitrarily go up and down.'"),
    ]),
    c('Structured', [
      c("cmd", [
        c("prometheus", [
          c("main.go", [
            d("reloadable", "'Reloadable things can change their internal state to match a new config and handle failure gracefully.'"),
          ]),
        ]),
        c("promtool", [
          c("main.go", [
            d("promtool", "'To quickly check whether a rule file is syntactically correct without starting a Prometheus server, install and run Prometheus's promtool command-line utility tool. Aims: validate configuration files for correctness, validate rule files for correctness'"),
          ]),
        ]),
      ]),
      c("config", [
        c("config.go", [
          d("AirBnB Nerve", "'Nerve is a utility for tracking the status of machines and services. It runs locally on the boxes which make up a distributed system, and reports state information to a distributed key-value store.'"),
          d("Consul datacenter", "'We define a datacenter to be a networking environment that is private, low latency, and high bandwidth. This excludes communication that would traverse the public internet, but for our purposes multiple availability zones within a single EC2 region would be considered part of a single datacenter.'"),
          d("EC2", "'Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.'"),
          d("honor labels", "'Whether the target's labels have precedence over the base labels assigned by the scraping instance.'"),
          d("Kubernetes kubelet", "'The kubelet is the primary \"node agent\" that runs on each node. The kubelet works in terms of a PodSpec. A PodSpec is a YAML or JSON object that describes a pod. The kubelet takes a set of PodSpecs that are provided through various mechanisms (primarily through the apiserver) and ensures that the containers described in those PodSpecs are running and healthy.'"),
          d("label", "'Use labels to differentiate the characteristics of the thing that is being measured'"),
          d("Marathon", "By mesosphere. 'A cluster-wide init and control system for services in cgroups or Docker containers'"),
          d("model", "'Prometheus fundamentally stores all data as time series: streams of timestamped values belonging to the same metric and the same set of labeled dimensions. Besides stored time series, Prometheus may generate temporary derived time series as the result of queries.'"),
          d("relabel", "'Relabeling is a powerful tool to dynamically rewrite the label set of a target before it gets scraped. Multiple relabeling steps can be configured per scrape configuration. They are applied to the label set of each target in order of their appearance in the configuration file.'"),
          d("rule files", "'Prometheus supports two types of rules which may be configured and then evaluated at regular intervals: recording rules and alerting rules. [...] The rule files can be reloaded at runtime by sending SIGHUP to the Prometheus process. The changes are only applied if all rule files are well-formatted.'"),
          d("SD", "Service Discovery"),
          d("target address", "'ip of the target'"),
          d("TLS", "'Transport Layer Security (TLS) is a protocol that ensures privacy between communicating applications and their users on the Internet. When a server and client communicate, TLS ensures that no third party may eavesdrop or tamper with any message. TLS is the successor to the Secure Sockets Layer (SSL).'"),
        ])
      ]),
    ]),
  ],
});
