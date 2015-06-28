var nl = diagrams.layer.newLayer,
    nlc = diagrams.layer.newLayerConnectedToNext;

diagrams.layer(nl('the four core Sugar exposed properties (lib/core/core.js): extend, revert, restore and noConflict', [
    nl('noConflict', [
        nl("Returns false if not in node.js. Otherwise, it returns the environment variable SUGAR_NO_CONFLICT: var noConflict = hasExports && typeof process !== 'undefined' ? process.env['SUGAR_NO_CONFLICT'] : false;")
    ]),
    nl("revert(klass, methods). 'Reverts Sugar methods to what the were before they were added.'", [
        nlc("For each of the methods passed (all if none), check if it has the `existed` property, and if so set it to the value in the property `origina`. Otherwise, delete the property.", [
            nlc("batchMethodExecute(klass, methods, fn): In each loop, check if the method has the property `instance` and if so, use the Class prototype, otherwise the class itself.", [
                nl('getProxy(klass): Instead of using the methods of the given class, it uses the proxy, which is stored in the Sugar object: Sugar[proxies[klass]], where proxies is an object that maps the Class (key) to the name of the proxy in Sugar (value)')
            ]),
            nl('setProperty(target, name, property, enumerable): At the time of setting the property back to the original, check if there is support for object descriptors and set the property with `Object.defineProperty`, otherwise do it directly: target[name] = property;')
        ]),
        nl('returns wether it changed any of the methods of the Class or not')
    ]),
    nl("restore(klass, methods): 'Restores Sugar methods that may have been overwritten by other scripts.'", [
        nlc('Exits if it is in noConflict mode'),
        nl("Set each given method (all if none) using the `method` property of the method (`m.method`), using the functions `batchMethodExecute` and `setProperty`")
    ])
]));
