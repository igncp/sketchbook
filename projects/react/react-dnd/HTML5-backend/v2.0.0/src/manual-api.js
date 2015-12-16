var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer;

diagrams.box({
  name: 'react-dnd-html5-backend manual api',
  body: [
    c("src", [
      d("BrowserDetector.js"),
      c("EnterLeaveCounter.js", [
        c('EnterLeaveCounter', [
          d('constructor()'),
          c('members', [
            'entered',
          ]),
          c('prototype', [
            d('enter(enteringNode)'),
            d('leave(leavingNode)'),
            d('reset()'),
          ]),
        ])
      ]),
      c("HTML5Backend.js", [
        c('HTML5Backend', [
          d('constructor(manager)'),
          c('members', [
            'actions',
            'currentDragSourceNode',
            'currentDragSourceNodeOffset',
            'currentDragSourceNodeOffsetChanged',
            'currentNativeHandle',
            'currentNativeSource',
            'dragEnterTargetIds',
            'dragOverTargetIds',
            'dragStartSourceIds',
            'dropTargetIds',
            'enterLeaveCounter',
            'monitor',
            'registry',
            'sourceNodeOptions',
            'sourceNodes',
            'sourcePreviewNodeOptions',
            'sourcePreviewNodes',
          ]),
          c('prototype', [
            d('setup()'),
            d('teardown()'),
            d('connectDragPreview(sourceId, node, options)'),
            d('connectDragSource(sourceId, node, options)'),
            d('connectDropTarget(targetId, node)'),
            d('getCurrentSourceNodeOptions()'),
            d('getCurrentDropEffect()'),
            d('getCurrentSourcePreviewNodeOptions()'),
            d('getSourceClientOffset(sourceId)'),
            d('isDraggingNativeItem()'),
            d('beginDragNativeItem(type)'),
            d('endDragNativeItem()'),
            d('endDragIfSourceWasRemovedFromDOM()'),
            d('setCurrentDragSourceNode(node)'),
            d('clearCurrentDragSourceNode()'),
            d('checkIfCurrentDragSourceRectChanged()'),
            d('handleTopDragStartCapture()'),
            d('handleDragStart(e, sourceId)'),
            d('handleTopDragStart(e)'),
            d('handleTopDragEndCapture()'),
            d('handleTopDragEnterCapture(e)'),
            d('handleDragEnter(e, targetId)'),
            d('handleTopDragEnter(e)'),
            d('handleTopDragOverCapture()'),
            d('handleDragOver(e, targetId)'),
            d('handleTopDragOver(e)'),
            d('handleTopDragLeaveCapture(e)'),
            d('handleTopDropCapture(e)'),
            d('handleDrop(e, targetId)'),
            d('handleTopDrop(e)'),
            d('handleSelectStart(e)'),
          ]),
        ])
      ]),
      c("MonotonicInterpolant.js", [
        c('MonotonicInterpolant', [
          'constructor(xs, ys)',
          c('members', [
            'xs',
            'ys',
            'c1s',
            'c2s',
            'c3s',
          ]),
          c('prototype', [
            'interpolate(x)'
          ]),
        ])
      ]),
      c("NativeDragSources.js", [
        c('NativeDragSource', [
          'constructor()',
          c('members', [
            'item',
          ]),
          c('prototype', [
            'mutateItemByReadingDataTransfer(dataTransfer)',
            'canDrag()',
            'beginDrag()',
            'isDragging(monitor, handle)',
            'endDrag()',
          ]),
        ])
      ]),
      d("NativeTypes.js"),
      d("OffsetUtils.js"),
      d("getEmptyImage.js"),
      d("index.js"),
      d("shallowEqual.js"),
    ]),
  ]
});
