var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' glossary',
  body: [
    c('Pending', [
      d('manager', 'Instance of DragDropManager. It is passed to `createBackend` when instantiating. The methods are: `handleRefCountChange()`, `getMonitor()`, `getBackend()`, `getRegistry()`, `getActions()`'),
      'registry',
      'dirty handler',
    ]),
    c('General', [
      d('backend',"'Pluggable implementations. The one that comes with the library uses the HTML5 drag and drop API. They abstract away the browser differences. Under the hood, all the backends do is translate the DOM events into the internal Flux actions that React DnD can process.'"),
      c('monitor',"'The monitors let you update the props of your components in response to the drag and drop state changes.' Instance of DragDropMonitor(store). The methods are: subscribeToStateChange(listener, {handlerIds}: options = {}), subscribeToOffsetChange(listener), canDragSource(sourceId), canDropOnTarget(targetId), isDragging(), isDraggingSource(sourceId), isOverTarget(targetId, {shallow = false}: options = {}), getItemType(), getItem(), getSourceId(), getTargetIds(), getDropResult(), didDrop(), isSourcePublic(), getInitialClientOffset(), getInitialSourceClientOffset(), getClientOffset(), getSourceClientOffset(), getDifferenceFromInitialOffset()"),
      d('collecting function', "'retrieves the relevant bits of it from the monitors. React DnD then takes care of timely calling your collecting function and merging its return value into your components' props.'"),
      d('items', "'When you drag something across the screen, we don't say that a component, or a DOM node is being dragged. Instead, we say that an item of a certain type is being dragged. An item is a plain JavaScript object describing what's being dragged'"),
      d('type', "'A type is a string (or a symbol) uniquely identifying a whole class of items in your application. In a Kanban board app, you might have a 'card' type representing the draggable cards and a 'list' type for the draggable lists of those cards.'"),
      d('handler', 'refers to both source (drag source) and target (drop target), which are the `roles` of the handler.')
    ]),
    c('Structured', [
      // d("DragDropManager.js"),
      // d("DragDropMonitor.js"),
      // d("DragSource.js"),
      d("DropTarget.js", 'Class with the dummy methods: `hover`, `drop` and the implemented method: canDrop'),
      // d("HandlerRegistry.js"),
      // c("actions", [
      //   d("dragDrop.js"),
      //   d("registry.js"),
      // ]),
      // c("backends", [
      //   d("createTestBackend.js"),
      // ]),
      // d("index.js"),
      // c("reducers", [
      //   d("dirtyHandlerIds.js"),
      //   d("dragOffset.js"),
      //   d("dragOperation.js"),
      //   d("index.js"),
      //   d("refCount.js"),
      // ]),
      // c("utils", [
      //   d("getNextUniqueId.js"),
      //   d("matchesType.js"),
      // ]),
    ]),
  ],
});