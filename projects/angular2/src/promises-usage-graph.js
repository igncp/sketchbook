var n = diagrams.graph.generateNode,
    s = diagrams.shared.get;

// max existing: 19

diagrams.graph([
    n("Promise and PromiseWrapper(@/src/facade/async.ts)", '0'),
    
    n("/src/change_detection/pipes/promise_pipe.ts", '1 0', "PromisePipe"),
    
    n("/src/core/", '20 0', "dir", 's-s'),
    n("/src/core/application.ts", '2 20', "bootstrap, _injectorBindings"),
    
    n("/src/core/compiler/", '21 20', "dir", 's-s'),
    n("/src/core/compiler/compiler.ts", '3 21', 'Compiler'),
    n("/src/core/compiler/dynamic_component_loader.ts", '4 21', 'DynamicComponentLoader'),
    
    n("/src/forms/directives/ng_form.ts", '5 0', 'NgForm'),
    
    n("/src/render/", '22 0', "dir", 's-s'),
    n("/src/render/api.ts", '6 22', "RenderCompiler"),
    
    n("/src/render/dom/compiler/", '23 22', "dir", 's-s'),
    n("/src/render/dom/compiler/compiler.ts", '7 23', "DomCompiler"),
    n("/src/render/dom/compiler/style_inliner.ts", '8 23', "StyleInliner"),
    n("/src/render/dom/compiler/view_loader.ts", '9 23', "ViewLoader"),
    
    n("/src/render/", '24 22', "dir", 's-s'),
    n("/src/render/xhr.ts", '10 24', "XHR"),
    n("/src/render/xhr_impl.ts", '11 24', "XHRImpl"),
    n("/src/render/xhr_mock.ts", '12 24', "MockXHR, _PendingRequest"),
    
    n("/src/router/", '25 0', "dir", 's-s'),
    n("/src/router/pipeline.ts", '13 25', "Pipeline"),
    n("/src/router/route_registry.ts", '14 25', "RouteRegistry, componentHandlerToComponentType"),
    n("/src/router/router.ts", '15 25', "Router, RootRouter"),
    n("/src/router/router_outlet.ts", '16 25', "RouterOutlet"),
    
    n("/src/services/ruler.ts", '17 0', "Ruler"),
    
    n("/src/test_lib/", '26 0', "dir", 's-s'),
    n("/src/test_lib/test_bed.ts", '18 26', "TestBed{TODO-Deprecate in favor of TestComponentBuilder}"),
    n("/src/test_lib/test_component_builder.ts", '19 26', "TestComponentBuilder"),
]);
