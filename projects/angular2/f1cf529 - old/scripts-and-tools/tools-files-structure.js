var d = diagrams.box.generateDefinition,
    c = diagrams.box.generateContainer,
    s = diagrams.shared.get;

diagrams.box({
    name: s('project') + ' /tools/ files structure: 4903 LOC, 79 F, 646 CL',
    body: [
        c('broccoli', [
            d('angular_builder.d.ts'),
            d('angular_builder.ts'),
            d('broccoli-dartfmt.ts'),
            d('broccoli-dest-copy.ts'),
            d('broccoli.d.ts'),
            d('broccoli-filter.d.ts'),
            d('broccoli-flatten.spec.ts'),
            d('broccoli-flatten.ts'),
            d('broccoli-lodash.ts'),
            d('broccoli-merge-trees.spec.ts'),
            d('broccoli-merge-trees.ts'),
            d('broccoli-replace.ts'),
            d('broccoli-tree-stabilizer.ts'),
            d('broccoli-ts2dart.ts'),
            d('broccoli-typescript.ts'),
            d('broccoli-writer.d.ts'),
            d('diffing-broccoli-plugin.ts'),
            c('html-replace', [
                d('index.ts'),
                d('SCRIPTS_benchmarks_external.html'),
                d('SCRIPTS_benchmarks.html'),
                d('SCRIPTS.html'),
            ]),
            d('multi_copy.ts'),
            c('traceur', [
                d('index.ts'),
            ]),
            d('tree-differ.spec.ts'),
            d('tree-differ.ts'),
            c('trees', [
                d('browser_tree.ts'),
                d('dart_tree.ts'),
                d('node_tree.ts'),
            ]),
            d('ts2dart.d.ts'),
        ]),
        c('build', [
            d('benchpress.js'),
            d('bundle.js'),
            d('dartanalyzer.js'),
            d('dartdetect.js'),
            d('es5build.js'),
            d('file2modulename.js'),
            d('jsserve.js'),
            d('linknodemodules.js'),
            d('logging.js'),
            d('pubbuild.js'),
            d('pubget.js'),
            d('pubserve.js'),
            d('rundartpackage.js'),
            d('run_server_dart_tests.js'),
            c('snippets', [
                d('runtime_paths.js'),
                d('url_params_to_form.js'),
            ]),
            d('transpile.js'),
            d('util.js'),
            d('watch.js'),
            d('watch.spec.js'),
        ]),
        d('check-environment.js'),
        d('chromedriverpatch.js'),
        c('code.angularjs.org', [
            d('publish.sh'),
            d('unpublish.sh'),
        ]),
        c('npm', [
            d('check-node-modules'),
            d('check-node-modules.js'),
            d('clean-shrinkwrap.js'),
            d('copy-npm-shrinkwrap'),
        ]),
        c('traceur-jasmine', [
            d('index.js'),
        ]),
        c('transpiler', [
            d('gulp-traceur.js'),
            d('index.js'),
            c('spec', [
                c('a-0-subfolder', [
                    d('library_spec.js'),
                ]),
                d('annotations_spec.js'),
                d('arrow_functions_spec.js'),
                d('bar.js'),
                d('baz.js'),
                d('classes_spec.js'),
                d('cycle.js'),
                d('cycle_spec.js'),
                d('equals_spec.js'),
                d('export.js'),
                c('fixtures', [
                    d('annotations.dart'),
                    d('annotations.es6'),
                    d('facade.dart'),
                    d('facade.es6'),
                ]),
                d('foo.js'),
                d('functions_spec.js'),
                d('instance_of_spec.js'),
                d('interfaces_spec.js'),
                d('lang_spec.js'),
                d('reexport.js'),
                d('types_spec.js'),
            ]),
            c('src', [
                d('compiler.js'),
                d('parser.js'),
                c('patch', [
                    d('TypeToExpressionTransformer.js'),
                ]),
            ]),
            c('unittest', [
                d('transpilertests.js'),
            ]),
        ]),
        d('tsd.json'),
        c('typings', [
            c('es6-promise', [
                d('es6-promise.d.ts'),
            ]),
            c('fs-extra', [
                d('fs-extra.d.ts'),
            ]),
            c('jasmine', [
                d('jasmine.d.ts'),
            ]),
            c('node', [
                d('node.d.ts'),
            ]),
        ]),
        d('utils.inc'),

    ]
});
