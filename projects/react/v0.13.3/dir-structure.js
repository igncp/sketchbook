var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' structure',
  body: [
    c("react", [
      d("bin"),
      c("docs", [
        c("_css", [
          c("bourbon", [
            d("addons"),
            d("css3"),
            d("functions"),
            d("helpers"),
            d("settings"),
          ]),
        ]),
        d("_data"),
        d("_includes"),
        c("_js", [
          d("examples"),
        ]),
        d("_layouts"),
        d("_plugins"),
        d("_posts"),
        d("blog"),
        d("css"),
        d("docs"),
        d("downloads"),
        c("img", [
          c("blog", [
            d("relay-components"),
          ]),
          d("docs"),
        ]),
        d("js"),
        d("tips"),
      ]),
      c("examples", [
        d("basic"),
        d("basic-commonjs"),
        d("basic-jsx"),
        d("basic-jsx-external"),
        d("basic-jsx-harmony"),
        d("basic-jsx-precompile"),
        c("jquery-bootstrap", [
          d("css"),
          d("js"),
          d("thirdparty"),
        ]),
        c("jquery-mobile", [
          d("js"),
        ]),
        d("quadratic"),
        c("server-rendering", [
          c("jsapp", [
            d("src"),
          ]),
          d("reactserver"),
          c("webapp", [
            d("static"),
          ]),
        ]),
        c("shared", [
          d("css"),
          d("thirdparty"),
        ]),
        d("transitions"),
      ]),
      c("gem-react-source", [
        c("lib", [
          d("react"),
        ]),
      ]),
      c("grunt", [
        d("config"),
        d("tasks"),
      ]),
      d("jest"),
      c("npm-jsx_orphaned_brackets_transformer", [
        d("transforms"),
      ]),
      d("npm-react"),
      d("npm-react-tools"),
      c("perf", [
        d("lib"),
        d("tests"),
      ]),
      d("scripts"),
      c("src", [
        c("addons", [
          d("__tests__"),
          c("link", [
            d("__tests__"),
          ]),
          c("transitions", [
            d("__tests__"),
          ]),
        ]),
        c("browser", [
          d("__tests__"),
          c("eventPlugins", [
            d("__tests__"),
          ]),
          c("server", [
            d("__tests__"),
          ]),
          c("syntheticEvents", [
            d("__tests__"),
          ]),
          c("ui", [
            d("__tests__"),
            c("dom", [
              d("__tests__"),
              c("components", [
                d("__tests__"),
              ]),
            ]),
          ]),
        ]),
        c("classic", [
          d("__tests__"),
          c("class", [
            d("__tests__"),
          ]),
          c("element", [
            d("__tests__"),
          ]),
          c("types", [
            d("__tests__"),
          ]),
        ]),
        c("core", [
          d("__tests__"),
        ]),
        c("event", [
          d("__tests__"),
        ]),
        c("modern", [
          c("class", [
            d("__tests__"),
          ]),
          c("element", [
            d("__tests__"),
          ]),
          c("types", [
            d("__tests__"),
          ]),
        ]),
        d("stubs"),
        c("test", [
          d("__tests__"),
        ]),
        c("utils", [
          d("__tests__"),
        ]),
        c("vendor", [
          c("core", [
            d("dom"),
          ]),
          c("key-mirror", [
            d("__tests__"),
          ]),
          d("performance"),
          d("stubs"),
        ]),
      ]),
      d("starter"),
      c("test", [
        d("lib"),
      ]),
      c("vendor", [
        c("fbtransform", [
          c("transforms", [
            d("__tests__"),
          ]),
        ]),
        d("jasmine"),
        d("jasmine-jsreporter"),
      ]),
    ]),
  ]
});
