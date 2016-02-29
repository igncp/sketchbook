var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' scripts overview',
  body: [
    d("build.sh", "First of all, it retrieves several build variables information, like the version of go, the host, etc. After, it builds prometheus and promtool passing these variables with the -ldflags option."),
    d("goenv.sh", "Checks the current golang version and if it is older than the required one, it downloads and installs a new one."),
    d("release_tarballs.sh", "It builds and packs prometheus and promtool for several (4) OS and archs (2), resulting in 8 iterations."),
  ],
});
