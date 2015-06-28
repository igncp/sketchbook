var d = diagrams.box.generateDefinition;

diagrams.box({
    name: 'Makefile',
    body: [
        d('clean', 'runs docclean'),
        d('docclean', 'removes files in man that end with extensions .1 and .html'),
        d('docs', 'runs (at least) ronn, a Ruby tool to generate manuals files'),
        d('install'),
        d('man/%.1'),
        d('man/%.html'),
        d('uninstall')
    ]
});
