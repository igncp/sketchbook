var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' external dependencies',
  body: [
    c("npm", [
      c("devDependencies", [
        d("eslint"),
        d("grunt"),
        d("grunt-blanket-qunit", "Headless Blanket.js code coverage and QUnit testing via PhantomJS"),
        d("grunt-cli"),
      ]),
    ]),
    c("setup.py", [
      d("bcrypt", "'Modern password hashing for your software and your servers'"),
    ]),
  ]
});
