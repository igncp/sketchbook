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
    c("others, directly imported in the source", [
      d('PIL', "The Python Imaging Library (PIL) adds image processing capabilities to your Python interpreter. This library supports many file formats, and provides powerful image processing and graphics capabilities."),
      'numpy',
    ]),
  ]
});
