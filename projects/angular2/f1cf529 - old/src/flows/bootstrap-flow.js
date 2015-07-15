var nlc = diagrams.layer.newLayerConnectedToNext,
  nlcc = diagrams.layer.newLayerConnectedToNextWithCode('typescript'),
  nlcpc = diagrams.layer.newLayerConnectedToNextWithParagraphAndCode('typescript'),
  tsc = diagrams.utils.codeBlockOfLanguageFn('typescript', '//');

diagrams.layer(nlc("'Angular2 bootstrap flow' (@/src/core/application.ts)", 'sna', [
  nlcpc("The first argument is the most common, the application class", "export function bootstrap(appComponentType: Type, componentInjectableBindings: List<Type | Binding | List<any>> = null, errorReporter: Function = null): Promise<ApplicationRef>", [
    nlcpc('Instantiates a new BrowserDomAdapter and sets it as root (setRootDomAdapter).', "BrowserDomAdapter.makeCurrent();"),
    nlcpc("Generates the bootstrap promise that will be returned", "var bootstrapProcess = PromiseWrapper.completer();"),
    nlcpc("Instantiates a NgZone, it creates the default error reporter function if not present and calls initCallbacks. Just used here.", "var zone = _createNgZone(errorReporter);"),
    nlcpc("'Runs `fn` in the 'inner zone' and returns whatever it returns " + tsc("return this._innerZone.run(fn);", '/src/core/zone/ng_zone.ts#NgZone#run', true) + ". In a typical app where the inner zone is the Angular zone, this allows one to make use of the Angular's auto digest mechanism.'", "zone.run(() =>", [
      nlcpc("If it doesn't already exist, it creates the _rootInjector. The _rootInjector provides singleton variables like location, to all the angular applications contained in a web page. The app injector is a child from it, and it is private to the application."+ tsc("if (isBlank(_rootInjector)) _rootInjector = Injector.resolveAndCreate(_rootBindings);") + " Once created, it returns an injector using the componentInjectableBindings" + tsc("return _rootInjector.resolveAndCreateChild(mergedBindings);"), "var appInjector = _createAppInjector(appComponentType, componentInjectableBindings, zone);"),
      nlcpc("Converts the getter function from the private application injector into a promise" + tsc("export const appComponentRefToken: OpaqueToken = CONST_EXPR(new OpaqueToken('ComponentRef'));", "/src/core/application_tokens.ts"), "var compRefToken: Promise<any> = PromiseWrapper.wrap(() => appInjector.get(appComponentRefToken));"),
      nlcc("var tick = (componentRef) =>", [
        nlcpc("Generates the apps change detector using internalView, " + tsc("// This is a workaround for privacy in Dart as we don't have library parts\nexport function internalView(viewRef: ViewRef): viewModule.AppView {\n  return viewRef._view;\n}", "/src/core/compiler/view_ref.ts") + " where componentRef is given by the functions argument", "var appChangeDetector = internalView(componentRef.hostView).changeDetector;"),
        nlcpc("Generates the life cycle using an injectable class." + tsc("@Injectable()\nexport class LifeCycle {", "/src/core/life_cycle/life_cycle.ts") + tsc("export var Injectable = makeDecorator(InjectableAnnotation);", "/src/di/decorators.ts"), "var lc = appInjector.get(LifeCycle);"),
        nlcpc("Registers the generated life cycle" + tsc("registerWith(zone: NgZone, changeDetector: ChangeDetector = null) {\nif (isPresent(changeDetector)) {\nthis._changeDetector = changeDetector;\n}\nzone.initCallbacks({onErrorHandler: this._errorHandler, onTurnDone: () => this.tick()});\n}", "/src/core/life_cycle/life_cycle.ts"), "lc.registerWith(zone, appChangeDetector);"),
        nlcpc("'The first tick that will bootstrap the app'. About the tick method: 'Invoke this method to explicitly process change detection and its side-effects. In development mode, `tick()` also performs a second change detection cycle to ensure that no further changes are detected. If additional changes are picked up during this second cycle, bindings in the app have side-effects that cannot be resolved in a single change detection pass. In this case, Angular throws an error, since an Angular application can only have one change detection pass during which all change detection must complete.'", "lc.tick();"),
        nlcpc("Resolves the promise", "bootstrapProcess.resolve(new ApplicationRef(componentRef, appComponentType, appInjector));"),
      ]),
      nlcpc("If an error appears, reject the promise.", "PromiseWrapper.then(compRefToken, tick, (err, stackTrace) => {bootstrapProcess.reject(err, stackTrace)});"),
    ]),

    nlcpc("Returns the generated promise regarding the bootstrap", "return bootstrapProcess.promise;"),
  ]),
]));
