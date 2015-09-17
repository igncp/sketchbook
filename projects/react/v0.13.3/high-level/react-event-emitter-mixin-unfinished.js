var n = diagrams.graph.generateNode,
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted');


// Starting from ReactEventEmitterMixin

diagrams.graph([
  n('ReactEventEmitterMixin.handleTopLevel', [1, ct(2, "extractEvents</br>enqueueEvents</br>processEventQueue")]),
  n('EventPluginHub', [2]),
  
]);
