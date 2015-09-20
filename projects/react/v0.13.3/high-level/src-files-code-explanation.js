var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' code blocks higher-level explanation',
  body: [
    c("src", [
      c("browser", [
        c("ui", [
          c('React.js', [
            'With the default built-in injector, calls some packages injection modules with other built-in packages as arguments',
            'If in dev environment, replaces some methods by the respective exposed in ReactElementValidator',
            'Wrap the rendering method with a performance measurement',
            'Defines the later exposed API, with a few nested methods',
            'If present, uses the Chrome Devtools global hook to inject some packages into it',
            c('if', 'if in dev environment, uses dom, and it is not in an iframe', [
              'if it is Chrome and the dev tools global hook is not present, give a link to install it',
              'checks that all required shims and shams are present',
            ]),
            'set the React version'
          ]),
          c('ReactMount.js', [
            'Initialized the nodes cache and maps from reactRootID.',
            c('ReactMount', 'Exposes the ReactMount module API', [
                d('_instancesByReactRootID', 'Map used for debugging'),
                d('scrollMonitor', "'This is a hook provided to support rendering React components while ensuring that the apparent scroll position of its `container` does not change.'"),
                d('_updateRootComponent', "'Take a component that's already mounted into the DOM and replace its props'. I also validates that the props where not mutated (in dev) and uses the scrollMonitor hook."),
                d('render', "'Renders a React component into the DOM in the supplied `container`. If the React component was previously rendered into `container`, this will perform an update on it and only mutate the DOM as necessary to reflect the latest React component.' Either it updates the previous component or it unmounts it (if any) and it creates a new one. It does several validations in dev."),
            ]),
          ]),
        ]),
      ])
    ])
  ]
});