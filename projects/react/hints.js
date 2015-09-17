var d = diagrams.box.generateDefinition,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' hints',
  body: [
    'The React API is exposed in /src/browser/ui/React.js',
    'ReactElementValidator is used in __DEV__ environment',
    'props are inmutable, state is mutable (but it should not be changed directly, but with .setState())',
    'event plugins properties: extractEvents*, eventTypes, executeDispatch. (*: required)',
    'The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object).'
  ]
});
