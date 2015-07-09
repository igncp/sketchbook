var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' important concepts (to see definitions, go to the glossary)',
  body: [
    "'Data should flow in DAG (Directed acyclic graph: A graph with no possible loops).'",
    "There is a directory in src named transforms where all the files are of the `dart`extension.",
    "'They copy the dart build for each successful travis run to a google cloud storage (GCS) bucket. They only upload for submitted changes, not PRs. They can use this to fetch the dart sources for each SHA without having to re-build them, which is hard to reproduce since the environment might differ (eg. different Dart SDK).'",
    "'They enforce return types are present on non-void methods'",
    "'Your component class is basically your execution context in Angular 2 applications. All properties defined on your component can be interpolated in your component's template.'",
    "Angular defines multiple functions with the suffix `Wrapper` which usually accept an instance of the Type of the Wrapper and executes its method, e.g. StringWrapper.replace('foo', 'foo', 'bar')",
    c('Angular2 Google Docs documentation', [
      "Angular render process goal: Separate Angular 2 runtime into two layers application layer and render layer. The application layer contains APIs and runtime that application code interacts with directly. The rendering layer provides a common protocol for performing UI updates. The split will allow Angular 2 applications to run in different environments/platforms while providing the same set of abstractions to application developers. One key aspect of the design is that the elements of the application do not directly depend or access the elements of the render code, and vice versa. They can only communicate via a  renderer transport.",
      'Data binding allows for automatic movement of data from parent to child component.',
      'Commands allow for parent event requesting a side effect from a child component.',
      'Events allow a child component to notify the parent of state change.',
      'Shadow DOM is the private implementation of a component. ',
      "Light DOM is how existing components are composed together. (A Light DOM is often part of larger Shadow DOM.)",
    ]),
    c('https://www.youtube.com/watch?v=uD6Okha_Yj0', [
      "Templates syntax: () for events, [] for properties",
      'Shadow DOM replaces transclusion',
      'ES6 modules replaces angular modules',
      '"AtScript" (working with TypeScript, V8 and others) provides syntax sugar for meta-data annotations'
    ])
  ]
});
