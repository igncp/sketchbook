var n = diagrams.graph.generateNode,
  np = function() {
    var args = Array.prototype.slice.call(arguments);
    args[2] = '/src/di/binding.ts<br><strong>PRIVATE</strong>';
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
  nl("class Binding", [0, ct(1, 'resolve()'), ct(2, 'resolve()')], '/src/di/binding.ts'),
  nl("class ResolvedBinding", [1, ctd(2, 'key')], '/src/di/binding.ts'),
  nl("class Key", [2, 3], '/src/di/key.ts'),
  nl("class KeyRegistry", 3, '/src/di/key.ts'),
  nl("class Dependency", [4, cti(0), ctid(1, 'public dependencies: List<Dependency>'),
    ctd(2, 'key'), ctd(5, 'visibility')
  ], '/src/di/binding.ts'),
  nl('class VisibilityMetadata', [5], '/src/di/metadata.ts'),
  nl('function resolveForwardRef', [6, cti(0, 'resolve()'), cti(2, 'static get')], '/src/di/forward_ref.ts'),
  np('function _constructDependencies', [7, cti(0, 'resolve()'), ct(4, 'return'), ct(10, 'return'), ct(11, 'return')]),
  nl('function bind', [8, ct(9, 'return')], '/src/di/binding.ts'),
  nl('class BindingBuilder', [9, ct(0, 'toClass(), toValue(), toAlias(), toFactory()')], '/src/di/binding.ts'),
  np('function _dependenciesFor', [10, ct(4, 'fn type'), ct(11, 'return')], '/src/di/binding.ts'),
  np('function _extractToken', [11, ct(4, 'fn type'), ct([12, 6], 'return'), ct([13, 14, 15, 16, 17, 18, 19], 'indexof')], '/src/di/binding.ts'),
  np('function _createDependency', [12, ct(4, 'fn type')], '/src/di/binding.ts'),
  nl('class InjectMetadata', [13], '/src/di/metadata.ts'),
  nl('class InjectableMetadata', [14], '/src/di/metadata.ts'),
  nl('class OptionalMetadata', [15], '/src/di/metadata.ts'),
  nl('class SelfMetadata', [16], '/src/di/metadata.ts'),
  nl('class HostMetadata', [17], '/src/di/metadata.ts'),
  nl('class SkipSelfMetadata', [18], '/src/di/metadata.ts'),
  nl('class DependencyMetadata', [19], '/src/di/metadata.ts'),
  nl('class TypeLiteral', [20, cti(3, 'get()')], '/src/di/type_literal.ts'),
]);
