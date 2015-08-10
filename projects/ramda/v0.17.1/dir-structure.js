var  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' dir-structure',
  body: [
    'dist',
    c('lib', [
      'bench',
      'sauce',
      'test',
    ]),
    'scripts',
    c('src', [
      'internal',
    ]),
    c('test', [
      'helpers',
      'internal',
      c('shared', [
        'internal',
      ]),
    ]),
  ]
});
