var c = diagrams.box.generateContainer,
  d = diagrams.box.generateDefinition,
  cs = function() {
    var className = arguments[0].split(" ")[0],
      classShared = 'class-' + className,
      items, text;
    if (arguments.length === 2) {
      text = s(classShared);
      items = arguments[1];
    } else if (arguments.length === 3) {
      text = arguments[1] + sn(classShared);
      items = arguments[2];
    }
    return c.apply({}, [arguments[0], text, items]);
  },
  s = diagrams.shared.get,
  tsc = diagrams.utils.codeBlockOfLanguageFn('typescript', '//'),
  sn = diagrams.shared.getWithStartingBreakLine;

diagrams.box({
  name: s('project') + ' API overview',
  body: [c('src', [
    c('change_detection', []),
    c('core', [
      c('application.ts', [
        c('class ApplicationRef', "Represents a Angular's representation of an Application. `ApplicationRef` represents a running application instance. Use it to retrieve the host component, injector, or dispose of an application.", [
          "_hostComponent: ComponentRef;",
          "_hostComponentType: Type;",
          "_injector: Injector;",
          "constructor(hostComponent: ComponentRef, hostComponentType: Type, injector: Injector)",
          d("dispose(): void", "Dispose (un-load) the application."),
          d("get hostComponent(): any", "Returns the current Component instance."),
          d("get hostComponentType(): Type", "Returns the current Component type."),
          d("get injector(): Injector", "Returns the root application Injector."),
        ]),
        "function bootstrap(appComponentType: Type, componentInjectableBindings: List<Type | Binding | List<any>> = null, errorReporter: Function = null): Promise<ApplicationRef>",
      ]),
      c('application_tokens.ts', [
        "const appComponentRefPromiseToken",
        d("const appComponentTypeToken", "An opaque token representing the application root type in the Injector" + tsc("@Component(...)\n@View(...)\nclass MyApp {}\n\nbootstrap(MyApp).then((appRef:ApplicationRef) {\n expect(appRef.injector.get(appComponentTypeToken)).toEqual(MyApp);\n});")),
      ]),
      c('exception_handler.ts', [
        c('class ExceptionHandler', "@Injectable(); Provides a hook for centralized exception handling. The default implementation of `ExceptionHandler` prints error messages to the `Console`. To intercept error handling, write a custom exception handler that replaces this default as appropriate for your app.", [
          "call(error, stackTrace = null, reason = null)",
        ]),
      ]),
      c('annotations', [
        c('decorators.ts', [
          d("interface DirectiveDecorator extends TypeDecorator", "Interface for the Directive decorator function."),
          c('interface ComponentDecorator extends TypeDecorator', "Interface for the Component decorator function.", [
            d("View(obj: {templateUrl?: string, template?: string, directives?: List<Type | any | List<any>>, renderer?: string, styles?: List<string>, styleUrls?: List<string>, }): ViewDecorator;", "Chain View annotation."),
          ]),
          c('interface ViewDecorator extends TypeDecorator', "Interface for the View decorator function.", [
            d("View(obj: { templateUrl?: string, template?: string, directives?: List<Type | any | List<any>>, renderer?: string, styles?: List<string>, styleUrls?: List<string>,   }): ViewDecorator", "Chain View annotation."),
          ]),
          c('interface DirectiveFactory', "Directive factory for creating annotations, decorators or DSL.", [
            "(obj: { selector?: string, properties?: List<string>, events?: List<string>, host?: StringMap<string, string>, lifecycle?: List<LifecycleEvent>, hostInjector?: List<any>, exportAs?: string, compileChildren?: boolean;   }): DirectiveDecorator;",
            "new (obj: { selector?: string, properties?: List<string>, events?: List<string>, host?: StringMap<string, string>, lifecycle?: List<LifecycleEvent>, hostInjector?: List<any>, exportAs?: string, compileChildren?: boolean;   }): DirectiveAnnotation;",
          ]),
          c('interface ComponentFactory', "ComponentAnnotation factory for creating annotations, decorators or DSL.", [
            "(obj: { selector?: string, properties?: List<string>, events?: List<string>, host?: StringMap<string, string>, lifecycle?: List<LifecycleEvent>, hostInjector?: List<any>, exportAs?: string, compileChildren?: boolean, viewInjector?: List<any>, changeDetection?: string,   }): ComponentDecorator;",
            "new (obj: { selector?: string, properties?: List<string>, events?: List<string>, host?: StringMap<string, string>, lifecycle?: List<LifecycleEvent>, hostInjector?: List<any>, exportAs?: string, compileChildren?: boolean, viewInjector?: List<any>, changeDetection?: string,   }): ComponentAnnotation; }",
          ]),
          c('interface ViewFactory', "ViewAnnotation factory for creating annotations, decorators or DSL.", [
            "(obj: { templateUrl?: string, template?: string, directives?: List<Type | any | List<any>>, renderer?: string, styles?: List<string>, styleUrls?: List<string>,   }): ViewDecorator;",
            "new (obj: { templateUrl?: string, template?: string, directives?: List<Type | any | List<any>>, renderer?: string, styles?: List<string>, styleUrls?: List<string>,   }): ViewAnnotation;",
          ]),

          c('interface AttributeFactory', 'Attribute factory for creating annotations, decorators or DSL.', [
            "(name: string): TypeDecorator;",
            "new (name: string): AttributeAnnotation;",
          ]),
          c('interface QueryFactory', "Query factory for creating annotations, decorators or DSL.", [
            "(selector: Type | string, {descendants}?: {descendants?: boolean}): ParameterDecorator;",
            "new (selector: Type | string, {descendants}?: {descendants?: boolean}): QueryAnnotation;",
          ]),
          d("var Component: ComponentFactory", "Component factory function."),
          d("var Directive: DirectiveFactory", "Directive factory function."),
          d("var View: ViewFactory", "View factory function."),
          d("var Attribute: AttributeFactory", "Attribute factory function."),
          d("var Query: QueryFactory", "Query factory function."),
          d("var ViewQuery: QueryFactory", "ViewQuery factory function."),
        ])
      ]),
      c('annotations_impl', [
        c('annotations.ts', [
          c('Directive extends InjectableMetadata', "@CONST(); Directives allow you to attach behavior to elements in the DOM. Directives with an embedded view are called Components.A directive consists of a single directive annotation and a controller class.", [
            "constructor({selector, properties, events, host, lifecycle, hostInjector, exportAs, compileChildren = true,}: {selector?: string, properties?: List<string>, events?: List<string>, host?: StringMap<string, string>, lifecycle?: List<LifecycleEvent>, hostInjector?: List<any>, exportAs?: string, compileChildren?: boolean,   } = {})",
            d("compileChildren: boolean;", "If set to false the compiler does not compile the children of this directive."),
            d("events: List<string>;", "Enumerates the set of emitted events."),
            d("exportAs: string;", "Defines the name that can be used in the template to assign this directive to a variable."),
            d("host: StringMap<string, string>;", "Specifiy the events, actions, properties and attributes related to the host element."),
            d("hostInjector: List<any>;", "Defines the set of injectable objects that are visible to a Directive and its light dom children."),
            d("lifecycle: List<LifecycleEvent>;", "Specifies which lifecycle should be notified to the directive."),
            d("properties: List<string>;", "Enumerates the set of properties that accept data binding for a directive."),
            d("selector: string;", "The CSS selector that triggers the instantiation of a directive. Angular only allows directives to trigger on CSS selectors that do not cross element boundaries."),
          ]),
          c('class Component extends Directive', "@CONST(); Declare reusable UI building blocks for an application. Each Angular component requires a single `@Component` and at least one `@View` annotation. The `@Component` annotation specifies when a component is instantiated, and which properties and hostListeners it binds to.", [
            d("changeDetection: string;", "Defines the used change detection strategy. When a component is instantiated, Angular creates a change detector, which is responsible for propagating the component's bindings."),
            d("viewInjector: List<any>;", "Defines the set of injectable objects that are visible to its view dom children."),
            "constructor({selector, properties, events, host, exportAs, lifecycle, hostInjector, viewInjector, changeDetection = DEFAULT, compileChildren = true}: { selector?: string, properties?: List<string>, events?: List<string>, host?: StringMap<string, string>, lifecycle?: List<LifecycleEvent>, hostInjector?: List<any>, exportAs?: string, compileChildren?: boolean, viewInjector?: List<any>, changeDetection?: string,} = {})",
          ]),
          c('class LifecycleEvent', "@CONST()", [
            "constructor(public name: string)",
          ]),
          d("const onDestroy: LifecycleEvent", "Notify a directive whenever a View that contains it is destroyed."),
          d("const onChange: LifecycleEvent = CONST_EXPR(new LifecycleEvent('onChange'));", "Notify a directive when any of its bindings have changed. This method is called right after the directive's bindings have been checked, and before any of its children's bindings have been checked."),
          d("const onCheck: LifecycleEvent = CONST_EXPR(new LifecycleEvent('onCheck'));", "Notify a directive when it has been checked."),
          d("const onInit: LifecycleEvent = CONST_EXPR(new LifecycleEvent('onInit'));", "Notify a directive when it has been checked the first itme."),
          d("const onAllChangesDone: LifecycleEvent = CONST_EXPR(new LifecycleEvent('onAllChangesDone'));", "Notify a directive when the bindings of all its children have been checked (whether they have changed or not)."),
        ]),
        c('di.ts', [
          c('class Attribute extends DependencyMetadata', "@CONST(); Specifies that a constant attribute value should be injected. The directive can inject constant string literals of host element attributes.", [
            "constructor(public attributeName: string)",
            "get token()",
            "toString(): string",
          ]),
          c('class Query extends DependencyMetadata', "@CONST(); Specifies that a QueryList should be injected.", [
            "constructor(private _selector: Type | string, {descendants = false}: {descendants?: boolean} = {})",
            "descendants: boolean;",
            "get isVarBindingQuery(): boolean",
            "get isViewQuery()",
            "get selector()",
            "get varBindings(): List<string>",
            "toString(): string",
          ]),
          c('class ViewQuery extends Query', "@CONST(); Specifies that a QueryList should be injected.", [
            "constructor(_selector: Type | string, {descendants = false}: {descendants?: boolean} = {})",
            "get isViewQuery()",
            "toString(): string",
          ]),
        ]),
        c('view.ts', [
          c('class View', "@CONST(); Declares the available HTML templates for an application. Each angular component requires a single `@Component` and at least one `@View` annotation. The `@View` annotation specifies the HTML template to use, and lists the directives that are active within the template.When a component is instantiated, the template is loaded into the component's shadow root, and the expressions and statements in the template are evaluated against the component.", [
            "constructor({templateUrl, template, directives, renderer, styles, styleUrls}: { templateUrl?: string, template?: string, directives?: List<Type | any | List<any>>, renderer?: string, styles?: List<string>, styleUrls?: List<string>} = {})",
            d("directives: List<Type | any | List<any>>;", "Specifies a list of directives that can be used within a template. Directives must be listed explicitly to provide proper component encapsulation."),
            d("renderer: string;", "Specify a custom renderer for this View. If this is set, neither `template`, `templateUrl`, `styles`, `styleUrls` nor `directives` are used."),
            d("styles: List<string>;", "Specifies an inline stylesheet for an angular component."),
            d("styleUrls: List<string>;", "Specifies stylesheet URLs for an angular component."),
            d("template: string;", "Specifies a template URL for an angular component."),
            d("templateUrl: string;", "Specifies an inline template for an angular component."),
          ]),
        ]),
      ]),
      c('zone', [
        c('ng_zone.ts', [
          c('interface NgZoneZone extends Zone', [
            "_innerZone: boolean;",
          ]),
          c('class NgZone', "A wrapper around zones that lets you schedule tasks after it has executed a task. The wrapper maintains an 'inner' and an 'mount' `Zone`. The application code will executes in the 'inner' zone unless `runOutsideAngular` is explicitely called. A typical application will create a singleton `NgZone`. The outer `Zone` is a fork of the root `Zone`. The default `onTurnDone` runs the Angular change detection.", [
            "_createInnerZone(zone, enableLongStackTrace)",
            "_inVmTurnDone: boolean = false;",
            "_nestedRun: number;",
            "_onError(zone, e): void",
            "_onErrorHandler: (error, stack) => void;",
            "_onEventDone: () => void;",
            "_onTurnDone: () => void;",
            "_onTurnStart: () => void;",
            d("_disabled: boolean;", "This disabled flag is only here to please cjs tests"),
            d("_hasExecutedCodeInInnerZone: boolean;", "Whether some code has been executed in the _innerZone (& descendants) in the current turn"),
            d("_innerZone;", "_innerZone is the child of _mountZone. Any code executed in this zone will trigger the onTurnDone hook at the end of the current VM turn."),
            d("_mountZone;", "Code executed in _mountZone does not trigger the onTurnDone."),
            d("_pendingMicrotasks: number;", "Number of microtasks pending from _innerZone (& descendants)"),
            d("constructor({enableLongStackTrace})", "Associates with this - a 'root' zone, which the one that instantiated this. - an 'inner' zone, which is a child of the root zone."),
            d("overrideOnErrorHandler(errorHandlingFn: Function): void", "Sets the zone hook that is called when an error is uncaught in the Angular zone. The first argument is the error. The second argument is the stack trace."),
            d("overrideOnEventDone(onEventDoneFn: Function): void", "Sets the zone hook that is called immediately after the last turn in the current event completes. At this point Angular will no longer attempt to sync the UI. Any changes to the data model will not be reflected in the DOM. onEventDoneFn is executed outside Angular zone. This hook is useful for validating application state (e.g. in a test)."),
            d("overrideOnTurnDone(onTurnDoneFn: Function): void", "Sets the zone hook that is called immediately after Angular processes all pending microtasks."),
            d("overrideOnTurnStart(onTurnStartFn: Function): void", "Sets the zone hook that is called just before Angular event turn starts. It is called once per browser event."),
            d("run(fn): any", "Runs `fn` in the inner zone and returns whatever it returns. In a typical app where the inner zone is the Angular zone, this allows one to make use of the Angular's auto digest mechanism."),
            d("runOutsideAngular(fn): any", "Runs `fn` in the outer zone and returns whatever it returns. In a typical app where the inner zone is the Angular zone, this allows one to escape Angular's auto-digest mechanism."),
          ]),
        ]),
      ]),
    ]),
    c('debug', []),
    c('di', []),
    c('directives', []),
    c('dom', []),
    c('facade', []),
    c('forms', []),
    c('http', []),
    c('mock', []),
    c('reflection', [
      c('platform_reflection_capabilities.ts', [
        c('interface PlatformReflectionCapabilities', [
          "isReflectionEnabled(): boolean;",
          "factory(type: Type): Function;",
          "interfaces(type: Type): List<any>;",
          "parameters(type: Type): List<List<any>>;",
          "annotations(type: Type): List<any>;",
          "getter(name: string): GetterFn;",
          "setter(name: string): SetterFn;",
          "method(name: string): MethodFn;",
        ]),
      ]),
      c('reflection_capabilities.ts', [
        c('class ReflectionCapabilities implements PlatformReflectionCapabilities', [
          "_zipTypesAndAnnotaions(paramTypes, paramAnnotations): List<List<any>>",
          "annotations(typeOfFunc): List<any>",
          "constructor(reflect?: any)",
          "factory(t: Type): Function",
          "getter(name: string): GetterFn",
          "interfaces(type): List<any>",
          "isReflectionEnabled(): boolean",
          "method(name: string): MethodFn",
          "parameters(typeOfFunc): List<List<any>>",
          "private _reflect: any;",
          "setter(name: string): SetterFn",
        ]),
      ]),
      c('reflection.ts', [
        "var reflector = new Reflector(new ReflectionCapabilities());",
      ]),
      c('reflector.ts', [
        c('class Reflector', [
          "_containsTypeInfo(typeOrFunc) { return this._injectableInfo.has(typeOrFunc);",
          "_getters: Map<string, GetterFn>;",
          "_getTypeInfoField(typeOrFunc, key, defaultValue)",
          "_injectableInfo: Map<any, StringMap<string, any>>;",
          "_methods: Map<string, MethodFn>;",
          "_setters: Map<string, SetterFn>;",
          "annotations(typeOrFunc): List<any>",
          "constructor(reflectionCapabilities: PlatformReflectionCapabilities)",
          "factory(type: Type): Function",
          "getter(name: string): GetterFn",
          "interfaces(type): List<any>",
          "isReflectionEnabled(): boolean",
          "method(name: string): MethodFn",
          "parameters(typeOrFunc): List<any>",
          "reflectionCapabilities: PlatformReflectionCapabilities;",
          "registerFunction(func: Function, funcInfo: StringMap<string, any>): void",
          "registerGetters(getters: StringMap<string, GetterFn>): void",
          "registerMethods(methods: StringMap<string, MethodFn>): void",
          "registerSetters(setters: StringMap<string, SetterFn>): void",
          "registerType(type: Type, typeInfo: StringMap<string, any>): void",
          "setter(name: string): SetterFn",
        ]),
      ]),
      c('types.ts', [
        "type SetterFn = (obj: any, value: any) => void;",
        "type GetterFn = (obj: any) => any;",
        "type MethodFn = (obj: any, args: List<any>) => any;",
      ]),
    ]),
    c('render', []),
    c('router', []),
    c('services', []),
    c('test_lib', []),
    c('transform', []),
    c('util', []),
  ])]
});
