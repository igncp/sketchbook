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
  name: s('project') + ' classes and interfaces overview',
  body: [
    c('AbstractChangeDetector implements ChangeDetector', "/src/change_detection/abstract_change_detector.ts", [
      "_detectChanges(throwOnChange: boolean): void",
      "_detectChangesInLightDomChildren(throwOnChange: boolean): void",
      "_detectChangesInShadowDomChildren(throwOnChange: boolean): void",
      "addChild(cd: ChangeDetector): void",
      "addShadowDomChild(cd: ChangeDetector): void",
      "callOnAllChangesDone(): void",
      "checkNoChanges(): void",
      "constructor(public id: string)",
      "dehydrate(): void",
      "detectChanges(): void",
      "detectChangesInRecords(throwOnChange: boolean): void",
      "hydrate(context: any, locals: Locals, directives: any): void",
      "lightDomChildren: List<any> = [];",
      "markAsCheckOnce(): void",
      "markPathToRootAsCheckOnce(): void",
      "mode: string = null;",
      "parent: ChangeDetector;",
      "ref: ChangeDetectorRef;",
      "remove(): void",
      "removeChild(cd: ChangeDetector): void",
      "removeShadowDomChild(cd: ChangeDetector): void",
      "shadowDomChildren: List<any> = [];",
    ]),
    c('ApplicationRef', '/src/core/application.ts', [
      "_hostComponent: ComponentRef",
      "_hostComponentType: Type",
      "_injector: Injector",
      "constructor(hostComponent: ComponentRef, hostComponentType: Type, injector: Injector)",
      "dispose()",
      "get hostComponent()",
      "get hostComponentType()",
      "get injector()",
    ]),
    c("AppProtoView", "/src/core/compiler/view.ts", [
      "bindElement(parent: ElementBinder, distanceToParent: int, protoElementInjector: ProtoElementInjector, componentDirective: DirectiveBinding = null): ElementBinder",
      d("bindEvent(eventBindings: List<renderApi.EventBinding>, boundElementIndex: number, directiveIndex: int = -1): void", "Adds an event binding for the last created ElementBinder via bindElement. If the directive index is a positive integer, the event is evaluated in the context of the given directive. If the directive index is -1, the event is evaluated in the context of the enclosing view."),
      "constructor(public render: renderApi.RenderProtoViewRef, public protoChangeDetector: ProtoChangeDetector, public variableBindings: Map<string, string>, public variableLocations: Map<string, number>)",
      "elementBinders: List<ElementBinder> = [];",
      "protoLocals: Map<string, any> = new Map();",
    ]),
    c('AppView implements ChangeDispatcher, EventDispatcher', "/src/core/compiler/view.ts", [
      "changeDetector: ChangeDetector = null;",
      "componentChildViews: List<AppView> = null;",
      "constructor(public renderer: renderApi.Renderer, public proto: AppProtoView, protoLocals: Map<string, any>)",
      "context: any = null;",
      "dispatchEvent(elementIndex: number, eventName: string, locals: Map<string, any>): boolean",
      "elementInjectors: List<ElementInjector> = null;",
      "elementRefs: List<ElementRef>;",
      "getDetectorFor(directive: DirectiveIndex)",
      "getDirectiveFor(directive: DirectiveIndex)",
      "hydrated(): boolean",
      "init(changeDetector: ChangeDetector, elementInjectors: List<ElementInjector>, rootElementInjectors: List<ElementInjector>, preBuiltObjects: List<PreBuiltObjects>, componentChildViews: List<AppView>)",
      "invokeElementMethod(elementIndex: number, methodName: string, args: List<any>)",
      "locals: Locals;",
      "notifyOnAllChangesDone(): void",
      "notifyOnBinding(b: BindingRecord, currentValue: any): void",
      "preBuiltObjects: List<PreBuiltObjects> = null;",
      "ref: ViewRef;",
      "render: renderApi.RenderViewRef = null;",
      "rootElementInjectors: List<ElementInjector>;",
      "setLocal(contextName: string, value): void",
      "triggerEventHandlers(eventName: string, eventObj, binderIndex: int): void",
      "viewContainers: List<AppViewContainer>;",
    ]),
    c('AppViewContainer', "/src/core/compiler/view.ts", [
      "views: List<AppView> = [];",
    ]),
    c('AppViewPool', "@Injectable(); /src/core/compiler/view_pool.ts", [
      "_poolCapacityPerProtoView: number;",
      "_pooledViewsPerProtoView: Map<viewModule.AppProtoView, List<viewModule.AppView>> = new Map();",
      "constructor(@Inject(APP_VIEW_POOL_CAPACITY) poolCapacityPerProtoView)",
      "getView(protoView: viewModule.AppProtoView): viewModule.AppView",
      "returnView(view: viewModule.AppView): boolean",
    ]),
    c('ChangeDetection', "@CONST(); /src/change_detection/interfaces.ts", [
      "createProtoChangeDetector(definition: ChangeDetectorDefinition): ProtoChangeDetector",
    ]),
    cs('ChangeDetectorRef', "/src/change_detection/change_detector_ref.ts", [
      "constructor(private _cd: ChangeDetector)",
      "requestCheck(): void",
      "detach(): void",
      "reattach(): void",
    ]),
    c('ComponentRef', '/src/core/compiler/dynamic_component_loader.ts', [
      "constructor(public location: ElementRef, public instance: any, public dispose: Function)",
      "get hostView(): ViewRef",
    ]),
    c('ElementBinder', "/src/core/compiler/element_binder.ts", [
      "constructor(public index: int, public parent: ElementBinder, public distanceToParent: int, public protoElementInjector: eiModule.ProtoElementInjector, public componentDirective: DirectiveBinding)",
      "hasEmbeddedProtoView()",
      "hasStaticComponent()",
      "hostListeners: StringMap<string, Map<number, AST>> = null;",
      "nestedProtoView: viewModule.AppProtoView = null;",
    ]),
    c('ElementRef implements RenderElementRef', "/src/core/compiler/element_ref.ts", [
      "constructor(public parentView: ViewRef, public boundElementIndex: number, private _renderer: Renderer)",
      "get renderView(): RenderViewRef",
      "set renderView(viewRef: RenderViewRef)",
      "get nativeElement(): any",
    ]),
    c('EventManager', "/src/render/dom/events/event_manager.ts", [
      "_findPluginFor(eventName: string): EventManagerPlugin",
      "_removeBubbleSymbol(eventName: string): string",
      "addEventListener(element, eventName: string, handler: Function)",
      "addGlobalEventListener(target: string, eventName: string, handler: Function): Function",
      "constructor(public _plugins: List<EventManagerPlugin>, public _zone: NgZone)",
      "getZone(): NgZone",
    ]),
    c('EventManagerPlugin', "/src/render/dom/events/event_manager.ts", [
      "addEventListener(element, eventName: string, handler: Function, shouldSupportBubble: boolean)",
      "addGlobalEventListener(element, eventName: string, handler: Function, shouldSupportBubble: boolean): Function",
      "manager: EventManager;",
      "supports(eventName: string): boolean",
    ]),
    c('DomEventsPlugin extends EventManagerPlugin', "/src/render/dom/events/event_manager.ts", [
      "_getOutsideHandler(shouldSupportBubble: boolean, element, handler: Function, zone: NgZone)",
      "addEventListener(element, eventName: string, handler: Function, shouldSupportBubble: boolean)",
      "addGlobalEventListener(target: string, eventName: string, handler: Function, shouldSupportBubble: boolean): Function",
      "manager: EventManager;",
      "static bubbleCallback(element, handler, zone)",
      "static sameElementCallback(element, handler, zone)",
      "supports(eventName: string): boolean",
    ]),
    c('Inject', "@CONST(); /src/di/annotations_impl.ts; A parameter annotation that specifies a dependency." + tsc("class AComponent {\n  constructor(@Inject(MyService) aService:MyService) {}\n}"), [
      "constructor(public token)",
      "toString(): string",
    ]),
    c('Injector', "/src/di/injector.ts", [
      "static resolve(bindings: List<Type | Binding | List<any>>): List<ResolvedBinding>",
      "static resolveAndCreate(bindings: List<Type | Binding | List<any>>, {defaultBindings = false}: any = {}): Injector",
      "static fromResolvedBindings(bindings: List<ResolvedBinding>, {defaultBindings = false}: any = {}): Injector",
      "_strategy: InjectorStrategy;",
      "_parent: Injector;",
      "_host: Injector;",
      "_constructionCounter: number = 0;",
      "private _ei: any;",
      "constructor(public _proto: ProtoInjector)",
      "get(token): any",
      "getOptional(token): any",
      "getObjAtIndex(index: number): any",
      "get parent(): Injector",
      "get strategy()",
      "hydrate(parent: Injector, host: Injector, ei: any)",
      "dehydrate(): void",
      "resolveAndCreateChild(bindings: List<Type | Binding | List<any>>): Injector",
      "createChildFromResolved(bindings: List<ResolvedBinding>): Injector",
      "_new(binding: ResolvedBinding): any",
      "private _getByDependency(dep: any, requestor: Key): any",
      "private _getByKey(key: Key, depVisibility: any, optional: boolean, requestor: Key): any",
      "getAppInjector(): Injector",
    ]),
    c('interface ChangeDetector', "/src/change_detection/interfaces.ts", [
      "parent: ChangeDetector;",
      "mode: string;",
      "addChild(cd: ChangeDetector): void;",
      "addShadowDomChild(cd: ChangeDetector): void;",
      "removeChild(cd: ChangeDetector): void;",
      "removeShadowDomChild(cd: ChangeDetector): void;",
      "remove(): void;",
      "hydrate(context: any, locals: Locals, directives: any): void;",
      "dehydrate(): void;",
      "markPathToRootAsCheckOnce(): void;",
      "detectChanges(): void;",
      "checkNoChanges(): void;",
    ]),
    c('interface ChangeDispatcher', "/src/change_detection/interfaces.ts", [
      "notifyOnAllChangesDone(): void;",
      "notifyOnBinding(bindingRecord: BindingRecord, value: any): void;",
    ]),
    c('interface EventDispatcher', "/src/render/api.ts; A dispatcher for all events happening in a view.", [
      d("dispatchEvent(elementIndex: number, eventName: string, locals: Map<string, any>)", "Called when an event was triggered for a on-* attribute on an element"),
    ]),
    c('interface PlatformReflectionCapabilities', "/src/reflection/platform_reflection_capabilities.ts", [
      "annotations(type: Type): List<any>;",
      "factory(type: Type): Function;",
      "getter(name: string): GetterFn;",
      "interfaces(type: Type): List<any>;",
      "method(name: string): MethodFn;",
      "parameters(type: Type): List<List<any>>;",
      "setter(name: string): SetterFn;",
    ]),
    c('interface RenderElementRef', "/src/render/api.ts", [
      "renderView: RenderViewRef;",
      "boundElementIndex: number;",
    ]),
    c('Instruction', "/src/router/instruction.ts; An `Instruction` represents the component hierarchy of the application based on a given route", [
      "component: any;",
      "child: Instruction;",
      d('capturedUrl: string;', "the part of the URL captured by this instruction"),
      d('accumulatedUrl: string;', "the part of the URL captured by this instruction and all children"),
      "params: StringMap<string, string>;",
      "reuse: boolean;",
      "specificity: number;",
      "constructor({params, component, child, matchedUrl, parentSpecificity}: {params?: StringMap<string, any>,component?: any,child?: Instruction,matchedUrl?: string,parentSpecificity?: number} = {})",
      "hasChild(): boolean",
      d('reuseComponentsFrom(oldInstruction: Instruction): void', "Takes a currently active instruction and sets a reuse flag on each of this instruction's children"),
    ]),
    cs('LifeCycle', "@Injectable(); /src/core/life_cycle/life_cycle.ts; ", [
      "_errorHandler;",
      "_changeDetector: ChangeDetector;",
      "_enforceNoNewChanges: boolean;",
      "_runningTick: boolean = false;",
      "constructor(exceptionHandler: ExceptionHandler, changeDetector: ChangeDetector = null, enforceNoNewChanges: boolean = false)",
      "registerWith(zone: NgZone, changeDetector: ChangeDetector = null)",
      "tick()",
    ]),
    c('ListWrapper', "/src/facade/collection.ts", [
      "static createFixedSize(size): List<any>",
      "static createGrowableSize(size): List<any>",
      "static get(m, k)",
      "static set(m, k, v)",
      "static clone(array: List<any>)",
      "static map(array, fn)",
      "static forEach(array: List<any>, fn: Function)",
      "static first(array)",
      "static last(array)",
      "static find(list: List<any>, pred: Function)",
      "static indexOf(array: List<any>, value, startIndex = 0)",
      "static reduce<T, E>(list: List<T>, fn: (accumValue: E, currentValue: T, currentIndex: number, array: T[]) => E, init: E)",
      "static filter(array, pred: Function)",
      "static any(list: List<any>, pred: Function)",
      "static contains(list: List<any>, el)",
      "static reversed(array)",
      "static concat(a, b)",
      "static insert(list, index: int, value)",
      "static removeAt(list, index: int)",
      "static removeAll(list, items)",
      "static removeLast<T>(list: List<T>): T",
      "static remove(list, el)",
      "static clear(list)",
      "static join(list, s)",
      "static isEmpty(list)",
      "static fill(list: List<any>, value, start: int = 0, end: int = null)",
      "static equals(a: List<any>, b: List<any>): boolean",
      "static slice<T>(l: List<T>, from: int = 0, to: int = null): List<T>",
      "static splice<T>(l: List<T>, from: int, length: int): List<T>",
      "static sort<T>(l: List<T>, compareFn?: (a: T, b: T) => number)",
      "static toString<T>(l: List<T>): string",
    ]),
    c('Locals', "/src/change_detection/parser/locals.ts", [
      "constructor(public parent: Locals, public current: Map<any, any>)",
      "contains(name: string): boolean",
      "get(name: string)",
      "set(name: string, value): void",
      "clearValues(): void",
    ]),
    c('NgZone', "/src/core/zone/ng_zone.ts", [
      "_createInnerZone(zone, enableLongStackTrace)",
      "_disabled: boolean;",
      "_hasExecutedCodeInInnerZone: boolean;",
      "_innerZone;",
      "_inVmTurnDone: boolean = false;",
      "_mountZone;",
      "_nestedRun: number;",
      "_onError(zone, e): void",
      "_onErrorHandler: (error, stack) => void;",
      "_onTurnDone: () => void;",
      "_onTurnStart: () => void;",
      "_pendingMicrotasks: number;",
      "constructor({enableLongStackTrace})",
      "initCallbacks({onTurnStart, onTurnDone, onErrorHandler}: { onTurnStart?: onTurnDone?: onErrorHandler?:} = {})",
      "run(fn)",
      "runOutsideAngular(fn)",
    ]),
    c('OpaqueToken', "@CONST(); /src/di/opaque_token.ts", [
      "_desc: string;",
      "constructor(desc: string)",
      "toString(): string",
    ]),
    c('PromiseWrapper', "/src/facade/async.ts", [
      "static resolve(obj): Promise<any>",
      "static reject(obj, _): Promise<any>",
      "static catchError<T>(promise: Promise<T>, onError: (error: any) => T | Thenable<T>): Promise<T>",
      "static all(promises: List<any>): Promise<any>",
      "static then<T>(promise: Promise<T>, success: (value: any) => T | Thenable<T>, rejection?: (error: any, stack?: any) => T | Thenable<T>): Promise<T>",
      "static wrap<T>(computation: () => T): Promise<T>",
      "static completer()",
    ]),
    c('ProtoElementInjector', "/src/core/compiler/element_injector.ts", [
      "view: viewModule.AppView;",
      "attributes: Map<string, string>;",
      "eventEmitterAccessors: List<List<EventEmitterAccessor>>;",
      "hostActionAccessors: List<List<HostActionAccessor>>;",
      "protoInjector: ProtoInjector;",
      "static create(parent: ProtoElementInjector, index: number, bindings: List<ResolvedBinding>, firstBindingIsComponent: boolean, distanceToParent: number, directiveVariableBindings: Map<string, number>)",
      "private static _createDirectiveBindingData(dirBindings: List<ResolvedBinding>, bd: List<BindingData>, firstBindingIsComponent: boolean)",
      "private static _createHostInjectorBindingData(dirBindings: List<ResolvedBinding>, bd: List<BindingData>, firstBindingIsComponent: boolean)",
      "private static _createBindingData(firstBindingIsComponent, dirBinding, dirBindings, binding)",
      "private static _createViewInjectorBindingData(bindings: List<ResolvedBinding>, bd: List<BindingData>)",
      "constructor(public parent: ProtoElementInjector, public index: int, bd: List<BindingData>, public distanceToParent: number, public _firstBindingIsComponent: boolean, public directiveVariableBindings: Map<string, number>)",
      "instantiate(parent: ElementInjector): ElementInjector",
      "directParent(): ProtoElementInjector",
      "get hasBindings(): boolean",
      "getBindingAtIndex(index: number): any",
    ]),
    c('ProtoViewRef', "/src/core/compiler/view_ref.ts", [
      "constructor(public _protoView: viewModule.AppProtoView)",
    ]),
    c('ReflectionCapabilities implements PlatformReflectionCapabilities', "/src/reflection/reflection_capabilities.ts", [
      "_zipTypesAndAnnotaions(paramTypes, paramAnnotations): List<List<any>>",
      "annotations(typeOfFunc): List<any>",
      "constructor(reflect?: any)",
      "factory(t: Type): Function",
      "getter(name: string): GetterFn",
      "interfaces(type): List<any>",
      "method(name: string): MethodFn",
      "parameters(typeOfFunc): List<List<any>>",
      "private _reflect: any;",
      "setter(name: string): SetterFn",
    ]),
    c('Reflector', "/src/reflection/reflector.ts", [
      "_containsTypeInfo(typeOrFunc)",
      "_getters: Map<string, GetterFn>;",
      "_getTypeInfoField(typeOrFunc, key, defaultValue)",
      "_methods: Map<string, MethodFn>;",
      "_setters: Map<string, SetterFn>;",
      "_typeInfo: Map<Type, any>;",
      "annotations(typeOrFunc): List<any>",
      "constructor(reflectionCapabilities: PlatformReflectionCapabilities)",
      "factory(type: Type): Function",
      "getter(name: string): GetterFn",
      "interfaces(type): List<any>",
      "method(name: string): MethodFn",
      "parameters(typeOrFunc): List<any>",
      "reflectionCapabilities: PlatformReflectionCapabilities;",
      "registerGetters(getters: StringMap<string, GetterFn>): void",
      "registerMethods(methods: StringMap<string, MethodFn>): void",
      "registerSetters(setters: StringMap<string, SetterFn>): void",
      "registerType(type: Type, typeInfo: StringMap<string, any>): void",
      "setter(name: string): SetterFn",
    ]),
    c('RenderCompiler', "/src/render/api.ts", [
      "compile(view: ViewDefinition): Promise<ProtoViewDto>",
      "compileHost(directiveMetadata: DirectiveMetadata): Promise<ProtoViewDto>",
    ]),
    c('DomCompiler extends RenderCompiler', "/src/render/dom/compiler/compiler.ts; The compiler loads and translates the html templates of components into nested ProtoViews. To decompose its functionality it uses the CompilePipeline and the CompileSteps.", [
      "_compileTemplate(viewDef: ViewDefinition, tplElement, protoViewType: ViewType): Promise<ProtoViewDto>",
      "compile(view: ViewDefinition): Promise<ProtoViewDto>",
      "compileHost(directiveMetadata: DirectiveMetadata): Promise<ProtoViewDto>",
      "constructor(public _stepFactory: CompileStepFactory, public _viewLoader: ViewLoader)",
    ]),
    c('DefaultDomCompiler extends DomCompiler', "@Injectable(); /src/render/dom/compiler/compiler.ts", [
      "constructor(parser: Parser, shadowDomStrategy: ShadowDomStrategy, viewLoader: ViewLoader)",
    ]),
    c('Renderer', "/src/render/api.ts", [
      "attachComponentView(location: RenderElementRef, componentViewRef: RenderViewRef)",
      "attachViewInContainer(location: RenderElementRef, atIndex: number, viewRef: RenderViewRef)",
      "createRootHostView(hostProtoViewRef: RenderProtoViewRef, hostElementSelector: string): RenderViewRef",
      "createView(protoViewRef: RenderProtoViewRef): RenderViewRef",
      "dehydrateView(viewRef: RenderViewRef)",
      "destroyView(viewRef: RenderViewRef)",
      "detachComponentView(location: RenderElementRef, componentViewRef: RenderViewRef)",
      "detachViewInContainer(location: RenderElementRef, atIndex: number, viewRef: RenderViewRef)",
      "getNativeElementSync(location: RenderElementRef): any",
      "hydrateView(viewRef: RenderViewRef)",
      "invokeElementMethod(location: RenderElementRef, methodName: string, args: List<any>)",
      "setElementAttribute(location: RenderElementRef, attributeName: string, attributeValue: string)",
      "setElementClass(location: RenderElementRef, className: string, isAdd: boolean)",
      "setElementProperty(location: RenderElementRef, propertyName: string, propertyValue: any)",
      "setElementStyle(location: RenderElementRef, styleName: string, styleValue: string)",
      "setEventDispatcher(viewRef: RenderViewRef, dispatcher: EventDispatcher)",
      "setText(viewRef: RenderViewRef, textNodeIndex: number, text: string)",
    ]),
    c('DomRenderer extends Renderer', "@Injectable(); /src/render/dom/dom_renderer.ts", [
      "_createEventListener(view, element, elementIndex, eventName, eventLocals)",
      "_createGlobalEventListener(view, elementIndex, eventName, eventTarget, fullName): Function",
      "_createView(protoView: DomProtoView, inplaceElement): DomView",
      "_directParentLightDom(view: DomView, boundElementIndex: number)",
      "_document;",
      "_getOrCreateViewContainer(parentView: DomView, boundElementIndex)",
      "_moveViewNodesAfterSibling(sibling, view)",
      "_moveViewNodesIntoParent(parent, view)",
      "_removeViewNodes(view)",
      "attachComponentView(location: RenderElementRef, componentViewRef: RenderViewRef)",
      "attachViewInContainer(location: RenderElementRef, atIndex: number, viewRef: RenderViewRef)",
      "constructor(public _eventManager: EventManager, public _shadowDomStrategy: ShadowDomStrategy, @Inject(DOCUMENT_TOKEN) document)",
      "createRootHostView(hostProtoViewRef: RenderProtoViewRef, hostElementSelector: string): RenderViewRef",
      "createView(protoViewRef: RenderProtoViewRef): RenderViewRef ",
      "dehydrateView(viewRef: RenderViewRef)",
      "destroyView(view: RenderViewRef)",
      "detachComponentView(location: RenderElementRef, componentViewRef: RenderViewRef)",
      "detachViewInContainer(location: RenderElementRef, atIndex: number, viewRef: RenderViewRef)",
      "getNativeElementSync(location: RenderElementRef)",
      "getRootNodes(viewRef: RenderViewRef): List</*node*/ any>",
      "hydrateView(viewRef: RenderViewRef)",
      "invokeElementMethod(location: RenderElementRef, methodName: string, args: List<any>): void",
      "setComponentViewRootNodes(componentViewRef: RenderViewRef, rootNodes: List</*node*/ any>)",
      "setElementAttribute(location: RenderElementRef, attributeName: string, attributeValue: string): void",
      "setElementClass(location: RenderElementRef, className: string, isAdd: boolean): void",
      "setElementProperty(location: RenderElementRef, propertyName: string, propertyValue: any): void",
      "setElementStyle(location: RenderElementRef, styleName: string, styleValue: string): void",
      "setEventDispatcher(viewRef: RenderViewRef, dispatcher: any /*api.EventDispatcher*/): void",
      "setText(viewRef: RenderViewRef, textNodeIndex: number, text: string): void",
    ]),
    c('ResolvedBinding', "/src/di/binding.ts; An internal resolved representation of a Binding used by the Injector. A Binding is resolved when it has a factory function. Binding to a class, alias, or value, are just convenience methods, as {@link Injector} only operates on calling factory functions.", [
      "constructor(public key: Key, public factory: Function, public dependencies: List<Dependency>)"
    ]),
    c('DirectiveBinding extends ResolvedBinding ', "/src/core/compiler/element_injector.ts", [
      "constructor(key: Key, factory: Function, dependencies: List<Dependency>, public resolvedAppInjectables: List<ResolvedBinding>, public resolvedHostInjectables: List<ResolvedBinding>, public resolvedViewInjectables: List<ResolvedBinding>, public metadata: DirectiveMetadata)",
      "get callOnDestroy(): boolean",
      "get callOnChange(): boolean",
      "get callOnAllChangesDone(): boolean",
      "get displayName(): string",
      "get eventEmitters(): List<string>",
      "get hostActions(): Map<string, string>",
      "get changeDetection()",
      "static createFromBinding(binding: Binding, ann: Directive): DirectiveBinding",
      "static _readAttributes(deps)",
      "static createFromType(type: Type, annotation: Directive): DirectiveBinding",
    ]),
    c('TreeNode<T extends TreeNode<any>>', "/src/core/compiler/element_injector.ts", [
      "_parent: T;",
      "_head: T = null;",
      "_tail: T = null;",
      "_next: T = null;",
      "constructor(parent: T)",
      "addChild(child: T): void",
      "addChildAfter(child: T, prevSibling: T): void",
      "remove(): void",
      "_findPrev()",
      "get parent()",
      "get children(): T[]",
    ]),
    c('ElementInjector extends TreeNode<ElementInjector>', "/src/core/compiler/element_injector.ts", [
      "_buildQueriesForDeps(deps: List<DirectiveDependency>): void",
      "_hasQuery(query: QueryRef): boolean",
      "addDirectivesMatchingQuery(query: Query, list: any[]): void",
      "appInjector(requestor: Key): Injector",
      "constructor(public _proto: ProtoElementInjector, parent: ElementInjector)",
      "dehydrate(): void",
      "directParent(): ElementInjector",
      "get(token): any",
      "getBoundElementIndex(): number",
      "getComponent(): any",
      "getDependency(dep: any): any",
      "getDirectiveAtIndex(index: number)",
      "getDirectiveVariableBindings(): Map<string, number>",
      "getElementRef(): ElementRef",
      "getEventEmitterAccessors(): List<List<EventEmitterAccessor>>",
      "getHost(): ElementInjector",
      "getHostActionAccessors(): List<List<HostActionAccessor>>",
      "getLightDomAppInjector(): Injector",
      "getShadowDomAppInjector(): Injector",
      "getVariableBinding(name: string): any",
      "getViewContainerRef(): ViewContainerRef",
      "hasDirective(type: Type): boolean { return isPresent(this._injector.getOptional(type)); }",
      "hasInstances(): boolean",
      "hasVariableBinding(name: string): boolean",
      "hydrate(injector: Injector, host: ElementInjector, preBuiltObjects: PreBuiltObjects): void",
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
      "private _assignQueryRef(query: QueryRef): void",
      "private _buildAttribute(dep: DirectiveDependency): string",
      "private _buildQueries(): void",
      "private _checkShadowDomAppInjector(shadowDomAppInjector: Injector): void",
      "private _createQueryRef(query: Query): void",
      "private _createShadowDomAppInjector(componentDirective: DirectiveBinding, appInjector: Injector): Injector",
      "private _findQuery(query): QueryRef",
      "private _host: ElementInjector;",
      "private _injector: Injector;",
      "private _lightDomAppInjector: Injector = null;",
      "private _preBuiltObjects = null;",
      "private _pruneQueryFromTree(query: QueryRef): void",
      "private _query0: QueryRef;",
      "private _query1: QueryRef;",
      "private _query2: QueryRef;",
      "private _removeQueryRef(query: QueryRef): void",
      "private _shadowDomAppInjector: Injector = null;",
      "private _strategy: _ElementInjectorStrategy;",
      "unlink(): void",
    ]),
    c('ViewDefinition', "/src/render/api.ts", [
      "componentId: string;",
      "constructor({componentId, templateAbsUrl, template, styleAbsUrls, styles, directives}: { componentId?: string, templateAbsUrl?: string, template?: string, styleAbsUrls?: List<string>, styles?: List<string>, directives?: List<DirectiveMetadata>})",
      "directives: List<DirectiveMetadata>;",
      "styleAbsUrls: List<string>;",
      "styles: List<string>;",
      "template: string;",
      "templateAbsUrl: string;",
    ]),
    c('ViewRef', "/src/core/compiler/view_ref.ts", [
      "constructor(public _view: viewModule.AppView)",
      "get render(): RenderViewRef",
      "setLocal(contextName: string, value: any): void",
    ]),
    c('ViewType', "enum; /src/render/api.ts", [
      d("HOST", "A view that contains the host element with bound component directive. Contains a COMPONENT view."),
      d("COMPONENT", "The view of the component. Can contain 0 to n EMBEDDED views."),
      d("EMBEDDED", "A view that is embedded into another View via a <template> element inside of a COMPONENT view"),
    ]),
  ]
});
