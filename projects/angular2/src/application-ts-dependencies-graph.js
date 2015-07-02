var n = diagrams.graph.generateNode,
    s = diagrams.shared.get;

// max existing: 49

diagrams.graph([
    n('core/application.ts', '0', "Dependencies relative to /angular2/src except the cases which begin with /, which are relative to /angular2 (represented with a triangle)"),
    
    n('/change_detection.ts', '37 0', "{Parser, Lexer, ChangeDetection, DynamicChangeDetection, JitChangeDetection, PreGeneratedChangeDetection, PipeRegistry, defaultPipeRegistry}", 's-t'),
    n('/di.ts', '1 0', '{Injector, bind, OpaqueToken, Binding}', 's-t'),
    
    n('core/', '40 0', 'dir', 's-s'),
    n('application_tokens.ts', '38 40', "{appComponentRefToken, appComponentTypeToken}"),
    n('compiler/', '41 40', 'dir', 's-s'),
    n('compiler.ts', '5 41', '{Compiler, CompilerCache}'),
    n('component_url_mapper.ts', '20 41', "{ComponentUrlMapper}"),
    n('directive_resolver.ts', '10 41', "{DirectiveResolver}"),
    n('dynamic_component_loader.ts', '39 41', "{ComponentRef, DynamicComponentLoader}"),
    n('proto_view_factory.ts', '28 41', "{ProtoViewFactory}"),
    n('view_listener.ts', '27 41', "{AppViewListener}"),
    n('view_manager.ts', '25 41', "{AppViewManager}"),
    n('view_manager_utils.ts', '26 41', "{AppViewManagerUtils}"),
    n('view_pool.ts', '24 41', "{AppViewPool, APP_VIEW_POOL_CAPACITY}"),
    n('view_ref.ts', '32 41', "{internalView}"),
    n('view_resolver.ts', '12 41', "{ViewResolver}"),

    n('exception_handler.ts', '7 40', '{ExceptionHandler}'),
    n('life_cycle/life_cycle.ts', '34 40', "{LifeCycle}"),
    n('testability/testability.ts', '23 40', "{TestabilityRegistry, Testability}"),
    n('zone/ng_zone.ts', '33 40', "{NgZone}"),

    n('dom/', '42 0', 'dir', 's-s'),
    n('browser_adapter.ts', '3 42', '{BrowserDomAdapter}'),
    n('dom_adapter.ts', '4 42', '{DOM}'),

    n('facade/', '43 0', 'dir', 's-s'),
    n('async.ts', '14 43', "{Promise, PromiseWrapper}"),
    n('collection.ts', '13 43', "{List, ListWrapper}"),
    n('lang.ts', '2 43', '{NumberWrapper, Type, isBlank, isPresent, BaseException, assertionsEnabled, print, stringify}'),

    n('reflection/reflection.ts', '6 0', '{Reflector, reflector}'),
    
    n('render/', '44 0', 'dir', 's-s'),
    n('api.ts', '29 44', "{Renderer, RenderCompiler}"),
    n('dom/', '45 44', 'dir', 's-s'),
    
    n('compiler/', '49 45', 'dir', 's-s'),
    n('compiler.ts', '31 49', "{DefaultDomCompiler}"),
    n('style_inliner.ts', '11 49', "{StyleInliner}"),
    n('style_url_resolver.ts', '9 49', "{StyleUrlResolver}"),
    n('view_loader.ts', '8 49', "{ViewLoader}"),
    
    n('dom_renderer.ts', '30 45', "{DomRenderer, DOCUMENT_TOKEN}"),
    
    n('events/', '47 45', 'dir', 's-s'),
    n('event_manager.ts', '17 47', "{EventManager, DomEventsPlugin}"),
    n('hammer_gestures.ts', '19 47', "{HammerGesturesPlugin}"),
    n('key_events.ts', '18 47', "{KeyEventsPlugin}"),
    
    n('shadow_dom/', '48 45', 'dir', 's-s'),
    n('emulated_unscoped_shadow_dom_strategy.ts', '36 48', "{EmulatedUnscopedShadowDomStrategy}"),
    n('shadow_dom_strategy.ts', '35 48', "{ShadowDomStrategy}"),

    n('xhr.ts', '15 44', "{XHR}"),
    n('xhr_impl.ts', '16 44', "{XHRImpl}"),
    
    n('services/', '46 0', 'dir', 's-s'),
    n('app_root_url.ts', '22 46', "{AppRootUrl}"),
    n('url_resolver.ts', '21 46', "{UrlResolver}"),
]);
