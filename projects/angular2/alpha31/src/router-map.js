var n = diagrams.graph.generateNode,
  np = function() {
    var args = Array.prototype.slice.call(arguments);
    args[2] = args[2] + '<br><strong>PRIVATE</strong>';
    args[3] = 's-t';
    return n.apply({}, args);
  },
  nl = diagrams.graph.generateNodeWithTextAsTargetLink('api-overview'),
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted');

diagrams.graph([
  nl('class Router', [0, ctd(5, '_currentInstruction'), ct(5, '_canActivate(), _reuse(), commit()'),
    ctd(6, 'registry'), ctd(7, '_pipeline'), ctd(8, '_outlet')
  ], '/src/router/router.ts; mapped'),
  nl('class RootRouter extends Router', [1, ctd(0, '*extends'), ctd(9, '_location'), ct(9, 'constructor()')], '/src/router/router.ts; mapped'),
  np('class ChildRouter extends Router', [2, cti(0, 'childRouter()')], '/src/router/router.ts; mapped'),
  np('function splitAndFlattenLinkParams', [3, cti(0, 'generate()')], '/src/router/router.ts; mapped'),
  np('function canActivateOne', [4, ctid(0, '_canActivate()')], '/src/router/router.ts; mapped'),
  nl('class Instruction', [5, ctd(10, '_recognizer')], '/src/router/instruction.ts; mapped'),
  nl('class RouteRegistry', [6, ct(11, '_completeRouteMatch()'), ctd(12, '_rules'), ct(12, 'config()'), ctd(13, 'configFromComponent()'), ctd(5, '*multiple times (~20 in the file)')], '/src/router/route_registry.ts'),
  nl('class Pipeline', [7, ct(5, 'process()')], '/src/router/pipeline.ts; mapped'),
  nl('class RouterOutlet', [8, cti(0, 'registerOutlet()'), ct(14, '_activate()'), ct(5, '*multiple times (7 inside the class)'), ctd(0, 'childRouter'), ct(0, 'constructor(), _activate()')], '/src/router/router_outlet.ts'),
  nl('class Location', [9, ct(15, 'constructor()')], '/src/router/location.ts'),
  nl('class PathRecognizer', [10, ctd(16, 'handler')], '/src/router/path_recognizer.ts'),
  nl('class RouteMatch', 11, '/src/router/route_recognizer.ts'),
  nl('class RouteRecognizer', 12, '/src/router/route_recognizer.ts'),
  nl('class RouteConfig', 13, '/src/router/route_config_impl.ts'),
  nl('class RouteParams', 14, '/src/router/instruction.ts'),
  nl('class LocationStrategy', 15, '/src/router/location_strategy.ts'),
  nl('interface RouteHandler', 16, '/src/router/route_handler.ts'),
]);