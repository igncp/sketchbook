var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: 'tmTheme-Editor dir-structure',
    body: [
        c('app', [
            c('back', [
                'controllers',
                'lib',
                c('views', [
                    'errors',
                    'partials',
                ]),
            ]),
            c('front', [
                c('css', [
                    'app',
                    'lib',
                ]),
                c('js', [
                    'config',
                    'controllers',
                    'directives',
                    'services',
                    c('template', [
                        'alert',
                        'modal',
                    ]),

                ]),
                c('public', [
                    c('files', [
                        c('samples', [
                            'compiled',
                            'raw',
                        ]),
                        'themes',
                    ]),
                    'fonts',
                    c('images', [
                        'icon',
                        'icons',
                        'screenshots',
                    ])
                ])
            ])
        ]),
        c('test', [
            'services'
        ])
    ]
});
