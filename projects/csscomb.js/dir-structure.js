var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: 'csscomb.js dir-structure',
    body: [
        'bin',
        'config',
        'doc',
        'scripts',
        c('src: LOC 1784, CL 640, F 28', [
            'options',
        ]),
        c('test: LOC 4814, CL 63, F 362', [
            c('core', [
                'configure',
                'get-config',
                'less',
                'scss',
                'use',
            ]),
            c('options', [
                'always-semicolon',
                'always-semicolon-less',
                'always-semicolon-sass',
                'always-semicolon-scss',
                'block-indent',
                'block-indent-sass',
                'block-indent-scss',
                'color-case',
                'color-shorthand',
                'element-case',
                'element-case-scss',
                'eof-newline',
                'integral',
                'leading-zero',
                'quotes',
                'remove-empty-rulesets',
                'remove-empty-rulesets-less',
                'remove-empty-rulesets-scss',
                'sass',
                'sort-order',
                'sort-order-fallback',
                'sort-order-less',
                'sort-order-sass',
                'sort-order-scss',
                'space-after-colon',
                'space-after-colon-sass',
                'space-after-colon-scss',
                'space-after-combinator',
                'space-after-opening-brace',
                'space-after-selector-delimiter',
                'space-after-selector-delimiter-sass',
                'space-before-closing-brace',
                'space-before-colon',
                'space-before-colon-sass',
                'space-before-combinator',
                'space-before-opening-brace',
                'space-before-opening-brace-scss',
                'space-before-selector-delimiter',
                'space-between-declarations',
                'strip-spaces',
                'tab-size',
                'unitless-zero',
                'vendor-prefix-align',
                'vendor-prefix-align-sass',
            ])
        ])
    ]
});
