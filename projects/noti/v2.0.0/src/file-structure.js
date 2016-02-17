var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' structure',
  body: [
c("noti", [
d(".gitignore"),
d("CHANGELOG.md"),
d("CONTRIBUTING.md"),
d("LICENSE"),
d("README.md"),
d("man.go"),
d("noti.go"),
d("notifiers.go"),
d("notifiers_linuxfreebsd.go"),
d("notifiers_osx.go"),]),]});