var n = diagrams.graph.generateNode,
    s = diagrams.shared.get;

// max existing: 49

diagrams.graph([
    n('core/application.ts', '0 37 1 40 42 43 6 44 46', "Dependencies relative to /angular2/src except the cases which begin with /, which are relative to /angular2 (represented with a triangle)"),
    
    n('/change_detection.ts', '37', "{Parser, Lexer, ChangeDetection, DynamicChangeDetection, JitChangeDetection, PreGeneratedChangeDetection, PipeRegistry, defaultPipeRegistry}", 's-t'),
    n('/di.ts', '1', '{Injector, bind, OpaqueToken, Binding}', 's-t'),
    
    n('core/', '40 38 41 7 34 23 33', 'dir', 's-s'),
    n('application_tokens.ts', '38', "{appComponentRefToken, appComponentTypeToken}"),
    n('compiler/', '41 5 20 10 39 28 27 25 26 24 32 12', 'dir', 's-s'),
    n('compiler.ts', '5', '{Compiler, CompilerCache}'),
    n('component_url_mapper.ts', '20', "{ComponentUrlMapper}"),
    n('directive_resolver.ts', '10', "{DirectiveResolver}"),
    n('dynamic_component_loader.ts', '39', "{ComponentRef, DynamicComponentLoader}"),
    n('proto_view_factory.ts', '28', "{ProtoViewFactory}"),
    n('view_listener.ts', '27', "{AppViewListener}"),
    n('view_manager.ts', '25', "{AppViewManager}"),
    n('view_manager_utils.ts', '26', "{AppViewManagerUtils}"),
    n('view_pool.ts', '24', "{AppViewPool, APP_VIEW_POOL_CAPACITY}"),
    n('view_ref.ts', '32', "{internalView}"),
    n('view_resolver.ts', '12', "{ViewResolver}"),

    n('exception_handler.ts', '7', '{ExceptionHandler}'),
    n('life_cycle/life_cycle.ts', '34', "{LifeCycle}"),
    n('testability/testability.ts', '23', "{TestabilityRegistry, Testability}"),
    n('zone/ng_zone.ts', '33', "{NgZone}"),

    n('dom/', '42 4 3', 'dir', 's-s'),
    n('browser_adapter.ts', '3', '{BrowserDomAdapter}'),
    n('dom_adapter.ts', '4', '{DOM}'),

    n('facade/', '43 14 13 2', 'dir', 's-s'),
    n('async.ts', '14', "{Promise, PromiseWrapper}"),
    n('collection.ts', '13', "{List, ListWrapper}"),
    n('lang.ts', '2', '{NumberWrapper, Type, isBlank, isPresent, BaseException, assertionsEnabled, print, stringify}'),

    n('reflection/reflection.ts', '6', '{Reflector, reflector}'),
    
    n('render/', '44 29 45 15 16', 'dir', 's-s'),
    n('api.ts', '29', "{Renderer, RenderCompiler}"),
    n('dom/', '45 49 30 47 48', 'dir', 's-s'),
    
    n('compiler/', '49 31 11 9 8', 'dir', 's-s'),
    n('compiler.ts', '31', "{DefaultDomCompiler}"),
    n('style_inliner.ts', '11', "{StyleInliner}"),
    n('style_url_resolver.ts', '9', "{StyleUrlResolver}"),
    n('view_loader.ts', '8', "{ViewLoader}"),
    
    n('dom_renderer.ts', '30', "{DomRenderer, DOCUMENT_TOKEN}"),
    
    n('events/', '47 17 19 18', 'dir', 's-s'),
    n('event_manager.ts', '17', "{EventManager, DomEventsPlugin}"),
    n('hammer_gestures.ts', '19', "{HammerGesturesPlugin}"),
    n('key_events.ts', '18', "{KeyEventsPlugin}"),
    
    n('shadow_dom/', '48 36 35', 'dir', 's-s'),
    n('emulated_unscoped_shadow_dom_strategy.ts', '36', "{EmulatedUnscopedShadowDomStrategy}"),
    n('shadow_dom_strategy.ts', '35', "{ShadowDomStrategy}"),

    n('xhr.ts', '15', "{XHR}"),
    n('xhr_impl.ts', '16', "{XHRImpl}"),
    
    n('services/', '46 22 21', 'dir', 's-s'),
    n('app_root_url.ts', '22', "{AppRootUrl}"),
    n('url_resolver.ts', '21', "{UrlResolver}"),
]);
