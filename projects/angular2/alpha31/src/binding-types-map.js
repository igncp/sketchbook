var n = diagrams.graph.generateNode,
  ct = function(nodesIds, text) {
    if (_.isString(nodesIds)) nodesIds = nodesIds.split(' ').map(Number);
    else if (_.isNumber(nodesIds)) nodesIds = [nodesIds];
    return diagrams.graph.mergeWithDefaultConnection({
      nodesIds: nodesIds,
      text: text
    });
  },
  cti = function() {
    var connection = ct.apply(this, arguments);
    connection.direction = 'in';
    return connection;
  },
  ctd = function() {
    var connection = ct.apply(this, arguments);
    connection.line = 'dotted';
    return connection;
  };

// max existing: 19

diagrams.graph([
  n("class Binding", [0, ct(1, 'resolve() using new ResolvedBinding'), ct(2, 'resolve() using Key.get')], '/src/di/binding.ts'),
  n("class ResolvedBinding", [1, ctd(2, 'public key: Key')], '/src/di/binding.ts'),
  n("class Key", [2, 3], '/src/di/key.ts'),
  n("class KeyRegistry", 3, '/src/di/key.ts'),
]);

