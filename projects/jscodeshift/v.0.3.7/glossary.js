var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' glossary',
  body: [
    c('Pending', [
      '-'
    ]),
    c('General', [
      d('fork (child_process.fork)', "'This is a special case of the child_process.spawn() functionality for spawning Node.js processes. In addition to having all the methods in a normal ChildProcess instance, the returned object has a communication channel built-in. [...] These child Node.js processes are still whole new instances of V8. Assume at least 30ms startup and 10mb memory for each new Node.js. That is, you cannot create many thousands of them.'")
    ]),
    c('Structured', [
      '-'
    ]),
  ],
});
