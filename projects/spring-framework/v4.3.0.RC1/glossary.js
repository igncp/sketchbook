var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' glossary',
  body: [
    c('Pending', 'Concepts with no knowledge about them', [
    ]),
    c('General', [
      c("Tools", [
        d("AspectJ", "'AspectJ is an aspect-oriented programming (AOP) extension created at PARC for the Java programming language'"),
        d("jdiff", "'JDiff - An HTML Report of API Differences'"),
        d("Spring Roo", "'A next-generation rapid application development tool for Java developers. With Roo you can easily build full Java applications in minutes.'"),
        d("Apache Solr", "'Solr is the popular, blazing-fast, open source enterprise search platform built on Apache Lucene'"),
      ]),
      c("Java terminology", [
        d("JPA", "'The Java Persistence API (JPA) is a Java application programming interface specification that describes the management of relational data in applications using Java Platform, Standard Edition and Java Platform, Enterprise Edition.'"),
      ]),
      c("Spring Framework terms", [
        d("Bean", "'A bean is an object that is instantiated, assembled, and otherwise managed by a Spring IoC container. These beans are created with the configuration metadata that you supply to the container, for example, in the form of XML definitions.'")
      ]),
    ]),
    c('Structured', [
    ]),
  ],
});
