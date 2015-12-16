var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer;

diagrams.box({
  name: 'dnd-core manual api',
  body: [
    c("src", [
      c("DragDropManager.js", [
        c('DragDropManager', [
          d('constructor(createBackend)'),
          c('members', [
            'store',
            'monitor',
            'registry',
            'backend',
            'isSetup',
          ]),
          c('prototype', [
            d('getActions()'),
            d('getBackend()'),
            d('getMonitor()'),
            d('getRegistry()'),
            d('handleRefCountChange()'),
          ]),
        ]),
      ]),
      c("DragDropMonitor.js", [
        c('DragDropMonitor', [
          d('constructor(store)'),
          c('members', [
            'store',
            'registry',
          ]),
          c('prototype', [
            d('canDragSource(sourceId)'),
            d('canDropOnTarget(targetId)'),
            d('didDrop()'),
            d('getClientOffset()'),
            d('getDifferenceFromInitialOffset()'),
            d('getDropResult()'),
            d('getInitialClientOffset()'),
            d('getInitialSourceClientOffset()'),
            d('getItem()'),
            d('getItemType()'),
            d('getSourceClientOffset()'),
            d('getSourceId()'),
            d('getTargetIds()'),
            d('isDragging()'),
            d('isDraggingSource(sourceId)'),
            d('isOverTarget(targetId, { shallow = false}: options = {})'),
            d('isSourcePublic()'),
            d('subscribeToOffsetChange(listener)'),
            d('subscribeToStateChange(listener, { handlerIds}: options = {})'),
          ]),
        ])
      ]),
      c("DragSource.js", [
        c('DragSource', [
          d('canDrag()'),
          d('endDrag()'),
          d('isDragging(monitor, handle)'),
        ]),
      ]),
      c("DropTarget.js", [
        c('DropTarget', [
          d('canDrop()'),
          d('hover()'),
          d('drop()'),
        ]),
      ]),
      c("HandlerRegistry.js", [
        c('HandlerRegistry', [
          d('constructor(store)'),
          c('members', [
            'store',
            d('types', 'List of the provided types, in the same order as the handlers list'),
            d('handlers', 'List of the provided handlers, in the same order as the types list'),
            'pinnedSourceId',
            'pinnedSource',
          ]),
          c('prototype', [
            d('addHandler(role, type, handler)'),
            d('addSource(type, source)'),
            d('addTarget(type, target)'),
            d('containsHandler(handler)'),
            d('getSource(sourceId, includePinned)'),
            d('getSourceType(sourceId)'),
            d('getTarget(targetId)'),
            d('getTargetType(targetId)'),
            d('isSourceId(handlerId)'),
            d('isTargetId(handlerId)'),
            d('pinSource(sourceId)'),
            d('removeSource(sourceId)'),
            d('removeTarget(targetId)'),
            d('unpinSource()'),
          ]),
        ]),
      ]),
      c("actions", [
        c("dragDrop.js", [
          'BEGIN_DRAG',
          'DROP',
          'END_DRAG',
          'HOVER',
          'PUBLISH_DRAG_SOURCE',
          'beginDrag(sourceIds, {publishSource = true,clientOffset = null,getSourceClientOffset}: options = {})',
          'drop()',
          'endDrag()',
          'hover(targetIds, { clientOffset = null } = {})',
          'publishDragSource(manager)',
        ]),
        c("registry.js", [
          'ADD_SOURCE',
          'ADD_TARGET',
          'REMOVE_SOURCE',
          'REMOVE_TARGET',
          'addSource(sourceId)',
          'addTarget(targetId)',
          'removeSource(sourceId)',
          'removeTarget(targetId)',
        ]),
      ]),
      c("backends", [
        c("createTestBackend.js", [
          c('TestBackend', [
            d('constructor(manager)'),
            c('members', [
              d('actions', 'Actions provided by the manager with getActions()'),
              'didCallSetup',
              'didCallTeardown',
            ]),
            c('prototype', [
              d('connectDragPreview()'),
              d('connectDragSource()'),
              d('connectDropTarget()'),
              d('setup()'),
              d('simulateBeginDrag(sourceIds, options)'),
              d('simulateDrop()'),
              d('simulateEndDrag()'),
              d('simulateHover(targetIds, options)'),
              d('simulatePublishDragSource()'),
              d('teardown()'),
            ]),
          ]),
          d('createBackend(manager)'),
        ]),
      ]),
      d("index.js"),
      c("reducers", [
        c("dirtyHandlerIds.js", [
          d('areDirty(state, handlerIds)'),
          d('dirtyHandlerIds(state = NONE, action, dragOperation)'),
        ]),
        c("dragOffset.js", [
          d('dragOffset(state = initialState, action)'),
          d('getDifferenceFromInitialOffset(state)'),
          d('getSourceClientOffset(state)'),
        ]),
        c("dragOperation.js", [
          d('dragOperation(state = initialState, action)'),
        ]),
        d("index.js"),
        c("refCount.js", [
          d('refCount(state = 0, action)'),
        ]),
      ]),
      c("utils", [
        c("getNextUniqueId.js", [
          d('getNextUniqueId'),
        ]),
        c("matchesType.js", [
          d('matchesType'),
        ]),
      ]),
    ]),
  ]
});
