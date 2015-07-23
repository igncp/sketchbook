var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' external libraries',
  body: [
    c('npm devDependencies', [
      d("benchmark"),
      d("grunt"),
      d("grunt-cli"),
      d("grunt-contrib-concat"),
      d("grunt-contrib-connect"),
      d("grunt-contrib-copy"),
      d("grunt-contrib-jshint"),
      d("grunt-contrib-qunit"),
      d("grunt-contrib-uglify"),
      d("grunt-contrib-watch"),
      d("grunt-jscs"),
      d("grunt-saucelabs"),
      d("load-grunt-tasks"),
    ]),
  ]
});
