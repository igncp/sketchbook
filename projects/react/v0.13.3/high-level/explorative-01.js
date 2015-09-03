var n = diagrams.graph.generateNode,
  ct = diagrams.graph.generateConnectionWithText,
  connectionFnFactory = diagrams.graph.connectionFnFactory,
  cti = connectionFnFactory(ct, 'direction', 'in'),
  ctd = connectionFnFactory(ct, 'line', 'dotted'),
  ctid = connectionFnFactory(cti, 'line', 'dotted');


// Starting from PooledClass

diagrams.graph([
  n('React Component', [1, ct(2, 'changes with setState()'), ct(3)]),
  n('state', [2]),
  n('props', [3]),
  n('React Class', [4, ct(1, 'is an extension of React Component'), ct(6, 'expected class properties'), ct(7, 'used when is being mounted')]),
  n('mixins', [5, ct(4, 'are added if they pass the policy validation')]),
  n('React Class Interface', [6], '(mixins, statics, propTypes, contextTypes, childContextTypes, getDefaultProps, getInitialState, getChildContext, render, componentWillMount, componentDidMount, componentWillReceiveProps, shouldComponentUpdate, componentWillUpdate, componentDidUpdate, componentWillUnmount, updateComponent)'),
  n('React current owner', [7], '"The current owner is the component who should own any components that are currently being constructed."'),
]);
