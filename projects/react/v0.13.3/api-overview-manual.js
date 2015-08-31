var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' api overview created manually, as opposed to an automatic (i.e. with an script) one',
  body: [
    c('src', [
      c('core', [
        c('ReactLifeCycle.js', [
          d("currentlyMountingInstance: null"),
          d("currentlyUnmountingInstance: null"),
        ]),
        c('ReactReconciler.js', [
          d("mountComponent(internalInstance, rootID, transaction, context)"),
          d("unmountComponent(internalInstance)"),
          d("receiveComponent(internalInstance, nextElement, transaction, context)"),
          d("performUpdateIfNecessary(internalInstance,transaction)"),
        ]),
        c('ReactUpdates.js', [
          d("ReactReconcileTransaction: null,"),
          d("batchedUpdates(callback, a, b, c, d)"),
          d("enqueueUpdate(component)"),
          d("flushBatchedUpdates()"),
          d("injection = { injectReconcileTransaction(ReconcileTransaction), injectBatchingStrategy(_batchingStrategy) }"),
          d("asap(callback, context)"),
        ]),
      ]),
    ]),
  ]
});
