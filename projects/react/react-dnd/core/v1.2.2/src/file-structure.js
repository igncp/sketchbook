var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: 'dnd-core structure',
  body: [
    c("src", [
      d("DragDropManager.js"),
      d("DragDropMonitor.js"),
      d("DragSource.js"),
      d("DropTarget.js"),
      d("HandlerRegistry.js"),
      c("actions", [
        d("dragDrop.js"),
        d("registry.js"),
      ]),
      c("backends", [
        d("createTestBackend.js"),
      ]),
      d("index.js"),
      c("reducers", [
        d("dirtyHandlerIds.js"),
        d("dragOffset.js"),
        d("dragOperation.js"),
        d("index.js"),
        d("refCount.js"),
      ]),
      c("utils", [
        d("getNextUniqueId.js"),
        d("matchesType.js"),
      ]),
    ]),
  ]
});
