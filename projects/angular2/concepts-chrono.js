var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' important concepts (to see definitions, go to the glossary)',
    body: [
        c('https://www.youtube.com/watch?v=uD6Okha_Yj0', [
            "Templates syntax: () for events, [] for properties",
            'Shadow DOM replaces transclusion',
            'ES6 modules replaces angular modules',
            '"AtScript" (working with TypeScript, V8 and others) provides syntax sugar for meta-data annotations'
        ])
    ]
});
