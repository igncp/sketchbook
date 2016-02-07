var n = diagrams.graph.generateNode,
  // nl = diagrams.graph.generateNodeWithTextAsTargetLink('RELATIVE_URL_PATH'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted'),
  config = {};

config.info = ["Classes relations"];
config[diagrams.graph.configurationKeys.SHY_CONNECTIONS] = true;

diagrams.graph([
  n("AtRule", [0, ctd(2), ct(22, "To deprecate methods")], "AtRule(defaults)"),
  n("Comment", [1, ct(22, "To deprecate methods"), ctd(9)], "Comment(defaults)"),
  n("Container", [2, ct([1, 4, 17], "#normalize and #rebuild"), ctd(9)], "Container[Constructor inherited]"),
  n("CssSyntaxError", [3, ct(22, "To deprecate methods")], "CssSyntaxError(message, line, column, source, file, plugin)"),
  n("Declaration", [4, ct(22, "To deprecate methods"), ctd(9)], "Declaration(defaults)"),
  n("Input", [5, ct(3, "#error"), ct(13, "#constructor")], "Input(css, opts = { })"),
  n("LazyResult", [6, ct([8, 19], "#stringify"), ct(22, "Mismatch of plugin versions"), ct(15, "#constructor"), ct(10, "#constructor")], "LazyResult(processor, css, opts)"),
  n("list", [7], "list"),
  n("MapGenerator", [8], "MapGenerator(stringify, root, opts)"),
  n("Node", [9, ct(3, "#error"), ct(19, "#toString"), ct(18, "#raw"), ct(22, "To deprecate methods")], "Node(defaults = { })"),
  n("parse", [10, 11, 5], "parse(css, opts)"),
  n("Parser", [11, ct(4, "#decl"), ct(20, "#tokenize"), ct(1, "#comment"), ct(0, "#atrule"), ct(16, "#constructor"), ct(17, "#emptyRule and #rule")], "Parser(input)"),
  n("PreviousMap", [13], "PreviousMap(css, opts)"),
  n("Processor", [14, ct(6, "#process")], "Processor(plugins = [])"),
  n("Result", [15, ct(23, "#warn")], "Result(processor, root, opts)"),
  n("Root", [16, ctd(2), ct(22, "To deprecate methods")], "Root(defaults)"),
  n("Rule", [17, ctd(2), ct(22, "To deprecate methods"), ct(7, "#get selectors")], "Rule(defaults)"),
  n("Stringifier", [18], "Stringifier(builder)"),
  n("stringify", [19, 18], "stringify(node, builder)"),
  n("tokenize", [20], "tokenize(input)"),
  n("vendor", [21], "vendor"),
  n("warn-once", [22], "warn-once(message)"),
  n("Warning", [23], "Warning(text, opts = { })")
], config);
