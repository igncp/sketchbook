var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' glossary',
  body: [
    c('Pending', [
      c('Compiler', [
        c('NormalModuleFactory', [
          c('NormalModule', [
            'webpack-core/lib/NormalModuleMixin',
            'webpack-core/lib/...Source',
          ]),
          'webpack-core/lib/LoadersList',
        ]),
        c('Parser', [
          'BasicEvaluatedExpression'
        ]),
        c('Compilation', [
          "./MainTemplate",
          "./EntryModuleNotFoundError",
          "./ChunkTemplate",
          "./HotUpdateChunkTemplate",
          "./ModuleTemplate",
          "./Dependency",
        ]),
      ]),
      'Compilers resolvers',
      'WebpackOptionsApply',
      'WebpackOptionsDefaulter',
      '-',
      'watcher aggregated',
      'dependency block: variables, dependencies and blocks',
      'alternatives, seen in ContextModuleFactory',
      'Magic Number: 160 in reduce of ContextModule.js',
      'hot update',
    ]),
    c('General', [
      d('chunk', "'webpack allows to split your codebase into chunks. Chunks are loaded on demand. This reduces initial loading time.'"),
      d('hash', "Item created by the native module `crypto`. crypto.createHash: 'Creates and returns a hash object, a cryptographic hash with the given algorithm which can be used to generate hash digests.' hash.digest: 'Calculates the digest of all of the passed data to be hashed. The encoding can be 'hex', 'binary' or 'base64'.'"),
      c('parser / js terminology', [
        d('unary operator', 'e.g. typeof, delete'),
      ]),
    ]),
    c('Structured', [
      // d("APIPlugin.js"),
      // d("AbstractPlugin.js"),
      // d("AmdMainTemplatePlugin.js"),
      d("ArrayMap.js", "Data structure that consist in an object with a keys and a values properties, so when a key-value entry is added, they shared the same index. It has a getter, setter, remove and clone. Used for the dependencyFactories and the dependencyTemplates members in a Compilation instance."),
      d('AsyncDependenciesBlock.js', "Extends DependenciesBlock. Renames the member `chunk` to `chunks` as it is an array. It overwrittes the updateHash method mapping all the chunks."),
      // d("AutomaticPrefetchPlugin.js"),
      // d("BannerPlugin.js"),
      // d("BasicEvaluatedExpression.js"),
      // d("CachePlugin.js"),
      // d("CaseSensitiveModulesWarning.js"),
      d("Chunk.js", "Represents a part of code that will be loaded asynchronously. It has a hierarchical architecture, being possible to have multiple parents. A chunk can be intergrated (`integrate`) with other chunk. A chunk can not be integrated to an initial chunk, and if it is initial itself, it can only be integrated to a monoparent direct children, otherwise it can."),
      d("ChunkRenderError.js", "Simple class that extends Error and saves in its state the provided file, chunk and error."),
      // d("ChunkTemplate.js"),
      // d("CompatibilityPlugin.js"),
      // d("Compilation.js"),
      // d("Compiler.js"),
      // d("ConcatSource.js"),
      // d("ConstPlugin.js"),
      d('ContextModule.js', "The contexts has to do with requires using a dynamic value, e.g. (require(name + '.js')). It prints some extra source using code in a string, and uses OriginalSource or RawSource depending on the value of useSourceMap."),
      d('ContextModuleFactory.js', "Has the member `resolvers`. It has two large methods, `create` and `resolveDependencies`. In the `create` method, it uses async approaches (waterfall and parallel) to finally return a new ContextModule. It uses plugins to hook into 'before-resolve' and 'after-resolve'. In `resolveDependencies`, it follows a recursive approach to read the files in directories and hooks into the 'alternatives' event. At the end, it calls the provided callback with an error (if any) and with an array of alternatives."),
      // d("ContextReplacementPlugin.js"),
      d("CriticalDependenciesWarning.js", "Extends error, adds to the message the depndencies that has the `critical` member or the `loc` (location) member. Used just in the compilation."),
      // d("DefinePlugin.js"),
      // d("DelegatedModule.js"),
      // d("DelegatedModuleFactoryPlugin.js"),
      // d("DelegatedPlugin.js"),
      d("DependenciesBlock.js", "It consists of dependencies, blocks and variables. All of them have the `updateHash` method."),
      d("DependenciesBlockVariable.js", "Consists of name, expression and dependencies. It is related with updating sources and dependencies."),
      d('Dependency.js', 'Its main member is module. When disconnecting, it sets its module to null. Its main method is compareLocations which compares two items returning always 0, 1 or -1.'),
      // d("DllEntryPlugin.js"),
      // d("DllModule.js"),
      // d("DllModuleFactory.js"),
      // d("DllPlugin.js"),
      // d("DllReferencePlugin.js"),
      d("EntryModuleNotFoundError.js", "Simple class that extends Error that customizes the message displayed."),
      // d("EntryOptionPlugin.js"),
      // d("EnvironmentPlugin.js"),
      // d("EvalDevToolModulePlugin.js"),
      // d("EvalDevToolModuleTemplatePlugin.js"),
      // d("EvalSourceMapDevToolModuleTemplatePlugin.js"),
      // d("EvalSourceMapDevToolPlugin.js"),
      // d("ExtendedAPIPlugin.js"),
      // d("ExternalModule.js"),
      // d("ExternalModuleFactoryPlugin.js"),
      // d("ExternalsPlugin.js"),
      // d("FunctionModulePlugin.js"),
      // d("FunctionModuleTemplatePlugin.js"),
      // d("HotModuleReplacement.runtime.js"),
      // d("HotModuleReplacementPlugin.js"),
      // d("HotUpdateChunkTemplate.js"),
      d("IgnorePlugin.js", "'Don’t generate modules for requests matching the provided RegExp.' It uses `normal-module-factory` and `context-module-factory` `before-resolve` hook to check the provided regexp to handle keep passing the result or not through the toolchain."),
      // d("JsonpChunkTemplatePlugin.js"),
      // d("JsonpExportMainTemplatePlugin.js"),
      // d("JsonpHotUpdateChunkTemplatePlugin.js"),
      // d("JsonpMainTemplate.runtime.js"),
      // d("JsonpMainTemplatePlugin.js"),
      // d("JsonpTemplatePlugin.js"),
      // d("LibManifestPlugin.js"),
      // d("LibraryTemplatePlugin.js"),
      // d("LoaderTargetPlugin.js"),
      // d("MainTemplate.js"),
      // d("MemoryOutputFileSystem.js"),
      d("Module.js", "Extends DependenciesBlock. Significant members are context, reasons, id or chunks."),
      // d("ModuleFilenameHelpers.js"),
      d("ModuleNotFoundError.js", "Simple class that extends Error that customizes the message displayed."),
      d('ModuleParseError.js', "Extends the JavaScript Error constructor function, customizing the error message depending on several conditions. For example, the main message: 'You may need an appropriate loader to handle this file type.'"),
      // d("ModuleParserHelpers.js"),
      d("ModuleReason.js", "Saves the state of a module with a dependency"),
      // d("ModuleTemplate.js"),
      // d("MovedToPluginWarningPlugin.js"),
      d("MultiCompiler.js", "Defines an interface for dealing with arrays of compilers. It also defines a respective to Watching class, called MultiWatching, and MultiStats."),
      // d("MultiEntryPlugin.js"),
      // d("MultiModule.js"),
      // d("MultiModuleFactory.js"),
      // d("NamedModulesPlugin.js"),
      // d("NewWatchingPlugin.js"),
      // d("NoErrorsPlugin.js"),
      // d("NodeStuffPlugin.js"),
      // d("NormalModule.js"),
      // d("NormalModuleFactory.js"),
      // d("NormalModuleReplacementPlugin.js"),
      // d("NullFactory.js"),
      // d("OldWatchingPlugin.js"),
      // d("OptionsApply.js"),
      // d("OriginalSource.js"),
      // d("Parser.js"),
      // d("PrefetchPlugin.js"),
      // d("ProgressPlugin.js"),
      // d("ProvidePlugin.js"),
      d('RawModule.js', "Extends Module. Noticeable members are `readableIdentifierStr` and `identifierStr`. In contraposition to NormalModule, the method `getAllModuleDependencies` returns always an empty array, so it looks like a RawModule never has dependencies. The same happens with `getTemplateArguments`. It is only used once (in NormalModuleFactory) and in all of the arguments the `ignore` keyword appears inside a string."),
      // d("RawSource.js"),
      // d("RecordIdsPlugin.js"),
      d("RequestShortener.js", "When instantiated, it creates some regex to access the provided directory (e.g. `currentDirectoryRegExp` and `parentDirectoryRegExp`). Then, in the exposed `shorted` method, it replaces some parts of the request for keys known like `(webpack)`."),
      // d("RequireJsStuffPlugin.js"),
      // d("ResolverPlugin.js"),
      // d("SetVarMainTemplatePlugin.js"),
      // d("SingleEntryPlugin.js"),
      // d("Source.js"),
      // d("SourceMapDevToolModuleOptionsPlugin.js"),
      // d("SourceMapDevToolPlugin.js"),
      // d("SourceMapSource.js"),
      d("Stats.js", "The most important methods are `toJson` and `jsonToString` (static). In `toJson` it returns an object with a lot of values from the compilation, like errors, warnings, the chunks, etc. This stats are the ones passed to the callback by the compiler once it has finished."),
      d("Template.js", "Class that handles source code operations. It has these static methods: getFunctionContent, toIdentifier and these prototype methods indent, prefix, asString, getModulesArrayBounds, renderChunkModules."),
      // d("TemplatedPathPlugin.js"),
      // d("UmdMainTemplatePlugin.js"),
      // d("UnsupportedFeatureWarning.js"),
      // d("WarnCaseSensitiveModulesPlugin.js"),
      // d("WatchIgnorePlugin.js"),
      // d("WebpackOptionsApply.js"),
      // d("WebpackOptionsDefaulter.js"),
      // c("dependencies", [
      //   d("AMDDefineDependency.js"),
      //   d("AMDDefineDependencyParserPlugin.js"),
      //   d("AMDPlugin.js"),
      //   d("AMDRequireArrayDependency.js"),
      //   d("AMDRequireContextDependency.js"),
      //   d("AMDRequireDependenciesBlock.js"),
      //   d("AMDRequireDependenciesBlockParserPlugin.js"),
      //   d("AMDRequireDependency.js"),
      //   d("AMDRequireItemDependency.js"),
      //   d("CommonJsPlugin.js"),
      //   d("CommonJsRequireContextDependency.js"),
      //   d("CommonJsRequireDependency.js"),
      //   d("CommonJsRequireDependencyParserPlugin.js"),
      //   d("ConstDependency.js"),
      //   d("ContextDependency.js"),
      //   d("ContextDependencyHelpers.js"),
      //   d("ContextDependencyTemplateAsId.js"),
      //   d("ContextDependencyTemplateAsRequireCall.js"),
      d("ContextElementDependency.js", "It extends module dependency and it only sets the `type` in the prototype equal to 'context element'"),
      //   d("DelegatedSourceDependency.js"),
      //   d("DepBlockHelpers.js"),
      //   d("DllEntryDependency.js"),
      //   d("LabeledExportsDependency.js"),
      //   d("LabeledModuleDependency.js"),
      //   d("LabeledModuleDependencyParserPlugin.js"),
      //   d("LabeledModulesPlugin.js"),
      //   d("LoaderDependency.js"),
      //   d("LoaderPlugin.js"),
      //   d("LocalModule.js"),
      //   d("LocalModuleDependency.js"),
      //   d("LocalModulesHelpers.js"),
      d('ModuleDependency.js', "Extends Dependency. Its main member is `resource`, provided in the constructor, which is used in the overwritten method `isEqualResource`, which checks if other item is of the same type and has the same request."),
      //   d("ModuleDependencyTemplateAsId.js"),
      //   d("ModuleDependencyTemplateAsRequireId.js"),
      //   d("ModuleHotAcceptDependency.js"),
      //   d("ModuleHotDeclineDependency.js"),
      //   d("MultiEntryDependency.js"),
      //   d("NullDependency.js"),
      //   d("NullDependencyTemplate.js"),
      //   d("PrefetchDependency.js"),
      //   d("RequireContextDependency.js"),
      //   d("RequireContextDependencyParserPlugin.js"),
      //   d("RequireContextPlugin.js"),
      //   d("RequireEnsureDependenciesBlock.js"),
      //   d("RequireEnsureDependenciesBlockParserPlugin.js"),
      //   d("RequireEnsureDependency.js"),
      //   d("RequireEnsureItemDependency.js"),
      //   d("RequireEnsurePlugin.js"),
      //   d("RequireHeaderDependency.js"),
      //   d("RequireIncludeDependency.js"),
      //   d("RequireIncludeDependencyParserPlugin.js"),
      //   d("RequireIncludePlugin.js"),
      //   d("RequireResolveContextDependency.js"),
      //   d("RequireResolveDependency.js"),
      //   d("RequireResolveDependencyParserPlugin.js"),
      //   d("RequireResolveHeaderDependency.js"),
      //   d("SingleEntryDependency.js"),
      d('TemplateArgumentDependency.js', "Class in which the signinficant members are name, dep and Template. The latter is a plugin-like class (with the apply method) which accepts the following arguments: dep, source, outputOptions, requestShortener, dependencyTemplates."),
      //   d("WebpackMissingModule.js"),
      //   d("getFunctionExpression.js"),
      // ]),
      c("node", [
        //   d("NodeChunkTemplatePlugin.js"),
        d("NodeEnvironmentPlugin.js", "Plugin to attach to the compiler several filesystem-related instances, with special significance of the inputFileSystem, which is cached."),
        //   d("NodeHotUpdateChunkTemplatePlugin.js"),
        //   d("NodeMainTemplate.runtime.js"),
        //   d("NodeMainTemplateAsync.runtime.js"),
        //   d("NodeMainTemplatePlugin.js"),
        d("NodeOutputFileSystem.js", "It is an interface to several modules (e.g. mkdirp, path, fs) exposing a few functions to handle common output generation."),
        //   d("NodeSourcePlugin.js"),
        //   d("NodeTargetPlugin.js"),
        //   d("NodeTemplatePlugin.js"),
        d("NodeWatchFileSystem.js", "It uses the watchpack module to watch files and dirs changes to run a callback."),
        //   d("OldNodeWatchFileSystem.js"),
      ]),
      // c("optimize", [
      //   d("AggressiveMergingPlugin.js"),
      //   d("CommonsChunkPlugin.js"),
      //   d("DedupePlugin.js"),
      //   d("FlagIncludedChunksPlugin.js"),
      //   d("LimitChunkCountPlugin.js"),
      //   d("MergeDuplicateChunksPlugin.js"),
      //   d("MinChunkSizePlugin.js"),
      //   d("OccurenceOrderPlugin.js"),
      //   d("OccurrenceOrderPlugin.js"),
      //   d("RemoveEmptyChunksPlugin.js"),
      //   d("RemoveParentModulesPlugin.js"),
      //   d("UglifyJsPlugin.js"),
      // ]),
      d("removeAndDo.js", "Removes a thing from a collection if present, and if removed, calls a method of that thing."),
      // c("web", [
      //   d("WebEnvironmentPlugin.js"),
      // ]),
      // d("webpack.js"),
      // d("webpack.web.js"),
      // c("webworker", [
      //   d("WebWorkerChunkTemplatePlugin.js"),
      //   d("WebWorkerMainTemplatePlugin.js"),
      //   d("WebWorkerTemplatePlugin.js"),
      // ]),
    ]),
  ],
});
