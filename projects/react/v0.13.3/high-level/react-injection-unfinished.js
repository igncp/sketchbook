var n = diagrams.graph.generateNode,
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted');


// Starting from PooledClass

diagrams.graph([
  n('React Default Injection', [1, ct([2, 4])]),
  n('React Injection', [2, ct(3), ct(3), ct(3)]),
  n('XXX.injection', [3]),
  n('inject()', [4], '', 's-t'),
  n('React', [5, ct([4, 1])]),
]);
