var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' dir-structure',
    body: [
        c('docs F 4 (js), CL 27, LOC 4372', [
            d('libs'),
        ]),
        c('lib F 37 (js), CL, 4228, LOC 7482', [
            d('core'),
            d('extras'),
            d('locales'),
            d('patches'),
            c('plugins', [
                c('Array', [
                    d('toSentence'),
                ]),
                c('String', [
                    d('namespace'),
                    d('split'),
                ]),
            ]),
        ]),
        c('performance F 4 (js), CL 161, LOC 1708', [
            c('javascripts', [
                d('vendor'),
            ]),
        ]),
        d('release'),
        c('script F 9 (sh, rb, js), CL 16, LOC 583', [
            d('jsmin')
        ]),
        c('test F 82 (js, css, html), CL 2852, LOC 24815', [
            d('development'),
            c('environments', [
                d('node'),
                d('sugar'),
                c('underscore', [
                    d('tests'),
                    d('todo'),
                ]),
            ]),
            d('images'),
            d('javascripts'),
            d('minified'),
            d('stylesheets'),
        ]),
    ]
});
