var n = diagrams.graph.generateNode,
  // nl = diagrams.graph.generateNodeWithTextAsTargetLink('RELATIVE_URL_PATH'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted'),
  config = {};

config.info = ["Internal dependencies first summary"];
config[diagrams.graph.configurationKeys.SHY_CONNECTIONS] = false;

diagrams.graph([
  n("at-rule", [0, 2], "/at-rule.es6"),
  n("comment", [1, 9], "/comment.es6"),
  n("container", [2, 1, 4, 9], "/container.es6"),
  n("declaration", [4, 9], "/declaration.es6"),
  n("input", [5, "/input.es6 - Structures and handles the metadata of the origin of the input that comes in, taking into account source maps and paths"]),
  n("lazy-result", [6, 19, 10], "/lazy-result.es6 - Is an asynchronous result (if necessary using .then, otherwise synchronous) that can create a source map of the result vs the input. It resolves whenever all the middleware plugins are run."),
  n("list", [7], "/list.es6"),
  n("map-generator", [8], "/map-generator.es6"),
  n("node", [9, 19, 18], "/node.es6"),
  n("parse", [10, 11, 5], "/parse.es6"),
  n("parser", [11, 4, 1, 0, 16, 17], "/parser.es6 - Has a tokenize() member, which is changed in different syntaxes."),
  n("postcss", [12, 4, 14, 19, 1, 0, ctd([10, 21], "Exposed directly"), 7, 17, 16], "/postcss.es6"),
  n("processor", [14, ct(6, "Returns a lazy result when calling process().")], "/processor.es6"),
  n("root", [16, 2], "/root.es6"),
  n("rule", [17, 2, 7], "/rule.es6"),
  n("stringifier", [18], "/stringifier.es6"),
  n("stringify", [19, 18], "/stringify.es6"),
  n("vendor", [21], "/vendor.es6"),
], config);
