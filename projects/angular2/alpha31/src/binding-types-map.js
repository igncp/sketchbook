var n = diagrams.graph.generateNode,
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted');

// max existing: 19

diagrams.graph([
  n("class Binding", [0, ct(1, 'resolve() using new ResolvedBinding'), ct(2, 'resolve() using Key.get')], '/src/di/binding.ts'),
  n("class ResolvedBinding", [1, ctd(2, 'key')], '/src/di/binding.ts'),
  n("class Key", [2, 3], '/src/di/key.ts'),
  n("class KeyRegistry", 3, '/src/di/key.ts'),
  n("class Dependency", [4, cti(0), ctid(1, 'public dependencies: List<Dependency>'),
    ctd(2, 'key'), ctd(5, 'visibility')
  ], '/src/di/binding.ts'),
  n('class VisibilityMetadata', [5], '/src/di/metadata.ts; Specifies how injector should resolve a dependency.')
]);
