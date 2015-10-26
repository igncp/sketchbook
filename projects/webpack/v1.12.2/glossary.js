var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' glossary',
  body: [
    c('Pending', 'Concepts with no knowledge about them', [
      'Compiler',
      'Compilers resolvers'
    ]),
    c('General', [
      '-'
    ]),
    c('Structured', [
      '-'
    ]),
  ],
});
