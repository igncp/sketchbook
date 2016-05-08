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

diagrams.graph([
  n("Spring Framework", [0, 1]),
  n("IoC Containers", [1]),
  n("Spring BeanFactory Container", [2, ct(1, "example")]),
  n("XmlBeanFactory", [3, ct(2, "implements")]),
], config);
