var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' learning hints',
  body: [
    "@Bean supports some attributes such as: init-method, destroy-method, autowiring and name.",
    "'The central artifacts in Spring’s new Java-configuration support are @Configuration-annotated classes and @Bean-annotated methods.'",
  ],
});
