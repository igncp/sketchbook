var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' dependencies libraries',
  body: [
    c('npm', [
      c('devDependencies', [
        d('acorn', 'A tiny, fast JavaScript parser, written completely in JavaScript.'),
        d('benchmark'),
        d('browserify'),
        d('cli-table', 'Pretty unicode tables for the CLI'),
        d('commander'),
        d('dox', 'Markdown / JSdoc documentation generator'),
        d('envvar', 'Derive JavaScript values from environment variables'),
        d('escodegen', 'ECMAScript code generator'),
        d('handlebars'),
        d('js-yaml'),
        d('jscs'),
        d('jshint'),
        d('mocha'),
        d('q'),
        d('ramda'),
        d('rimraf'),
        d('testem'),
        d('uglify-js'),
        d('xyz', 'Publish npm packages with fewer screwups'),
      ]),
    ]),
  ]
});
