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
  name: s('project') + ' tests overview',
  body: [c('src', [
    c('change_detection', [
      "change_detection_spec.ts",
      "change_detector_config.ts",
      "change_detector_spec.ts",
      "coalesce_spec.ts",
      c('generated', [
        "change_detector_classes.ts",
      ]),
      "generator",
      "iterable.ts",
      c('parser', [
        "lexer_spec.ts",
        "locals_spec.ts",
        "parser_spec.ts",
        "unparser_spec.ts",
        "unparser.ts",
      ]),
      c('pipes', [
        "date_pipe_spec.ts",
        "iterable_changes_spec.ts",
        "json_pipe_spec.ts",
        "keyvalue_changes_spec.ts",
        "limit_to_pipe_spec.ts",
        "lowercase_pipe_spec.ts",
        "number_pipe_spec.ts",
        "observable_pipe_spec.ts",
        "pipes_spec.ts",
        "promise_pipe_spec.ts",
        "uppercase_pipe_spec.ts",
      ]),
      "util.ts",
    ]),
    c('core', [
      c('annotations', [
        c('decorators_spec.ts', [
          d('es5 decorators should declare directive class', tsc("var MyDirective = Directive({}).Class({constructor: function() { this.works = true; }});\nexpect(new MyDirective().works).toEqual(true);")),
          d('es5 decorators should declare Component class', tsc("var MyComponent = Component({}).View({}).View({}).Class({constructor: function() { this.works = true; }});\nexpect(new MyComponent().works).toEqual(true);")),
          d('es5 decorators should create type in ES5', tsc("function MyComponent(){}; var as;\n(<any>MyComponent).annotations = as = Component({}).View({});\nexpect(reflector.annotations(MyComponent)).toEqual(as.annotations);")),
        ]),
      ]),
      c('application_spec.ts', [
        "bootstrap factory method should throw if bootstrapped Directive is not a Component",
        "bootstrap factory method should throw if no element is found",
        "bootstrap factory method should create an injector promise",
        "bootstrap factory method should display hello world",
        "bootstrap factory method should support multiple calls to bootstrap",
        "bootstrap factory method should make the provided bindings available to the application component",
        "bootstrap factory method should avoid cyclic dependencies when root component requires Lifecycle through DI",
        "bootstrap factory method should support shadow dom content tag",
        "bootstrap factory method should register each application with the testability registry",
      ]),
      c('compiler', [
        "compiler_spec.ts",
        "component_url_mapper_spec.ts",
        "directive_lifecycle_spec.ts",
        "directive_metadata_reader_spec.ts",
        "dynamic_component_loader_spec.ts",
        "element_injector_spec.ts",
        "integration_spec.ts",
        "proto_view_factory_spec.ts",
        "query_integration_spec.ts",
        "query_list_spec.ts",
        "view_container_ref_spec.ts",
        "view_manager_spec.ts",
        "view_manager_utils_spec.ts",
        "view_pool_spec.ts",
      ]),
      "directive_lifecycle_integration_spec.ts",
      "forward_ref_integration_spec.ts",
      c('life_cycle', [
        "life_cycle_spec.ts",
      ]),
      c('testability', [
        "testability_spec.ts",
      ]),
      c('zone', [
        "ng_zone_spec.ts",
      ]),
    ]),
    c('debug', [
      "debug_element_spec.ts",
      "debug_element_view_listener_spec.ts",
    ]),
    c('di', [
      "forward_ref_spec.ts",
      "injector_spec.ts",
      "key_spec.ts",
    ]),
    c('directives', [
      "class_spec.ts",
      "ng_for_spec.ts",
      "ng_if_spec.ts",
      "ng_style_spec.ts",
      "ng_switch_spec.ts",
      "non_bindable_spec.ts",
    ]),
    "dom",
    c('facade', [
      "async_spec.ts",
      "collection_spec.ts",
      "lang_spec.ts",
    ]),
    c('forms', [
      "directives_spec.ts",
      "form_builder_spec.ts",
      "integration_spec.ts",
      "model_spec.ts",
      "validators_spec.ts",
    ]),
    c('http', [
      c('backends', [
        "xhr_backend_spec.ts",
      ]),
      "base_request_options_spec.ts",
      "headers_spec.ts",
      "http_spec.ts",
      "url_search_params_spec.ts",
    ]),
    c('mock', [
      "view_resolver_mock_spec.ts",
    ]),
    c('reflection', [
      "reflector_common.ts",
      "reflector_spec.ts",
    ]),
    c('render', [
      "api_spec.ts",
      c('dom', [
        c('compiler', [
          "compiler_browser_spec.ts",
          "compiler_common_tests.ts",
          "directive_parser_spec.ts",
          "pipeline_spec.ts",
          "property_binding_parser_spec.ts",
          "selector_spec.ts",
          "style_inliner_spec.ts",
          "style_url_resolver_spec.ts",
          "text_interpolation_parser_spec.ts",
          "view_loader_spec.ts",
          "view_splitter_spec.ts",
        ]),
        "convert_spec.ts",
        "dom_renderer_integration_spec.ts",
        "dom_testbed.ts",
        c('events', [
          "event_manager_spec.ts",
          "key_events_spec.ts",
        ]),
        c('shadow_dom', [
          "content_tag_spec.ts",
          "emulated_scoped_shadow_dom_strategy_spec.ts",
          "emulated_unscoped_shadow_dom_strategy_spec.ts",
          "light_dom_spec.ts",
          "native_shadow_dom_strategy_spec.ts",
          "shadow_css_spec.ts",
        ]),
        "shadow_dom_emulation_integration_spec.ts",
        c('view', [
          "proto_view_builder_spec.ts",
          "view_spec.ts",
        ]),
      ]),
      "xhr_impl_spec.ts",
      "xhr_mock_spec.ts",
    ]),
    c('router', [
      "location_spec.ts",
      "outlet_spec.ts",
      "path_recognizer_spec.ts",
      "route_recognizer_spec.ts",
      "route_registry_spec.ts",
      "router_integration_spec.ts",
      "router_link_spec.ts",
      "router_spec.ts",
    ]),
    c('services', [
      "rectangle_mock.ts",
      "ruler_spec.ts",
      c('static_assets', [
        "200.html",
      ]),
      "title_spec.ts",
      "url_resolver_spec.ts",
    ]),
    c('test_lib', [
      "fake_async_spec.ts",
      "test_component_builder_spec.ts",
      "test_lib_spec.ts",
    ]),
    c('transform', [
      c('bind_generator', [
        c('basic_bind_files', [
          "expected",
        ]),
        c('duplicate_bind_name_files', [
          "expected",
        ]),
        c('events_files', [
          "expected",
        ]),
      ]),
      "common",
      c('directive_linker', [
        c('simple_export_files', [
          "expected",
        ]),
        c('simple_files', [
          "expected",
        ]),
      ]),
      c('directive_metadata_extractor', [
        "absolute_export_files",
        "adjacent_strings_files",
        "directive_metadata_files",
        "export_files",
        "recursive_export_files",
        "simple_files",
      ]),
      c('directive_processor', [
        c('absolute_url_expression_files', [
          "expected",
          "template.css",
          "template.html",
        ]),
        c('custom_metadata', [
          "expected",
        ]),
        "expected",
        c('interface_chain_files', [
          "expected",
        ]),
        c('interfaces_files', [
          "expected",
        ]),
        c('invalid_url_files', [
          "expected",
        ]),
        c('multiple_style_urls_files', [
          "expected",
          "template.css",
          "template.html",
          "template_other.css",
        ]),
        c('multiple_style_urls_not_inlined_files', [
          "expected",
          "template.css",
          "template.html",
          "template_other.css",
        ]),
        c('parameter_metadata', [
          "expected",
        ]),
        c('split_url_expression_files', [
          "expected",
          "template.html",
        ]),
        c('static_function_files', [
          "expected",
        ]),
        c('superclass_files', [
          "expected",
        ]),
        c('url_expression_files', [
          "expected",
          "template.html",
        ]),
      ]),
      c('integration', [
        c('list_of_types_files', [
          "expected",
        ]),
        c('simple_annotation_files', [
          c('expected', [
            "bar.ng_meta.json",
          ]),
        ]),
        c('synthetic_ctor_files', [
          "expected",
        ]),
        c('two_annotations_files', [
          "expected",
        ]),
        c('two_deps_files', [
          "expected",
        ]),
      ]),
      c('reflection_remover', [
        c('debug_files', [
          "expected",
          "README.md",
        ]),
        c('debug_mirrors_files', [
          "expected",
          "README.md",
        ]),
        c('log_mirrors_files', [
          "expected",
          "README.md",
        ]),
        c('reflection_remover_files', [
          "expected",
          "README.md",
        ]),
        c('verbose_files', [
          "expected",
        ]),
      ]),
      c('template_compiler', [
        c('duplicate_files', [
          "expected",
          "hello.ng_meta.json",
        ]),
        c('inline_expression_files', [
          "expected",
          "hello.ng_meta.json",
        ]),
        c('inline_method_files', [
          "expected",
          "hello.ng_meta.json",
        ]),
        c('ng_for_files', [
          "hello.ng_meta.json",
        ]),
        c('one_directive_files', [
          "expected",
          "hello.ng_meta.json",
        ]),
        c('url_expression_files', [
          "expected",
          "hello.ng_meta.json",
          "template.html",
        ]),
        c('url_method_files', [
          "expected",
          "hello.ng_meta.json",
          "template.html",
        ]),
        c('with_prefix_files', [
          "expected",
          "goodbye.ng_meta.json",
          "hello.ng_meta.json",
          "ng2_prefix.ng_meta.json",
        ]),
      ]),
    ]),
    c('util', [
      "decorators_spec.ts",
    ]),
  ])]
}, {
  allCollapsed: true
});
