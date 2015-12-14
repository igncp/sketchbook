var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' redux actions',
  body: [
    c('dragDrop', [
      'BEGIN_DRAG',
      'PUBLISH_DRAG_SOURCE',
      'HOVER',
      'DROP',
      'END_DRAG',
      'beginDrag(sourceIds, {publishSource = true,clientOffset = null,getSourceClientOffset}: options = {})',
      'publishDragSource(manager)',
      'hover(targetIds, { clientOffset = null } = {})',
      'drop()',
      'endDrag()',
    ]),
    c('registry', [
      'ADD_SOURCE',
      'ADD_TARGET',
      'REMOVE_SOURCE',
      'REMOVE_TARGET',
      'addSource(sourceId)',
      'addTarget(targetId)',
      'removeSource(sourceId)',
      'removeTarget(targetId)',
    ]),
  ]
});
