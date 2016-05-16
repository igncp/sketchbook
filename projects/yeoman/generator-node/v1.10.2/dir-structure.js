var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' structure',
  body: [
c("generator-node", [
c("generators", [
d("app"),
c("boilerplate", [
d("templates"),]),
c("cli", [
d("templates"),]),
c("editorconfig", [
d("templates"),]),
d("eslint"),
c("git", [
d("templates"),]),
c("gulp", [
d("templates"),]),
c("readme", [
d("templates"),]),]),
d("test"),]),]});