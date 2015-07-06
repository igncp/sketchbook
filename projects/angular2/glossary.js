var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' glossary',
    body: [
        d("CompilerCache", "'Cache that stores the AppProtoView of the template of a component. Used to prevent duplicate work and resolve cyclic dependencies.'"),
        d("CompileStep", "'One part of the compile process. Is guaranteed to be called in depth first order.'"),
        d("CssSelector", "'A css selector contains an element name, css classes and attribute/value pairs with the purpose of selecting subsets out of them.'"),
        d("DebugElement", "'An DebugElement contains information from the Angular compiler about an element and provides access to the corresponding ElementInjector and underlying dom Element, as well as a way to query for children.'"),
        d("DomCompiler", "'The compiler loads and translates the html templates of components into nested ProtoViews. To decompose its functionality it uses the CompilePipeline and the CompileSteps.'"),
        d("DynamicComponentLoader", "'Service for dynamically loading a Component into an arbitrary position in the internal Angular application tree.'"),
        d("GenericBrowserDomAdapter", "'Provides DOM operations in any browser environment.' This class methods are: getDistributedNodes, resolveAndSetHref, cssToRules, supportsDOMEvents, supportsNativeShadowDOM. The class BrowserDomAdapter, which extends it, has a lot more methods."),
        d("Injectable decorator", "'A marker annotation that marks a class as available to `Injector` for creation. Used by tooling for generating constructor stubs.'"),
        d("LifeCycle", "'provides access to explicitly trigger change detection in an application. By default, `Zone` triggers change detection in Angular on each virtual machine (VM) turn. When testing, or in some limited application use cases, a developer can also trigger change detection with the `lifecycle.tick()` method. Each Angular application has a single `LifeCycle` instance.'"),
        d("NgNonBindable", "'The `NgNonBindable` directive tells Angular not to compile or bind the contents of the current DOM element. This is useful if the element contains what appears to be Angular directives and bindings but which should be ignored by Angular. This could be the case if you have a site that displays snippets of code.'"),
        d("NgSwitch", "'The `NgSwitch` directive is used to conditionally swap DOM structure on your template based on a scope expression. Elements within `NgSwitch` but without `NgSwitchWhen` or `NgSwitchDefault` directives will be preserved at the location as specified in the template. `NgSwitch` simply chooses nested elements and makes them visible based on which element matches the value obtained from the evaluated expression. In other words, you define a container element (where you place the directive), place an expression on the **`[ng-switch]=\"...\"` attribute**), define any inner elements inside of the directive and place a `[ng-switch-when]` attribute per element. The when attribute is used to inform NgSwitch which element to display when the expression is evaluated. If a matching expression is not found via a when attribute then an element with the default attribute is displayed.'"),
        d("ObservablePipe", "'Implements async bindings to Observable. The async pipe will convert an observable to the latest value it emitted. It will also request a change detection check when a new value is emitted.'"),
        d("Pipeline", "'Responsible for performing each step of navigation. 'Steps' are conceptually similar to middleware'"),
        d("PromisePipe", "'Implements async bindings to Promise. The async pipe will convert a promise to the value with which it is resolved. It will also request a change detection check when the promise is resolved.'"),
        d("Reflectors", "They seem to be related to the concept of decorators"),
        d("Router", "'The router is responsible for mapping URLs to components. You can see the state of the router by inspecting the read-only field `router.navigating`. This may be useful for showing a spinner, for instance. Routers and component instances have a 1:1 correspondence. The router holds reference to a number of 'outlets'. An outlet is a placeholder that the router dynamically fills in depending on the current URL. When the router navigates from a URL, it must first recognizes it and serialize it into an `Instruction`. The router uses the `RouteRegistry` to get an `Instruction`.'"),
        d("RouteRegistry", "'The RouteRegistry holds route configurations for each component in an Angular app. It is responsible for creating Instructions from URLs, and generating URLs based on route and parameters.'"),
        d("RouterOutlet", "'A router outlet is a placeholder that Angular dynamically fills based on the application's route.'"),
        d("SelectorMatcher", "'Reads a list of CssSelectors and allows to calculate which ones are contained in a given CssSelector.'"),
        d("ShadowCss", "'A port of shadowCSS from webcomponents.js to TypeScript. Please make sure to keep to edits in sync with the source file. This is a limited shim for ShadowDOM css styling. The intention here is to support only the styling features which can be relatively simply implemented. The goal is to allow users to avoid the most obvious pitfalls and do so without compromising performance significantly. For ShadowDOM styling that's not covered here, a set of best practices can be provided that should allow users to accomplish more complex styling.'"),
        d("StyleInliner", "'Inline @import rules in the given CSS.'"),
        d("ViewLoader", "'Strategy to load component views.'"),
        d("ViewSplitter", "'Splits views at `<template>` elements or elements with `template` attribute. In both cases the root of the nested view is disconnected from its parent element. This is needed for browsers that don't support the `<template>` element as we want to do locate elements with bindings using `getElementsByClassName` later on, which should not descend into the nested view.'"),
        d('SFX (Self-Executing Bundles)', "'To make a bundle that is independent of the SystemJS loader entirely, we can make SFX bundles. This bundle file can then be included with a <script> tag, and no other dependencies would need to be included in the page."),
        d('TestComponentBuilder', "'Builds a RootTestComponent for use in component level tests.'"),
    ]
});
