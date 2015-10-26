var n = diagrams.graph.generateNode,
  // nl = diagrams.graph.generateNodeWithTextAsTargetLink('RELATIVE_URL_PATH'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted'),
  config = {};

config.info = ["Internal Dependencies starting from lib/webpack.js",
  "It doesn't take into account the attached modules with `defineProperty`. Then nodes done till now are: webpack, Compiler"];
config[diagrams.graph.configurationKeys.SHY_CONNECTIONS] = false;

diagrams.graph([
  n("webpack", [196, 15, 70, 171, 108, 109], "/webpack.js"),
  n("Compiler", [15, 14, 85, 79, 19], "/Compiler.js"),
  n("MultiCompiler", [70], "/MultiCompiler.js"),
  n("NodeEnvironmentPlugin", [171], "/node/NodeEnvironmentPlugin.js"),
  n("WebpackOptionsApply", [108], "/WebpackOptionsApply.js"),
  n("WebpackOptionsDefaulter", [109], "/WebpackOptionsDefaulter.js"),
  n("Compilation", [14], "/Compilation.js"),
  n("Parser", [85], "/Parser.js"),
  n("NormalModuleFactory", [79], "/NormalModuleFactory.js"),
  n("ContextModuleFactory", [19], "/ContextModuleFactory.js"),
  // n("APIPlugin", [0], "/APIPlugin.js"),
  // n("AbstractPlugin", [1], "/AbstractPlugin.js"),
  // n("AmdMainTemplatePlugin", [2], "/AmdMainTemplatePlugin.js"),
  // n("ArrayMap", [3], "/ArrayMap.js"),
  // n("AsyncDependenciesBlock", [4], "/AsyncDependenciesBlock.js"),
  // n("AutomaticPrefetchPlugin", [5], "/AutomaticPrefetchPlugin.js"),
  // n("BannerPlugin", [6], "/BannerPlugin.js"),
  // n("BasicEvaluatedExpression", [7], "/BasicEvaluatedExpression.js"),
  // n("CachePlugin", [8], "/CachePlugin.js"),
  // n("CaseSensitiveModulesWarning", [9], "/CaseSensitiveModulesWarning.js"),
  // n("Chunk", [10], "/Chunk.js"),
  // n("ChunkRenderError", [11], "/ChunkRenderError.js"),
  // n("ChunkTemplate", [12], "/ChunkTemplate.js"),
  // n("CompatibilityPlugin", [13], "/CompatibilityPlugin.js"),
  // n("ConcatSource", [16], "/ConcatSource.js"),
  // n("ConstPlugin", [17], "/ConstPlugin.js"),
  // n("ContextModule", [18], "/ContextModule.js"),
  // n("ContextReplacementPlugin", [20], "/ContextReplacementPlugin.js"),
  // n("CriticalDependenciesWarning", [21], "/CriticalDependenciesWarning.js"),
  // n("DefinePlugin", [22], "/DefinePlugin.js"),
  // n("DelegatedModule", [23], "/DelegatedModule.js"),
  // n("DelegatedModuleFactoryPlugin", [24], "/DelegatedModuleFactoryPlugin.js"),
  // n("DelegatedPlugin", [25], "/DelegatedPlugin.js"),
  // n("DependenciesBlock", [26], "/DependenciesBlock.js"),
  // n("DependenciesBlockVariable", [27], "/DependenciesBlockVariable.js"),
  // n("Dependency", [28], "/Dependency.js"),
  // n("DllEntryPlugin", [29], "/DllEntryPlugin.js"),
  // n("DllModule", [30], "/DllModule.js"),
  // n("DllModuleFactory", [31], "/DllModuleFactory.js"),
  // n("DllPlugin", [32], "/DllPlugin.js"),
  // n("DllReferencePlugin", [33], "/DllReferencePlugin.js"),
  // n("EntryModuleNotFoundError", [34], "/EntryModuleNotFoundError.js"),
  // n("EntryOptionPlugin", [35], "/EntryOptionPlugin.js"),
  // n("EnvironmentPlugin", [36], "/EnvironmentPlugin.js"),
  // n("EvalDevToolModulePlugin", [37], "/EvalDevToolModulePlugin.js"),
  // n("EvalDevToolModuleTemplatePlugin", [38], "/EvalDevToolModuleTemplatePlugin.js"),
  // n("EvalSourceMapDevToolModuleTemplatePlugin", [39], "/EvalSourceMapDevToolModuleTemplatePlugin.js"),
  // n("EvalSourceMapDevToolPlugin", [40], "/EvalSourceMapDevToolPlugin.js"),
  // n("ExtendedAPIPlugin", [41], "/ExtendedAPIPlugin.js"),
  // n("ExternalModule", [42], "/ExternalModule.js"),
  // n("ExternalModuleFactoryPlugin", [43], "/ExternalModuleFactoryPlugin.js"),
  // n("ExternalsPlugin", [44], "/ExternalsPlugin.js"),
  // n("FunctionModulePlugin", [45], "/FunctionModulePlugin.js"),
  // n("FunctionModuleTemplatePlugin", [46], "/FunctionModuleTemplatePlugin.js"),
  // n("HotModuleReplacement.runtime", [47], "/HotModuleReplacement.runtime.js"),
  // n("HotModuleReplacementPlugin", [48], "/HotModuleReplacementPlugin.js"),
  // n("HotUpdateChunkTemplate", [49], "/HotUpdateChunkTemplate.js"),
  // n("IgnorePlugin", [50], "/IgnorePlugin.js"),
  // n("JsonpChunkTemplatePlugin", [51], "/JsonpChunkTemplatePlugin.js"),
  // n("JsonpExportMainTemplatePlugin", [52], "/JsonpExportMainTemplatePlugin.js"),
  // n("JsonpHotUpdateChunkTemplatePlugin", [53], "/JsonpHotUpdateChunkTemplatePlugin.js"),
  // n("JsonpMainTemplate.runtime", [54], "/JsonpMainTemplate.runtime.js"),
  // n("JsonpMainTemplatePlugin", [55], "/JsonpMainTemplatePlugin.js"),
  // n("JsonpTemplatePlugin", [56], "/JsonpTemplatePlugin.js"),
  // n("LibManifestPlugin", [57], "/LibManifestPlugin.js"),
  // n("LibraryTemplatePlugin", [58], "/LibraryTemplatePlugin.js"),
  // n("LoaderTargetPlugin", [59], "/LoaderTargetPlugin.js"),
  // n("MainTemplate", [60], "/MainTemplate.js"),
  // n("MemoryOutputFileSystem", [61], "/MemoryOutputFileSystem.js"),
  // n("Module", [62], "/Module.js"),
  // n("ModuleFilenameHelpers", [63], "/ModuleFilenameHelpers.js"),
  // n("ModuleNotFoundError", [64], "/ModuleNotFoundError.js"),
  // n("ModuleParseError", [65], "/ModuleParseError.js"),
  // n("ModuleParserHelpers", [66], "/ModuleParserHelpers.js"),
  // n("ModuleReason", [67], "/ModuleReason.js"),
  // n("ModuleTemplate", [68], "/ModuleTemplate.js"),
  // n("MovedToPluginWarningPlugin", [69], "/MovedToPluginWarningPlugin.js"),
  // n("MultiEntryPlugin", [71], "/MultiEntryPlugin.js"),
  // n("MultiModule", [72], "/MultiModule.js"),
  // n("MultiModuleFactory", [73], "/MultiModuleFactory.js"),
  // n("NamedModulesPlugin", [74], "/NamedModulesPlugin.js"),
  // n("NewWatchingPlugin", [75], "/NewWatchingPlugin.js"),
  // n("NoErrorsPlugin", [76], "/NoErrorsPlugin.js"),
  // n("NodeStuffPlugin", [77], "/NodeStuffPlugin.js"),
  // n("NormalModule", [78], "/NormalModule.js"),
  // n("NormalModuleReplacementPlugin", [80], "/NormalModuleReplacementPlugin.js"),
  // n("NullFactory", [81], "/NullFactory.js"),
  // n("OldWatchingPlugin", [82], "/OldWatchingPlugin.js"),
  // n("OptionsApply", [83], "/OptionsApply.js"),
  // n("OriginalSource", [84], "/OriginalSource.js"),
  // n("PrefetchPlugin", [86], "/PrefetchPlugin.js"),
  // n("ProgressPlugin", [87], "/ProgressPlugin.js"),
  // n("ProvidePlugin", [88], "/ProvidePlugin.js"),
  // n("RawModule", [89], "/RawModule.js"),
  // n("RawSource", [90], "/RawSource.js"),
  // n("RecordIdsPlugin", [91], "/RecordIdsPlugin.js"),
  // n("RequestShortener", [92], "/RequestShortener.js"),
  // n("RequireJsStuffPlugin", [93], "/RequireJsStuffPlugin.js"),
  // n("ResolverPlugin", [94], "/ResolverPlugin.js"),
  // n("SetVarMainTemplatePlugin", [95], "/SetVarMainTemplatePlugin.js"),
  // n("SingleEntryPlugin", [96], "/SingleEntryPlugin.js"),
  // n("Source", [97], "/Source.js"),
  // n("SourceMapDevToolModuleOptionsPlugin", [98], "/SourceMapDevToolModuleOptionsPlugin.js"),
  // n("SourceMapDevToolPlugin", [99], "/SourceMapDevToolPlugin.js"),
  // n("SourceMapSource", [100], "/SourceMapSource.js"),
  // n("Stats", [101], "/Stats.js"),
  // n("Template", [102], "/Template.js"),
  // n("TemplatedPathPlugin", [103], "/TemplatedPathPlugin.js"),
  // n("UmdMainTemplatePlugin", [104], "/UmdMainTemplatePlugin.js"),
  // n("UnsupportedFeatureWarning", [105], "/UnsupportedFeatureWarning.js"),
  // n("WarnCaseSensitiveModulesPlugin", [106], "/WarnCaseSensitiveModulesPlugin.js"),
  // n("WatchIgnorePlugin", [107], "/WatchIgnorePlugin.js"),
  // n("AMDDefineDependency", [110], "/dependencies/AMDDefineDependency.js"),
  // n("AMDDefineDependencyParserPlugin", [111], "/dependencies/AMDDefineDependencyParserPlugin.js"),
  // n("AMDPlugin", [112], "/dependencies/AMDPlugin.js"),
  // n("AMDRequireArrayDependency", [113], "/dependencies/AMDRequireArrayDependency.js"),
  // n("AMDRequireContextDependency", [114], "/dependencies/AMDRequireContextDependency.js"),
  // n("AMDRequireDependenciesBlock", [115], "/dependencies/AMDRequireDependenciesBlock.js"),
  // n("AMDRequireDependenciesBlockParserPlugin", [116], "/dependencies/AMDRequireDependenciesBlockParserPlugin.js"),
  // n("AMDRequireDependency", [117], "/dependencies/AMDRequireDependency.js"),
  // n("AMDRequireItemDependency", [118], "/dependencies/AMDRequireItemDependency.js"),
  // n("CommonJsPlugin", [119], "/dependencies/CommonJsPlugin.js"),
  // n("CommonJsRequireContextDependency", [120], "/dependencies/CommonJsRequireContextDependency.js"),
  // n("CommonJsRequireDependency", [121], "/dependencies/CommonJsRequireDependency.js"),
  // n("CommonJsRequireDependencyParserPlugin", [122], "/dependencies/CommonJsRequireDependencyParserPlugin.js"),
  // n("ConstDependency", [123], "/dependencies/ConstDependency.js"),
  // n("ContextDependency", [124], "/dependencies/ContextDependency.js"),
  // n("ContextDependencyHelpers", [125], "/dependencies/ContextDependencyHelpers.js"),
  // n("ContextDependencyTemplateAsId", [126], "/dependencies/ContextDependencyTemplateAsId.js"),
  // n("ContextDependencyTemplateAsRequireCall", [127], "/dependencies/ContextDependencyTemplateAsRequireCall.js"),
  // n("ContextElementDependency", [128], "/dependencies/ContextElementDependency.js"),
  // n("DelegatedSourceDependency", [129], "/dependencies/DelegatedSourceDependency.js"),
  // n("DepBlockHelpers", [130], "/dependencies/DepBlockHelpers.js"),
  // n("DllEntryDependency", [131], "/dependencies/DllEntryDependency.js"),
  // n("LabeledExportsDependency", [132], "/dependencies/LabeledExportsDependency.js"),
  // n("LabeledModuleDependency", [133], "/dependencies/LabeledModuleDependency.js"),
  // n("LabeledModuleDependencyParserPlugin", [134], "/dependencies/LabeledModuleDependencyParserPlugin.js"),
  // n("LabeledModulesPlugin", [135], "/dependencies/LabeledModulesPlugin.js"),
  // n("LoaderDependency", [136], "/dependencies/LoaderDependency.js"),
  // n("LoaderPlugin", [137], "/dependencies/LoaderPlugin.js"),
  // n("LocalModule", [138], "/dependencies/LocalModule.js"),
  // n("LocalModuleDependency", [139], "/dependencies/LocalModuleDependency.js"),
  // n("LocalModulesHelpers", [140], "/dependencies/LocalModulesHelpers.js"),
  // n("ModuleDependency", [141], "/dependencies/ModuleDependency.js"),
  // n("ModuleDependencyTemplateAsId", [142], "/dependencies/ModuleDependencyTemplateAsId.js"),
  // n("ModuleDependencyTemplateAsRequireId", [143], "/dependencies/ModuleDependencyTemplateAsRequireId.js"),
  // n("ModuleHotAcceptDependency", [144], "/dependencies/ModuleHotAcceptDependency.js"),
  // n("ModuleHotDeclineDependency", [145], "/dependencies/ModuleHotDeclineDependency.js"),
  // n("MultiEntryDependency", [146], "/dependencies/MultiEntryDependency.js"),
  // n("NullDependency", [147], "/dependencies/NullDependency.js"),
  // n("NullDependencyTemplate", [148], "/dependencies/NullDependencyTemplate.js"),
  // n("PrefetchDependency", [149], "/dependencies/PrefetchDependency.js"),
  // n("RequireContextDependency", [150], "/dependencies/RequireContextDependency.js"),
  // n("RequireContextDependencyParserPlugin", [151], "/dependencies/RequireContextDependencyParserPlugin.js"),
  // n("RequireContextPlugin", [152], "/dependencies/RequireContextPlugin.js"),
  // n("RequireEnsureDependenciesBlock", [153], "/dependencies/RequireEnsureDependenciesBlock.js"),
  // n("RequireEnsureDependenciesBlockParserPlugin", [154], "/dependencies/RequireEnsureDependenciesBlockParserPlugin.js"),
  // n("RequireEnsureDependency", [155], "/dependencies/RequireEnsureDependency.js"),
  // n("RequireEnsureItemDependency", [156], "/dependencies/RequireEnsureItemDependency.js"),
  // n("RequireEnsurePlugin", [157], "/dependencies/RequireEnsurePlugin.js"),
  // n("RequireHeaderDependency", [158], "/dependencies/RequireHeaderDependency.js"),
  // n("RequireIncludeDependency", [159], "/dependencies/RequireIncludeDependency.js"),
  // n("RequireIncludeDependencyParserPlugin", [160], "/dependencies/RequireIncludeDependencyParserPlugin.js"),
  // n("RequireIncludePlugin", [161], "/dependencies/RequireIncludePlugin.js"),
  // n("RequireResolveContextDependency", [162], "/dependencies/RequireResolveContextDependency.js"),
  // n("RequireResolveDependency", [163], "/dependencies/RequireResolveDependency.js"),
  // n("RequireResolveDependencyParserPlugin", [164], "/dependencies/RequireResolveDependencyParserPlugin.js"),
  // n("RequireResolveHeaderDependency", [165], "/dependencies/RequireResolveHeaderDependency.js"),
  // n("SingleEntryDependency", [166], "/dependencies/SingleEntryDependency.js"),
  // n("TemplateArgumentDependency", [167], "/dependencies/TemplateArgumentDependency.js"),
  // n("WebpackMissingModule", [168], "/dependencies/WebpackMissingModule.js"),
  // n("getFunctionExpression", [169], "/dependencies/getFunctionExpression.js"),
  // n("NodeChunkTemplatePlugin", [170], "/node/NodeChunkTemplatePlugin.js"),
  // n("NodeHotUpdateChunkTemplatePlugin", [172], "/node/NodeHotUpdateChunkTemplatePlugin.js"),
  // n("NodeMainTemplate.runtime", [173], "/node/NodeMainTemplate.runtime.js"),
  // n("NodeMainTemplateAsync.runtime", [174], "/node/NodeMainTemplateAsync.runtime.js"),
  // n("NodeMainTemplatePlugin", [175], "/node/NodeMainTemplatePlugin.js"),
  // n("NodeOutputFileSystem", [176], "/node/NodeOutputFileSystem.js"),
  // n("NodeSourcePlugin", [177], "/node/NodeSourcePlugin.js"),
  // n("NodeTargetPlugin", [178], "/node/NodeTargetPlugin.js"),
  // n("NodeTemplatePlugin", [179], "/node/NodeTemplatePlugin.js"),
  // n("NodeWatchFileSystem", [180], "/node/NodeWatchFileSystem.js"),
  // n("OldNodeWatchFileSystem", [181], "/node/OldNodeWatchFileSystem.js"),
  // n("AggressiveMergingPlugin", [182], "/optimize/AggressiveMergingPlugin.js"),
  // n("CommonsChunkPlugin", [183], "/optimize/CommonsChunkPlugin.js"),
  // n("DedupePlugin", [184], "/optimize/DedupePlugin.js"),
  // n("FlagIncludedChunksPlugin", [185], "/optimize/FlagIncludedChunksPlugin.js"),
  // n("LimitChunkCountPlugin", [186], "/optimize/LimitChunkCountPlugin.js"),
  // n("MergeDuplicateChunksPlugin", [187], "/optimize/MergeDuplicateChunksPlugin.js"),
  // n("MinChunkSizePlugin", [188], "/optimize/MinChunkSizePlugin.js"),
  // n("OccurenceOrderPlugin", [189], "/optimize/OccurenceOrderPlugin.js"),
  // n("OccurrenceOrderPlugin", [190], "/optimize/OccurrenceOrderPlugin.js"),
  // n("RemoveEmptyChunksPlugin", [191], "/optimize/RemoveEmptyChunksPlugin.js"),
  // n("RemoveParentModulesPlugin", [192], "/optimize/RemoveParentModulesPlugin.js"),
  // n("UglifyJsPlugin", [193], "/optimize/UglifyJsPlugin.js"),
  // n("removeAndDo", [194], "/removeAndDo.js"),
  // n("WebEnvironmentPlugin", [195], "/web/WebEnvironmentPlugin.js"),
  // n("webpack.web", [197], "/webpack.web.js"),
  // n("WebWorkerChunkTemplatePlugin", [198], "/webworker/WebWorkerChunkTemplatePlugin.js"),
  // n("WebWorkerMainTemplatePlugin", [199], "/webworker/WebWorkerMainTemplatePlugin.js"),
  // n("WebWorkerTemplatePlugin", [200], "/webworker/WebWorkerTemplatePlugin.js")
], config);
