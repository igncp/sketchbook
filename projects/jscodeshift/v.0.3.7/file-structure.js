var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' dir structure',
  body: [
    c("jscodeshift", [
      d(".babelrc"),
      d(".eslintrc"),
      d(".gitignore"),
      d(".jshintrc"),
      d(".npmignore"),
      d(".travis.yml"),
      d("CONTRIBUTING.md"),
      d("LICENSE"),
      d("PATENTS"),
      d("README.md"),
      c("bin", [
        c("__tests__", [
          d("jscodeshift-test.js"),
        ]),
        d("jscodeshift.sh"),
      ]),
      d("index.js"),
      d("package.json"),
      c("src", [
        d("Collection.js"),
        d("Runner.js"),
        d("Worker.js"),
        c("__tests__", [
          d(".jshintrc"),
          d("Collection-test.js"),
          d("core-test.js"),
          d("template-test.js"),
        ]),
        c("collections", [
          d("JSXElement.js"),
          d("Node.js"),
          d("VariableDeclarator.js"),
          c("__tests__", [
            d(".eslintrc"),
            d(".jshintrc"),
            d("JSXElement-test.js"),
            d("Node-test.js"),
            d("VariableDeclarator-test.js"),
          ]),
          d("index.js"),
        ]),
        d("core.js"),
        d("matchNode.js"),
        d("template.js"),
      ]),
    ]),
  ]
});
