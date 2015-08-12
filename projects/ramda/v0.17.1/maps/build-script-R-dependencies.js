var n = diagrams.graph.generateNode,
  nt = function() {
    var args = Array.prototype.slice.call(arguments);
    args[2] = args[2] || null;
    args[3] = args[3] ? args[3] + 's-t' : 's-t';
    return n.apply({}, args);
  },
  ct = function() {
    var args = Array.prototype.slice.call(arguments);
    if (_.isArray(args[0])) return _.map(args[0], function(id) {
      var argsCopied = _.cloneDeep(args);
      argsCopied[0] = id;
      return ct.apply({}, argsCopied);
    });
    args[1] = 'x' + args[1] + ' time(s)';
    return diagrams.graph.generateConnectionWithText.apply({}, args);
  },
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in');

diagrams.graph([
  nt('logWithPrefix', [0, ct(19, 1)]),
  nt('warn', [1, ct(0, 1)]),
  nt('abort', [2, ct(0, 1), ct(20, 1), ct(21, 1)]),
  nt('filenameToIdentifier', [3, ct(22, 1)]),
  nt('identifierToFilename', [4, ct([20, 23, 24], 1), ct(25, 2), ct(26, 1), ct(27, 1)]),
  nt('parse', [5, ct(28, 1)]),
  nt('isModuleExportsExpr', [6, ct(29, 1), ct(30, 8)]),
  nt('isRequireExpr', [7, ct(29, 1), ct(30, 4)]),
  nt('warnIgnoredTopLevel', [8, ct([31, 20, 32, 23, 33, 34, 35, 36, 37, 6, 7, 38, 39], 1)]),
  nt('abortIfNotSorted', 9),
  nt('abortIfExportNotLast', 10),
  nt('abortIfDifferentRequireVar', 11),
  nt('abortIfEmptyBody', 12),
  nt('dependenciesOf', 13),
  nt('createDependencyGraph', [14, ct([40, 13], 1)]),
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
  n('R.allPass', 29),
  n('R.pathEq', 30),
  n('R.tap', 31),
  n('R.chain', 32),
  n('R.propEq', 33),
  n('R.prop', 34),
  n('R.of', 35),
  n('R.reject', 36),
  n('R.either', 37),
  n('R.map', 38),
  n('R.forEach', 39),
  n('R.has', 40),
]);

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
