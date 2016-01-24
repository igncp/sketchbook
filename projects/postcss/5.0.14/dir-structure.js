var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' structure',
  body: [
c("postcss", [
d("d.ts"),
c("docs", [
d("guidelines"),]),
d("lib"),
d("test"),]),]});