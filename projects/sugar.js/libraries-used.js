var d = diagrams.generateBoxDefinition,
    ds = function(lib) {
        return d(lib, s('libraries-' + lib));
    },
    c = diagrams.generateBoxContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' used libraries',
    body: [
    ]
});
