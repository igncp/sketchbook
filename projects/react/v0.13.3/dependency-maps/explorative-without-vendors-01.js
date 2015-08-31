var n = diagrams.graph.generateNode,
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted');

// Starting from ReactClass

diagrams.graph([
  n("ReactClass", [125, ct([188, 143, 130, 279, 148, 149, 136, 135, 159])], "/classic/class/ReactClass.js"),
  n("ReactComponent", [188], "/modern/class/ReactComponent.js"),
  n("ReactCurrentOwner", [143], "/core/ReactCurrentOwner.js"),
  n("ReactElement", [130], "/classic/element/ReactElement.js"),
  n("ReactErrorUtils", [279], "/vendor/stubs/ReactErrorUtils.js"),
  n("ReactInstanceMap", [148], "/core/ReactInstanceMap.js"),
  n("ReactLifeCycle", [149], "/core/ReactLifeCycle.js"),
  n("ReactPropTypeLocations", [136], "/classic/types/ReactPropTypeLocations.js"),
  n("ReactPropTypeLocationNames", [135], "/classic/types/ReactPropTypeLocationNames.js"),
  n("ReactUpdateQueue", [159, ct([149, 143, 130, 148, 160])], "/core/ReactUpdateQueue.js"),
  n("ReactUpdates", [160, ct([213, 215, 143, 199, 155, 217])], "/core/ReactUpdates.js"),
  n("CallbackQueue", [213], "/utils/CallbackQueue.js"),
  n("PooledClass", [215], "/utils/PooledClass.js"),
  n("ReactPerf", [199], "/test/ReactPerf.js"),
  n("ReactReconciler", [155, ct([156, 131])], "/core/ReactReconciler.js"),
  n("Transaction", [217], "/utils/Transaction.js"),
  n("ReactRef", [156], "/core/ReactRef.js"),
  n("ReactElementValidator", [131], "/classic/element/ReactElementValidator.js"),
]);
