var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' external dependencies',
  body: [
    c("npm", [
      c("dependencies", [
        d("generator-license", "'Generate LICENSE file for your project using Yeoman.'"),
        d("generator-travis", "'Yeoman generator to get and keep <code>.travis.yml</code> up-to-date effortlessly'"),
        d("git-remote-origin-url"),
        d("github-username"),
        d("inquirer-npm-name", "'Helper function using inquirer to validate a value provided in a prompt does not exist as an npm package.'"),
        d("lodash"),
        d("parse-author"),
        d("yeoman-generator"),
      ]),
      c("devDependencies", [
        d("eslint"),
        d("eslint-config-xo"),
        d("eslint-config-xo-space"),
        d("gulp"),
        d("gulp-eslint"),
        d("gulp-exclude-gitignore"),
        d("gulp-istanbul"),
        d("gulp-mocha"),
        d("gulp-nsp", "'The Node Security (nodesecurity.io) command line interface. About Node Security. Node Security helps you keep your node applications secure. With Node Security you can: Make use of the CLI tool to help identify known vulnerabilities in your own projects. Get access to Node Security news and information from the ^lift team.'"),
        d("gulp-plumber"),
        d("mocha"),
        d("mockery"),
        d("pinkie-promise", "'Module exports global Promise object (if available) or pinkie Promise polyfill.'"),
        d("yeoman-assert"),
        d("yeoman-test"),
      ]),
    ]),
  ]
});
