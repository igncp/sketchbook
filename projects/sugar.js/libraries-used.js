var d = diagrams.box.generateDefinition,
    ds = function(lib) {
        return d(lib, s('libraries-' + lib));
    },
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' used libraries',
    body: [
        c('scripts', [
            c('ruby', [
                d('pp', "'Pretty-printer for Ruby objects'"),
                d('optparse', "'OptionParser is a class for command-line option analysis. It is much more advanced, yet also easier to use, than GetoptLong, and is a more Ruby-oriented solution.'"),
                d('fileutils', "'Namespace for several file utility methods for copying, moving, removing, etc.'"),
                'json'
            ]),
            c('java', [
                d('jsmin', 'JavaScript minifier')
            ]),
        ]),
        c('tests and performance', [
            c('javascript', [
                'jquery',
                'underscore',
                'moment.js'
            ])
        ])
    ]
});
