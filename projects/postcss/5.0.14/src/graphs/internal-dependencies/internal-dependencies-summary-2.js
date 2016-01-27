var n = diagrams.graph.generateNode,
  // nl = diagrams.graph.generateNodeWithTextAsTargetLink('RELATIVE_URL_PATH'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctm = connectionFnFactory(ct, 'line', 'morse'),
  ctid = connectionFnFactory(cti, 'line', 'dotted'),
  config = {};

config.info = ["Internal dependencies first summary"];
config[diagrams.graph.configurationKeys.SHY_CONNECTIONS] = false;

diagrams.graph([
  n("containers", [2, ctd(9, "All containers are also nodes")], "rule, at-rule, root", "b"),
  n("input", [5], "/input.es6 - Structures and handles the metadata of the origin of the input that comes in, taking into account source maps and paths"),
  n("(lazy) result", [6, 10], "Is an asynchronous result (if necessary using .then, otherwise synchronous) that can create a source map of the result vs the input. It resolves whenever all the middleware plugins are run."),
  n("nodes", [9], "declarations, comments", "b"),
  n("parse", [10, 2, 9, 5], "/parse.es6"),
  n("postcss", [12, 14], "/postcss.es6 - Exposes some factories and also some constructors directly"),
  n("processor", [14, ct(6, "Returns a lazy result when calling process().")], "/processor.es6"),
], config);
