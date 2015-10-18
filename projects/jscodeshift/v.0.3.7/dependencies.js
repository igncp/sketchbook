var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' dependencies',
  body: [
    c("npm", [
      d("async"),
      d("babel-core"),
      d("babel-runtime"),
      d("cli-color"),
      d("es6-promise"),
      d("lodash"),
      d("node-dir"),
      d("nomnom", "'Option parser with generated usage and commands. It noms your args and gives them back to you in a hash.'"),
      d("recast", "'JavaScript syntax tree transformer, nondestructive pretty-printer, and automatic source map generator'"),
      d("babel"),
      d("babel-jest"),
      d("jest-cli", "'Painless JavaScript Unit Testing. Familiar Approach: Built on top of the Jasmine test framework, using familiar expect(value).toBe(other) assertions; Mock by Default: Automatically mocks CommonJS modules returned by require(), making most existing code testable; Short Feedback Loop: DOM APIs are mocked and tests run in parallel via a small node.js command line utility'"),
      d("temp"),
    ]),
  ]
});
