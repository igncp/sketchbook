var d = diagrams.box.generateDefinition,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' commands',
  body: [
    d("build", "Builds the dist: rm -rf dist; babel src/ --out-dir dist/"),
    d("prepublish", "npm run build"),
    d("test", "jest"),
    d("watch", "Watch during development: babel src/ --out-dir dist/ --watch"),
  ]
});
