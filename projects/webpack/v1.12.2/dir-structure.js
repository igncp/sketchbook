var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' directories structure',
  body: [
    c("webpack", [
      d("benchmark"),
      d("bin"),
      d("buildin"),
      c("examples", [
        d("agressive-merging"),
        d("code-splitted-css-bundle"),
        d("code-splitted-dedupe"),
        d("code-splitted-require.context"),
        d("code-splitted-require.context-amd"),
        d("code-splitting"),
        d("code-splitting-bundle-loader"),
        d("coffee-script"),
        d("commonjs"),
        c("component", [
          c("components", [
            d("webpack-a-component"),
            d("webpack-c-component"),
          ]),
          c("my-components", [
            d("b-component"),
          ]),
        ]),
        d("css-bundle"),
        c("dedupe", [
          d("a"),
          d("b"),
        ]),
        d("dll"),
        d("dll-user"),
        d("explicit-vendor-chunk"),
        d("externals"),
        d("extra-async-chunk"),
        d("extra-async-chunk-advanced"),
        d("hybrid-routing"),
        d("i18n"),
        d("labeled-modules"),
        d("loader"),
        d("mixed"),
        d("move-to-parent"),
        d("multi-compiler"),
        d("multi-part-library"),
        c("multiple-commons-chunks", [
          d("modules"),
        ]),
        d("multiple-entry-points"),
        d("multiple-entry-points-commons-chunk-css-bundle"),
        d("named-chunks"),
        c("require.context", [
          d("templates"),
        ]),
        d("require.resolve"),
        d("two-explicit-vendor-chunks"),
        d("web-worker"),
      ]),
      d("hot"),
      c("lib", [
        d("dependencies"),
        d("node"),
        d("optimize"),
        d("web"),
        d("webworker"),
      ]),
      d("scripts"),
      c("test", [
        c("browsertest", [
          d("img"),
          d("lib"),
          c("web_modules", [
            d("subcontent"),
          ]),
        ]),
        c("cases", [
          c("chunks", [
            d("context"),
            d("named-chunks"),
            d("parsing"),
            d("runtime"),
            d("weak-dependencies"),
          ]),
          c("compile", [
            c("deduplication", [
              d("dedupe1"),
              d("dedupe2"),
            ]),
            c("deduplication-bundle-loader", [
              d("a"),
              d("b"),
            ]),
            d("error-hide-stack"),
          ]),
          c("context", [
            c("ignore-hidden-files", [
              d("folder"),
            ]),
            d("issue-524"),
            c("issue-801", [
              d("folder"),
            ]),
          ]),
          c("loaders", [
            c("_css", [
              d("folder"),
            ]),
            d("_resources"),
            c("async", [
              d("loaders"),
            ]),
            d("coffee-loader"),
            d("context"),
            d("css-loader"),
            d("jade-loader"),
            d("json-loader"),
            c("less-loader", [
              c("less", [
                d("folder"),
              ]),
            ]),
            d("module-description-file"),
            c("query", [
              d("context-query-test"),
              d("loaders"),
            ]),
            d("raw-loader"),
            d("val-loader"),
          ]),
          c("parsing", [
            d("bom"),
            d("browserify"),
            d("chunks"),
            c("context", [
              c("templates", [
                d("subdir"),
              ]),
            ]),
            c("evaluate", [
              d("resourceQuery"),
            ]),
            c("extract-amd", [
              d("templates"),
            ]),
            d("extract-labeled"),
            c("extract-require", [
              d("folder"),
            ]),
            d("filename"),
            d("hot-api"),
            d("hot-error-handler"),
            d("hot-hash"),
            d("inject-free-vars"),
            d("issue-1044"),
            c("issue-345", [
              d("abc"),
            ]),
            d("issue-387"),
            d("issue-494"),
            d("issue-551"),
            c("issue-627", [
              d("dir"),
            ]),
            d("javascript"),
            d("local-modules"),
            d("renaming"),
            d("requirejs"),
            d("typeof"),
            d("var-hiding"),
          ]),
          c("resolving", [
            d("browser-field"),
            c("context", [
              d("loaders"),
            ]),
            d("query"),
            d("single-file-module"),
          ]),
          c("runtime", [
            d("chunk-callback-order"),
            d("circular-dependencies"),
            c("error-handling", [
              d("folder"),
            ]),
            d("missing-module-exception"),
            d("module-caching"),
            d("require-function"),
          ]),
        ]),
        c("configCases", [
          c("async-commons-chunk", [
            d("duplicate"),
            d("nested"),
            d("simple"),
          ]),
          c("context-replacement", [
            c("a", [
              d("new-context"),
            ]),
            d("b"),
          ]),
          c("dedupe", [
            c("in-chunk", [
              d("a"),
              d("b"),
            ]),
          ]),
          c("delegated", [
            c("simple", [
              d("dir"),
            ]),
          ]),
          c("entry", [
            d("issue-1068"),
          ]),
          c("errors", [
            d("entry-not-found"),
          ]),
          c("externals", [
            d("optional-externals-cjs"),
            d("optional-externals-root"),
            d("optional-externals-umd"),
            d("optional-externals-umd2"),
            d("optional-externals-umd2-mixed"),
          ]),
          c("extract-text", [
            d("issue-14"),
          ]),
          c("filename-template", [
            d("module-filename-template"),
          ]),
          c("hash-length", [
            d("output-filename"),
          ]),
          c("library", [
            d("a"),
            d("b"),
          ]),
          c("parsing", [
            d("extended-api"),
            d("issue-336"),
            c("relative-filedirname", [
              d("dir"),
            ]),
            d("require.main"),
          ]),
          c("plugins", [
            d("banner-plugin"),
            d("define-plugin"),
            d("environment-plugin"),
            d("new-watching-plugin"),
            d("provide-plugin"),
            d("uglifyjs-plugin"),
            d("watch-ignore-plugin"),
          ]),
          c("simple", [
            d("empty-config"),
            d("multi-compiler"),
          ]),
          c("source-map", [
            d("exclude-chunks-source-map"),
            d("line-to-line"),
            d("relative-source-map-path"),
            d("sources-array-production"),
            d("sources-array-production-cheap-map"),
          ]),
          c("target", [
            d("buffer"),
            d("buffer-backward"),
            d("buffer-backward2"),
            d("umd-named-define"),
            d("web"),
          ]),
        ]),
        c("fixtures", [
          d("errors"),
          d("items"),
          d("lib"),
          d("nodetest"),
          d("subdir"),
        ]),
        d("hotPlayground"),
        c("statsCases", [
          d("chunks"),
          d("define-plugin"),
          d("external"),
          d("preset-errors-only"),
          d("preset-errors-only-error"),
          d("preset-minimal"),
          d("preset-minimal-simple"),
          d("preset-none"),
          d("preset-none-error"),
          d("preset-normal"),
          d("preset-verbose"),
          d("simple"),
          d("simple-more-info"),
        ]),
      ]),
      d("web_modules"),
    ]),
  ]
});
