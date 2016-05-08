var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' structure',
  body: [
    c("spring-framework", [
      c(".settings", [
        d("gradle"),
      ]),
      d("buildSrc"),
      d("gradle"),
      d("spring-aop", "'Spring's proxy-based AOP framework.'"),
      d("spring-aspects", "'Spring's AspectJ-based aspects'"),
      d("spring-beans", "'Spring's core beans and bean factory support.'"),
      d("spring-beans-groovy", "'Support package for Groovy-based bean definitions.'"),
      d("spring-context", "'Spring's central application context runtime. Also includes scheduling and remoting abstractions.'"),
      d("spring-context-support", "'Support classes for integrating common third-party libraries into a Spring application context.'"),
      d("spring-core", "'Spring's core utilities, used by many other Spring modules.'"),
      d("spring-expression"),
      d("spring-framework-bom", "'This meta-project is used to generate a bill-of-materials POM that contains the other projects in a dependencyManagement section.'"),
      d("spring-instrument", "'Spring's instrumentation agent for JVM bootstrapping.'"),
      d("spring-instrument-tomcat", "'Spring's instrumentation agent for Tomcat.'"),
      d("spring-jdbc", "'Spring's JDBC support package. Includes DataSource setup support as well as JDBC access support.'"),
      d("spring-jms"),
      d("spring-messaging"),
      d("spring-orm"),
      d("spring-orm-hibernate4"),
      d("spring-orm-hibernate5"),
      d("spring-oxm"),
      d("spring-test"),
      d("spring-tx"),
      d("spring-web"),
      d("spring-webmvc"),
      d("spring-webmvc-portlet"),
      d("spring-webmvc-tiles2"),
      d("spring-websocket"),
      c("src", [
        d("api"),
        c("asciidoc"),
        d("dist"),
        d("eclipse"),
        d("idea"),
        d("test"),
      ]),
    ]),
  ]
});
