var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' commands',
    body: [
        c('gulp', [
            d('build'),
            d('build.js'),
            d('build.dart'),
            d('build.js'),
            d('build.dart'),
        ])
    ]
});
