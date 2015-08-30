var n = diagrams.graph.generateNode,
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted');


// Starting from PooledClass

diagrams.graph([
  n("invariant", [266, cti(215)], "/vendor/core/invariant.js"),
  n("Object.assign", [195], "/stubs/Object.assign.js"),
  n("PooledClass", [215], "/utils/PooledClass.js"),
  n("ReactBrowserEventEmitter", [19], "/browser/ReactBrowserEventEmitter.js"),
  n("ReactPutListenerQueue", [21, ct([215, 19, 195])], "/browser/ReactPutListenerQueue.js"),
  n("ReactReconcileTransaction", [22, ct([213, 215, 19, 72, 21, 217, 195])], "/browser/ReactReconcileTransaction.js"),
  n("CallbackQueue", [213, ct([215, 195, 266])], "/utils/CallbackQueue.js"),
  n("ReactInputSelection", [72], "/browser/ui/ReactInputSelection.js"),
  n("Transaction", [217, ct(266)], "/utils/Transaction.js"),
  n("FallbackCompositionState", [33, ct([215, 195, 119])], "/browser/eventPlugins/FallbackCompositionState.js"),
  n("getTextContentAccessor", [119], "/browser/ui/dom/getTextContentAccessor.js"),
  n("ReactServerRenderingTransaction", [46, ct([215, 213, 21, 217, 195, 261])], "/browser/server/ReactServerRenderingTransaction.js"),
  n("emptyFunction", [261], "/vendor/core/emptyFunction.js"),
  n("SyntheticEvent", [52, ct([215, 195, 261, 117])], "/browser/syntheticEvents/SyntheticEvent.js"),
  n("getEventTarget", [117], "/browser/ui/dom/getEventTarget.js"),
  n("ReactEventListener", [70, ct([215, 278, 249, 147, 73, 160, 195, 117, 258])], "/browser/ui/ReactEventListener.js"),
  n("EventListener", [278], "/vendor/stubs/EventListener.js"),
  n("ExecutionEnvironment", [249], "/vendor/core/ExecutionEnvironment.js"),
  n("ReactInstanceHandles", [147], "/core/ReactInstanceHandles.js"),
  n("ReactMount", [73], "/browser/ui/ReactMount.js"),
  n("ReactUpdates", [160], "/core/ReactUpdates.js"),
  n("getUnboundedScrollPosition", [258], "/vendor/core/dom/getUnboundedScrollPosition.js"),
]);
