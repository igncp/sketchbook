var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' important concepts (to see definitions, go to the glossary)',
    body: [
        "'Your component class is basically your execution context in Angular 2 applications. All properties defined on your component can be interpolated in your component's template.'",
        "Angular defines multiple functions with the suffix `Wrapper` which usually accept an instance of the Type of the Wrapper and executes its method, e.g. StringWrapper.replace('foo', 'foo', 'bar')",
        c('https://www.youtube.com/watch?v=uD6Okha_Yj0', [
            "Templates syntax: () for events, [] for properties",
            'Shadow DOM replaces transclusion',
            'ES6 modules replaces angular modules',
            '"AtScript" (working with TypeScript, V8 and others) provides syntax sugar for meta-data annotations'
        ])
    ]
});
