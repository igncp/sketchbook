var n = diagrams.graph.generateNode,
  // nl = diagrams.graph.generateNodeWithTextAsTargetLink('RELATIVE_URL_PATH'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted'),
  config = {};

config.info = ["Internal dependencies between files"];
config[diagrams.graph.configurationKeys.SHY_CONNECTIONS] = false;

diagrams.graph([
  n("index", [8, 0, 2, 3, 7], "/index.js"),
  n("DragDropManager", [0, 12, 5, 1, 4], "/DragDropManager.js"),
  n("DragDropMonitor", [1, 15, 4, 10, 9], "/DragDropMonitor.js"),
  n("DragSource", [2], "/DragSource.js"),
  n("DropTarget", [3], "/DropTarget.js"),
  n("HandlerRegistry", [4, 14, 6], "/HandlerRegistry.js"),
  n("dragDrop", [5, 15], "/actions/dragDrop.js"),
  n("registry", [6], "/actions/registry.js"),
  n("createTestBackend", [7], "/backends/createTestBackend.js"),
  n("dirtyHandlerIds", [9, 5, 6], "/reducers/dirtyHandlerIds.js"),
  n("dragOffset", [10, 5], "/reducers/dragOffset.js"),
  n("dragOperation", [11, 5, 6], "/reducers/dragOperation.js"),
  n("index", [12, 9, 10, 11, 13], "/reducers/index.js"),
  n("refCount", [13, 6], "/reducers/refCount.js"),
  n("getNextUniqueId", [14], "/utils/getNextUniqueId.js"),
  n("matchesType", [15], "/utils/matchesType.js")
], config);
