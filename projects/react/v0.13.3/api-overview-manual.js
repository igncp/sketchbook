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
          ]),
          c('ReactMount.js', [
            d("_instancesByReactRootID: instancesByReactRootID,"),
            d("_mountImageIntoNode(markup, container, shouldReuseMarkup)"),
            d("_registerComponent(nextComponent, container)"),
            d("_renderNewRootComponent(nextElement,container,shouldReuseMarkup) {"),
            d("_updateRootComponent(prevComponent,nextElement,container,callback)"),
            d("constructAndRenderComponent(constructor, props, container)"),
            d("constructAndRenderComponentByID(constructor, props, id)"),
            d("findComponentRoot(ancestorNode, targetID)"),
            d("findReactContainerForID(id)"),
            d("findReactNodeByID(id)"),
            d("getFirstReactDOM(node)"),
            d("getID: getID"),
            d("getNode: getNode"),
            d("getNodeFromInstance: getNodeFromInstance"),
            d("getReactRootID: getReactRootID"),
            d("isRenderedByReact(node)"),
            d("purgeID: purgeID"),
            d("registerContainer(container)"),
            d("render(nextElement, container, callback)"),
            d("scrollMonitor(container, renderCallback)"),
            d("setID: setID"),
            d("unmountComponentAtNode(container)"),
            d("unmountComponentFromNode(instance, container)"),
          ]),
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
        c('EventPluginRegistry', [
          d('plugins: []', 'Ordered list of injected plugins.'),
          d('eventNameDispatchConfigs: {}', 'Mapping from event name to dispatch config'),
          d('registrationNameModules: {}', 'Mapping from registration name to plugin module'),
          d('registrationNameDependencies: {}', 'Mapping from registration name to event name'),
          d('injectEventPluginOrder: function(InjectedEventPluginOrder) ', 'Injects an ordering of plugins (by plugin name). This allows the ordering to be decoupled from injection of the actual plugins so that ordering is always deterministic regardless of packaging, on-the-fly injection, etc.'),
          d('injectEventPluginsByName(injectedNamesToPlugins)', 'Injects plugins to be used by `EventPluginHub`. The plugin names must be in the ordering injected by `injectEventPluginOrder`. Plugins can be injected as part of page initialization or on-the-fly.'),
          d('getPluginModuleForEvent(event)', 'Looks up the plugin for the supplied event.'),
          d('_resetEventPlugins()', 'Exposed for unit testing.'),
        ]),
        c('EventPropagators', "'A small set of propagation patterns, each of which will accept a small amount of information, and generate a set of  dispatch ready event objects which re sets of events that have already been annotated with a set of dispatched listener functions/ids. The API is designed this way to discourage these propagation strategies from actually executing the dispatches, since we always want to collect the entire set of dispatches before executing event a single one.'", [
          d('accumulateTwoPhaseDispatches', "'Doc for a single Dispatcher: Collect dispatches (must be entirely collected before dispatching - see unit tests). Lazily allocate the array to conserve memory.  We must loop through each event and perform the traversal for each one. We can not perform a single traversal for the entire collection of events because each event may have a different target.'"),
          d('accumulateDirectDispatches', "'Accumulates without regard to direction, does not look for phased registration names. Same as `accumulateDirectDispatchesSingle` but without requiring that the `dispatchMarker` be the same as the dispatched ID.'"),
          d('accumulateEnterLeaveDispatches'),
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