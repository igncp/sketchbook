var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' external dependencies',
  body: [
    c("npm", [
      c("dependencies", [
        d("babel-plugin-add-module-exports"),
        d("babel-preset-es2015-loose"),
        d("babel-preset-stage-0"),
        d("supports-color"),
        d("source-map"),
        d("babel-core"),
        d("js-base64", "'Yet another Base64 transcoder in pure-JS'"),
      ]),
      c("devDependencies", [
        d("concat-with-sourcemaps"),
        d("postcss-parser-tests"),
        d("gulp-json-editor"),
        d("gulp-istanbul"),
        d("run-sequence"),
        d("babel-eslint"),
        d("gulp-eslint"),
        d("gulp-mocha"),
        d("gulp-babel"),
        d("strip-ansi", "'Strip ANSI escape codes'"),
        d("gulp-shell"),
        d("yaspeller", "'Search tool typos in the text, files and websites'"),
        d("fs-extra"),
        d("isparta", "'A code coverage tool for ES6 (babel)'"),
        d("eslint"),
        d("sinon"),
        d("mocha"),
        d("gulp"),
        d("chai"),
        d("del"),
      ])
    ])
  ]
});
