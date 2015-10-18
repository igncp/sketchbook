var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' glossary',
  body: [
    c('Pending', 'Concepts with no knowledge about them', [
      'event plugin registry <> event plugin hub (/src/event/...)',
    ]),
    c('General', [
      d('Breadth-first search (BFS)', "algorithm for traversing or searching tree or graph data structures. It starts at the tree root (or some arbitrary node of a graph, sometimes referred to as a `search key') and explores the neighbor nodes first, before moving to the next level neighbors."),
      d('components with stateless functions', "' These components must not retain internal state, do not have backing instances, and do not have the component lifecycle methods. They are pure functional transforms of their input, with zero boilerplate.'")
    ]),
    c('Structured', [
      d('classic <> modern', "There is a distinction between classic and modern in the concepts: class, element and types. It has a TypeScript definition file for React, though it is under construction yet."),
      c('core', [
        d('dirty components', "During the update of components, the enqueued components are flushed in batches. The components that are not flushed in the current batch, are stored in an array representing this concept."),
        d('instance handles', "'Manages the IDs assigned to DOM representations of React components. This uses a specific scheme in order to traverse the DOM efficiently (e.g. in order to simulate events).' Also: 'Module that performs logical traversals of DOM hierarchy given ids of the logical DOM elements involved.'"),
        d('native component', "Provides pluggable helpers related with React components. For example: createInternalComponent, createInstanceForText, etc."),
        d('public instance <> internal instance', 'It uses the instance maps to retrieve the internal from the public'),
        d('reactRootId', "An attribute called `data-reactid` stored in the DOM elements. It is generated directly using the reactRootIndex. Created in the core but used basically in the mounting / rendering"),
        d('reactRootIndex', 'It provides just the injection API, which is ClientReactRootIndex or ServerReactRootIndex depending if the environment can use DOM. The way it is created differs from the two strategies (in the server it is randomized) but they are simple id generators.'),
        d('reconciliation step', "React uses the 'virtual dom' to simulate dom changes faster, and the it just updates the necessary parts on the real dom. For a deep explanation: https://facebook.github.io/react/docs/reconciliation.html"),
        d('ref of a component', "'refs (references) are especially useful when you need to: find the DOM markup rendered by a component (for instance, to position it absolutely), use React components in a larger non-React application, or transition your existing codebase to React. [...] React supports a special attribute that you can attach to any component. The ref attribute can be a callback function, and this callback will be executed immediately after the component is mounted. [...] Never access refs inside of any component's render method - or while any component's render method is even running anywhere in the call stack.'"),
      ]),
      c('browser', [
        d('mounting', "'Mounting is the process of initializing a React component by creating its representative DOM elements and inserting them into a supplied `container`. Any prior content inside `container` is destroyed in the process.'"),
        d('synthetic events', "'Synthetic events are dispatched by event plugins, typically in response to a top-level event delegation handler. These systems should generally use pooling to reduce the frequency of garbage collection. The system should check `isPersistent` to determine whether the event should be released into the pool after being dispatched. Users that need a persisted event should invoke `persist`. Synthetic events (and subclasses) implement the DOM Level 3 Events API by normalizing browser quirks. Subclasses do not necessarily have to implement a DOM interface; custom application-specific events can also subclass this. [...] Your event handlers will be passed instances of SyntheticEvent, a cross-browser wrapper around the browser's native event. It has the same interface as the browser's native event, including stopPropagation() and preventDefault(), except the events work identically across all browsers.'"),
        c('eventPlugins', [
          d('FallbackCompositionState', "'Stores information about text content of a target node, allowing comparison of content before and after a given event.  Identify the node where selection currently begins, then observe both its text content and its current position in the DOM. Since the browser may natively replace the target node during composition, we can use its position to find its replacement.'"),
        ]),
        d('text component', "'Text nodes violate a couple assumptions that React makes about components: - When mounting text into the DOM, adjacent text nodes are merged. - Text nodes cannot be assigned a React root ID. A React Text component is used to wrap strings in elements so that they can undergo the same reconciliation that is applied to elements.'"),
        d('put listener queue', "A pooled class that is responsible for accumulating listeners to put them in a later time. It uses ReactBrowserEventEmitter.putListener to 'put them'."),
        d('react browser event emitter', "'`ReactBrowserEventEmitter` is used to attach top-level event listeners. For example: ReactBrowserEventEmitter.putListener('myID', 'onClick', myFunction);. [...] It forwards DOM native events (with the associated top-level type used to trap it) to `EventPluginHub`, which in turn will ask plugins if they want to extract any synthetic events.'")
      ]),
      c('event', [
        d('event direct dispatch', "there must be at most one dispatch. In this case the return value is tracked."),
      ]),
      c('utils', [
        c('PooledClass', [
          d('releaser', "the strategy used to return an instance to its class pool (if there is still size inside)"),
          d('static poolers', 'Poolers that accept a fixed number of arguments (e.g. twoArgumentPooler). Created this way (and not dynamically) to improve performance as it would have to access the arguments object.'),
        ]),
        d('callbackQueue', "'A specialized pseudo-event module to help keep track of components waiting to be notified when their DOM representations are available for use. This implements PooledClass, so you should never need to instantiate this. Instead, use CallbackQueue.getPooled()'"),
        d('transaction', "'`Transaction` creates a black box that is able to wrap any method such that certain invariants are maintained before and after the method is invoked (Even if an exception is thrown while invoking the wrapped method)'"),
      ]),
      c('vendor', [
        d('invariant', "'Use invariant() to assert state which your program assumes to be true. Provide sprintf-style format (only %s is supported) and arguments to provide information about what broke and what you were expecting. The invariant message will be stripped in production, but the invariant will remain to ensure logic does not differ in production.'"),
      ]),
      c('test', [
        c('ReactPerf', [
          d('AOP system', "Aspect Oriented Programming. 'Aspect-Oriented Programming (AOP) complements Object-Oriented Programming (OOP) by providing another way of thinking about program structure.  in AOP the unit of modularity is the aspect. Aspects enable the modularization of concerns such as transaction management that cut across multiple types and objects. Aspect: a modularization of a concern that cuts across multiple classes.' "),
        ]),
      ]),
    ]),
  ],
});
