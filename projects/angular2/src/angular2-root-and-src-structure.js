var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' src structure. Dart files: 4903 LOC, 79 F, 646 CL',
    body: [
        d('http.dart'),
        d('angular2_sfx.dart'),
        d('transformer.dart', "'The pub serve, pub build and pub run commands use transformers to prepare a package’s assets before serving the app, building the app for deployment, or executing the command-line app, as the case may be. Every time you prepare a Dart app for testing or deployment, you are using transformers behind the scenes. The pub tool uses the dart2js compiler to “transform” (compile) Dart files to JavaScript.'"),
        d('di_errors.ts'),
        d('view.ts'),
        d('angular2.api.dart'),
        d('di_annotations.ts'),
        d('debug.ts'),
        d('test_lib.ts'),
        d('mock.ts'),
        d('tsconfig.json'),
        d('test.ts'),
        d('README.dart.md'),
        d('annotations.ts'),
        d('render.ts'),
        d('pipes.ts'),
        d('pubspec.yaml', "'DART: Every pub package needs some metadata so it can specify its dependencies. Pub packages that are shared with others also need to provide some other information so users can discover them. '"),
        d('package.json'),
        d('angular2_sfx.ts'),
        d('core.ts'),
        d('globals.d.ts', "'This file contains declarations of global symbols we reference in our code'"),
        d('README.js.md'),
        d('di.ts'),
        d('angular2.ts'),
        d('http.ts'),
        d('angular2.api.ts', "'This module is used by dgeni to produce the angular2.d.ts file.'"),
        d('change_detection.ts'),
        d('directives.ts', "'Common directives shipped with Angular.'"),
        d('forms.ts', "'This module is used for handling user input, by defining and building a ControlGroup that consists of Control objects, and mapping them onto the DOM. Control objects can then be used to read information from the form DOM elements'"),
        d('router.ts', "'Maps application URLs into application states, to support deep-linking and navigation.'"),
        d('traceur-runtime.d.ts'),
        d('tsd.json', "'TypeScript Definition manager for DefinitelyTyped. TSD is a package manager to search and install TypeScript definition files directly from the community driven DefinitelyTyped repository.'"),
        c('src', [
            c('change_detection', [
                d('abstract_change_detector.ts'),
                d('binding_record.ts'),
                d('change_detection_jit_generator.dart'),
                d('change_detection_jit_generator.ts'),
                d('change_detection.ts'),
                d('change_detection_util.ts'),
                d('change_detector_ref.ts'),
                d('coalesce.ts'),
                d('constants.ts'),
                d('directive_record.ts'),
                d('dynamic_change_detector.ts'),
                d('exceptions.ts'),
                d('interfaces.ts'),
                d('jit_proto_change_detector.dart'),
                d('jit_proto_change_detector.ts'),
                c('parser', [
                    d('ast.ts'),
                    d('lexer.ts'),
                    d('locals.ts'),
                    d('parser.ts'),
                ]),
                c('pipes', [
                    d('iterable_changes.ts'),
                    d('json_pipe.ts'),
                    d('keyvalue_changes.ts'),
                    d('lowercase_pipe.ts'),
                    d('null_pipe.ts'),
                    d('observable_pipe.ts'),
                    d('pipe_registry.ts'),
                    d('pipe.ts'),
                    d('promise_pipe.ts'),
                    d('uppercase_pipe.ts'),
                ]),
                d('pregen_proto_change_detector.dart'),
                d('pregen_proto_change_detector.ts'),
                d('proto_change_detector.ts'),
                d('proto_record.ts'),
            ]),
            c('core', [
                c('annotations', [
                    d('annotations.dart'),
                    d('annotations.ts'),
                    d('decorators.dart'),
                    d('decorators.ts'),
                    d('di.dart'),
                    d('di.ts'),
                    d('view.dart'),
                    d('view.ts'),
                ]),
                c('annotations_impl', [
                    d('annotations.ts'),
                    d('di.ts'),
                    d('view.ts'),
                ]),
                d('application_tokens.ts'),
                d('application.ts'),
                c('compiler', [
                    d('base_query_list.dart'),
                    d('base_query_list.ts', "'Injectable Objects that contains a live list of child directives in the light Dom of a directive. The directives are kept in depth-first pre-order traversal of the DOM.'"),
                    d('compiler.ts'),
                    d('component_url_mapper.ts'),
                    d('directive_lifecycle_reflector.dart'),
                    d('directive_lifecycle_reflector.ts'),
                    d('directive_resolver.ts'),
                    d('dynamic_component_loader.ts'),
                    d('element_binder.ts'),
                    d('element_injector.ts'),
                    d('element_ref.ts'),
                    d('interfaces.ts'),
                    d('proto_view_factory.ts'),
                    d('query_list.ts'),
                    d('view_container_ref.ts'),
                    d('view_listener.ts'),
                    d('view_manager.ts'),
                    d('view_manager_utils.ts'),
                    d('view_pool.ts'),
                    d('view_ref.ts'),
                    d('view_resolver.ts'),
                    d('view.ts'),
                ]),
                d('exception_handler.ts'),
                c('life_cycle', [
                    d('life_cycle.ts', "'Provides access to explicitly trigger change detection in an application. By default, `Zone` triggers change detection in Angular on each virtual machine (VM) turn. When testing, or in some limited application use cases, a developer can also trigger change detection with the `lifecycle.tick()` method.'"),
                ]),
                c('testability', [
                    d('testability.dart'),
                    d('testability.ts'),
                    d('ability.ts'),
                ]),
                c('zone', [
                    d('ng_zone.dart'),
                    d('ng_zone.ts'),
                ]),
            ]),
            c('debug', [
                d('debug_element.ts'),
                d('debug_element_view_listener.ts'),
            ]),
            c('di', [
                d('annotations.dart'),
                d('annotations_impl.ts'),
                d('annotations.ts'),
                d('binding.ts'),
                d('decorators.dart'),
                d('decorators.ts'),
                d('exceptions.ts'),
                d('forward_ref.dart'),
                d('forward_ref.ts'),
                d('injector.ts'),
                d('key.ts'),
                d('opaque_token.ts'),
                d('type_info.dart'),
                d('type_info.ts'),
                d('type_literal.dart'),
                d('type_literal.ts'),
            ]),
            c('directives', [
                d('class.ts'),
                d('ng_for.ts'),
                d('ng_if.ts'),
                d('ng_non_bindable.ts'),
                d('ng_style.ts'),
                d('ng_switch.ts'),
            ]),
            c('dom', [
                d('browser_adapter.dart'),
                d('browser_adapter.ts'),
                d('dom_adapter.ts'),
                d('generic_browser_adapter.ts'),
                d('html_adapter.dart'),
                d('parse5_adapter.dart'),
                d('parse5_adapter.ts'),
            ]),
            c('facade', [
                d('async.dart'),
                d('async.ts'),
                d('browser.dart'),
                d('browser.ts'),
                d('collection.dart'),
                d('collection.ts'),
                d('lang.dart'),
                d('lang.ts'),
                d('math.dart'),
                d('math.ts'),
            ]),
            c('forms', [
                c('directives', [
                    d('checkbox_value_accessor.ts'),
                    d('control_container.ts'),
                    d('control_value_accessor.ts'),
                    d('default_value_accessor.ts'),
                    d('form_interface.ts'),
                    d('ng_control_group.ts'),
                    d('ng_control_name.ts'),
                    d('ng_control.ts'),
                    d('ng_form_control.ts'),
                    d('ng_form_model.ts'),
                    d('ng_form.ts'),
                    d('ng_model.ts'),
                    d('select_control_value_accessor.ts'),
                    d('shared.ts'),
                    d('validators.ts'),
                ]),
                d('directives.ts'),
                d('form_builder.ts'),
                d('model.ts'),
                d('validators.ts'),
            ]),
            c('http', [
                c('backends', [
                    d('browser_xhr.dart'),
                    d('browser_xhr.ts'),
                    d('mock_backend.ts'),
                    d('xhr_backend.ts'),
                ]),
                d('base_request_options.ts'),
                d('base_response_options.ts'),
                d('enums.ts'),
                d('headers.ts'),
                d('http.ts'),
                d('interfaces.ts'),
                d('static_request.ts'),
                d('static_response.ts'),
                d('url_search_params.ts'),
            ]),
            c('mock', [
                d('location_mock.ts'),
                d('mock_location_strategy.ts'),
                d('ng_zone_mock.ts'),
                d('view_resolver_mock.ts'),
            ]),
            c('reflection', [
                d('debug_reflection_capabilities.dart'),
                d('platform_reflection_capabilities.ts'),
                d('reflection_capabilities.dart'),
                d('reflection_capabilities.ts'),
                d('reflection.dart'),
                d('reflection.ts'),
                d('reflector.ts'),
                d('types.dart'),
                d('types.ts'),
            ]),
            c('render', [
                d('api.ts'),
                c('dom', [
                    c('compiler', [
                        d('compile_control.ts'),
                        d('compile_element.ts'),
                        d('compile_pipeline.ts'),
                        d('compiler.ts'),
                        d('compile_step_factory.ts'),
                        d('compile_step.ts'),
                        d('directive_parser.ts'),
                        d('property_binding_parser.ts'),
                        d('selector.ts'),
                        d('style_inliner.ts'),
                        d('style_url_resolver.ts'),
                        d('text_interpolation_parser.ts'),
                        d('view_loader.ts'),
                        d('view_splitter.ts'),
                    ]),
                    d('convert.ts'),
                    d('dom_renderer.ts'),
                    c('events', [
                        d('event_manager.ts'),
                        d('hammer_common.ts'),
                        d('hammer_gestures.dart'),
                        d('hammer_gestures.ts'),
                        d('key_events.ts'),
                    ]),
                    c('shadow_dom', [
                        d('content_tag.ts'),
                        d('emulated_scoped_shadow_dom_strategy.ts'),
                        d('emulated_unscoped_shadow_dom_strategy.ts'),
                        d('light_dom.ts'),
                        d('native_shadow_dom_strategy.ts'),
                        d('shadow_css.ts'),
                        d('shadow_dom_compile_step.ts'),
                        d('shadow_dom_strategy.ts'),
                        d('util.ts'),
                    ]),
                    d('util.ts'),
                    c('view', [
                        d('element_binder.ts'),
                        d('element.ts'),
                        d('proto_view_builder.ts'),
                        d('proto_view.ts'),
                        d('view_container.ts'),
                        d('view.ts'),
                    ]),
                ]),
                d('xhr_impl.dart'),
                d('xhr_impl.ts'),
                d('xhr_mock.ts'),
                d('xhr.ts'),
            ]),
            c('router', [
                d('hash_location_strategy.ts'),
                d('html5_location_strategy.ts'),
                d('instruction.ts'),
                d('location_strategy.ts'),
                d('location.ts'),
                d('path_recognizer.ts'),
                d('pipeline.ts'),
                d('route_config_decorator.dart'),
                d('route_config_decorator.ts'),
                d('route_config_impl.ts'),
                d('route_recognizer.ts'),
                d('route_registry.ts'),
                d('router_link.ts'),
                d('router_outlet.ts'),
                d('router.ts'),
                d('url.ts'),
            ]),
            c('services', [
                d('app_root_url.ts'),
                d('ruler.ts'),
                d('title.ts'),
                d('url_resolver.dart'),
                d('url_resolver.ts'),
            ]),
            c('test_lib', [
                d('benchmark_util.ts'),
                d('e2e_util.dart'),
                d('e2e_util.ts'),
                d('fake_async.dart'),
                d('fake_async.ts'),
                d('lang_utils.dart'),
                d('lang_utils.ts'),
                d('perf_util.dart'),
                d('perf_util.ts'),
                d('shims_for_IE.dart'),
                d('shims_for_IE.ts'),
                d('spies.dart'),
                d('spies.ts'),
                d('test_bed.ts'),
                d('test_component_builder.ts'),
                d('test_injector.ts'),
                d('test_lib.dart'),
                d('test_lib.ts'),
                d('utils.ts'),
            ]),
            c('transform', [
                c('bind_generator', [
                    d('generator.dart'),
                    d('transformer.dart'),
                    d('visitor.dart'),
                ]),
                c('common', [
                    d('annotation_matcher.dart'),
                    d('asset_reader.dart'),
                    d('async_string_writer.dart'),
                    d('directive_metadata_reader.dart'),
                    d('formatter.dart'),
                    d('logging.dart'),
                    d('mirror_mode.dart'),
                    d('names.dart'),
                    d('ng_deps.dart'),
                    d('options.dart'),
                    d('options_reader.dart'),
                    d('property_utils.dart'),
                    d('registered_type.dart'),
                    d('xhr_impl.dart'),
                ]),
                c('directive_linker', [
                    d('linker.dart'),
                    d('transformer.dart'),
                ]),
                c('directive_metadata_extractor', [
                    d('extractor.dart'),
                    d('transformer.dart'),
                ]),
                c('directive_processor', [
                    d('rewriter.dart'),
                    d('transformer.dart'),
                    d('visitors.dart'),
                ]),
                d('di_transformer.dart'),
                c('reflection_remover', [
                    d('ast_tester.dart'),
                    d('codegen.dart'),
                    d('remove_reflection_capabilities.dart'),
                    d('rewriter.dart'),
                    d('transformer.dart'),
                ]),
                c('template_compiler', [
                    d('change_detector_codegen.dart'),
                    d('compile_step_factory.dart'),
                    d('generator.dart'),
                    d('reflection_capabilities.dart'),
                    d('reflector_register_codegen.dart'),
                    d('transformer.dart'),
                    d('view_definition_creator.dart'),
                ]),
                d('transformer.dart'),
            ]),
            c('util', [
                d('decorators.dart'),
            ]),
        ]),
    ]
});
