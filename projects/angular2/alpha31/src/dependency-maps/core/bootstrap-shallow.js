var np = diagrams.graph.generatePrivateNode,
  nl = diagrams.graph.generateNodeWithTextAsTargetLink('../../api-overview'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted');

diagrams.graph([
  nl('function bootstrap', 0, '/src/core/application.ts'),
  nl('class Binding', [1, cti(0, '*argument')], '/src/di/binding.ts'),
  nl('class ApplicationRef', [2, cti(0, '*return')], '/src/core/application.ts'),
  np('function _createNgZone', [3, cti(0, 'var zone'), ct(13, 'DOM.logError(`${exce..'), ct(8, '*return value, new NgZone({...')], '/src/core/application.ts'),
  np('function _createAppInjector', [4, cti(0, 'var appInjector = _createAppInjector(...'), ct(1, '*argument bindings'), ct(9, '*return value, _rootInjector = Injector.resolveAndCreate')], '/src/core/application.ts'),
  nl('var appComponentRefPromiseToken', [5, cti(0, 'appInjector.get(appComponentRefPromiseToken)')], '/src/core/application_tokens.ts'),
  nl('function internalView', [6, cti(0, 'var appChangeDetector = internalView(...')], '/src/core/compiler/view_ref.ts'),
  nl('class LifeCycle', [7, cti(0, 'var lc = appInjector.get(LifeCycle);')], '/src/core/life_cycle/life_cycle.ts'),
  nl('class NgZone', [8, cti(4, '*argument zone')], '/src/core/zone/ng_zone.ts'),
  nl('class Injector', [9], "/src/di/injector.ts"),
  np('var _rootBindings', [10, cti(4, '_rootInjector = Injector.resolveAndCreate(_rootBindings);')], '/src/core/application.ts'),
  np('var _rootInjector', [11, cti(4, '_rootInjector = Injector.resolveAndCreate(_rootBindings);...; return _rootInjector.resolveAndCreateChild(mergedBindings);'), ctd(9, '_rootInjector: Injector')], '/src/core/application.ts'),
  np('function _injectorBindings', [12, cti(4, 'ListWrapper.concat(_injectorBindings(appComponentType), bindings)')], '/src/core/application.ts'),
  nl('var DOM', [13], '/src/dom/dom_adapter.ts'),
]);
