var n = diagrams.graph.generateNode,
  // nl = diagrams.graph.generateNodeWithTextAsTargetLink('RELATIVE_URL_PATH'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted'),
  config = {
    info: ["template.js functions hierarchy", "The entry points are expression, statement and statements."],
  };

config[diagrams.graph.configurationKeys.SHY_CONNECTIONS] = false;

diagrams.graph([
  n("expression(template, ...nodes)", [1, 3], "Entry point", "s-s"),
  n("statement(template, ...nodes)", [2, 3], "Entry point", "s-s"),
  n("statements(template, ...nodes)", [3, 4, 5], "Entry point", "s-s"),
  n("getRandomVarName", [4], "", ""),
  n("replaceNodes", [5, 6, 8], "", ""),
  n("getPlugin", [6, 7], "", ""),
  n("splice", [7], "", ""),
  n("babel", [8], "External dependency", "s-t"),
], config);
