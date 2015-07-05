var nlc = diagrams.layer.newLayerConnectedToNext,
  nlcc = diagrams.layer.newLayerConnectedToNextWithCode('typescript'),
  nlcpc = diagrams.layer.newLayerConnectedToNextWithParagraphAndCode('typescript'),
  tsc = diagrams.utils.codeBlockOfLanguageFn('typescript', '//');

diagrams.layer(nlc("'Angular2 bootstrap flow' (@/src/core/application.ts)", 'sna', [
  nlcpc("The first argument is the most common, the application class", "export function bootstrap(appComponentType: Type, componentInjectableBindings: List<Type | Binding | List<any>> = null, errorReporter: Function = null): Promise<ApplicationRef>", [
    nlcpc('Instantiates a new BrowserDomAdapter and sets it as root (setRootDomAdapter).', "BrowserDomAdapter.makeCurrent();"),
    nlcpc("Generates the bootstrap promise that will be returned", "var bootstrapProcess = PromiseWrapper.completer();"),
    nlcpc("Instantiates a NgZone, it creates the default error reporter function if not present and calls initCallbacks. Just used here.", "var zone = _createNgZone(errorReporter);"),
    nlcpc("'Runs `fn` in the inner zone and returns whatever it returns " + tsc("return this._innerZone.run(fn);", '/src/core/zone/ng_zone.ts#NgZone#run', true) + ". In a typical app where the inner zone is the Angular zone, this allows one to make use of the Angular's auto digest mechanism.'", "zone.run(() =>", [
      nlcc("var appInjector = _createAppInjector(appComponentType, componentInjectableBindings, zone);"),
      nlcc("var compRefToken: Promise<any> = PromiseWrapper.wrap(() => appInjector.get(appComponentRefToken));"),
      nlcc("var tick = (componentRef) =>", [
        nlcc("var appChangeDetector = internalView(componentRef.hostView).changeDetector;"),
        // retrieve life cycle: may have already been created if injected in root component
        nlcc("var lc = appInjector.get(LifeCycle);"),
        nlcc("lc.registerWith(zone, appChangeDetector);"),
        // the first tick that will bootstrap the app
        nlcc("lc.tick();"),

        nlcc("bootstrapProcess.resolve(new ApplicationRef(componentRef, appComponentType, appInjector));"),
      ]),
      nlcc("PromiseWrapper.then(compRefToken, tick, (err, stackTrace) => {bootstrapProcess.reject(err, stackTrace)});"),
    ]),

    nlcc("return bootstrapProcess.promise;"),
  ]),
]));
