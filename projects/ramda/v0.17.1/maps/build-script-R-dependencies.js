var n = diagrams.graph.generateNode,
  nt = function() {
    var args = Array.prototype.slice.call(arguments);
    args[2] = args[2] || null;
    args[3] = args[3] ? args[3] + 's-t' : 's-t';
    return n.apply({}, args);
  },
  ct = function() {
    var args = Array.prototype.slice.call(arguments);
    args[1] = 'x' + args[1] + ' times';
    return diagrams.graph.generateConnectionWithText.apply({}, args);
  },
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in');

diagrams.graph([
  nt('logWithPrefix', [0, ct(19, 1)]),
  nt('warn', [1, ct(0, 1)]),
  nt('abort', [2, ct(0, 1), ct(20, 1), ct(21, 1)]),
  nt('filenameToIdentifier', [3, ct(22, 1)]),
  nt('identifierToFilename', [4, ct(20, 1), ct(23, 1), ct(24, 1), ct(25, 2), ct(26, 1), ct(27, 1)]),
  nt('parse', [5, ct(28, 1)]),
  nt('isModuleExportsExpr', 6),
  nt('isRequireExpr', 7),
  nt('warnIgnoredTopLevel', 8),
  nt('abortIfNotSorted', 9),
  nt('abortIfExportNotLast', 10),
  nt('abortIfDifferentRequireVar', 11),
  nt('abortIfEmptyBody', 12),
  nt('dependenciesOf', 13),
  nt('createDependencyGraph', 14),
  nt('orderDependencies', 15),
  nt('getModifiedSource', 16),
  nt('build', 17),
  nt('filenames', 18),
  n('R.curry', 19),
  n('R.pipe', 20),
  n('R.always', 21),
  n('R.partialRight', 22),
  n('R.ifElse', 23),
  n('R.test', 24),
  n('R.partial', 25),
  n('R.concat', 26),
  n('R.__', 27),
  n('R.memoize', 28),
]);

// isModuleExportsExpr
// R.allPass
// R.pathEq

// isRequireExpr
// R.allPass
// R.pathEq

// warnIgnoredTopLevel
// R.tap
// R.pipe
// R.chain
// R.ifElse
// R.propEq
// R.prop
// R.of
// R.reject
// R.either
// isModuleExportsExpr
// isRequireExpr
// R.map
// R.forEach

// abortIfNotSorted
// R.tap
// R.cond
// R.complement
// R.pipe
// R.pluck
// R.converge
// R.equals
// R.identity
// R.sortBy
// R.identity
// R.path
// R.concat
// abort

// abortIfExportNotLast
// R.tap
// R.cond
// R.complement
// R.pipe
// R.prop
// R.last
// isModuleExportsExpr
// R.path
// R.concat
// abort

// abortIfDifferentRequireVar
// R.tap
// R.forEach
// R.cond
// R.converge
// R.complement
// R.equals
// R.path
// R.pipe
// R.path
// R.replace
// R.replace
// R.toUpper
// abort


// abortIfEmptyBody
// R.tap
// R.cond
// R.pipe
// R.prop
// R.isEmpty
// R.path
// R.concat
// abort

// dependenciesOf
// R.pipe
// identifierToFilename
// parse
// R.prop
// warnIgnoredTopLevel
// R.takeWhile
// R.both
// R.propEq
// R.all
// isRequireExpr
// R.pluck
// R.map
// R.head
// abortIfNotSorted
// abortIfDifferentRequireVar,
// R.map
// R.path

// createDependencyGraph
// R.has
// dependenciesOf


// orderDependencies
// R.isEmpty
// R.all
// R.contains
// R.head
// R.tail
// R.append
// R.head
// R.append
// R.head
// R.tail
// R.sortBy
// R.identity
// R.keys

// getModifiedSource
// identifierToFilename
// abortIfEmptyBody
// abortIfExportNotLast
// R.last


// build
// R.pipe
// R.map
// filenameToIdentifier
// R.sortBy
// R.identity
// R.converge
// R.concat
// createDependencyGraph
// orderDependencies
// R.map
// getModifiedSource
// R.join
// R.pipe
// R.map
// R.converge
// R.concat
// R.replace
// R.always,
// R.replace


// filenames
// R.filter
// R.test
