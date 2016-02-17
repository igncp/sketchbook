var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' external dependencies',
  body: [
    d("bytes"),
    d("encoding/json", "'Package json implements encoding and decoding of JSON objects as defined in RFC 4627. The mapping between JSON objects and Go values is described in the documentation for the Marshal and Unmarshal functions.'"),
    d("flag", "'Package flag implements command-line flag parsing.'"),
    d("fmt"),
    d("log"),
    d("net/http"),
    d("net/url", "'Package url parses URLs and implements query escaping. See RFC 3986.'"),
    d("os"),
    d("os/exec"),
    d("runtime"),
    d("strconv"),
    d("strings"),
    d("unsafe", "'Package unsafe contains operations that step around the type safety of Go programs. Packages that import unsafe may be non-portable and are not protected by the Go 1 compatibility guidelines.'"),
  ]
});
