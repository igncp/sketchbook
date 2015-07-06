var nlc = diagrams.layer.newLayerConnectedToNext,
    nlcb = diagrams.layer.newLayerConnectedToNextWithCode('bash'),
    nlcpb = diagrams.layer.newLayerConnectedToNextWithParagraphAndCode('bash'),
    nlcj = diagrams.layer.newLayerConnectedToNextWithCode('javascript'),
    nlcpj = diagrams.layer.newLayerConnectedToNextWithParagraphAndCode('javascript'),
    js = diagrams.utils.codeBlockOfLanguageFn('javascript', '//'),
    shc = diagrams.utils.codeBlockOfLanguageFn('bash', '#');

diagrams.layer(nlc("'Angular2 testing flows", 'sna', [
    nlc('npm test', [
        nlcj("gulp test.all.js", "gulp.task('test.all.js', shell.task(['./scripts/ci/test_js.sh']));", [
            nlcb("gulp pre-test-checks", [
                nlc("Tests circular dependencies using madge.js in the `CONFIG.dest.js.dev.es6` paths" + js("runSequence('build/checkCircularDependencies', sequenceComplete(done));", '/gulpfile.js'))
            ]),
            nlcb("gulp test.js --browsers=${KARMA_BROWSERS:-ChromeCanary}", [
                nlc('Runs the gulp task `test.unit.tools/ci`'),
                nlc('Runs the gulp task `test.transpiler.unittest`'),
                nlc('Runs the gulp task `docs/test`'),
                nlc('Runs the gulp task `test.unit.js/ci`', [
                    nlcj("karma.server.start({configFile: __dirname + '/karma-js.conf.js', singleRun: true, reporters: ['dots'], browsers: getBrowsersFromCLI()}, done);")
                ]),
                nlc('Runs the gulp task `test.unit.cjs/ci`', [
                    nlcpj("Runs jasmine, which uses `./tools/traceur-jasmine`", "runJasmineTests(['dist/js/cjs/{angular2,benchpress}/test/**/*_spec.js'], done);")
                ]),
                nlc('Runs the gulp task `test.typings`', [
                    nlc("Runs the gulp task `'!pre.test.typings'`"),
                    nlcpj("Runs some typescript tests " + js("var tsc = require('gulp-typescript');"), "gulp.src(['typing_spec/*.ts', 'dist/docs/typings/angular2/angular2.d.ts'])\n  .pipe(tsc({target: 'ES5', module: 'commonjs',typescript: require('typescript')}))});")
                ]),
            ]),
            nlcb("${SCRIPT_DIR}/test_e2e_js.sh", [
                nlcpb("Protactor's webdriver-manager", "./node_modules/.bin/webdriver-manager update"),
                nlcb("gulp serve.js.prod", [
                    nlcpj("Run a server in the prod tests port (8081) using the custom tool jsserve" + js("var jsserve = require('./tools/build/jsserve');"), "jsserve(gulp, gulpPlugins, {\n path: CONFIG.dest.js.prod.es5,\n port: 8001\n})();")
                ]),
                nlcpb("Compile the sass files for multiple destinations and run the `gulp-autoprefixer` module", "gulp build.css.material"),
                nlcpb("Kill the server if the script is interrupted by keyboard", "trap killServer EXIT"),
                nlcpb("Wait for server to come up", "sleep 10"),
                nlc("Lets protractor use default browser unless one is specified."),
                nlcb("protractor protractor-js.conf.js $OPTIONS"),
                nlcb("protractor protractor-js.conf.js $OPTIONS --benchmark --dryrun"),
                nlcb("protractor dist/js/cjs/benchpress/test/firefox_extension/conf.js"),
            ]),
            nlcb("gulp post-test-checks", [
                nlcpj("'Lints the format of TypeScript files in `modules/**/*.ts`, `tools/**/*.ts`, `!**/typings/**/*.d.ts`", "runSequence('enforce-format', sequenceComplete(done));")
            ]),
        ]),
        nlcpj("gulp test.all.dart", "gulp.task('test.all.dart', shell.task(['./scripts/ci/test_dart.sh']))")
    ])
]));
