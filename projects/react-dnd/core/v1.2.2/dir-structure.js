var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer;

diagrams.box({
  name: 'dnd-core structure',
  body: [
    c("dnd-core", [
      c("lib", [
        d("actions"),
        d("backends"),
        d("reducers"),
        d("utils"),
      ]),
      c("src", [
        d("actions"),
        d("backends"),
        d("reducers"),
        d("utils"),
      ]),
      d("test"),
    ]),
  ]
});
