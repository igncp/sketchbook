var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: 'csscomb.js current options',
    body: [
        d('always-semicolon'),
        d('block-indent'),
        d('color-case'),
        d('color-shorthand'),
        d('element-case'),
        d('eof-newline'),
        d('leading-zero'),
        d('quotes'),
        d('remove-empty-rulesets'),
        d('sort-order-fallback'),
        d('sort-order'),
        d('space-after-colon'),
        d('space-after-combinator'),
        d('space-after-opening-brace'),
        d('space-after-selector-delimiter'),
        d('space-before-closing-brace'),
        d('space-before-colon'),
        d('space-before-combinator'),
        d('space-before-opening-brace'),
        d('space-before-selector-delimiter'),
        d('space-between-declarations'),
        d('strip-spaces'),
        d('tab-size'),
        d('unitless-zero'),
        d('vendor-prefix-align'),
    ]
});
