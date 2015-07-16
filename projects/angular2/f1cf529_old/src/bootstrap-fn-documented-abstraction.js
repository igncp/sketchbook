var nl = diagrams.layer.newLayer,
    nlc = diagrams.layer.newLayerConnectedToNext;

diagrams.layer(nl("'Angular2 core function `bootstrap` tasks from code documentation (src/core/application.ts)'", [
    nl("'App invokes `bootstrap()` with the root component `MyApp` as its argument, Angular performs the following tasks'", [
        nlc("'It uses the component's `selector` property to locate the DOM element which needs to be upgraded into the angular component.'"),
        nlc("'It creates a new child injector (from the platform injector) and configures the injector with the component's `appInjector`. Optionally, you can also override the injector configuration for an app by invoking `bootstrap` with the `componentInjectableBindings` argument.'"),
        nlc("'It creates a new `Zone` and connects it to the angular application's change detection domain instance.'"),
        nlc("'It creates a shadow DOM on the selected component's host element and loads the template into it.'"),
        nlc("'It instantiates the specified component.'"),
        nl("'Finally, Angular performs change detection to apply the initial data bindings for the application.'"),
    ])
]));
