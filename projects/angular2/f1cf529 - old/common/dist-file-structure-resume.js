var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' dist file structure resume',
    body: [
        c('build', [
            d('angular2.dev.js'),
            d('angular2.dev.js.map'),
            d('angular2.js'),
            d('angular2.js.map'),
            d('angular2.min.js'),
            d('angular2.min.js.map'),
            d('angular2.sfx.dev.js'),
            d('angular2.sfx.dev.js.map'),
        ]),
        c('bundle', [
            d('mock.dev.js'),
            d('mock.dev.js.map'),
            d('router.dev.js'),
            d('router.dev.js.map'),
        ]),
        c('js', [
            c('cjs', [
                d('angular2/'),
                d('benchmarks/'),
                d('benchmarks_external/'),
                d('benchpress/'),
                d('examples/'),
                d('rtts_assert/'),
            ]),
            c('dev', [
                c('es5', [
                    d('angular2/'),
                    d('benchmarks/'),
                    d('benchmarks_external/'),
                    d('benchpress/'),
                    d('examples/'),
                    d('rtts_assert/'),
                ]),

                c('es6', [
                    d('angular2/'),
                    d('benchmarks/'),
                    d('benchmarks_external/'),
                    d('benchpress/'),
                    d('examples/'),
                    d('rtts_assert/'),
                ]),
            ]),
            c('prod', [
                c('es5', [
                    d('angular2/'),
                    d('benchmarks/'),
                    d('benchmarks_external/'),
                    d('benchpress/'),
                    d('examples/'),
                    d('rtts_assert/'),
                ]),

                c('es6', [
                    d('angular2/'),
                    d('benchmarks/'),
                    d('benchmarks_external/'),
                    d('benchpress/'),
                    d('examples/'),
                    d('rtts_assert/'),
                ]),
            ]),
        ]),
        c('tools', [
            d('broccoli/'),
        ]),
    ]
});
