var nlc = diagrams.layer.newLayerConnectedToNext,
  nl = diagrams.layer.newLayer;

diagrams.layer(nl("SF Runtime. Source: http://docs.spring.io/spring/docs/4.3.0.RC1/spring-framework-reference/htmlsingle/#overview-getting-started-with-spring", 'sna', [
  nl("Data Access/Integration container", [
    nl("JDBC module"),
    nl("ORM module"),
    nl("OXM module"),
    nl("JMS module"),
    nl("Transactions module"),
  ]),
  nl("Web container", [
    nl("Websocket module"),
    nl("Servlet module"),
    nl("Web module"),
    nl("Portlet module"),
  ]),
  nl("AOP container"),
  nl("Aspects container"),
  nl("Instrumentation container"),
  nl("Messaging container"),
  nl("Core Container container", [
    nl("Beans module"),
    nl("Core module"),
    nl("Context module"),
    nl("Context Support module"),
    nl("Expression Language module"),
  ]),
  nl("Test container"),
]));
