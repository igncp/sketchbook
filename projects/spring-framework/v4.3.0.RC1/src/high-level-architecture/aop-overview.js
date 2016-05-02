var n = diagrams.graph.generateNode,
  // nl = diagrams.graph.generateNodeWithTextAsTargetLink('RELATIVE_URL_PATH'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted'),
  config = {};

config.info = ["AOP overview", "Sources: http://www.tutorialspoint.com/spring/aop_with_spring.htm"];
config[diagrams.graph.configurationKeys.SHY_CONNECTIONS] = false;

//15
diagrams.graph([
  n("AOP Terminology", [0]),
  n("Aspect", [1, 0], "A module which has a set of APIs providing cross-cutting requirements. For example, a logging module would be called AOP aspect for logging. An application can have any number of aspects depending on the requirement."),
  n("Logging", [8, 1], null, "s-s"),
  n("Security", [9, 1], null, "s-s"),
  n("Cache", [10, 1], null, "s-s"),
  n("Join point", [2, 0], "Point of an app where an aspect can be used"),
  n("Advice", [3, 0], "Code executed either before or after"),
  n("before", [11, 3], null, "s-s"),
  n("after", [12, 3], null, "s-s"),
  n("after-returning", [13, 3], null, "s-s"),
  n("after-throwing", [14, 3], null, "s-s"),
  n("around", [15, 3], null, "s-s"),
  n("Pointcut", [4, 0], "Joinpoints where an advice is executed"),
  n("Target object", [6, 0], "Object being advised by one or more aspects"),
  n("Weaving", [7, 0], "Linking aspects with application types or objects: creates an advised object"),
], config);
