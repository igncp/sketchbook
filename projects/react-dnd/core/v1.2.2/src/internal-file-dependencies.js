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
  n("index", [8, ct([0, 2, 3, 7], 'exposes')], "/index.js"),
  n("DragDropManager", [0,
    ct(12, 'Imports the root reducer to provide it to the store when creating it, in the constructor.'),
    ct(5, 'Imports all the actions from here, filters them to pick just the functions. Then it wraps each of them with the dispatch method of the store. It provides them in the getActions() method.'),
    ct(1, 'Creates a new monitor (providing the created store) in the constructor and saves it as a member.')
  ], "/DragDropManager.js"),
  n("DragDropMonitor", [1,
    ct(15, 'Used in the methods canDropOnTarget() and isOverTarget(), as it is a requirement that the draggedType and the targetType are the same for both cases.'),
    ct(4, 'Used to attach a registry as one of its members in the constructor, providing the store to it.'),
    ct(10, 'Imports the functions getSourceClientOffset and getDifferenceFromInitialOffset (which are not the default function of that reducer) and uses them in the methods getSourceClientOffset and getDifferenceFromInitialOffset, providing the expected state. All the implementation is in the functions in the reducer file.'),
    ct(9, 'Imports the areDirty helper function from the reducer. Used in the subscribeToStateChange method, checking that the provided handlerIds are dirty before calling the subscription listener.')
  ], "/DragDropMonitor.js"),
  n("DragSource", [2], "/DragSource.js"),
  n("DropTarget", [3], "/DropTarget.js"),
  n("HandlerRegistry", [4,
    ct(14, 'Used to generate a new id for a handler when adding a handler in the addHandler method'),
    ct(6, 'Imports the function actions creators (addSource, addTarget, removeSource, removeTarget) used in the methods with the same names.')
  ], "/HandlerRegistry.js"),
  n("dragDrop", [5,
    ct(15, 'Used in the hover action creator, checks if the provided targetsIds are of the same type of the dragged item, and if so it calls their hover method.')
  ], "/actions/dragDrop.js"),
  n("registry", [6], "/actions/registry.js"),
  n("createTestBackend", [7], "/backends/createTestBackend.js"),
  n("dirtyHandlerIds", [9,
    ct(5, 'Imports the action creators keys to use them in the default reducer. The most signinficant of these actions is HOVER.'),
    ct(6, 'Imports the action creators keys to use them in the default reducer.'),
  ], "/reducers/dirtyHandlerIds.js"),
  n("dragOffset", [10,
    ct(5, 'Imports the action creators keys to use them in the default reducer. The significant actions are BEGIN_DRAG and HOVER.'),
  ], "/reducers/dragOffset.js"),
  n("dragOperation", [11,
    ct(5, 'Imports the action creators keys to use them in the default reducer.'),
    ct(6, 'Imports the action creators keys to use them in the default reducer.'),
  ], "/reducers/dragOperation.js"),
  n("index", [12,
    ct(9, 'It combines it with the root reducer. In this special case, it passes a third argument, another property of the state.'),
    ct(10, 'It combines it with the root reducer.'),
    ct(11, 'It combines it with the root reducer.'),
    ct(13, 'It combines it with the root reducer.'),
  ], "/reducers/index.js"),
  n("refCount", [13,
    ct(6, 'Imports the action creators keys to use them in the default reducer. The reducer consists in a counter of the handlers, which can increment or dicrement.')
  ], "/reducers/refCount.js"),
  n("getNextUniqueId", [14], "/utils/getNextUniqueId.js"),
  n("matchesType", [15], "/utils/matchesType.js")
], config);
