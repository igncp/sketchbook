var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' dev commands',
  body: [
    c('make', [
      d('make clean'),
      d('make lint'),
      d('make dist/ramda.js'),
      d('make release-major'),
      d('make release-minor'),
      d('make release-patch'),
      d('make setup'),
      d('make test'),
    ]),
    c('npm', [
      d('npm run bench'),
      d('npm run browserify'),
      d('npm run bookmarklet'),
      d('npm run build'),
      d('npm run clean'),
      d('npm run jscs'),
      d('npm run jshint'),
      d('npm run pretest'),
      d('npm test', 'It uses pretest and posttest hooks. Gets the test files (using ramda\'s R.pipe) and runs mocha over them'),
      d('npm run posttest'),
    ]),
    c('./scripts', [
      d('./scripts/benchRunner', 'Runs a benchmark printing the results in a cool table in the terminal'),
      d('./scripts/bookmarklet', 'Creates a script that can be added to the bookmarks bar to load the library in any page'),
      d('./scripts/build'),
      d('./scripts/doc-blob'),
      d('./scripts/foo'),
      d('./scripts/header', 'Adds the header to the library with a dynamic copyright year and version'),
      d('./scripts/prepublish'),
      d('./scripts/template.js'),
      d('./scripts/testfiles'),
    ]),
  ]
});
