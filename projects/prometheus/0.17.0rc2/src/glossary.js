var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' domain glossary',
  body: [
    c('Pending', 'Concepts with no knowledge about them', [
      "hierarchical and horizontal federation",
      "console libraries",
      c("prometheus", [
        c("cmd", [
          c("prometheus", [
            c("config.go", [
              "sync strategy (e.g. adaptive)",
            ]),
            c("main.go", [
              "fanout",
              "target manager",
              "rule manager",
            ]),
          ]),
        ]),
        c("config", [
          c("config.go", [
            "config.xxx",
            "refresh interval",
            "sd config",
            "serverset",
            "target groups",
            "type (srv)",
          ]),
        ]),
        c("retrieval", [
          c("relabel.go", [
            "dropped label set",
            "relabel configurations",
            "relabel hash mod",
            "relabeled label set",
            "source labels",
          ]),
          c("targetmanager.go", [
            "sample appender",
            "sync wait group",
            "stale targets",
            "intersecting targets",
            "target provider mechanism",
            "meta labels",
          ]),
        ]),
      ])
    ]),
    c('General', [
      d("prometheus target", "'One application, server or endpoint that Prometheus is scraping.'"),
      d("prometheus instance", "'Any individually scraped target is called an instance, usually corresponding to a single process. A collection of instances of the same type (replicated for scalability or reliability) is called a job.'"),
      d("prometheus counter", "'A counter is a cumulative metric that represents a single numerical value that only ever goes up. A counter is typically used to count requests served, tasks completed, errors occurred, etc.'"),
      d("prometheus gauge", "'A gauge is a metric that represents a single numerical value that can arbitrarily go up and down.'"),
      d("prometheus model", "A package inside the external common repository. It exposes several data structures (e.g. metric). The files are:  alert, fingerprinting, fnv, labels, labelset, metric, model, signature, silence, time, value. From the 'Data model' page in the docs: 'Prometheus fundamentally stores all data as time series: streams of timestamped values belonging to the same metric and the same set of labeled dimensions. Besides stored time series, Prometheus may generate temporary derived time series as the result of queries.'"),
    ]),
    c('Structured', [
      c("cmd", [
        c("prometheus", [
          c("main.go", [
            d("query engine", "'Engine handles the lifetime of queries from beginning to end. It is connected to a storage.' 'A Query is derived from an a raw query string and can be run against an engine it is associated with.' The queries are in the promql syntax"),
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
          d("CA file", "In TLS, CA means Certificate Authority. 'The browser/application has a list of trusted CA certificates and can check - when the connection is made it will check the signature against this list of trusted CAs.'"),
          d("Consul datacenter", "'We define a datacenter to be a networking environment that is private, low latency, and high bandwidth. This excludes communication that would traverse the public internet, but for our purposes multiple availability zones within a single EC2 region would be considered part of a single datacenter.'"),
          d("EC2", "'Amazon Elastic Compute Cloud (Amazon EC2) is a web service that provides resizable compute capacity in the cloud. It is designed to make web-scale cloud computing easier for developers.'"),
          d("honor labels", "'Whether the target's labels have precedence over the base labels assigned by the scraping instance.'"),
          d("Kubernetes kubelet", "'The kubelet is the primary \"node agent\" that runs on each node. The kubelet works in terms of a PodSpec. A PodSpec is a YAML or JSON object that describes a pod. The kubelet takes a set of PodSpecs that are provided through various mechanisms (primarily through the apiserver) and ensures that the containers described in those PodSpecs are running and healthy.'"),
          d("label", "'Use labels to differentiate the characteristics of the thing that is being measured'"),
          d("Marathon", "By mesosphere. 'A cluster-wide init and control system for services in cgroups or Docker containers'"),
          d("marshall/unmarshall", "' marshalling or marshaling is the process of transforming the memory representation of an object to a data format suitable for storage or transmission, and it is typically used when data must be moved between different parts of a computer program or from one program to another. Marshalling is similar to serialization and is used to communicate to remote objects with an object, in this case a serialized object.' In this case the format is YAML"),
          d("model", "'Prometheus fundamentally stores all data as time series: streams of timestamped values belonging to the same metric and the same set of labeled dimensions. Besides stored time series, Prometheus may generate temporary derived time series as the result of queries.'"),
          d("relabel", "'Relabeling is a powerful tool to dynamically rewrite the label set of a target before it gets scraped. Multiple relabeling steps can be configured per scrape configuration. They are applied to the label set of each target in order of their appearance in the configuration file.'"),
          d("rule files", "'Prometheus supports two types of rules which may be configured and then evaluated at regular intervals: recording rules and alerting rules. [...] The rule files can be reloaded at runtime by sending SIGHUP to the Prometheus process. The changes are only applied if all rule files are well-formatted.'"),
          d("SD", "Service Discovery"),
          d("target address", "'ip of the target'"),
          d("TLS", "'Transport Layer Security (TLS) is a protocol that ensures privacy between communicating applications and their users on the Internet. When a server and client communicate, TLS ensures that no third party may eavesdrop or tamper with any message. TLS is the successor to the Secure Sockets Layer (SSL).'"),
          d("Twitter serverset", "An interface from Twitter's Zookeper lib. 'A logical set of servers registered in ZooKeeper. Intended to be used by both servers in a common service and their clients.'"),
          d("bearer token file", "OAuth 2.0: 'Bearer tokens are the default type of access tokens. They are automatically enabled when either an Authorization Server or Resource Server are initialized.' ' Any party in possession of a bearer token (a \"bearer\") can use it to get access to the associated resources (without demonstrating possession of a cryptographic key).  To prevent misuse, bearer tokens need to be protected from disclosure in storage and in transport.' The file is for the targets, as a property in the ScrapeConfig"),
        ])
      ]),
      c("notification.go", [
        d("BuildFQName", "func BuildFQName(namespace, subsystem, name string) string. 'BuildFQName joins the given three name components by \"_\". Empty name components are ignored. If the name parameter itself is empty, an empty string is returned, no matter what. Metric implementations included in this library use this function internally to generate the fully-qualified metric name from the name component in their Opts. Users of the library will only need this function if they implement their own Metric or instantiate a Desc (with NewDesc) directly.'"),
        d("collector interface", "'Collector is the interface implemented by anything that can be used by Prometheus to collect metrics. [...] The stock metrics provided by this package (like Gauge, Counter, Summary) are also Collectors (which only ever collect one metric, namely itself). An implementer of Collector may, however, collect multiple metrics in a coordinated fashion and/or create metrics on the fly.'"),
        d("context (x/net/context package)", "'Package context defines the Context type, which carries deadlines, cancelation signals, and other request-scoped values across API boundaries and between processes. Incoming requests to a server should create a Context, and outgoing calls to servers should accept a Context. The chain of function calls between must propagate the Context, optionally replacing it with a modified copy created using WithDeadline, WithTimeout, WithCancel, or WithValue.'"),
        d("context http (x/net/ctxhttp package)", "'Package ctxhttp provides helper functions for performing context-aware HTTP requests.'"),
        d("summary data type", "In client_golang, 'A Summary captures individual observations from an event or sample stream and summarizes them in a manner similar to traditional summary statistics: 1. sum of observations, 2. observation count, 3. rank estimations. A typical use-case is the observation of request latencies. By default, a Summary provides the median, the 90th and the 99th percentile of the latency as rank estimations.'"),
      ]),
      c("retrieval", [
        c("relabel.go", [
          d("md5 hash", "'The MD5 message-digest algorithm is a widely used cryptographic hash function producing a 128-bit (16-byte) hash value, typically expressed in text format as a 32 digit hexadecimal number. MD5 has been utilized in a wide variety of cryptographic applications, and is also commonly used to verify data integrity.' 'The security of the MD5 has been severely compromised, with its weaknesses having been exploited in the field, most infamously by the Flame malware in 2012. The CMU Software Engineering Institute considers MD5 essentially \"cryptographically broken and unsuitable for further use\".' "),
        ]),
        c("target.go", [
          d("prometheus expfmt", "'A package for reading and writing Prometheus metrics.'"),
          d("http round tripper", "'RoundTripper is an interface representing the ability to execute a single HTTP transaction, obtaining the Response for a given Request. A RoundTripper must be safe for concurrent use by multiple goroutines.'"),
          d("http transport", "'Transport is an implementation of RoundTripper that supports HTTP, HTTPS, and HTTP proxies (for either HTTP or HTTPS with CONNECT).'"),
        ]),
        c("targetmanager.go", [
          d("scheme label", "'SchemeLabel is the name of the label that holds the scheme on which to scrape a target.'"),
        ]),
      ]),
    ]),
  ],
});
