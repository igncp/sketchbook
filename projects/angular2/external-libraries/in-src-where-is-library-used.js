var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' in the /src where is a library used',
    body: [
        c('rx', [
            d('/src/facade/async.ts'),
            d('/src/http/backends/mock_backend.ts'),
            d('/src/http/backends/xhr_backend.ts'),
            d('/src/http/http.ts'),
        ]),
    ]
});
