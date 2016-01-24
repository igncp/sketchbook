var n = diagrams.graph.generateNode,
  // nl = diagrams.graph.generateNodeWithTextAsTargetLink('RELATIVE_URL_PATH'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted'),
  config = {};

config.info = ["Internal dependencies", "in the source files (/lib)"];
config[diagrams.graph.configurationKeys.SHY_CONNECTIONS] = false;

diagrams.graph([
  n("at-rule", [0, 2, 22], "/at-rule.es6"),
  n("comment", [1, 22, 9], "/comment.es6"),
  n("container", [2, 1, 4, 9], "/container.es6"),
  n("css-syntax-error", [3, 22], "/css-syntax-error.es6"),
  n("declaration", [4, 22, 9], "/declaration.es6"),
  n("input", [5, 3, ct(13, "'Represents the input source map passed from a compilation step before PostCSS (e.g., from the Sass compiler).' It is a member of input (map) and it is usefult to get the original file.")], "/input.es6"),
  n("lazy-result", [6, ct(8, "To create a map when stringifying the result"), 19, 22, 15, 10], "/lazy-result.es6"),
  n("list", [7], "/list.es6"),
  n("map-generator", [8], "/map-generator.es6"),
  n("node", [9, 3, 19, 18, 22], "/node.es6"),
  n("parse", [10, 11, 5], "/parse.es6"),
  n("parser", [11, 4, ct(20, "extracts a list of tokens of the input"), 1, 0, 16, 17], "/parser.es6"),
  n("postcss", [12, 4, 14, 19, 1, 0, ct(21, "exposed directly from postcss"), 10, 7, 17, 16], "/postcss.es6"),
  n("previous-map", [13], "/previous-map.es6"),
  n("processor", [14, ct(6, "Returns a lazy result when calling process().")], "/processor.es6"),
  n("result", [15, ct(23, "Encapsulates the message metadata when doing `result.warn(message, opts)`")], "/result.es6"),
  n("root", [16, 2, 22], "/root.es6"),
  n("rule", [17, 2, 22, 7], "/rule.es6"),
  n("stringifier", [18], "/stringifier.es6"),
  n("stringify", [19, 18], "/stringify.es6"),
  n("tokenize", [20], "/tokenize.es6"),
  n("vendor", [21], "/vendor.es6"),
  n("warn-once", [22], "/warn-once.es6"),
  n("warning", [23], "/warning.es6")
], config);
