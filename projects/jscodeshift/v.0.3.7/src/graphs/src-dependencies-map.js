var n = diagrams.graph.generateNode,
  // nl = diagrams.graph.generateNodeWithTextAsTargetLink('RELATIVE_URL_PATH'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted'),
  config = {};

config.info = ["Internal dependencies between the src files"];
config[diagrams.graph.configurationKeys.SHY_CONNECTIONS] = false;

diagrams.graph([
  n("Collection", [0], "/Collection.js"),
  n("Runner", [1, 2, 2, 2], "/Runner.js"),
  n("Worker", [2, 13], "/Worker.js"),
  n("JSXElement", [6, 8, 7, 0], "/collections/JSXElement.js"),
  n("Node", [7, 0, 14], "/collections/Node.js"),
  n("VariableDeclarator", [8, 0, 7], "/collections/VariableDeclarator.js"),
  n("index", [12, 6, 7, 8], "/collections/index.js"),
  n("core", [13, 0, 12, 14, 15], "/core.js"),
  n("matchNode", [14], "/matchNode.js"),
  n("template", [15], "/template.js")
], config);
