var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' glossary',
  body: [
    c('Pending', [
      "Node Path",
      "Collections traversalMethods, globalMethods, transformMethods, mutationMethods and globalMethods",
    ]),
    c('General', [
      d('fork (child_process.fork)', "'This is a special case of the child_process.spawn() functionality for spawning Node.js processes. In addition to having all the methods in a normal ChildProcess instance, the returned object has a communication channel built-in. [...] These child Node.js processes are still whole new instances of V8. Assume at least 30ms startup and 10mb memory for each new Node.js. That is, you cannot create many thousands of them.'"),
      d('Collection', "'This represents a generic collection of node paths. It only has a generic API to access and process the elements of the list. It doesn't know anything about AST types.'"),
      c('node types', [
        "'If the node is an element node, the nodeType property will return 1.'",
        "'If the node is an attribute node, the nodeType property will return 2.'",
        "'If the node is a text node, the nodeType property will return 3.'",
        "'If the node is a comment node, the nodeType property will return 8.'",
      ]),
    ]),
    c('Structured', [
      '-'
    ]),
  ],
});
