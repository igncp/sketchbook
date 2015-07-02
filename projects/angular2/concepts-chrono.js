var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' direrctories structure',
    body: [
        "Angular's reflectors seem to be related to the concept of decorators",
        d('Self-Executing (SFX) Bundles', "'To make a bundle that is independent of the SystemJS loader entirely, we can make SFX bundles. This bundle file can then be included with a <script> tag, and no other dependencies would need to be included in the page."),
        c('https://www.youtube.com/watch?v=uD6Okha_Yj0', [
            "Templates syntax: () for events, [] for properties",
            'Shadow DOM replaces transclusion',
            'ES6 modules replaces angular modules',
            '"AtScript" (working with TypeScript, V8 and others) provides syntax sugar for meta-data annotations'
        ])
    ]
});
