var d = diagrams.box.generateDefinition,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' glossary',
  body: [
    'dirtyComponents (/src/core/ReactUpdates)',
    'classic <> modern (/src/...)',
    'native component (/src/core/ReactNativeComponent',
    'PutListenerQueue (/src/browser/ReactPutListenerQueue)',
    'ReactRootIndex (/src/browser/ClientReactRootIndex)',
    'reconciliation step',
    'releaser (/src/utils/PooledClass)',
    'static poolers (/src/utils/PooledClass)',
    'event plugin registry <> event plugin hub (/src/event/...)',
    'ref of a component (/src/core/ReactRef)',
    d('event direct dispatch', "there must be at most one dispatch. In this case the return value is tracked."),
    d('AOP system (/src/test/ReactPerf)', "Aspect Oriented Programming. 'Aspect-Oriented Programming (AOP) complements Object-Oriented Programming (OOP) by providing another way of thinking about program structure.  in AOP the unit of modularity is the aspect. Aspects enable the modularization of concerns such as transaction management that cut across multiple types and objects. Aspect: a modularization of a concern that cuts across multiple classes.' "),
    d('CallbackQueue (/src/utils/CallbackQueue)', "'A specialized pseudo-event module to help keep track of components waiting to be notified when their DOM representations are available for use. This implements PooledClass, so you should never need to instantiate this. Instead, use CallbackQueue.getPooled()'"),
    d('FallbackCompositionState (/src/browser/eventPlugins/FallbackCompositionState)', "'Stores information about text content of a target node, allowing comparison of content before and after a given event.  Identify the node where selection currently begins, then observe both its text content and its current position in the DOM. Since the browser may natively replace the target node during composition, we can use its position to find its replacement.'"),
    d('instance handles', "'Manages the IDs assigned to DOM representations of React components. This uses a specific scheme in order to traverse the DOM efficiently (e.g. in order to simulate events).' Also: 'Module that performs logical traversals of DOM hierarchy given ids of the logical DOM elements involved.'"),
    d('invariant (/src/vendor/core/invariant)', "'Use invariant() to assert state which your program assumes to be true. Provide sprintf-style format (only %s is supported) and arguments to provide information about what broke and what you were expecting. The invariant message will be stripped in production, but the invariant will remain to ensure logic does not differ in production.'"),
    d('Mounting', "'Mounting is the process of initializing a React component by creating its representative DOM elements and inserting them into a supplied `container`. Any prior content inside `container` is destroyed in the process.'"),
    d('public instance <> internal instance (/src/core/ReactUpdateQueue.)', 'It uses the instance maps to retrieve the internal from the public'),
    d('synthetic events (/src/browser/syntheticEvents)', "'Synthetic events are dispatched by event plugins, typically in response to a top-level event delegation handler. These systems should generally use pooling to reduce the frequency of garbage collection. The system should check `isPersistent` to determine whether the event should be released into the pool after being dispatched. Users that need a persisted event should invoke `persist`. Synthetic events (and subclasses) implement the DOM Level 3 Events API by normalizing browser quirks. Subclasses do not necessarily have to implement a DOM interface; custom application-specific events can also subclass this.'"),
    d('Transaction (/src/utils/Transaction)', "'`Transaction` creates a black box that is able to wrap any method such that certain invariants are maintained before and after the method is invoked (Even if an exception is thrown while invoking the wrapped method)'"),
  ]
});
