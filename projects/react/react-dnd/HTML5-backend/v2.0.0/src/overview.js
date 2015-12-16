var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer;

diagrams.box({
  name: 'react-dnd-html5-backend overview',
  body: [
    c('main points', [
      c('backend class', [
        "The backend uses the actions provided by the manager, which is provided in its creation, to perform changes in the state. It uses the monitor as an interface with some helper methods to know about the state.",
        "The backend uses the registry to add and remove native items.",
        "It needs to be setup (to add the handlers to the native listeners) and torn down (to remove the listeners)."
      ]),
    ]),
  ]
});
