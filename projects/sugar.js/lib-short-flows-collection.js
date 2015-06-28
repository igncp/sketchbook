var nl = diagrams.layer.newLayer,
    nlc = diagrams.layer.newLayerConnectedToNext;

diagrams.layer(nl('lib short flows collection', [
    nl('library exposition (lib/core/core.js)', [
        nlc("Gets the global context: var globalContext = typeof global !== 'undefined' ? global : window;"),
        nlc("Check if the code is run under node.js: var hasExports = typeof module !== 'undefined' && module.exports;"),
        nl('Initializes the lib in the global namespace: initializeGlobal()', [
            nlc('Sets some functions in the library object: Sugar={revert: ..., expose: ..., ...}'),
            nl("Exposes the lib: if (hasExports) {module.exports = Sugar;} else {globalContext['Sugar'] = Sugar;}")
        ])
    ])
]));
