var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' overview',
  body: [
    "The library is plugin-oriented, and the main part of its benefits will come from external plugins."
      + " It provides helpers to parse css (including support for source maps). It is written following an object-oriented approach."
  ]
});
