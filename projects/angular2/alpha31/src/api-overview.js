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
      c('compiler', [
        c('base_query_list.ts', [
          c('class BaseQueryList<T>', "Injectable Objects that contains a live list of child directives in the light Dom of a directive. The directives are kept in depth-first pre-order traversal of the DOM. In the future this class will implement an Observable interface. For now it uses a plain list of observable callbacks.", [
            "[Symbol.iterator](): any",
            "add(obj)",
            "fireCallbacks()",
            "get first()",
            "get last()",
            "get length()",
            "map<U>(fn: (T) => U): U[]",
            "onChange(callback): void",
            "protected _callbacks = [];",
            "protected _dirty = false;",
            "protected _results: List<T> = [];",
            "removeCallback(callback): void",
            "reset(newList)",
          ]),
        ]),
        c('compiler.ts', [
          c('class CompilerCache', "@Injectable(); Cache that stores the AppProtoView of the template of a component. Used to prevent duplicate work and resolve cyclic dependencies.", [
            "_cache: Map<Type, AppProtoView> = new Map();",
            "_hostCache: Map<Type, AppProtoView> = new Map();",
            "clear(): void",
            "get(component: Type): AppProtoView",
            "getHost(component: Type): AppProtoView",
            "set(component: Type, protoView: AppProtoView): void",
            "setHost(component: Type, protoView: AppProtoView): void",
          ]),
          c('class Compiler', "@Injectable()", [
            "constructor(reader: DirectiveResolver, cache: CompilerCache, viewResolver: ViewResolver, componentUrlMapper: ComponentUrlMapper, urlResolver: UrlResolver, render: renderApi.RenderCompiler, protoViewFactory: ProtoViewFactory, appUrl: AppRootUrl)",
            "private _appUrl: string;",
            "private _bindDirective(directiveTypeOrBinding): DirectiveBinding",
            "private _buildRenderTemplate(component, view, directives): renderApi.ViewDefinition",
            "private _collectComponentElementBinders(protoViews: List<AppProtoView>): List<ElementBinder>",
            "private _compile(componentBinding: DirectiveBinding): Promise<AppProtoView>| AppProtoView",
            "private _compileNestedProtoViews(componentBinding, renderPv, directives): Promise<AppProtoView>| AppProtoView",
            "private _compilerCache: CompilerCache;",
            "private _compiling: Map<Type, Promise<AppProtoView>>;",
            "private _componentUrlMapper: ComponentUrlMapper;",
            "private _flattenDirectives(template: View): List<Type>",
            "private _flattenList(tree: List<any>, out: List<Type | Binding | List<any>>): void",
            "private _protoViewFactory: ProtoViewFactory;",
            "private _reader: DirectiveResolver;",
            "private _removeDuplicatedDirectives(directives: List<DirectiveBinding>): List<DirectiveBinding>",
            "private _render: renderApi.RenderCompiler;",
            "private _urlResolver: UrlResolver;",
            "private _viewResolver: ViewResolver;",
            "private static _assertTypeIsComponent(directiveBinding: DirectiveBinding): void",
            "private static _isValidDirective(value: Type | Binding): boolean",
            d("compileInHost(componentTypeOrBinding: Type | Binding): Promise<ProtoViewRef>", "Create a hostView as if the compiler encountered <hostcmp></hostcmp>. Used for bootstrapping"),
          ]),
        ]),

        c("component_url_mapper.ts", [
          c('class ComponentUrlMapper', "@Injectable(); Resolve a Type from a Component into a URL. This interface can be overridden by the application developer to create custom behavior.", [
            d("getUrl(component: Type): string", "Returns the base URL to the component source file. The returned URL could be: - an absolute URL, - a path relative to the application"),
          ]),
          c('class RuntimeComponentUrlMapper extends ComponentUrlMapper', [
            "_componentUrls: Map<Type, string>;",
            "constructor()",
            "getUrl(component: Type): string",
            "setComponentUrl(component: Type, url: string)",
          ]),
        ]),

        c('directive_lifecycle_reflector.ts', [
          "function hasLifecycleHook(e: LifecycleEvent, type, annotation: Directive): boolean",
        ]),

        c('directive_resolver.ts', [
          c('class DirectiveResolver', "@Injectable(); Resolve a Type for Directive. This interface can be overridden by the application developer to create custom behavior.", [
            d("resolve(type: Type): Directive", "Return Directive for a given Type."),
          ]),
        ]),

        c('dynamic_component_loader.ts', [
          c('class ComponentRef', [
            "constructor(public location: ElementRef, public instance: any, public dispose: Function)",
            "get hostView(): ViewRef",
          ]),

          c('class DynamicComponentLoader', "@Injectable(); Service for dynamically loading a Component into an arbitrary position in the internal Angular application tree.", [
            "constructor(private _compiler: Compiler, private _viewManager: AppViewManager)",
            d("loadAsRoot(typeOrBinding: Type | Binding, overrideSelector: string, injector: Injector): Promise<ComponentRef>", "Loads a root component that is placed at the first element that matches the component's selector. The loaded component receives injection normally as a hosted view."),
            d("loadIntoLocation(typeOrBinding: Type | Binding, hostLocation: ElementRef, anchorName: string, bindings: ResolvedBinding[] = null): Promise<ComponentRef>", "Loads a component into the component view of the provided ElementRef next to the element with the given name The loaded component receives injection normally as a hosted view."),
            d("loadNextToLocation(typeOrBinding: Type | Binding, location: ElementRef, bindings: ResolvedBinding[] = null): Promise<ComponentRef>", "Loads a component next to the provided ElementRef. The loaded component receives injection normally as a hosted view."),
          ]),
        ]),
        c('element_binder.ts', [
          c('class ElementBinder', [
            "constructor(public index: int, public parent: ElementBinder, public distanceToParent: int, public protoElementInjector: eiModule.ProtoElementInjector, public componentDirective: DirectiveBinding)",
            "hasEmbeddedProtoView(): boolean",
            "hasStaticComponent(): boolean",
            d("hostListeners: StringMap<string, Map<number, AST>> = null;", "updated later when events are bound"),
            d("nestedProtoView: viewModule.AppProtoView = null;", "updated later, so we are able to resolve cycles"),
          ]),
        ]),
        c('element_injector.ts', [
          c('class StaticKeys', [
            "changeDetectorRefId: number;",
            "constructor()",
            "elementRefId: number;",
            "pipesKey: Key;",
            "protoViewId: number;",
            "static instance(): StaticKeys",
            "viewContainerId: number;",
            "viewManagerId: number;",
          ]),
          c('class TreeNode<T extends TreeNode<any>>', [
            "_head: T = null;",
            "_next: T = null;",
            "_parent: T;",
            "_tail: T = null;",
            "constructor(parent: T)",
            "get children(): T[]",
            "get parent()",
            d("_findPrev()", "Finds a previous sibling or returns null if first child. Assumes the node has a parent."),
            d("addChild(child: T): void", "Adds a child to the parent node. The child MUST NOT be a part of a tree."),
            d("addChildAfter(child: T, prevSibling: T): void", "Adds a child to the parent node after a given sibling. The child MUST NOT be a part of a tree and the sibling must be present."),
            d("remove(): void", "Detaches a node from the parent's tree."),
          ]),
          c('class DirectiveDependency extends Dependency', [
            "_verify(): void",
            "constructor(key: Key, optional: boolean, visibility: any, properties: List<any>, public attributeName: string, public queryDecorator: Query)",
            "static _attributeName(properties): string",
            "static _query(properties): Query",
            "static createFrom(d: Dependency): Dependency",
          ]),
          c('class DirectiveBinding extends ResolvedBinding', [
            "constructor(key: Key, factory: Function, dependencies: List<Dependency>, public resolvedHostInjectables: List<ResolvedBinding>, public resolvedViewInjectables: List<ResolvedBinding>, public metadata: DirectiveMetadata)",
            "get callOnAllChangesDone(): boolean",
            "get callOnChange(): boolean",
            "get callOnDestroy(): boolean",
            "get changeDetection()",
            "get displayName(): string",
            "get eventEmitters(): List<string>",
            "get hostActions(): Map<string, string>",
            "static _readAttributes(deps)",
            "static createFromBinding(binding: Binding, ann: Directive): DirectiveBinding",
            "static createFromType(type: Type, annotation: Directive): DirectiveBinding",
          ]),
          c('class PreBuiltObjects', [
            "constructor(public viewManager: avmModule.AppViewManager, public view: viewModule.AppView, public protoView: viewModule.AppProtoView)",
          ]),
          c('class EventEmitterAccessor', [
            "constructor(public eventName: string, public getter: Function)",
            "subscribe(view: viewModule.AppView, boundElementIndex: number, directive: Object): Object",
          ]),
          c('class HostActionAccessor', [
            "constructor(public methodName: string, public getter: Function)",
            "subscribe(view: viewModule.AppView, boundElementIndex: number, directive: Object): Object",
          ]),
          c('class ProtoElementInjector', [
            "attributes: Map<string, string>;",
            "constructor(public parent: ProtoElementInjector, public index: int, bwv: BindingWithVisibility[], public distanceToParent: number, public _firstBindingIsComponent: boolean, public directiveVariableBindings: Map<string, number>)",
            "directParent(): ProtoElementInjector",
            "eventEmitterAccessors: List<List<EventEmitterAccessor>>;",
            "get hasBindings(): boolean",
            "getBindingAtIndex(index: number): any",
            "hostActionAccessors: List<List<HostActionAccessor>>;",
            "instantiate(parent: ElementInjector): ElementInjector",
            "private static _createBindingWithVisibility(firstBindingIsComponent, dirBinding, dirBindings, binding)",
            "private static _createDirectiveBindingWithVisibility(dirBindings: List<ResolvedBinding>, bd: BindingWithVisibility[], firstBindingIsComponent: boolean)",
            "private static _createHostInjectorBindingWithVisibility(dirBindings: List<ResolvedBinding>, bd: BindingWithVisibility[], firstBindingIsComponent: boolean)",
            "private static _createViewInjectorBindingWithVisibility(bindings: List<ResolvedBinding>, bd: BindingWithVisibility[])",
            "protoInjector: ProtoInjector;",
            "static create(parent: ProtoElementInjector, index: number, bindings: List<ResolvedBinding>, firstBindingIsComponent: boolean, distanceToParent: number, directiveVariableBindings: Map<string, number>): ProtoElementInjector",
            "view: viewModule.AppView;",
          ]),
          c('class ElementInjector extends TreeNode<ElementInjector> implements DependencyProvider', [
            "_buildQueriesForDeps(deps: List<DirectiveDependency>): void",
            "_hasQuery(query: QueryRef): boolean",
            "addDirectivesMatchingQuery(query: Query, list: any[]): void",
            "constructor(public _proto: ProtoElementInjector, parent: ElementInjector)",
            "dehydrate(): void",
            "directParent(): ElementInjector",
            "get(token): any",
            "getBoundElementIndex(): number",
            "getComponent(): any",
            "getDependency(injector: Injector, binding: ResolvedBinding, dep: Dependency): any",
            "getDirectiveAtIndex(index: number): any",
            "getDirectiveVariableBindings(): Map<string, number>",
            "getElementRef(): ElementRef",
            "getEventEmitterAccessors(): List<List<EventEmitterAccessor>>",
            "getHost(): ElementInjector",
            "getHostActionAccessors(): List<List<HostActionAccessor>>",
            "getPipes(): Pipes",
            "getVariableBinding(name: string): any",
            "getViewContainerRef(): ViewContainerRef",
            "hasDirective(type: Type): boolean",
            "hasInstances(): boolean",
            "hasVariableBinding(name: string): boolean",
            "hydrate(imperativelyCreatedInjector: Injector, host: ElementInjector, preBuiltObjects: PreBuiltObjects): void",
            "hydrated: boolean;",
            "isComponentKey(key: Key): boolean",
            "link(parent: ElementInjector): void",
            "linkAfter(parent: ElementInjector, prevSibling: ElementInjector): void",
            "onAllChangesDone(): void",
            "private _addDirectivesToQueries(): void",
            "private _addDirectivesToQuery(queryRef: QueryRef): void",
            "private _addParentQueries(): void",
            "private _addQueryToTree(queryRef: QueryRef): void",
            "private _addQueryToTreeSelfAndRecurse(queryRef: QueryRef): void",
            "private _addVarBindingsToQueries(): void",
            "private _addVarBindingsToQuery(queryRef: QueryRef): void",
            "private _addViewQueries(host: ElementInjector): void",
            "private _addViewQuery(queryRef: QueryRef): void",
            "private _assignQueryRef(query: QueryRef): void",
            "private _buildAttribute(dep: DirectiveDependency): string",
            "private _buildQueries(): void",
            "private _closestBoundaryInjector(imperativelyCreatedInjector: Injector, host: ElementInjector): Injector",
            "private _createQueryRef(query: Query): void",
            "private _findQuery(query): QueryRef",
            "private _host: ElementInjector;",
            "private _hydrateInjector(imperativelyCreatedInjector: Injector, host: ElementInjector): void",
            "private _injector: Injector;",
            "private _preBuiltObjects = null;",
            "private _pruneQueryFromTree(query: QueryRef): void",
            "private _query1: QueryRef;",
            "private _query2: QueryRef;",
            "private _reattachInjector(injector: Injector, parentInjector: Injector, isBoundary: boolean)",
            "private _removeQueryRef(query: QueryRef): void",
            "private _strategy: _ElementInjectorStrategy;",
            "unlink(): void",
            d("private _query0: QueryRef;", "Queries are added during construction or linking with a new parent. They are removed only through unlinking."),
          ]),
          c('class QueryError extends BaseException', [
            "constructor()",
            "message: string;",
            "toString(): string",
          ]),
          c('class QueryRef', [
            "constructor(public query: Query, public list: QueryList<any>, public originator: ElementInjector) {}",
            "private _aggregateDirective(inj: ElementInjector, aggregator: List<any>): void",
            "private _aggregateVariableBindings(inj: ElementInjector, aggregator: List<any>): void",
            "update(): void",
            "visit(inj: ElementInjector, aggregator: any[]): void",
          ]),
        ]),
        c('element_ref.ts', [
          c('class ElementRef implements RenderElementRef', "Reference to the element. Represents an opaque reference to the underlying element. The element is a DOM ELement in a Browser, but may represent other types on other rendering platforms. In the browser the ElementRef` can be sent to the web-worker. Web Workers can not have references to the DOM Elements.", [
            "constructor(parentView: ViewRef, boundElementIndex: number, private _renderer: Renderer)",
            "get renderView(): RenderViewRef",
            "set renderView(viewRef: RenderViewRef)",
            d("boundElementIndex: number;", "Index of the element inside the ViewRef. This is used internally by the Angular framework to locate elements."),
            d("get nativeElement(): any", "Returns the native Element implementation. In the browser this represents the DOM Element. The `nativeElement` can be used as an escape hatch when direct DOM manipulation is needed. Use this with caution, as it creates tight coupling between your application and the Browser, which will not work in WebWorkers. NOTE: This method will return null in the webworker scenario!"),
            d("parentView: ViewRef;", "Reference to the ViewRef where the `ElementRef` is inside of."),
          ]),
        ]),
        c('interfaces.ts', [
          d("interface OnAllChangesDone { onAllChangesDone(): void; }", "Defines lifecycle method [onAllChangesDone ] called when the bindings of all its children have been changed."),
          d("interface OnChange { onChange(changes: StringMap<string, any>): void; }", "Defines lifecycle method [onChange] called after all of component's bound properties are updated."),
          d("interface OnCheck { onCheck(): void; }", "Defines lifecycle method [onCheck] called when a directive is being checked."),
          d("interface OnDestroy { onDestroy(): void; }", "Defines lifecycle method [onDestroy] called when a directive is being destroyed."),
          d("interface OnInit { onInit(): void; }", "Defines lifecycle method [onInit] called when a directive is being checked the first time."),
        ]),
        c('proto_view_factory.ts', [
          c('class ProtoViewFactory', "@Injectable()", [
            "constructor(public _changeDetection: ChangeDetection)",
            "createAppProtoViews(hostComponentBinding: DirectiveBinding, rootRenderProtoView: renderApi.ProtoViewDto, allDirectives: List<DirectiveBinding>): List<AppProtoView>",
          ]),
          d("function getChangeDetectorDefinitions( hostComponentMetadata: renderApi.DirectiveMetadata, rootRenderProtoView: renderApi.ProtoViewDto, allRenderDirectiveMetadata: List<renderApi.DirectiveMetadata>): List<ChangeDetectorDefinition>", "Returns the data needed to create ChangeDetectors for the given ProtoView and all nested ProtoViews."),
          "function createVariableLocations(elementBinders: List<renderApi.ElementBinder>): Map<string, number>",
          "function createDirectiveVariableBindings(renderElementBinder: renderApi.ElementBinder, directiveBindings: List<DirectiveBinding>): Map<string, number>",
        ]),
        c('query_list.ts', [
          c('class QueryList<T> extends BaseQueryList<T>', "An iterable live list of components in the Light DOM. Injectable Objects that contains a live list of child directives in the light DOM of a directive. The directives are kept in depth-first pre-order traversal of the DOM. The `QueryList` is iterable, therefore it can be used in both javascript code with `for..of` loop as well as in template with `ng-for=\" of \"` directive. NOTE: In the future this class will implement an `Observable` interface. For now it uses a plain list of observable callbacks.", [
            "onChange(callback)",
            "removeCallback(callback)",
          ]),
        ]),
        c('view.ts', [
          c('class AppViewContainer', [
            d("views: List<AppView> = [];", "The order in this list matches the DOM order."),
          ]),
          c('class AppView implements ChangeDispatcher, EventDispatcher {', [
            "changeDetector: ChangeDetector = null;",
            "componentChildViews: List<AppView> = null;",
            "constructor(public renderer: renderApi.Renderer, public proto: AppProtoView, protoLocals: Map<string, any>)",
            "elementInjectors: List<ElementInjector> = null;",
            "elementRefs: List<ElementRef>;",
            "getDetectorFor(directive: DirectiveIndex): any",
            "getDirectiveFor(directive: DirectiveIndex): any",
            "hydrated(): boolean",
            "init(changeDetector: ChangeDetector, elementInjectors: List<ElementInjector>, rootElementInjectors: List<ElementInjector>, preBuiltObjects: List<PreBuiltObjects>, componentChildViews: List<AppView>)",
            "invokeElementMethod(elementIndex: number, methodName: string, args: List<any>)",
            "notifyOnAllChangesDone(): void",
            "preBuiltObjects: List<PreBuiltObjects> = null;",
            "ref: ViewRef;",
            "render: renderApi.RenderViewRef = null;",
            "setLocal(contextName: string, value): void",
            "viewContainers: List<AppViewContainer>;",
            d("context: any = null;", "The context against which data-binding expressions in this view are evaluated against. This is always a component instance."),
            d("dispatchEvent(elementIndex: number, eventName: string, locals: Map<string, any>): boolean", "implementation of EventDispatcher#dispatchEvent returns false if preventDefault must be applied to the DOM event"),
            d("locals: Locals;", "Variables, local to this view, that can be used in binding expressions (in addition to the context). This is used for thing like `<video #player>` or `<li template=\"for# item of items \">`, where \"player\" and \"item\" are locals, respectively"),
            d("notifyOnBinding(b: BindingRecord, currentValue: any): void", "dispatch to element injector or text nodes based on context"),
            d("rootElementInjectors: List<ElementInjector>;", "This list matches the _nodes list. It is sparse, since only Elements have ElementInjector"),
            d("triggerEventHandlers(eventName: string, eventObj, binderIndex: int): void", "Triggers the event handlers for the element and the directives. This method is intended to be called from directive EventEmitters."),
          ]),
          c('class AppProtoView', [
            "bindElement(parent: ElementBinder, distanceToParent: int, protoElementInjector: ProtoElementInjector, componentDirective: DirectiveBinding = null): ElementBinder",
            "constructor(public render: renderApi.RenderProtoViewRef, public protoChangeDetector: ProtoChangeDetector, public variableBindings: Map<string, string>, public variableLocations: Map<string, number>)",
            "elementBinders: List<ElementBinder> = [];",
            "protoLocals: Map<string, any> = new Map();",
            d("bindEvent(eventBindings: List<renderApi.EventBinding>, boundElementIndex: number, directiveIndex: int = -1): void", "Adds an event binding for the last created ElementBinder via bindElement. If the directive index is a positive integer, the event is evaluated in the context of the given directive. If the directive index is -1, the event is evaluated in the context of the enclosing view."),
          ]),
        ]),
        c('view_container_ref.ts', [
          c('class ViewContainerRef', [
            "clear(): void",
            "constructor(public viewManager: avmModule.AppViewManager, public element: ElementRef)",
            "create(protoViewRef: ProtoViewRef = null, atIndex: number = -1, context: ElementRef = null, bindings: ResolvedBinding[] = null): ViewRef",
            "get length(): number",
            "get(index: number): ViewRef",
            "indexOf(viewRef: ViewRef): number",
            "insert(viewRef: ViewRef, atIndex: number = -1): ViewRef",
            "private _getViews(): List<viewModule.AppView>",
            "remove(atIndex: number = -1): void",
            d("detach(atIndex: number = -1): ViewRef", "The method can be used together with insert to implement a view move, i.e. moving the dom nodes while the directives in the view stay intact."),
          ]),
        ]),
        c('view_listener.ts', [
          c('class AppViewListener', "@Injectable(); Listener for view creation / destruction.", [
            "viewCreated(view: viewModule.AppView)",
            "viewDestroyed(view: viewModule.AppView)",
          ]),
        ]),
        c('view_manager.ts', [
          c('class AppViewManager', "@Injectable(); Entry point for creating, moving views in the view hierarchy and destroying views. This manager contains all recursion and delegates to helper methods in AppViewManagerUtils and the Renderer, so unit tests get simpler.", [
            "_createPooledView(protoView: viewModule.AppProtoView): viewModule.AppView",
            "_createViewRecurse(view: viewModule.AppView)",
            "_destroyComponentView(hostView, boundElementIndex, componentView)",
            "_destroyPooledView(view: viewModule.AppView)",
            "_destroyViewInContainer(parentView, boundElementIndex, atIndex: number)",
            "_viewDehydrateRecurse(view: viewModule.AppView, forceDestroyComponents)",
            "_viewHydrateRecurse(view: viewModule.AppView)",
            "attachViewInContainer(viewContainerLocation: ElementRef, atIndex: number, viewRef: ViewRef): ViewRef",
            "constructor(private _viewPool: AppViewPool, private _viewListener: AppViewListener, private _utils: AppViewManagerUtils, private _renderer: Renderer)",
            "createViewInContainer(viewContainerLocation: ElementRef, atIndex: number, protoViewRef: ProtoViewRef, context: ElementRef = null, bindings: ResolvedBinding[] = null): ViewRef",
            "destroyViewInContainer(viewContainerLocation: ElementRef, atIndex: number)",
            "detachViewInContainer(viewContainerLocation: ElementRef, atIndex: number): ViewRef",
            d("createRootHostView(hostProtoViewRef: ProtoViewRef, overrideSelector: string, injector: Injector): ViewRef", "Load component view into existing element. Use this if a host element is already in the DOM and it is necessary to upgrade the element into Angular component by attaching a view but reusing the existing element. - `hostProtoViewRef`: ProtoViewRef Proto view to use in creating a view for this component. - `overrideSelector`: (optional) selector to use in locating the existing element to load the view into. If not specified use the selector in the component definition of the hostProtoView`. - injector: Injector to use as parent injector for the view."),
            d("destroyRootHostView(hostViewRef: ViewRef)", "Remove the View created with AppViewManager#createRootHostView."),
            d("getComponent(hostLocation: ElementRef): any", "Returns the component instance for a given element. The component is the execution context as seen by an expression at that ElementRef location."),
            d("getComponentView(hostLocation: ElementRef): ViewRef", "Returns associated Component ViewRef from ElementRef. If an ElementRef is from an element which has a component, this method returns the component's ViewRef."),
            d("getHostElement(hostViewRef: ViewRef): ElementRef", "Return the first child element of the host element view."),
            d("getNamedElementInComponentView(hostLocation: ElementRef, variableName: string): ElementRef", "Returns an ElementRef for the element with the given variable name in the current view. - `hostLocation`: ElementRef of any element in the View which defines the scope of search. `variableName`: Name of the variable to locate. - Returns ElementRef of the found element or null. (Throws if not found.)"),
            d("getViewContainer(location: ElementRef): ViewContainerRef", "Returns a ViewContainerRef at the ElementRef location."),
          ]),
        ]),
        c('view_manager_utils.ts', [
          c('class AppViewManagerUtils', "@Injectable()", [
            "_getOrCreateViewContainer(parentView: viewModule.AppView, boundElementIndex: number)",
            "_getPipes(imperativelyCreatedInjector: Injector, hostElementInjector: eli.ElementInjector)",
            "_hydrateView(view: viewModule.AppView, imperativelyCreatedInjector: Injector, hostElementInjector: eli.ElementInjector, context: Object, parentLocals: Locals)",
            "_populateViewLocals(view: viewModule.AppView, elementInjector: eli.ElementInjector): void",
            "_setUpEventEmitters(view: viewModule.AppView, elementInjector: eli.ElementInjector, boundElementIndex: number)",
            "_setUpHostActions(view: viewModule.AppView, elementInjector: eli.ElementInjector, boundElementIndex: number)",
            "attachComponentView(hostView: viewModule.AppView, boundElementIndex: number, componentView: viewModule.AppView)",
            "constructor()",
            "createView(protoView: viewModule.AppProtoView, renderView: RenderViewRef, viewManager: avmModule.AppViewManager, renderer: Renderer): viewModule.AppView",
            "dehydrateView(view: viewModule.AppView)",
            "detachComponentView(hostView: viewModule.AppView, boundElementIndex: number)",
            "detachViewInContainer(parentView: viewModule.AppView, boundElementIndex: number, atIndex: number)",
            "getComponentInstance(parentView: viewModule.AppView, boundElementIndex: number): any",
            "hydrateComponentView(hostView: viewModule.AppView, boundElementIndex: number)",
            "hydrateRootHostView(hostView: viewModule.AppView, injector: Injector)",
            "hydrateViewInContainer(parentView: viewModule.AppView, boundElementIndex: number, contextView: viewModule.AppView, contextBoundElementIndex: number, atIndex: number, bindings: ResolvedBinding[])",
            d("attachViewInContainer(parentView: viewModule.AppView, boundElementIndex: number, contextView: viewModule.AppView, contextBoundElementIndex: number, atIndex: number, view: viewModule.AppView)", "Misnomer: this method is attaching next to the view container."),
          ]),
        ]),
        c('view_pool.ts', [
          "const APP_VIEW_POOL_CAPACITY = CONST_EXPR(new OpaqueToken('AppViewPool.viewPoolCapacity'));",
          c('class AppViewPool', "@Injectable()", [
            "_poolCapacityPerProtoView: number;",
            "_pooledViewsPerProtoView: Map<viewModule.AppProtoView, List<viewModule.AppView>> = new Map();",
            "constructor(@Inject(APP_VIEW_POOL_CAPACITY) poolCapacityPerProtoView)",
            "getView(protoView: viewModule.AppProtoView): viewModule.AppView",
            "returnView(view: viewModule.AppView): boolean",
          ]),
        ]),
        c('view_ref.ts', [
          d("function internalView(viewRef: ViewRef): viewModule.AppView", "This is a workaround for privacy in Dart as we don't have library parts"),
          d("function internalProtoView(protoViewRef: ProtoViewRef): viewModule.AppProtoView", "This is a workaround for privacy in Dart as we don't have library parts"),
          c('class ViewRef', "A reference to an Angular View. A View is a fundamental building block of Application UI. A View is the smallest set of elements which are created and destroyed together. A View can change properties on the elements within the view, but it can not change the structure of those elements. To change structure of the elements, the Views can contain zero or more ViewContainerRefs which allow the views to be nested.", [
            "constructor(public _view: viewModule.AppView)",
            d("get render(): RenderViewRef { return this._view.render; }", "Return RenderViewRef"),
            d("setLocal(contextName: string, value: any): void { this._view.setLocal(contextName, value); }", "Set local variable for a view."),
          ]),
          c('class ProtoViewRef', "A reference to an Angular ProtoView. A ProtoView is a reference to a template for easy creation of views. (See AppViewManager#createViewInContainer and AppViewManager#createRootHostView). A `ProtoView` is a foctary for creating `View`s.", [
            "constructor(public _protoView: viewModule.AppProtoView)",
          ]),
        ]),

        c('view_resolver.ts', [
          c('class ViewResolver', "@Injectable()", [
            "_cache: Map<Type, /*node*/ any> = new Map();",
            "_resolve(component: Type): View",
            "resolve(component: Type): View",
          ]),
        ]),
      ]),
      c('life_cycle', [
        c('life_cycle.ts', [
          c('class LifeCycle', "@Injectable(); Provides access to explicitly trigger change detection in an application. By default, `Zone` triggers change detection in Angular on each virtual machine (VM) turn. When testing, or in some limited application use cases, a developer can also trigger change detection with the lifecycle.tick()` method. Each Angular application has a single `LifeCycle` instance. This is a contrived example, since the bootstrap automatically runs inside of the `Zone`, which invokes lifecycle.tick()` on your behalf.", [
            "_changeDetector: ChangeDetector;",
            "_enforceNoNewChanges: boolean;",
            "_errorHandler;",
            "_runningTick: boolean = false;",
            "constructor(exceptionHandler: ExceptionHandler, changeDetector: ChangeDetector = null, enforceNoNewChanges: boolean = false)",
            "registerWith(zone: NgZone, changeDetector: ChangeDetector = null)",
            d("tick()", "Invoke this method to explicitly process change detection and its side-effects. In development mode, `tick()` also performs a second change detection cycle to ensure that no further changes are detected. If additional changes are picked up during this second cycle, bindings in the app have side-effects that cannot be resolved in a single change detection pass. In this case, Angular throws an error, since an Angular application can only have one change detection pass during which all change detection must complete."),
          ]),
        ]),
      ]),

      c('testability', [
        c('get_testability.ts', [
          c('class GetTestability', [
            "static addToWindow(registry: TestabilityRegistry)",
          ]),
        ]),

        c('testability.ts', [
          c('class Testability', "@Injectable(); The Testability service provides testing hooks that can be accessed from the browser and by services such as Protractor. Each bootstrapped Angular application on the page will have an instance of Testability.", [
            "_callbacks: List<Function>;",
            "_pendingCount: number;",
            "_runCallbacks()",
            "constructor()",
            "findBindings(using, binding: string, exactMatch: boolean): List<any>",
            "getPendingCount(): number",
            "increaseCount(delta: number = 1)",
            "whenStable(callback: Function)",
          ]),

          c('class TestabilityRegistry', '@Injectable()', [
            "_applications: Map<any, Testability>;",
            "constructor()",
            "findTestabilityInTree(elem): Testability",
            "registerApplication(token, testability: Testability)",
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
    c('di', [
      c('annotations_impl', [
        c('class Inject', "@CONST(); A parameter annotation that specifies a dependency.", [
          "constructor(public token)",
          "toString(): string",
        ]),
        c('class Optional', "@CONST(); A parameter annotation that marks a dependency as optional. Injector provides `null` if the dependency is not found.", [
          "toString(): string",
        ]),
        c('class DependencyAnnotation', "@CONST(); `DependencyAnnotation` is used by the framework to extend DI. Only annotations implementing `DependencyAnnotation` are added to the list of dependency properties.", [
          "get token()",
        ]),
        d("@CONST()", "A marker annotation that marks a class as available to `Injector` for creation. Used by tooling for generating constructor stubs."),
        c('class Injectable', [
          "constructor(public visibility: Visibility = unbounded)",
        ]),
        c('class Visibility extends DependencyAnnotation', "@CONST(); Specifies how injector should resolve a dependency. See Self, Parent, Ancestor, Unbounded.", [
          "constructor(public depth: number, public crossComponentBoundaries: boolean, public _includeSelf: boolean)",
          "get includeSelf(): boolean",
          "toString(): string",
        ]),
        c('class Self extends Visibility', "@CONST(); Specifies that an injector should retrieve a dependency from itself.", [
          "constructor()",
          "toString(): string",
        ]),
        "const self = CONST_EXPR(new Self());",
        c('class Parent extends Visibility', "@CONST(); Specifies that an injector should retrieve a dependency from the direct parent.", [
          "constructor({self}: {self?: boolean} = {})",
          "toString(): string",
        ]),

        c('class Ancestor extends Visibility', "@CONST(); Specifies that an injector should retrieve a dependency from any ancestor from the same boundary.", [
          "constructor({self}: {self?: boolean} = {})",
          "toString(): string",
        ]),

        c('class Unbounded extends Visibility', "@CONST(); Specifies that an injector should retrieve a dependency from any ancestor, crossing boundaries.", [
          "constructor({self}: {self?: boolean} = {})",
          "toString(): string",
        ]),
        "const unbounded = CONST_EXPR(new Unbounded({self: true}));",
      ]),
      c('bindings.ts', [
        c('class Dependency', [
          "constructor(public key: Key, public optional: boolean, public visibility: Visibility, public properties: List<any>)",
          "static fromKey(key: Key)",
        ]),
        c('class Binding', "@CONST(); Describes how the Injector should instantiate a given token.", [
          "constructor(token, {toClass, toValue, toAlias, toFactory, deps}: {toClass?: Type,toValue?: any,toAlias?: any,toFactory?: Function,deps?: List<any>})",
          d("dependencies: List<any>;", "Used in conjunction with `toFactory` and specifies a set of dependencies (as `token`s) which should be injected into the factory function."),
          d("resolve(): ResolvedBinding", "Converts the Binding into ResolvedBinding. Injector internally only uses ResolvedBinding, Binding contains convenience binding syntax."),
          d("toAlias;", "Binds a key to the alias for an existing key. An alias means that Injector returns the same instance as if the alias token was used. This is in contrast to `toClass` where a separate instance of `toClass` is returned."),
          d("toClass: Type;", "Binds an interface to an implementation / subclass."),
          d("toFactory: Function;", "Binds a key to a function which computes the value."),
          d("token;", "Token used when retrieving this binding. Usually the `Type`."),
          d("toValue;", "Binds a key to a value."),
        ]),

        c('class ResolvedBinding', "An internal resolved representation of a Binding used by the Injector. A Binding is resolved when it has a factory function. Binding to a class, alias, or value, are just convenience methods, as Injector only operates on calling factory functions.", [
          "constructor(public key: Key, public factory: Function, public dependencies: List<Dependency>)",
        ]),

        d("function bind(token): BindingBuilder", "Provides an API for imperatively constructing Bindings. This is only relevant for JavaScript. See BindingBuilder."),

        c('class BindingBuilder', "Helper class for the bind function.", [
          "constructor(public token)",
          d("toAlias(aliasToken): Binding", "Binds a key to the alias for an existing key. An alias means that we will return the same instance as if the alias token was used. (This is in contrast to `toClass` where a separet instance of `toClass` will be returned.)"),
          d("toClass(type: Type): Binding", "Binds an interface to an implementation / subclass."),
          d("toFactory(factoryFunction: Function, dependencies?: List<any>): Binding", "Binds a key to a function which computes the value."),
          d("toValue(value): Binding", "Binds a key to a value."),
        ]),
      ]),

      c('decorators.ts', [
        "var Ancestor = makeParamDecorator(AncestorAnnotation);",
        "var Inject = makeParamDecorator(InjectAnnotation);",
        "var Injectable = makeDecorator(InjectableAnnotation);",
        "var Optional = makeParamDecorator(OptionalAnnotation);",
        "var Parent = makeParamDecorator(ParentAnnotation);",
        "var Self = makeParamDecorator(SelfAnnotation);",
        "var Unbounded = makeParamDecorator(UnboundedAnnotation);",
        "var Visibility = makeParamDecorator(VisibilityAnnotation);",
      ]),

      c('exceptions.ts', [
        c('class AbstractBindingError extends BaseException', "Base class for all errors arising from misconfigured bindings.", [
          "addKey(key): void",
          "constructor(key, constructResolvingMessage: Function)",
          "constructResolvingMessage: Function;",
          "keys: List<any>;",
          "message: string;",
          "name: string;",
          "toString(): string",
        ]),
        c('class NoBindingError extends AbstractBindingError', "Thrown when trying to retrieve a dependency by `Key` from Injector, but the Injector does not have a Binding for Key.", [
          "constructor(key)",
        ]),
        c('class AsyncBindingError extends AbstractBindingError', "Thrown when trying to retrieve an async Binding using the sync API.", [
          "constructor(key)",
        ]),
        c('class CyclicDependencyError extends AbstractBindingError', "Thrown when dependencies form a cycle.", [
          "constructor(key)",
        ]),
        c('class InstantiationError extends AbstractBindingError', "Thrown when a constructing type returns with an Error. The `InstantiationError` class contains the original error plus the dependency graph which caused this object to be instantiated.", [
          "cause;",
          "causeKey;",
          "constructor(cause, stack, key)",
          "stack;",
        ]),
        c('class InvalidBindingError extends BaseException', "Thrown when an object other then Binding (or `Type`) is passed to Injector creation.", [
          "constructor(binding)",
          "message: string;",
          "toString(): string",
        ]),
        c('class NoAnnotationError extends BaseException', "Thrown when the class has no annotation information. Lack of annotation information prevents the Injector from determining which dependencies need to be injected into the constructor.", [
          "constructor(typeOrFunc, params: List<List<any>>)",
          "message: string;",
          "name: string;",
          "toString(): string",
        ]),
        c('class OutOfBoundsError extends BaseException', "Thrown when getting an object by index.", [
          "constructor(index)",
          "message: string;",
          "toString(): string",
        ]),
      ]),
    ]),
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
    c('render', [
      c('dom', []),
      c('api.ts', [
        c('class EventBinding', [
          "constructor(public fullName: string, public source: ASTWithSource)",
        ]),

        c('enum PropertyBindingType', [
          "PROPERTY,",
          "ATTRIBUTE,",
          "CLASS,",
          "STYLE",
        ]),

        c('class ElementPropertyBinding', [
          "constructor(public type: PropertyBindingType, public astWithSource: ASTWithSource, public property: string, public unit: string = null)",
        ]),

        c('class ElementBinder', [
          "index: number;",
          "parentIndex: number;",
          "distanceToParent: number;",
          "directives: List<DirectiveBinder>;",
          "nestedProtoView: ProtoViewDto;",
          "propertyBindings: List<ElementPropertyBinding>;",
          "variableBindings: Map<string, string>;",
          d("eventBindings: List<EventBinding>;", "This contains a preprocessed AST that replaced the values that should be extracted from the element with a local name"),
          "textBindings: List<ASTWithSource>;",
          "readAttributes: Map<string, string>;",
          "constructor({index, parentIndex, distanceToParent, directives, nestedProtoView, propertyBindings, variableBindings, eventBindings, textBindings, readAttributes}: { index?: number, parentIndex?: number, distanceToParent?: number, directives?: List<DirectiveBinder>, nestedProtoView?: ProtoViewDto, propertyBindings?: List<ElementPropertyBinding>, variableBindings?: Map<string, string>, eventBindings?: List<EventBinding>, textBindings?: List<ASTWithSource>, readAttributes?: Map<string, string>   } = {})",
        ]),

        c('class DirectiveBinder', [
          d("directiveIndex: number;", "Index into the array of directives in the View instance"),
          "propertyBindings: Map<string, ASTWithSource>;",
          d("eventBindings: List<EventBinding>;", "Note: this contains a preprocessed AST that replaced the values that should be extracted from the element with a local name"),
          "hostPropertyBindings: List<ElementPropertyBinding>;",
          "constructor({directiveIndex, propertyBindings, eventBindings, hostPropertyBindings}: { directiveIndex?: number, propertyBindings?: Map<string, ASTWithSource>, eventBindings?: List<EventBinding>, hostPropertyBindings?: List<ElementPropertyBinding>})",
        ]),

        c('enum ViewType', [
          d("HOST", "A view that contains the host element with bound component directive. Contains a COMPONENT view"),
          d("COMPONENT,", "The view of the component. Can contain 0 to n EMBEDDED views"),
          d("EMBEDDED", "A view that is embedded into another View via a <template> element inside of a COMPONENT view"),
        ]),

        c('class ProtoViewDto', [
          "constructor({render, elementBinders, variableBindings, type}: { render?: RenderProtoViewRef, elementBinders?: List<ElementBinder>, variableBindings?: Map<string, string>, type?: ViewType })",
          "elementBinders: List<ElementBinder>;",
          "render: RenderProtoViewRef;",
          "type: ViewType;",
          "variableBindings: Map<string, string>;",
        ]),

        c('class DirectiveMetadata', [
          "static get DIRECTIVE_TYPE() { return 0; }",
          "static get COMPONENT_TYPE() { return 1; }",
          "id: any;",
          "selector: string;",
          "compileChildren: boolean;",
          "events: List<string>;",
          "properties: List<string>;",
          "readAttributes: List<string>;",
          "type: number;",
          "callOnDestroy: boolean;",
          "callOnChange: boolean;",
          "callOnCheck: boolean;",
          "callOnInit: boolean;",
          "callOnAllChangesDone: boolean;",
          "changeDetection: string;",
          "exportAs: string;",
          "hostListeners: Map<string, string>;",
          "hostProperties: Map<string, string>;",
          "hostAttributes: Map<string, string>;",
          "hostActions: Map<string, string>;",
          d("private static _hostRegExp = /^(?:(?:\[([^\]]+)\])|(?:\(([^\)]+)\))|(?:@(.+)))$/g;", "group 1: 'property' from '[property]' group 2: 'event' from '(event)' group 3: 'action' from '@action'"),
          "constructor({id, selector, compileChildren, events, hostListeners, hostProperties, hostAttributes, hostActions, properties, readAttributes, type, callOnDestroy, callOnChange, callOnCheck, callOnInit, callOnAllChangesDone, changeDetection, exportAs}: { id?: string, selector?: string, compileChildren?: boolean, events?: List<string>, hostListeners?: Map<string, string>, hostProperties?: Map<string, string>, hostAttributes?: Map<string, string>, hostActions?: Map<string, string>, properties?: List<string>, readAttributes?: List<string>, type?: number, callOnDestroy?: boolean, callOnChange?: boolean, callOnCheck?: boolean, callOnInit?: boolean, callOnAllChangesDone?: boolean, changeDetection?: string, exportAs?: string })",
          "static create({id, selector, compileChildren, events, host, properties, readAttributes, type, callOnDestroy, callOnChange, callOnCheck, callOnInit, callOnAllChangesDone, changeDetection, exportAs}: {id?: string, selector?: string, compileChildren?: boolean, events?: List<string>, host?: Map<string, string>, properties?: List<string>, readAttributes?: List<string>, type?: number, callOnDestroy?: boolean, callOnChange?: boolean, callOnCheck?: boolean, callOnInit?: boolean, callOnAllChangesDone?: boolean, changeDetection?: string, exportAs?: string }): DirectiveMetadata",
        ]),

        d("class RenderProtoViewRef", "An opaque reference to a DomProtoView"),
        d("class RenderViewRef", "An opaque reference to a DomView"),

        c('class ViewDefinition', [
          "componentId: string;",
          "templateAbsUrl: string;",
          "template: string;",
          "directives: List<DirectiveMetadata>;",
          "styleAbsUrls: List<string>;",
          "styles: List<string>;",
          "constructor({componentId, templateAbsUrl, template, styleAbsUrls, styles, directives}: { componentId?: string, templateAbsUrl?: string, template?: string, styleAbsUrls?: List<string>, styles?: List<string>, directives?: List<DirectiveMetadata> })",
        ]),

        c('class RenderCompiler', [
          d("compileHost(directiveMetadata: DirectiveMetadata): Promise<ProtoViewDto>", "Creats a ProtoViewDto that contains a single nested component with the given componentId."),
          d("compile(view: ViewDefinition): Promise<ProtoViewDto>", "Compiles a single DomProtoView. Non recursive so that we don't need to serialize all possible components over the wire, but only the needed ones based on previous calls."),
        ]),
        c('interface RenderElementRef', "Abstract reference to the element which can be marshaled across web-worker boundry.. This interface is used by the Renderer api.", [
          d("renderView: RenderViewRef;", "Reference to the RenderViewRef where the `RenderElementRef` is inside of."),
          d("boundElementIndex: number;", "Index of the element inside the ViewRef.. This is used internally by the Angular framework to locate elements."),
        ]),

        c('class Renderer', [
          d("createRootHostView(hostProtoViewRef: RenderProtoViewRef, hostElementSelector: string): RenderViewRef", "Creates a root host view that includes the given element."),
          d("createView(protoViewRef: RenderProtoViewRef): RenderViewRef", "Creates a regular view out of the given ProtoView"),
          d("destroyView(viewRef: RenderViewRef) {}", "Destroys the given view after it has been dehydrated and detached"),
          d("attachComponentView(location: RenderElementRef, componentViewRef: RenderViewRef)", "Attaches a componentView into the given hostView at the given element"),
          d("detachComponentView(location: RenderElementRef, componentViewRef: RenderViewRef)", "Detaches a componentView into the given hostView at the given element"),
          d("attachViewInContainer(location: RenderElementRef, atIndex: number, viewRef: RenderViewRef)", "Attaches a view into a ViewContainer (in the given parentView at the given element) at the given index."),
          d("detachViewInContainer(location: RenderElementRef, atIndex: number, viewRef: RenderViewRef)", "Detaches a view into a ViewContainer (in the given parentView at the given element) at the given index."),
          d("hydrateView(viewRef: RenderViewRef)", "Hydrates a view after it has been attached. Hydration/dehydration is used for reusing views inside of the view pool."),
          d("dehydrateView(viewRef: RenderViewRef) ", "Dehydrates a view after it has been attached. Hydration/dehydration is used for reusing views inside of the view pool."),
          d("getNativeElementSync(location: RenderElementRef): any", "Returns the native element at the given location. Attention: In a WebWorker scenario, this should always return null!"),
          d("setElementProperty(location: RenderElementRef, propertyName: string, propertyValue: any) ", "Sets a property on an element."),
          d("setElementAttribute(location: RenderElementRef, attributeName: string, attributeValue: string) ", "Sets an attribute on an element."),
          d("setElementClass(location: RenderElementRef, className: string, isAdd: boolean) ", "Sets a class on an element."),
          d("setElementStyle(location: RenderElementRef, styleName: string, styleValue: string) ", "Sets a style on an element."),
          d("invokeElementMethod(location: RenderElementRef, methodName: string, args: List<any>) ", "Calls a method on an element."),
          d("setText(viewRef: RenderViewRef, textNodeIndex: number, text: string) ", "Sets the value of a text node."),
          d("setEventDispatcher(viewRef: RenderViewRef, dispatcher: EventDispatcher) º", "Sets the dispatcher for all events of the given view"),
        ]),

        c('interface EventDispatcher ', "A dispatcher for all events happening in a view.", [
          d("dispatchEvent(elementIndex: number, eventName: string, locals: Map<string, any>);", "Called when an event was triggered for a on- attribute on an element."),
        ]),
      ]),
      c('xhr.ts', [
        c('class XHR', [
          "get(url: string): Promise<string>",
        ]),
      ]),
      c('xhr_impl.ts', [
        c('class XHRImpl extends XHR', "@Injectable()", [
          "get(url: string): Promise<string>",
        ]),
      ]),
      c('xhr_mock.ts', [
        c('class MockXHR extends XHR {', [
          "private _expectations: List<_Expectation>;",
          "private _definitions: Map<string, string>;",
          "private _requests: List<_PendingRequest>;",
          "constructor()",
          "get(url: string): Promise<string>",
          "expect(url: string, response: string)",
          "when(url: string, response: string)",
          "flush()",
          "verifyNoOustandingExpectations()",
          "private _processRequest(request: _PendingRequest)",
        ]),
      ]),
    ]),
    c('router', []),
    c('services', [
      c('app_root_url.ts', [
        c('class AppRootUrl', "@Injectable(); Specifies app root url for the application. Used by the Compiler when resolving HTML and CSS template URLs.. This interface can be overridden by the application developer to create custom behavior.", [
          "private _value: string;",
          d("get value()", "Returns the base URL of the currently running application."),
        ]),
      ]),
      c('ruler.ts', [
        c('class Rectangle', [
          "left;",
          "right;",
          "top;",
          "bottom;",
          "height;",
          "width;",
          "constructor(left, top, width, height)",
        ]),
        c('class Ruler', [
          "domAdapter: DomAdapter;",
          "constructor(domAdapter: DomAdapter)",
          "measure(el: ElementRef): Promise<Rectangle>",
        ]),
      ]),
      c('title.ts', [
        c('class Title', [
          "getTitle(): string",
          "setTitle(newTitle: string)",
        ]),
      ]),
      c('url_resolver.ts', [
        c('class UrlResolver', "@Injectable(); Used by the Compiler when resolving HTML and CSS template URLs.. This interface can be overridden by the application developer to create custom behavior.", [
          d("resolve(baseUrl: string, url: string): string", "Resolves the `url` given the `baseUrl`: - when the `url` is null, the `baseUrl` is returned, - if `url` is relative ('path/to/here', './path/to/here'), the resolved url is a combination of baseUrl` and `url`, - if `url` is absolute (it has a scheme: 'http://', 'https://' or start with '/'), the `url` is returned as is (ignoring the `baseUrl`)"),
        ]),
      ]),
    ]),
    c('test_lib', []),
    c('transform', []),
    c('util', []),
  ])]
}, {
  allCollapsed: true
});
