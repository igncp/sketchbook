var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' structure',
  body: [
c("generators", [
c("app", [
d("index.js"),]),
c("boilerplate", [
d("index.js"),
c("templates", [
d("index.js"),
d("test.js"),]),]),
c("cli", [
d("index.js"),
c("templates", [
d("cli.js"),]),]),
c("editorconfig", [
d("index.js"),
c("templates", [
d("editorconfig"),]),]),
c("eslint", [
d("index.js"),]),
c("git", [
d("index.js"),
c("templates", [
d("gitattributes"),
d("gitignore"),]),]),
c("gulp", [
d("index.js"),
c("templates", [
d("babelrc"),
d("gulpfile.js"),]),]),
c("readme", [
d("index.js"),
c("templates", [
d("README.md"),]),]),]),]});