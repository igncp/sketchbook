var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' dir structure',
  body: [
    c("jscodeshift", [
      c("bin", [
        d("__tests__"),
      ]),
      c("src", [
        d("__tests__"),
        c("collections", [
          d("__tests__"),
        ]),
      ]),
    ]),
  ]
});
