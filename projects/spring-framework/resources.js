var d = diagrams.box.generateDefinition,
  l = diagrams.box.generateLink,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' resources',
  body: [
    l('Repo', "https://github.com/spring-projects/spring-framework/tree/fe7a8aea2ad18706f93dabe66f5d64696c48358b"),
    l('API', "http://docs.spring.io/spring/docs/4.3.0.RC1/javadoc-api/"),
    l('Reference', "http://docs.spring.io/spring/docs/4.3.0.RC1/spring-framework-reference/htmlsingle/"),
  ]
});
