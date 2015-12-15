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
  n("index", [8, 2, 7, 5], "/index.js"),
  n("BrowserDetector", [0], "/BrowserDetector.js"),
  n("EnterLeaveCounter", [1], "/EnterLeaveCounter.js"),
  n("HTML5Backend", [2, 9, 1, 0, 6, 4, 5], "/HTML5Backend.js"),
  n("MonotonicInterpolant", [3], "/MonotonicInterpolant.js"),
  n("NativeDragSources", [4, 5], "/NativeDragSources.js"),
  n("NativeTypes", [5], "/NativeTypes.js"),
  n("OffsetUtils", [6, 0, 3], "/OffsetUtils.js"),
  n("getEmptyImage", [7], "/getEmptyImage.js"),
  n("shallowEqual", [9], "/shallowEqual.js")
], config);
