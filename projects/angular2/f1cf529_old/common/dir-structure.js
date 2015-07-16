var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' direrctories structure',
    body: [
    d('typing_spec'),
        c('docs', [
            c('angular.io-package', [
                d('processors'),
                d('services'),
                c('templates', [
                    d('layout'),
                    d('lib'),
                ]),
            ]),
            c('app', [
                d('css'),
                d('js'),
            ]),
            c('dgeni-package', [
                c('mocks', [
                    d('readTypeScriptModules'),
                ]),
                d('processors'),
                d('readers'),
                c('services', [
                    d('tsParser'),
                ]),
                d('tag-defs'),
                c('templates', [
                    d('layout'),
                    d('lib'),
                ]),
            ]),
            c('links-package', [
                d('inline-tag-defs'),
                d('services'),
            ]),
            d('public-docs-package'),
        ]),
        c('modules', [
            c('angular2', [
                c('docs', [
                    d('change_detection'),
                    d('core'),
                    d('di'),
                ]),
                c('src', [
                    c('change_detection', [
                        d('parser'),
                        d('pipes'),
                    ]),
                    c('core', [
                        d('annotations'),
                        d('annotations_impl'),
                        d('compiler'),
                        d('life_cycle'),
                        d('testability'),
                        d('zone'),
                    ]),
                    d('debug'),
                    d('di'),
                    d('directives'),
                    d('dom'),
                    d('facade'),
                    c('forms', [
                        d('directives'),
                    ]),
                    c('http', [
                        d('backends'),
                    ]),
                    d('mock'),
                    d('reflection'),
                    c('render', [
                        c('dom', [
                            d('compiler'),
                            d('events'),
                            d('shadow_dom'),
                            d('view'),
                        ]),
                    ]),
                    d('router'),
                    d('services'),
                    d('test_lib'),
                    c('transform', [
                        d('bind_generator'),
                        d('common'),
                        d('directive_linker'),
                        d('directive_metadata_extractor'),
                        d('directive_processor'),
                        d('reflection_remover'),
                        d('template_compiler'),
                    ]),
                    d('util'),
                ]),
                c('test', [
                    c('benchmark', [
                        c('transform', [
                            d('bind_generator'),
                            d('directive_linker'),
                            d('directive_processor'),
                            d('integration'),
                            d('reflection_remover'),
                            d('template_compiler'),
                        ]),
                    ]),
                    c('change_detection', [
                        d('generated'),
                        d('generator'),
                        d('parser'),
                        d('pipes'),
                    ]),
                    c('core', [
                        d('annotations'),
                        d('compiler'),
                        d('life_cycle'),
                        d('testability'),
                        d('zone'),
                    ]),
                    d('debug'),
                    d('di'),
                    d('directives'),
                    d('dom'),
                    d('facade'),
                    d('forms'),
                    c('http', [
                        d('backends'),
                    ]),
                    d('mock'),
                    d('reflection'),
                    c('render', [
                        c('dom', [
                            d('compiler'),
                            d('events'),
                            d('shadow_dom'),
                            d('view'),
                        ]),
                    ]),
                    d('router'),
                    c('services', [
                        d('static_assets'),
                    ]),
                    d('test_lib'),
                    c('transform', [
                        c('bind_generator', [
                            c('basic_bind_files', [
                                d('expected'),
                            ]),
                            c('duplicate_bind_name_files', [
                                d('expected'),
                            ]),
                            c('events_files', [
                                d('expected'),
                            ]),
                        ]),
                        d('common'),
                        c('directive_linker', [
                            c('simple_export_files', [
                                d('expected'),
                            ]),
                            c('simple_files', [
                                d('expected'),
                            ]),
                        ]),
                        c('directive_metadata_extractor', [
                            d('absolute_export_files'),
                            d('adjacent_strings_files'),
                            d('directive_metadata_files'),
                            d('export_files'),
                            d('recursive_export_files'),
                            d('simple_files'),
                        ]),
                        c('directive_processor', [
                            c('absolute_url_expression_files', [
                                d('expected'),
                            ]),
                            c('custom_metadata', [
                                d('expected'),
                            ]),
                            c('interface_chain_files', [
                                d('expected'),
                            ]),
                            c('interfaces_files', [
                                d('expected'),
                            ]),
                            c('invalid_url_files', [
                                d('expected'),
                            ]),
                            c('multiple_style_urls_files', [
                                d('expected'),
                            ]),
                            c('parameter_metadata', [
                                d('expected'),
                            ]),
                            c('split_url_expression_files', [
                                d('expected'),
                            ]),
                            c('superclass_files', [
                                d('expected'),
                            ]),
                            c('url_expression_files', [
                                d('expected'),
                            ]),
                        ]),
                        c('integration', [
                            c('list_of_types_files', [
                                d('expected'),
                            ]),
                            c('simple_annotation_files', [
                                d('expected'),
                            ]),
                            c('synthetic_ctor_files', [
                                d('expected'),
                            ]),
                            c('two_annotations_files', [
                                d('expected'),
                            ]),
                            c('two_deps_files', [
                                d('expected'),
                            ]),
                        ]),
                        c('reflection_remover', [
                            c('debug_files', [
                                d('expected'),
                            ]),
                            c('debug_mirrors_files', [
                                d('expected'),
                            ]),
                            c('log_mirrors_files', [
                                d('expected'),
                            ]),
                            c('reflection_remover_files', [
                                d('expected'),
                            ]),
                            c('verbose_files', [
                                d('expected'),
                            ]),
                        ]),
                        c('template_compiler', [
                            c('duplicate_files', [
                                d('expected'),
                            ]),
                            c('inline_expression_files', [
                                d('expected'),
                            ]),
                            c('inline_method_files', [
                                d('expected'),
                            ]),
                            c('one_directive_files', [
                                d('expected'),
                            ]),
                            c('url_expression_files', [
                                d('expected'),
                            ]),
                            c('url_method_files', [
                                d('expected'),
                            ]),
                            c('with_prefix_files', [
                                d('expected'),
                            ]),
                        ]),
                    ]),
                    d('util'),
                ]),
            ]),
            c('angular2_material', [
                c('src', [
                    c('components', [
                        d('button'),
                        d('checkbox'),
                        d('dialog'),
                        d('grid_list'),
                        d('input'),
                        d('progress-circular'),
                        d('progress-linear'),
                        d('radio'),
                        d('switcher'),
                    ]),
                    c('core', [
                        d('style'),
                    ]),
                ]),
            ]),
            c('benchmarks', [
                d('e2e_test'),
                c('src', [
                    d('change_detection'),
                    d('compiler'),
                    d('costs'),
                    d('di'),
                    d('element_injector'),
                    d('largetable'),
                    d('naive_infinite_scroll'),
                    d('tree'),
                ]),
            ]),
            c('benchmarks_external', [
                d('e2e_test'),
                c('src', [
                    d('compiler'),
                    d('largetable'),
                    d('naive_infinite_scroll'),
                    c('tree', [
                        d('polymer'),
                        d('react'),
                    ]),
                ]),
            ]),
            c('benchpress', [
                d('docs'),
                c('src', [
                    c('firefox_extension', [
                        d('data'),
                        d('lib'),
                    ]),
                    d('metric'),
                    d('reporter'),
                    d('validator'),
                    d('webdriver'),
                ]),
                c('test', [
                    d('firefox_extension'),
                    d('metric'),
                    d('reporter'),
                    d('validator'),
                    d('webdriver'),
                ]),
            ]),
            c('examples', [
                c('e2e_test', [
                    d('hello_world'),
                    d('http'),
                    d('key_events'),
                    d('material'),
                    d('model_driven_forms'),
                    d('sourcemap'),
                    d('template_driven_forms'),
                    d('zippy_component'),
                ]),
                c('src', [
                    d('benchpress'),
                    d('gestures'),
                    d('hello_world'),
                    d('http'),
                    d('key_events'),
                    c('material', [
                        d('button'),
                        d('checkbox'),
                        d('dialog'),
                        d('grid_list'),
                        d('input'),
                        d('progress-linear'),
                        d('radio'),
                        d('switcher'),
                    ]),
                    d('model_driven_forms'),
                    d('sourcemap'),
                    d('template_driven_forms'),
                    c('todo', [
                        d('css'),
                        d('services'),
                    ]),
                    d('zippy_component'),
                ]),
                c('test', [
                    d('benchpress'),
                ]),
            ]),
            c('rtts_assert', [
                d('src'),
                d('test'),
            ]),
        ]),
        c('modules_dart', [
            c('analysis_server', [
                d('lib'),
            ]),
            c('analyzer_plugin', [
                c('lib', [
                    d('src'),
                ]),
                d('test'),
            ]),
        ]),
        c('scripts', [
            d('ci'),
            d('jenkins'),
            d('publish'),
        ]),
        c('tools', [
            c('broccoli', [
                d('html-replace'),
                d('traceur'),
                d('trees'),
            ]),
            c('build', [
                d('snippets'),
            ]),
            d('code.angularjs.org'),
            d('npm'),
            d('traceur-jasmine'),
            c('transpiler', [
                c('spec', [
                    d('a-0-subfolder'),
                    d('fixtures'),
                ]),
                c('src', [
                    d('patch'),
                ]),
                d('unittest'),
            ]),
        ]),
    ]
});
