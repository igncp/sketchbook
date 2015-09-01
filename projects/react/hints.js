var d = diagrams.box.generateDefinition,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' hints',
  body: [
    'The React API is exposed in /src/browser/ui/React.js',
    'ReactElementValidator is used in __DEV__ environment',
  ]
});
