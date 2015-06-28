var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' lib packages',
    body: [
        d('analyzer.js', "Analyzer script. It helps to detect incompabilities with other libraries like Prototype or Underscore."),
        d('array.js'),
        d('common.js'),
        c('core', [
            d('bower.json'),
            d('component.json'),
            d('core.dev.js'),
            d('core.js'),
            d('core.min.js'),
            d('package.json'),
            d('README.md', "'This is the core module for Sugar. It exists to give a hook for creating plugins for Sugar, and is a dependency of Sugar itself.'"),
        ]),
        d('date.js'),
        d('es5.js'),
        c('extras', [
            d('timezonejs-shim.js'),
        ]),
        d('function.js'),
        d('inflections.js', "'Pluralization similar to ActiveSupport including uncountable words and acronyms. Humanized and URL-friendly strings.'"),
        d('language.js', "'Detecting language by character block. Full-width <-> half-width character conversion.'"),
        c('locales', [
            d('da.js'),
            d('de.js'),
            d('es.js'),
            d('fi.js'),
            d('fr.js'),
            d('it.js'),
            d('ja.js'),
            d('ko.js'),
            d('nl.js'),
            d('pl.js'),
            d('pt.js'),
            d('ru.js'),
            d('sv.js'),
            d('zh-CN.js'),
            d('zh-TW.js'),
        ]),
        d('number.js'),
        d('object.js'),
        c('patches', [
            d('sugar-es6-patch.js'),
            d('sugar-es6-patch.min.js'),
        ]),
        c('plugins', [
            c('Array', [
                c('toSentence', [
                    d('package.json'),
                    d('toSentence.js'),
                ])
            ]),
            c('String', [
                c('namespace', [
                    d('namespace.js'),
                    d('package.json'),
                ]),
                c('split', [
                    d('package.json'),
                    d('split.js'),
                ])
            ])
        ]),
        d('range.js'),
        d('regexp.js'),
        d('string.js'),

    ]
});
