var d = diagrams.box.generateDefinition,
  c = diagrams.box.generateContainer,
  s = diagrams.shared.get;

diagrams.box({
  name: s('project') + ' api overview created manually, as opposed to an automatic (i.e. with an script) one',
  body: [
    c('src', [
      c('browser', [
        c('ui', [
          c('React.js', [
            c('Children', [
              d('map: ReactChildren.map'),
              d('forEach: ReactChildren.forEach'),
              d('count: ReactChildren.count'),
              d('only: onlyChild'),
            ]),
            d('__spread: assign', "Hook for JSX spread, don't use this for anything else."),
            d('cloneElement: cloneElement,'),
            d('Component: ReactComponent,'),
            d('constructAndRenderComponent: ReactMount.constructAndRenderComponent,'),
            d('constructAndRenderComponentByID: ReactMount.constructAndRenderComponentByID,'),
            d('createClass: ReactClass.createClass,'),
            d('createElement: createElement,'),
            d('createFactory: createFactory,'),
            d('createMixin(mixin)', 'Currently a noop. Will be used to validate and trace mixins.'),
            d('DOM: ReactDOM,'),
            d('findDOMNode: findDOMNode,'),
            d('initializeTouchEvents(shouldUseTouch)'),
            d('isValidElement: ReactElement.isValidElement,'),
            d('PropTypes: ReactPropTypes,'),
            d('render: render,'),
            d('renderToStaticMarkup: ReactServerRendering.renderToStaticMarkup,'),
            d('renderToString: ReactServerRendering.renderToString,'),
            d('unmountComponentAtNode: ReactMount.unmountComponentAtNode,'),
            d('withContext: ReactContext.withContext,'),
          ])
        ]),
      ]),
      c('core', [
        c('ReactContext.js', [
          d('current: emptyObjec'),
          d('withContext(newContext, scopedCallback', 'deprecated'),
        ]),
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
      c('event', [
        c('EventConstants.js', [
          c('PropagationPhases', 'applying keyMirror() to them', [
            d('bubbled: null'),
            d('captured: null'),
          ]),
          c('topLevelTypes', 'applying keyMirron() to them; Types of raw signals from the browser caught at the top level.', [
            d('topBlur: null'),
            d('topChange: null'),
            d('topClick: null'),
            d('topCompositionEnd: null'),
            d('topCompositionStart: null'),
            d('topCompositionUpdate: null'),
            d('topContextMenu: null'),
            d('topCopy: null'),
            d('topCut: null'),
            d('topDoubleClick: null'),
            d('topDrag: null'),
            d('topDragEnd: null'),
            d('topDragEnter: null'),
            d('topDragExit: null'),
            d('topDragLeave: null'),
            d('topDragOver: null'),
            d('topDragStart: null'),
            d('topDrop: null'),
            d('topError: null'),
            d('topFocus: null'),
            d('topInput: null'),
            d('topKeyDown: null'),
            d('topKeyPress: null'),
            d('topKeyUp: null'),
            d('topLoad: null'),
            d('topMouseDown: null'),
            d('topMouseMove: null'),
            d('topMouseOut: null'),
            d('topMouseOver: null'),
            d('topMouseUp: null'),
            d('topPaste: null'),
            d('topReset: null'),
            d('topScroll: null'),
            d('topSelectionChange: null'),
            d('topSubmit: null'),
            d('topTextInput: null'),
            d('topTouchCancel: null'),
            d('topTouchEnd: null'),
            d('topTouchMove: null'),
            d('topTouchStart: null'),
            d('topWheel: null'),
          ]),
        ]),
      ]),
      c('test', [
        c('ReactPerf.js', [
          d("measureMethods(object, objectName, methodNames)"),
          d('enableMeasure: false', "Boolean to enable/disable measurement. Set to false by default to prevent accidental logging and perf loss."),
          d('measure(objName, fnName, func)', "Use this to wrap methods you want to measure. Zero overhead in production."),
          d('storedMeasure: _noMeasure,', "Holds onto the measure function in use. By default, don't measure anything, but we'll override this if we inject a measure function."),
          c('injection', [
            d("injectMeasure(measure)"),
          ]),
        ])
      ]),
    ]),
  ]
});
