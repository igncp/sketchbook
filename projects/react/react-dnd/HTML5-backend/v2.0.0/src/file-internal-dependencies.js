var n = diagrams.graph.generateNode,
  // nl = diagrams.graph.generateNodeWithTextAsTargetLink('RELATIVE_URL_PATH'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted'),
  config = {};

config.info = ["File internal dependencies"];
config[diagrams.graph.configurationKeys.SHY_CONNECTIONS] = false;

diagrams.graph([
  n("index", [8,
    ct(2, 'Used in the default exported function, named createHTML5Backend.'),
    ct(7, 'Exposes it.'),
    ct(5, 'Exposes it.')
  ], "/index.js"),
  n("BrowserDetector", [0], "/BrowserDetector.js"),
  n("EnterLeaveCounter", [1], "/EnterLeaveCounter.js"),
  n("HTML5Backend", [2,
    ct(9, 'Used in checkIfCurrentDragSourceRectChanged, when comparing the current dragged node offset with the value saved in the member currentDragSourceNodeOffset.'),
    ct(1, 'Used to instantiate the member enterLeaveCounter, which is used in the methods handleTopDragEnterCapture, handleTopDragLeaveCapture and handleTopDropCapture.'),
    c(0, 'Checks if it is not Firefox. If it is, it does not call the hover action, as in that case is covered in the dragover event.'),
    ct(6, 'Imports the getNodeClientOffset, getEventClientOffset, getDragPreviewOffset functions. The first two get the client offset ({x, y}) by different ways. This offset is stored in some members, used for later comparison. At the highest level, it is used for methods of the backend like handleTopDragOver.'),
    c(5, 'Used for the method isDraggingNativeItem, which retrieves the itemType from the monitor, and compares it to the native types.'),
  ], "/HTML5Backend.js"),
  n("MonotonicInterpolant", [3], "/MonotonicInterpolant.js"),
  n("NativeDragSources", [4,
    ct(5)
  ], "/NativeDragSources.js"),
  n("NativeTypes", [5], "/NativeTypes.js"),
  n("OffsetUtils", [6, 0, 3], "/OffsetUtils.js"),
  n("getEmptyImage", [7], "/getEmptyImage.js"),
  n("shallowEqual", [9], "/shallowEqual.js")
], config);
