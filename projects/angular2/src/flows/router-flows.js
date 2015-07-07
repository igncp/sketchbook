var nlc = diagrams.layer.newLayerConnectedToNext,
    nlcc = diagrams.layer.newLayerConnectedToNextWithCode('typescript'),
    nlo = diagrams.layer.newLayerWithCode('typescript'),
    nlpo = diagrams.layer.newLayerWithParagraphAndCode('typescript'),
    nlcpc = diagrams.layer.newLayerConnectedToNextWithParagraphAndCode('typescript'),
    tsc = diagrams.utils.codeBlockOfLanguageFn('typescript', '//');

diagrams.layer(nlc("'Angular2 some Router methods flows' (@/src/router/router.ts)", 'sna', [
    nlo("constructor(public _registry: RouteRegistry, public _pipeline: Pipeline, public parent: Router, public hostComponent: any) {", [
        nlcc("this.navigating = false;"),
        nlcc("this.previousUrl = null;"),
        nlcc("this._outlet = null;"),
        nlcc("this._subject = new EventEmitter();"),
        nlcc("this._currentInstruction = null;"),
        nlcc("this._currentNavigation = PromiseWrapper.resolve(true);"),
    ]),
    nlpo("'Register an object to notify of route changes. You probably don't need to use this unless you're writing a reusable component.'", "registerOutlet(outlet: RouterOutlet): Promise<boolean> {", [
        nlcc("this._outlet = outlet;"),
        nlcc("if (isPresent(this._currentInstruction)) ", [
            nlcpc("About outlet.activate: ['Given an instruction, update the contents of this outlet.'. It deactivates itself and then it updates some values like the _componentRef", "return outlet.activate(this._currentInstruction);"),
        ]),
        nlcc("return PromiseWrapper.resolve(true);"),
    ]),
    nlpo("'Constructs a child router.' The only special behavior of the ChildRouter is that it sets its parent:" + tsc("constructor(parent: Router, hostComponent) {\n  super(parent._registry, parent._pipeline, parent, hostComponent);\n  this.parent = parent;\n}", "class ChildRouter"), "childRouter(hostComponent: any): Router { return new ChildRouter(this, hostComponent); }"),
    nlpo("'Dynamically update the routing configuration and trigger a navigation.'", "config(config: any): Promise<any> {", [
        nlcc("if (config instanceof List)", [
            nlcpc("Uses the RouteRegistry to update the configuration.", "(<List<any>>config).forEach((configObject) => { this._registry.config(this.hostComponent, configObject); });"),
        ]),
        nlcc("else {", [
            nlcpc("The same as before, but without a forEach loop as it isn't a list", "this._registry.config(this.hostComponent, config);"),
        ]),
        nlcc("return this.renavigate();"),
    ]),
    nlpo("'Navigates to either the last URL successfully navigated to, or the last URL requested if the router has yet to successfully navigate.'", "renavigate(): Promise<any> {", [
        nlcc("var destination = isBlank(this.previousUrl) ? this.lastNavigationAttempt : this.previousUrl;"),
        nlcc("if (isBlank(destination)) {", [
            nlcc("return this._currentNavigation;"),
        ]),

        nlcc("return this.navigate(destination);"),
    ]),
    nlpo("'Navigate to a URL. Returns a promise that resolves when navigation is complete. If the given URL begins with a `/`, router will navigate absolutely. If the given URL does not begin with `/`, the router will navigate relative to this component.'", "navigate(url: string): Promise<any> {", [
        nlcc("// ---"),
    ]),
    nlpo("'Updates this router and all descendant routers according to the given instruction'", "commit(instruction: Instruction): Promise<any> {", [
        nlcc("this._currentInstruction = instruction;"),
        nlcc("if (isPresent(this._outlet)) {", [
            nlcc("return this._outlet.activate(instruction);"),
        ]),

        nlcc("return PromiseWrapper.resolve(true);"),
    ]),
    nlpo("'Subscribe to URL updates from the router' this._subject is an EventEmitter instance.", "subscribe(onNext): void { ObservableWrapper.subscribe(this._subject, onNext); }"),
]));
