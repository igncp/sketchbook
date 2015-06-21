var d = diagrams.generateBoxDefinition,
    c = diagrams.generateBoxContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: 'csscomb.js libraries used',
    body: [
        c('npm', [
            c('dependencies', [
                d('minimist', "'Parse argument options'"),
                d('csscomb-core', "'Framework for writing postprocessors'"),
                d('gonzales-pe', "'Gonzales Preprocessor Edition (fast CSS parser)'"),
                d('vow', "'DOM Promise and Promises/A+ implementation for Node.js and browsers'"),
            ]),
            c('devDependencies', [
                d('babel'),
                d('jshint-groups', "'jshint wrapper which allows check different files by using different options'"),
                d('jshint'),
                d('jscs'),
                d('mocha')
            ]),
        ]),
    ]
});
