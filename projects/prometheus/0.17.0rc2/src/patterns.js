var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' src patterns',
  body: [
    "`Must` is a prefix used in functions that panic instead of returning an error",
    "For many types (that use struct), after the definition of the type, it defines a factory function for that type (e.g. NewTypeA) and the methods for the type are defined.",
  ],
});
