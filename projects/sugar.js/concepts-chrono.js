var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' concepts chrono',
    body: [
        "'The library doesn't use the literal types directly (e.g. Number), instead it uses a reference (number = Number) to save space in the minified version.",
        s('inflector'),
    ]
});
